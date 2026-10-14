import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound, redirect } from 'next/navigation'
import { Check, RotateCcw, ShieldCheck, Truck } from 'lucide-react'
import { collections, formatPrice, visibleProducts } from '@/content/products'
import { productImages } from '@/content/product-images'
import { features, siteUrl } from '@/config/site'
import { AddToBag, ProductCard, ProductGallery } from '@/components/shop/product-ui'
import { ShopNotice } from '@/components/shop/shop-chrome'

export function generateStaticParams() {
  return visibleProducts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: PageProps<'/shop/[slug]'>): Promise<Metadata> {
  const { slug } = await params
  const p = visibleProducts.find((x) => x.slug === slug)
  if (!p) return {}
  const img = productImages[p.slug]?.[0]
  return { title: `${p.name} | Shop`, description: p.description, alternates: { canonical: `/shop/${p.slug}` }, openGraph: img ? { images: [img] } : undefined }
}

const formatLabel = { paperback: 'Paperback', ebook: 'Ebook (PDF + EPUB)', 'digital-download': 'Printable PDF', apparel: 'Apparel', accessory: 'Accessory', bundle: 'Bundle' } as const

export default async function ProductPage({ params }: PageProps<'/shop/[slug]'>) {
  if (!features.shopOpen) redirect('/shop')
  const { slug } = await params
  const p = visibleProducts.find((x) => x.slug === slug)
  if (!p) notFound()
  const col = collections.find((c) => c.slug === p.collection)!
  const related = visibleProducts.filter((x) => x.collection === p.collection && x.slug !== p.slug).slice(0, 4)
  const digital = p.format === 'ebook' || p.format === 'digital-download'

  // Product JSON-LD without availability or offers until checkout is live.
  const jsonLd = { '@context': 'https://schema.org', '@type': 'Product', name: p.name, description: p.description, brand: { '@type': 'Brand', name: 'Billix' }, image: (productImages[p.slug] ?? []).map((i) => siteUrl(i)) }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ShopNotice />
      <div className="container-x py-10 sm:py-14">
        <nav aria-label="Breadcrumb" className="text-sm text-muted">
          <Link href="/shop" className="hover:underline">Shop</Link> <span aria-hidden>/</span> <Link href={`/shop/collections/${col.slug}`} className="hover:underline">{col.name}</Link>
        </nav>
        <div className="mt-6 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
          <ProductGallery p={p} />
          <div className="lg:pt-4">
            <p className="text-sm font-semibold text-teal-ink">{formatLabel[p.format]}</p>
            <h1 className="mt-2 text-[clamp(2rem,4vw,2.9rem)] font-extrabold leading-[1.05] text-teal-deep">{p.name}</h1>
            <p className="mt-4 font-display text-3xl font-bold text-teal-deep">{formatPrice(p.priceCents)}</p>
            <p className="prose-billix mt-5 text-muted">{p.description}</p>
            {p.details && (
              <ul className="mt-5 space-y-2">
                {p.details.map((d) => <li key={d} className="flex items-center gap-2.5 text-[0.97rem]"><Check className="size-4 text-teal" aria-hidden />{d}</li>)}
              </ul>
            )}
            <div className="mt-8"><AddToBag p={p} /></div>
            <ul className="mt-8 divide-y divide-line rounded-2xl bg-paper text-sm ring-1 ring-line">
              <li className="flex gap-3 p-4"><Truck className="size-5 shrink-0 text-teal" aria-hidden /><span>{digital ? 'Delivered as a download link by email after purchase.' : 'Ships within the U.S. Rates are shown at checkout.'}</span></li>
              <li className="flex gap-3 p-4"><RotateCcw className="size-5 shrink-0 text-teal" aria-hidden /><span>See our <Link href="/legal/returns" className="font-semibold underline">returns</Link> and <Link href="/legal/shipping" className="font-semibold underline">shipping</Link> policies.</span></li>
              <li className="flex gap-3 p-4"><ShieldCheck className="size-5 shrink-0 text-teal" aria-hidden /><span>Checkout opens at launch. Nothing is charged until then.</span></li>
            </ul>
          </div>
        </div>
        {related.length > 0 && (
          <section className="mt-20">
            <h2 className="text-2xl font-extrabold text-teal-deep sm:text-3xl">You might also like</h2>
            <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-9 lg:grid-cols-4">{related.map((r) => <ProductCard key={r.slug} p={r} />)}</div>
          </section>
        )}
      </div>
    </>
  )
}
