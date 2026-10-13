import type { Metadata } from 'next'
import { getUpdates } from '@/lib/content'
import { ArticleCard } from '@/components/content/cards'
import { NewsletterForm } from '@/components/forms/newsletter-form'
import { EmptyState, PageHeader, Section } from '@/components/ui/primitives'

export const metadata: Metadata = {
  title: 'Bill Updates',
  description: 'Dated updates on utility rates, fuel prices, billing practices and household costs, with where each applies.',
  alternates: { canonical: '/updates' },
}

export default function UpdatesPage() {
  const updates = getUpdates()
  return (
    <>
      <PageHeader title="What&rsquo;s changing in household bills" lede="Short, sourced updates. Each one shows the date of the data and the places it applies, so you can tell whether it&rsquo;s about you." />
      <Section>
        {updates.length ? (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{updates.map((a) => <ArticleCard key={a.slug} a={a} />)}</div>
        ) : (
          <EmptyState title="No updates yet">Bill updates will appear here as they&rsquo;re published.</EmptyState>
        )}
        <div className="mt-14 grid items-center gap-6 rounded-[var(--radius-panel)] border border-line bg-paper p-6 sm:p-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-teal-deep">Get updates by email</h2>
            <p className="mt-2 text-muted">The Billix Brief sends the important ones, with context.</p>
          </div>
          <NewsletterForm source="updates" />
        </div>
      </Section>
    </>
  )
}
