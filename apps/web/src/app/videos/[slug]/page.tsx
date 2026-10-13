import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getArticle, getToolsBySlugs, getVideo, getVideos } from '@/lib/content'
import { categoryMeta } from '@/content/category-index'
import { SourceList } from '@/components/content/rich-text'
import { ArticleCard, ToolCard, VideoCard } from '@/components/content/cards'
import { ShareTools } from '@/components/content/share-tools'
import { Badge, ComingSoonBadge } from '@/components/ui/primitives'
import { NewsletterForm } from '@/components/forms/newsletter-form'

export function generateStaticParams() {
  return getVideos().map((v) => ({ slug: v.slug }))
}

export async function generateMetadata({ params }: PageProps<'/videos/[slug]'>): Promise<Metadata> {
  const { slug } = await params
  const v = getVideo(slug)
  if (!v) return {}
  return { title: v.title, description: v.description, alternates: { canonical: `/videos/${v.slug}` }, openGraph: { images: [v.thumbnail] } }
}

export default async function VideoPage({ params }: PageProps<'/videos/[slug]'>) {
  const { slug } = await params
  const v = getVideo(slug)
  if (!v) notFound()
  const articles = (v.relatedArticles ?? []).map(getArticle).filter((a) => a !== undefined)
  const tools = getToolsBySlugs(v.relatedTools ?? [])
  const more = getVideos().filter((x) => x.slug !== v.slug && (x.category === v.category || x.kind === v.kind)).slice(0, 3)
  const isShort = v.kind === 'short'

  return (
    <div className="container-x py-10 sm:py-14">
      <nav aria-label="Breadcrumb" className="text-sm text-muted"><Link href="/videos" className="hover:underline">Videos</Link> <span aria-hidden>/</span> {isShort ? 'Short' : 'Video'}</nav>
      <div className="mt-6 grid gap-10 lg:grid-cols-[1fr_20rem]">
        <div className="min-w-0">
          <div className={isShort ? 'mx-auto max-w-sm' : ''}>
            <div className={`relative overflow-hidden rounded-[var(--radius-panel)] bg-teal-night shadow-[var(--shadow-lift)] ${isShort ? 'aspect-[9/16]' : 'aspect-video'}`}>
              {v.youtubeId ? (
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${v.youtubeId}?rel=0`}
                  title={v.title}
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  className="absolute inset-0 size-full"
                />
              ) : (
                <>
                  <Image src={v.thumbnail} alt="" fill priority sizes="(min-width: 1024px) 800px, 100vw" className="object-cover opacity-60" />
                  <div className="absolute inset-0 grid place-items-center p-6 text-center">
                    <div className="rounded-2xl bg-teal-night/85 px-6 py-5 text-cream backdrop-blur">
                      <ComingSoonBadge />
                      <p className="mt-3 font-display text-xl font-semibold">Premiering on YouTube soon</p>
                      <p className="mt-1 text-sm text-cream/75">This video will play here once it&rsquo;s live.</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-2">
            <Badge tone="teal">{isShort ? 'Short' : 'Video'}</Badge>
            {v.category !== 'channel' && <Badge tone="neutral">{categoryMeta(v.category).shortName}</Badge>}
            <Badge tone="neutral">{v.duration}</Badge>
          </div>
          <h1 className="mt-4 text-[clamp(1.8rem,3.8vw,2.7rem)] font-semibold leading-tight text-teal-deep">{v.title}</h1>
          <p className="prose-billix mt-4 text-muted">{v.description}</p>
          <p className="mt-3 text-sm text-muted">Narrated by Alice, an animated character with an AI-generated voice. Educational only, not financial advice.</p>
          <div className="mt-6"><ShareTools title={v.title} path={`/videos/${v.slug}`} /></div>

          {v.chapters && (
            <section className="mt-10">
              <h2 className="text-xl font-semibold text-teal-deep">Chapters</h2>
              <ol className="mt-4 divide-y divide-line rounded-[var(--radius-card)] border border-line bg-white">
                {v.chapters.map((c) => (
                  <li key={c.time} className="flex gap-4 px-5 py-3 text-[0.97rem]"><span className="w-12 shrink-0 font-semibold tabular-nums text-teal-ink">{c.time}</span>{c.label}</li>
                ))}
              </ol>
            </section>
          )}

          <section className="mt-10">
            <h2 className="text-xl font-semibold text-teal-deep">Transcript</h2>
            {v.transcript ? <p className="prose-billix mt-3 whitespace-pre-line">{v.transcript}</p> : <p className="mt-2 text-muted">A transcript will be added when the video is published.</p>}
          </section>

          <SourceList sources={v.sources} citePrefix="vid-src" />
        </div>

        <aside className="space-y-8">
          {articles.length > 0 && (
            <div>
              <h2 className="eyebrow text-muted">Read the guide</h2>
              <div className="mt-3 space-y-4">{articles.map((a) => <ArticleCard key={a.slug} a={a} />)}</div>
            </div>
          )}
          {tools.length > 0 && (
            <div>
              <h2 className="eyebrow text-muted">Related tools</h2>
              <div className="mt-3 space-y-4">{tools.map((t) => <ToolCard key={t.slug} t={t} />)}</div>
            </div>
          )}
          <div className="rounded-[var(--radius-card)] border border-line bg-paper p-5">
            <p className="font-semibold text-teal-deep">Get new videos by email</p>
            <div className="mt-3"><NewsletterForm source="video" /></div>
          </div>
        </aside>
      </div>

      {more.length > 0 && (
        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-teal-deep">More from Alice</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{more.map((m) => <VideoCard key={m.slug} v={m} />)}</div>
        </section>
      )}
    </div>
  )
}
