'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { clsx } from 'clsx'
import { Check, Minus, Plus, ShoppingBag } from 'lucide-react'
import type { Product } from '@/content/types'
import { formatPrice } from '@/content/products'
import { productImages } from '@/content/product-images'
import { useCart } from './cart'

const fallbackTone: Record<string, string> = {
  books: 'from-teal-soft to-[#c7dfd9]',
  digital: 'from-cash-soft to-[#d3e2c8]',
  workbooks: 'from-gold-soft to-[#f3d79e]',
  apparel: 'from-plum-soft to-[#dccfe8]',
  accessories: 'from-[#f4e2d6] to-[#ecd0bd]',
  alice: 'from-gold-soft to-plum-soft',
  bundles: 'from-teal-soft to-gold-soft',
}

export function ProductImage({ p, index = 0, className, sizes = '(min-width: 1024px) 25vw, 50vw', priority }: { p: Product; index?: number; className?: string; sizes?: string; priority?: boolean }) {
  const src = productImages[p.slug]?.[index]
  if (src) {
    return (
      <div className={clsx('relative overflow-hidden bg-sand', className)}>
        <Image src={src} alt={p.name} fill sizes={sizes} priority={priority} className="object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
      </div>
    )
  }
  return (
    <div className={clsx('relative grid place-items-center overflow-hidden bg-gradient-to-br', fallbackTone[p.collection], className)}>
      <Image src="/brand/billix-logo-transparent.png" alt="" width={140} height={140} className="size-1/3 drop-shadow-xl transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6" />
    </div>
  )
}

export function ProductCard({ p, priority }: { p: Product; priority?: boolean }) {
  const { add } = useCart()
  const [added, setAdded] = useState(false)
  const quickAdd = !p.variants?.length
  return (
    <div className="group relative flex flex-col">
      <Link href={`/shop/${p.slug}`} className="relative block overflow-hidden rounded-2xl">
        <ProductImage p={p} className="aspect-square rounded-2xl" priority={priority} />
        {p.priceCents === 0 && <span className="absolute left-3 top-3 rounded-full bg-cash px-2.5 py-1 text-xs font-bold text-white">Free</span>}
        {p.featured && p.priceCents > 0 && <span className="absolute left-3 top-3 rounded-full bg-paper/95 px-2.5 py-1 text-xs font-bold text-teal-deep">New</span>}
      </Link>
      <div className="mt-3 flex items-start justify-between gap-3">
        <Link href={`/shop/${p.slug}`} className="min-w-0">
          <h3 className="font-display text-[1.02rem] font-bold leading-snug text-teal-deep group-hover:underline group-hover:decoration-gold group-hover:decoration-2 group-hover:underline-offset-4">{p.name}</h3>
          <p className="mt-0.5 text-sm text-muted">{p.variants?.find((v) => v.name === 'Color')?.options.length ? `${p.variants.find((v) => v.name === 'Color')!.options.length} colors` : p.format === 'digital-download' ? 'Instant download' : p.format === 'ebook' ? 'Ebook' : ' '}</p>
        </Link>
        <p className="shrink-0 font-display text-lg font-bold text-teal-deep">{formatPrice(p.priceCents)}</p>
      </div>
      {quickAdd && (
        <button
          type="button"
          onClick={() => {
            add({ slug: p.slug, options: {}, qty: 1 })
            setAdded(true)
            setTimeout(() => setAdded(false), 1600)
          }}
          className="absolute right-3 top-3 grid size-10 place-items-center rounded-full bg-paper text-teal-deep opacity-0 shadow-md transition-all hover:bg-gold group-hover:opacity-100 focus-visible:opacity-100 max-md:opacity-100"
          aria-label={`Add ${p.name} to bag`}
        >
          {added ? <Check className="size-5" aria-hidden /> : <Plus className="size-5" aria-hidden />}
        </button>
      )}
    </div>
  )
}

export function ProductGallery({ p }: { p: Product }) {
  const imgs = productImages[p.slug] ?? []
  const [i, setI] = useState(0)
  return (
    <div>
      <ProductImage p={p} index={i} className="aspect-square rounded-[var(--radius-panel)]" sizes="(min-width: 1024px) 50vw, 100vw" priority />
      {imgs.length > 1 && (
        <div className="mt-3 flex gap-3">
          {imgs.map((src, j) => (
            <button key={src} type="button" onClick={() => setI(j)} aria-label={`Show image ${j + 1}`} aria-pressed={i === j} className={clsx('relative size-20 overflow-hidden rounded-xl ring-2 transition', i === j ? 'ring-teal' : 'ring-transparent opacity-70 hover:opacity-100')}>
              <Image src={src} alt="" fill sizes="80px" className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

const swatch: Record<string, string> = {
  'Deep Teal': '#163f3b', Cream: '#f4ead0', 'Heather Gray': '#b9bcbb', Oatmeal: '#e4d9c6', Gold: '#e3a63c', Stone: '#cfc6b6',
}

export function AddToBag({ p }: { p: Product }) {
  const { add } = useCart()
  const [opts, setOpts] = useState<Record<string, string>>(() => Object.fromEntries((p.variants ?? []).map((v) => [v.name, v.name === 'Size' ? '' : v.options[0]])))
  const [qty, setQty] = useState(1)
  const [error, setError] = useState('')
  const [added, setAdded] = useState(false)

  useEffect(() => {
    if (!added) return
    const t = setTimeout(() => setAdded(false), 2500)
    return () => clearTimeout(t)
  }, [added])

  const submit = () => {
    const missing = (p.variants ?? []).find((v) => !opts[v.name])
    if (missing) return setError(`Choose a ${missing.name.toLowerCase()}.`)
    setError('')
    add({ slug: p.slug, options: opts, qty })
    setAdded(true)
  }

  return (
    <div className="space-y-6">
      {(p.variants ?? []).map((v) => (
        <fieldset key={v.name}>
          <legend className="mb-2.5 text-sm font-bold text-teal-deep">
            {v.name}{opts[v.name] && <span className="font-normal text-muted">: {opts[v.name]}</span>}
          </legend>
          <div className="flex flex-wrap gap-2">
            {v.options.map((o) => {
              const on = opts[v.name] === o
              return v.name === 'Color' && swatch[o] ? (
                <button key={o} type="button" aria-pressed={on} aria-label={o} title={o} onClick={() => setOpts({ ...opts, [v.name]: o })} className={clsx('size-10 rounded-full ring-2 ring-offset-2 transition', on ? 'ring-teal' : 'ring-line hover:ring-teal/50')} style={{ background: swatch[o] }} />
              ) : (
                <button key={o} type="button" aria-pressed={on} onClick={() => setOpts({ ...opts, [v.name]: o })} className={clsx('min-w-12 rounded-xl px-3.5 py-2.5 text-sm font-semibold ring-1 transition', on ? 'bg-teal-deep text-cream ring-teal-deep' : 'bg-paper text-teal-deep ring-line hover:ring-teal')}>
                  {o}
                </button>
              )
            })}
          </div>
        </fieldset>
      ))}
      <div className="flex gap-3">
        <div className="flex items-center rounded-full ring-1 ring-line">
          <button type="button" onClick={() => setQty((q) => Math.max(1, q - 1))} className="grid size-12 place-items-center rounded-full hover:bg-mist" aria-label="Decrease quantity"><Minus className="size-4" aria-hidden /></button>
          <span className="w-8 text-center font-semibold tabular-nums" aria-live="polite" aria-label={`Quantity ${qty}`}>{qty}</span>
          <button type="button" onClick={() => setQty((q) => Math.min(20, q + 1))} className="grid size-12 place-items-center rounded-full hover:bg-mist" aria-label="Increase quantity"><Plus className="size-4" aria-hidden /></button>
        </div>
        <button type="button" onClick={submit} className="flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-teal-deep px-6 font-semibold text-cream transition hover:bg-teal-night">
          {added ? <><Check className="size-5" aria-hidden />Added to bag</> : <><ShoppingBag className="size-5" aria-hidden />Add to bag · {formatPrice(p.priceCents * qty)}</>}
        </button>
      </div>
      {error && <p className="text-sm font-medium text-danger" role="alert">{error}</p>}
      {added && <Link href="/cart" className="block text-center text-sm font-semibold text-teal-ink underline">View your bag</Link>}
    </div>
  )
}

export function CartButton() {
  const { count, lastAdded } = useCart()
  return (
    <Link href="/cart" className="relative grid size-10 place-items-center rounded-full text-teal-deep hover:bg-teal-deep/6" aria-label={`Shopping bag, ${count} ${count === 1 ? 'item' : 'items'}`}>
      <ShoppingBag className="size-5" aria-hidden />
      {count > 0 && (
        <span key={lastAdded?.at} className="absolute -right-0.5 -top-0.5 grid min-w-5 animate-[pop_.35s_cubic-bezier(.2,.9,.3,1.3)] place-items-center rounded-full bg-gold px-1 text-[0.7rem] font-bold text-teal-night">{count}</span>
      )}
    </Link>
  )
}
