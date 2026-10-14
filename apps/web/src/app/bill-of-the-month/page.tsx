import type { Metadata } from 'next'
import Link from 'next/link'
import { Camera, PlayCircle, Shuffle, Ticket } from 'lucide-react'
import { AliceFace } from '@/components/brand/alice'
import { BillOfTheMonthForm } from '@/components/forms/bill-of-the-month-form'
import { PageHeader, Section } from '@/components/ui/primitives'
import { socialLinks } from '@/config/site'

export const metadata: Metadata = {
  title: 'Bill of the Month',
  description: 'Enter free for a chance at $50 toward a household bill, and optionally send a confusing bill for Alice to break down on YouTube.',
  alternates: { canonical: '/bill-of-the-month' },
}

const steps = [
  { I: Ticket, t: 'Enter the $50 drawing', b: 'Free. Just your first name, state and email. No bill, purchase or subscription needed.' },
  { I: Shuffle, t: 'One random winner', b: 'Each round closes on the 15th. One entry is drawn at random and gets $50 paid toward a bill.' },
  { I: Camera, t: 'Optional: send a bill', b: 'Got a confusing bill? Cover your private details and send it for a possible breakdown.' },
  { I: PlayCircle, t: 'Watch the breakdowns', b: 'Alice explains the most confusing bills on YouTube. Sending one doesn’t change anyone’s odds.' },
]

const faqs = [
  { q: 'Do I have to subscribe or send a bill to enter?', a: 'No. The drawing only needs your first name, state and email. Subscribing and sending a bill are both optional and don’t change your odds. The winner is always told by email.' },
  { q: 'How is the winner picked?', a: 'At random, from every eligible drawing entry received that round, whether or not it included a bill. Rounds run from the 16th of one month to 11:59 p.m. ET on the 15th of the next. Which bills Alice explains in videos is a separate choice and has nothing to do with the drawing.' },
  { q: 'How is the $50 paid?', a: 'We pay $50 directly to the company on a household bill you choose (electric, gas, water, internet, phone and so on), credited to your account. If your bill is more than $50, we pay $50 toward it and you pay the rest as usual. If you owe less than $50, the rest stays as a credit on your account where the company allows it. If we can’t pay the company directly, you get a $50 prepaid card instead.' },
  { q: 'How will I know if I won?', a: 'We email the winner within 7 days after the round closes, from a billixapp.com address. We will never ask for your password, card number or a payment.' },
  { q: 'Why would I send a bill?', a: 'To have Alice explain the charges that confuse you. It’s a separate, optional request and doesn’t improve your chances in the drawing.' },
  { q: 'Will my bill be shown in a video?', a: 'Only if you check the separate box giving permission, and only with personal details covered. You keep ownership of your bill. We credit you by first name and state only if you also say that’s okay.' },
  { q: 'What happens to my bill?', a: 'It’s stored privately and used only for Bill of the Month. Bills not used in a video are deleted within 90 days after the round closes.' },
]

export default function BillOfTheMonthPage() {
  const youtube = socialLinks.find((s) => s.platform === 'youtube')?.url
  return (
    <>
      <PageHeader
        title={<><span className="mark text-teal-night">$50</span> toward a bill, every round.</>}
        lede="Enter free for a chance at $50 off a household bill. And if a bill confuses you, send it in. Alice breaks down the most confusing ones on YouTube."
        aside={<AliceFace mood="magnifier" size={280} priority />}
      />
      <Section>
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ I, t, b }, i) => (
            <li key={t} className="rounded-[var(--radius-card)] border border-line bg-paper p-5">
              <div className="flex items-center gap-3">
                <span className="grid size-9 place-items-center rounded-full bg-teal-deep font-bold text-cream">{i + 1}</span>
                <I className="size-5 text-teal" aria-hidden />
              </div>
              <h2 className="mt-3 text-lg font-semibold text-teal-deep">{t}</h2>
              <p className="mt-1 text-[0.95rem] text-muted">{b}</p>
            </li>
          ))}
        </ol>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <section aria-labelledby="enter-h" className="rounded-[var(--radius-panel)] border border-line bg-paper p-6 sm:p-8">
            <h2 id="enter-h" className="text-2xl font-semibold text-teal-deep">Enter this round</h2>
            <p className="mb-6 mt-2 text-muted">Takes about a minute. This round closes at 11:59 p.m. ET on the 15th.</p>
            <BillOfTheMonthForm />
          </section>
          <aside className="space-y-6">
            <div className="rounded-[var(--radius-panel)] bg-teal-deep p-6 text-cream">
              <p className="font-display text-xl font-semibold">Follow the breakdowns</p>
              <p className="mt-2 text-cream/80">Subscribe to follow the bill breakdowns and winner announcements on YouTube.</p>
              {youtube && (
                <a href={youtube} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block font-semibold text-gold underline">
                  Billix on YouTube
                </a>
              )}
            </div>
            <p className="text-xs leading-relaxed text-muted">
              No purchase or subscription necessary. Open to legal U.S. residents (50 states and D.C.) 18 and older. Odds depend on the number of eligible entries. Not sponsored, endorsed or administered by YouTube or Google. See the <Link href="/legal/bill-of-the-month-rules" className="font-semibold text-teal-ink underline">Official Rules</Link>.
            </p>
          </aside>
        </div>
      </Section>
      <Section tone="paper">
        <h2 className="text-2xl font-semibold text-teal-deep">Questions</h2>
        <dl className="mt-6 grid gap-6 md:grid-cols-2">
          {faqs.map((f) => (
            <div key={f.q}>
              <dt className="font-semibold text-teal-deep">{f.q}</dt>
              <dd className="mt-1 text-muted">{f.a}</dd>
            </div>
          ))}
        </dl>
      </Section>
    </>
  )
}
