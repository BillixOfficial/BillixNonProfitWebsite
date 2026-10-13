#!/usr/bin/env python3
"""Key accepted raws -> scratchpad keyed/<name>.png (full res) and
public/alice/hd/<name>.webp (longest side 1600, q92), manifest.json, contact sheet."""
import json, os, sys
import numpy as np
from PIL import Image, ImageDraw, ImageFont
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from key import key
S = "/private/tmp/claude-501/-Users-falana-Billix-YouTube/41088803-e395-45ed-a398-6167ec2d40d0/scratchpad/alice-hd"
WEB = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
OUT = os.path.join(WEB, "public", "alice", "hd")
ACCEPTED = json.load(open(os.path.join(os.path.dirname(os.path.abspath(__file__)), "accepted.json")))


def fix_calculator(raw):
    """Flatten the faint scribble on the calculator's blank display."""
    im = Image.open(raw).convert("RGB"); a = np.asarray(im).copy()
    x0, y0, x1, y1 = 2815, 2040, 3300, 2155
    reg = a[y0:y1, x0:x1].reshape(-1, 3)
    a[y0:y1, x0:x1] = np.median(reg, axis=0).astype(np.uint8)
    p = os.path.join(S, "raw", "calculator_fixed.png"); Image.fromarray(a).save(p); return p


os.makedirs(OUT, exist_ok=True); os.makedirs(f"{S}/keyed", exist_ok=True)
manifest = {}
for name, tag in ACCEPTED.items():
    raw = f"{S}/raw/{tag}.png"
    if name == "calculator":
        raw = fix_calculator(raw)
    im = key(raw)
    im.save(f"{S}/keyed/{name}.png")
    w, h = im.size; s = 1600 / max(w, h)
    sm = im.resize((round(w * s), round(h * s)), Image.LANCZOS)
    # Redrawn looks are versioned so caches never serve the old art (see fileFor in alice.tsx).
    fname = {"hello": "hello-v2", "idea": "idea-v2"}.get(name, name)
    sm.save(f"{OUT}/{fname}.webp", "WEBP", quality=92, method=6)
    manifest[name] = list(sm.size)
    print(name, tag, im.size, "->", sm.size)
json.dump(manifest, open(f"{OUT}/manifest.json", "w"), indent=2)

# contact sheet over a light background
cell_w, cell_h, cols = 420, 520, 5
names = list(manifest)
rows = (len(names) + cols - 1) // cols
sheet = Image.new("RGB", (cols * cell_w, rows * (cell_h + 40)), (244, 241, 234))
d = ImageDraw.Draw(sheet)
try:
    font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 26)
except OSError:
    font = ImageFont.load_default()
for i, n in enumerate(names):
    im = Image.open(f"{OUT}/{n}.webp").convert("RGBA"); im.thumbnail((cell_w - 20, cell_h - 10))
    x = (i % cols) * cell_w + (cell_w - im.width) // 2
    y = (i // cols) * (cell_h + 40) + (cell_h - im.height)
    sheet.paste(im, (x, y), im)
    d.text(((i % cols) * cell_w + 14, (i // cols) * (cell_h + 40) + cell_h + 6), n, fill=(40, 40, 40), font=font)
sheet.save(f"{S}/contact.jpg", quality=88)
print("contact sheet", sheet.size)
