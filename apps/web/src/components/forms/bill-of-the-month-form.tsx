'use client'

import Link from 'next/link'
import { useEffect, useMemo, useRef, useState } from 'react'
import { FileText, Upload, X } from 'lucide-react'
import { apiAvailable, apiGet, apiUpload, EMAIL_RE } from '@/lib/api'
import { states } from '@/content/states'
import { socialLinks } from '@/config/site'
import { Button } from '@/components/ui/primitives'
import { Checkbox, Field, FormStatus, FormUnavailable, Honeypot, Input, Select, Textarea } from './fields'

type Status = 'idle' | 'loading' | 'success' | 'error'
const youtube = socialLinks.find((l) => l.platform === 'youtube')?.url
const MAX_BYTES = 10 * 1024 * 1024
const ACCEPT = 'image/jpeg,image/png,image/webp,image/heic,image/heif,application/pdf,.heic,.heif'
export const billTypes = [
  { id: 'electric', label: 'Electric' },
  { id: 'gas', label: 'Natural gas' },
  { id: 'heating-oil', label: 'Heating oil' },
  { id: 'propane', label: 'Propane' },
  { id: 'water-sewer', label: 'Water / sewer' },
  { id: 'trash', label: 'Trash / recycling' },
  { id: 'internet', label: 'Internet' },
  { id: 'phone', label: 'Phone / mobile' },
  { id: 'tv', label: 'Cable / satellite TV' },
] as const
const heardFrom = [
  { id: 'youtube', label: 'YouTube' },
  { id: 'tiktok', label: 'TikTok' },
  { id: 'website', label: 'The Billix website' },
  { id: 'friend', label: 'A friend or family member' },
  { id: 'other', label: 'Somewhere else' },
] as const

export function BillOfTheMonthForm() {
  const [open, setOpen] = useState<boolean | null>(null)
  const [f, setF] = useState({ first_name: '', state: '', email: '', bill_type: '', note: '', heard_from: '', eligible: false, redaction_confirmed: false, consent_feature: false, consent_credit: false })
  const [enterDrawing, setEnterDrawing] = useState(true)
  const [addBill, setAddBill] = useState(false)
  // Campaign tag from links like /bill-of-the-month?src=yt-short (which videos send entries). Not rendered.
  const [src] = useState<string | null>(() => {
    if (typeof window === 'undefined') return null
    const tag = new URLSearchParams(window.location.search).get('src')
    return tag && /^[a-z0-9-]{1,40}$/.test(tag) ? tag : null
  })
  const [file, setFile] = useState<File | null>(null)
  const [hp, setHp] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const fileInput = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (!apiAvailable()) return
    apiGet<{ open: boolean }>(`/v1/bill-of-the-month/status?view=1${src ? `&src=${src}` : ''}`).then((r) => setOpen(r.ok ? r.data.open : false))
  }, [src])

  // Local preview so people can check their redaction before sending. Nothing is uploaded until they submit.
  const preview = useMemo(() => (file && /^image\/(jpeg|png|webp)$/.test(file.type) ? URL.createObjectURL(file) : null), [file])
  useEffect(() => () => { if (preview) URL.revokeObjectURL(preview) }, [preview])

  if (!apiAvailable()) return <FormUnavailable what="Bill of the Month entry" />
  if (open === null) return <p className="text-muted">Loading the entry form…</p>
  if (!open)
    return (
      <div className="rounded-xl border border-dashed border-line bg-paper px-5 py-4 text-[0.98rem] text-muted">
        Entries aren&rsquo;t open right now. Follow Billix on YouTube to hear when the next round opens.
      </div>
    )
  if (status === 'success')
    return (
      <div className="space-y-4">
        <FormStatus status="success" message={message} />
        <div className="rounded-xl bg-teal-deep p-5 text-cream">
          <p className="font-semibold">Follow along on YouTube</p>
          <p className="mt-1 text-cream/80">Subscribe to follow the bill breakdowns and winner announcements.</p>
          {youtube && (
            <a href={youtube} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block font-semibold text-gold underline">
              Watch Billix on YouTube
            </a>
          )}
        </div>
      </div>
    )

  const set = (k: 'first_name' | 'state' | 'email' | 'bill_type' | 'note' | 'heard_from') => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => setF({ ...f, [k]: e.target.value })

  const pick = (picked: File | undefined) => {
    if (!picked) return
    const next = { ...errors }
    delete next.bill
    if (picked.size > MAX_BYTES) next.bill = 'That file is too large. The limit is 10 MB.'
    setErrors(next)
    setFile(picked)
  }

  const validate = () => {
    const e: Record<string, string> = {}
    if (!f.first_name.trim()) e.first_name = 'Please enter your first name.'
    if (!f.state) e.state = 'Choose your state.'
    if (!EMAIL_RE.test(f.email.trim())) e.email = 'Enter a valid email address. This is how we contact the winner.'
    if (!enterDrawing && !addBill) e.enter_drawing = 'Choose the drawing, a bill breakdown, or both.'
    if (addBill) {
      if (!f.bill_type) e.bill_type = 'Choose the bill type.'
      if (!file) e.bill = 'Attach a photo or PDF of your bill.'
      else if (file.size > MAX_BYTES) e.bill = 'That file is too large. The limit is 10 MB.'
      if (!f.redaction_confirmed) e.redaction_confirmed = 'Please confirm you covered your personal details.'
    }
    if (!f.eligible) e.eligible = 'Please confirm you meet the rules to enter.'
    return e
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const v = validate()
    setErrors(v)
    if (Object.keys(v).length) {
      setStatus('error')
      setMessage('Please fix the highlighted fields.')
      return
    }
    const form = new FormData()
    form.set('first_name', f.first_name.trim())
    form.set('state', f.state)
    form.set('email', f.email.trim())
    if (f.heard_from) form.set('heard_from', f.heard_from)
    if (src) form.set('src', src)
    form.set('eligible', String(f.eligible))
    form.set('enter_drawing', String(enterDrawing))
    form.set('add_bill', String(addBill))
    if (addBill) {
      form.set('bill_type', f.bill_type)
      if (f.note.trim()) form.set('note', f.note.trim())
      form.set('redaction_confirmed', String(f.redaction_confirmed))
      form.set('consent_feature', String(f.consent_feature))
      form.set('consent_credit', String(f.consent_feature && f.consent_credit))
      form.set('bill', file!)
    }
    form.set('website', hp)
    setStatus('loading')
    const res = await apiUpload<{ message: string }>('/v1/bill-of-the-month/entries', form)
    if (res.ok) {
      setStatus('success')
      setMessage(res.data.message)
    } else {
      setStatus('error')
      setMessage(res.message)
      setErrors(res.fields)
    }
  }

  const sectionCard = 'rounded-xl border p-4 sm:p-5'
  return (
    <form onSubmit={onSubmit} noValidate className="relative grid gap-5 sm:grid-cols-2">
      <Honeypot value={hp} onChange={setHp} />
      <Field id="b-first" label="First name" error={errors.first_name}>
        <Input id="b-first" autoComplete="given-name" value={f.first_name} onChange={set('first_name')} maxLength={60} error={errors.first_name} />
      </Field>
      <Field id="b-state" label="State" error={errors.state}>
        <Select id="b-state" value={f.state} onChange={set('state')} error={errors.state}>
          <option value="">Choose your state</option>
          {states.map((s) => (
            <option key={s.code} value={s.code}>{s.name}</option>
          ))}
        </Select>
      </Field>
      <div className="sm:col-span-2">
        <Field id="b-email" label="Email" error={errors.email} hint="We only use it for Bill of the Month. The winner is told by email.">
          <Input id="b-email" type="email" autoComplete="email" value={f.email} onChange={set('email')} error={errors.email} />
        </Field>
      </div>

      {/* Activity 1: the free drawing. Needs nothing beyond the details above. */}
      <div className={`${sectionCard} sm:col-span-2 ${enterDrawing ? 'border-teal bg-teal-soft/30' : 'border-line bg-white'}`}>
        <Checkbox
          id="b-drawing"
          checked={enterDrawing}
          onChange={(e) => setEnterDrawing(e.target.checked)}
          error={errors.enter_drawing}
          label={<><span className="block text-base font-semibold text-teal-deep">Enter this round&rsquo;s $50 drawing</span><span className="block text-muted">Free. No bill, purchase or subscription needed. One random winner gets $50 paid toward a bill.</span></>}
        />
      </div>

      {/* Activity 2: optional bill for a breakdown. Never affects the drawing. */}
      <div className={`${sectionCard} sm:col-span-2 ${addBill ? 'border-teal bg-teal-soft/30' : 'border-line bg-white'}`}>
        <Checkbox
          id="b-addbill"
          checked={addBill}
          onChange={(e) => { setAddBill(e.target.checked); setErrors({}) }}
          label={<><span className="block text-base font-semibold text-teal-deep">Also send a bill for a breakdown <span className="font-normal text-muted">(optional)</span></span><span className="block text-muted">Alice may explain it in a video. This doesn&rsquo;t change your chances in the drawing.</span></>}
        />

        {addBill && (
          <div className="mt-5 grid gap-5">
            <Field id="b-type" label="Bill type" error={errors.bill_type}>
              <Select id="b-type" value={f.bill_type} onChange={set('bill_type')} error={errors.bill_type}>
                <option value="">Choose one</option>
                {billTypes.map((t) => (
                  <option key={t.id} value={t.id}>{t.label}</option>
                ))}
              </Select>
            </Field>
            <div>
              <p className="mb-1.5 text-[0.9rem] font-semibold text-teal-deep">Your bill</p>
              <div className="mb-3 rounded-xl bg-gold-soft/60 px-4 py-3 text-[0.93rem] leading-relaxed">
                <p><strong>Before you upload, cover:</strong></p>
                <ul className="mt-1 list-disc space-y-0.5 pl-5">
                  <li>Your <strong>name</strong> and <strong>street address</strong></li>
                  <li>Your <strong>account number</strong>, and any meter or service ID number</li>
                  <li><strong>QR codes and barcodes</strong> (they can hold your account details)</li>
                  <li>Your phone number, and any bank or card details on a payment stub</li>
                </ul>
                <p className="mt-1">Never send passwords or card numbers. Tip: a phone&rsquo;s photo editor can draw over them.</p>
              </div>
              <input
                ref={fileInput}
                id="b-bill"
                type="file"
                accept={ACCEPT}
                className="sr-only"
                aria-invalid={!!errors.bill}
                aria-describedby={errors.bill ? 'b-bill-error' : 'b-bill-hint'}
                onChange={(e) => pick(e.target.files?.[0])}
              />
              {file ? (
                <div className="space-y-3">
                  <div className="flex items-center gap-3 rounded-xl border border-line bg-white px-4 py-3">
                    <FileText className="size-5 shrink-0 text-teal" aria-hidden />
                    <span className="min-w-0 flex-1 truncate text-[0.95rem]">{file.name}</span>
                    <span className="text-sm text-muted">{(file.size / 1024 / 1024).toFixed(1)} MB</span>
                    <button type="button" onClick={() => { setFile(null); setF({ ...f, redaction_confirmed: false }); if (fileInput.current) fileInput.current.value = '' }} className="rounded-md p-1 text-muted hover:text-teal-deep" aria-label="Remove file">
                      <X className="size-4" aria-hidden />
                    </button>
                  </div>
                  {preview ? (
                    // eslint-disable-next-line @next/next/no-img-element -- local blob preview, never uploaded
                    <img src={preview} alt="Preview of your bill" className="max-h-96 w-full rounded-xl border border-line bg-white object-contain" />
                  ) : (
                    <p className="text-sm text-muted">We can&rsquo;t preview this file type here. Open it on your device and check that everything private is covered.</p>
                  )}
                  <Checkbox
                    id="b-redacted"
                    checked={f.redaction_confirmed}
                    onChange={(e) => setF({ ...f, redaction_confirmed: e.target.checked })}
                    error={errors.redaction_confirmed}
                    label="I checked my bill. My name, address, account number, QR codes and barcodes are covered."
                  />
                </div>
              ) : (
                <label
                  htmlFor="b-bill"
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={(e) => { e.preventDefault(); pick(e.dataTransfer.files?.[0]) }}
                  className="flex cursor-pointer flex-col items-center gap-2 rounded-xl border-2 border-dashed border-line bg-white px-4 py-8 text-center transition-colors hover:border-teal"
                >
                  <Upload className="size-6 text-teal" aria-hidden />
                  <span className="font-semibold text-teal-deep">Choose a photo or PDF</span>
                  <span id="b-bill-hint" className="text-sm text-muted">JPG, PNG, HEIC or PDF, up to 10 MB</span>
                </label>
              )}
              {errors.bill && <p id="b-bill-error" className="mt-1.5 text-sm font-medium text-danger">{errors.bill}</p>}
            </div>
            <Field id="b-note" label="What confuses you about this bill?" optional>
              <Textarea id="b-note" value={f.note} onChange={set('note')} maxLength={1000} placeholder="For example: why is the delivery charge bigger than the electricity?" />
            </Field>
            <Checkbox
              id="b-feature"
              checked={f.consent_feature}
              onChange={(e) => setF({ ...f, consent_feature: e.target.checked, consent_credit: e.target.checked && f.consent_credit })}
              label="Optional: Billix may show my bill, with my personal details covered, in its videos and posts. I keep ownership of my bill. Without this, Billix only uses it privately to decide what to explain."
            />
            {f.consent_feature && (
              <Checkbox
                id="b-credit"
                checked={f.consent_credit}
                onChange={(e) => setF({ ...f, consent_credit: e.target.checked })}
                label="Optional: if my bill is featured, you may credit me by first name and state."
              />
            )}
          </div>
        )}
      </div>

      <div className="sm:col-span-2">
        <Field id="b-heard" label="How did you hear about Bill of the Month?" optional>
          <Select id="b-heard" value={f.heard_from} onChange={set('heard_from')}>
            <option value="">Choose one</option>
            {heardFrom.map((h) => (
              <option key={h.id} value={h.id}>{h.label}</option>
            ))}
          </Select>
        </Field>
      </div>

      <div className="sm:col-span-2">
        <Checkbox
          id="b-eligible"
          checked={f.eligible}
          onChange={(e) => setF({ ...f, eligible: e.target.checked })}
          error={errors.eligible}
          label={<>I&rsquo;m 18 or older, I live in the U.S., and I agree to the <Link href="/legal/bill-of-the-month-rules" className="font-semibold text-teal-ink underline">Official Rules</Link> and <Link href="/legal/privacy" className="font-semibold text-teal-ink underline">Privacy Policy</Link>.</>}
        />
      </div>

      <div className="flex flex-col gap-4 sm:col-span-2">
        <FormStatus status={status} message={message} />
        <Button type="submit" variant="secondary" disabled={status === 'loading'} className="self-start">
          {status === 'loading' ? 'Sending…' : enterDrawing ? 'Enter the drawing' : 'Send my bill'}
        </Button>
        <p className="text-xs text-muted">No purchase or subscription necessary. Sending a bill doesn&rsquo;t change your odds. One submission per person per round. Rounds close at 11:59 p.m. ET on the 15th.</p>
      </div>
    </form>
  )
}
