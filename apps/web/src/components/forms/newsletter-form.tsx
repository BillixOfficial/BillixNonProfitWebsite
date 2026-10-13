'use client'

import { useState } from 'react'
import Link from 'next/link'
import { clsx } from 'clsx'
import { apiAvailable, apiPost, EMAIL_RE } from '@/lib/api'
import { Checkbox, FormStatus, FormUnavailable, Honeypot } from './fields'

type Status = 'idle' | 'loading' | 'success' | 'error'

const topicOptions = [
  { id: 'weekly', label: 'Weekly bill explainers' },
  { id: 'monthly-review', label: 'Monthly bill review checklist' },
  { id: 'regional', label: 'Regional rate updates (when available)' },
] as const

export function NewsletterForm({ variant = 'card', source = 'site', showTopics = false }: { variant?: 'card' | 'footer' | 'hero'; source?: string; showTopics?: boolean }) {
  const [email, setEmail] = useState('')
  const [consent, setConsent] = useState(false)
  const [topics, setTopics] = useState<string[]>(['weekly'])
  const [hp, setHp] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const dark = variant === 'footer'

  if (!apiAvailable()) return <FormUnavailable what="Newsletter signup" dark={dark} />

  if (status === 'success') {
    return (
      <div role="status" className={clsx('rounded-2xl px-4 py-4', dark ? 'bg-cream/10 text-cream' : 'bg-cash-soft text-[#24401b]')}>
        <p className="font-semibold">Check your inbox to confirm.</p>
        <p className="mt-1 text-[0.92rem] opacity-90">We sent a confirmation link to {email}. You won&rsquo;t get any newsletters until you click it.</p>
      </div>
    )
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const next: Record<string, string> = {}
    if (!EMAIL_RE.test(email.trim())) next.email = 'Enter a valid email address.'
    if (!consent) next.consent = 'Please confirm you’d like to receive The Billix Brief.'
    setErrors(next)
    if (Object.keys(next).length) return
    setStatus('loading')
    const res = await apiPost('/v1/newsletter/subscribe', { email: email.trim(), consent: true, topics: showTopics ? topics : undefined, source, website: hp })
    if (res.ok) {
      setStatus('success')
    } else {
      setStatus('error')
      setMessage(res.message)
      setErrors(res.fields)
    }
  }

  const emailId = `nl-email-${variant}`
  return (
    <form onSubmit={onSubmit} noValidate className="relative space-y-3">
      <Honeypot value={hp} onChange={setHp} />
      <div className={clsx('flex gap-2', variant === 'footer' ? 'flex-col sm:flex-row' : 'flex-col sm:flex-row')}>
        <label htmlFor={emailId} className="sr-only">Email address</label>
        <input
          id={emailId}
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          aria-invalid={!!errors.email}
          className={clsx(
            'h-12 min-w-0 flex-1 rounded-full px-5 text-[0.98rem] outline-none transition-colors',
            dark ? 'border border-cream/20 bg-cream/8 text-cream placeholder:text-cream/50 focus:border-gold' : 'border border-line bg-white text-ink focus:border-teal',
          )}
        />
        <button type="submit" disabled={status === 'loading'} className="h-12 shrink-0 rounded-full bg-gold px-6 font-semibold text-teal-night transition-colors hover:bg-[#eab14d] disabled:opacity-60">
          {status === 'loading' ? 'Subscribing…' : 'Subscribe'}
        </button>
      </div>
      {errors.email && <p className={clsx('text-sm font-medium', dark ? 'text-gold' : 'text-danger')}>{errors.email}</p>}
      {showTopics && (
        <fieldset className="space-y-2">
          <legend className="mb-1 text-[0.9rem] font-semibold text-teal-deep">What would you like?</legend>
          {topicOptions.map((t) => (
            <Checkbox
              key={t.id}
              id={`nl-topic-${t.id}`}
              label={t.label}
              checked={topics.includes(t.id)}
              onChange={(e) => setTopics((cur) => (e.target.checked ? [...cur, t.id] : cur.filter((x) => x !== t.id)))}
            />
          ))}
        </fieldset>
      )}
      <label className={clsx('flex cursor-pointer items-start gap-2.5 text-[0.83rem] leading-snug', dark ? 'text-cream/70' : 'text-muted')}>
        <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} className="mt-0.5 size-4 shrink-0 accent-gold" />
        <span>
          Yes, email me The Billix Brief. Unsubscribe anytime. See our{' '}
          <Link href="/legal/privacy" className="underline">privacy policy</Link>.
        </span>
      </label>
      {errors.consent && <p className={clsx('text-sm font-medium', dark ? 'text-gold' : 'text-danger')}>{errors.consent}</p>}
      <FormStatus status={status} message={message} />
    </form>
  )
}
