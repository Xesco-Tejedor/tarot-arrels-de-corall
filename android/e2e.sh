#!/usr/bin/env bash
# Prueba en emulador real: arranque, tres revelaciones con sonido, silencio, persistencia, sin red, APK firmada.
set -u
PKG=es.xescotejedor.tarot
EV=${EVIDENCE:-evidence}; mkdir -p "$EV"
DBG=$1; REL=$2
log(){ echo "[$(date +%H:%M:%S)] $*" | tee -a "$EV/e2e-log.txt"; }
node_e2e(){ MODE=$1 EVIDENCE=$EV timeout 240 node android/e2e.mjs 2>&1 | tee -a "$EV/e2e-log.txt" > /tmp/last_e2e.txt; }
start_app(){ for try in 1 2 3; do adb shell am force-stop $PKG; adb shell am start -W -n $PKG/.MainActivity >/dev/null 2>&1; sleep 8
  PID=$(adb shell pidof $PKG | tr -d '\r'); log "pid=$PID"; [ -n "$PID" ] && break; done
  adb forward tcp:9222 localabstract:webview_devtools_remote_$PID; }
adb wait-for-device; adb shell 'while [ -z "$(getprop sys.boot_completed)" ]; do sleep 2; done'
adb shell settings put global window_animation_scale 1; adb shell settings put global transition_animation_scale 1; adb shell settings put global animator_duration_scale 1
log "Dispositivo: Android $(adb shell getprop ro.build.version.release) API $(adb shell getprop ro.build.version.sdk)"
adb logcat -c; adb logcat -v time > "$EV/logcat.txt" 2>&1 & LOGPID=$!
log "== Sin red desde el principio (modo avion): la app no debe necesitar internet"
adb shell cmd connectivity airplane-mode enable; adb shell svc wifi disable; adb shell svc data disable; sleep 3
adb install -r "$DBG" | tee -a "$EV/e2e-log.txt"
log "versionCode: $(adb shell dumpsys package $PKG | grep -m1 versionCode)"
log "permisos pedidos: $(adb shell dumpsys package $PKG | grep -c 'android.permission.INTERNET')"
start_app; adb exec-out screencap -p > "$EV/01-inicio.png"
node_e2e main
log "== Cierre completo y reapertura (persistencia del silencio)"
start_app; node_e2e get
node_e2e offline
adb exec-out screencap -p > "$EV/05-reapertura.png"
log "== APK de publicacion firmada"
adb uninstall $PKG >/dev/null
adb install -r "$REL" | tee -a "$EV/e2e-log.txt"
adb shell am start -W -n $PKG/.MainActivity >/dev/null 2>&1; sleep 8
log "release pid: $(adb shell pidof $PKG | tr -d '\r')"
adb exec-out screencap -p > "$EV/06-release.png"
adb shell input keyevent KEYCODE_HOME; sleep 2
adb exec-out screencap -p > "$EV/07-launcher.png"
adb shell cmd connectivity airplane-mode disable; adb shell svc wifi enable
kill $LOGPID 2>/dev/null
log "crashes: $(grep -c 'FATAL EXCEPTION' "$EV/logcat.txt" || true)"
V=PASS; why=""
chk(){ grep -qE "$1" "$EV/e2e-log.txt" || { V=FAIL; why="$why | falta: $2"; }; }
chk 'permisos pedidos: 0$' 'sin permiso de internet'
chk 'origen file:' 'carga empaquetada'
chk 'sonido nuevo presente \(Roce continuo\) true' 'sonido nuevo'
chk 'contexto de audio antes del gesto null' 'audio solo tras gesto'
chk 'revelaciones con sonido: 3 de 3' '3 de 3 sonidos'
chk 'ctx running' 'contexto running'
chk 'sintesis visible true' 'sintesis'
chk 'silencio: fuentes nuevas con sonido apagado 0' 'silencio'
chk 'silencio tras reinicio off' 'silencio persiste'
chk 'sin red: renderiza true' 'sin red'
chk 'sin red: imagen del dorso true' 'imagenes'
chk 'fuentes tipograficas cargadas true' 'fuentes'
chk 'pavesas canvas true' 'pavesas visibles'
chk 'release pid: [0-9]+' 'release arranca'
chk 'crashes: 0$' 'sin crashes'
! grep -q '\] EXC' "$EV/e2e-log.txt" || { V=FAIL; why="$why | excepciones JS"; }
echo "$V $why" > "$EV/veredicto.txt"; log "VEREDICTO: $V $why"
