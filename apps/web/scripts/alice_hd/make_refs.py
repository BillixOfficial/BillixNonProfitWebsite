"""Build white-background reference images of Alice for Gemini."""
import os
from PIL import Image
SRC = "/Users/falana/Billix_YouTube"
OUT = os.environ.get("ALICE_REFS", "/private/tmp/claude-501/-Users-falana-Billix-YouTube/41088803-e395-45ed-a398-6167ec2d40d0/scratchpad/alice-hd/refs")
os.makedirs(OUT, exist_ok=True)

def on_white(im):
    bg = Image.new("RGB", im.size, "white"); bg.paste(im, mask=im.split()[3]); return bg

names = ["01_neutral", "02_talking", "09_thinking", "16_laughing", "17_wink", "08_smug", "13_determined", "18_relieved", "06_confused"]
tiles = [on_white(Image.open(f"{SRC}/character/faces/bea_face_{n}.png").convert("RGBA")) for n in names]
w, h = tiles[0].size
grid = Image.new("RGB", (w * 3 + 40, h * 3 + 40), "white")
for i, t in enumerate(tiles):
    grid.paste(t, (10 + (i % 3) * (w + 10), 10 + (i // 3) * (h + 10)))
grid.save(f"{OUT}/grid.png")
for n in ["shocked", "worried"]:
    im = on_white(Image.open(f"{SRC}/looks/thumbs-video-03/assets/bea_thumb_{n}.png").convert("RGBA"))
    im.thumbnail((1400, 1400)); im.save(f"{OUT}/thumb_{n}.png")
on_white(Image.open(f"{SRC}/character/bea_master_front.png").convert("RGBA")).save(f"{OUT}/master.png")
print("ok")
