'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useId, useRef, useState } from 'react'
import { clsx } from 'clsx'
import { ChevronDown, Menu, Search, UserRound, X } from 'lucide-react'
import { CartButton } from '@/components/shop/product-ui'
import { SocialIconRow } from '@/components/brand/social-links'
import { primaryNav, type NavItem } from '@/config/navigation'
import { Logo } from '@/components/brand/alice'

function isActive(pathname: string, href: string) {
  if (href === '/') return pathname === '/'
  return pathname === href || pathname.startsWith(href + '/')
}

function Dropdown({ item, pathname }: { item: NavItem; pathname: string }) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLLIElement>(null)
  const id = useId()
  const wide = (item.children?.length ?? 0) > 6

  useEffect(() => {
    if (!open) return
    const onDoc = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('mousedown', onDoc)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDoc)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  // Close when the route changes (state reset during render, not in an effect).
  const [lastPath, setLastPath] = useState(pathname)
  if (lastPath !== pathname) {
    setLastPath(pathname)
    setOpen(false)
  }

  return (
    <li ref={ref} className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((o) => !o)}
        className={clsx(
          'flex items-center gap-1 rounded-full px-3 py-2 text-[0.93rem] font-medium transition-colors hover:bg-teal-deep/6',
          isActive(pathname, item.href) ? 'text-teal-deep' : 'text-teal-deep/80',
        )}
      >
        {item.label}
        <ChevronDown className={clsx('size-3.5 transition-transform', open && 'rotate-180')} aria-hidden />
      </button>
      <div
        id={id}
        className={clsx(
          'absolute left-1/2 top-full z-50 -translate-x-1/2 pt-2 transition-[opacity,transform] duration-150',
          open ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-1 opacity-0',
        )}
      >
        <div className={clsx('rounded-2xl border border-line bg-paper p-2 shadow-[var(--shadow-lift)]', wide ? 'w-[34rem]' : 'w-80')}>
          <ul className={clsx('grid gap-0.5', wide && 'grid-cols-2')}>
            {item.children!.map((c) => (
              <li key={c.href + c.label}>
                <Link href={c.href} className="block rounded-xl px-3 py-2.5 hover:bg-teal-soft/60">
                  <span className="block text-[0.93rem] font-semibold text-teal-deep">{c.label}</span>
                  {c.description && <span className="mt-0.5 block text-[0.82rem] text-muted">{c.description}</span>}
                </Link>
              </li>
            ))}
          </ul>
          {item.allLink && (
            <Link href={item.allLink.href} className="mt-1 block rounded-xl border-t border-line px-3 pb-2 pt-3 text-[0.88rem] font-semibold text-teal-ink hover:underline">
              {item.allLink.label} &rarr;
            </Link>
          )}
        </div>
      </div>
    </li>
  )
}

export function SiteHeader() {
  const pathname = usePathname()
  const router = useRouter()
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [q, setQ] = useState('')
  const searchRef = useRef<HTMLInputElement>(null)

  const [lastPath, setLastPath] = useState(pathname)
  if (lastPath !== pathname) {
    setLastPath(pathname)
    setMenuOpen(false)
    setSearchOpen(false)
  }

  useEffect(() => {
    if (searchOpen) searchRef.current?.focus()
  }, [searchOpen])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    if (q.trim()) router.push(`/search?q=${encodeURIComponent(q.trim())}`)
  }

  return (
    <header data-site-header className="sticky top-0 z-40 border-b border-line/80">
      {/* Blur lives on its own layer: backdrop-filter on the header itself would trap the fixed mobile menu inside it. */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-cream/90 backdrop-blur-md" />
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-full focus:bg-teal-deep focus:px-4 focus:py-2 focus:text-cream">
        Skip to content
      </a>
      <div className="container-x flex h-[4.25rem] items-center gap-3">
        <Logo />
        <nav aria-label="Main" className="ml-4 hidden flex-1 xl:block">
          <ul className="flex items-center gap-0.5">
            {primaryNav.map((item) =>
              item.children ? (
                <Dropdown key={item.label} item={item} pathname={pathname} />
              ) : (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    aria-current={isActive(pathname, item.href) ? 'page' : undefined}
                    className={clsx(
                      'rounded-full px-3 py-2 text-[0.93rem] font-medium transition-colors hover:bg-teal-deep/6',
                      item.href === '/app' ? 'text-teal-ink font-semibold' : 'text-teal-deep/80',
                      isActive(pathname, item.href) && 'text-teal-deep underline decoration-gold decoration-2 underline-offset-[10px]',
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>
        <div className="ml-auto flex items-center gap-1">
          <button type="button" onClick={() => setSearchOpen((s) => !s)} className="grid size-10 place-items-center rounded-full text-teal-deep hover:bg-teal-deep/6" aria-label="Search" aria-expanded={searchOpen}>
            <Search className="size-5" aria-hidden />
          </button>
          <Link href="/account" className="grid size-10 place-items-center rounded-full text-teal-deep hover:bg-teal-deep/6" aria-label="Account">
            <UserRound className="size-5" aria-hidden />
          </Link>
          <CartButton />
          <button type="button" className="grid size-10 place-items-center rounded-full text-teal-deep hover:bg-teal-deep/6 xl:hidden" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} aria-controls="mobile-nav" onClick={() => setMenuOpen((o) => !o)}>
            {menuOpen ? <X className="size-6" aria-hidden /> : <Menu className="size-6" aria-hidden />}
          </button>
        </div>
      </div>

      {searchOpen && (
        <div className="border-t border-line bg-paper">
          <form role="search" onSubmit={submit} className="container-x flex gap-2 py-3">
            <label htmlFor="header-search" className="sr-only">Search Billix</label>
            <input
              ref={searchRef}
              id="header-search"
              type="search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="What would you like to know about your bills?"
              className="h-11 flex-1 rounded-full border border-line bg-white px-5 text-[0.98rem] outline-none focus:border-teal"
              maxLength={200}
            />
            <button type="submit" className="h-11 rounded-full bg-teal px-5 font-semibold text-white hover:bg-[#256a63]">Search</button>
          </form>
        </div>
      )}

      {menuOpen && (
        <nav id="mobile-nav" aria-label="Mobile" className="fixed inset-x-0 bottom-0 top-[4.25rem] overflow-y-auto border-t border-line bg-cream xl:hidden">
          <ul className="container-x divide-y divide-line py-2">
            {primaryNav.map((item) => (
              <li key={item.label} className="py-1">
                {item.children ? (
                  <details className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between py-3 text-lg font-semibold text-teal-deep">
                      {item.label}
                      <ChevronDown className="size-5 transition-transform group-open:rotate-180" aria-hidden />
                    </summary>
                    <ul className="grid grid-cols-1 gap-1 pb-3 sm:grid-cols-2">
                      {item.children.map((c) => (
                        <li key={c.href + c.label}>
                          <Link href={c.href} className="block rounded-xl px-3 py-2 text-teal-deep hover:bg-teal-soft/60">{c.label}</Link>
                        </li>
                      ))}
                      {item.allLink && (
                        <li>
                          <Link href={item.allLink.href} className="block rounded-xl px-3 py-2 font-semibold text-teal-ink">{item.allLink.label}</Link>
                        </li>
                      )}
                    </ul>
                  </details>
                ) : (
                  <Link href={item.href} className="block py-3 text-lg font-semibold text-teal-deep">{item.label}</Link>
                )}
              </li>
            ))}
          </ul>
          <div className="container-x border-t border-line py-6">
            <p className="mb-3 text-sm font-semibold text-teal-deep">Follow Billix</p>
            <SocialIconRow />
          </div>
        </nav>
      )}
    </header>
  )
}
