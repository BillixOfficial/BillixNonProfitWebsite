# Billix shop product images: generation log

Generator: `scripts/generate_product_images.py` with prompts in `scripts/product-images-spec.json`
(built from Alice face art and `public/brand/billix-logo-transparent.png` flattened onto white as reference images).
Model: `gemini-3-pro-image` (falls back to `gemini-3.1-flash-image` on error). Output: `public/shop/<slug>.webp`, 1200x1200, WebP q82.
Attempt numbers below are the raw generation files (`<slug>_<n>.png`).

## Main product images

| Product | Result | Notes |
|---|---|---|
| billix-guide-paperback | accepted (1) | Rendered as a hardback-looking book; text and logo correct. Used as series reference. |
| billix-guide-ebook | accepted (1) | Same cover on tablet. |
| homeowners-bill-handbook | accepted (1) | |
| electricity-bills-explained | accepted (1) | |
| heating-your-home | accepted (1) | |
| water-sewer-bills | accepted (1) | |
| first-time-homeowner-guide | accepted (1) | |
| 100-ways-review-expenses | accepted (1) | |
| monthly-bill-tracker | rejected (1), accepted (2) | 1: angled shot, table header row stepped/out of perspective, heading overlapped table. Switched all sheets to top-down. |
| annual-bill-budget-planner | rejected (1), accepted (2) | 1: header row floated above table, perspective inconsistent. |
| utility-comparison-worksheet | rejected (1), accepted (2) | 1: warped header row. |
| home-maintenance-planner | accepted (1) | |
| first-time-homeowner-checklist | rejected (1), accepted (2) | 1: heading and table at different angles. |
| moving-utilities-checklist | rejected (1, 2), accepted (3) | 1 and 2: stepped header row. 3: forced flat-scan composition. |
| subscription-audit-worksheet | rejected (1), accepted (2) | 1: stepped header row. |
| electricity-usage-log | rejected (1), accepted (2) | 1: stepped header row. |
| home-heating-comparison-kit | rejected (1, 2), accepted (3) | 1: stepped header, half-hidden heading on back page. 2: heading overlapped table. |
| household-planner-bundle | accepted (1) | |
| classic-tee | accepted (1) | |
| signature-hoodie | accepted (1) | |
| understand-your-bills-tee | accepted (1) | Logo larger than "small", acceptable. |
| alice-explains-tee | accepted (1) | Big-grin Alice matches reference. |
| crewneck | accepted (1) | Gold circle of logo blends into gold fabric (rendered as outline). |
| baseball-cap | accepted (1) | |
| beanie | accepted (1) | |
| polo | accepted (1) | Chest logo larger than asked. |
| youth-tee | accepted (1) | |
| tote-bag | accepted (1) | |
| ceramic-mug | accepted (1) | Glaze is speckled off-white rather than strong cream. |
| alice-mug | accepted (1) | |
| water-bottle | accepted (1) | |
| notebook | accepted (1) | |
| sticker-pack | accepted (1) | |
| mouse-pad | accepted (1) | |
| desk-mat | accepted (1) | |
| pen-set | accepted (1) | |
| magnet-pack | accepted (1) | |
| wall-calendar | accepted (1) | |
| enamel-pin | accepted (1) | Pin is pig + bill stack only (no gold circle), as an enamel pin would be. |
| bill-organizer-folder | rejected (1), accepted (2) | 1: tab "Mar" missing, logo printed twice. |
| meter-reading-notepad | rejected (1), accepted (2) | 1: stepped header row. 2 has columns only (no row lines) and the teal binding at the bottom. |
| bill-day-desk-planner | accepted (1) | |
| alice-sticker-sheet | rejected (1, 2), accepted (3) | 1: only 7 stickers with a gap (flash fallback). 2: model drew a different blonde "Alice"; rejected. 3: used a composite grid of the 8 real faces as the single reference. |
| starter-bundle | accepted (1) | Tracker page inside the box has a slightly skewed header row (secondary item, legible, spelled correctly). |
| new-homeowner-gift-set | rejected (1), accepted (2) | 1: folder tabs read "Nec" and July missing. 2: folder shown with flap closed. |
| alice-explains-electricity | accepted (1) | |
| alice-explains-water | rejected (1), accepted (2) | 1: "Billix" printed on Alice's sweater. |
| alice-explains-heating | rejected (1, 2), accepted (3) | 1, 2: "Billix" printed on Alice's sweater. 3: plain bottom strip for "Billix". |
| alice-explains-saving-energy | accepted (1) | |
| alice-explains-household-expenses | rejected (1, 2), accepted (3) | 1: "Billix" on sweater and pound-sign coins. 2: "Billix" on sweater. |
| alice-activity-book | accepted (1) | |

## Lifestyle (second) images

| Image | Result | Notes |
|---|---|---|
| billix-guide-paperback-2 | rejected (1), accepted (2) | 1: utility bill prop had garbled fine print. 2: sealed window envelope instead. |
| billix-guide-ebook-2 | accepted (1) | |
| monthly-bill-tracker-2 | accepted (1) | On a fridge door. |
| classic-tee-2 | rejected (1), accepted (2) | 1: "Billix" wordmark letters uneven ("BilliX"). |
| signature-hoodie-2 | accepted (1) | |
| bill-day-desk-planner-2 | accepted (1) | First attempts hit HTTP 429 (spend-based rate limit); laptop keys in background are soft/illegible. |
| ceramic-mug-2 | accepted (2) | 1 was usable but the utility-bill prop had garbled fine print; 2 uses a plain window envelope. |
| starter-bundle-2 | rejected (1, 2), accepted (3) | 1, 2: tracker column headers misspelled ("Amcont", "Due Dete", "Peid"). 3: tracker rolled with a ribbon, no visible text. |

## Totals

- 59 images accepted (51 main + 8 lifestyle); every product has a main image.
- About 100 API calls logged by the generator's counter; roughly 10 of them were HTTP 429 rate-limit rejections (no image returned).
