'use client'

import { useState } from 'react'
import Link from 'next/link'
import { clsx } from 'clsx'
import { ArrowRight } from 'lucide-react'
import type { CategorySlug } from '@/content/types'
import { CategoryIcon } from '@/components/ui/icons'
import { AliceFace, categoryMood } from '@/components/brand/alice'

export interface ExplorerCategory {
  slug: CategorySlug
  shortName: string
  tagline: string
  charges: string[]
  whyRise: string[]
  faq?: string
}


export function CategoryExplorer({ categories }: { categories: ExplorerCategory[] }) {
  const [i, setI] = useState(0)
  const c = categories[i]
  return (
    <div className="grid gap-6 lg:grid-cols-[17rem_1fr]">
      <div role="tablist" aria-label="Bill categories" className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 lg:mx-0 lg:flex-col lg:gap-1 lg:overflow-visible lg:px-0 lg:pb-0">
        {categories.map((x, j) => (
          <button
            key={x.slug}
            role="tab"
            id={`cat-tab-${x.slug}`}
            aria-selected={i === j}
            aria-controls="cat-panel"
            onClick={() => setI(j)}
            onMouseEnter={() => setI(j)}
            className={clsx(
              'flex shrink-0 items-center gap-3 rounded-xl px-3.5 py-2.5 text-left text-[0.95rem] font-semibold transition-all',
              i === j ? 'bg-teal-deep text-cream shadow-[var(--shadow-card)] lg:translate-x-1' : 'bg-paper text-teal-deep ring-1 ring-line hover:ring-teal/40 lg:bg-transparent lg:ring-0 lg:hover:bg-paper',
            )}
          >
            <CategoryIcon slug={x.slug} className="size-[18px]" />
            {x.shortName}
          </button>
        ))}
      </div>

      <div id="cat-panel" role="tabpanel" aria-labelledby={`cat-tab-${c.slug}`} className="relative overflow-hidden rounded-[var(--radius-panel)] bg-paper p-6 ring-1 ring-line sm:p-9">
        <div key={c.slug} className="animate-rise">
          <div className="flex items-start justify-between gap-6">
            <div className="max-w-xl">
              <h3 className="text-[clamp(1.7rem,3vw,2.4rem)] font-extrabold leading-tight text-teal-deep">{c.shortName}</h3>
              <p className="mt-3 text-lg leading-relaxed text-muted">{c.tagline.replace(/\[\^\d+\]|\*\*/g, '')}</p>
            </div>
            <AliceFace key={c.slug} mood={categoryMood[c.slug]} size={120} className="hidden sm:inline-grid" />
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div>
              <p className="text-sm font-bold text-teal-ink">Charges you&rsquo;ll see</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {c.charges.map((ch) => (
                  <li key={ch} className="rounded-lg bg-mist px-3 py-1.5 text-[0.9rem] font-medium text-teal-deep">{ch}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm font-bold text-teal-ink">Why it goes up</p>
              <ul className="mt-3 space-y-2">
                {c.whyRise.map((w) => (
                  <li key={w} className="flex gap-2 text-[0.95rem] text-ink"><span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" />{w}</li>
                ))}
              </ul>
            </div>
          </div>
          {c.faq && <p className="mt-8 rounded-xl border-l-4 border-gold bg-gold-soft/40 px-4 py-3 text-[0.95rem] text-teal-deep"><span className="font-semibold">People ask:</span> {c.faq}</p>}
          <Link href={`/categories/${c.slug}`} className="group mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3 font-semibold text-teal-night transition-transform hover:-translate-y-0.5">
            Read the {c.shortName.toLowerCase()} guide <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
          </Link>
        </div>
      </div>
    </div>
  )
}
