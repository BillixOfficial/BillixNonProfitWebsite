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
`RESEND_API_KEY` + `EMAIL_FROM` (send real email; otherwise emails are logged),
`CONTACT_INBOX`, `SITE_URL`, `CORS_ORIGINS`, `TOKEN_SECRET`, `IP_HASH_SALT`.

Read submissions in the Supabase Table Editor: `contact_messages`,
`community_questions`, `community_video_ideas`, `newsletter_subscribers`,
`waitlist_entries`.
