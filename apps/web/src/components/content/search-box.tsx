import { Search } from 'lucide-react'
import { clsx } from 'clsx'

/** Plain GET form to /search: works without JavaScript. */
export function SearchBox({ defaultValue, size = 'lg', className, autoFocus }: { defaultValue?: string; size?: 'md' | 'lg'; className?: string; autoFocus?: boolean }) {
  return (
    <form action="/search" method="get" role="search" className={clsx('relative', className)}>
      <label htmlFor={`search-${size}`} className="sr-only">Search Billix</label>
      <Search className={clsx('pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-teal-deep/50', size === 'lg' ? 'size-6' : 'size-5')} aria-hidden />
      <input
        id={`search-${size}`}
        name="q"
        type="search"
        defaultValue={defaultValue}
        autoFocus={autoFocus}
        maxLength={200}
        placeholder="What would you like to know about your bills?"
        className={clsx(
          'w-full rounded-full border border-line bg-white text-ink shadow-[var(--shadow-card)] outline-none transition-colors placeholder:text-muted/80 focus:border-teal focus:ring-4 focus:ring-teal/10',
          size === 'lg' ? 'h-16 pl-14 pr-32 text-lg' : 'h-12 pl-12 pr-28 text-base',
        )}
      />
      <button type="submit" className={clsx('absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-teal font-semibold text-white transition-colors hover:bg-[#256a63]', size === 'lg' ? 'h-12 px-6' : 'h-9 px-4 text-sm')}>
        Search
      </button>
    </form>
  )
}
