# Billix

**Understand Your Bills. Keep More of Your Money.**

Billix is an educational platform that explains the household bills people pay: why costs change, how charges are calculated and what options exist. Guides, calculators and videos are narrated by Alice.

```
apps/web   Next.js 16 website (TypeScript, Tailwind CSS 4)
apps/api   FastAPI + SQLAlchemy + Alembic API (newsletter, waitlist, contact, community)
docs/      Architecture and roadmap
```

- Architecture, sitemap, data model, security: [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md)
- Phases and status: [docs/ROADMAP.md](docs/ROADMAP.md)
- API details: [apps/api/README.md](apps/api/README.md)

## Run locally

Requirements: Node 20.9+ and Python 3.12. PostgreSQL 16 for the API (SQLite works for a quick local try).

```bash
# API
cd apps/api
python3.12 -m venv .venv && .venv/bin/pip install -e '.[dev]'
cp .env.example .env            # set DATABASE_URL (with password) and secrets
.venv/bin/alembic upgrade head
.venv/bin/uvicorn app.main:app --reload --port 8000

# Website (second terminal)
cd apps/web
npm install
cp .env.example .env.local
npm run dev                     # http://localhost:3000
```

Without `NEXT_PUBLIC_API_URL`, the site still runs; forms show an "opens soon" notice instead of pretending to work.

## Test

```bash
cd apps/web && npm run check      # typecheck + lint + unit/content-integrity tests
cd apps/web && npm run test:e2e   # Playwright (builds and starts the site)
cd apps/api && .venv/bin/pytest && .venv/bin/ruff check .
```

## Editing content

All editorial content is typed data in `apps/web/src/content/`. Every factual claim cites a source with `[^n]`; the content-integrity tests fail on broken citations, unknown internal links, emoji, or products marked for sale. To publish a video, set its `youtubeId` in `src/content/videos.ts`.

## Brand colors

| Token | Hex | Use |
|---|---|---|
| Cream | `#f4ead0` | page background |
| Teal | `#2c7a72` | primary: buttons/links |
| Deep teal | `#163f3b` | dark sections, ink |
| Gold | `#e3a63c` | accent, primary CTA |
| Plum | `#8a6ba0` | accent (pig) |
| Cash green | `#7fa06f` | accent (dollars) |
