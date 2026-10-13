import type { Metadata } from 'next'
import { PageHeader, Section } from '@/components/ui/primitives'

export const metadata: Metadata = { title: 'Community Guidelines', alternates: { canonical: '/community/guidelines' } }

const rules = [
  ['Keep personal details out', 'Don’t post account numbers, addresses, full names, or photos of bills that show them. We remove submissions that do.'],
  ['Be kind and on topic', 'Questions and ideas should be about household bills and costs. No harassment, hate, or personal attacks.'],
  ['No selling or promotion', 'No ads, referral links, or offers to switch someone’s service.'],
  ['Share experiences, not advice to strangers', 'Telling us what happened to you is welcome. Telling others what they must do with their money isn’t.'],
  ['We moderate everything', 'Submissions are reviewed by a person before anything is published. We may edit questions for length and privacy, and we never publish your name or email.'],
]

export default function GuidelinesPage() {
  return (
    <>
      <PageHeader title="Community guidelines" lede="A few simple rules that keep Billix useful and safe." />
      <Section>
        <ol className="max-w-3xl space-y-6">
          {rules.map(([t, b], i) => (
            <li key={t} className="flex gap-4">
              <span className="grid size-9 shrink-0 place-items-center rounded-full bg-teal font-semibold text-white">{i + 1}</span>
              <div><h2 className="text-xl font-semibold text-teal-deep">{t}</h2><p className="prose-billix mt-1">{b}</p></div>
            </li>
          ))}
        </ol>
      </Section>
    </>
  )
}
