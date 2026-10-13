import type { Metadata } from 'next'
import Link from 'next/link'
import { getTools } from '@/lib/content'
import type { ToolEntry } from '@/content/tools'
import { ToolCard } from '@/components/content/cards'
import { AliceFace } from '@/components/brand/alice'
import { PageHeader, Section } from '@/components/ui/primitives'

export const metadata: Metadata = {
  title: 'Free Bill Calculators',
  description: 'Free household bill calculators with real formulas and clear assumptions, starting with the Electricity Cost Calculator.',
  alternates: { canonical: '/tools' },
}

const groups: ToolEntry['group'][] = ['Electricity', 'Heating & Cooling', 'Water', 'Housing', 'Everyday']

export default function ToolsPage() {
  const tools = getTools()
  return (
    <>
      <PageHeader title="Calculators that show their work" lede="Every tool uses documented formulas, clear units and stated assumptions. Bring the numbers from your own bill." aside={<AliceFace mood="calculator" size={260} />} />
      <Section>
        <h2 className="text-[clamp(1.9rem,3.8vw,2.9rem)] font-extrabold leading-tight text-teal-deep">Ready to use</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tools.filter((t) => t.status === 'available').map((t) => <ToolCard key={t.slug} t={t} />)}
          <Link href="/compare/electricity-plans" className="group flex flex-col rounded-[var(--radius-card)] bg-paper p-6 ring-1 ring-line transition hover:-translate-y-1 hover:ring-teal/40">
            <span className="font-display text-xl font-bold text-teal-deep">Compare two electricity plans</span>
            <span className="mt-2 text-[0.95rem] text-muted">Your usage, two offers: monthly and yearly cost plus the break-even point.</span>
            <span className="mt-auto pt-6 font-semibold text-teal-ink">Compare plans &rarr;</span>
          </Link>
        </div>
      </Section>
      <Section tone="paper">
        <h2 className="text-[clamp(1.9rem,3.8vw,2.9rem)] font-extrabold leading-tight text-teal-deep">Coming next</h2>
        <p className="mt-3 max-w-2xl text-lg text-muted">Every new calculator gets the same treatment: documented formulas, clear units and no made-up rates.</p>
        <div className="mt-10 grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {groups.map((g) => {
            const planned = tools.filter((t) => t.group === g && t.status === 'planned')
            if (!planned.length) return null
            return (
              <section key={g} aria-labelledby={`g-${g}`}>
                <h3 id={`g-${g}`} className="text-sm font-bold text-teal-ink">{g}</h3>
                <div className="mt-4 space-y-6">{planned.map((t) => <ToolCard key={t.slug} t={t} />)}</div>
              </section>
            )
          })}
        </div>
      </Section>
    </>
  )
}
