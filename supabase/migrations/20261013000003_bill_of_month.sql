-- Bill of the Month. Rounds run the 16th through the 15th of the next month. Optional
-- bills live in the private `bill-entries` bucket. Like every other table, RLS is on with
-- no policies: only the `api` Edge Function (service role) can read or write. Entries are
-- purged after 90 days, except winners and bills used in a video (featured).
CREATE TABLE bill_of_month_entries (
    id UUID PRIMARY KEY,
    period VARCHAR(7) NOT NULL,                 -- 'YYYY-MM' = round ending the 15th of that month (ET)
    enter_drawing BOOLEAN NOT NULL,             -- entered the free $50 drawing (needs no bill)
    first_name VARCHAR(60) NOT NULL,
    state VARCHAR(2) NOT NULL,
    email VARCHAR(254) NOT NULL,
    bill_type VARCHAR(16),                      -- only when a bill was sent for a breakdown
    note TEXT,
    heard_from VARCHAR(16),
    src VARCHAR(40),                            -- campaign tag from ?src= links
    consent_feature BOOLEAN NOT NULL DEFAULT false, -- may show the redacted bill in content
    consent_credit BOOLEAN NOT NULL DEFAULT false,
    eligibility_confirmed_at TIMESTAMP WITH TIME ZONE NOT NULL,
    redaction_confirmed_at TIMESTAMP WITH TIME ZONE,
    file_path TEXT,
    file_mime VARCHAR(40),
    file_size INTEGER,
    file_sha256 VARCHAR(64),
    status VARCHAR(16) NOT NULL DEFAULT 'received',
    featured BOOLEAN NOT NULL DEFAULT false,
    ip_hash VARCHAR(64),
    created_at TIMESTAMP WITH TIME ZONE NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL,
    CONSTRAINT uq_bill_of_month_entries_email_period UNIQUE (email, period),
    CONSTRAINT ck_bill_of_month_entries_bill_type CHECK (bill_type IN ('electric', 'gas', 'heating-oil', 'propane', 'water-sewer', 'trash', 'internet', 'phone', 'tv')),
    CONSTRAINT ck_bill_of_month_entries_heard_from CHECK (heard_from IN ('youtube', 'tiktok', 'website', 'friend', 'other')),
    CONSTRAINT ck_bill_of_month_entries_something CHECK (enter_drawing OR file_path IS NOT NULL),
    CONSTRAINT ck_bill_of_month_entries_bill CHECK ((file_path IS NULL) = (bill_type IS NULL)),
    CONSTRAINT ck_bill_of_month_entries_feature CHECK (NOT consent_feature OR file_path IS NOT NULL),
    CONSTRAINT ck_bill_of_month_entries_status CHECK (status IN ('received', 'winner', 'alternate', 'disqualified'))
);
CREATE INDEX ix_bill_of_month_entries_period ON bill_of_month_entries (period, status);
ALTER TABLE bill_of_month_entries ENABLE ROW LEVEL SECURITY;
REVOKE ALL ON bill_of_month_entries FROM anon, authenticated;

-- Cookie-free page visits per round and campaign tag, for conversion tracking:
--   SELECT src, count(DISTINCT ip_hash) AS visitors FROM bill_of_month_page_views WHERE period = '2026-11' GROUP BY src;
CREATE TABLE bill_of_month_page_views (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    period VARCHAR(7) NOT NULL,
    src VARCHAR(40),
    ip_hash VARCHAR(64),
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);
CREATE INDEX ix_bill_of_month_page_views_period ON bill_of_month_page_views (period, src);
ALTER TABLE bill_of_month_page_views ENABLE ROW LEVEL SECURITY;
REVOKE ALL ON bill_of_month_page_views FROM anon, authenticated;

-- Only bills whose entrant checked "you may show my bill" can be featured:
--   SELECT id, bill_type, state, note, file_path FROM bill_of_month_entries
--    WHERE period = '2026-11' AND consent_feature;

-- Private bucket: no public URL, 10 MB cap, images and PDFs only. No storage policies,
-- so only the service role can touch it.
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES ('bill-entries', 'bill-entries', false, 10485760,
        ARRAY['image/jpeg', 'image/png', 'image/webp', 'image/heic', 'application/pdf'])
ON CONFLICT (id) DO NOTHING;

-- Random draw for a month, recorded in the table. Run in the SQL editor, e.g.:
--   SELECT * FROM draw_bill_of_month_winner('2026-11');   -- round ending Nov 15, 2026
-- It picks uniformly among that round's 'received' drawing entries (bill or no bill: equal odds) using gen_random_uuid()
-- (cryptographically random), marks it 'winner', and returns it.
CREATE OR REPLACE FUNCTION draw_bill_of_month_winner(p_period TEXT)
RETURNS SETOF bill_of_month_entries
LANGUAGE plpgsql SECURITY INVOKER AS $$
DECLARE picked UUID;
BEGIN
  -- One active winner per month. If a winner forfeits, set their status to
  -- 'disqualified' first, then run this again to draw an alternate.
  IF EXISTS (SELECT 1 FROM bill_of_month_entries WHERE period = p_period AND status = 'winner') THEN
    RAISE EXCEPTION 'Period % already has a winner', p_period;
  END IF;
  SELECT id INTO picked FROM bill_of_month_entries
   WHERE period = p_period AND status = 'received' AND enter_drawing
   ORDER BY gen_random_uuid() LIMIT 1;
  IF picked IS NULL THEN RETURN; END IF;
  UPDATE bill_of_month_entries SET status = 'winner', updated_at = now() WHERE id = picked;
  RETURN QUERY SELECT * FROM bill_of_month_entries WHERE id = picked;
END $$;
REVOKE ALL ON FUNCTION draw_bill_of_month_winner(TEXT) FROM PUBLIC, anon, authenticated;

-- Open/close switch read by the `api` function. Entries are closed while open_from is NULL
-- or in the future, and after close_after (if set). Edit this row in the Table Editor.
CREATE TABLE bill_of_month_settings (
    id SMALLINT PRIMARY KEY DEFAULT 1 CHECK (id = 1),
    open_from TIMESTAMP WITH TIME ZONE,
    close_after TIMESTAMP WITH TIME ZONE,
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);
INSERT INTO bill_of_month_settings (id) VALUES (1) ON CONFLICT (id) DO NOTHING;
ALTER TABLE bill_of_month_settings ENABLE ROW LEVEL SECURITY;
REVOKE ALL ON bill_of_month_settings FROM anon, authenticated;
