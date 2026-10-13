import Link from 'next/link'
import { Fragment } from 'react'
import { isExternal, tokenize } from '@/lib/inline'
import type { ArticleBlock, Source } from '@/content/types'
import { Callout } from '@/components/ui/primitives'
import { ExternalLink } from 'lucide-react'
import { formatDate } from '@/components/ui/primitives'

/** Renders Billix inline markup. `citePrefix` scopes citation anchors per page. */
export function Inline({ text, citePrefix = 'src' }: { text: string; citePrefix?: string }) {
  return (
    <>
      {tokenize(text).map((t, i) => {
        switch (t.type) {
          case 'text':
            return <Fragment key={i}>{t.value}</Fragment>
          case 'bold':
            return <strong key={i}>{t.value}</strong>
          case 'cite':
            return (
              <sup key={i} className="ml-0.5">
                <a href={`#${citePrefix}-${t.n}`} className="!no-underline rounded px-0.5 text-[0.72em] font-semibold text-teal-ink hover:bg-teal-soft" aria-label={`Source ${t.n}`}>
                  [{t.n}]
                </a>
              </sup>
            )
          case 'link':
            return isExternal(t.href) ? (
              <a key={i} href={t.href} target="_blank" rel="noopener noreferrer">
                {t.label}
              </a>
            ) : /^mailto:|\.[a-z0-9]{2,4}$/i.test(t.href) ? (
              <a key={i} href={t.href}>
                {t.label}
              </a>
            ) : (
              <Link key={i} href={t.href}>
                {t.label}
              </Link>
            )
        }
      })}
    </>
  )
}

export function Blocks({ blocks, citePrefix }: { blocks: ArticleBlock[]; citePrefix?: string }) {
  return (
    <>
      {blocks.map((b, i) => {
        switch (b.type) {
          case 'p':
            return (
              <p key={i}>
                <Inline text={b.text} citePrefix={citePrefix} />
              </p>
            )
          case 'list': {
            const Tag = b.ordered ? 'ol' : 'ul'
            return (
              <Tag key={i} className={`my-5 space-y-2 pl-6 ${b.ordered ? 'list-decimal' : 'list-disc'} marker:text-teal`}>
                {b.items.map((it, j) => (
                  <li key={j} className="pl-1">
                    <Inline text={it} citePrefix={citePrefix} />
                  </li>
                ))}
              </Tag>
            )
          }
          case 'callout':
            return (
              <Callout key={i} tone={b.tone} title={b.title}>
                <Inline text={b.text} citePrefix={citePrefix} />
              </Callout>
            )
          case 'table':
            return (
              <div key={i} className="my-6 overflow-x-auto rounded-2xl border border-line bg-white">
                <table className="w-full min-w-[28rem] text-left text-[0.95rem]">
                  {b.caption && <caption className="px-4 pt-3 text-left text-sm text-muted">{b.caption}</caption>}
                  <thead>
                    <tr className="border-b border-line">
                      {b.headers.map((h) => (
                        <th key={h} scope="col" className="px-4 py-3 font-semibold text-teal-deep">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {b.rows.map((r, j) => (
                      <tr key={j} className="border-b border-line-soft last:border-0">
                        {r.map((c, k) => (
                          <td key={k} className="px-4 py-3 align-top">
                            <Inline text={c} citePrefix={citePrefix} />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )
        }
      })}
    </>
  )
}

export function SourceList({ sources, citePrefix = 'src', title = 'Sources' }: { sources: Source[]; citePrefix?: string; title?: string }) {
  if (sources.length === 0) return null
  return (
    <section aria-labelledby={`${citePrefix}-heading`} className="mt-12 rounded-[var(--radius-card)] border border-line bg-paper p-6">
      <h2 id={`${citePrefix}-heading`} className="text-xl font-semibold text-teal-deep">
        {title}
      </h2>
      <ol className="mt-4 space-y-3 text-[0.95rem]">
        {sources.map((s, i) => (
          <li key={s.url + i} id={`${citePrefix}-${i + 1}`} className="flex gap-3">
            <span className="w-6 shrink-0 font-semibold text-teal-ink">{i + 1}.</span>
            <span>
              <a href={s.url} target="_blank" rel="noopener noreferrer" className="font-medium text-teal-deep underline decoration-1 underline-offset-3 hover:decoration-2">
                {s.title}
                <ExternalLink className="ml-1 inline size-3.5 align-[-2px]" aria-hidden />
              </a>
              <span className="text-muted">. {s.publisher}. Checked {formatDate(s.accessed)}.</span>
              {s.note && <span className="block text-sm text-muted">{s.note}</span>}
            </span>
          </li>
        ))}
      </ol>
    </section>
  )
}
