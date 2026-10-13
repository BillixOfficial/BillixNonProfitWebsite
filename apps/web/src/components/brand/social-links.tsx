import { clsx } from 'clsx'
import { ArrowUpRight } from 'lucide-react'
import { featuredSocial, type SocialPlatform } from '@/config/site'
import { SocialIcon } from '@/components/ui/icons'

const blurbs: Partial<Record<SocialPlatform, string>> = {
  youtube: 'Full bill breakdowns with Alice',
  tiktok: 'One-minute bill tips',
  linkedin: 'Company news and partnerships',
  instagram: 'Coming soon',
}

const brandBg: Partial<Record<SocialPlatform, string>> = {
  youtube: 'bg-[#ff0033] text-white',
  tiktok: 'bg-[#111] text-white',
  linkedin: 'bg-[#0a66c2] text-white',
  instagram: 'bg-gradient-to-br from-[#feda75] via-[#d62976] to-[#4f5bd5] text-white',
}

/** Round icon buttons (footer, compact spots). Placeholders render dimmed and unlinked. */
export function SocialIconRow({ tone = 'dark', className }: { tone?: 'dark' | 'light'; className?: string }) {
  return (
    <ul className={clsx('flex flex-wrap gap-2', className)} aria-label="Billix on social media">
      {featuredSocial.map((s) => (
        <li key={s.platform}>
          {s.url ? (
            <a href={s.url} target="_blank" rel="noopener noreferrer" aria-label={`Billix on ${s.label}`} title={s.label} className={clsx('grid size-10 place-items-center rounded-full transition-colors', tone === 'light' ? 'bg-cream/10 text-cream hover:bg-gold hover:text-teal-night' : 'bg-paper text-teal-deep ring-1 ring-line hover:bg-gold hover:ring-gold')}>
              <SocialIcon platform={s.platform} className="size-[18px]" />
            </a>
          ) : (
            <span title={`${s.label}: coming soon`} aria-label={`${s.label} coming soon`} className={clsx('grid size-10 cursor-default place-items-center rounded-full opacity-45', tone === 'light' ? 'bg-cream/10 text-cream' : 'bg-paper text-teal-deep ring-1 ring-line')}>
              <SocialIcon platform={s.platform} className="size-[18px]" />
            </span>
          )}
        </li>
      ))}
    </ul>
  )
}

/** Large follow cards for the homepage and social hub. */
export function SocialCards({ className }: { className?: string }) {
  return (
    <ul className={clsx('grid gap-3 sm:grid-cols-2 lg:grid-cols-4', className)}>
      {featuredSocial.map((s) => {
        const inner = (
          <>
            <span className={clsx('grid size-12 shrink-0 place-items-center rounded-2xl', brandBg[s.platform])}>
              <SocialIcon platform={s.platform} className="size-6" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block font-display text-lg font-bold text-teal-deep">{s.label}</span>
              <span className="block text-sm text-muted">{s.url ? blurbs[s.platform] : 'Coming soon'}</span>
            </span>
            {s.url && <ArrowUpRight className="size-5 shrink-0 text-teal-deep/40 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-teal" aria-hidden />}
          </>
        )
        return (
          <li key={s.platform}>
            {s.url ? (
              <a href={s.url} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 rounded-2xl bg-paper p-4 ring-1 ring-line transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)] hover:ring-teal/40">{inner}</a>
            ) : (
              <div className="flex items-center gap-4 rounded-2xl bg-paper/60 p-4 opacity-70 ring-1 ring-dashed ring-line">{inner}</div>
            )}
          </li>
        )
      })}
    </ul>
  )
}
