import type { Metadata } from 'next'
import Link from 'next/link'
import { AliceAvatar, AliceFace } from '@/components/brand/alice'
import { SearchBox } from '@/components/content/search-box'
import { ComingSoonBadge, Section } from '@/components/ui/primitives'

export const metadata: Metadata = {
  title: 'Ask Alice',
  description: 'Ask Alice is Billix’s upcoming bill assistant, answering from verified Billix guides with sources. Not available yet.',
  alternates: { canonical: '/ask-alice' },
}

const examples = ['Why is my electricity delivery charge so high?', 'Should I switch from oil to natural gas?', 'What does escrow mean?', 'How can I understand my water bill?']

export default function AskAlicePage() {
  return (
    <>
      <section className="border-b border-line bg-paper">
        <div className="container-x grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-[1fr_auto]">
          <div className="max-w-2xl">
            <ComingSoonBadge className="text-teal-ink" />
            <h1 className="mt-4 text-[clamp(2.4rem,5.5vw,4rem)] font-semibold leading-[1.02] text-teal-deep">Ask Alice</h1>
            <p className="mt-5 text-xl text-muted">A bill assistant that answers from verified Billix guides, shows its sources, and points you to the right calculator. It isn&rsquo;t connected yet, so for now, search our guides.</p>
            <SearchBox className="mt-8" size="md" />
          </div>
          <AliceFace mood="idea" size={300} className="mx-auto" />
        </div>
      </section>
      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-teal-deep">Questions Alice will answer</h2>
            <ul className="mt-6 space-y-3" aria-label="Example questions">
              {examples.map((q) => (
                <li key={q} className="flex items-start gap-3">
                  <AliceAvatar size={36} className="shrink-0" />
                  <Link href={`/search?q=${encodeURIComponent(q)}`} className="rounded-2xl rounded-tl-md border border-line bg-white px-4 py-2.5 text-teal-deep hover:border-teal">{q}</Link>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-muted">These links search our existing guides today.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-teal-deep">How it will work</h2>
            <ul className="prose-billix mt-4 list-disc space-y-2 pl-5 marker:text-teal">
              <li>Answers grounded in Billix guides and the official sources they cite, with links.</li>
              <li>It will say when it doesn&rsquo;t know, and never invent rates, laws, rebates or savings.</li>
              <li>Suggestions for related articles and calculators.</li>
              <li>State-specific answers only where we have verified state information.</li>
              <li>A feedback button on every answer, reviewed by our team.</li>
              <li>Education only: no personal financial advice.</li>
            </ul>
          </div>
        </div>
      </Section>
    </>
  )
}
