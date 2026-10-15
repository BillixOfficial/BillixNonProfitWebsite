import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ExternalLink } from 'lucide-react'
import { nationalStateResources, stateBySlug, states, type StateEntry } from '@/content/states'
import { statePricePeriod, statePriceSource, stateResidentialPrice, usResidentialPrice } from '@/content/state-prices'
import { categoryIndex } from '@/content/category-index'
import type { StateGuide, StateLink } from '@/content/types'
import { CategoryCard } from '@/components/content/cards'
import { Inline, SourceList } from '@/components/content/rich-text'
import { AliceFace } from '@/components/brand/alice'
import { ButtonLink, Callout, PageHeader, Section, SectionHeading, formatDate } from '@/components/ui/primitives'

export function generateStaticParams() {
  return states.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: PageProps<'/states/[slug]'>): Promise<Metadata> {
  const { slug } = await params
  const s = stateBySlug(slug)
  if (!s) return {}
  return {
    title: s.guide ? `${s.name} Utility Bills: Regulators, Shutoff Rules and Bill Help` : `${s.name} Bill Resources`,
    description: s.guide
      ? `Who regulates ${s.name} utilities, whether you can choose your electricity supplier, shutoff protections, and where to get help paying bills. Sourced from official agencies.`
      : `Where to find utility regulators, bill assistance and consumer help in ${s.name}.`,
    alternates: { canonical: `/states/${s.slug}` },
    // Placeholder pages stay out of search results until the state guide is published.
    ...(s.guidePublished ? {} : { robots: { index: false, follow: true } }),
  }
}

const article = (name: string) => (/^[AEIO]/.test(name) ? 'an' : 'a')

const marketLabel: Record<StateGuide['electricity']['market'], string> = {
  regulated: 'Regulated: your utility sets the price',
  choice: 'Retail choice: you can pick a supplier',
  partial: 'Partly open: choice in some areas or for some customers',
}

export default async function StatePage({ params }: PageProps<'/states/[slug]'>) {
  const { slug } = await params
  const s = stateBySlug(slug)
  if (!s) notFound()
  return s.guide ? <GuidePage s={s} g={s.guide} /> : <Placeholder s={s} />
}

const cite = 'state-src'

function LinkList({ items }: { items: StateLink[] }) {
  return (
    <ul className="mt-4 grid gap-4 md:grid-cols-2">
      {items.map((r) => (
        <li key={r.url} className="rounded-[var(--radius-card)] border border-line bg-white p-5">
          <a href={r.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-lg font-semibold text-teal-deep underline decoration-1 underline-offset-3 hover:decoration-2">
            {r.name}
            <ExternalLink className="size-4 shrink-0" aria-hidden />
          </a>
          <p className="mt-2 text-[0.97rem]"><Inline text={r.summary} citePrefix={cite} /></p>
        </li>
      ))}
    </ul>
  )
}

function Block({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-line pt-10">
      <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold leading-tight text-teal-deep">{title}</h2>
      <div className="mt-4 space-y-4 text-[1.05rem] leading-relaxed">{children}</div>
    </section>
  )
}

function OutLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-semibold text-teal-ink underline decoration-1 underline-offset-3 hover:decoration-2">
      {children}
      <ExternalLink className="size-3.5" aria-hidden />
    </a>
  )
}

function GuidePage({ s, g }: { s: StateEntry; g: StateGuide }) {
  const [now, before] = stateResidentialPrice[s.code]
  const vsUs = ((now - usResidentialPrice.current) / usResidentialPrice.current) * 100
  const yoy = ((now - before) / before) * 100
  // The EIA price table is appended after the guide's own sources.
  const priceCite = g.sources.length + 1
  const sources = [...g.sources, statePriceSource]
  const toc: [string, string][] = [
    ['regulator', 'Who regulates your utilities'],
    ['electricity', 'Electricity'],
    ['gas', 'Natural gas'],
    ['water', 'Water and sewer'],
    ['shutoff', 'Shutoff protections'],
    ['help', 'Help paying bills'],
    ['complaints', 'Complaints and consumer help'],
    ...(g.rebates.length ? [['rebates', 'Rebates and efficiency'] as [string, string]] : []),
  ]

  return (
    <>
      <PageHeader title={`${s.name} utility bills`} lede={<Inline text={g.intro} citePrefix={cite} />} aside={<AliceFace mood="explaining" size={250} />}>
        <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted">
          <span>Reviewed {formatDate(g.lastReviewed)}</span>
          <span aria-hidden>·</span>
          <span>{sources.length} official sources</span>
          <span aria-hidden>·</span>
          <Link href="/states" className="font-semibold text-teal-ink hover:underline">All states</Link>
        </p>
      </PageHeader>

      <div className="container-x grid gap-12 py-12 lg:grid-cols-[15rem_1fr] lg:py-16">
        <aside className="no-print hidden lg:block">
          <nav aria-label="On this page" className="sticky top-24">
            <p className="text-sm font-semibold text-muted">On this page</p>
            <ol className="mt-3 space-y-2 text-[0.95rem]">
              {toc.map(([id, label]) => <li key={id}><a href={`#${id}`} className="text-teal-deep hover:underline">{label}</a></li>)}
            </ol>
          </nav>
        </aside>

        <div className="min-w-0 max-w-3xl space-y-10">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-[var(--radius-card)] border border-line bg-paper p-5 sm:col-span-2">
              <p className="text-sm text-muted">
                Average home electricity price, {statePricePeriod.current}
                <sup className="ml-0.5"><a href={`#${cite}-${priceCite}`} className="font-semibold text-teal-ink">[{priceCite}]</a></sup>
              </p>
              <p className="mt-1 font-display text-4xl font-extrabold text-teal-deep">{now.toFixed(1)}¢ <span className="text-lg font-semibold text-muted">per kWh</span></p>
              <p className="mt-2 text-[0.95rem]">
                {Math.abs(vsUs) < 2 ? 'About the same as' : `${Math.abs(vsUs).toFixed(0)}% ${vsUs > 0 ? 'above' : 'below'}`} the U.S. average of {usResidentialPrice.current.toFixed(1)}¢.{' '}
                {Math.abs(yoy) < 1 ? `Little changed from ${statePricePeriod.previous}.` : `${yoy > 0 ? 'Up' : 'Down'} ${Math.abs(yoy).toFixed(0)}% from ${before.toFixed(1)}¢ in ${statePricePeriod.previous}.`}
              </p>
            </div>
            <div className="rounded-[var(--radius-card)] border border-line bg-paper p-5">
              <p className="text-sm text-muted">Electricity market</p>
              <p className="mt-1 text-lg font-semibold leading-snug text-teal-deep">{marketLabel[g.electricity.market]}</p>
            </div>
          </div>

          <Block id="regulator" title="Who regulates your utilities">
            <p><Inline text={g.regulator.text} citePrefix={cite} /></p>
            <p className="flex flex-wrap gap-x-5 gap-y-2">
              <OutLink href={g.regulator.url}>{g.regulator.name}</OutLink>
              <OutLink href={g.regulator.complaintUrl}>File a utility complaint</OutLink>
            </p>
          </Block>

          <Block id="electricity" title="Electricity">
            <p><Inline text={g.electricity.text} citePrefix={cite} /></p>
            {g.electricity.shopping && <p><OutLink href={g.electricity.shopping.url}>{g.electricity.shopping.name}</OutLink></p>}
            <p className="text-[0.95rem] text-muted">
              Want to see where your own bill goes? Read <Link href="/learn/how-to-read-your-electric-bill" className="font-semibold text-teal-ink hover:underline">how to read your electric bill</Link> or try the <Link href="/tools/electricity-cost" className="font-semibold text-teal-ink hover:underline">electricity cost calculator</Link>.
            </p>
          </Block>

          <Block id="gas" title="Natural gas">
            <p><Inline text={g.gas.text} citePrefix={cite} /></p>
            {g.gas.shopping && <p><OutLink href={g.gas.shopping.url}>{g.gas.shopping.name}</OutLink></p>}
          </Block>

          <Block id="water" title="Water and sewer">
            <p><Inline text={g.water.text} citePrefix={cite} /></p>
          </Block>

          <Block id="shutoff" title="Shutoff protections">
            <p><Inline text={g.shutoff.text} citePrefix={cite} /></p>
            <Callout tone="tip" title="Behind on a bill?">Call your utility before the shutoff date and ask about a payment plan. Then contact the programs below, which can often pay part of the balance.</Callout>
          </Block>

          <Block id="help" title="Help paying bills">
            <LinkList items={g.help} />
          </Block>

          <Block id="complaints" title="Complaints and consumer help">
            <LinkList items={[g.consumer]} />
            <p className="text-[0.95rem] text-muted">For phone, internet and TV billing problems, and for banks, loans and debt collectors, these national agencies also take complaints from {s.name}:</p>
            <ul className="space-y-2 text-[0.97rem]">
              {nationalStateResources.filter((r) => /FCC|Financial Protection/.test(r.title + r.publisher)).map((r) => (
                <li key={r.url}><OutLink href={r.url}>{r.title}</OutLink></li>
              ))}
            </ul>
          </Block>

          {g.rebates.length > 0 && (
            <Block id="rebates" title="Rebates and efficiency">
              <LinkList items={g.rebates} />
            </Block>
          )}

          <SourceList sources={sources} citePrefix={cite} />
          <p className="text-sm text-muted">
            Rules and programs change. We check each source on the date shown; if something here is out of date, <Link href="/contact?topic=correction" className="font-semibold text-teal-ink hover:underline">tell us</Link>. Education only, not legal or financial advice.
          </p>
        </div>
      </div>

      <Section tone="paper">
        <SectionHeading title="Learn how each bill works" lede="These guides apply nationwide and point out what varies by state." />
        <div className="mt-6 grid gap-3 sm:grid-cols-3 lg:grid-cols-6">{categoryIndex.map((c) => <CategoryCard key={c.slug} c={c} compact />)}</div>
      </Section>
    </>
  )
}

const planned = ['Utility providers', 'Electricity market (regulated or choice)', 'Gas service', 'Water billing resources', 'Consumer protection agencies', 'Utility assistance programs', 'Energy rebates', 'Local cost comparisons']

function Placeholder({ s }: { s: StateEntry }) {
  return (
    <>
      <PageHeader title={`${s.name} bill resources`} lede={`Starting points for understanding and getting help with household bills in ${s.name}.`}>
        <p className="text-sm text-muted">State guide in progress · <Link href="/states" className="font-semibold text-teal-ink hover:underline">All states</Link></p>
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
            <h2 className="text-xl font-semibold text-teal-deep">Have {article(s.name)} {s.name} bill question?</h2>
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
