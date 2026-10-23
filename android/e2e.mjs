// Controla el WebView real del emulador por CDP (APK de depuracion). Pruebas del tarot.
import { execSync } from 'node:child_process';
import fs from 'node:fs';
const EV = process.env.EVIDENCE || 'evidence';
const MODE = process.env.MODE || 'main';
const log = (...a) => console.log('[e2e]', ...a);
const sleep = ms => new Promise(r => setTimeout(r, ms));
const shot = n => fs.writeFileSync(`${EV}/${n}.png`, execSync('adb exec-out screencap -p', { maxBuffer: 1 << 26 }));
let tabs = null;
for (let i = 0; i < 12 && !tabs; i++) {
  try { tabs = await (await fetch('http://127.0.0.1:9222/json')).json(); }
  catch (e) { log('CDP no listo (' + i + ')'); await sleep(2000); }
}
if (!tabs) { log('SIN PAGINA DEPURABLE'); process.exit(1); }
const tab = tabs.find(t => t.type === 'page');
if (!tab) { log('SIN PAGINA DEPURABLE'); process.exit(1); }
log('pagina', tab.url);
const ws = new WebSocket(tab.webSocketDebuggerUrl);
await new Promise(r => (ws.onopen = r));
let id = 0; const pend = {};
ws.onmessage = m => { const d = JSON.parse(m.data); if (d.id && pend[d.id]) pend[d.id](d);
  if (d.method === 'Runtime.exceptionThrown') log('EXC', JSON.stringify(d.params.exceptionDetails).slice(0, 200)); };
const send = (method, params = {}) => new Promise(r => { const i = ++id; pend[i] = r; ws.send(JSON.stringify({ id: i, method, params })); });
const ev = async e => { const r = await send('Runtime.evaluate', { expression: e, awaitPromise: true, returnByValue: true }); return r.result.result?.value ?? JSON.stringify(r.result); };
await send('Runtime.enable');
const waitFor = async (expr, ms = 30000) => { for (let t = 0; t < ms; t += 1000) { try { if (await ev(expr) === true) return true; } catch {} await sleep(1000); } return false; };
// toque real (con gesto de usuario) en el centro de un elemento
const tap = async sel => {
  const p = JSON.parse(await ev(`(()=>{const e=document.querySelector(${JSON.stringify(sel)});if(!e)return 'null';e.scrollIntoView({block:'center'});const r=e.getBoundingClientRect();return JSON.stringify({x:r.left+r.width/2,y:r.top+r.height/2})})()`));
  if (!p) return false;
  for (const type of ['mousePressed', 'mouseReleased']) await send('Input.dispatchMouseEvent', { type, x: p.x, y: p.y, button: 'left', clickCount: 1 });
  return true;
};
await waitFor(`document.readyState==='complete'`, 30000);
if (MODE === 'main') {
  log('origen', await ev('location.protocol'));
  log('titulo', await ev('document.title'));
  log('copia empaquetada: app.js SHA', await ev(`fetch('app.js').then(r=>r.text()).then(async t=>{const h=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(t));return [...new Uint8Array(h)].map(b=>b.toString(16).padStart(2,'0')).join('')}).catch(e=>'sin-fetch')`));
  log('sonido nuevo presente (Roce continuo)', await ev(`scheduleSlide.toString().includes('sin(Math.PI')`));
  log('contexto de audio antes del gesto', await ev(`String(sound.ctx)`));
  await ev(`window.__n=0;const o=AudioContext.prototype.createBufferSource;AudioContext.prototype.createBufferSource=function(){window.__n++;return o.apply(this,arguments)};'ok'`);
  await ev(`document.getElementById('query').value='Como ira este mes'; 'ok'`);
  log('barajar', await tap('#consult-form button[type=submit], #consult-form .button'));
  log('cartas en la mesa', await waitFor(`document.querySelectorAll('#tarot-mat button').length>=3`, 30000));
  shot('02-cartas-boca-abajo');
  log('fuentes de audio antes de revelar', await ev('window.__n'));
  for (let i = 0; i < 3; i++) {
    await tap(`#tarot-mat button:not(.is-flipped)`); await sleep(1500);
    log('revelada', i + 1, 'fuentes', await ev('window.__n'), 'ctx', await ev('sound.ctx&&sound.ctx.state'));
  }
  log('revelaciones con sonido: ' + (await ev('window.__n')) + ' de 3');
  log('sintesis visible', await waitFor(`!document.getElementById('synthesis').hidden`, 20000));
  await sleep(1500); shot('03-lectura-completa');
  log('fuentes con silencio antes', await ev('window.__n'));
  await tap('#sound-toggle'); await sleep(500);
  log('boton de sonido', await ev(`document.getElementById('sound-toggle').textContent`));
  await tap('#reset'); await sleep(800);
  await ev(`document.getElementById('query').value='Otra consulta'; 'ok'`);
  await tap('#consult-form button[type=submit], #consult-form .button');
  await waitFor(`document.querySelectorAll('#tarot-mat button').length>=3`, 30000);
  const before = await ev('window.__n');
  for (let i = 0; i < 3; i++) { await tap(`#tarot-mat button:not(.is-flipped)`); await sleep(1200); }
  log('silencio: fuentes nuevas con sonido apagado', (await ev('window.__n')) - before);
  log('silencio guardado', await ev(`localStorage.getItem('tarot-sound')`));
  shot('04-silencio');
  log('pavesas canvas', await ev(`(()=>{const c=document.getElementById('embers');return !!c&&getComputedStyle(c).display!=='none'})()`));
  log('fuentes tipograficas cargadas', await ev(`document.fonts.check("16px 'Fell'")`));
  process.exit(0);
}
if (MODE === 'get') { log('silencio tras reinicio', await ev(`localStorage.getItem('tarot-sound')`)); log('boton tras reinicio', await ev(`document.getElementById('sound-toggle').textContent`)); process.exit(0); }
if (MODE === 'offline') { log('sin red: renderiza', await ev(`document.title.includes('Arrels')`)); log('sin red: imagen del dorso', await ev(`new Promise(r=>{const i=new Image();i.onload=()=>r(true);i.onerror=()=>r(false);i.src='assets/cards/back.webp'})`)); process.exit(0); }
process.exit(1);
