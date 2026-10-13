#!/usr/bin/env python3
"""Generate Billix shop product photos with Google Gemini image models.

Usage:
  python3 scripts/generate_product_images.py SPEC.json --ids classic-tee ceramic-mug --out RAW_DIR [--workers 4]
  python3 scripts/generate_product_images.py SPEC.json --finalize ID=RAW.png ...   (writes public/shop/<id>.webp)

SPEC.json format:
  {
    "refs_dir": "path/to/reference/pngs",
    "style": "shared photo-style text appended to every prompt",
    "jobs": [ {"id": "classic-tee", "refs": ["logo_w.png"], "prompt": "..."}, ... ]
  }

The API key is read ONLY from the GEMINI_API_KEY environment variable and is
never printed or written anywhere.
"""
import argparse
import base64
import io
import json
import os
import sys
import threading
import time
import urllib.error
import urllib.request
from concurrent.futures import ThreadPoolExecutor

from PIL import Image

MODELS = ["gemini-3-pro-image", "gemini-3.1-flash-image"]
ENDPOINT = "https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent"
HERE = os.path.dirname(os.path.abspath(__file__))
WEB = os.path.dirname(HERE)
SHOP = os.path.join(WEB, "public", "shop")


def _b64(path):
    with open(path, "rb") as f:
        return base64.b64encode(f.read()).decode()


def call_gemini(prompt, ref_paths, model):
    key = os.environ.get("GEMINI_API_KEY")
    if not key:
        raise RuntimeError("GEMINI_API_KEY is not set")
    parts = [{"inline_data": {"mime_type": "image/png", "data": _b64(p)}} for p in ref_paths]
    parts.append({"text": prompt})
    body = {
        "contents": [{"role": "user", "parts": parts}],
        "generationConfig": {"responseModalities": ["IMAGE"], "imageConfig": {"aspectRatio": "1:1"}},
    }
    req = urllib.request.Request(
        ENDPOINT.format(model=model),
        data=json.dumps(body).encode(),
        headers={"Content-Type": "application/json", "x-goog-api-key": key},
    )
    with urllib.request.urlopen(req, timeout=300) as r:
        data = json.load(r)
    for cand in data.get("candidates", []):
        for part in cand.get("content", {}).get("parts", []):
            inline = part.get("inlineData") or part.get("inline_data")
            if inline and inline.get("data"):
                return base64.b64decode(inline["data"])
    raise RuntimeError("no image in response: " + json.dumps(data)[:400])


def run_job(job, spec, out_dir, counter_path):
    refs = [os.path.join(spec["refs_dir"], r) for r in job.get("refs", [])]
    prompt = job["prompt"].strip() + "\n\n" + spec.get("style", "")
    last_err = None
    for model in MODELS:
        try:
            _bump(counter_path)
            img = call_gemini(prompt, refs, model)
            n = 1
            while os.path.exists(os.path.join(out_dir, f"{job['id']}_{n}.png")):
                n += 1
            path = os.path.join(out_dir, f"{job['id']}_{n}.png")
            Image.open(io.BytesIO(img)).convert("RGB").save(path)
            return f"OK   {job['id']} -> {path} ({model})"
        except urllib.error.HTTPError as e:
            last_err = f"HTTP {e.code}: {e.read()[:300]!r}"
        except Exception as e:  # noqa: BLE001
            last_err = str(e)[:300]
        time.sleep(2)
    return f"FAIL {job['id']}: {last_err}"


_LOCK = threading.Lock()


def _bump(counter_path):
    with _LOCK:
        _bump_unlocked(counter_path)


def _bump_unlocked(counter_path):
    n = 0
    if os.path.exists(counter_path):
        n = int(open(counter_path).read().strip() or 0)
    with open(counter_path, "w") as f:
        f.write(str(n + 1))


def finalize(pairs):
    os.makedirs(SHOP, exist_ok=True)
    for pair in pairs:
        slug, raw = pair.split("=", 1)
        im = Image.open(raw).convert("RGB")
        w, h = im.size
        s = min(w, h)
        im = im.crop(((w - s) // 2, (h - s) // 2, (w + s) // 2, (h + s) // 2)).resize((1200, 1200), Image.LANCZOS)
        dst = os.path.join(SHOP, f"{slug}.webp")
        im.save(dst, "WEBP", quality=82, method=6)
        print("wrote", dst)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("spec")
    ap.add_argument("--ids", nargs="*")
    ap.add_argument("--out", default=os.path.join(HERE, "_raw"))
    ap.add_argument("--workers", type=int, default=4)
    ap.add_argument("--finalize", nargs="*")
    a = ap.parse_args()
    if a.finalize:
        finalize(a.finalize)
        return
    spec = json.load(open(a.spec))
    jobs = {j["id"]: j for j in spec["jobs"]}
    ids = a.ids or list(jobs)
    missing = [i for i in ids if i not in jobs]
    if missing:
        sys.exit("unknown ids: " + ", ".join(missing))
    os.makedirs(a.out, exist_ok=True)
    counter = os.path.join(a.out, "_calls.txt")
    with ThreadPoolExecutor(a.workers) as ex:
        for line in ex.map(lambda i: run_job(jobs[i], spec, a.out, counter), ids):
            print(line, flush=True)


if __name__ == "__main__":
    main()
