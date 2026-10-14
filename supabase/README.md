# Supabase (BillixOfficial project)

The website's forms are served by the **`api` Edge Function** in the BillixOfficial
Supabase project (`wgxhfngspnrtrvfszthv`):

    https://wgxhfngspnrtrvfszthv.supabase.co/functions/v1/api

It implements the same endpoints as `apps/api` (newsletter double opt-in, waitlists,
contact, community questions and video ideas) and uses the service role key that
Supabase injects, so no database password is stored anywhere.

- `functions/api/index.ts`: the function. Deployed with JWT verification **off**
  (anonymous public forms); protected by validation, a honeypot field and per-IP
  rate limits stored in `rate_limit_hits`.
- `migrations/`: the schema. Every table has RLS on with no policies, and the
  `anon`/`authenticated` roles have no grants, so the public Data API can't read them.

Optional function secrets (Supabase → Edge Functions → Secrets):
`RESEND_API_KEY` (send real email; otherwise emails are logged). Defaults: from
`info@emails.billixapp.com` (the Resend-verified subdomain), replies to and contact
alerts at `info@billixapp.com`; override with `EMAIL_FROM`, `EMAIL_REPLY_TO`,
`CONTACT_INBOX`, `SITE_URL`, `CORS_ORIGINS`, `TOKEN_SECRET`, `IP_HASH_SALT`.

Read submissions in the Supabase Table Editor: `contact_messages`,
`community_questions`, `community_video_ideas`, `newsletter_subscribers`,
`waitlist_entries`, `bill_of_month_entries`.

**Bill of the Month** (`/bill-of-the-month`):
- Open or close entries by editing the one row in `bill_of_month_settings`
  (`open_from`, `close_after`). It takes effect within a minute.
- Bills sent for breakdowns are in the private `bill-entries` storage bucket.
- After each round closes on the 15th, run
  `SELECT * FROM draw_bill_of_month_winner('YYYY-MM');` (YYYY-MM = the month the round ends).
- Set `featured = true` on bills used in a video so they're kept past 90 days.
- Visits per campaign link are in `bill_of_month_page_views`.
