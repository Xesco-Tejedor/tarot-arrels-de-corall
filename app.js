/* Arrels de corall, nits de plata - Tarot de los 22 arcanos mayores */
'use strict';

const DECK_DATA = [
  {
    "@type": "Thing",
    "identifier": "0",
    "name": "Ou d'alabastre",
    "alternateName": "El Loco",
    "image": "assets/cards/00-ou-dalabastre.webp",
    "description": "Lo que aún no ha nacido y ya es completo. Un comienzo protegido, una idea en reposo: el salto antes del primer paso. Invita a cuidar lo que todavía no tiene forma.",
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "invertida",
        "value": "Prisa por romper la cáscara."
      }
    ]
  },
  {
    "@type": "Thing",
    "identifier": "I",
    "name": "Mans de fusta",
    "alternateName": "El Mago",
    "image": "assets/cards/01-mans-de-fusta.webp",
    "description": "El oficio como forma de atención. Manos que saben: voluntad, herramientas y materia puestas a trabajar. Hacer despacio, con materiales honestos, hasta que una pieza pequeña tenga alma."
  },
  {
    "@type": "Thing",
    "identifier": "II",
    "name": "Costurera nocturna",
    "alternateName": "La Sacerdotisa",
    "image": "assets/cards/02-costurera-nocturna.webp",
    "description": "Remendar la noche con paciencia. Lo que se teje en silencio mientras otros duermen: intuición, misterio, saber guardado. Constancia y cuidado como forma de magia."
  },
  {
    "@type": "Thing",
    "identifier": "III",
    "name": "El cant de l'ocell",
    "alternateName": "La Emperatriz",
    "image": "assets/cards/03-el-cant-de-locell.webp",
    "description": "Expresión que brota sin permiso. Crear y decir lo propio con claridad y belleza: una canción pendiente, una verdad pequeña que pide aire."
  },
  {
    "@type": "Thing",
    "identifier": "IV",
    "name": "El guardià dels ocells",
    "alternateName": "El Emperador",
    "image": "assets/cards/04-el-guardia-dels-ocells.webp",
    "description": "Proteger sin encerrar. Amparo, orden y vigilancia amable: quién cuida de lo frágil, y quién cuida de quien cuida."
  },
  {
    "@type": "Thing",
    "identifier": "V",
    "name": "El bec de la clau",
    "alternateName": "El Hierofante",
    "image": "assets/cards/05-el-bec-de-la-clau.webp",
    "description": "La llave la tiene quien sabe esperar. Umbral, tradición, secreto bien guardado: qué puerta pequeña está lista y quién custodia la llave."
  },
  {
    "@type": "Thing",
    "identifier": "VI",
    "name": "Niu de fils",
    "alternateName": "Los Enamorados",
    "image": "assets/cards/06-niu-de-fils.webp",
    "description": "Refugio hecho de lo que hay a mano. Elegir tejer con alguien: hogar, cobijo, lo que se incuba en compañía."
  },
  {
    "@type": "Thing",
    "identifier": "VII",
    "name": "El carro de petxina",
    "alternateName": "El Carro",
    "image": "assets/cards/07-el-carro-de-petxina.webp",
    "description": "Una concha, dos pájaros y unas riendas de plata. Dirección y voluntad: elegir el camino y sostenerlo, incluso cuando tiran en direcciones distintas.",
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "invertida",
        "value": "Fuerza sin rumbo."
      }
    ]
  },
  {
    "@type": "Thing",
    "identifier": "VIII",
    "name": "Branca de corall",
    "alternateName": "La Fuerza",
    "image": "assets/cards/08-branca-de-corall.webp",
    "description": "Un árbol que crece bajo el mar de lo cotidiano. La fuerza blanda que no se rompe: belleza que se ramifica despacio, en pequeño y en plata."
  },
  {
    "@type": "Thing",
    "identifier": "IX",
    "name": "Estel de la foscor",
    "alternateName": "El Ermitaño",
    "image": "assets/cards/09-estel-de-la-foscor.webp",
    "description": "Una luz tejida que guía un solo paso. No se ve todo el camino, solo la próxima piedra: retirarse para ver mejor. Confianza en una guía frágil y suficiente."
  },
  {
    "@type": "Thing",
    "identifier": "X",
    "name": "La filadora de cabell",
    "alternateName": "La Rueda de la Fortuna",
    "image": "assets/cards/10-la-filadora-de-cabell.webp",
    "description": "La rueca no para: lo que has sido se hila en lo que viene. Ciclos, herencia y azar. Aceptar el giro es empezar a hilarlo."
  },
  {
    "@type": "Thing",
    "identifier": "XI",
    "name": "El sospir de pedra",
    "alternateName": "La Justicia",
    "image": "assets/cards/11-el-sospir-de-pedra.webp",
    "description": "Dos piedras en equilibrio sobre el agua. Pesar con justicia es sostener firmeza y ternura a la vez: lo que decides deja huella, que sea recta."
  },
  {
    "@type": "Thing",
    "identifier": "XII",
    "name": "La pedra que somia",
    "alternateName": "El Colgado",
    "image": "assets/cards/12-la-pedra-que-somia.webp",
    "description": "El sueño de lo que parece quieto. Suspenderse a propósito: reposo fértil, otra manera de mirar. No fuerces el despertar."
  },
  {
    "@type": "Thing",
    "identifier": "XIII",
    "name": "L'ou trencat",
    "alternateName": "La Muerte",
    "image": "assets/cards/13-lou-trencat.webp",
    "description": "La cáscara cede y empieza otra cosa. Ruptura que libera: una forma se acaba y lo que contenía sale con corona de coral."
  },
  {
    "@type": "Thing",
    "identifier": "XIV",
    "name": "Fil de plata",
    "alternateName": "La Templanza",
    "image": "assets/cards/14-fil-de-plata.webp",
    "description": "Cruzar sobre un abismo con un solo hilo. Medida, mezcla y equilibrio: avanza con atención, no con miedo."
  },
  {
    "@type": "Thing",
    "identifier": "XV",
    "name": "Collar de becs",
    "alternateName": "El Diablo",
    "image": "assets/cards/15-collar-de-becs.webp",
    "description": "Un collar de voces ajenas. Lo que pesa y se lleva puesto: juicios, costumbres y deseos que no son tuyos. Nombrar el peso es empezar a soltarlo."
  },
  {
    "@type": "Thing",
    "identifier": "XVI",
    "name": "La torre esquerdata",
    "alternateName": "La Torre",
    "image": "assets/cards/16-la-torre-esquerdata.webp",
    "description": "La torre de piedra y huevo se agrieta y entra el relámpago. Lo que se rompe muestra lo que sostenía de verdad: caída que limpia y revela."
  },
  {
    "@type": "Thing",
    "identifier": "XVII",
    "name": "Nit de plata",
    "alternateName": "La Estrella",
    "image": "assets/cards/17-nit-de-plata.webp",
    "description": "Quietud, reflejo y un destello. Después de la noche cerrada, una intuición cruza el agua como un pez de luz: esperanza quieta y suficiente."
  },
  {
    "@type": "Thing",
    "identifier": "XVIII",
    "name": "Plomes de lluna",
    "alternateName": "La Luna",
    "image": "assets/cards/18-plomes-de-lluna.webp",
    "description": "Ligereza que cae sin pérdida. La noche suelta plumas: sueño, intuición y lo que no se ve claro. Dejar que la luz se lleve el peso."
  },
  {
    "@type": "Thing",
    "identifier": "XIX",
    "name": "Sol d'or vell",
    "alternateName": "El Sol",
    "image": "assets/cards/19-sol-dor-vell.webp",
    "description": "Un sol de oro viejo sobre la copa del coral. Claridad que no quema: verlo todo a la luz, huevos que brillan como pequeños soles. Alegría sencilla."
  },
  {
    "@type": "Thing",
    "identifier": "XX",
    "name": "La crida dels ocells",
    "alternateName": "El Juicio",
    "image": "assets/cards/20-la-crida-dels-ocells.webp",
    "description": "Una llamada abre los huevos y los pájaros suben en espiral. Responder a lo que te llama: despertar, volver a nacer con memoria."
  },
  {
    "@type": "Thing",
    "identifier": "XXI",
    "name": "Arrels de corall",
    "alternateName": "El Mundo",
    "image": "assets/cards/21-arrels-de-corall.webp",
    "description": "Lo que sostiene está bajo tierra. Raíces rojas, copa de plata: origen y cielo en un solo árbol. La carta que cierra y reúne el ciclo."
  }
];

const BACK_IMAGE = 'assets/cards/back.webp';

/* Tiradas. Para añadir otra, basta con una entrada nueva aquí. */
const SPREADS = {
  three: {
    label: 'Tirada de tres (Raíz / Tronco / Copa)',
    positions: [
      { role: 'Raíz', sub: 'Pasado · lo que sostiene' },
      { role: 'Tronco', sub: 'Presente · lo que ocurre ahora' },
      { role: 'Copa', sub: 'Futuro · lo que se abre' }
    ]
  },
  one: {
    label: 'Una carta',
    positions: [{ role: 'Carta del día', sub: 'Lo que pide tu atención' }]
  }
  /* Cruz Celta: añadir 'celtic' con sus 10 posiciones y la clase mat--cross.
     La lógica de reparto y volteo ya es genérica. */
};
const DEFAULT_SPREAD = 'three';

/* Configuración opcional del motor externo. Vacío = 100% offline. */
const ENGINE_CONFIG = { url: '', apiKey: '' };

/* ---------- JSON-LD en <head> ---------- */
function injectJsonLd() {
  const graph = [{
    '@type': 'Game',
    name: 'Arrels de corall, nits de plata',
    description: 'Baraja artística y simbólica basada en los 22 arcanos mayores del tarot.',
    numberOfPlayers: '1',
    genre: 'Tarot / Divinación'
  }].concat(DECK_DATA);
  const el = document.createElement('script');
  el.type = 'application/ld+json';
  el.textContent = JSON.stringify({ '@context': 'https://schema.org', '@graph': graph });
  document.head.appendChild(el);
}

/* ---------- Utilidades ---------- */
function shuffle(array) { /* Fisher-Yates */
  const a = array.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const buf = new Uint32Array(1);
    (window.crypto || window.msCrypto).getRandomValues(buf);
    const j = buf[0] % (i + 1);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
const sleep = ms => new Promise(r => setTimeout(r, ms));
const $ = sel => document.querySelector(sel);

function el(tag, cls, text) {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (text != null) n.textContent = text;
  return n;
}
function reversedText(card) {
  const p = (card.additionalProperty || []).find(x => x.name === 'invertida');
  return p ? p.value : '';
}

/* ---------- Motor de interpretación ---------- */
function localInterpretation(prompt, cardContext) {
  const parts = cardContext.map(c => `${c.role}: «${c.name}» (${c.alternateName}). ${firstSentence(c.description)}`);
  const first = cardContext[0], last = cardContext[cardContext.length - 1];
  let closing;
  if (cardContext.length === 1) {
    closing = `Para tu pregunta, «${first.name}» pide una cosa: detenerte en esta imagen y ver qué te dice de lo que preguntas.`;
  } else {
    closing = `Leídas juntas, empiezan en «${first.name}» y se abren hacia «${last.name}». Mira qué hilo une las cartas con lo que preguntas y qué paso pequeño te proponen.`;
  }
  return { paragraphs: [`Tu consulta: «${prompt}».`].concat(parts, [closing]) };
}
function firstSentence(t) {
  const m = String(t).match(/^.*?[.!?](\s|$)/);
  return m ? m[0].trim() : t;
}

/* Si hay URL (y opcionalmente API key) válida, sobreescribe o extiende la lectura local.
   Si no, o si falla, devuelve la lectura local. No envía nada sin configuración explícita. */
async function fetchInterpretationEngine(prompt, cardContext) {
  const local = localInterpretation(prompt, cardContext);
  const url = (ENGINE_CONFIG.url || '').trim();
  if (!/^https:\/\//i.test(url)) return local;
  try {
    const headers = { 'Content-Type': 'application/json' };
    if (ENGINE_CONFIG.apiKey) headers.Authorization = 'Bearer ' + ENGINE_CONFIG.apiKey;
    const res = await fetch(url, {
      method: 'POST', headers,
      body: JSON.stringify({ prompt, cards: cardContext, local })
    });
    if (!res.ok) throw new Error('HTTP ' + res.status);
    const data = await res.json();
    const text = data.interpretation || data.text;
    if (!text) return local;
    const extra = String(text).split(/\n+/).filter(Boolean);
    return data.replace ? { paragraphs: extra } : { paragraphs: local.paragraphs.concat(extra) };
  } catch (e) {
    return local;
  }
}

/* ---------- Estado de la UI ---------- */
const state = { busy: false, drawn: [], flipped: 0, query: '', spread: DEFAULT_SPREAD };

function fillSpreadSelect() {
  const sel = $('#spread');
  Object.keys(SPREADS).forEach(k => {
    const o = el('option', null, SPREADS[k].label);
    o.value = k;
    sel.appendChild(o);
  });
  sel.value = DEFAULT_SPREAD;
}

function preload() {
  [BACK_IMAGE].concat(DECK_DATA.map(c => c.image)).forEach(src => { const i = new Image(); i.src = src; });
}

async function startConsult(ev) {
  ev.preventDefault();
  if (state.busy) return;
  const query = $('#query').value.trim();
  const err = $('#query-error');
  if (!query) { err.hidden = false; $('#query').focus(); return; }
  err.hidden = true;
  state.busy = true;
  state.query = query;
  state.spread = $('#spread').value;
  const spread = SPREADS[state.spread];

  $('#phase-input').hidden = true;
  $('#phase-reading').hidden = false;
  $('#reading-query').textContent = '«' + query + '»';
  $('#synthesis').hidden = true;
  $('#reset').hidden = true;
  $('#reading-hint').textContent = 'Barajando…';

  const mat = $('#tarot-mat');
  mat.innerHTML = '';
  mat.className = 'mat is-shuffling' + (spread.positions.length === 1 ? ' mat--one' : '');
  const deck = el('div', 'shuffle-deck');
  for (let i = 0; i < 5; i++) deck.appendChild(el('div', 'shuffle-card'));
  mat.appendChild(deck);

  state.drawn = shuffle(DECK_DATA).slice(0, spread.positions.length);
  state.flipped = 0;
  await sleep(1900);

  mat.className = 'mat' + (spread.positions.length === 1 ? ' mat--one' : '') + (spread.positions.length > 3 ? ' mat--cross' : '');
  mat.innerHTML = '';
  const cards = spread.positions.map((pos, i) => buildSlot(pos, state.drawn[i], i));
  cards.forEach(s => mat.appendChild(s.slot));
  for (let i = 0; i < cards.length; i++) {
    await sleep(380); /* stagger */
    cards[i].button.classList.add('is-dealt');
  }
  $('#reading-hint').textContent = 'Toca cada carta para descubrirla.';
  state.busy = false;
}

function buildSlot(pos, card, index) {
  const slot = el('div', 'slot');
  slot.appendChild(el('p', 'slot__role', pos.role));
  slot.appendChild(el('p', 'slot__sub', pos.sub));

  const button = el('button', 'card');
  button.type = 'button';
  button.setAttribute('aria-label', `Carta ${index + 1}, ${pos.role}, boca abajo. Toca para descubrir.`);
  const inner = el('div', 'card__inner');
  const back = el('div', 'card__face card__face--back');
  const bi = el('img'); bi.src = BACK_IMAGE; bi.alt = 'Dorso de la baraja'; back.appendChild(bi);
  const front = el('div', 'card__face card__face--front');
  const fi = el('img'); fi.src = card.image; fi.alt = `${card.identifier} ${card.alternateName}: ${card.name}`; front.appendChild(fi);
  inner.appendChild(back); inner.appendChild(front);
  button.appendChild(inner);
  slot.appendChild(button);

  const info = el('div', 'slot__info');
  slot.appendChild(info);

  button.addEventListener('click', () => {
    if (button.classList.contains('is-flipped')) return;
    button.classList.add('is-flipped');
    button.setAttribute('aria-label', `${card.name}, ${card.alternateName}`);
    info.appendChild(el('p', 'slot__number', card.identifier));
    info.appendChild(el('h3', 'slot__name', card.name));
    info.appendChild(el('p', 'slot__alt', card.alternateName));
    const text = el('div', 'slot__text');
    text.appendChild(el('p', null, card.description));
    const rev = reversedText(card);
    if (rev) text.appendChild(el('p', 'rev', 'Invertida: ' + rev));
    info.appendChild(text);
    setTimeout(() => text.classList.add('is-visible'), 700);
    state.flipped++;
    if (state.flipped === state.drawn.length) finishReading();
    else $('#reading-hint').textContent = `Faltan ${state.drawn.length - state.flipped} por descubrir.`;
  });
  return { slot, button };
}

async function finishReading() {
  $('#reading-hint').textContent = '';
  const spread = SPREADS[state.spread];
  const ctx = state.drawn.map((c, i) => ({
    role: spread.positions[i].role, identifier: c.identifier, name: c.name,
    alternateName: c.alternateName, description: c.description
  }));
  await sleep(1400);
  const result = await fetchInterpretationEngine(state.query, ctx);
  const box = $('#synthesis-text');
  box.innerHTML = '';
  result.paragraphs.forEach(p => box.appendChild(el('p', null, p)));
  $('#synthesis').hidden = false;
  $('#reset').hidden = false;
  $('#synthesis').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function reset() {
  $('#phase-reading').hidden = true;
  $('#phase-input').hidden = false;
  $('#query').value = '';
  $('#query').focus();
}

document.addEventListener('DOMContentLoaded', () => {
  injectJsonLd();
  fillSpreadSelect();
  preload();
  $('#consult-form').addEventListener('submit', startConsult);
  $('#reset').addEventListener('click', reset);
});
