# Arrels de corall, nits de plata · Tarot

Lecturas breves de tarot con una baraja ilustrada. Se ejecuta en el navegador, sin servidor ni coste.

- Web: https://xesco-tejedor.github.io/tarot-arrels-de-corall/
- Archivos: `index.html`, `styles.css`, `app.js` y `assets/` (cartas y tipografías).
- Funciona sin conexión: la tirada, la síntesis y la tarjeta se generan en el dispositivo.
- Tarjeta de la lectura: billete de oráculo con las cartas y la lectura, para descargar o compartir (se genera en el dispositivo; al compartir, cada quien elige el destino).
- Orbes celestiales (opcional, solo con conexión): segunda interpretación por una IA externa. Se ofrece tras la lectura, avisa de qué se envía (pregunta, cartas y lectura) y a quién, y solo sale nada del dispositivo si se acepta. Se activa configurando `ORBES_CONFIG.url` en `app.js` hacia el servidor propio (Worker `tarot-orbes`); con la URL vacía no aparece.

## App para Android (APK)

Descarga: https://github.com/Xesco-Tejedor/tarot-arrels-de-corall/releases/download/android-latest/tarot-arrels-de-corall.apk

- La web va empaquetada dentro de la APK: funciona sin conexión y sin Chrome. No pide ningún permiso.
- Icono: el círculo del dorso de la baraja (árbol de coral, luna, petirrojos y huevo).
- Instalación: abre el archivo en el móvil y permite "orígenes desconocidos" cuando lo pida. Para actualizar, instala encima.
- Sonido: un roce suave al descubrir cada carta. El botón "Sonido: sí/no" lo silencia y se recuerda al cerrar la app.
- Pavesas: si el móvil tiene activado "quitar animaciones", no se dibujan (es intencionado).

### Qué está probado

Versión 1.0, en emulador Android 13 (evidencias en la release `android-pruebas`): arranque sin red, tres cartas con sonido, silencio persistente, síntesis, pavesas, fuentes e imágenes, APK firmada y sin cierres.

No está probada en un móvil real ni se ha comprobado a oído cómo suena el roce.

### Compilar

El flujo `.github/workflows/android.yml` (ejecución manual) empaqueta la web actual, compila, firma con la clave guardada en los secretos del repo, prueba en emulador y publica la APK solo si las pruebas pasan. Código nativo en `android/`.
