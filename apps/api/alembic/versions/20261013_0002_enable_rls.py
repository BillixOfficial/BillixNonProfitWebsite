"""Enable row-level security on every table.

On Supabase, tables in the public schema are reachable through the auto-generated
Data API with the public anon key. With RLS on and no policies, that API can read
or write nothing; this API connects as the table owner and is unaffected.
Harmless on plain PostgreSQL.

Revision ID: 0002
Revises: 0001
Create Date: 2026-10-13
"""

from collections.abc import Sequence

from alembic import op

revision: str = '0002'
down_revision: str | None = '0001'
branch_labels: str | Sequence[str] | None = None
depends_on: str | Sequence[str] | None = None

TABLES = (
    'community_questions',
    'community_video_ideas',
    'contact_messages',
    'newsletter_subscribers',
    'waitlist_entries',
)


def upgrade() -> None:
    if op.get_bind().dialect.name != 'postgresql':
        return
    for t in TABLES:
        op.execute(f'ALTER TABLE {t} ENABLE ROW LEVEL SECURITY')
    # Supabase's API roles: remove table access outright (no-op elsewhere).
    op.execute(
        """
        DO $$
        BEGIN
          IF EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'anon') THEN
            REVOKE ALL ON community_questions, community_video_ideas, contact_messages,
              newsletter_subscribers, waitlist_entries FROM anon, authenticated;
          END IF;
        END $$;
        """
    )


def downgrade() -> None:
    if op.get_bind().dialect.name != 'postgresql':
        return
    for t in TABLES:
        op.execute(f'ALTER TABLE {t} DISABLE ROW LEVEL SECURITY')
