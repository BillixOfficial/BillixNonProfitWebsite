# Billix platform architecture

Status: Phase 1 implemented on branch `platform/phase-1` (October 2026). This document answers the planning questions in the master spec and is the reference for later phases.

## 1. The vision in one paragraph

Billix is education first (guides, videos with Alice, glossary, calculators), a consumer product second (accounts, bill tracking, reminders, the app, Ask Alice, bill analysis) and a business third (shop, later partnerships). Everything in the product layer depends on the education layer being trusted, so Phase 1 invests in sourced content, honest states and a content model that later phases can reuse.

## 2. Feature dependencies

```
Content model + design system ─┬─> Category pages, Learn, Videos, Glossary, Search, States
                               ├─> Calculator framework ─> Compare tools ─> Saved results (needs Accounts)
                               └─> Ask Alice retrieval corpus (needs verified content + sources)

API + Postgres ─┬─> Newsletter, waitlist, contact, community forms        (Phase 1)
                ├─> Admin/CMS (RBAC) ─> moving content from files into the DB
                ├─> Auth provider ─> Accounts ─> Households ─> Bills ─> Reminders ─> Reports
                │                                         └─> Bill uploads (private storage, scanning,
                │                                             extraction QA) ─> Bill Analyzer
                ├─> Stripe + fulfillment (print-on-demand, digital delivery) ─> Shop checkout ─> Orders/refunds
                └─> Push/email jobs ─> Reminders, app notifications

Shared API + auth ─> Mobile app (Expo) reuses everything above
```

Hard rules that follow from this:
- Bill uploads come after auth, private storage, malware scanning, retention rules and extraction-accuracy testing.
- Ask Alice comes after the content corpus is large enough and every answer can cite a Billix page.
- Shop checkout comes after Stripe, tax, shipping and a written refund policy are in place.

## 3. Technical architecture (recommended)

A **modular monolith** in one repository:

| Layer | Choice | Notes |
|---|---|---|
| Web | Next.js 16 (App Router, React 19, TypeScript, Tailwind CSS 4) | `apps/web`. Cache Components + Partial Prefetching on; nearly every page is prerendered. |
| API | Python 3.12, FastAPI, SQLAlchemy 2, Alembic, Pydantic v2 | `apps/api`. Modules: newsletter, waitlist, contact, community, health. New domains (accounts, bills, shop, admin) are new modules, not new services. |
| Database | PostgreSQL 16 | One database; schema-per-module is unnecessary at this size. |
| Auth (Phase 3) | Managed provider (recommend **Clerk** or **Supabase Auth**) | Web and Expo SDKs, MFA for admins, JWT verified by FastAPI. |
| Storage (Phase 4) | Private object storage (S3 or Supabase Storage) with signed, short-lived URLs | Bills never on public URLs. |
| Payments (Phase 2) | Stripe Checkout + Stripe Tax; print-on-demand partner for apparel | Keeps card data off our servers (PCI SAQ A). |
| Email | Resend (or Postmark) | Double opt-in implemented; provider is a config switch. |
| AI (Phase 4) | Claude via the Anthropic API, retrieval over Billix content | Answers must cite Billix pages; refuse when no source. |
| Mobile (Phase 5) | React Native + Expo | Same API and auth. Share TypeScript types/calculators via a `packages/` folder when the app starts. |
| Hosting | Web on **Vercel**; API on **Render/Fly.io/Railway** (Docker); Postgres managed (Neon, Supabase or RDS) | GitHub Pages can't run the forms, search or later auth, so the old Pages deploy was retired. |
| CI | GitHub Actions (`.github/workflows/ci.yml`) | Typecheck, lint, unit, build, Playwright; API ruff, pytest, migrations on Postgres. |
| Environments | development, staging, production | Separate databases and env vars; staging is `noindex` (robots driven by `NEXT_PUBLIC_ENVIRONMENT`). |

Why not more: no microservices, queues or Kubernetes until a measured need. Background work (emails, reminders) starts as FastAPI background tasks, moves to a simple job runner (e.g. a cron worker or Postgres-backed queue) in Phase 3.

### Content ("basic CMS") in Phase 1
Editorial content is typed TypeScript data in `apps/web/src/content` (categories, articles, updates, glossary, videos, products, states, company and legal pages). Pages read it only through `src/lib/content.ts`, so moving it into Postgres behind an admin editor later doesn't touch page code. Content changes go through Git review, which doubles as an editorial audit trail. Integrity tests fail the build on broken citations, unknown internal links, emoji, or products marked purchasable.

## 4. Sitemap

```
/                               Home (11 sections)
/categories                     Explore Bills
/categories/[12 slugs]          Category guides (13 sections each)
/learn                          Articles + filters      /learn/[slug]   Article / update detail
/updates                        Latest bill updates
/videos   /videos/[slug]        Video library + detail (embed when youtubeId set)
/glossary                       A–Z glossary (anchors per term)
/search?q=                      Site search
/tools                          Calculator directory (available vs planned)
/tools/electricity-cost         Electricity Cost Calculator (bill + appliance)
/compare                        Comparison hub
/compare/electricity-plans      Two-plan comparison with break-even
/states   /states/[51 slugs]    State template (verified national resources until a guide is done)
/ask-alice                      Ask Alice (coming soon, searches guides today)
/shop   /shop/collections/[c]   /shop/[product]   Catalog (coming soon)
/cart   /account                Honest placeholders
/app                            App page, waitlist, FAQ, updates
/social                         Social hub
/community   /community/guidelines   Ask a question, suggest a video
/newsletter  (+ /confirm /unsubscribe /preferences)
/about /mission /meet-alice /contact /press /work-with-us /partnerships /careers /business /editorial-standards /help
/legal/[privacy|terms|cookies|affiliate-disclosure|accessibility|shipping|returns|digital-product-terms]
Future: /dashboard/*, /bills/*, /analyzer, /academy/*, /admin/*
```

## 5. Database architecture

Implemented (Alembic `0001_initial_schema`): `newsletter_subscribers` (hashed confirm/unsubscribe/manage tokens, consent version + timestamp, hashed IP), `waitlist_entries` (unique email+list), `contact_messages` (reference `BLX-…`, status), `community_questions`, `video_ideas` (moderation status). All tables use UUID ids and created/updated timestamps.

Planned (each a module in `apps/api`):

- **Identity:** `users` (auth-provider subject, email, role), `households`, `household_members` (role: owner/member), `audit_log`.
- **Bills (Phase 3):** `providers` (name, category, states), `recurring_bills` (household_id, provider_id, category, nickname, cadence, due_day, autopay, contract_end, promo_end), `bill_statements` (recurring_bill_id, period_start/end, amount_due, due_date, usage, usage_unit, rate, fees JSON, status, paid_at, notes), `rate_changes`, `reminders` (channel, offset_days, next_run_at), `saved_calculations` (tool slug, inputs, outputs, formula version).
- **Documents (Phase 4):** `uploads` (household_id, storage key, sha256, mime, size, scan_status, retention_until), `extractions` (upload_id, model/version, fields JSON, confidence, user_confirmed_at).
- **Content (when moved from files):** `articles`, `article_versions`, `sources` (url, publisher, accessed_at, verified_by), `categories`, `glossary_terms`, `videos`, `state_guides` (state, section, body, source ids, reviewed_at, reviewer).
- **Commerce (Phase 2):** `products` (status draft/coming_soon/published), `product_variants`, `orders`, `order_items`, `refunds`, `download_grants` (signed, expiring), `discount_codes`. Stripe remains the source of truth for payments.
- **Ops:** `feature_flags`, `support_tickets`, `moderation_actions`.

Authorization rule for every bill/household query: scope by `household_id` from the authenticated user's memberships in the service layer (not just the router), with tests that one user can't read another household's rows. Consider Postgres row-level security as a second layer.

## 6. Design system

- **Tokens** (`apps/web/src/app/globals.css` `@theme`): cream `#f4ead0` page, paper `#fbf7ec` surfaces, teal `#2c7a72` primary, teal-ink `#1f5f58` for teal text (AA on cream), deep teal `#163f3b` ink/dark sections, gold `#e3a63c` primary CTA, plum `#8a6ba0`, cash green `#7fa06f`, plus soft tints. The spec's yellow/black palette was replaced by the logo palette provided.
- **Type:** Fraunces (display, soft serif that matches the hand-drawn art) + Inter (UI/body). Fluid `clamp()` headings.
- **Shape:** 20px card radius, 28px panels, pill buttons; two shadow levels.
- **Motion:** subtle rise-in and float; all disabled under `prefers-reduced-motion`.
- **Imagery:** Alice art from the character kit only (`public/alice`, never redrawn); logo from `public/brand`; no emoji; Lucide icons + Simple Icons for social brands.

## 7. Reusable components

`components/ui/primitives` (Button/ButtonLink, Section, SectionHeading, PageHeader, Card, Badge, ComingSoonBadge, Callout, EmptyState), `components/brand` (AliceFigure, AliceAvatar, AliceNote, Logo, BillPreview, PhoneMock), `components/content` (Inline/Blocks rich text with citations, SourceList, CategoryCard, ArticleCard, VideoCard, ToolCard, ProductCard, ProductArt, SearchBox, ArticleBrowser, ShareTools), `components/forms` (fields, NewsletterForm, WaitlistForm, ContactForm, QuestionForm, VideoIdeaForm, newsletter token pages), `components/calculators`, `components/layout` (SiteHeader with dropdowns + mobile menu + search, SiteFooter). Calculator math lives in `lib/calculators` as pure, tested functions.

## 8. Roadmap

See [ROADMAP.md](ROADMAP.md).

## 9. External APIs and accounts needed

| Need | Service | When |
|---|---|---|
| Web hosting | Vercel (or similar) | Launch |
| API hosting + Postgres | Render/Fly/Railway + Neon/Supabase/RDS | Launch |
| Domain/DNS | Existing `billixapp.com` registrar | Launch |
| Transactional email | Resend or Postmark (+ SPF/DKIM/DMARC on the domain) | Launch |
| Error monitoring | Sentry | Launch |
| Privacy-friendly analytics (optional) | Plausible or similar; needs consent update if cookies | Post-launch |
| YouTube channel IDs, social profile URLs | Your accounts (env vars) | When live |
| Auth | Clerk / Supabase Auth | Phase 3 |
| Payments, tax | Stripe, Stripe Tax | Phase 2 |
| Print-on-demand | Printful/Printify (apparel, mugs) | Phase 2 |
| Ebook delivery | Stripe + signed download URLs from private storage | Phase 2 |
| Push notifications | Expo Push | Phase 5 |
| LLM | Anthropic API (Claude) | Phase 4 |
| Live energy data (optional) | EIA Open Data API (free key) for dated updates | Phase 4 |
| App stores | Apple Developer, Google Play Console | Phase 5 |

## 10. Security, privacy, legal and operations

- **Implemented:** strict request validation, honeypots, per-IP rate limiting, salted IP hashes (no raw IPs), hashed single-use tokens, no email enumeration, CORS allow-list, production refuses default secrets, no raw emails or tokens in logs, security headers on the web app, `noindex` outside production, no cookies set.
- **Before launch:** attorney review of the draft legal pages (they're labeled draft); real `IP_HASH_SALT`/`TOKEN_SECRET`; Redis-backed rate limiter if the API runs more than one process; DMARC on the sending domain; backups and restore drill for Postgres; uptime monitoring.
- **Phase 3+:** MFA for admins, RBAC, audit log, household-scoped authorization tests, data export/delete (CCPA-style requests), retention policy.
- **Bill documents:** encryption at rest, private bucket, virus scan, EXIF/metadata stripping, short retention by default, no model training on user documents, human confirmation of extracted values.
- **Content/legal:** educational disclaimers; AI-voice disclosure (already on video pages); FTC endorsement rules if affiliates/sponsors ever appear; sales tax via Stripe Tax; CAN-SPAM (physical mailing address required in newsletter footers before the first send).
- **Ops:** content freshness checks (EIA weekly/monthly, BLS CPI releases) on a calendar; the integrity tests in CI.

## 11. What works now vs. needs integrations

Works now (no outside accounts): all public pages, search, glossary, 12 category guides, 7 articles, 3 dated updates, 8 video entries, state template, electricity calculator, plan comparison, Business Solutions page, and every form against the local API.

Needs accounts/config: sending real email (Resend key), production database, hosting, YouTube video IDs (videos show "premiering soon" until set), social URLs, app store links, shop checkout, accounts, Ask Alice, bill uploads.

## 12. Smallest production-ready launch

1. Deploy `apps/web` (Vercel) and `apps/api` (container) with a managed Postgres; run `alembic upgrade head`.
2. Configure Resend + DNS records; set `EMAIL_PROVIDER=resend`, secrets, `CORS_ORIGINS`, `SITE_URL`.
3. Set `NEXT_PUBLIC_*` env vars (site URL, API URL, `NEXT_PUBLIC_ENVIRONMENT=production`, any live social URLs, YouTube IDs as videos go public).
4. Add a mailing address to the newsletter footer; get the legal drafts reviewed.
5. Point `billixapp.com` at the new host (the Business Solutions content now lives at `/business`).
