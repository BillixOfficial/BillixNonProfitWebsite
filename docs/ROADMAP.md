# Billix roadmap

Each phase ends with a working, tested, deployed increment. Items move only when the previous phase's exit criteria are met.

## Phase 1: Public website foundation (implemented on `platform/phase-1`)
- [x] Monorepo: `apps/web` (Next.js) + `apps/api` (FastAPI, Postgres, Alembic)
- [x] Design system, header with dropdowns + mobile menu + search, footer
- [x] Homepage (11 sections), 12 category guides (13 sections each, sourced)
- [x] Learn: 7 articles, 3 dated updates, filters, TOC, reading time, sources, share/print
- [x] Video library (8 entries, embeds switch on when YouTube IDs are set), glossary (58 terms), site search
- [x] About, Mission, Meet Alice, Editorial Standards, Press, Partnerships, Careers, Work With Us, Help, Contact, Business Solutions (original site content)
- [x] Social hub, app coming-soon page with waitlist, newsletter (double opt-in, preferences, unsubscribe, archive), community forms
- [x] States: template for 50 states + D.C. with verified national resources
- [x] Legal page structure (drafts), SEO (metadata, JSON-LD, sitemap, robots)
- [x] Electricity Cost Calculator + electricity plan comparison (pulled forward from Phase 2)
- [x] Tests: web unit + content integrity (24), Playwright (14), API (33); CI workflow
- [ ] Deploy (needs hosting accounts) and connect production email
- [ ] Postgres migration run on a real database (needs credentials)

## Phase 2: Tools and shop
- Calculators in this order: appliance presets (sourced), heating comparison, water usage/leak, mortgage, credit card interest, car loan, subscription tracker, household planner, AC, EV, heat pump, solar payback, property tax, rent vs. buy
- Comparison tools: heating systems, internet plans
- Shop: Stripe Checkout, Stripe Tax, product variants and size guides, digital delivery with signed links, print-on-demand integration, order emails, refunds, discount codes; launch with the ebook, bill tracker, classic tee, mug, free moving checklist
- Admin v1: products, orders, newsletter subscribers, community moderation queue (RBAC, MFA)

## Phase 3: Accounts and dashboard
- Managed auth, profiles, households and members
- Recurring bills, statements, due dates, paid status, contract/promo tracking
- Reminders (email first), saved calculations, charts, CSV/PDF reports
- Authorization test suite; data export and delete

## Phase 4: AI and bill intelligence
- Content moves into Postgres with an editor and source verification workflow
- Ask Alice: retrieval over Billix content, citations required, feedback
- Secure uploads, extraction with human confirmation, bill-to-bill comparison
- Verified state guides (start with the states readers ask about most), provider directory, assistance finder

## Phase 5: Mobile app
- Expo app sharing the API, auth and calculator code; dashboard, tracking, push reminders, scanning, Ask Alice; store submissions

## Phase 6: Expansion
- Moderated discussions and expert Q&A, Billix Academy (courses, quizzes, progress), advanced comparisons with live data, business solutions, international structure

## Content upkeep calendar
- Weekly (Wed): EIA heating oil and propane update; re-check the heating-oil update
- Monthly: EIA Electric Power Monthly (~4th week); BLS CPI release; review `reviewedAt` dates older than 6 months
- Watch: FTC negative-option rulemaking (subscription article), FCC broadband label changes (internet guide)
