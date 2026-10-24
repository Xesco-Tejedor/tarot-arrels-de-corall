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

/* Consulta opcional a los «orbes celestiales»: una segunda interpretación que
   ofrece una IA externa, SOLO si hay conexión y la persona lo pide expresamente.
   Con url vacía la web es 100% offline y no se muestra la opción. */
const ORBES_CONFIG = {
  url: 'https://tarot-orbes.francesc-adria-perello.workers.dev',
  service: 'DeepSeek, un modelo de IA que se ejecuta en Cloudflare a través del servidor de esta web',
  privacy: 'Cloudflare procesa la consulta al momento, sin guardarla ni usarla para entrenar modelos'
};

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

/* ---------- Orbes celestiales: consulta online opcional ---------- */
/* Estado: offer -> consent -> waiting -> answer|error. Nada sale del dispositivo
   sin pulsar «Enviar consulta». Sin conexión o sin configurar, no se ofrece. */
/* El diccionario revisa vocabulario; no cambia palabras ni garantiza el sentido.
   Nombres de cartas y términos de la pregunta se permiten sin traducirlos. */
async function validateOrbesText(text, query, cards) {
  if (/[\uFFFD\u0370-\u052f\u0600-\u06ff\u3000-\u9fff]/u.test(text) || !/[.!?…][»"')]*$/.test(text)) return false;
  return text.length >= 100 && text.length <= 4000;
}

const orbes = { phase: 'idle', ctx: null, lastText: '' };

function orbesAvailable() {
  return /^https:\/\//i.test((ORBES_CONFIG.url || '').trim()) && navigator.onLine;
}

function orbesOffer(ctx) {
  if (typeof voiceStop === 'function') voiceStop();
  orbes.ctx = ctx;
  orbes.phase = 'offer';
  const box = $('#orbes');
  box.innerHTML = '';
  if (!orbesAvailable()) { box.hidden = true; return; }
  const ask = el('button', 'button button--ghost', 'Consultar los orbes celestiales');
  ask.id = 'orbes-ask';
  ask.type = 'button';
  const note = el('p', 'note', 'Hay conexión: puedes pedir una segunda interpretación a ' + ORBES_CONFIG.service + '. Tu pregunta, tus cartas y la lectura solo salen de tu dispositivo si lo pides.');
  ask.addEventListener('click', orbesConsent);
  box.appendChild(ask);
  box.appendChild(note);
  box.hidden = false;
}

function orbesConsent() {
  if (orbes.phase !== 'offer') return;
  orbes.phase = 'consent';
  const box = $('#orbes');
  box.innerHTML = '';
  const panel = el('div', 'orbes__consent');
  panel.appendChild(el('p', null, 'Se enviará tu pregunta, las cartas con su posición y la lectura local a ' + ORBES_CONFIG.service + ', solo para esta segunda interpretación. ' + ORBES_CONFIG.privacy.replace(/[.\s]+$/, '') + '.'));
  const actions = el('div', 'orbes__actions');
  const ok = el('button', 'button', 'Enviar consulta');
  ok.type = 'button';
  const no = el('button', 'button button--ghost', 'Ahora no');
  no.type = 'button';
  ok.addEventListener('click', orbesSend);
  no.addEventListener('click', () => orbesOffer(orbes.ctx));
  actions.appendChild(ok);
  actions.appendChild(no);
  panel.appendChild(actions);
  box.appendChild(panel);
  box.hidden = false;
  ok.focus();
}

async function orbesSend() {
  if (orbes.phase !== 'consent' || !orbes.ctx) return;
  if (typeof voiceStop === 'function') voiceStop();
  orbes.phase = 'waiting';
  const box = $('#orbes');
  box.innerHTML = '';
  const status = el('p', 'orbes__status', 'Consultando los orbes…');
  status.setAttribute('role', 'status');
  box.appendChild(status);
  box.hidden = false;
  $('#ticket-download').disabled = true;
  $('#ticket-share').disabled = true;
  const ctrl = new AbortController();
  const tm = setTimeout(() => ctrl.abort(), 90000);
  try {
    const res = await fetch(ORBES_CONFIG.url.trim(), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: state.query, cards: orbes.ctx, local: localInterpretation(state.query, orbes.ctx).paragraphs }),
      signal: ctrl.signal
    });
    if (!res.ok) throw new Error('HTTP ' + res.status);
    const data = await res.json();
    let text = String(data.text || data.interpretation || '').replace(/<think>[\s\S]*?(<\/think>|$)/g, '').trim();
    if (!text || !(await validateOrbesText(text, state.query, orbes.ctx))) throw new Error('unreadable');
    orbes.phase = 'answer';
    orbes.lastText = text;
    box.innerHTML = '';
    const ans = el('div', 'synthesis orbes__answer');
    const head = el('div', 'orbes__head');
    head.appendChild(el('h2', 'synthesis__title', 'Respuesta de los orbes'));
    if (voice.supported && voicePick()) head.appendChild(voiceMakeBtn(() => orbes.lastText, 'Escuchar el vaticinio de los orbes', 'orbes__voice'));
    ans.appendChild(head);
    const body = el('div', 'synthesis__text');
    text.split(/\n+/).filter(Boolean).forEach(p => body.appendChild(el('p', null, p)));
    ans.appendChild(body);
    ans.appendChild(el('p', 'note', 'Interpretación de ' + ORBES_CONFIG.service + '. La lectura de la baraja, arriba, es la tuya.'));
    box.appendChild(ans);
    const exports = $('#ticket-export');
    box.appendChild(exports);
    $('#ticket-note').textContent = 'La tarjeta incluye las cartas, la lectura local y la respuesta completa de los orbes.';
  } catch (e) {
    orbes.phase = 'error';
    box.innerHTML = '';
    box.appendChild(el('p', 'orbes__status', 'No se ha podido obtener una respuesta completa y legible de los orbes. No mostramos texto defectuoso: tu lectura local sigue disponible.'));
    const again = el('button', 'button button--ghost', 'Probar otra vez');
    again.type = 'button';
    again.addEventListener('click', () => orbesOffer(orbes.ctx));
    box.appendChild(again);
  } finally {
    clearTimeout(tm);
    $('#ticket-download').disabled = false;
    $('#ticket-share').disabled = false;
  }
}

function orbesHide() {
  if (typeof voiceStop === 'function') voiceStop();
  orbes.phase = 'idle';
  orbes.ctx = null;
  orbes.lastText = '';
  const exports = $('#ticket-export');
  if (exports) { $('#synthesis').appendChild(exports); $('#ticket-note').textContent = 'La tarjeta se genera en tu dispositivo, con tus cartas y tu lectura.'; }
  const box = $('#orbes');
  if (box) { box.hidden = true; box.innerHTML = ''; }
}

function orbesSync() {
  /* Si se va la conexión antes de responder, se retira la oferta; una respuesta ya dada se queda. */
  if (!orbesAvailable() && (orbes.phase === 'offer' || orbes.phase === 'consent')) orbesHide();
}

function orbesInit() {
  window.addEventListener('online', () => { if (orbes.phase === 'idle' && orbes.ctx) orbesOffer(orbes.ctx); });
  window.addEventListener('offline', orbesSync);
}



/* ---------- Voz del vaticinio: lectura en voz alta opcional ----------
   Usa SOLO la voz local del dispositivo (Web Speech API, localService=true):
   el texto no sale del dispositivo, sin archivos, servidores ni voces de red.
   Nunca suena sola: hay que pulsar el botón. Se lee por frases, no de una vez,
   porque algunos navegadores cortan los textos largos. */
const voice = {
  supported: typeof window !== 'undefined' && 'speechSynthesis' in window && typeof window.SpeechSynthesisUtterance === 'function',
  speaking: false, btn: null, voices: [], session: 0
};

function voiceLoad() {
  if (!voice.supported) return;
  const load = () => { voice.voices = window.speechSynthesis.getVoices() || []; };
  load();
  if (typeof window.speechSynthesis.addEventListener === 'function') window.speechSynthesis.addEventListener('voiceschanged', load);
  else window.speechSynthesis.onvoiceschanged = load;
}

/* Solo voces LOCALES (localService): el texto del vaticinio no sale del dispositivo.
   Las voces «Google …» de Chrome son de red (localService=false) y se descartan.
   Si no hay voz local, no se ofrece el botón. */
function voicePick() {
  if (!voice.supported) return null;
  if (!voice.voices.length) voice.voices = window.speechSynthesis.getVoices() || [];
  const locals = voice.voices.filter(v => v.localService);
  if (!locals.length) return null;
  const score = v => {
    const l = String(v.lang || '').toLowerCase().replace('_', '-');
    if (l === 'es-es') return 3;
    if (l.indexOf('es') === 0) return 2;
    return v.default ? 1 : 0;
  };
  return locals.slice().sort((a, b) => score(b) - score(a))[0];
}

/* Trocea en frases cortas (máx. ~220 caracteres) respetando la puntuación. */
function voiceChunks(text) {
  const out = [];
  String(text).split(/\n+/).forEach(par => {
    const sents = par.match(/[^.!?…]+[.!?…]*["'»)]*\s*/g) || [par];
    sents.forEach(s => {
      s = s.trim();
      while (s.length > 220) {
        let cut = s.lastIndexOf(',', 220);
        if (cut < 80) cut = s.lastIndexOf(' ', 220);
        if (cut < 80) cut = 220;
        out.push(s.slice(0, cut + 1).trim());
        s = s.slice(cut + 1).trim();
      }
      if (s) out.push(s);
    });
  });
  return out.filter(Boolean);
}

/* Texto SOLO hablado: el identificador de cada arcano (0-XXI) se verbaliza
   («arcano uno»...) en vez de leer el número romano, y los nombres catalanes
   se separan para leerlos con voz catalana local si el dispositivo tiene una.
   El texto visible de la lectura no cambia. */
const ARCANO_WORDS = ['cero', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve', 'diez', 'once', 'doce', 'trece', 'catorce', 'quince', 'dieciséis', 'diecisiete', 'dieciocho', 'diecinueve', 'veinte', 'veintiuno'];
const ROMAN_TO_N = { '0': 0, 'I': 1, 'II': 2, 'III': 3, 'IV': 4, 'V': 5, 'VI': 6, 'VII': 7, 'VIII': 8, 'IX': 9, 'X': 10, 'XI': 11, 'XII': 12, 'XIII': 13, 'XIV': 14, 'XV': 15, 'XVI': 16, 'XVII': 17, 'XVIII': 18, 'XIX': 19, 'XX': 20, 'XXI': 21 };

function voiceSpeechText(text) {
  return String(text).replace(/\(\s*(0|[IVX]{1,5})\s*,\s*([^()]{2,60})\)/g, (m, id, alt) => {
    const n = ROMAN_TO_N[id];
    return n === undefined ? m : ', arcano ' + ARCANO_WORDS[n] + ', ' + alt.trim();
  });
}

function voicePickLang(prefix) {
  if (!voice.supported) return null;
  if (!voice.voices.length) voice.voices = window.speechSynthesis.getVoices() || [];
  const cand = voice.voices.filter(v => v.localService && String(v.lang || '').toLowerCase().replace('_', '-').indexOf(prefix) === 0);
  if (!cand.length) return null;
  return cand.slice().sort((a, b) => (b.default ? 1 : 0) - (a.default ? 1 : 0))[0];
}

/* Segmentos {t, lang}: los nombres de cartas catalanes (con «» o comillas) van
   marcados 'ca'; el resto, 'es'. Sin voz catalana local, todo se lee en la
   voz habitual: nunca se usan voces de red. */
function voiceSegments(text) {
  const names = DECK_DATA.map(c => c.name).filter(Boolean).sort((a, b) => b.length - a.length);
  const t = voiceSpeechText(text);
  if (!names.length) return [{ t: t, lang: 'es' }];
  const esc = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const re = new RegExp('([«"](?:' + names.map(esc).join('|') + ')[»"])');
  return t.split(re).filter(Boolean).map(part => {
    const inner = part.length > 2 ? part.slice(1, -1) : '';
    const isName = (part[0] === '«' || part[0] === '"') && names.indexOf(inner) !== -1;
    return { t: part, lang: isName ? 'ca' : 'es' };
  });
}

const VOICE_ICON_LISTEN = '<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9.5h3.5L12 6v12l-4.5-3.5H4z"/><path d="M15.5 9a4 4 0 0 1 0 6"/><path d="M18 6.5a8 8 0 0 1 0 11"/></svg>';
const VOICE_ICON_STOP = '<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9.5h3.5L12 6v12l-4.5-3.5H4z"/><rect x="15" y="9" width="6" height="6" rx="1" fill="currentColor" stroke="none"/></svg>';

function voicePaintOne(b) {
  if (!b) return;
  const active = voice.speaking && voice.btn === b;
  b.innerHTML = active ? VOICE_ICON_STOP : VOICE_ICON_LISTEN;
  b.setAttribute('aria-pressed', String(active));
  const label = active ? 'Detener la lectura en voz alta' : (b.dataset.labelListen || 'Escuchar la lectura en voz alta');
  b.setAttribute('aria-label', label);
  b.title = label;
}

function voicePaintBtn() {
  voicePaintOne(voice.btn);
}

function voiceStop() {
  voice.session++;
  const old = voice.btn;
  voice.btn = null;
  if (voice.supported) { try { window.speechSynthesis.cancel(); } catch (e) { /* sin voz */ } }
  voice.speaking = false;
  voicePaintOne(old);
}

function voiceSpeak(text, btn) {
  if (!voice.supported) return;
  voiceStop();
  voice.btn = btn || null;
  const chunks = [];
  voiceSegments(text).forEach(seg => voiceChunks(seg.t).forEach(c => chunks.push({ t: c, lang: seg.lang })));
  if (!chunks.length) return;
  const session = ++voice.session;
  voice.speaking = true;
  voicePaintBtn();
  const v = voicePick();
  const caV = voicePickLang('ca');
  let i = 0;
  const finish = () => { if (session !== voice.session) return; voice.speaking = false; voicePaintBtn(); };
  const next = () => {
    if (session !== voice.session) return;
    if (i >= chunks.length) { finish(); return; }
    const chunk = chunks[i++];
    const u = new SpeechSynthesisUtterance(chunk.t);
    if (chunk.lang === 'ca' && caV) { u.voice = caV; u.lang = caV.lang || 'ca-ES'; }
    else { if (v) u.voice = v; u.lang = (v && v.lang) || 'es-ES'; }
    u.rate = 0.97;
    u.pitch = 1;
    u.onend = next;
    u.onerror = next; /* una frase fallida no detiene el resto; cancel() cambia la sesión */
    window.speechSynthesis.speak(u);
  };
  next();
}

/* Botón redondo de solo icono, como los de sonido y música, junto al título. */
function voiceMakeBtn(getText, listenLabel, cssClass) {
  const b = el('button', 'sound ' + (cssClass || 'orbes__voice'));
  b.type = 'button';
  b.dataset.labelListen = listenLabel;
  b.addEventListener('click', () => {
    if (voice.speaking && voice.btn === b) { voiceStop(); }
    else voiceSpeak(typeof getText === 'function' ? getText() : getText, b);
  });
  voicePaintOne(b);
  return b;
}

/* ---------- Tarjeta de la lectura (billete de oráculo) ---------- */
/* Se genera en el dispositivo con las ilustraciones de la baraja: no sale nada.
   «Compartir» usa la función nativa del dispositivo; la persona elige el destino. */
const TKT = { W: 1080, pad: 78, ink: '#33261a', soft: '#66543e', coral: '#a9503b', coralt: '#d98f78', paper: '#e6d9b8', paper2: '#d9c8a0', edge: '#b59f73' };

function tktWrap(ctx, text, maxW) {
  const words = String(text).split(/\s+/);
  const lines = [];
  let line = '';
  for (const w of words) {
    const t = line ? line + ' ' + w : w;
    if (ctx.measureText(t).width > maxW && line) { lines.push(line); line = w; }
    else line = t;
  }
  if (line) lines.push(line);
  return lines;
}

function tktFlourish(ctx, cx, y, w, color) {
  ctx.save();
  ctx.strokeStyle = color; ctx.fillStyle = color; ctx.lineWidth = 2;
  const h = w / 2;
  for (const s of [-1, 1]) {
    ctx.beginPath();
    ctx.moveTo(cx, y);
    ctx.bezierCurveTo(cx + s * h * 0.3, y - 16, cx + s * h * 0.7, y + 16, cx + s * h, y);
    ctx.stroke();
    ctx.beginPath(); ctx.arc(cx + s * h, y, 3.4, 0, 7); ctx.fill();
    ctx.beginPath(); ctx.arc(cx + s * h * 0.52, y + (s < 0 ? -10 : 10), 2.4, 0, 7); ctx.fill();
  }
  ctx.beginPath(); ctx.moveTo(cx, y - 12); ctx.lineTo(cx, y + 12); ctx.stroke();
  ctx.beginPath(); ctx.arc(cx, y - 14, 3, 0, 7); ctx.fill();
  ctx.beginPath(); ctx.arc(cx, y + 14, 3, 0, 7); ctx.fill();
  ctx.restore();
}

function tktGrain(ctx, W, H, seed) {
  let s = seed || 7;
  const rnd = () => (s = (s * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff;
  ctx.save();
  for (let i = 0; i < 1600; i++) {
    const a = rnd() * 0.05;
    ctx.fillStyle = rnd() < 0.5 ? `rgba(51,38,26,${a})` : `rgba(255,246,220,${a})`;
    ctx.fillRect(rnd() * W, rnd() * H, 1 + rnd() * 2, 1 + rnd() * 2);
  }
  ctx.restore();
}

function tktPerf(ctx, y, W) {
  ctx.save();
  ctx.strokeStyle = TKT.soft; ctx.lineWidth = 2; ctx.setLineDash([10, 9]);
  ctx.beginPath(); ctx.moveTo(TKT.pad * 0.6, y); ctx.lineTo(W - TKT.pad * 0.6, y); ctx.stroke();
  ctx.setLineDash([]);
  ctx.fillStyle = '#121813';
  for (const x of [TKT.pad * 0.6, W - TKT.pad * 0.6]) { ctx.beginPath(); ctx.arc(x, y, 9, 0, 7); ctx.fill(); }
  ctx.restore();
}

function loadImage(src) {
  return new Promise((res, rej) => { const im = new Image(); im.onload = () => res(im); im.onerror = rej; im.src = src; });
}

function currentTicketPayload() {
  const spread = SPREADS[state.spread];
  return {
    query: state.query,
    cards: state.drawn.map((c, i) => ({ image: c.image, role: spread.positions[i].role, name: c.name, alternateName: c.alternateName, identifier: c.identifier })),
    paragraphs: state.paragraphs || [],
    orbes: orbes.phase === 'answer' ? orbes.lastText : '',
    when: new Date()
  };
}

async function buildTicketCanvas(p) {
  try { await Promise.all([document.fonts.load('30px Fell'), document.fonts.load('30px "Fell SC"'), document.fonts.load('40px "Fell Title"'), document.fonts.load('italic 30px Fell')]); } catch (e) {}
  const W = TKT.W, pad = TKT.pad, textW = W - pad * 2;
  const cv = document.createElement('canvas');
  const ctx = cv.getContext('2d');

  /* --- pasada 1: medir --- */
  ctx.font = 'italic 34px Fell';
  const qLines = tktWrap(ctx, '«' + p.query + '»', textW);
  const n = p.cards.length;
  const thumbW = n === 1 ? 300 : Math.min(260, (textW - (n - 1) * 40) / n);
  const thumbH = Math.round(thumbW * 1.5);
  ctx.font = '26px Fell';
  const nameLines = p.cards.map(c => tktWrap(ctx, c.name, thumbW + 30).slice(0, 2));
  const namesH = 34 + Math.max.apply(null, nameLines.map(l => l.length)) * 32 + 30;
  ctx.font = '31px Fell';
  const paras = p.paragraphs.map(t => tktWrap(ctx, t, textW));
  const orbParas = p.orbes ? p.orbes.split(/\n+/).filter(Boolean).map(t => tktWrap(ctx, t, textW)) : [];
  const LH = 45;
  let H = pad + 150 + 34 + 26 + qLines.length * 46 + 34 + thumbH + 40 + namesH + 34 + 40 + 66 + 30;
  H += paras.reduce((a, l) => a + l.length, 0) * LH + paras.length * 16;
  if (orbParas.length) H += 60 + 52 + orbParas.reduce((a, l) => a + l.length, 0) * LH + orbParas.length * 16 + 60;
  H += 120;
  cv.width = W; cv.height = H;

  /* --- fondo --- */
  const g = ctx.createRadialGradient(W * 0.3, 0, 60, W * 0.5, H * 0.4, H * 0.9);
  g.addColorStop(0, '#efe3c3'); g.addColorStop(0.55, TKT.paper); g.addColorStop(1, TKT.paper2);
  ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
  tktGrain(ctx, W, H, hashSeed(p.query + String(p.when.getTime())));

  /* --- marco --- */
  ctx.strokeStyle = TKT.coral; ctx.lineWidth = 5; ctx.strokeRect(20, 20, W - 40, H - 40);
  ctx.strokeStyle = TKT.edge; ctx.lineWidth = 1.6; ctx.strokeRect(34, 34, W - 68, H - 68);
  ctx.fillStyle = TKT.coral;
  for (const [x, y] of [[20, 20], [W - 20, 20], [20, H - 20], [W - 20, H - 20]]) { ctx.beginPath(); ctx.arc(x, y, 7, 0, 7); ctx.fill(); }

  let y = pad;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  try { ctx.letterSpacing = '5px'; } catch (e) {}
  tktFlourish(ctx, W / 2, y + 6, 200, TKT.coralt);
  y += 52;
  ctx.fillStyle = TKT.ink; ctx.font = '40px "Fell SC"';
  ctx.fillText('Arrels de corall, nits de plata', W / 2, y);
  y += 40;
  ctx.fillStyle = TKT.coral; ctx.font = '27px "Fell SC"';
  ctx.fillText('· Lectura del oráculo ·', W / 2, y);
  try { ctx.letterSpacing = '0px'; } catch (e) {}
  y += 34;

  /* --- número y fecha --- */
  const num = 1000 + (hashSeed(p.query + p.when.toDateString()) % 9000);
  const fecha = p.when.toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' });
  ctx.font = '24px Fell'; ctx.fillStyle = TKT.soft;
  ctx.textAlign = 'left'; ctx.fillText('Nº ' + num, pad, y);
  ctx.textAlign = 'right'; ctx.fillText(fecha, W - pad, y);
  ctx.textAlign = 'center';
  y += 26;
  tktPerf(ctx, y, W);
  y += 40;

  /* --- pregunta --- */
  ctx.font = 'italic 34px Fell'; ctx.fillStyle = TKT.ink;
  for (const l of qLines) { ctx.fillText(l, W / 2, y); y += 46; }
  y += 20;

  /* --- cartas --- */
  const rowW = n * thumbW + (n - 1) * 40;
  let x = (W - rowW) / 2;
  for (let i = 0; i < n; i++) {
    const c = p.cards[i];
    const im = await loadImage(c.image);
    ctx.save();
    const r = 12;
    ctx.beginPath();
    ctx.roundRect(x, y, thumbW, thumbH, r);
    ctx.clip();
    const ir = im.width / im.height, tr = thumbW / thumbH;
    let dw = thumbW, dh = thumbH, dx = x, dy = y;
    if (ir > tr) { dh = thumbH; dw = dh * ir; dx = x - (dw - thumbW) / 2; } else { dw = thumbW; dh = dw / ir; dy = y - (dh - thumbH) / 2; }
    ctx.drawImage(im, dx, dy, dw, dh);
    ctx.restore();
    ctx.strokeStyle = TKT.coral; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.roundRect(x, y, thumbW, thumbH, r); ctx.stroke();
    x += thumbW + 40;
  }
  y += thumbH + 34;
  x = (W - rowW) / 2;
  for (let i = 0; i < n; i++) {
    const c = p.cards[i], cx = x + thumbW / 2;
    ctx.font = '23px "Fell SC"'; ctx.fillStyle = TKT.coral;
    ctx.fillText(c.role, cx, y);
    ctx.font = '26px Fell'; ctx.fillStyle = TKT.ink;
    let yy = y + 34;
    for (const l of nameLines[i]) { ctx.fillText(l, cx, yy); yy += 32; }
    ctx.font = 'italic 22px Fell'; ctx.fillStyle = TKT.soft;
    ctx.fillText(c.alternateName, cx, yy);
    x += thumbW + 40;
  }
  y += namesH + 34;
  tktFlourish(ctx, W / 2, y, 160, TKT.coralt);
  y += 56;

  /* --- síntesis --- */
  ctx.font = '38px "Fell Title"'; ctx.fillStyle = TKT.ink;
  ctx.fillText('Síntesis de la lectura', W / 2, y);
  y += 40;
  ctx.textAlign = 'left';
  paras.forEach((lines, pi) => {
    ctx.font = '31px Fell'; ctx.fillStyle = TKT.ink;
    let tx = pad;
    lines.forEach((l, li) => {
      if (pi === 0 && li === 0) {
        const first = l.charAt(0), rest = l.slice(1);
        ctx.font = '76px "Fell Title"'; ctx.fillStyle = TKT.coral;
        ctx.fillText(first, pad, y + 18);
        const off = ctx.measureText(first).width + 10;
        ctx.font = '31px Fell'; ctx.fillStyle = TKT.ink;
        ctx.fillText(rest, pad + off, y);
      } else {
        ctx.fillText(l, tx, y);
      }
      y += LH;
    });
    y += 16;
  });
  ctx.textAlign = 'center';

  /* --- orbes (solo si hay respuesta mostrada) --- */
  if (orbParas.length) {
    y += 44;
    tktPerf(ctx, y, W);
    y += 60;
    ctx.font = '38px "Fell Title"'; ctx.fillStyle = TKT.ink;
    ctx.fillText('Respuesta de los orbes', W / 2, y);
    y += 40;
    ctx.textAlign = 'left';
    ctx.font = '31px Fell';
    for (const lines of orbParas) {
      for (const l of lines) { ctx.fillText(l, pad, y); y += LH; }
      y += 16;
    }
    ctx.textAlign = 'center';
    ctx.font = 'italic 23px Fell'; ctx.fillStyle = TKT.soft;
    ctx.fillText('Interpretación de ' + ORBES_CONFIG.service + '.', W / 2, y + 10);
    y += 44;
  }

  /* --- pie --- */
  y = H - pad - 66;
  tktPerf(ctx, y, W);
  y += 44;
  ctx.font = 'italic 26px Fell'; ctx.fillStyle = TKT.soft;
  ctx.fillText('Los naipes aconsejan, no sentencian.', W / 2, y);
  y += 32;
  ctx.font = '20px Fell'; ctx.fillStyle = TKT.edge;
  ctx.fillText('xesco-tejedor.github.io/tarot-arrels-de-corall', W / 2, y);
  return cv;
}

function ticketName() {
  const d = new Date();
  const p2 = v => String(v).padStart(2, '0');
  return 'tarjeta-tarot-' + d.getFullYear() + p2(d.getMonth() + 1) + p2(d.getDate()) + '-' + p2(d.getHours()) + p2(d.getMinutes()) + '.png';
}

async function withTicketButton(btn, fn) {
  if (btn.disabled) return;
  const label = btn.textContent;
  btn.disabled = true; btn.textContent = 'Preparando…';
  try { await fn(await buildTicketCanvas(currentTicketPayload())); }
  catch (e) { btn.textContent = 'No se pudo crear'; setTimeout(() => { btn.textContent = label; btn.disabled = false; }, 1600); return; }
  btn.textContent = label; btn.disabled = false;
}

function initTicket() {
  const dl = $('#ticket-download'), sh = $('#ticket-share');
  if (!dl) return;
  dl.addEventListener('click', () => withTicketButton(dl, cv => new Promise(res => cv.toBlob(blob => {
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = ticketName();
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 4000);
    res();
  }, 'image/png'))));
  try {
    const probe = new File([new Blob(['x'])], 't.png', { type: 'image/png' });
    if (navigator.canShare && navigator.canShare({ files: [probe] })) {
      sh.hidden = false;
      sh.addEventListener('click', () => withTicketButton(sh, cv => new Promise((res, rej) => cv.toBlob(async blob => {
        try {
          const f = new File([blob], ticketName(), { type: 'image/png' });
          await navigator.share({ files: [f], title: 'Arrels de corall, nits de plata', text: 'Mi lectura de tarot' });
          res();
        } catch (e) { if (e && e.name === 'AbortError') res(); else rej(e); }
      }, 'image/png'))));
    }
  } catch (e) {}
}

/* ---------- Estado de la UI ---------- */

/* ---------- Estado de la UI ---------- */
const state = { busy: false, drawn: [], flipped: 0, query: '', spread: DEFAULT_SPREAD, paragraphs: [] };

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
  if (typeof voiceStop === 'function') voiceStop();
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
  const result = localInterpretation(state.query, ctx);
  state.paragraphs = result.paragraphs;
  const box = $('#synthesis-text');
  box.innerHTML = '';
  result.paragraphs.forEach(p => box.appendChild(el('p', null, p)));
  const sh = $('#synthesis-head');
  if (sh) {
    sh.querySelectorAll('.synthesis__voice').forEach(n => n.remove());
    if (voice.supported && voicePick()) sh.appendChild(voiceMakeBtn(() => (state.paragraphs || []).join('\n\n'), 'Escuchar la lectura en voz alta', 'synthesis__voice'));
  }
  $('#synthesis').hidden = false;
  $('#reset').hidden = false;
  orbesOffer(ctx);
  $('#synthesis').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function reset() {
  orbesHide();
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
  const paint = () => { b.setAttribute('aria-pressed', String(sound.on)); };
  paint();
  b.addEventListener('click', () => {
    sound.on = !sound.on;
    try { localStorage.setItem('tarot-sound', sound.on ? 'on' : 'off'); } catch (e) { /* sin almacenamiento */ }
    paint();
    if (sound.on) playCardSound();
  });
}


/* ---------- Música ambiente: bucle suave, con su propio interruptor ----------
   Empieza tras el primer toque (los navegadores no permiten audio antes), con entrada gradual.
   Se pausa con la pestaña oculta. El interruptor se recuerda y es independiente del sonido de las cartas. */
const music = { el: null, on: true, started: false, fade: 0, loading: false };
try { music.on = localStorage.getItem('tarot-music') !== 'off'; } catch (e) { /* sin almacenamiento */ }
const MUSIC_VOL = 0.5;
function musicFadeTo(target, ms, done) {
  const a = music.el; if (!a) return;
  clearInterval(music.fade);
  const from = a.volume, steps = Math.max(1, Math.round(ms / 50)); let i = 0;
  music.fade = setInterval(() => {
    i++; a.volume = Math.min(1, Math.max(0, from + (target - from) * i / steps));
    if (i >= steps) { clearInterval(music.fade); if (done) done(); }
  }, 50);
}
function musicLoad(cb) {
  if (music.el) return cb();
  if (music.loading) return;
  music.loading = true;
  const parts = ['assets/audio/ambiente-1.js', 'assets/audio/ambiente-2.js'];
  const next = (i) => {
    if (i >= parts.length) {
      try {
        const bin = atob((window.TAROT_MUSIC_B64 || []).join('')), u8 = new Uint8Array(bin.length);
        for (let k = 0; k < bin.length; k++) u8[k] = bin.charCodeAt(k);
        music.el = new Audio(URL.createObjectURL(new Blob([u8], { type: 'audio/mpeg' })));
        music.el.loop = true; music.el.volume = 0;
        window.TAROT_MUSIC_B64 = null;
        music.loading = false;
        cb();
      } catch (e) { music.loading = false; /* el audio es opcional */ }
      return;
    }
    const sc = document.createElement('script');
    sc.src = parts[i];
    sc.onload = () => next(i + 1);
    sc.onerror = () => { music.loading = false; };
    document.head.appendChild(sc);
  };
  next(0);
}
function musicPlay() {
  if (!music.on || document.hidden) return;
  musicLoad(() => {
    if (!music.on) return;
    try {
      const p = music.el.play();
      music.started = true;
      if (p && p.then) p.then(() => musicFadeTo(MUSIC_VOL, 2000)).catch(() => { music.started = false; });
      else musicFadeTo(MUSIC_VOL, 2000);
    } catch (e) { /* el audio es opcional */ }
  });
}
function musicPause() {
  if (!music.el) return;
  musicFadeTo(0, 400, () => music.el.pause());
}
function initMusic() {
  const b = document.getElementById('music-toggle');
  const paint = () => { if (!b) return; b.setAttribute('aria-pressed', String(music.on)); };
  paint();
  const first = () => { document.removeEventListener('pointerdown', first, true); document.removeEventListener('keydown', first, true); if (!music.started) musicPlay(); };
  document.addEventListener('pointerdown', first, true);
  document.addEventListener('keydown', first, true);
  if (b) b.addEventListener('click', () => {
    music.on = !music.on;
    try { localStorage.setItem('tarot-music', music.on ? 'on' : 'off'); } catch (e) { /* sin almacenamiento */ }
    paint();
    if (music.on) musicPlay(); else musicPause();
  });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) { if (music.el && !music.el.paused) { clearInterval(music.fade); music.el.pause(); } }
    else if (music.on && music.started) musicPlay();
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


/* Ampliar un naipe revelado mientras se mantiene pulsado (táctil, ratón o teclado) */
function initCardZoom() {
  const zoom = el('div', 'card-zoom');
  zoom.setAttribute('aria-hidden', 'true');
  const frame = el('div', 'card-zoom__frame');
  const zimg = el('img');
  zimg.alt = '';
  frame.appendChild(zimg);
  zoom.appendChild(frame);
  document.body.appendChild(zoom);

  const HOLD_MS = 280, MOVE_PX = 12;
  let timer = 0, startX = 0, startY = 0, open = false, pid = null;

  function show(cardBtn) {
    const front = cardBtn.querySelector('.card__face--front img');
    if (!front || !front.src) return;
    zimg.src = front.src;
    zimg.alt = front.alt || '';
    zoom.classList.add('is-open');
    open = true;
  }
  function close() {
    clearTimeout(timer); timer = 0; pid = null;
    if (open) { zoom.classList.remove('is-open'); open = false; }
  }

  document.addEventListener('pointerdown', (ev) => {
    const cardBtn = ev.target.closest && ev.target.closest('.card.is-flipped');
    if (!cardBtn) return;
    pid = ev.pointerId; startX = ev.clientX; startY = ev.clientY;
    clearTimeout(timer);
    timer = setTimeout(() => show(cardBtn), HOLD_MS);
  });
  document.addEventListener('pointermove', (ev) => {
    if (pid === null || ev.pointerId !== pid) return;
    if (Math.hypot(ev.clientX - startX, ev.clientY - startY) > MOVE_PX) close();
  });
  ['pointerup', 'pointercancel'].forEach((t) => document.addEventListener(t, close));
  document.addEventListener('keydown', (ev) => {
    if (ev.key === 'Escape') { close(); return; }
    const a = document.activeElement;
    if (ev.repeat || !a || !a.classList || !a.classList.contains('card') || !a.classList.contains('is-flipped')) return;
    if (ev.key === ' ' || ev.key === 'Enter') { ev.preventDefault(); show(a); }
  });
  document.addEventListener('keyup', (ev) => {
    if (ev.key === ' ' || ev.key === 'Enter') close();
  });
  document.addEventListener('contextmenu', (ev) => {
    if (ev.target.closest && ev.target.closest('.card')) ev.preventDefault();
  });
}

document.addEventListener('DOMContentLoaded', () => {
  injectJsonLd();
  initEmbers();
  initSoundToggle();
  initMusic();
  orbesInit();
  voiceLoad();
  initTicket();
  initCardZoom();
  fillSpreadSelect();
  preload();
  $('#consult-form').addEventListener('submit', startConsult);
  $('#reset').addEventListener('click', reset);
});
