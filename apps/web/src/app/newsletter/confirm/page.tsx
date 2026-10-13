import type { Metadata } from 'next'
import { Suspense } from 'react'
import { ConfirmSubscription } from '@/components/forms/newsletter-token-actions'

export const metadata: Metadata = { title: 'Confirm your subscription', robots: { index: false } }

export default function ConfirmPage() {
  return (
    <div className="container-x py-20">
      <Suspense fallback={null}>
        <ConfirmSubscription />
      </Suspense>
    </div>
  )
}
