import type { Metadata } from 'next'
import Link from 'next/link'
import { states } from '@/content/states'
import { AliceFace } from '@/components/brand/alice'
import { Callout, PageHeader, Section } from '@/components/ui/primitives'

export const metadata: Metadata = {
  title: 'Bills by State',
  description: 'Bill resources for all 50 states and Washington, D.C.: utility regulators, assistance programs and verified official sources.',
  alternates: { canonical: '/states' },
}

export default function StatesPage() {
  return (
    <>
      <PageHeader title="Bill help for every state" lede="Who regulates your utilities, where to find help paying bills, and where to file a complaint. Detailed state guides are added as we verify them." aside={<AliceFace mood="thinking" size={250} />} />
      <Section>
        <Callout tone="note" title="How state guides work">We only publish state details we&rsquo;ve checked against official sources. Until a state&rsquo;s full guide is ready, its page lists national resources that work everywhere.</Callout>
        <ul className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
          {states.map((s) => (
            <li key={s.code}>
              <Link href={`/states/${s.slug}`} className="flex items-center gap-3 rounded-xl border border-line bg-paper px-3 py-2.5 transition-colors hover:border-teal hover:bg-white">
                <span className="w-8 font-display text-sm font-semibold text-teal">{s.code}</span>
                <span className="text-[0.95rem] font-medium text-teal-deep">{s.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </>
  )
}
