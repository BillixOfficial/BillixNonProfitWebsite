-- Shared per-IP rate limiting for the `api` Edge Function (instances don't share memory).
CREATE TABLE rate_limit_hits (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    ip_hash VARCHAR(64) NOT NULL,
    bucket VARCHAR(16) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);
CREATE INDEX ix_rate_limit_hits_lookup ON rate_limit_hits (ip_hash, bucket, created_at);
ALTER TABLE rate_limit_hits ENABLE ROW LEVEL SECURITY;
REVOKE ALL ON rate_limit_hits FROM anon, authenticated;
