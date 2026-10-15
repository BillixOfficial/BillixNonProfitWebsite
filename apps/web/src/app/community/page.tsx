import type { Metadata } from 'next'
import Link from 'next/link'
import { QuestionForm, VideoIdeaForm } from '@/components/forms/contact-forms'
import { AliceFace } from '@/components/brand/alice'
import { PageHeader, Section } from '@/components/ui/primitives'

export const metadata: Metadata = {
  title: 'Community',
  description: 'Ask a question about a bill or suggest a video for Alice. Discussions, expert Q&A and events are coming.',
  alternates: { canonical: '/community' },
}

export default function CommunityPage() {
  return (
    <>
      <PageHeader title="Your questions shape what we explain" lede="Ask about a confusing charge or suggest a topic. Every submission is read by a person, and the common ones become guides and videos." aside={<AliceFace mood="mug" size={260} />} />
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.25fr_1fr]">
          <section id="ask" aria-labelledby="ask-h" className="scroll-mt-28 rounded-[var(--radius-panel)] border border-line bg-paper p-6 sm:p-8">
            <h2 id="ask-h" className="text-2xl font-semibold text-teal-deep">Ask a question</h2>
            <p className="mb-6 mt-2 text-muted">We can&rsquo;t review individual bills or give personal financial advice, but we can explain how charges work.</p>
            <QuestionForm />
          </section>
          <section id="video-idea" aria-labelledby="vid-h" className="scroll-mt-28 rounded-[var(--radius-panel)] border border-line bg-paper p-6 sm:p-8">
            <h2 id="vid-h" className="text-2xl font-semibold text-teal-deep">Suggest a video</h2>
            <p className="mb-6 mt-2 text-muted">What should Alice explain next?</p>
            <VideoIdeaForm />
          </section>
        </div>
        <p className="mt-6 text-sm text-muted">By submitting, you agree to our <Link href="/community/guidelines" className="font-semibold text-teal-ink underline">community guidelines</Link> and <Link href="/legal/privacy" className="font-semibold text-teal-ink underline">privacy policy</Link>.</p>
      </Section>
      <Section tone="paper">
        <h2 className="text-2xl font-semibold text-teal-deep">Coming to the community</h2>
        <ul className="mt-4 grid gap-x-10 sm:grid-cols-2">
          {[
            { t: 'Community discussions', b: 'Moderated threads about bills, by topic.' },
            { t: 'Bill stories', b: 'Real experiences, shared with permission and without personal details.' },
            { t: 'Expert Q&A', b: 'Sessions with people who work on these bills.' },
            { t: 'Events', b: 'Live explainers before heating and cooling seasons.' },
          ].map(({ t, b }) => (
            <li key={t} className="border-b border-line py-3">
              <p className="font-semibold text-teal-deep">{t}</p>
              <p className="text-[0.95rem] text-muted">{b}</p>
            </li>
          ))}
        </ul>
      </Section>
    </>
  )
}
