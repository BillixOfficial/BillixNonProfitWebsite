import type { Metadata } from 'next'
import { Suspense } from 'react'
import { Preferences } from '@/components/forms/newsletter-token-actions'

export const metadata: Metadata = { title: 'Newsletter preferences', robots: { index: false } }

export default function PreferencesPage() {
  return (
    <div className="container-x py-20">
      <Suspense fallback={null}>
        <Preferences />
      </Suspense>
    </div>
  )
}
