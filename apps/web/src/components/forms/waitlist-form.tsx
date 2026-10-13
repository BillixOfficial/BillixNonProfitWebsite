'use client'

import { useState } from 'react'
import Link from 'next/link'
import { clsx } from 'clsx'
import { apiAvailable, apiPost, EMAIL_RE } from '@/lib/api'
import { FormStatus, FormUnavailable, Honeypot } from './fields'

export function WaitlistForm({ list, dark, cta = 'Join the waitlist' }: { list: 'app' | 'shop'; dark?: boolean; cta?: string }) {
  const [email, setEmail] = useState('')
  const [platform, setPlatform] = useState<'ios' | 'android' | 'both'>('both')
  const [consent, setConsent] = useState(false)
  const [hp, setHp] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  if (!apiAvailable()) return <FormUnavailable what={list === 'app' ? 'The app waitlist' : 'Shop launch alerts'} dark={dark} />

  if (status === 'success')
    return (
      <div role="status" className={clsx('rounded-2xl px-5 py-4', dark ? 'bg-cream/10 text-cream' : 'bg-cash-soft text-[#24401b]')}>
        <p className="font-semibold">You&rsquo;re on the list.</p>
        <p className="mt-1 text-[0.92rem] opacity-90">We&rsquo;ll email {email} once, when {list === 'app' ? 'the Billix app is ready to download' : 'the Billix Shop opens'}.</p>
      </div>
    )

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!EMAIL_RE.test(email.trim())) return setError('Enter a valid email address.')
    if (!consent) return setError('Please agree to receive the launch email.')
    setError('')
    setStatus('loading')
    const res = await apiPost('/v1/waitlist', { email: email.trim(), list, platform: list === 'app' ? platform : undefined, consent: true, website: hp })
    if (res.ok) setStatus('success')
    else {
      setStatus('error')
      setMessage(res.message)
    }
  }

  const id = `wl-${list}`
  return (
    <form onSubmit={onSubmit} noValidate className="relative space-y-3">
      <Honeypot value={hp} onChange={setHp} />
      {list === 'app' && (
        <fieldset className="flex flex-wrap gap-2">
          <legend className="sr-only">Your phone</legend>
          {(['ios', 'android', 'both'] as const).map((p) => (
            <label key={p} className={clsx('cursor-pointer rounded-full border px-4 py-1.5 text-sm font-semibold transition-colors', platform === p ? (dark ? 'border-gold bg-gold text-teal-night' : 'border-teal bg-teal text-white') : dark ? 'border-cream/25 text-cream/80' : 'border-line bg-white text-teal-deep')}>
              <input type="radio" name={`${id}-platform`} value={p} checked={platform === p} onChange={() => setPlatform(p)} className="sr-only" />
              {p === 'ios' ? 'iPhone' : p === 'android' ? 'Android' : 'Both'}
            </label>
          ))}
        </fieldset>
      )}
      <div className="flex flex-col gap-2 sm:flex-row">
        <label htmlFor={`${id}-email`} className="sr-only">Email address</label>
        <input id={`${id}-email`} type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" className={clsx('h-12 min-w-0 flex-1 rounded-full px-5 outline-none', dark ? 'border border-cream/20 bg-cream/8 text-cream placeholder:text-cream/50 focus:border-gold' : 'border border-line bg-white focus:border-teal')} />
        <button type="submit" disabled={status === 'loading'} className="h-12 shrink-0 rounded-full bg-gold px-6 font-semibold text-teal-night hover:bg-[#eab14d] disabled:opacity-60">
          {status === 'loading' ? 'Joining…' : cta}
        </button>
      </div>
      <label className={clsx('flex cursor-pointer items-start gap-2.5 text-[0.83rem] leading-snug', dark ? 'text-cream/70' : 'text-muted')}>
        <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} className="mt-0.5 size-4 shrink-0 accent-gold" />
        <span>
          Email me when it launches. One email, no spam. <Link href="/legal/privacy" className="underline">Privacy policy</Link>.
        </span>
      </label>
      {error && <p className={clsx('text-sm font-medium', dark ? 'text-gold' : 'text-danger')}>{error}</p>}
      <FormStatus status={status} message={message} />
    </form>
  )
}
