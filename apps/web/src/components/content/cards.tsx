import Image from 'next/image'
import Link from 'next/link'
import { clsx } from 'clsx'
import { ArrowUpRight, Calculator, Clock, MapPin, Play } from 'lucide-react'
import type { Article, Video } from '@/content/types'
import type { CategoryMeta } from '@/content/category-index'
import { categoryMeta } from '@/content/category-index'
import type { ToolEntry } from '@/content/tools'
import { CategoryIcon, categoryTone } from '@/components/ui/icons'
import { Badge, ComingSoonBadge, formatDate } from '@/components/ui/primitives'
import { readingMinutes } from '@/lib/content'

const cardBase =
  'group relative flex h-full flex-col rounded-[var(--radius-card)] border border-line bg-paper shadow-[var(--shadow-card)] transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-1 hover:border-teal/40 hover:shadow-[var(--shadow-lift)]'

export function CategoryCard({ c, compact }: { c: CategoryMeta; compact?: boolean }) {
  return (
    <Link href={`/categories/${c.slug}`} className={clsx(cardBase, compact ? 'p-4' : 'p-5 sm:p-6')}>
      <span className={clsx('grid size-11 place-items-center rounded-xl', categoryTone[c.slug])}>
        <CategoryIcon slug={c.slug} className="size-5.5" />
      </span>
      <h3 className={clsx('mt-4 font-semibold text-teal-deep', compact ? 'text-lg' : 'text-xl')}>{c.shortName}</h3>
      {!compact && <p className="mt-1.5 text-[0.95rem] leading-relaxed text-muted">{c.blurb}</p>}
      <ArrowUpRight className="absolute right-5 top-5 size-5 text-teal-deep/30 transition-colors group-hover:text-teal" aria-hidden />
    </Link>
  )
}

export function ArticleCard({ a, showCategory = true }: { a: Article; showCategory?: boolean }) {
  const cat = categoryMeta(a.category)
  return (
    <Link href={`/learn/${a.slug}`} className={clsx(cardBase, 'p-5 sm:p-6')}>
      <div className="flex flex-wrap items-center gap-2">
        {a.kind === 'update' ? <Badge tone="gold">Bill update</Badge> : showCategory && <Badge tone="teal">{cat.shortName}</Badge>}
        {a.kind === 'update' && showCategory && <Badge tone="teal">{cat.shortName}</Badge>}
      </div>
      <h3 className="mt-4 text-[1.3rem] font-semibold leading-snug text-teal-deep group-hover:underline group-hover:decoration-gold group-hover:decoration-2 group-hover:underline-offset-4">{a.title}</h3>
      <p className="mt-2 line-clamp-3 text-[0.95rem] leading-relaxed text-muted">{a.description}</p>
      <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-1 pt-5 text-[0.82rem] text-muted">
        <time dateTime={a.publishedAt}>{formatDate(a.publishedAt)}</time>
        <span className="inline-flex items-center gap-1"><Clock className="size-3.5" aria-hidden />{readingMinutes(a)} min read</span>
        <span className="inline-flex items-center gap-1"><MapPin className="size-3.5" aria-hidden />{a.geography.label}</span>
      </div>
    </Link>
  )
}

export function VideoCard({ v, priority }: { v: Video; priority?: boolean }) {
  const isShort = v.kind === 'short'
  return (
    <Link href={`/videos/${v.slug}`} className={clsx(cardBase, 'overflow-hidden')}>
      <div className={clsx('relative overflow-hidden bg-teal-deep', isShort ? 'aspect-[9/16] max-h-[26rem]' : 'aspect-video')}>
        <Image src={v.thumbnail} alt="" fill sizes="(min-width: 1024px) 380px, 90vw" priority={priority} className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
        <span className="absolute bottom-3 right-3 rounded-md bg-teal-night/85 px-2 py-0.5 text-xs font-semibold text-cream">{v.duration}</span>
        {v.youtubeId ? (
          <span className="absolute inset-0 grid place-items-center">
            <span className="grid size-14 place-items-center rounded-full bg-gold text-teal-night shadow-lg transition-transform group-hover:scale-110"><Play className="ml-0.5 size-6" fill="currentColor" aria-hidden /></span>
          </span>
        ) : (
          <ComingSoonBadge className="absolute left-3 top-3" />
        )}
      </div>
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <p className="eyebrow text-teal-ink">{isShort ? 'Short' : 'Video'}{v.category !== 'channel' && ` · ${categoryMeta(v.category).shortName}`}</p>
        <h3 className="mt-2 text-lg font-semibold leading-snug text-teal-deep">{v.title}</h3>
      </div>
    </Link>
  )
}

export function ToolCard({ t }: { t: ToolEntry }) {
  if (t.status === 'available' && t.href) {
    return (
      <Link href={t.href} className="group relative flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] bg-teal-deep p-6 text-cream transition hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]">
        <Calculator className="size-7 text-gold" aria-hidden strokeWidth={1.8} />
        <h3 className="mt-5 text-xl font-bold">{t.name}</h3>
        <p className="mt-2 text-[0.95rem] leading-relaxed text-cream/75">{t.description}</p>
        <span className="mt-auto inline-flex items-center gap-1.5 pt-6 font-semibold text-gold">Open the calculator <ArrowUpRight className="size-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden /></span>
      </Link>
    )
  }
  return (
    <div className="flex h-full flex-col border-t-2 border-line pt-4" aria-label={`${t.name} (planned, not yet available)`}>
      <h3 className="font-display text-lg font-bold text-teal-deep/80">{t.name}</h3>
      <p className="mt-1 text-[0.93rem] leading-relaxed text-muted">{t.description}</p>
      <p className="mt-2 text-sm font-semibold text-muted">On our roadmap</p>
    </div>
  )
}

export { ProductCard } from '@/components/shop/product-ui'
