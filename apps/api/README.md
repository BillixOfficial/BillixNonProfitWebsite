# Billix API (Phase 1)

FastAPI backend for the Billix consumer bill-education site: **The Billix Brief** newsletter
(double opt-in), app/shop waitlists, contact form, and community question / video-idea
submissions.

Stack: Python 3.12 · FastAPI · SQLAlchemy 2 (typed `Mapped[...]`) · Alembic · Pydantic v2 +
pydantic-settings · PostgreSQL via psycopg 3 (SQLite for tests).

## Layout

```
app/
  main.py                 app factory, CORS, request logging, routers
  models.py               imports every model (Alembic metadata)
  core/
    config.py             Settings (env / .env)
    db.py                 engine, sessions, Base (uuid id, created_at, updated_at)
    security.py           token + IP hashing, honeypot check
    rate_limit.py         RateLimiter protocol + in-memory sliding window
    email.py              EmailSender protocol, Console + Resend senders
    errors.py             {"error": {"code","message","fields"?}} handlers
    logging.py            JSON log formatter
    validation.py         shared field types (email, state, category)
  modules/<newsletter|waitlist|contact|community|health>/
    models.py schemas.py service.py router.py
alembic/                  migrations (0001 = initial schema)
tests/                    pytest suite (SQLite in-memory)
```

## Setup

```bash
cd apps/api
uv venv --python 3.12 .venv            # or: python3.12 -m venv .venv
uv pip install --python .venv/bin/python -e '.[dev]'   # or: .venv/bin/pip install -e '.[dev]'
cp .env.example .env                   # then edit DATABASE_URL etc.
```

### Database

Create the dev database (adjust user/password to your local Postgres):

```bash
createdb -h localhost -p 5432 -U postgres billix_dev
# or: psql -h localhost -U postgres -c 'CREATE DATABASE billix_dev;'
```

and set `DATABASE_URL=postgresql+psycopg://postgres:<password>@localhost:5432/billix_dev`.

## Environment

| Variable | Default | Notes |
|---|---|---|
| `ENVIRONMENT` | `development` | `development`/`test`/`staging`/`production` |
| `DATABASE_URL` | `postgresql+psycopg://localhost:5432/billix_dev` | SQLAlchemy URL |
| `SITE_URL` | `http://localhost:3000` | Base for email links |
| `CORS_ORIGINS` | `http://localhost:3000` | Comma-separated |
| `EMAIL_PROVIDER` | `console` | `console` or `resend` |
| `RESEND_API_KEY` | – | Required when `EMAIL_PROVIDER=resend` |
| `EMAIL_FROM` | `The Billix Brief <brief@localhost>` | Sender address |
| `CONTACT_INBOX` | – | Contact notifications; skipped (with a warning log) if unset |
| `IP_HASH_SALT` | dev value | HMAC salt for IP hashes. **Must be set in production** |
| `TOKEN_SECRET` | dev value | Derives unsubscribe/manage tokens. **Must be set in production** |
| `DOCS_ENABLED` | – | Force `/docs` on/off (off by default in production) |
| `RATE_LIMIT_WRITES` / `RATE_LIMIT_TOKENS` / `RATE_LIMIT_WINDOW_SECONDS` | 5 / 20 / 60 | Per-IP sliding window |
| `TRUST_PROXY_HEADERS` | `false` | Use `X-Forwarded-For` for client IP (only behind a trusted proxy) |
| `NEWSLETTER_CONSENT_VERSION` | `2026-10-v1` | Stored with each subscription; bump when consent copy changes |
| `CONFIRM_TOKEN_TTL_HOURS` | `48` | Confirmation link lifetime |
| `LOG_LEVEL` | `INFO` | |

With `ENVIRONMENT=production` the app refuses to start if `IP_HASH_SALT` / `TOKEN_SECRET` are
the dev defaults or `DATABASE_URL` is SQLite.

## Run

```bash
.venv/bin/alembic upgrade head
.venv/bin/uvicorn app.main:app --reload --port 8000 --no-access-log
```

OpenAPI docs: http://localhost:8000/docs (disabled in production unless `DOCS_ENABLED=true`).
With `EMAIL_PROVIDER=console`, confirmation/unsubscribe links are printed in the JSON logs.

## Migrations

```bash
.venv/bin/alembic upgrade head                                  # apply
.venv/bin/alembic revision --autogenerate -m "describe change"  # after editing models
.venv/bin/alembic check                                         # fail if models drifted
.venv/bin/alembic upgrade head --sql                            # print SQL without a DB
```

## Test & lint

```bash
.venv/bin/python -m pytest
.venv/bin/ruff check .
.venv/bin/ruff format --check .
```

Tests use an in-memory SQLite DB, a capturing email sender, and also run the Alembic migration
up/down against a temp SQLite file plus `alembic check`.

## Docker

```bash
docker build -t billix-api .
docker run --rm --env-file .env billix-api alembic upgrade head   # release step
docker run --rm -p 8000:8000 --env-file .env billix-api
```

## Endpoints

All errors use `{"error": {"code": "...", "message": "...", "fields": {...}?}}`.
Unknown body fields are rejected (422). Emails are trimmed and lowercased.
`website` is a honeypot: if non-empty the API returns the normal success response and stores
nothing.

| Method | Path | Body / query | Success |
|---|---|---|---|
| GET | `/healthz` | – | 200 `{"status":"ok"}` |
| GET | `/readyz` | – | 200 if DB reachable, else 503 |
| POST | `/v1/newsletter/subscribe` | `{email, consent: true, topics?: ["weekly"\|"monthly-review"\|"regional"], state?: "TX", source?, website?}` | 202, identical generic message for new/pending/active/unknown addresses |
| POST | `/v1/newsletter/confirm` | `{token}` | 200 `{status:"active"}`; 400 `invalid_token` if unknown/used/expired |
| POST | `/v1/newsletter/unsubscribe` | `{token}` | 200 `{status:"unsubscribed"}` (idempotent); 400 `invalid_token` |
| GET | `/v1/newsletter/preferences?token=` | manage token | 200 `{email (masked), status, topics, state}` |
| PUT | `/v1/newsletter/preferences?token=` | `{topics, state?}` | 200; 409 if unsubscribed |
| POST | `/v1/waitlist` | `{email, list: "app"\|"shop", platform?: "ios"\|"android"\|"both", consent: true, website?}` | 202, idempotent per (email, list) |
| POST | `/v1/contact` | `{name, email, topic: general\|press\|partnerships\|business\|support\|correction, message (10–5000), website?}` | 201 `{reference: "BLX-XXXXXXXX"}`; notifies `CONTACT_INBOX` |
| POST | `/v1/community/questions` | `{name?, email?, state?, category, question (10–2000), consent_to_publish, website?}` | 201 `{id, moderation_status:"pending"}` |
| POST | `/v1/community/video-ideas` | `{name?, email?, category, idea (10–2000), website?}` | 201 `{id, moderation_status:"pending"}` |

Categories: `electricity, heating-cooling, water-sewer, internet-phone, housing, insurance,
transportation, home-services, banking-debt, healthcare-family, subscriptions, government-fees`.

Rate limits (per IP, 60 s sliding window): all form POSTs share a 5-request bucket;
confirm/unsubscribe/preferences share a 20-request bucket. Exceeding returns 429
`rate_limited` with `Retry-After: 60`.

### Email links

- Confirm: `{SITE_URL}/newsletter/confirm?token=…` (single use, expires after 48 h)
- Unsubscribe: `{SITE_URL}/newsletter/unsubscribe?token=…` (long-lived)
- Preferences: `{SITE_URL}/newsletter/preferences?token=…` (long-lived)

The website pages at those paths should POST the token to the matching API endpoint.

## Privacy & security notes

- Raw tokens are never stored: the DB holds `sha256(token)`. Confirmation tokens are random and
  single use. Unsubscribe/manage tokens are `HMAC(TOKEN_SECRET, purpose:id:token_version)`, so
  future campaign emails can re-derive a working unsubscribe link without storing it; bump
  `token_version` to revoke them.
- IPs are stored only as `HMAC-SHA256(IP_HASH_SALT, ip)`.
- Logs are JSON; they include an email fingerprint (`email_fp`) instead of addresses, and request
  logs record the path without query strings (tokens). Run uvicorn with `--no-access-log`.
- CORS allows only `CORS_ORIGINS`, methods GET/POST/PUT, no credentials.

## Known limitations / next steps

- The rate limiter is in-memory and per-process; with multiple workers/instances swap in a
  Redis-backed `RateLimiter`.
- Emails are sent via FastAPI background tasks (in-process, no retry queue).
- `ResendEmailSender` follows Resend's documented `POST /emails` API but has not been tested
  against the live service.
- No admin/moderation endpoints yet (moderate via SQL for now).
