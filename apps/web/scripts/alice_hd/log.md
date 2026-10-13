# Alice HD close-ups: generation log

Model: gemini-3-pro-image, imageConfig {aspectRatio 4:5, imageSize 4K} -> 3712x4608 raw renders.
References per call (white canvas): 3x3 grid of 9 faces from character/faces, bea_thumb_shocked, bea_thumb_worried, bea_master_front.
Background: flat #FF00FF requested, keyed by scripts/alice_hd/key.py (magenta mask + morphology, soft alpha only in a 3px boundary band, 0.9px feather, colour un-mixing + despill).
Review: scripts/alice_hd/review.py writes raw | over white | over #163f3b strips.

## Decisions

| Look | Attempt | Result | Notes |
|---|---|---|---|
| hello | 1 | accepted | 5-finger wave, face/glasses/sweater on model. |
| explaining | 1 | rejected | Hand flat on chest, too close to "relieved"; prompt changed to palm-up presenting gesture away from chest. |
| thinking | 1 | accepted | Background had pencil-grain texture; the first keyer left a faint haze, so key.py was rewritten with a mask-based approach. |
| magnifier | 1 | accepted | Eye enlarged in lens. |
| calculator | 1 | accepted | Thumb + 4 fingers. Faint scribble on blank display flattened in post. |
| reading-bill | 1 | fallback | Good skeptical look, but not peering over the glasses; retrying once. |
| phone | 1 | rejected | Full style drift: different face, eyelashes, lip colour, thick frames. |
| laughing | 1 | accepted | Eyes squeezed, open laugh, hand near chin. |
| surprised | 1 | accepted | Hand on cheek, round "oh". |
| confused | 1 | rejected | Style drift: drawn pink lips, thick frames, different face. |
| thumbs-up | 1 | accepted | Correct thumbs-up hand. |
| wink | 1 | accepted | Foreshortened point at viewer. |
| idea | 1 | rejected | Style drift: eyelashes, doll-like face, different hair. |

Base prompt tightened after this batch: explicit "no eyelashes, no drawn lips, thin single-line rims, wide flat face, hair as one rounded mass".
| determined | 1 | accepted | Sleeves pushed up, fists raised. |
| relieved | 1 | accepted | Eyes closed, hand on chest. |
| mic | 1 | rejected | Style drift: thick frames, separately drawn wavy hair, different face. |
| shopping | 1 | see below | Character on-model, but drawn inside a black panel frame with white outside it. |
| mug | 1 | accepted | Mug in both hands, steam keyed cleanly. |
| book | 1 | accepted | Teal book, no text. |
| worried | 1 | rejected | Style drift: flat sweater, near-black hair, drawn lips. |
| explaining | 2 | accepted | Palm-up presenting gesture. Render background came out dark pink (#C44483) instead of #FF00FF; key.py now estimates the background colour from the border and un-mixes against it (fixed a thin warm fringe). |
| phone | 2 | rejected | Drift again: pointed face, separately drawn locks, no outer contour. |
| confused | 2 | fallback | On-model except the pursed mouth drawn as pink lips. Prompt rewritten to reference the grid's confused face (squiggle mouth). |
| idea | 2 | accepted | Index finger up, bright open smile. |
| reading-bill | 2 | accepted | Glasses lower on nose, peering over rims with a raised brow (better match than attempt 1). |
| mic | 2 | accepted | Small podcast mic on stand, narrating smile. |
| worried | 2 | accepted | Lip-bite, eyes to the side, brows up. |
| shopping | 1 | accepted | Raw cropped inside the drawn panel frame (x 150-3565, y 0-4475) before keying; bottom edge is a flat cut like the others. |
| confused | 3 | accepted | Squiggle mouth, one brow up, one eye squinted. Head tilt is subtle. |
| phone | 3 | rejected | Still off-style (no eyebrows, no outer contour, flat colour, different face). Retry limit reached; not delivered. |

## Totals

- 29 generation calls (all gemini-3-pro-image at 4K, 0 rate-limit errors, no fallback model used). Budget was 70.
- 19 of 20 looks accepted; `phone` is missing.
- Outputs: public/alice/hd/<name>.webp (longest side 1600, q92, RGBA) + manifest.json; full-res keyed PNGs in the scratchpad keyed/ dir; contact sheet at scratchpad contact.jpg.
- Post-fixes: calculator display scribble flattened; shopping cropped inside a drawn panel frame.
- Re-run: `python3 scripts/alice_hd/finalize.py` (reads accepted.json).

## 2026-10-13 revision
- hello: replaced hello_1 with hello_2 (user disliked the wide open-mouth grin; regenerated with a calm closed-mouth smile).
- idea: replaced idea_2 with idea_3 for the same reason.
