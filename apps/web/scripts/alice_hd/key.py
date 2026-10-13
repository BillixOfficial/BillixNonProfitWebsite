#!/usr/bin/env python3
"""Chroma-key magenta (#FF00FF) out of a raw Alice render.

Usage: python3 key.py RAW.png OUT.png [--preview DIR]
- alpha from "magenta-ness" m = min(R,B) - G (for dark-outline edges m ~ (1-a)*255)
- 1px feather, colour un-mixing of the magenta contribution on soft edges,
  extra despill on the outline band, crop to bbox + margin.
"""
import argparse, os
import numpy as np
from PIL import Image, ImageFilter
from scipy import ndimage

LO, HI = 24.0, 225.0


def key(raw):
    rgb = np.asarray(Image.open(raw).convert("RGB")).astype(np.float32)
    R, G, B = rgb[..., 0], rgb[..., 1], rgb[..., 2]
    m = np.minimum(R, B) - G
    # estimate the actual background colour from the image border (renders are
    # sometimes a darker pink instead of pure #FF00FF)
    brd = np.concatenate([rgb[:6].reshape(-1, 3), rgb[-6:].reshape(-1, 3), rgb[:, :6].reshape(-1, 3), rgb[:, -6:].reshape(-1, 3)])
    bm = np.minimum(brd[:, 0], brd[:, 2]) - brd[:, 1]
    Mb = np.median(brd[bm > 40], axis=0) if (bm > 40).sum() > 50 else np.array([255, 0, 255], np.float32)
    mbg = float(min(Mb[0], Mb[2]) - Mb[1])
    lo, hi = LO * mbg / 255, HI * mbg / 255
    ramp = 1.0 - np.clip((m - lo) / (hi - lo), 0, 1)
    # robust background mask: magenta-ish pixels (incl. light pencil-grain texture),
    # closed to swallow specks; anything enclosed and tiny is treated as background too
    bg = m > min(50.0, 0.5 * mbg)
    bg = ndimage.binary_opening(bg, iterations=1)
    fg = ~bg
    fg = ndimage.binary_opening(fg, iterations=2)
    lab, n = ndimage.label(fg)
    if n > 1:
        sizes = ndimage.sum(fg, lab, range(1, n + 1))
        keep = np.zeros(n + 1, bool); keep[1:] = sizes >= max(4000, sizes.max() * 0.002)
        fg = keep[lab]
    # fill small magenta holes inside the figure only if they are tiny (texture), keep real gaps
    holes = ndimage.binary_fill_holes(fg) & ~fg
    hl, hn = ndimage.label(holes)
    if hn:
        hs = ndimage.sum(holes, hl, range(1, hn + 1))
        small = np.zeros(hn + 1, bool); small[1:] = hs < 400
        fg |= small[hl]
    edge = ndimage.binary_dilation(fg, iterations=3) & ~ndimage.binary_erosion(fg, iterations=3)
    a = np.where(edge, ramp, fg.astype(np.float32))
    a = np.where(ndimage.binary_dilation(fg, iterations=3), a, 0).astype(np.float32)
    # feather ~1px
    ai = Image.fromarray((a * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(0.9))
    a = np.asarray(ai).astype(np.float32) / 255
    a[a < 0.04] = 0
    # un-mix magenta on semi-transparent pixels: P = a*F + (1-a)*M
    M = Mb.astype(np.float32)
    aa = np.clip(a, 1e-3, 1)[..., None]
    F = np.clip((rgb - (1 - aa) * M) / aa, 0, 255)
    soft = (a < 0.999)[..., None]
    out = np.where(soft, F, rgb)
    # despill band: pixels within 6px of transparency -> no magenta excess
    band = ndimage.binary_dilation(a < 0.99, iterations=6)
    R, G, B = out[..., 0], out[..., 1], out[..., 2]
    ex = np.clip(np.minimum(R, B) - G - 4, 0, None) * band
    out[..., 0] -= ex; out[..., 2] -= ex
    rgba = np.dstack([np.clip(out, 0, 255), a * 255]).astype(np.uint8)
    im = Image.fromarray(rgba, "RGBA")
    bb = im.getchannel("A").point(lambda v: 255 if v > 8 else 0).getbbox()
    mg = int(0.015 * max(im.size))
    x0, y0, x1, y1 = bb
    im = im.crop((max(0, x0 - mg), max(0, y0 - mg), min(im.width, x1 + mg), min(im.height, y1 + mg)))
    return im


def preview(im, path):
    w = 700; h = int(im.height * w / im.width)
    sm = im.resize((w, h), Image.LANCZOS)
    big = Image.new("RGB", (w * 2 + 30, h + 20), (128, 128, 128))
    for i, col in enumerate([(255, 255, 255), (0x16, 0x3f, 0x3b)]):
        bg = Image.new("RGB", (w, h), col); bg.paste(sm, mask=sm.getchannel("A"))
        big.paste(bg, (10 + i * (w + 10), 10))
    big.save(path, quality=90)


if __name__ == "__main__":
    ap = argparse.ArgumentParser(); ap.add_argument("raw"); ap.add_argument("out"); ap.add_argument("--preview")
    a = ap.parse_args()
    im = key(a.raw); im.save(a.out)
    if a.preview:
        preview(im, a.preview)
    print(a.out, im.size)
