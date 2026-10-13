import type { Metadata } from 'next'
import Link from 'next/link'
import { Suspense } from 'react'
import { search, typeLabels } from '@/lib/search'
import { SearchBox } from '@/components/content/search-box'
import { Badge, EmptyState, ButtonLink } from '@/components/ui/primitives'

export const metadata: Metadata = {
  title: 'Search',
  description: 'Search Billix guides, videos, glossary terms and tools.',
  robots: { index: false, follow: true },
}

async function Results({ searchParams }: { searchParams: PageProps<'/search'>['searchParams'] }) {
  const sp = await searchParams
  const q = (Array.isArray(sp.q) ? sp.q[0] : sp.q)?.slice(0, 200) ?? ''
  const hits = q ? search(q) : []
  return (
    <>
      <SearchBox defaultValue={q} className="mt-6" />
      <div className="mt-10" aria-live="polite">
        {!q ? (
          <p className="text-muted">Type a question or a word from your bill, like &ldquo;delivery charge&rdquo; or &ldquo;escrow&rdquo;.</p>
        ) : hits.length === 0 ? (
          <EmptyState title={`No results for “${q}”`} action={<ButtonLink href="/community#ask" variant="ghost" size="sm">Ask us instead</ButtonLink>}>
            Try fewer or simpler words. If we haven&rsquo;t covered it yet, send us the question.
          </EmptyState>
        ) : (
          <>
            <p className="text-sm text-muted">{hits.length} results for &ldquo;{q}&rdquo;</p>
            <ol className="mt-4 divide-y divide-line rounded-[var(--radius-card)] border border-line bg-paper">
              {hits.map((h) => (
                <li key={h.type + h.href}>
                  <Link href={h.href} className="block px-5 py-4 transition-colors hover:bg-white">
                    <Badge tone={h.type === 'glossary' ? 'plum' : h.type === 'tool' ? 'cash' : h.type === 'update' ? 'gold' : 'teal'}>{typeLabels[h.type]}</Badge>
                    <p className="mt-2 font-display text-lg font-semibold text-teal-deep">{h.title}</p>
                    <p className="mt-1 line-clamp-2 text-[0.95rem] text-muted">{h.description}</p>
                  </Link>
                </li>
              ))}
            </ol>
          </>
        )}
      </div>
    </>
  )
}

export default function SearchPage({ searchParams }: PageProps<'/search'>) {
  return (
    <div className="container-x max-w-3xl py-12 sm:py-16">
      <h1 className="text-[clamp(2rem,4.5vw,3rem)] font-semibold text-teal-deep">Search Billix</h1>
      <Suspense fallback={<SearchBox className="mt-6" />}>
        <Results searchParams={searchParams} />
      </Suspense>
    </div>
  )
}
