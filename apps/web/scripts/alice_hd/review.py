#!/usr/bin/env python3
"""Key a raw render and write a raw|white|teal preview strip for review.
Usage: python3 review.py ID_N [ID_N ...]   (e.g. hello_1)"""
import sys, os
import numpy as np
from PIL import Image
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from key import key
S = "/private/tmp/claude-501/-Users-falana-Billix-YouTube/41088803-e395-45ed-a398-6167ec2d40d0/scratchpad/alice-hd"
os.makedirs(f"{S}/cand", exist_ok=True)
for tag in sys.argv[1:]:
    raw = Image.open(f"{S}/raw/{tag}.png").convert("RGB")
    a = np.asarray(raw).astype(int)
    border = np.concatenate([a[:8].reshape(-1, 3), a[-8:].reshape(-1, 3), a[:, :8].reshape(-1, 3), a[:, -8:].reshape(-1, 3)])
    mag = np.minimum(border[:, 0], border[:, 2]) - border[:, 1]
    im = key(f"{S}/raw/{tag}.png"); im.save(f"{S}/cand/{tag}.png")
    k = np.asarray(im).astype(int)
    vis = k[..., 3] > 200
    left = ((np.minimum(k[..., 0], k[..., 2]) - k[..., 1]) > 60) & vis
    h = 900
    tiles = []
    r = raw.copy(); r.thumbnail((10000, h)); tiles.append(r)
    for col in [(255, 255, 255), (0x16, 0x3f, 0x3b)]:
        s = im.copy(); s.thumbnail((10000, h))
        bg = Image.new("RGB", s.size, col); bg.paste(s, mask=s.getchannel("A")); tiles.append(bg)
    W = sum(t.width for t in tiles) + 40
    out = Image.new("RGB", (W, h + 20), (128, 128, 128)); x = 10
    for t in tiles:
        out.paste(t, (x, 10)); x += t.width + 10
    out.save(f"{S}/prev/{tag}.jpg", quality=85)
    print(f"{tag}: raw {raw.size} keyed {im.size} border-magenta-min {mag.min()} pct-border-flat {(mag>200).mean():.3f} leftover-magenta-px {int(left.sum())}")
