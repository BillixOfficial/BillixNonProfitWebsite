import type { Metadata } from 'next'
import { Suspense } from 'react'
import { Unsubscribe } from '@/components/forms/newsletter-token-actions'

export const metadata: Metadata = { title: 'Unsubscribe', robots: { index: false } }

export default function UnsubscribePage() {
  return (
    <div className="container-x py-20">
      <Suspense fallback={null}>
        <Unsubscribe />
      </Suspense>
    </div>
  )
}
