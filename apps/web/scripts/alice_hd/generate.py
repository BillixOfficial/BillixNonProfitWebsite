#!/usr/bin/env python3
"""Generate HD close-ups of Alice with Gemini image models (one call at a time).

Usage (inside a login shell so GEMINI_API_KEY is set):
  python3 scripts/alice_hd/generate.py --ids hello thinking [--note "extra prompt text"]

Reads looks from looks.json next to this file. Raw PNGs go to the scratchpad
raw/ dir as <id>_<n>.png. The API key is read only from the environment and is
never printed or written.
"""
import argparse, base64, io, json, os, sys, time, urllib.error, urllib.request
from PIL import Image

HERE = os.path.dirname(os.path.abspath(__file__))
SCRATCH = "/private/tmp/claude-501/-Users-falana-Billix-YouTube/41088803-e395-45ed-a398-6167ec2d40d0/scratchpad/alice-hd"
RAW = os.path.join(SCRATCH, "raw")
REFS = os.path.join(SCRATCH, "refs")
COUNTER = os.path.join(SCRATCH, "calls.txt")
MAX_CALLS = 70
MODELS = ["gemini-3-pro-image", "gemini-3.1-flash-image"]
ENDPOINT = "https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent"


def calls_used():
    try:
        return int(open(COUNTER).read().strip() or 0)
    except FileNotFoundError:
        return 0


def bump():
    n = calls_used() + 1
    open(COUNTER, "w").write(str(n))
    return n


def b64(p):
    return base64.b64encode(open(p, "rb").read()).decode()


def call(prompt, refs, model, size):
    key = os.environ.get("GEMINI_API_KEY")
    if not key:
        raise RuntimeError("GEMINI_API_KEY is not set")
    parts = [{"inline_data": {"mime_type": "image/png", "data": b64(p)}} for p in refs]
    parts.append({"text": prompt})
    body = {
        "contents": [{"role": "user", "parts": parts}],
        "generationConfig": {"responseModalities": ["IMAGE"],
                             "imageConfig": {"aspectRatio": "4:5", "imageSize": size}},
    }
    req = urllib.request.Request(ENDPOINT.format(model=model), data=json.dumps(body).encode(),
                                 headers={"Content-Type": "application/json", "x-goog-api-key": key})
    with urllib.request.urlopen(req, timeout=400) as r:
        data = json.load(r)
    for c in data.get("candidates", []):
        for part in c.get("content", {}).get("parts", []):
            inl = part.get("inlineData") or part.get("inline_data")
            if inl and inl.get("data"):
                return base64.b64decode(inl["data"])
    raise RuntimeError("no image: " + json.dumps(data)[:300])


def run(look, spec, note):
    refs = [os.path.join(REFS, r) for r in spec["refs"]]
    prompt = spec["base"].replace("{POSE}", look["prompt"].strip())
    if note:
        prompt += "\n\nIMPORTANT FIX: " + note
    for model in MODELS:
        size = "4K"
        for attempt in range(5):
            if calls_used() >= MAX_CALLS:
                return f"STOP budget reached ({MAX_CALLS})"
            n_call = bump()
            try:
                img = call(prompt, refs, model, size)
                n = 1
                while os.path.exists(os.path.join(RAW, f"{look['id']}_{n}.png")):
                    n += 1
                out = os.path.join(RAW, f"{look['id']}_{n}.png")
                im = Image.open(io.BytesIO(img)).convert("RGB")
                im.save(out)
                return f"OK {look['id']} -> {out} {im.size} model={model} size={size} call#{n_call}"
            except urllib.error.HTTPError as e:
                msg = e.read()[:300].decode("utf8", "replace")
                print(f"  HTTP {e.code} ({model},{size}) call#{n_call}: {msg[:200]}", flush=True)
                if e.code == 429:
                    time.sleep(20 * (attempt + 1)); continue
                if e.code == 400 and size == "4K" and "size" in msg.lower():
                    size = "2K"; continue
                if e.code in (500, 503):
                    time.sleep(10); continue
                break
            except Exception as e:  # noqa: BLE001
                print(f"  ERR ({model}) call#{n_call}: {str(e)[:200]}", flush=True)
                time.sleep(5)
                break
    return f"FAIL {look['id']}"


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--ids", nargs="+", required=True)
    ap.add_argument("--note", default="")
    a = ap.parse_args()
    spec = json.load(open(os.path.join(HERE, "looks.json")))
    looks = {l["id"]: l for l in spec["looks"]}
    os.makedirs(RAW, exist_ok=True)
    for i in a.ids:
        if i not in looks:
            sys.exit("unknown id " + i)
        print(run(looks[i], spec, a.note), flush=True)
    print("calls used:", calls_used())


if __name__ == "__main__":
    main()
