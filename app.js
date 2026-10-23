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

/* Temas que el motor reconoce por las palabras escritas (raíces léxicas) y, para cada tema,
   qué propone cada familia de cartas. Es un motor local de reglas: no entiende frases abiertas,
   solo reconoce estos temas; fuera de ellos usa el gesto propio de cada carta. */
const THEMES = [
  ['trabajo', 'el trabajo', ['trabaj', 'emple', 'carrera', 'proyect', 'negocio', 'estudi', 'oficio', 'empres', 'jefe']],
  ['vinculo', 'esa relación', ['pareja', 'amor', 'amist', 'amig', 'famil', 'relaci', 'herman', 'padre', 'madre', 'hij']],
  ['hogar', 'el lugar donde vives', ['hogar', 'casa', 'mudanza', 'ciudad', 'piso', 'vivir']],
  ['dinero', 'el dinero', ['dinero', 'ahorr', 'econom', 'deuda', 'sueldo']],
  ['creacion', 'lo que quieres crear', ['creativ', 'arte', 'escrib', 'música', 'musica', 'libro', 'pintar', 'diseñ']],
  ['cuerpo', 'tu descanso y tu ánimo', ['salud', 'descans', 'miedo', 'ansied', 'cansanc', 'estr\u00e9s', 'estres']],
  ['confianza', 'tu confianza', ['confianza', 'libertad', 'autoestima', 'seguridad']],
  ['cambio', 'el cambio', ['cambio', 'futuro', 'camino', 'viaje', 'decisi', 'raíces', 'raices']]
];
/* Cada tema usa una de cuatro lentes. Para cada carta hay una frase por lente, escrita
   a partir de la descripción de esa carta y de ninguna otra. */
const THEME_LENS = { trabajo: 'obra', dinero: 'obra', creacion: 'obra', vinculo: 'vinculo', hogar: 'rumbo', cuerpo: 'interior', confianza: 'interior', cambio: 'rumbo' };
const CARD_LENS = {
  '0':    { obra: 'cuidar la idea en reposo sin forzarla todavía a tener forma', vinculo: 'cuidar lo que aún no ha nacido entre vosotros, sin apurarlo', interior: 'tratar lo frágil que empieza en ti como algo ya completo, sin exigirle', rumbo: 'proteger el comienzo: el salto está antes del primer paso' },
  'I':    { obra: 'trabajar despacio, con materiales honestos, hasta que una pieza pequeña tenga alma', vinculo: 'poner atención con las manos: hacer algo concreto en vez de solo hablarlo', interior: 'usar el oficio de las manos como forma de atención y de calma', rumbo: 'poner voluntad, herramientas y materia a trabajar en un primer paso concreto' },
  'II':   { obra: 'avanzar con constancia en silencio, en lo que se teje sin que nadie lo vea', vinculo: 'cuidar con paciencia y guardar lo que sabes, sin forzarlo a salir', interior: 'fiarte de la intuición y del saber guardado, y remendar con paciencia', rumbo: 'esperar y tejer en silencio: la respuesta se hila de noche' },
  'III':  { obra: 'crear y decir lo propio con claridad y belleza: la canción pendiente', vinculo: 'decir una verdad pequeña que pide aire', interior: 'dejar brotar lo propio sin pedir permiso', rumbo: 'expresar lo tuyo con claridad: decirlo ya es moverse' },
  'IV':   { obra: 'dar orden y amparo a lo frágil, sin encerrarlo', vinculo: 'proteger sin encerrar, y mirar también quién cuida de quien cuida', interior: 'buscar amparo y orden, y cuidar también de quien te cuida', rumbo: 'poner orden y vigilancia amable en lo frágil antes de moverte' },
  'V':    { obra: 'esperar a que la puerta pequeña esté lista y saber quién guarda la llave', vinculo: 'respetar un secreto bien guardado y no forzar la puerta', interior: 'saber esperar: la llave la tiene quien sabe esperar', rumbo: 'ver qué puerta pequeña está lista y esperar para cruzarla' },
  'VI':   { obra: 'elegir con quién tejer y hacer refugio con lo que hay a mano', vinculo: 'elegir tejer con alguien: hogar y cobijo hechos de lo que hay a mano', interior: 'hacer refugio con lo que hay a mano y dejar incubar lo que crece en compañía', rumbo: 'elegir tejer con alguien y construir cobijo con lo que ya tienes' },
  'VII':  { obra: 'elegir el camino y sostenerlo aunque tiren en direcciones distintas', vinculo: 'sostener la dirección elegida aunque cada parte tire hacia un lado', interior: 'llevar las riendas de la voluntad cuando tiran fuerzas distintas', rumbo: 'elegir el camino y sostenerlo, incluso cuando tiran en direcciones distintas' },
  'VIII': { obra: 'dejar crecer despacio, en pequeño y sin romperse, lo cotidiano', vinculo: 'crecer con fuerza blanda, sin prisa, en lo cotidiano', interior: 'apoyarte en una fuerza blanda que no se rompe', rumbo: 'avanzar con fuerza blanda, ramificando despacio' },
  'IX':   { obra: 'dar solo el próximo paso con la luz que ya tienes', vinculo: 'retirarte un poco para ver mejor y confiar en una guía frágil y suficiente', interior: 'confiar en una guía frágil y suficiente: solo se ve la próxima piedra', rumbo: 'dar solo el próximo paso: no se ve todo el camino' },
  'X':    { obra: 'aceptar el ciclo: lo que has sido se hila en lo que viene', vinculo: 'reconocer qué herencia se hila entre vosotros', interior: 'aceptar el giro: empezar a hilarlo es la manera de atravesarlo', rumbo: 'aceptar el giro y empezar a hilarlo' },
  'XI':   { obra: 'pesar con justicia, con firmeza y ternura: lo que decides deja huella', vinculo: 'sostener firmeza y ternura a la vez al pesar lo vuestro', interior: 'pesar con equilibrio, con firmeza y con ternura hacia ti', rumbo: 'decidir con rectitud: la decisión deja huella' },
  'XII':  { obra: 'detenerte a propósito: el reposo es fértil y no hay que forzar el despertar', vinculo: 'no forzar el despertar de algo que parece quieto', interior: 'permitirte suspenderte y mirar de otra manera', rumbo: 'suspenderte a propósito y mirar de otra manera antes de moverte' },
  'XIII': { obra: 'dejar que una forma se acabe para que salga lo que contenía', vinculo: 'aceptar que una forma de la relación se acabe para que salga lo que contenía', interior: 'dejar que una cáscara ceda: es una ruptura que libera', rumbo: 'dejar que una forma se acabe: lo que contenía sale' },
  'XIV':  { obra: 'avanzar con medida, mezcla y equilibrio, con atención y no con miedo', vinculo: 'avanzar con medida y equilibrio, sin miedo', interior: 'cruzar con atención y equilibrio, no con miedo', rumbo: 'cruzar el abismo por un solo hilo, con atención y no con miedo' },
  'XV':   { obra: 'nombrar los juicios y deseos ajenos que pesan sobre lo que haces', vinculo: 'distinguir las voces ajenas (juicios, costumbres) de lo que de verdad es vuestro', interior: 'nombrar el peso de las voces ajenas: es empezar a soltarlo', rumbo: 'distinguir qué deseos y costumbres no son tuyos antes de elegir' },
  'XVI':  { obra: 'mirar lo que la grieta enseña sobre lo que de verdad sostenía esto', vinculo: 'ver qué sostenía de verdad lo que se agrieta', interior: 'dejar que lo que se rompe muestre lo que sostenía: es una caída que limpia', rumbo: 'aceptar que lo que se rompe revela lo que sostenía' },
  'XVII': { obra: 'esperar con esperanza quieta y suficiente el destello que cruza como un pez de luz', vinculo: 'sostener una esperanza quieta y suficiente', interior: 'quedarte en la quietud y el reflejo: tras la noche cerrada llega una intuición', rumbo: 'esperar con esperanza quieta: tras la noche cerrada cruza una intuición' },
  'XVIII':{ obra: 'aligerar: dejar caer sin pérdida lo que pesa, aunque no se vea todo claro', vinculo: 'dejar que la luz se lleve el peso sin perder lo esencial', interior: 'dejar que la noche suelte plumas: ligereza sin pérdida, aunque no se vea claro', rumbo: 'avanzar ligero: lo que no se ve claro puede esperar' },
  'XIX':  { obra: 'verlo todo a la luz, con una claridad que no quema y una alegría sencilla', vinculo: 'mirar con claridad que no quema y con alegría sencilla', interior: 'permitirte la alegría sencilla y la claridad', rumbo: 'ver con claridad, sin que queme, lo que hay' },
  'XX':   { obra: 'responder a lo que te llama: volver a nacer con memoria', vinculo: 'responder a una llamada que despierta algo entre vosotros', interior: 'despertar y responder a lo que te llama', rumbo: 'responder a lo que te llama: volver a nacer con memoria' },
  'XXI':  { obra: 'reunir en un solo árbol origen y cielo: lo que sostiene bajo tierra cierra el ciclo', vinculo: 'reconocer lo que os sostiene bajo tierra y reunir el ciclo', interior: 'apoyarte en lo que te sostiene bajo tierra', rumbo: 'cerrar y reunir el ciclo desde lo que ya te sostiene' }
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
  const words = t.trim().split(/\s+/);
  let theme = '', kw = '';
  for (const w of words) {
    if (w.length < 4) continue;
    const th = THEMES.find(x => x[2].some(p => w.indexOf(p) === 0));
    if (th) { theme = th[0]; kw = w; break; }
  }
  return { type, kw, theme };
}
function hashSeed(str) { let h = 2166136261; for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }
function pick(arr, seed) { return arr[seed % arr.length]; }
function lowerFirst(s) { return s.charAt(0).toLowerCase() + s.slice(1); }
function cardLabel(c) { return `«${c.name}» (${c.identifier}, ${c.alternateName})`; }

function localInterpretation(prompt, cardContext) {
  const n = cardContext.length;
  const seed = hashSeed(prompt + '|' + cardContext.map(c => c.identifier).join(','));
  const { type, kw, theme } = analyseQuery(prompt);
    const cards = cardContext.map(c => Object.assign({}, c, CARD_READING[c.identifier] || { grp: 'mirar', mot: [], g: 'mirar la imagen con calma', core: firstSentence(c.description), ask: '¿Qué te dice esta imagen sobre lo que preguntas?' }));
  const paras = [];
  paras.push(`Tu consulta: «${prompt}».`);

  /* Cada carta, en su posición, con su propio significado */
  cards.forEach(c => {
    const l = c.role === 'Raíz' ? `La Raíz, lo que sostiene, es ${cardLabel(c)}: ${c.core}.`
      : c.role === 'Tronco' ? `El Tronco, lo que ocurre ahora, es ${cardLabel(c)}: ${c.core}.`
      : c.role === 'Copa' ? `La Copa, lo que se abre, es ${cardLabel(c)}: ${c.core}.`
      : `Tu carta es ${cardLabel(c)}: ${c.core}.`;
    paras.push(l);
  });

  /* Respuesta: la frase de cada carta para el tema de la pregunta, sin repetir nada */
  const th = THEMES.find(x => x[0] === theme);
  const lens = theme ? THEME_LENS[theme] : '';
  const used = {};
  const ges = cards.map(c => {
    const f = lens && CARD_LENS[c.identifier] && CARD_LENS[c.identifier][lens];
    if (f && !used[f]) { used[f] = 1; return f; }
    return c.g;
  });
  const head = th ? `Sobre ${th[1]}` : 'Sobre lo que preguntas';
  let ans;
  if (n === 1) ans = `${head}, «${cards[0].name}» apunta a ${ges[0]}.`;
  else {
    const who = ['la base', 'el presente', 'lo que se abre'];
    ans = `${head}: ${who[0]} («${cards[0].name}») apunta a ${ges[0]}; ${who[1]} («${cards[1].name}»), a ${ges[1]}; y ${who[2]} («${cards[n - 1].name}»), a ${ges[n - 1]}.`;
  }
  if (type === 'when') ans += ' Las cartas no dan fecha, solo el orden en que se mueve.';
  else if (type === 'decision' && n > 1) ans += ' Como pides decidir, sirven de criterio: mejor la opción que no contradiga ninguna de las tres.';
  paras.push(ans);
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
    playCardSound();
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

/* ---------- Sonido: roce suave de cartón sobre tela ----------
   Se sintetiza con Web Audio (ruido filtrado), sin archivos ni red. El contexto se crea
   al primer toque del usuario, como exigen los navegadores móviles. Se puede silenciar. */
const sound = { ctx: null, buf: null, on: true };
try { sound.on = localStorage.getItem('tarot-sound') !== 'off'; } catch (e) { /* sin almacenamiento */ }
/* Roce continuo y tenue: ruido rosa suave, sin graves (los graves suenan a golpe), sin pulsos,
   envolvente en campana (sube y baja despacio, empieza y acaba en silencio). */
function makeFeltNoise(ctx) {
  const len = Math.floor(ctx.sampleRate * 1.4);
  const buf = ctx.createBuffer(1, len, ctx.sampleRate);
  const d = buf.getChannelData(0);
  let b0 = 0, b1 = 0, b2 = 0;
  for (let i = 0; i < len; i++) {
    const w = Math.random() * 2 - 1;
    b0 = 0.99765 * b0 + w * 0.099046; b1 = 0.963 * b1 + w * 0.2965164; b2 = 0.57 * b2 + w * 1.0526913;
    d[i] = (b0 + b1 + b2 + w * 0.1848) * 0.25;
  }
  return buf;
}
function scheduleSlide(ctx, dest, t, noiseBuf) {
  const dur = 1.0, N = 64, peak = 0.05;
  const src = ctx.createBufferSource(); src.buffer = noiseBuf;
  const hp = ctx.createBiquadFilter(); hp.type = 'highpass'; hp.frequency.value = 700; hp.Q.value = 0.5;
  const band = ctx.createBiquadFilter(); band.type = 'bandpass'; band.Q.value = 0.4;
  band.frequency.setValueAtTime(1400, t);
  band.frequency.linearRampToValueAtTime(2400, t + dur);
  const low = ctx.createBiquadFilter(); low.type = 'lowpass'; low.frequency.value = 4200;
  const curve = new Float32Array(N);
  for (let i = 0; i < N; i++) { const x = i / (N - 1); curve[i] = peak * Math.pow(Math.sin(Math.PI * x), 2); }
  const env = ctx.createGain();
  env.gain.setValueAtTime(0, t);
  env.gain.setValueCurveAtTime(curve, t, dur);
  env.gain.setValueAtTime(0, t + dur + 0.01);
  src.connect(hp); hp.connect(band); band.connect(low); low.connect(env); env.connect(dest);
  src.start(t, Math.random() * 0.3, dur + 0.05);
}
function playCardSound() {
  if (!sound.on) return;
  const AC = window.AudioContext || window.webkitAudioContext;
  if (!AC) return;
  try {
    if (!sound.ctx) sound.ctx = new AC();
    const ctx = sound.ctx;
    if (ctx.state === 'suspended') ctx.resume();
    if (!sound.buf) sound.buf = makeFeltNoise(ctx);
    scheduleSlide(ctx, ctx.destination, ctx.currentTime + 0.01, sound.buf);
  } catch (e) { /* el audio es opcional */ }
}
function initSoundToggle() {
  const b = document.getElementById('sound-toggle');
  if (!b) return;
  const paint = () => { b.setAttribute('aria-pressed', String(sound.on)); b.textContent = sound.on ? 'Sonido: sí' : 'Sonido: no'; };
  paint();
  b.addEventListener('click', () => {
    sound.on = !sound.on;
    try { localStorage.setItem('tarot-sound', sound.on ? 'on' : 'off'); } catch (e) { /* sin almacenamiento */ }
    paint();
    if (sound.on) playCardSound();
  });
}

/* ---------- Pavesas: partículas que flotan en el fondo ----------
   Canvas detrás del contenido, sin eventos de puntero. Se detiene con la pestaña oculta
   y no se anima si el sistema pide reducir el movimiento. Sin dependencias ni red. */
function initEmbers() {
  const canvas = document.getElementById('embers');
  if (!canvas || !canvas.getContext) return;
  const ctx = canvas.getContext('2d');
  const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) { canvas.hidden = true; return; }
  const small = Math.min(window.innerWidth, window.innerHeight) < 700;
  const COUNT = small ? 34 : 48;
  const COLORS = ['217,143,120', '234,223,194', '201,160,110'];
  let w = 0, h = 0, dpr = 1, raf = 0, last = 0;
  const rnd = (a, b) => a + Math.random() * (b - a);
  const make = (fromBottom) => ({
    x: rnd(0, w), y: fromBottom ? h + rnd(0, 40) : rnd(0, h),
    r: rnd(1.3, 3.2), vy: rnd(8, 22), sway: rnd(8, 26), ph: rnd(0, 6.28), fr: rnd(0.25, 0.7),
    a: rnd(0.6, 1), c: COLORS[Math.floor(Math.random() * COLORS.length)], tw: rnd(0.6, 1.6)
  });
  let parts = [];
  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = window.innerWidth; h = window.innerHeight;
    canvas.width = Math.round(w * dpr); canvas.height = Math.round(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    if (!parts.length) parts = Array.from({ length: COUNT }, () => make(false));
  }
  function frame(t) {
    const dt = Math.min((t - last) / 1000 || 0, 0.05); last = t;
    ctx.clearRect(0, 0, w, h);
    for (const p of parts) {
      p.y -= p.vy * dt;
      p.ph += p.fr * dt;
      const x = p.x + Math.sin(p.ph) * p.sway;
      if (p.y < -10) Object.assign(p, make(true));
      const fade = Math.min(1, Math.max(0, p.y / (h * 0.25)), (h - p.y) / 60 + 0.2);
      const flick = 0.65 + 0.35 * Math.sin(t / 1000 * p.tw + p.ph * 3);
      const alpha = p.a * fade * flick;
      const g = ctx.createRadialGradient(x, p.y, 0, x, p.y, p.r * 4);
      g.addColorStop(0, `rgba(${p.c},${alpha})`);
      g.addColorStop(0.3, `rgba(${p.c},${alpha * 0.7})`);
      g.addColorStop(1, `rgba(${p.c},0)`);
      ctx.fillStyle = g;
      ctx.beginPath(); ctx.arc(x, p.y, p.r * 4, 0, 6.2832); ctx.fill();
    }
    raf = requestAnimationFrame(frame);
  }
  function start() { if (!raf) { last = performance.now(); raf = requestAnimationFrame(frame); } }
  function stop() { if (raf) { cancelAnimationFrame(raf); raf = 0; } }
  resize();
  window.addEventListener('resize', resize);
  document.addEventListener('visibilitychange', () => (document.hidden ? stop() : start()));
  start();
}

document.addEventListener('DOMContentLoaded', () => {
  injectJsonLd();
  initEmbers();
  initSoundToggle();
  fillSpreadSelect();
  preload();
  $('#consult-form').addEventListener('submit', startConsult);
  $('#reset').addEventListener('click', reset);
});
