import type { Metadata } from 'next'
import { Suspense } from 'react'
import { Clock, Mail } from 'lucide-react'
import { site } from '@/config/site'
import { ContactFormFromQuery } from './contact-from-query'
import { PageHeader, Section } from '@/components/ui/primitives'

export const metadata: Metadata = {
  title: 'Contact Billix',
  description: 'Contact Billix with questions, corrections, press or partnership inquiries.',
  alternates: { canonical: '/contact' },
}

export default function ContactPage() {
  return (
    <>
      <PageHeader title="Get in touch" lede="Questions, corrections, press, partnerships. We read everything." />
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div className="rounded-[var(--radius-panel)] border border-line bg-paper p-6 sm:p-8">
            <Suspense fallback={null}>
              <ContactFormFromQuery />
            </Suspense>
          </div>
          <div className="space-y-6">
            <div className="flex gap-4"><Mail className="size-6 shrink-0 text-teal" aria-hidden /><div><p className="font-semibold text-teal-deep">Email</p><a href={`mailto:${site.email}`} className="text-teal-ink underline">{site.email}</a></div></div>
            <div className="flex gap-4"><Clock className="size-6 shrink-0 text-teal" aria-hidden /><div><p className="font-semibold text-teal-deep">Response time</p><p className="text-muted">We reply within two business days.</p></div></div>
            <p className="rounded-xl bg-gold-soft/60 p-4 text-[0.95rem]">Billix can&rsquo;t access your utility or bank accounts, change your service, or review a specific bill. For billing disputes, contact your provider first.</p>
          </div>
        </div>
      </Section>
    </>
  )
}
