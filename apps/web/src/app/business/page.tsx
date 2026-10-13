import type { Metadata } from 'next'
import { ClipboardCheck, FileStack, Timer } from 'lucide-react'
import { ContactForm } from '@/components/forms/contact-forms'
import { PageHeader, Section, SectionHeading } from '@/components/ui/primitives'

/**
 * Business Solutions: Billix software for utility relief programs. Content carried
 * over from the original billixapp.com site so that offering is preserved.
 */
export const metadata: Metadata = {
  title: 'Business Solutions: Software for Utility Relief Programs',
  description: 'Billix helps utility relief programs collect verified applications in minutes and track every approved pledge to a confirmed hold on the account.',
  alternates: { canonical: '/business' },
}

const features = [
  { I: FileStack, num: '01 / Family front door', title: 'A verified application in minutes, from a phone.', body: 'One link or QR code opens a short mobile application. Screening questions route each household to the programs they qualify for, in the order the state requires. As families photograph their documents, the app checks each one and asks for a retake right away if anything is unreadable.' },
  { I: ClipboardCheck, num: '02 / Caseworker workbench', title: 'Files arrive ready to review, not ready to assemble.', body: 'Documents are captured and legible, household income is calculated against the right program threshold, and anything that does not add up is flagged rather than buried. Caseworkers spend their time on decisions instead of chasing paperwork.' },
  { I: Timer, num: '03 / Pledge tracker', title: 'Every approval followed all the way to a confirmed hold.', body: 'When a grant is approved, Billix sends a standardized hold request to the utility through the channel it already uses, records when it went out, and watches for confirmation. If a shutoff date approaches without a response, it escalates.' },
]

const audiences = [
  ['Statewide programs', 'Run your program across the whole state on shared infrastructure.'],
  ['Hardship funds', 'Coordinate intake across local partners without the paper chase.'],
  ['Intake agencies', 'Clear the heating-season backlog before grant funding is returned unspent.'],
  ['Utilities', 'Receive complete, standardized hold requests through one reliable channel.'],
]

const steps = [
  ['Discovery', 'A few working sessions to map your intake, your programs, and where the days get lost.'],
  ['Pilot', 'One agency, one season. We build only what your biggest pain point calls for.'],
  ['Measure', 'Caseworker minutes per application, and days between an approval and a confirmed hold.'],
  ['Expand', 'Roll the same playbook out to more agencies once the results are in hand.'],
]

const lines = [
  ['We don’t hold funds', 'Grants flow from agency to utility exactly as they do today. Billix never sits in the money path.'],
  ['We’re not the record', 'The state keeps its system of record. Billix formats verified data to match those screens.'],
  ['We don’t decide eligibility', 'The software computes and recommends; a caseworker makes every determination.'],
]

export default function BusinessPage() {
  return (
    <>
      <PageHeader title="Get relief to families before the shutoff." lede="Software for utility relief programs. Collect a verified application in minutes, take document-chasing off caseworkers&rsquo; plates, and confirm a hold on the account before the lights go out.">
        <p className="text-sm text-muted">No rip-and-replace. Works alongside the state systems you already use.</p>
      </PageHeader>
      <Section>
        <SectionHeading title="One layer over the systems you already use." lede="Grants still move directly from agency to utility, the state keeps its records, and caseworkers make every eligibility call. Billix handles the work in between." />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {features.map(({ I, num, title, body }) => (
            <div key={num} className="rounded-[var(--radius-card)] border border-line bg-paper p-6">
              <I className="size-7 text-teal" aria-hidden />
              <p className="eyebrow mt-4 text-muted">{num}</p>
              <h3 className="mt-2 text-xl font-semibold text-teal-deep">{title}</h3>
              <p className="mt-2 text-muted">{body}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section tone="dark">
        <h2 className="max-w-2xl text-[clamp(1.75rem,3.4vw,2.6rem)] font-semibold text-cream">Every state has the same three layers.</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map(([t, b]) => (
            <div key={t} className="rounded-[var(--radius-card)] bg-cream/8 p-5"><h3 className="font-semibold text-cream">{t}</h3><p className="mt-2 text-sm text-cream/75">{b}</p></div>
          ))}
        </div>
      </Section>
      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading title="A pilot, then the numbers decide the rest." />
            <ol className="mt-8 space-y-5">
              {steps.map(([t, b], i) => (
                <li key={t} className="flex gap-4"><span className="grid size-9 shrink-0 place-items-center rounded-full bg-teal font-semibold text-white">{i + 1}</span><div><h3 className="font-semibold text-teal-deep">{t}</h3><p className="text-muted">{b}</p></div></li>
              ))}
            </ol>
          </div>
          <div>
            <SectionHeading title="Deliberately narrow." />
            <div className="mt-8 space-y-4">
              {lines.map(([t, b]) => (
                <div key={t} className="border-l-4 border-gold pl-5"><h3 className="font-semibold text-teal-deep">{t}</h3><p className="text-muted">{b}</p></div>
              ))}
            </div>
          </div>
        </div>
      </Section>
      <Section tone="paper" id="contact">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <h2 className="mt-3 text-3xl font-semibold text-teal-deep">Let&rsquo;s talk about your program.</h2>
            <p className="mt-3 text-muted">Tell us where the workflow hurts most: intake, document chasing, or getting a confirmed hold on the account.</p>
          </div>
          <ContactForm defaultTopic="business" />
        </div>
      </Section>
    </>
  )
}
