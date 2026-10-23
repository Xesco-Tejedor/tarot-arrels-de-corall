# Genera los iconos de la app desde icon-rgb.jpg + icon-alpha.png (el icono aprobado, 512 px, fondo transparente).
import os
from PIL import Image
base = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'app/src/main/res')
here = os.path.dirname(os.path.abspath(__file__))
im = Image.open(os.path.join(here, 'icon-rgb.jpg')).convert('RGBA')
im.putalpha(Image.open(os.path.join(here, 'icon-alpha.png')).convert('L'))
im.save(os.path.join(here, 'icon-512.png'))
for d, s in [('mdpi', 48), ('hdpi', 72), ('xhdpi', 96), ('xxhdpi', 144), ('xxxhdpi', 192)]:
    p = f'{base}/mipmap-{d}'; os.makedirs(p, exist_ok=True)
    r = im.resize((s, s), Image.LANCZOS)
    r.save(f'{p}/ic_launcher.png'); r.save(f'{p}/ic_launcher_round.png')
os.makedirs(f'{base}/drawable-nodpi', exist_ok=True)
fg = Image.new('RGBA', (432, 432), (0, 0, 0, 0)); c = im.resize((285, 285), Image.LANCZOS); fg.paste(c, (73, 73), c)
fg.save(f'{base}/drawable-nodpi/ic_launcher_foreground.png')
os.makedirs(f'{base}/mipmap-anydpi-v26', exist_ok=True)
for n in ('ic_launcher', 'ic_launcher_round'):
    open(f'{base}/mipmap-anydpi-v26/{n}.xml', 'w').write('<?xml version="1.0" encoding="utf-8"?>\n<adaptive-icon xmlns:android="http://schemas.android.com/apk/res/android">\n<background android:drawable="@color/ic_launcher_background"/>\n<foreground android:drawable="@drawable/ic_launcher_foreground"/>\n</adaptive-icon>\n')
