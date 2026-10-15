import Link from 'next/link'
import { clsx } from 'clsx'
import type { ComponentProps, ReactNode } from 'react'
import { ArrowRight, Info, Lightbulb, TriangleAlert } from 'lucide-react'

type Variant = 'primary' | 'secondary' | 'ghost' | 'dark'
type Size = 'md' | 'lg' | 'sm'

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-[transform,background-color,box-shadow,color] duration-200 will-change-transform hover:-translate-y-0.5 active:translate-y-0 disabled:pointer-events-none disabled:opacity-55'

const variants: Record<Variant, string> = {
  primary: 'bg-gold text-teal-night shadow-[0_8px_20px_-10px_rgba(227,166,60,.9)] hover:bg-[#eab14d]',
  secondary: 'bg-teal text-white hover:bg-[#256a63] shadow-[0_8px_20px_-12px_rgba(44,122,114,.9)]',
  ghost: 'bg-transparent text-teal-deep ring-1 ring-inset ring-teal-deep/25 hover:bg-teal-deep/5',
  dark: 'bg-teal-deep text-cream hover:bg-teal-night',
}

const sizes: Record<Size, string> = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-5 text-[0.95rem]',
  lg: 'h-13 px-7 text-base',
}

export function buttonClass(variant: Variant = 'primary', size: Size = 'md', className?: string) {
  return clsx(base, variants[variant], sizes[size], className)
}

export function ButtonLink({
  variant = 'primary',
  size = 'md',
  className,
  arrow,
  children,
  ...props
}: ComponentProps<typeof Link> & { variant?: Variant; size?: Size; arrow?: boolean }) {
  return (
    <Link className={buttonClass(variant, size, className)} {...props}>
      {children}
      {arrow && <ArrowRight className="size-4" aria-hidden />}
    </Link>
  )
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  ...props
}: ComponentProps<'button'> & { variant?: Variant; size?: Size }) {
  return <button className={buttonClass(variant, size, className)} {...props} />
}


export function SectionHeading({
  title,
  lede,
  align = 'left',
  action,
  className,
}: {
  title: ReactNode
  lede?: ReactNode
  align?: 'left' | 'center'
  action?: ReactNode
  className?: string
}) {
  return (
    <div className={clsx('flex flex-col gap-4 md:flex-row md:items-end md:justify-between', align === 'center' && 'md:flex-col md:items-center text-center', className)}>
      <div className={clsx('max-w-2xl', align === 'center' && 'mx-auto')}>
        <h2 className="mt-3 text-[clamp(1.9rem,3.8vw,2.9rem)] font-extrabold leading-[1.04] text-teal-deep">{title}</h2>
        {lede && <p className="mt-4 text-lg leading-relaxed text-muted">{lede}</p>}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  )
}

export function Section({ children, className, id, tone = 'cream' }: { children: ReactNode; className?: string; id?: string; tone?: 'cream' | 'paper' | 'dark' | 'white' }) {
  const tones = {
    cream: 'bg-cream',
    paper: 'bg-paper',
    white: 'bg-white',
    dark: 'bg-teal-deep text-cream',
  }
  return (
    <section id={id} className={clsx('py-16 sm:py-20 lg:py-24', tones[tone], className)}>
      <div className="container-x">{children}</div>
    </section>
  )
}

export function Card({ children, className, as: As = 'div' }: { children: ReactNode; className?: string; as?: 'div' | 'article' | 'li' }) {
  return <As className={clsx('rounded-[var(--radius-card)] border border-line bg-paper shadow-[var(--shadow-card)]', className)}>{children}</As>
}

/** Coming-soon status as plain text, not a pill. Inherits color so it works on dark sections. */
export function ComingSoonBadge({ className }: { className?: string }) {
  return <p className={clsx('text-sm font-semibold', className)}>Coming soon</p>
}

/** A quiet line of facts separated by dots: "Video · Electricity · 5:18". */
export function MetaLine({ items, className }: { items: ReactNode[]; className?: string }) {
  return (
    <p className={clsx('flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted', className)}>
      {items.flatMap((item, i) => (i === 0 ? [<span key={i}>{item}</span>] : [<span key={`d${i}`} aria-hidden>·</span>, <span key={i}>{item}</span>]))}
    </p>
  )
}

export function Callout({ tone = 'note', title, children }: { tone?: 'tip' | 'note' | 'warning'; title?: string; children: ReactNode }) {
  const map = {
    tip: { Icon: Lightbulb, cls: 'border-cash/40 bg-cash-soft/60', label: 'Tip' },
    note: { Icon: Info, cls: 'border-teal/30 bg-teal-soft/60', label: 'Note' },
    warning: { Icon: TriangleAlert, cls: 'border-gold/60 bg-gold-soft/60', label: 'Heads up' },
  }[tone]
  return (
    <div className={clsx('my-6 flex gap-3 rounded-2xl border p-4 sm:p-5', map.cls)} role="note">
      <map.Icon className="mt-0.5 size-5 shrink-0 text-teal-deep" aria-hidden />
      <div className="text-[0.98rem] leading-relaxed">
        <p className="font-semibold text-teal-deep">{title ?? map.label}</p>
        <div className="mt-1">{children}</div>
      </div>
    </div>
  )
}

export function PageHeader({
  title,
  lede,
  children,
  aside,
}: {
  title: ReactNode
  lede?: ReactNode
  children?: ReactNode
  aside?: ReactNode
}) {
  return (
    <header className="relative overflow-hidden border-b border-line bg-paper">
      <div className="container-x grid items-end gap-8 pb-12 pt-12 sm:pb-14 sm:pt-16 lg:grid-cols-[1fr_auto]">
        <div className="max-w-3xl animate-rise">
          <h1 className="mt-3 text-[clamp(2.4rem,5.6vw,4.2rem)] font-extrabold leading-[0.98] tracking-[-0.04em] text-teal-deep">{title}</h1>
          {lede && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">{lede}</p>}
          {children && <div className="mt-7">{children}</div>}
        </div>
        {aside && <div className="-mb-12 hidden self-end sm:-mb-14 lg:block">{aside}</div>}
      </div>
    </header>
  )
}

export function EmptyState({ title, children, action }: { title: string; children?: ReactNode; action?: ReactNode }) {
  return (
    <div className="rounded-[var(--radius-card)] border border-dashed border-line bg-paper/60 p-8 text-center">
      <p className="font-display text-xl font-bold text-teal-deep">{title}</p>
      {children && <div className="mx-auto mt-2 max-w-md text-muted">{children}</div>}
      {action && <div className="mt-5">{action}</div>}
    </div>
  )
}

export function formatDate(iso: string) {
  const [y, m, d] = iso.split('-').map(Number)
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' })
}
