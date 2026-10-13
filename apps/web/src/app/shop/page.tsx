import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, BookOpen, Download, Gift, Truck } from 'lucide-react'
import { collections, visibleProducts } from '@/content/products'
import { productImages } from '@/content/product-images'
import { ProductCard } from '@/components/shop/product-ui'
import { CollectionNav, ShopNotice } from '@/components/shop/shop-chrome'
import { AliceFace } from '@/components/brand/alice'
import { Reveal } from '@/components/ui/reveal'

export const metadata: Metadata = {
  title: 'Shop',
  description: 'Billix books, printable bill trackers and planners, apparel, mugs and gifts for people who like knowing where their money goes.',
  alternates: { canonical: '/shop' },
}

export default function ShopPage() {
  const featured = visibleProducts.filter((p) => p.featured)
  const heroImg = productImages['starter-bundle']?.[1] ?? productImages['classic-tee']?.[1]
  return (
    <>
      <ShopNotice />
      <section className="container-x pt-10 sm:pt-14">
        <div className="grid overflow-hidden rounded-[var(--radius-panel)] bg-teal-deep text-cream lg:grid-cols-2">
          <div className="flex flex-col justify-center p-8 sm:p-12">
            <h1 className="text-[clamp(2.4rem,5vw,4rem)] font-extrabold leading-[0.98] tracking-tight">Good things for people who <span className="mark text-teal-night">read their bills</span>.</h1>
            <p className="mt-5 max-w-md text-lg text-cream/80">Plain-English guides, printable trackers and Billix gear. Every purchase helps us keep the guides free.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="#all" className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 font-semibold text-teal-night hover:bg-highlight">Shop everything <ArrowRight className="size-4" aria-hidden /></Link>
              <Link href="/shop/collections/books" className="rounded-full px-6 py-3 font-semibold ring-1 ring-cream/30 hover:bg-cream/10">Books &amp; ebooks</Link>
            </div>
          </div>
          <div className="relative min-h-72 bg-teal-night/40">
            {heroImg ? (
              <Image src={heroImg} alt="Billix merchandise" fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            ) : (
              <div className="grid h-full place-items-center"><AliceFace mood="shopping" size={260} /></div>
            )}
          </div>
        </div>
        <ul className="mt-6 grid grid-cols-2 gap-3 text-sm md:grid-cols-4">
          {[
            { I: Download, t: 'Printables download instantly' },
            { I: BookOpen, t: 'Written by the Billix team' },
            { I: Truck, t: 'U.S. shipping on physical items' },
            { I: Gift, t: 'Gift-ready bundles' },
          ].map(({ I, t }) => (
            <li key={t} className="flex items-center gap-2.5 rounded-xl bg-paper px-4 py-3 ring-1 ring-line"><I className="size-5 shrink-0 text-teal" aria-hidden /><span className="font-medium text-teal-deep">{t}</span></li>
          ))}
        </ul>
      </section>

      <section className="container-x py-14">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-3xl font-extrabold text-teal-deep sm:text-4xl">Start here</h2>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-9 lg:grid-cols-4">
          {featured.slice(0, 8).map((p, i) => <Reveal key={p.slug} delay={(i % 4) * 70}><ProductCard p={p} priority={i < 4} /></Reveal>)}
        </div>
      </section>

      <section id="all" className="scroll-mt-24 border-t border-line bg-mist py-14">
        <div className="container-x">
          <CollectionNav />
          {collections.map((c) => {
            const items = visibleProducts.filter((p) => p.collection === c.slug)
            if (!items.length) return null
            return (
              <section key={c.slug} className="mt-14" aria-labelledby={`col-${c.slug}`}>
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <h2 id={`col-${c.slug}`} className="text-2xl font-extrabold text-teal-deep sm:text-3xl">{c.name}</h2>
                    <p className="mt-1 text-muted">{c.description}</p>
                  </div>
                  <Link href={`/shop/collections/${c.slug}`} className="shrink-0 font-semibold text-teal-ink hover:underline">See all {items.length}</Link>
                </div>
                <div className="mt-7 grid grid-cols-2 gap-x-5 gap-y-9 lg:grid-cols-4">
                  {items.slice(0, 4).map((p) => <ProductCard key={p.slug} p={p} />)}
                </div>
              </section>
            )
          })}
        </div>
      </section>
    </>
  )
}
