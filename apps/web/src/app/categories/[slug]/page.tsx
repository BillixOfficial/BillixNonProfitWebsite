import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getArticlesByCategory, getCategories, getCategory, getProductsByCategory, getToolsBySlugs, getVideosByCategory } from '@/lib/content'
import { toPlainText } from '@/lib/inline'
import { features } from '@/config/site'
import { Inline, SourceList } from '@/components/content/rich-text'
import { ArticleCard, ProductCard, ToolCard, VideoCard } from '@/components/content/cards'
import { AliceFace, AliceNote, categoryMood } from '@/components/brand/alice'
import { ButtonLink, EmptyState, MetaLine, formatDate } from '@/components/ui/primitives'

export function generateStaticParams() {
  return getCategories().map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: PageProps<'/categories/[slug]'>): Promise<Metadata> {
  const { slug } = await params
  const c = getCategory(slug)
  if (!c) return {}
  return { title: `${c.name} Bills Explained`, description: toPlainText(c.tagline), alternates: { canonical: `/categories/${c.slug}` } }
}

const toc = [
  ['overview', 'Overview'],
  ['how-it-works', 'How the bill works'],
  ['charges', 'Common charges'],
  ['why-costs-rise', 'Why costs increase'],
  ['read-your-bill', 'Reading your bill'],
  ['review', 'Ways to review'],
  ['tools', 'Calculators'],
  ['compare', 'What to compare'],
  ['videos', 'Videos'],
  ['articles', 'Related articles'],
  ['faq', 'FAQ'],
  ['by-state', 'By state'],
  ['shop', 'Related products'],
] as const

function H2({ id, n, children }: { id: string; n: number; children: React.ReactNode }) {
  return (
    <h2 id={id} className="flex items-baseline gap-3 text-[clamp(1.5rem,2.6vw,2rem)] font-semibold text-teal-deep">
      <span className="font-sans text-sm font-bold tabular-nums text-gold">{String(n).padStart(2, '0')}</span>
      {children}
    </h2>
  )
}

export default async function CategoryPage({ params }: PageProps<'/categories/[slug]'>) {
  const { slug } = await params
  const c = getCategory(slug)
  if (!c) notFound()

  const tools = getToolsBySlugs(c.relatedTools)
  const videos = getVideosByCategory(c.slug)
  const articles = getArticlesByCategory(c.slug)
  const products = getProductsByCategory(c.slug)
  const cite = 'cat-src'

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: c.faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: toPlainText(f.a) } })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <header className="border-b border-line bg-paper">
        <div className="container-x relative pb-12 pt-12 sm:pb-14 sm:pt-16">
          <AliceFace mood={categoryMood[c.slug]} size={250} className="absolute bottom-0 right-8 hidden lg:inline-grid" />
          <nav aria-label="Breadcrumb" className="text-sm text-muted">
            <Link href="/categories" className="hover:underline">Explore bills</Link> <span aria-hidden>/</span> <span>{c.shortName}</span>
          </nav>
          <div className="mt-6">
            <div className="max-w-3xl lg:pr-64">
              <h1 className="mt-2 text-[clamp(2.4rem,5.6vw,4.2rem)] font-extrabold leading-[0.98] tracking-[-0.04em] text-teal-deep">{c.name}</h1>
              <p className="mt-4 text-lg leading-relaxed text-muted sm:text-xl"><Inline text={c.tagline} citePrefix={cite} /></p>
              <MetaLine className="mt-5" items={['United States', `Last reviewed ${formatDate(c.lastReviewed)}`, `${c.sources.length} sources`]} />
            </div>
          </div>
        </div>
      </header>

      <div className="container-x grid gap-12 py-12 lg:grid-cols-[15rem_1fr] lg:py-16">
        <aside className="no-print hidden lg:block">
          <nav aria-label="On this page" className="sticky top-24">
            <p className="eyebrow text-muted">On this page</p>
            <ol className="mt-3 space-y-1.5 border-l border-line text-[0.9rem]">
              {toc.filter(([id]) => id !== 'shop' || features.shopOpen).map(([id, label]) => (
                <li key={id}><a href={`#${id}`} className="-ml-px block border-l-2 border-transparent pl-3 text-muted hover:border-gold hover:text-teal-deep">{label}</a></li>
              ))}
            </ol>
          </nav>
        </aside>

        <article className="min-w-0 max-w-3xl space-y-16">
          <section id="overview" className="prose-billix space-y-4">
            <H2 id="overview-h" n={1}>Overview</H2>
            {c.intro.map((p, i) => <p key={i}><Inline text={p} citePrefix={cite} /></p>)}
          </section>

          <section id="how-it-works">
            <H2 id="how-h" n={2}>How the bill works</H2>
            <p className="prose-billix mt-4"><Inline text={c.howItWorks.summary} citePrefix={cite} /></p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {c.howItWorks.points.map((pt) => (
                <div key={pt.title} className="rounded-[var(--radius-card)] border border-line bg-paper p-5">
                  <h3 className="text-lg font-semibold text-teal-deep">{pt.title}</h3>
                  <p className="mt-2 text-[0.97rem] leading-relaxed"><Inline text={pt.body} citePrefix={cite} /></p>
                </div>
              ))}
            </div>
          </section>

          <section id="charges">
            <H2 id="charges-h" n={3}>Common charges and fees</H2>
            <dl className="mt-6 divide-y divide-line overflow-hidden rounded-[var(--radius-card)] border border-line bg-white">
              {c.commonCharges.map((ch) => (
                <div key={ch.name} className="grid gap-1 px-5 py-4 sm:grid-cols-[14rem_1fr] sm:gap-6">
                  <dt className="font-semibold text-teal-deep">{ch.name}</dt>
                  <dd className="text-[0.97rem] leading-relaxed text-ink"><Inline text={ch.description} citePrefix={cite} /></dd>
                </div>
              ))}
            </dl>
          </section>

          <section id="why-costs-rise">
            <H2 id="why-h" n={4}>Why costs increase</H2>
            <ul className="mt-6 space-y-4">
              {c.whyCostsRise.map((w) => (
                <li key={w.title} className="border-l-4 border-gold pl-5">
                  <h3 className="text-lg font-semibold text-teal-deep">{w.title}</h3>
                  <p className="prose-billix mt-1"><Inline text={w.body} citePrefix={cite} /></p>
                </li>
              ))}
            </ul>
          </section>

          <section id="read-your-bill">
            <H2 id="read-h" n={5}>How to understand the bill</H2>
            <ol className="mt-6 space-y-4">
              {c.readingYourBill.map((s, i) => (
                <li key={s.title} className="flex gap-4">
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-teal font-semibold text-white">{i + 1}</span>
                  <div>
                    <h3 className="font-semibold text-teal-deep">{s.title}</h3>
                    <p className="prose-billix mt-1"><Inline text={s.body} citePrefix={cite} /></p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section id="review">
            <H2 id="review-h" n={6}>Practical ways to review this bill</H2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {c.reviewTips.map((t) => (
                <div key={t.title} className="rounded-[var(--radius-card)] bg-cash-soft/50 p-5">
                  <h3 className="font-semibold text-teal-deep">{t.title}</h3>
                  <p className="mt-1.5 text-[0.97rem] leading-relaxed"><Inline text={t.body} citePrefix={cite} /></p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-muted">Educational information, not financial advice. Your bill, provider and state rules may differ.</p>
          </section>

          <section id="tools">
            <H2 id="tools-h" n={7}>Relevant calculators</H2>
            {tools.length ? (
              <div className="mt-6 grid gap-4 sm:grid-cols-2">{tools.map((t) => <ToolCard key={t.slug} t={t} />)}</div>
            ) : (
              <EmptyState title="Calculators coming">We&rsquo;re building tools for this bill.</EmptyState>
            )}
          </section>

          <section id="compare">
            <H2 id="compare-h" n={8}>What&rsquo;s worth comparing</H2>
            <div className="mt-6 space-y-4">
              {c.comparisons.map((x) => (
                <div key={x.title} className="rounded-[var(--radius-card)] border border-line bg-paper p-5">
                  <h3 className="font-semibold text-teal-deep">{x.title}</h3>
                  <p className="prose-billix mt-1.5"><Inline text={x.body} citePrefix={cite} /></p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-muted">We don&rsquo;t publish provider prices we can&rsquo;t verify. <Link href="/compare" className="font-semibold text-teal-ink underline">Use the comparison tools</Link> with numbers from your own bills and quotes.</p>
          </section>

          <section id="videos">
            <H2 id="videos-h" n={9}>Educational videos</H2>
            {videos.length ? (
              <div className="mt-6 grid gap-4 sm:grid-cols-2">{videos.map((v) => <VideoCard key={v.slug} v={v} />)}</div>
            ) : (
              <div className="mt-6"><EmptyState title="Alice is working on it" action={<ButtonLink href="/community#video-idea" variant="ghost" size="sm">Suggest a video</ButtonLink>}>No videos on this bill yet.</EmptyState></div>
            )}
          </section>

          <section id="articles">
            <H2 id="articles-h" n={10}>Related articles</H2>
            {articles.length ? (
              <div className="mt-6 grid gap-4 sm:grid-cols-2">{articles.map((a) => <ArticleCard key={a.slug} a={a} showCategory={false} />)}</div>
            ) : (
              <div className="mt-6"><EmptyState title="More guides coming" action={<ButtonLink href="/community#ask" variant="ghost" size="sm">Ask a question</ButtonLink>}>Tell us what you&rsquo;d like explained.</EmptyState></div>
            )}
          </section>

          <section id="faq">
            <H2 id="faq-h" n={11}>Frequently asked questions</H2>
            <div className="mt-6 divide-y divide-line rounded-[var(--radius-card)] border border-line bg-white">
              {c.faqs.map((f) => (
                <details key={f.q} className="group px-5 py-4">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-semibold text-teal-deep">
                    {f.q}
                    <span aria-hidden className="mt-0.5 text-xl leading-none text-teal transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="prose-billix mt-3"><Inline text={f.a} citePrefix={cite} /></p>
                </details>
              ))}
            </div>
          </section>

          <section id="by-state">
            <H2 id="state-h" n={12}>What varies by state</H2>
            <p className="prose-billix mt-4"><Inline text={c.stateNotes.summary} citePrefix={cite} /></p>
            <p className="prose-billix mt-3"><strong>Who oversees it: </strong><Inline text={c.stateNotes.whoRegulates} citePrefix={cite} /></p>
            <ButtonLink href="/states" variant="ghost" className="mt-5" arrow>Find your state</ButtonLink>
          </section>

          {features.shopOpen && (
          <section id="shop">
            <H2 id="shop-h" n={13}>Related products</H2>
            {products.length ? (
              <div className="mt-6 grid gap-4 sm:grid-cols-3">{products.map((p) => <ProductCard key={p.slug} p={p} />)}</div>
            ) : (
              <p className="mt-4 text-muted">No related products planned yet. <Link href="/shop" className="font-semibold text-teal-ink underline">Preview the shop</Link>.</p>
            )}
          </section>
          )}

          <AliceNote title="A note from Alice">Found something out of date or wrong? <Link href="/contact?topic=correction" className="font-semibold text-teal-ink underline">Tell us</Link> and we&rsquo;ll review it.</AliceNote>
          <SourceList sources={c.sources} citePrefix={cite} />
        </article>
      </div>
    </>
  )
}
