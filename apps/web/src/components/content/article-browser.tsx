'use client'

import { useMemo, useState } from 'react'
import { clsx } from 'clsx'
import type { CategoryMeta } from '@/content/category-index'
import { EmptyState } from '@/components/ui/primitives'

export interface BrowserItem {
  key: string
  category: string
  text: string
  node: React.ReactNode
}

/** Client-side category + keyword filter over server-rendered cards. */
export function ArticleBrowser({ items, categories }: { items: BrowserItem[]; categories: CategoryMeta[] }) {
  const [cat, setCat] = useState<string>('all')
  const [q, setQ] = useState('')
  const used = categories.filter((c) => items.some((i) => i.category === c.slug))
  const shown = useMemo(() => {
    const needle = q.trim().toLowerCase()
    return items.filter((i) => (cat === 'all' || i.category === cat) && (!needle || i.text.toLowerCase().includes(needle)))
  }, [items, cat, q])

  return (
    <div>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div role="group" aria-label="Filter by category" className="flex flex-wrap gap-2">
          {[{ slug: 'all', shortName: 'All' }, ...used].map((c) => (
            <button
              key={c.slug}
              type="button"
              aria-pressed={cat === c.slug}
              onClick={() => setCat(c.slug)}
              className={clsx('rounded-full px-4 py-1.5 text-sm font-semibold transition-colors', cat === c.slug ? 'bg-teal-deep text-cream' : 'border border-line bg-paper text-teal-deep hover:border-teal')}
            >
              {c.shortName}
            </button>
          ))}
        </div>
        <label className="relative lg:w-72">
          <span className="sr-only">Filter articles</span>
          <input type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Filter by keyword" className="h-11 w-full rounded-full border border-line bg-white px-5 outline-none focus:border-teal" />
        </label>
      </div>
      <p className="mt-4 text-sm text-muted" aria-live="polite">{shown.length} {shown.length === 1 ? 'result' : 'results'}</p>
      {shown.length ? (
        <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{shown.map((i) => <div key={i.key}>{i.node}</div>)}</div>
      ) : (
        <div className="mt-4"><EmptyState title="Nothing matches that filter">Try another keyword or category.</EmptyState></div>
      )}
    </div>
  )
}
