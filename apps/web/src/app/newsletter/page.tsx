import type { Metadata } from 'next'
import { NewsletterForm } from '@/components/forms/newsletter-form'
import { AliceFace } from '@/components/brand/alice'
import { EmptyState, PageHeader, Section } from '@/components/ui/primitives'

export const metadata: Metadata = {
  title: 'The Billix Brief Newsletter',
  description: 'Smarter bills, delivered to your inbox. Short, sourced emails about the household bills you pay.',
  alternates: { canonical: '/newsletter' },
}

export default function NewsletterPage() {
  return (
    <>
      <PageHeader title="Smarter bills, delivered to your inbox." lede="Plain-English explainers, a monthly bill-review checklist, and rate updates when they matter. Every claim sourced. Unsubscribe in one click." aside={<AliceFace mood="wink" size={260} />} />
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[var(--radius-panel)] border border-line bg-paper p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-teal-deep">Subscribe</h2>
            <p className="mb-6 mt-2 text-muted">We&rsquo;ll send a confirmation email first. Nothing else arrives until you click it.</p>
            <NewsletterForm source="newsletter-page" showTopics />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-teal-deep">What you&rsquo;ll get</h2>
            <ul className="prose-billix mt-4 list-disc space-y-2 pl-5 marker:text-teal">
              <li><strong>Weekly:</strong> one bill, explained, with the sources.</li>
              <li><strong>Monthly review:</strong> a short checklist for looking over your bills.</li>
              <li><strong>Regional updates:</strong> rate or fee changes for your area, once we cover it.</li>
            </ul>
            <p className="mt-4 text-sm text-muted">We never sell or share your email. You can change topics or unsubscribe from a link in every email.</p>
            <h2 id="archive" className="mt-12 text-2xl font-semibold text-teal-deep">Archive</h2>
            <div className="mt-4"><EmptyState title="No issues yet">The first issue of The Billix Brief hasn&rsquo;t gone out. Past issues will be listed here.</EmptyState></div>
          </div>
        </div>
      </Section>
    </>
  )
}
