'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { apiAvailable, apiGet, apiPost } from '@/lib/api'
import { Button, ButtonLink } from '@/components/ui/primitives'
import { Checkbox, FormStatus } from './fields'

function useToken() {
  const t = useSearchParams().get('token')
  return t && t.length >= 16 && t.length <= 256 ? t : null
}

function Panel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-xl rounded-[var(--radius-panel)] border border-line bg-paper p-8 text-center">
      <h1 className="text-3xl font-semibold text-teal-deep">{title}</h1>
      <div className="mt-3 text-muted">{children}</div>
    </div>
  )
}

const missing = <Panel title="This link isn&rsquo;t complete">Open the link straight from the email, or <Link href="/newsletter" className="font-semibold text-teal-ink underline">sign up again</Link>.</Panel>

export function ConfirmSubscription() {
  const token = useToken()
  const [state, setState] = useState<'working' | 'done' | 'error'>('working')
  const [msg, setMsg] = useState('')
  const ran = useRef(false)
  useEffect(() => {
    if (!token || ran.current || !apiAvailable()) return
    ran.current = true
    apiPost('/v1/newsletter/confirm', { token }).then((r) => {
      setState(r.ok ? 'done' : 'error')
      if (!r.ok) setMsg(r.message)
    })
  }, [token])
  if (!apiAvailable()) return <Panel title="Newsletter not connected">Please try again later.</Panel>
  if (!token) return missing
  if (state === 'working') return <Panel title="Confirming&hellip;">One moment.</Panel>
  if (state === 'error') return <Panel title="We couldn&rsquo;t confirm that link">{msg} The link may have expired. <Link href="/newsletter" className="font-semibold text-teal-ink underline">Sign up again</Link> to get a fresh one.</Panel>
  return (
    <Panel title="You&rsquo;re subscribed">
      <p>Welcome to The Billix Brief. Your first issue will arrive with our next send.</p>
      <ButtonLink href="/learn" className="mt-6">Start reading</ButtonLink>
    </Panel>
  )
}

export function Unsubscribe() {
  const token = useToken()
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [msg, setMsg] = useState('')
  if (!apiAvailable()) return <Panel title="Newsletter not connected">Please try again later.</Panel>
  if (!token) return missing
  if (status === 'success') return <Panel title="You&rsquo;re unsubscribed">You won&rsquo;t receive The Billix Brief anymore. Changed your mind? <Link href="/newsletter" className="font-semibold text-teal-ink underline">Subscribe again</Link>.</Panel>
  return (
    <Panel title="Unsubscribe from The Billix Brief?">
      <p>You&rsquo;ll stop getting newsletter emails. This takes effect right away.</p>
      <div className="mt-6 flex flex-col items-center gap-3">
        <Button variant="dark" disabled={status === 'loading'} onClick={async () => {
          setStatus('loading')
          const r = await apiPost('/v1/newsletter/unsubscribe', { token })
          setStatus(r.ok ? 'success' : 'error')
          if (!r.ok) setMsg(r.message)
        }}>{status === 'loading' ? 'Unsubscribing…' : 'Yes, unsubscribe me'}</Button>
        <p className="text-sm">Prefer fewer emails? Use the &ldquo;Manage your preferences&rdquo; link in any Billix email.</p>
        <FormStatus status={status === 'error' ? 'error' : 'idle'} message={msg} />
      </div>
    </Panel>
  )
}

interface Prefs { email: string; status: string; topics: string[]; state: string | null }
const topicLabels: Record<string, string> = { weekly: 'Weekly bill explainers', 'monthly-review': 'Monthly bill review checklist', regional: 'Regional rate updates' }

export function Preferences() {
  const token = useToken()
  const [prefs, setPrefs] = useState<Prefs | null>(null)
  const [loadError, setLoadError] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [msg, setMsg] = useState('')
  useEffect(() => {
    if (!token || !apiAvailable()) return
    apiGet<Prefs>(`/v1/newsletter/preferences?token=${encodeURIComponent(token)}`).then((r) => (r.ok ? setPrefs(r.data) : setLoadError(r.message)))
  }, [token])
  if (!apiAvailable()) return <Panel title="Newsletter not connected">Please try again later.</Panel>
  if (!token) return missing
  if (loadError) return <Panel title="We couldn&rsquo;t load your preferences">{loadError}</Panel>
  if (!prefs) return <Panel title="Loading&hellip;">One moment.</Panel>
  return (
    <div className="mx-auto max-w-xl rounded-[var(--radius-panel)] border border-line bg-paper p-8">
      <h1 className="text-3xl font-semibold text-teal-deep">Newsletter preferences</h1>
      <p className="mt-2 text-muted">For {prefs.email} &middot; status: {prefs.status}</p>
      <fieldset className="mt-6 space-y-3">
        <legend className="mb-2 font-semibold text-teal-deep">Send me</legend>
        {Object.entries(topicLabels).map(([id, label]) => (
          <Checkbox key={id} id={`pref-${id}`} label={label} checked={prefs.topics.includes(id)} onChange={(e) => setPrefs({ ...prefs, topics: e.target.checked ? [...prefs.topics, id] : prefs.topics.filter((t) => t !== id) })} />
        ))}
      </fieldset>
      <div className="mt-6 flex flex-wrap items-center gap-4">
        <Button variant="secondary" disabled={status === 'loading'} onClick={async () => {
          setStatus('loading')
          const r = await apiPost(`/v1/newsletter/preferences?token=${encodeURIComponent(token)}`, { topics: prefs.topics, state: prefs.state ?? undefined }, { method: 'PUT' })
          setStatus(r.ok ? 'success' : 'error')
          setMsg(r.ok ? 'Preferences saved.' : r.message)
        }}>Save preferences</Button>
        <p className="text-sm text-muted">To stop all emails, use the unsubscribe link in any Billix email.</p>
      </div>
      <div className="mt-4"><FormStatus status={status === 'loading' ? 'idle' : status} message={msg} /></div>
    </div>
  )
}
