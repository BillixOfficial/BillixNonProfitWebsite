'use client'

import { useState } from 'react'
import { Search } from 'lucide-react'

/** Filters the server-rendered glossary in place (all terms stay in the HTML for SEO and no-JS). */
export function GlossaryFilter({ total }: { total: number }) {
  const [q, setQ] = useState('')
  const [shown, setShown] = useState(total)

  const apply = (value: string) => {
    setQ(value)
    const needle = value.trim().toLowerCase()
    let n = 0
    document.querySelectorAll<HTMLElement>('[data-term]').forEach((el) => {
      const hit = !needle || (el.dataset.term ?? '').includes(needle)
      el.hidden = !hit
      if (hit) n++
    })
    document.querySelectorAll<HTMLElement>('[data-letter]').forEach((sec) => {
      sec.hidden = !sec.querySelector('[data-term]:not([hidden])')
    })
    setShown(n)
  }

  return (
    <div className="relative">
      <label htmlFor="glossary-filter" className="sr-only">Filter the glossary</label>
      <Search className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-teal-deep/50" aria-hidden />
      <input id="glossary-filter" type="search" value={q} onChange={(e) => apply(e.target.value)} placeholder="Type a word from your bill, like “therm” or “escrow”" className="h-14 w-full rounded-2xl border border-line bg-paper pl-12 pr-28 text-lg outline-none focus:border-teal focus:ring-4 focus:ring-teal/10" />
      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-muted" aria-live="polite">{shown} of {total}</span>
    </div>
  )
}
