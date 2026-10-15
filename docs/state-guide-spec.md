# State guide research spec

Each state guide is one file: `apps/web/src/content/state-guides/<code>.ts` (lowercase code, e.g. `oh.ts`, `dc.ts`).
The type is `StateGuide` in `apps/web/src/content/types.ts`. The page that renders it is
`apps/web/src/app/states/[slug]/page.tsx`. Average electricity prices come from EIA and are added by the page; do not
repeat them in the guide.

## Trust rules (non-negotiable)

- Every factual claim cites a source with `[^n]` (1-based index into `sources`). Every source must be cited at least once.
- Sources are official: the state utility commission, state statutes/administrative code, the state LIHEAP office, the
  state attorney general, the state energy office, federal agencies (EIA, HHS/ACF LIHEAP, DOE). Utility or nonprofit pages
  only when nothing official exists, and say who published it.
- Open every URL you use and confirm it says what you claim. If a site blocks scripted requests (403), open it in a
  real browser or with WebFetch before using it. Never cite a URL you have not read.
- Never invent numbers, dates, temperatures, program names or phone numbers. If you can't verify a detail, leave it out
  and write around it ("check with your utility for exact dates").
- Prefer stable pages (program landing pages, rule/statute pages) over news releases.
- `accessed` is `2026-10-15` for everything you checked today.
- No emoji. Plain English, short sentences, second person ("you"). U.S. spelling. No financial or legal advice.
- Name programs and agencies exactly as the official source does.

## Fields

```ts
import type { StateGuide } from '../types'

export const oh: StateGuide = {
  code: 'OH',
  lastReviewed: '2026-10-15',
  intro: '...', // 1–2 sentences: the big picture for this state's household utility bills. May cite.
  regulator: {
    name: 'Public Utilities Commission of Ohio (PUCO)', // official name
    url: 'https://...',          // commission home page
    complaintUrl: 'https://...', // the consumer complaint page (form or instructions)
    text: '...', // what it regulates (investor-owned electric, gas, water, phone...), what it does NOT (municipal utilities,
                 // most co-ops), and "contact your utility first, then file a complaint". Cite.
  },
  electricity: {
    market: 'choice', // 'regulated' | 'choice' | 'partial' — see below
    text: '...', // How prices are set. If choice: who you can buy from, that your utility still delivers and bills
                 // delivery, "price to compare"/default service concept, and one caution (variable rates, contract terms,
                 // early termination fees). If regulated: rates set by commission for investor-owned utilities; co-ops
                 // and municipal utilities set their own. Cite.
    shopping: { name: 'Energy Choice Ohio', url: 'https://...' } | null, // official state shopping/compare site, else null
  },
  gas: {
    text: '...', // Who regulates gas utilities; whether gas choice / supplier shopping exists (statewide, some utilities,
                 // or none). Cite.
    shopping: { name: '...', url: 'https://...' } | null,
  },
  water: {
    text: '...', // Whether the commission regulates privately owned (investor-owned) water/sewer companies, and that
                 // city/municipal water rates are set locally (city council, water board). Cite.
  },
  shutoff: {
    text: '...', // Disconnection protections for residential customers: winter rules (dates or temperature thresholds),
                 // extreme-heat rules if any, medical certificate protections, required notice period, and any special
                 // winter payment plan (e.g. a named reconnection order). Only what you verified. Cite the rule/statute
                 // or commission page.
  },
  help: [
    // FIRST entry: the state's LIHEAP program page (official state agency page). Then 1–4 more verified programs:
    // state-specific bill-payment help (percentage-of-income plans, crisis programs, utility-funded assistance
    // administered by the state, water assistance if official), weatherization assistance program.
    { name: 'Home Energy Assistance Program (HEAP)', url: 'https://...', summary: '... Cite.' },
  ],
  consumer: { name: 'Ohio Attorney General Consumer Protection Section', url: 'https://...', summary: '... Cite.' },
  rebates: [
    // 0–3 entries: state energy office efficiency programs, the state's IRA Home Energy Rebates program page if the state
    // has launched or announced one (verify status on the official page), state-run efficiency programs.
  ],
  sources: [
    { title: '...', publisher: '...', url: 'https://...', accessed: '2026-10-15' },
  ],
}
```

### Electricity market values

- `choice`: residential customers of the main investor-owned utilities can buy supply from competitive suppliers
  statewide (e.g. OH, PA, IL, NY, NJ, MD, MA, CT, RI, NH, ME, DE, DC; Texas is `choice` in most of the state — ERCOT
  competitive areas — note the exceptions).
- `partial`: limited or capped programs (e.g. California Direct Access is capped; Michigan caps choice at 10% of load;
  Oregon/Virginia/Nevada/Montana have narrow programs). Verify on the commission site.
- `regulated`: no residential retail choice.
These are examples; confirm each from an official source and cite it.

## Writing style

- Short paragraphs; each `text` field is 2–5 sentences.
- Use `**bold**` sparingly for the one thing a reader must notice.
- Internal links allowed only to `/learn/how-to-read-your-electric-bill`, `/learn/supply-vs-delivery-charges`,
  `/categories/electricity`, `/categories/heating-cooling`, `/categories/water-sewer`, `/glossary#<term>` for terms like
  `customer-charge`, `delivery-charge`, `estimated-reading`, `budget-billing`. Use `[label](/path)`.

## When done

Report per state: the file written, the market value chosen, anything you could not verify and left out, and any URL you
could only verify in a browser.
