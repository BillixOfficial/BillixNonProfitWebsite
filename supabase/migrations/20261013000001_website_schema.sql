-- Billix website schema (applied to the BillixOfficial Supabase project on 2026-10-13).
-- Generated from apps/api Alembic migrations 0001-0002; keep them in sync.


CREATE TABLE alembic_version (
    version_num VARCHAR(32) NOT NULL, 
    CONSTRAINT alembic_version_pkc PRIMARY KEY (version_num)
);

-- Running upgrade  -> 0001

CREATE TABLE community_questions (
    name VARCHAR(120), 
    email VARCHAR(254), 
    state VARCHAR(2), 
    category VARCHAR(32) NOT NULL, 
    question TEXT NOT NULL, 
    consent_to_publish BOOLEAN NOT NULL, 
    moderation_status VARCHAR(16) NOT NULL, 
    ip_hash VARCHAR(64), 
    id UUID NOT NULL, 
    created_at TIMESTAMP WITH TIME ZONE NOT NULL, 
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL, 
    CONSTRAINT pk_community_questions PRIMARY KEY (id), 
    CONSTRAINT ck_community_questions_category_valid CHECK (category IN ('electricity', 'heating-cooling', 'water-sewer', 'internet-phone', 'housing', 'insurance', 'transportation', 'home-services', 'banking-debt', 'healthcare-family', 'subscriptions', 'government-fees')), 
    CONSTRAINT ck_community_questions_moderation_status_valid CHECK (moderation_status IN ('pending', 'approved', 'rejected'))
);

CREATE INDEX ix_community_questions_category ON community_questions (category);

CREATE INDEX ix_community_questions_moderation_status ON community_questions (moderation_status);

CREATE TABLE community_video_ideas (
    name VARCHAR(120), 
    email VARCHAR(254), 
    category VARCHAR(32) NOT NULL, 
    idea TEXT NOT NULL, 
    moderation_status VARCHAR(16) NOT NULL, 
    ip_hash VARCHAR(64), 
    id UUID NOT NULL, 
    created_at TIMESTAMP WITH TIME ZONE NOT NULL, 
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL, 
    CONSTRAINT pk_community_video_ideas PRIMARY KEY (id), 
    CONSTRAINT ck_community_video_ideas_category_valid CHECK (category IN ('electricity', 'heating-cooling', 'water-sewer', 'internet-phone', 'housing', 'insurance', 'transportation', 'home-services', 'banking-debt', 'healthcare-family', 'subscriptions', 'government-fees')), 
    CONSTRAINT ck_community_video_ideas_moderation_status_valid CHECK (moderation_status IN ('pending', 'approved', 'rejected'))
);

CREATE INDEX ix_community_video_ideas_category ON community_video_ideas (category);

CREATE INDEX ix_community_video_ideas_moderation_status ON community_video_ideas (moderation_status);

CREATE TABLE contact_messages (
    reference VARCHAR(16) NOT NULL, 
    name VARCHAR(120) NOT NULL, 
    email VARCHAR(254) NOT NULL, 
    topic VARCHAR(16) NOT NULL, 
    message TEXT NOT NULL, 
    status VARCHAR(16) NOT NULL, 
    ip_hash VARCHAR(64), 
    id UUID NOT NULL, 
    created_at TIMESTAMP WITH TIME ZONE NOT NULL, 
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL, 
    CONSTRAINT pk_contact_messages PRIMARY KEY (id), 
    CONSTRAINT ck_contact_messages_status_valid CHECK (status IN ('new', 'in_progress', 'closed')), 
    CONSTRAINT ck_contact_messages_topic_valid CHECK (topic IN ('general', 'press', 'partnerships', 'business', 'support', 'correction'))
);

CREATE UNIQUE INDEX ix_contact_messages_reference ON contact_messages (reference);

CREATE TABLE newsletter_subscribers (
    email VARCHAR(254) NOT NULL, 
    status VARCHAR(16) NOT NULL, 
    topics JSON NOT NULL, 
    state VARCHAR(2), 
    source VARCHAR(100), 
    consent_text_version VARCHAR(40) NOT NULL, 
    consent_at TIMESTAMP WITH TIME ZONE NOT NULL, 
    consent_ip_hash VARCHAR(64), 
    confirm_token_hash VARCHAR(64), 
    confirm_token_expires_at TIMESTAMP WITH TIME ZONE, 
    confirmed_at TIMESTAMP WITH TIME ZONE, 
    token_version INTEGER NOT NULL, 
    unsubscribe_token_hash VARCHAR(64), 
    manage_token_hash VARCHAR(64), 
    unsubscribed_at TIMESTAMP WITH TIME ZONE, 
    id UUID NOT NULL, 
    created_at TIMESTAMP WITH TIME ZONE NOT NULL, 
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL, 
    CONSTRAINT pk_newsletter_subscribers PRIMARY KEY (id), 
    CONSTRAINT ck_newsletter_subscribers_status_valid CHECK (status IN ('pending', 'active', 'unsubscribed'))
);

CREATE UNIQUE INDEX ix_newsletter_subscribers_confirm_token_hash ON newsletter_subscribers (confirm_token_hash);

CREATE UNIQUE INDEX ix_newsletter_subscribers_email ON newsletter_subscribers (email);

CREATE UNIQUE INDEX ix_newsletter_subscribers_manage_token_hash ON newsletter_subscribers (manage_token_hash);

CREATE UNIQUE INDEX ix_newsletter_subscribers_unsubscribe_token_hash ON newsletter_subscribers (unsubscribe_token_hash);

CREATE TABLE waitlist_entries (
    email VARCHAR(254) NOT NULL, 
    list VARCHAR(16) NOT NULL, 
    platform VARCHAR(16), 
    consent_at TIMESTAMP WITH TIME ZONE NOT NULL, 
    ip_hash VARCHAR(64), 
    id UUID NOT NULL, 
    created_at TIMESTAMP WITH TIME ZONE NOT NULL, 
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL, 
    CONSTRAINT pk_waitlist_entries PRIMARY KEY (id), 
    CONSTRAINT ck_waitlist_entries_list_valid CHECK (list IN ('app', 'shop')), 
    CONSTRAINT ck_waitlist_entries_platform_valid CHECK (platform IN ('ios', 'android', 'both')), 
    CONSTRAINT uq_waitlist_entries_email_list UNIQUE (email, list)
);

CREATE INDEX ix_waitlist_entries_email ON waitlist_entries (email);

INSERT INTO alembic_version (version_num) VALUES ('0001') RETURNING alembic_version.version_num;

-- Running upgrade 0001 -> 0002

ALTER TABLE community_questions ENABLE ROW LEVEL SECURITY;

ALTER TABLE community_video_ideas ENABLE ROW LEVEL SECURITY;

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

ALTER TABLE waitlist_entries ENABLE ROW LEVEL SECURITY;

ALTER TABLE alembic_version ENABLE ROW LEVEL SECURITY;

DO $$
        BEGIN
          IF EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'anon') THEN
            REVOKE ALL ON community_questions, community_video_ideas, contact_messages,
              newsletter_subscribers, waitlist_entries, alembic_version FROM anon, authenticated;
          END IF;
        END $$;

UPDATE alembic_version SET version_num='0002' WHERE alembic_version.version_num = '0001';


