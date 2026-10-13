import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getLegalPage, legalPages } from '@/content/legal'
import { Blocks } from '@/components/content/rich-text'
import { Callout, formatDate } from '@/components/ui/primitives'

export function generateStaticParams() {
  return legalPages.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: PageProps<'/legal/[slug]'>): Promise<Metadata> {
  const { slug } = await params
  const p = getLegalPage(slug)
  return p ? { title: p.title, description: p.summary, alternates: { canonical: `/legal/${p.slug}` } } : {}
}

export default async function LegalPageRoute({ params }: PageProps<'/legal/[slug]'>) {
  const { slug } = await params
  const p = getLegalPage(slug)
  if (!p) notFound()
  return (
    <div className="container-x grid gap-12 py-12 sm:py-16 lg:grid-cols-[14rem_1fr]">
      <nav aria-label="Legal pages" className="no-print">
        <p className="eyebrow text-muted">Legal</p>
        <ul className="mt-3 space-y-1.5 text-[0.93rem]">
          {legalPages.map((l) => (
            <li key={l.slug}><Link href={`/legal/${l.slug}`} aria-current={l.slug === p.slug ? 'page' : undefined} className={l.slug === p.slug ? 'font-semibold text-teal-deep' : 'text-muted hover:text-teal-deep'}>{l.title}</Link></li>
          ))}
        </ul>
      </nav>
      <article className="max-w-3xl">
        <h1 className="text-[clamp(2rem,4.5vw,3rem)] font-semibold text-teal-deep">{p.title}</h1>
        <p className="mt-2 text-sm text-muted">Last updated {formatDate(p.updated)}</p>
        {!p.reviewed && <Callout tone="warning" title="Draft">This page is a working draft that describes how Billix works today. It is pending legal review and may change.</Callout>}
        <div className="prose-billix">
          {p.sections.map((s) => (
            <section key={s.id} aria-labelledby={s.id} className="mt-10">
              <h2 id={s.id} className="mb-3 text-2xl font-semibold text-teal-deep">{s.heading}</h2>
              <Blocks blocks={s.blocks} />
            </section>
          ))}
        </div>
      </article>
    </div>
  )
}
