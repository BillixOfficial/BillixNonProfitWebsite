import { redirect } from 'next/navigation'
import { features } from '@/config/site'
import type { Metadata } from 'next'
import { CartView } from '@/components/shop/cart-view'
import { ShopNotice } from '@/components/shop/shop-chrome'

export const metadata: Metadata = { title: 'Your bag', robots: { index: false } }

export default function CartPage() {
  if (!features.shopOpen) redirect('/shop')
  return (
    <>
      <ShopNotice />
      <div className="container-x py-12 sm:py-16">
        <CartView />
      </div>
    </>
  )
}
