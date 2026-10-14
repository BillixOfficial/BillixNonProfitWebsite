import Link from 'next/link'
import { clsx } from 'clsx'
import { collections } from '@/content/products'
import { AliceFace } from '@/components/brand/alice'
import { WaitlistForm } from '@/components/forms/waitlist-form'

/** Slim notice shown across shop pages: honest about checkout without shouting "coming soon" on every card. */
export function ShopNotice() {
  return (
    <div className="bg-teal-deep text-cream">
      <p className="container-x py-2.5 text-center text-sm">
        The Billix Shop is opening soon. Fill your bag now; <Link href="/cart" className="font-semibold text-highlight underline underline-offset-2">checkout opens at launch</Link>.
      </p>
    </div>
  )
}

export function CollectionNav({ active }: { active?: string }) {
  return (
    <nav aria-label="Shop collections" className="-mx-4 overflow-x-auto px-4">
      <ul className="flex gap-2">
        <li><Link href="/shop" aria-current={!active ? 'page' : undefined} className={clsx('block whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold ring-1 transition', !active ? 'bg-teal-deep text-cream ring-teal-deep' : 'bg-paper text-teal-deep ring-line hover:ring-teal')}>All</Link></li>
        {collections.map((c) => (
          <li key={c.slug}>
            <Link href={`/shop/collections/${c.slug}`} aria-current={active === c.slug ? 'page' : undefined} className={clsx('block whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold ring-1 transition', active === c.slug ? 'bg-teal-deep text-cream ring-teal-deep' : 'bg-paper text-teal-deep ring-line hover:ring-teal')}>{c.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

/** Shown at /shop while the shop is closed: no products or prices, just a waitlist. */
export function ShopClosed() {
  return (
    <section className="container-x py-16 sm:py-24">
      <div className="mx-auto grid max-w-5xl items-center gap-10 rounded-[var(--radius-panel)] bg-paper p-8 ring-1 ring-line sm:p-12 lg:grid-cols-[1fr_auto]">
        <div>
          <h1 className="text-[clamp(2.4rem,5.5vw,4rem)] font-extrabold leading-[0.98] tracking-[-0.04em] text-teal-deep">
            The Billix Shop is <span className="mark text-teal-night">coming soon</span>.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted">We&rsquo;re putting the finishing touches on guides, planners and Billix gear. Leave your email and we&rsquo;ll send one message when the shop opens.</p>
          <div className="mt-8 max-w-lg"><WaitlistForm list="shop" cta="Notify me" /></div>
          <p className="mt-6 text-sm text-muted">In the meantime, everything on Billix is free: <Link href="/categories" className="font-semibold text-teal-ink underline">bill guides</Link>, <Link href="/tools" className="font-semibold text-teal-ink underline">calculators</Link> and <Link href="/videos" className="font-semibold text-teal-ink underline">videos</Link>.</p>
        </div>
        <AliceFace mood="shopping" size={280} priority className="mx-auto" />
      </div>
    </section>
  )
}
