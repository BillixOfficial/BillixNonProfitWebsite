import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Car, Flame, Plug, ShieldCheck, Sun, Wifi, WashingMachine } from 'lucide-react'
import { Badge, Callout, PageHeader, Section } from '@/components/ui/primitives'

export const metadata: Metadata = {
  title: 'Compare',
  description: 'Side-by-side comparisons of household costs using your own numbers: electricity plans first, with heating, internet, solar and more planned.',
  alternates: { canonical: '/compare' },
}

const comparisons = [
  { I: Plug, title: 'Electricity plans', body: 'Two supply offers, your usage: monthly and yearly cost plus the break-even point.', href: '/compare/electricity-plans' },
  { I: Flame, title: 'Heating systems', body: 'Oil, gas, propane and heat pumps on the same unit of heat, with installation costs.' },
  { I: Wifi, title: 'Internet plans', body: 'True monthly cost after promotions, equipment and fees, over the full contract.' },
  { I: Sun, title: 'Solar options', body: 'Buy, loan or lease: upfront cost, monthly cost and simple payback.' },
  { I: ShieldCheck, title: 'Insurance scenarios', body: 'How deductible choices change premiums and your worst-case cost.' },
  { I: WashingMachine, title: 'Household equipment', body: 'Purchase price plus years of energy and water use.' },
  { I: Car, title: 'Vehicle operating costs', body: 'Fuel or charging, maintenance and insurance per mile.' },
]

export default function ComparePage() {
  return (
    <>
      <PageHeader title="Compare costs on equal terms" lede="Upfront, monthly, annual and long-term costs side by side, with the tradeoffs spelled out. You bring the numbers from your bills and quotes." />
      <Section>
        <Callout tone="note" title="Why you enter the prices">We don&rsquo;t show provider prices unless they come from a live, verifiable source. Until we have one, every comparison runs on numbers you supply, so the result is about your situation, not a guess.</Callout>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {comparisons.map(({ I, title, body, href }) =>
            href ? (
              <Link key={title} href={href} className="group flex flex-col rounded-[var(--radius-card)] border border-line bg-paper p-6 shadow-[var(--shadow-card)] transition-transform hover:-translate-y-1">
                <div className="flex items-center justify-between"><I className="size-7 text-teal" aria-hidden /><Badge tone="cash">Available</Badge></div>
                <h2 className="mt-4 text-xl font-semibold text-teal-deep">{title}</h2>
                <p className="mt-1.5 text-muted">{body}</p>
                <span className="mt-auto inline-flex items-center gap-1 pt-4 font-semibold text-teal-ink">Compare now <ArrowRight className="size-4" aria-hidden /></span>
              </Link>
            ) : (
              <div key={title} className="flex flex-col rounded-[var(--radius-card)] border border-dashed border-line bg-paper/50 p-6">
                <div className="flex items-center justify-between"><I className="size-7 text-teal-deep/50" aria-hidden /><Badge>Planned</Badge></div>
                <h2 className="mt-4 text-xl font-semibold text-teal-deep">{title}</h2>
                <p className="mt-1.5 text-muted">{body}</p>
              </div>
            ),
          )}
        </div>
      </Section>
    </>
  )
}
