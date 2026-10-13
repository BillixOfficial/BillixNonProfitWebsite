import type { Metadata } from 'next'
import Link from 'next/link'
import { getGlossary } from '@/lib/content'
import { categoryMeta } from '@/content/category-index'
import { Inline } from '@/components/content/rich-text'
import { AliceFace } from '@/components/brand/alice'
import { PageHeader } from '@/components/ui/primitives'
import { GlossaryFilter } from '@/components/content/glossary-filter'

export const metadata: Metadata = {
  title: 'Billing Glossary A–Z',
  description: 'Plain-English definitions of the terms on your bills: kWh, therm, escrow, deductible, supply and delivery charges, APR and more.',
  alternates: { canonical: '/glossary' },
}

const letterOf = (term: string) => {
  const c = term[0].toUpperCase()
  return /[A-Z]/.test(c) ? c : '#'
}

export default function GlossaryPage() {
  const terms = getGlossary()
  const groups = new Map<string, typeof terms>()
  for (const t of terms) {
    const l = letterOf(t.term)
    groups.set(l, [...(groups.get(l) ?? []), t])
  }
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
  const bySlug = new Map(terms.map((t) => [t.slug, t]))

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTermSet',
    name: 'Billix Billing Glossary',
    hasDefinedTerm: terms.map((t) => ({ '@type': 'DefinedTerm', name: t.term, description: t.definition.replace(/\[\^\d+\]|\*\*/g, '') })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHeader title="Billing terms, A to Z" lede={`${terms.length} terms you’ll find on household bills, explained in plain English.`} aside={<AliceFace mood="magnifier" size={250} />} />
      <nav aria-label="Glossary letters" className="sticky top-[4.25rem] z-30 border-b border-line bg-cream/95 backdrop-blur">
        <ul className="container-x flex gap-1 overflow-x-auto py-2.5">
          {letters.map((l) => (
            <li key={l}>
              {groups.has(l) ? (
                <a href={`#letter-${l}`} className="grid size-8 place-items-center rounded-lg text-sm font-bold text-teal-deep hover:bg-gold-soft">{l}</a>
              ) : (
                <span className="grid size-8 place-items-center text-sm text-muted/40" aria-hidden>{l}</span>
              )}
            </li>
          ))}
        </ul>
      </nav>
      <div className="container-x max-w-4xl py-12">
        <div className="mb-10"><GlossaryFilter total={terms.length} /></div>
        {[...groups.entries()].map(([letter, list]) => (
          <section key={letter} data-letter={letter} id={`letter-${letter}`} aria-label={`Terms starting with ${letter}`} className="mb-12">
            <h2 className="border-b-2 border-gold pb-2 text-3xl font-semibold text-teal-deep">{letter}</h2>
            <dl className="mt-2 divide-y divide-line">
              {list.map((t) => (
                <div key={t.slug} id={t.slug} data-term={`${t.term} ${t.aka ?? ''} ${t.definition}`.toLowerCase()} className="py-6 target:rounded-xl target:bg-gold-soft/40 target:px-4">
                  <dt className="text-xl font-semibold text-teal-deep">
                    {t.term} {t.aka && <span className="font-sans text-base font-normal text-muted">({t.aka})</span>}
                  </dt>
                  <dd className="prose-billix mt-2">
                    <p><Inline text={t.definition} /></p>
                    {t.example && <p className="mt-2 rounded-xl bg-paper px-4 py-3 text-[0.97rem]"><strong>Example: </strong><Inline text={t.example} /></p>}
                    <p className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-sm">
                      {t.categories.map((c) => (
                        <Link key={c} href={`/categories/${c}`} className="!no-underline font-semibold text-teal-ink hover:!underline">{categoryMeta(c).shortName}</Link>
                      ))}
                      {t.related?.filter((r) => bySlug.has(r)).map((r) => (
                        <a key={r} href={`#${r}`} className="!text-muted">See also: {bySlug.get(r)!.term}</a>
                      ))}
                    </p>
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        ))}
      </div>
    </>
  )
}
