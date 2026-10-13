import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ExternalLink } from 'lucide-react'
import { nationalStateResources, stateBySlug, states } from '@/content/states'
import { categoryIndex } from '@/content/category-index'
import { CategoryCard } from '@/components/content/cards'
import { Badge, ButtonLink, Callout, PageHeader, Section, SectionHeading } from '@/components/ui/primitives'

export function generateStaticParams() {
  return states.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: PageProps<'/states/[slug]'>): Promise<Metadata> {
  const { slug } = await params
  const s = stateBySlug(slug)
  return s ? { title: `${s.name} Bill Resources`, description: `Where to find utility regulators, bill assistance and consumer help in ${s.name}.`, alternates: { canonical: `/states/${s.slug}` } } : {}
}

const planned = ['Utility providers', 'Electricity market (regulated or choice)', 'Gas service', 'Water billing resources', 'Consumer protection agencies', 'Utility assistance programs', 'Energy rebates', 'Local cost comparisons']

export default async function StatePage({ params }: PageProps<'/states/[slug]'>) {
  const { slug } = await params
  const s = stateBySlug(slug)
  if (!s) notFound()
  return (
    <>
      <PageHeader title={`${s.name} bill resources`} lede={`Starting points for understanding and getting help with household bills in ${s.name}.`}>
        <div className="flex flex-wrap gap-2"><Badge tone="gold">State guide in progress</Badge><Link href="/states" className="text-sm font-semibold text-teal-ink hover:underline">All states</Link></div>
      </PageHeader>
      <Section>
        <Callout tone="note" title={`Our ${s.name} guide isn’t published yet`}>We&rsquo;re researching {s.name}&rsquo;s providers, rules and programs from official sources. Until it&rsquo;s verified, use these national resources, which cover every state.</Callout>
        <SectionHeading className="mt-10" title="Verified national resources" />
        <ul className="mt-6 grid gap-4 md:grid-cols-2">
          {nationalStateResources.map((r) => (
            <li key={r.url} className="rounded-[var(--radius-card)] border border-line bg-paper p-5">
              <a href={r.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-lg font-semibold text-teal-deep underline decoration-1 underline-offset-3 hover:decoration-2">{r.title}<ExternalLink className="size-4" aria-hidden /></a>
              <p className="mt-1 text-sm text-muted">{r.publisher}</p>
              <p className="mt-2 text-[0.97rem]">{r.summary}</p>
            </li>
          ))}
        </ul>
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold text-teal-deep">Coming to this page</h2>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {planned.map((p) => <li key={p} className="rounded-lg border border-dashed border-line px-3 py-2 text-[0.93rem] text-muted">{p}</li>)}
            </ul>
          </div>
          <div className="rounded-[var(--radius-card)] border border-line bg-paper p-6">
            <h2 className="text-xl font-semibold text-teal-deep">Have a {s.name} bill question?</h2>
            <p className="mt-2 text-muted">Questions from {s.name} help us decide what to research first.</p>
            <ButtonLink href="/community#ask" variant="secondary" size="sm" className="mt-5">Ask a question</ButtonLink>
          </div>
        </div>
        <SectionHeading className="mt-14" title="Learn how each bill works" lede="These guides apply nationwide and point out what varies by state." />
        <div className="mt-6 grid gap-3 sm:grid-cols-3 lg:grid-cols-6">{categoryIndex.map((c) => <CategoryCard key={c.slug} c={c} compact />)}</div>
      </Section>
    </>
  )
}
