import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { CalendarCheck, Clock, MapPin } from 'lucide-react'
import { authors, getAllArticles, getArticle, getArticlesByCategory, getToolsBySlugs, getVideo, readingMinutes } from '@/lib/content'
import { categoryMeta } from '@/content/category-index'
import { siteUrl } from '@/config/site'
import { Blocks, Inline, SourceList } from '@/components/content/rich-text'
import { ArticleCard, ToolCard, VideoCard } from '@/components/content/cards'
import { ShareTools } from '@/components/content/share-tools'
import { AliceAvatar, AliceFace, categoryMood, moodForPose } from '@/components/brand/alice'
import { MetaLine, formatDate } from '@/components/ui/primitives'

export function generateStaticParams() {
  return getAllArticles().map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: PageProps<'/learn/[slug]'>): Promise<Metadata> {
  const { slug } = await params
  const a = getArticle(slug)
  if (!a) return {}
  return {
    title: a.title,
    description: a.description,
    alternates: { canonical: `/learn/${a.slug}` },
    openGraph: { type: 'article', title: a.title, description: a.description, publishedTime: a.publishedAt, modifiedTime: a.reviewedAt },
  }
}

export default async function ArticlePage({ params }: PageProps<'/learn/[slug]'>) {
  const { slug } = await params
  const a = getArticle(slug)
  if (!a) notFound()
  const cat = categoryMeta(a.category)
  const author = authors[a.authorId]
  const video = a.relatedVideo ? getVideo(a.relatedVideo) : undefined
  const tools = getToolsBySlugs(a.relatedTools ?? [])
  const related = getArticlesByCategory(a.category).filter((x) => x.slug !== a.slug).slice(0, 3)
  const cite = 'art-src'

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: a.title,
    description: a.description,
    datePublished: a.publishedAt,
    dateModified: a.reviewedAt,
    author: { '@type': 'Organization', name: author.name },
    publisher: { '@type': 'Organization', name: 'Billix' },
    mainEntityOfPage: siteUrl(`/learn/${a.slug}`),
    citation: a.sources.map((s) => s.url),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <header className="border-b border-line bg-paper">
        <div className="container-x grid items-end gap-8 py-12 sm:py-16 lg:grid-cols-[1fr_auto]">
          <div className="max-w-3xl">
            <nav aria-label="Breadcrumb" className="text-sm text-muted">
              <Link href={a.kind === 'update' ? '/updates' : '/learn'} className="hover:underline">{a.kind === 'update' ? 'Bill updates' : 'Learn'}</Link> <span aria-hidden>/</span>{' '}
              <Link href={`/categories/${cat.slug}`} className="hover:underline">{cat.shortName}</Link>
            </nav>
            <MetaLine className="mt-5 font-semibold text-teal-ink" items={[...(a.kind === 'update' ? ['Bill update'] : []), cat.shortName]} />
            <h1 className="mt-4 text-[clamp(2.2rem,5vw,3.6rem)] font-extrabold leading-[1.02] tracking-[-0.035em] text-teal-deep">{a.title}</h1>
            <p className="mt-4 text-lg leading-relaxed text-muted sm:text-xl">{a.description}</p>
            <dl className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
              <div className="flex items-center gap-1.5"><dt className="sr-only">Published</dt><CalendarCheck className="size-4" aria-hidden /><dd>Published <time dateTime={a.publishedAt}>{formatDate(a.publishedAt)}</time></dd></div>
              <div className="flex items-center gap-1.5"><dt className="sr-only">Last reviewed</dt><dd>Reviewed <time dateTime={a.reviewedAt}>{formatDate(a.reviewedAt)}</time></dd></div>
              <div className="flex items-center gap-1.5"><dt className="sr-only">Reading time</dt><Clock className="size-4" aria-hidden /><dd>{readingMinutes(a)} min read</dd></div>
              <div className="flex items-center gap-1.5"><dt className="sr-only">Applies to</dt><MapPin className="size-4" aria-hidden /><dd>Applies to: {a.geography.label}</dd></div>
            </dl>
          </div>
          <AliceFace mood={a.alicePose ? moodForPose(a.alicePose) : categoryMood[a.category]} size={250} className="hidden lg:inline-grid" />
        </div>
      </header>

      <div className="container-x grid gap-12 py-12 lg:grid-cols-[1fr_17rem] lg:py-16">
        <article className="min-w-0 max-w-3xl">
          <section aria-labelledby="takeaways" className="rounded-[var(--radius-card)] border border-gold/50 bg-gold-soft/40 p-6">
            <h2 id="takeaways" className="text-lg font-semibold text-teal-deep">Key takeaways</h2>
            <ul className="mt-3 space-y-2">
              {a.keyTakeaways.map((t, i) => (
                <li key={i} className="flex gap-2.5"><span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-teal" /><span><Inline text={t} citePrefix={cite} /></span></li>
              ))}
            </ul>
          </section>

          <nav aria-label="Table of contents" className="mt-8 rounded-[var(--radius-card)] border border-line bg-paper p-5 lg:hidden">
            <p className="eyebrow text-muted">Contents</p>
            <ol className="mt-2 list-decimal space-y-1 pl-5 text-teal-ink">
              {a.sections.map((s) => <li key={s.id}><a href={`#${s.id}`} className="hover:underline">{s.heading}</a></li>)}
            </ol>
          </nav>

          <div className="prose-billix">
            {a.sections.map((s) => (
              <section key={s.id} aria-labelledby={s.id} className="mt-12">
                <h2 id={s.id} className="mb-4 text-[clamp(1.45rem,2.4vw,1.85rem)] font-semibold leading-tight text-teal-deep">{s.heading}</h2>
                <Blocks blocks={s.blocks} citePrefix={cite} />
              </section>
            ))}
          </div>

          {video && (
            <section className="mt-12">
              <h2 className="text-xl font-semibold text-teal-deep">Watch Alice explain it</h2>
              <div className="mt-4 max-w-md"><VideoCard v={video} /></div>
            </section>
          )}

          {tools.length > 0 && (
            <section className="mt-12">
              <h2 className="text-xl font-semibold text-teal-deep">Try the numbers</h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">{tools.map((t) => <ToolCard key={t.slug} t={t} />)}</div>
            </section>
          )}

          <SourceList sources={a.sources} citePrefix={cite} />

          <section aria-label="About the author" className="mt-8 flex items-start gap-4 rounded-[var(--radius-card)] border border-line bg-paper p-5">
            <AliceAvatar size={48} className="shrink-0" />
            <div>
              <p className="font-semibold text-teal-deep">{author.name}</p>
              <p className="mt-1 text-[0.93rem] text-muted">{author.bio} <Link href="/editorial-standards" className="font-semibold text-teal-ink underline">How we research</Link>. Spot an error? <Link href="/contact?topic=correction" className="font-semibold text-teal-ink underline">Report a correction</Link>.</p>
              <p className="mt-2 text-xs text-muted">Educational information only. Not financial, legal or tax advice.</p>
            </div>
          </section>
        </article>

        <aside className="no-print">
          <div className="sticky top-24 space-y-8">
            <nav aria-label="On this page" className="hidden lg:block">
              <p className="eyebrow text-muted">On this page</p>
              <ol className="mt-3 space-y-1.5 border-l border-line text-[0.9rem]">
                {a.sections.map((s) => (
                  <li key={s.id}><a href={`#${s.id}`} className="-ml-px block border-l-2 border-transparent pl-3 text-muted hover:border-gold hover:text-teal-deep">{s.heading}</a></li>
                ))}
              </ol>
            </nav>
            <ShareTools title={a.title} path={`/learn/${a.slug}`} />
          </div>
        </aside>
      </div>

      {related.length > 0 && (
        <section className="no-print border-t border-line bg-paper py-14">
          <div className="container-x">
            <h2 className="text-2xl font-semibold text-teal-deep">More on {cat.shortName.toLowerCase()}</h2>
            <div className="mt-6 grid gap-5 md:grid-cols-3">{related.map((r) => <ArticleCard key={r.slug} a={r} showCategory={false} />)}</div>
          </div>
        </section>
      )}
    </>
  )
}
