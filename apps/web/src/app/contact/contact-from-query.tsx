'use client'

import { useSearchParams } from 'next/navigation'
import { ContactForm, contactTopics } from '@/components/forms/contact-forms'

/** Pre-selects the topic from ?topic=... (e.g. links that say "report a correction"). */
export function ContactFormFromQuery() {
  const t = useSearchParams().get('topic')
  const topic = contactTopics.find((x) => x.id === t)?.id ?? 'general'
  return <ContactForm key={topic} defaultTopic={topic} />
}
