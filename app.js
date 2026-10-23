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
/* ---------- Lectura local: pregunta + cartas ----------
   Todo se calcula en el dispositivo. Los textos de CARD_READING son una
   lectura simbólica escrita a partir de la descripción de cada carta en DECK_DATA;
   no son datos sobre quien pregunta. */
const CARD_READING = {
  '0':    { grp: 'inicio',  mot: ['origen'],         g: 'cuidar lo que todavía no tiene forma',            core: 'habla de un comienzo protegido, de algo completo que aún no ha nacido',        ask: '¿Qué hay aquí que todavía está en reposo y merece cuidado antes de empujarlo?' },
  'I':    { grp: 'hacer',   mot: ['oficio'],         g: 'trabajar despacio con materiales honestos',       core: 'habla del oficio como forma de atención: voluntad, herramientas y materia',     ask: '¿Qué podrías hacer con las manos, hoy y a escala pequeña, para que esto tenga forma?' },
  'II':   { grp: 'cuidar',  mot: ['hilo', 'noche'],  g: 'remendar en silencio, con constancia',            core: 'habla de lo que se teje sin ruido: intuición, saber guardado y paciencia',      ask: '¿Qué intuición llevas guardada y aún no has dejado salir?' },
  'III':  { grp: 'hacer',   mot: ['voz', 'pájaro'],  g: 'decir con claridad una verdad pequeña',           core: 'habla de una expresión que brota sin permiso, de algo propio que pide aire',    ask: '¿Qué te falta decir, escribir o mostrar con tus propias palabras?' },
  'IV':   { grp: 'cuidar',  mot: ['pájaro'],         g: 'proteger sin encerrar',                           core: 'habla de amparo y vigilancia amable: quién cuida de lo frágil',                  ask: '¿Qué necesita protección aquí, y cómo cuidarlo sin encerrarlo?' },
  'V':    { grp: 'cuidar',  mot: ['umbral'],         g: 'esperar a que la puerta correcta esté lista',     core: 'habla de umbrales, tradición y secretos bien guardados',                         ask: '¿Qué puerta está a punto de abrirse y quién o qué guarda la llave?' },
  'VI':   { grp: 'cuidar',  mot: ['pájaro', 'hilo', 'origen'], g: 'tejer refugio con lo que hay a mano',   core: 'habla de refugio, de elegir tejer con alguien y de lo que se incuba en compañía', ask: '¿Con qué materiales y con qué compañía podrías hacer refugio aquí?' },
  'VII':  { grp: 'hacer',   mot: ['pájaro'],         g: 'elegir el camino y sostenerlo',                   core: 'habla de dirección y voluntad: elegir rumbo aunque algo tire hacia otro lado',   ask: '¿Qué rumbo eliges, y qué fuerzas tiran en otra dirección?' },
  'VIII': { grp: 'hacer',   mot: ['coral'],          g: 'crecer despacio, sin romperse',                   core: 'habla de una fuerza blanda que se ramifica poco a poco',                         ask: '¿Qué está creciendo despacio y no necesita prisa para ser fuerte?' },
  'IX':   { grp: 'mirar',   mot: ['luz', 'hilo', 'noche'], g: 'dar solo el próximo paso',                  core: 'habla de una luz frágil que guía un único paso, sin enseñar todo el camino',     ask: '¿Cuál es la próxima piedra, aunque no veas el resto del camino?' },
  'X':    { grp: 'ciclo',   mot: ['hilo'],           g: 'aceptar el giro y empezar a hilarlo',             core: 'habla de ciclos, herencia y azar: lo que fue se hila en lo que viene',           ask: '¿Qué ciclo se está cerrando o girando, y qué hilo podrías recoger de él?' },
  'XI':   { grp: 'ciclo',   mot: ['piedra', 'agua'], g: 'pesar con firmeza y con ternura',                 core: 'habla de equilibrio y de justicia: lo que decides deja huella',                  ask: '¿Qué estás pesando, y qué decisión sería firme y tierna a la vez?' },
  'XII':  { grp: 'mirar',   mot: ['piedra'],         g: 'suspender a propósito y mirar de otra manera',    core: 'habla de una pausa fértil: lo que parece quieto sueña otra cosa',                ask: '¿Qué pasaría si dejaras de forzar y miraras esto desde la quietud?' },
  'XIII': { grp: 'soltar',  mot: ['origen', 'coral'],g: 'dejar que una forma termine para que salga lo que contenía', core: 'habla de una cáscara que cede y de algo que empieza al romperse', ask: '¿Qué forma está terminando y qué contenía que ahora puede salir?' },
  'XIV':  { grp: 'ciclo',   mot: ['hilo'],           g: 'avanzar con medida y atención, no con miedo',     core: 'habla de cruzar un abismo con un solo hilo: medida, mezcla y equilibrio',        ask: '¿Dónde pide esto más medida y menos miedo?' },
  'XV':   { grp: 'ciclo',   mot: ['pájaro'],         g: 'nombrar el peso para empezar a soltarlo',         core: 'habla de lo que se lleva puesto: juicios y costumbres que quizá no son propios', ask: '¿Qué voces ajenas pesan aquí, y cuáles son realmente tuyas?' },
  'XVI':  { grp: 'soltar',  mot: ['piedra', 'origen'], g: 'mirar lo que la grieta deja ver',               core: 'habla de una estructura que se agrieta y revela lo que sostenía de verdad',      ask: '¿Qué grieta te está mostrando lo que de verdad sostenía esto?' },
  'XVII': { grp: 'mirar',   mot: ['noche', 'agua'],  g: 'sostener una esperanza quieta y suficiente',      core: 'habla de quietud, reflejo y un destello de intuición tras la noche cerrada',     ask: '¿Qué destello, pequeño pero claro, has visto cruzar el agua?' },
  'XVIII':{ grp: 'soltar',  mot: ['noche'],          g: 'dejar que la luz se lleve el peso',               core: 'habla de ligereza: la noche suelta plumas y lo que no se ve claro puede esperar', ask: '¿Qué peso podrías dejar caer, como una pluma, sin que se pierda nada?' },
  'XIX':  { grp: 'mirar',   mot: ['luz', 'coral', 'origen'], g: 'verlo todo a la luz, con alegría sencilla', core: 'habla de claridad que no quema y de una alegría sencilla',                      ask: '¿Qué se ve con claridad ahora, y qué te alegra de verlo?' },
  'XX':   { grp: 'inicio',  mot: ['pájaro', 'origen'], g: 'responder a lo que te llama',                   core: 'habla de una llamada que despierta y de volver a nacer con memoria',             ask: '¿Qué te llama, y qué harías si respondieras?' },
  'XXI':  { grp: 'cierre',  mot: ['coral', 'raíz'],  g: 'reunir origen y cielo en un solo árbol',          core: 'habla de lo que sostiene bajo tierra y de un ciclo que se reúne y cierra',       ask: '¿Qué de lo que ya tienes sostiene esto, y qué se completa con ello?' }
};

const GROUP_LINKS = {
  'soltar>inicio':  'Primero algo se suelta y luego algo empieza: la segunda carta parece nacer del hueco que deja la primera.',
  'soltar>hacer':   'Lo que se suelta en la primera da espacio a la acción de la segunda: hacer sin cargar con lo anterior.',
  'soltar>cuidar':  'Tras lo que se rompe o se suelta, la segunda carta pide refugio y cuidado, no prisa.',
  'soltar>mirar':   'Después de soltar, la segunda carta propone mirar con calma lo que ha quedado.',
  'soltar>cierre':  'Soltar prepara el cierre: lo que termina deja ver lo que de verdad se queda.',
  'inicio>hacer':   'Lo que empieza en la primera pasa a ser obra en la segunda: del impulso al trabajo.',
  'inicio>cuidar':  'Lo recién nacido de la primera necesita el amparo que ofrece la segunda.',
  'inicio>mirar':   'Tras el comienzo, la segunda carta pide parar a mirar hacia dónde va.',
  'hacer>mirar':    'Después de hacer, toca mirar lo hecho: la segunda carta pide claridad antes de seguir.',
  'hacer>cuidar':   'Lo que se hace en la primera necesita, en la segunda, ser cuidado para sostenerse.',
  'hacer>soltar':   'Hay esfuerzo en la primera y desprendimiento en la segunda: puede que parte de lo construido deba cambiar de forma.',
  'hacer>cierre':   'El trabajo de la primera apunta a un cierre en la segunda: lo hecho se reúne.',
  'cuidar>hacer':   'Lo que se cuida en la primera se vuelve acción en la segunda: de guardar a mover.',
  'cuidar>mirar':   'Del cuidado de la primera se pasa, en la segunda, a una mirada más clara.',
  'cuidar>soltar':  'Hay protección en la primera y desprendimiento en la segunda: cuidar también es saber cuándo soltar.',
  'cuidar>inicio':  'Lo que se guarda en la primera está listo para empezar en la segunda.',
  'mirar>hacer':    'Lo que se ve en la primera pide, en la segunda, ponerse en marcha.',
  'mirar>soltar':   'Lo que la primera deja ver hace posible soltar lo que muestra la segunda.',
  'mirar>cuidar':   'Tras mirar con claridad, la segunda carta pide cuidar lo visto.',
  'ciclo>soltar':   'El giro de la primera conduce a un desprendimiento en la segunda: el ciclo pide dejar algo atrás.',
  'ciclo>inicio':   'El ciclo de la primera desemboca, en la segunda, en un comienzo.',
  'ciclo>hacer':    'Lo que se pesa o se equilibra en la primera se convierte en acción en la segunda.',
  'ciclo>mirar':    'Tras pesar y girar, la segunda carta pide claridad.',
  'ciclo>cuidar':   'El giro de la primera deja a la segunda la tarea de cuidar lo que queda.',
  'ciclo>cierre':   'El ciclo de la primera llega, en la segunda, a su cierre.',
  'cierre>inicio':  'Lo que cierra en la primera abre otra vuelta en la segunda.'
};
const MOTIF_LABEL = {
  origen: 'el huevo y lo que aún está por nacer', hilo: 'el hilo y el tejido', 'pájaro': 'los pájaros y sus voces',
  noche: 'la noche', luz: 'la luz', coral: 'el coral', 'raíz': 'las raíces', piedra: 'la piedra', agua: 'el agua',
  voz: 'la voz', oficio: 'el oficio', umbral: 'el umbral'
};

/* Tipo y tema de la pregunta, solo a partir de las palabras escritas. */
function analyseQuery(q) {
  const t = ' ' + q.toLowerCase().replace(/[¿?¡!.,;:()«»"]/g, ' ') + ' ';
  let type = 'open';
  if (/\b(por qu[eé]|qu[eé] me impide|qu[eé] bloquea|qu[eé] me frena|para qué)\b/.test(t)) type = 'why';
  else if (/\b(cu[aá]ndo|cu[aá]nto tiempo)\b/.test(t)) type = 'when';
  else if (/\b(c[oó]mo|de qu[eé] manera|qu[eé] puedo hacer)\b/.test(t)) type = 'how';
  else if (/\b(deber[ií]a|conviene|merece la pena|decidir|elegir|aceptar|quedarme|irme|tengo que decidir)\b/.test(t) || /\bo\b.*\bno\b/.test(t)) type = 'decision';
  else if (/\b(qu[eé]|cu[aá]l|cu[aá]les|qui[eé]n)\b/.test(t)) type = 'what';
  const lex = ['trabaj', 'emple', 'carrera', 'proyect', 'negocio', 'estudi', 'oficio', 'pareja', 'amor', 'amist', 'amig', 'famil',
    'relaci', 'hogar', 'casa', 'mudanza', 'cambio', 'futuro', 'dinero', 'ahorr', 'creativ', 'arte', 'escrib', 'música', 'musica',
    'salud', 'descans', 'miedo', 'decisi', 'raíces', 'raices', 'camino', 'viaje', 'libertad', 'confianza', 'ciudad', 'casa'];
  const words = t.trim().split(/\s+/);
  const kw = words.find(w => w.length > 3 && lex.some(x => w.indexOf(x) === 0)) || '';
  return { type, kw };
}
function hashSeed(str) { let h = 2166136261; for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }
function pick(arr, seed) { return arr[seed % arr.length]; }
function lowerFirst(s) { return s.charAt(0).toLowerCase() + s.slice(1); }
function cardLabel(c) { return `«${c.name}» (${c.identifier}, ${c.alternateName})`; }

function localInterpretation(prompt, cardContext) {
  const n = cardContext.length;
  const seed = hashSeed(prompt + '|' + cardContext.map(c => c.identifier).join(','));
  const { type, kw } = analyseQuery(prompt);
  const ctx = kw ? `lo que preguntas sobre «${kw}»` : 'lo que preguntas';
  const cards = cardContext.map(c => Object.assign({}, c, CARD_READING[c.identifier] || { grp: 'mirar', mot: [], g: 'mirar la imagen con calma', core: firstSentence(c.description), ask: '¿Qué te dice esta imagen sobre lo que preguntas?' }));
  const paras = [];

  /* 1. Cómo se lee la pregunta */
  const NUM = { 2: 'dos', 3: 'tres', 4: 'cuatro', 5: 'cinco' };
  const nw = NUM[n] || String(n);
  const unit = n === 1 ? 'la carta como una sola mirada' : `las ${nw} cartas como ${nw} miradas`;
  const frames = {
    decision: [`Tu pregunta pide decidir. Las cartas no eligen por ti: sirven para ver qué pide cada lado. Leeré ${unit} sobre la decisión.`],
    how:      [`Tu pregunta busca un «cómo». Leeré ${n === 1 ? 'la carta como un gesto posible' : 'las cartas como pasos de un camino'}, de lo que sostiene a lo que se abre.`],
    why:      [`Tu pregunta busca una causa. Leeré ${n === 1 ? 'la carta como una capa' : 'las cartas como capas'}: lo que sostiene, lo que aflora y lo que se puede mover.`],
    when:     [`Tu pregunta busca un «cuándo». Las cartas no dan fechas; muestran qué clima pide cada momento del proceso.`],
    what:     [`Tu pregunta busca una respuesta concreta. Leeré ${unit}, cada una como una respuesta parcial.`],
    open:     [`Tu consulta es abierta. Leeré ${unit} sobre ella.`]
  };
  const kwNote = kw ? ` Parto de la palabra «${kw}» que aparece en lo que escribiste, sin suponer nada más sobre tu situación.` : '';
  paras.push(`Tu consulta: «${prompt}».`);
  paras.push(pick(frames[type], seed) + kwNote);

  /* 2. Cada carta, en su posición, aplicada a la pregunta */
  const lead = {
    'Raíz': c => `Como Raíz, ${cardLabel(c)} muestra de dónde parte ${ctx}: ${c.core}.`,
    'Tronco': c => `En el Tronco, ${cardLabel(c)} describe cómo se presenta ahora ${ctx}: ${c.core}.`,
    'Copa': c => `En la Copa, ${cardLabel(c)} apunta a lo que puede abrirse en ${ctx}: ${c.core}.`
  };
  cards.forEach(c => {
    const l = lead[c.role] ? lead[c.role](c) : `Como carta única, ${cardLabel(c)} responde a ${ctx} con una imagen: ${c.core}.`;
    paras.push(`${l} ${c.ask}`);
  });

  /* 3. Relaciones entre cartas */
  if (n > 1) {
    const rel = [];
    for (let i = 0; i < n - 1; i++) {
      const a = cards[i], b = cards[i + 1];
      const key = a.grp + '>' + b.grp;
      let s;
      if (a.grp === b.grp) s = `${a.role} y ${b.role} comparten el mismo tono: las dos hablan de ${a.grp === 'cuidar' ? 'cuidar' : a.grp === 'hacer' ? 'hacer' : a.grp === 'mirar' ? 'mirar con calma' : a.grp === 'soltar' ? 'soltar' : a.grp === 'ciclo' ? 'ciclos y equilibrio' : a.grp === 'inicio' ? 'empezar' : 'cerrar'}, así que se refuerzan.`;
      else if (GROUP_LINKS[key]) s = `De ${a.role} a ${b.role}: ${lowerFirst(GROUP_LINKS[key]).replace('la primera carta', 'la carta de ' + a.role).replace('la primera', a.role).replace('la segunda carta', 'la carta de ' + b.role).replace('la segunda', b.role)}`;
      else s = `De ${a.role} a ${b.role} cambia el gesto: de ${a.g} a ${b.g}. Tu pregunta puede estar justo en ese paso.`;
      rel.push(s);
    }
    const shared = [];
    for (let i = 0; i < n; i++) for (let j = i + 1; j < n; j++) cards[i].mot.forEach(m => { if (cards[j].mot.indexOf(m) >= 0 && shared.indexOf(m) < 0) shared.push(m); });
    if (shared.length) rel.push(`Según sus textos, las cartas comparten un motivo: ${shared.slice(0, 2).map(m => MOTIF_LABEL[m]).join(' y ')} reaparece${shared.length > 1 ? 'n' : ''} en más de una, como si se respondieran entre sí.`);
    paras.push(rel.join(' '));
  }

  /* 4. Cierre */
  const first = cards[0], last = cards[n - 1];
  let closing;
  if (n === 1) {
    closing = `Si te llevas una sola idea ${kw ? `para lo que preguntas sobre «${kw}»` : 'para lo que preguntas'}, que sea esta: ${first.g}.`;
  } else {
    const path = `primero ${cards[0].g}, después ${cards[1].g}` + (n > 2 ? `, y por último ${cards[n - 1].g}` : '');
    const endings = {
      decision: `Ninguna carta dice «sí» o «no». Ante tu decisión, fíjate en qué opción se parece más a lo que propone la Copa (${last.g}) y cuál a lo que ya sostiene la Raíz (${first.g}).`,
      how: `Un camino posible, en orden: ${path}.`,
      why: `Si buscas una causa, mira la distancia entre ${first.role} y ${last.role}: de ${first.g} a ${last.g}. Ahí puede estar lo que se mueve.`,
      when: `No hay fecha en estas cartas, solo un orden: ${path}. El momento llega cuando el paso anterior está hecho.`,
      what: `Si junto las respuestas en una: ${path}.`,
      open: `Leídas en conjunto, el recorrido es este: ${path}.`
    };
    closing = endings[type] + (type === 'why' ? ` Un paso pequeño: ${last.g}.` : '');
  }
  paras.push(closing);
  paras.push('Es una lectura simbólica a partir de los textos de la baraja y de las palabras que escribiste. No predice ni sabe nada de ti más allá de eso: úsala como invitación a pensar.');
  return { paragraphs: paras };
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
