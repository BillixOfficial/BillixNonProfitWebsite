import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Callout, PageHeader, Section } from '@/components/ui/primitives'

export const metadata: Metadata = {
  title: 'Compare',
  description: 'Side-by-side comparisons of household costs using your own numbers: electricity plans first, with heating, internet, solar and more planned.',
  alternates: { canonical: '/compare' },
}

const comparisons = [
  { title: 'Electricity plans', body: 'Two supply offers, your usage: monthly and yearly cost plus the break-even point.', href: '/compare/electricity-plans' },
  { title: 'Heating systems', body: 'Oil, gas, propane and heat pumps on the same unit of heat, with installation costs.' },
  { title: 'Internet plans', body: 'True monthly cost after promotions, equipment and fees, over the full contract.' },
  { title: 'Solar options', body: 'Buy, loan or lease: upfront cost, monthly cost and simple payback.' },
  { title: 'Insurance scenarios', body: 'How deductible choices change premiums and your worst-case cost.' },
  { title: 'Household equipment', body: 'Purchase price plus years of energy and water use.' },
  { title: 'Vehicle operating costs', body: 'Fuel or charging, maintenance and insurance per mile.' },
]

export default function ComparePage() {
  return (
    <>
      <PageHeader title="Compare costs on equal terms" lede="Upfront, monthly, annual and long-term costs side by side, with the tradeoffs spelled out. You bring the numbers from your bills and quotes." />
      <Section>
        <Callout tone="note" title="Why you enter the prices">We don&rsquo;t show provider prices unless they come from a live, verifiable source. Until we have one, every comparison runs on numbers you supply, so the result is about your situation, not a guess.</Callout>
        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_1.4fr]">
          {comparisons.filter((c) => c.href).map(({ title, body, href }) => (
            <Link key={title} href={href!} className="group flex flex-col rounded-[var(--radius-card)] border border-line bg-paper p-6 shadow-[var(--shadow-card)] transition-transform hover:-translate-y-1">
              <h2 className="text-2xl font-extrabold text-teal-deep">{title}</h2>
              <p className="mt-2 text-muted">{body}</p>
              <span className="mt-auto inline-flex items-center gap-1 pt-5 font-semibold text-teal-ink">Compare now <ArrowRight className="size-4" aria-hidden /></span>
            </Link>
          ))}
          <div>
            <h2 className="text-xl font-semibold text-teal-deep">Next on our list</h2>
            <ul className="mt-3 divide-y divide-line border-y border-line">
              {comparisons.filter((c) => !c.href).map(({ title, body }) => (
                <li key={title} className="py-3">
                  <p className="font-semibold text-teal-deep">{title}</p>
                  <p className="text-[0.95rem] text-muted">{body}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
    </>
  )
}
