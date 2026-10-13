import type { Metadata } from 'next'
import Link from 'next/link'
import { getVideos } from '@/lib/content'
import { SocialCards } from '@/components/brand/social-links'
import { VideoCard } from '@/components/content/cards'
import { NewsletterForm } from '@/components/forms/newsletter-form'
import { AliceFace } from '@/components/brand/alice'
import { ButtonLink, PageHeader, Section, SectionHeading } from '@/components/ui/primitives'

export const metadata: Metadata = {
  title: 'Billix on Social',
  description: 'Follow Billix and Alice on YouTube, TikTok, Instagram and more for short, sourced bill explainers.',
  alternates: { canonical: '/social' },
}

export default function SocialPage() {
  const shorts = getVideos().filter((v) => v.kind === 'short').slice(0, 4)
  const latest = getVideos().filter((v) => v.kind === 'video').slice(0, 3)
  return (
    <>
      <PageHeader title="Follow Alice everywhere" lede="Short explainers, bill breakdowns and answers to your questions, wherever you scroll." aside={<AliceFace mood="laughing" size={260} />} />
      <Section>
        <SocialCards />
      </Section>
      <Section tone="paper">
        <SectionHeading title="From the Billix channel" action={<ButtonLink href="/videos" variant="ghost" arrow>Video library</ButtonLink>} />
        <div className="mt-8 grid gap-5 md:grid-cols-3">{latest.map((v) => <VideoCard key={v.slug} v={v} />)}</div>
        <SectionHeading className="mt-14" title="One-minute explainers" />
        <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">{shorts.map((v) => <VideoCard key={v.slug} v={v} />)}</div>
      </Section>
      <Section>
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-[var(--radius-card)] border border-line bg-paper p-6">
            <h2 className="text-xl font-semibold text-teal-deep">Suggest a video</h2>
            <p className="mt-2 text-muted">Which bill should Alice explain next?</p>
            <ButtonLink href="/community#video-idea" variant="secondary" size="sm" className="mt-5">Send an idea</ButtonLink>
          </div>
          <div className="rounded-[var(--radius-card)] border border-line bg-paper p-6">
            <h2 className="text-xl font-semibold text-teal-deep">Share your bill story</h2>
            <p className="mt-2 text-muted">A surprise charge, a fee you got reversed, a question you finally answered.</p>
            <ButtonLink href="/community#ask" variant="secondary" size="sm" className="mt-5">Tell us</ButtonLink>
          </div>
          <div className="rounded-[var(--radius-card)] border border-line bg-paper p-6">
            <h2 className="text-xl font-semibold text-teal-deep">The Billix Brief</h2>
            <p className="mb-4 mt-2 text-muted">Prefer email? Get the best explainers in your inbox.</p>
            <NewsletterForm source="social" />
          </div>
        </div>
        <p className="mt-8 text-sm text-muted">Media or partnership question? <Link href="/contact" className="font-semibold text-teal-ink underline">Contact Billix</Link>.</p>
      </Section>
    </>
  )
}
