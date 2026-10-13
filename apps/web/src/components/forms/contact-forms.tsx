'use client'

import { useState } from 'react'
import { apiAvailable, apiPost, EMAIL_RE } from '@/lib/api'
import { categoryIndex } from '@/content/category-index'
import { states } from '@/content/states'
import { Button } from '@/components/ui/primitives'
import { Checkbox, Field, FormStatus, FormUnavailable, Honeypot, Input, Select, Textarea } from './fields'

type Status = 'idle' | 'loading' | 'success' | 'error'

function useSubmit() {
  const [status, setStatus] = useState<Status>('idle')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const run = async (path: string, body: object, success: (data: unknown) => string, validate: () => Record<string, string>) => {
    const v = validate()
    setErrors(v)
    if (Object.keys(v).length) {
      setStatus('error')
      setMessage('Please fix the highlighted fields.')
      return
    }
    setStatus('loading')
    const res = await apiPost(path, body)
    if (res.ok) {
      setStatus('success')
      setMessage(success(res.data))
    } else {
      setStatus('error')
      setMessage(res.message)
      setErrors(res.fields)
    }
  }
  return { status, message, errors, run }
}

export const contactTopics = [
  { id: 'general', label: 'General question' },
  { id: 'correction', label: 'Report a correction' },
  { id: 'press', label: 'Press & media' },
  { id: 'partnerships', label: 'Partnerships' },
  { id: 'business', label: 'Business solutions' },
  { id: 'support', label: 'Help with the site' },
] as const

export function ContactForm({ defaultTopic = 'general' }: { defaultTopic?: (typeof contactTopics)[number]['id'] }) {
  const [f, setF] = useState({ name: '', email: '', topic: defaultTopic as string, message: '' })
  const [hp, setHp] = useState('')
  const { status, message, errors, run } = useSubmit()
  if (!apiAvailable()) return <FormUnavailable what="The contact form" />
  if (status === 'success') return <FormStatus status="success" message={message} />

  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => setF({ ...f, [k]: e.target.value })
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    run(
      '/v1/contact',
      { ...f, name: f.name.trim(), email: f.email.trim(), message: f.message.trim(), website: hp },
      (d) => {
        const ref = (d as { reference?: string; id?: string })?.reference ?? (d as { id?: string })?.id
        return `Thanks, we got your message${ref ? ` (reference ${String(ref)})` : ''}. We reply within two business days.`
      },
      () => {
        const e: Record<string, string> = {}
        if (!f.name.trim()) e.name = 'Please enter your name.'
        if (!EMAIL_RE.test(f.email.trim())) e.email = 'Enter a valid email address.'
        if (f.message.trim().length < 10) e.message = 'Please write at least 10 characters.'
        return e
      },
    )
  }
  return (
    <form onSubmit={onSubmit} noValidate className="relative grid gap-5 sm:grid-cols-2">
      <Honeypot value={hp} onChange={setHp} />
      <Field id="c-name" label="Name" error={errors.name}>
        <Input id="c-name" autoComplete="name" value={f.name} onChange={set('name')} maxLength={120} error={errors.name} />
      </Field>
      <Field id="c-email" label="Email" error={errors.email}>
        <Input id="c-email" type="email" autoComplete="email" value={f.email} onChange={set('email')} error={errors.email} />
      </Field>
      <div className="sm:col-span-2">
        <Field id="c-topic" label="What's this about?">
          <Select id="c-topic" value={f.topic} onChange={set('topic')}>
            {contactTopics.map((t) => (
              <option key={t.id} value={t.id}>{t.label}</option>
            ))}
          </Select>
        </Field>
      </div>
      <div className="sm:col-span-2">
        <Field id="c-message" label="Message" error={errors.message} hint="Please don't include account numbers or other sensitive details.">
          <Textarea id="c-message" value={f.message} onChange={set('message')} maxLength={5000} error={errors.message} />
        </Field>
      </div>
      <div className="flex flex-col gap-4 sm:col-span-2">
        <FormStatus status={status} message={message} />
        <Button type="submit" variant="secondary" disabled={status === 'loading'} className="self-start">
          {status === 'loading' ? 'Sending…' : 'Send message'}
        </Button>
      </div>
    </form>
  )
}

function CategoryOptions() {
  return (
    <>
      <option value="">Choose a bill type</option>
      {categoryIndex.map((c) => (
        <option key={c.slug} value={c.slug}>{c.shortName}</option>
      ))}
    </>
  )
}

export function QuestionForm() {
  const [f, setF] = useState({ name: '', email: '', state: '', category: '', question: '', consent_to_publish: false })
  const [hp, setHp] = useState('')
  const { status, message, errors, run } = useSubmit()
  if (!apiAvailable()) return <FormUnavailable what="Question submissions" />
  if (status === 'success') return <FormStatus status="success" message={message} />
  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => setF({ ...f, [k]: e.target.value })
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    run(
      '/v1/community/questions',
      { name: f.name.trim() || undefined, email: f.email.trim() || undefined, state: f.state || undefined, category: f.category, question: f.question.trim(), consent_to_publish: f.consent_to_publish, website: hp },
      () => 'Thanks! Your question is in. Our team reviews every one, and the common ones become guides and videos.',
      () => {
        const e: Record<string, string> = {}
        if (!f.category) e.category = 'Choose the bill type.'
        if (f.question.trim().length < 10) e.question = 'Please write at least 10 characters.'
        if (f.email.trim() && !EMAIL_RE.test(f.email.trim())) e.email = 'Enter a valid email address or leave it blank.'
        return e
      },
    )
  }
  return (
    <form onSubmit={onSubmit} noValidate className="relative grid gap-5 sm:grid-cols-2">
      <Honeypot value={hp} onChange={setHp} />
      <Field id="q-category" label="Bill type" error={errors.category}>
        <Select id="q-category" value={f.category} onChange={set('category')} error={errors.category}>
          <CategoryOptions />
        </Select>
      </Field>
      <Field id="q-state" label="State" optional>
        <Select id="q-state" value={f.state} onChange={set('state')}>
          <option value="">Prefer not to say</option>
          {states.map((s) => (
            <option key={s.code} value={s.code}>{s.name}</option>
          ))}
        </Select>
      </Field>
      <div className="sm:col-span-2">
        <Field id="q-question" label="Your question" error={errors.question} hint="Leave out names, addresses and account numbers.">
          <Textarea id="q-question" value={f.question} onChange={set('question')} maxLength={2000} placeholder="e.g. Why does my water bill have a stormwater fee?" error={errors.question} />
        </Field>
      </div>
      <Field id="q-name" label="First name" optional>
        <Input id="q-name" value={f.name} onChange={set('name')} maxLength={80} />
      </Field>
      <Field id="q-email" label="Email" optional error={errors.email} hint="Only if you'd like a reply.">
        <Input id="q-email" type="email" value={f.email} onChange={set('email')} error={errors.email} />
      </Field>
      <div className="sm:col-span-2">
        <Checkbox id="q-consent" checked={f.consent_to_publish} onChange={(e) => setF({ ...f, consent_to_publish: e.target.checked })} label="Billix may publish my question (without my name or email) in a guide or video." />
      </div>
      <div className="flex flex-col gap-4 sm:col-span-2">
        <FormStatus status={status} message={message} />
        <Button type="submit" variant="secondary" disabled={status === 'loading'} className="self-start">
          {status === 'loading' ? 'Sending…' : 'Ask the question'}
        </Button>
      </div>
    </form>
  )
}

export function VideoIdeaForm() {
  const [f, setF] = useState({ name: '', email: '', category: '', idea: '' })
  const [hp, setHp] = useState('')
  const { status, message, errors, run } = useSubmit()
  if (!apiAvailable()) return <FormUnavailable what="Video idea submissions" />
  if (status === 'success') return <FormStatus status="success" message={message} />
  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => setF({ ...f, [k]: e.target.value })
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    run(
      '/v1/community/video-ideas',
      { name: f.name.trim() || undefined, email: f.email.trim() || undefined, category: f.category, idea: f.idea.trim(), website: hp },
      () => 'Thanks! Alice reads every idea. If we make it, it’ll show up in the video library.',
      () => {
        const e: Record<string, string> = {}
        if (!f.category) e.category = 'Choose the bill type.'
        if (f.idea.trim().length < 10) e.idea = 'Please write at least 10 characters.'
        if (f.email.trim() && !EMAIL_RE.test(f.email.trim())) e.email = 'Enter a valid email address or leave it blank.'
        return e
      },
    )
  }
  return (
    <form onSubmit={onSubmit} noValidate className="relative grid gap-5">
      <Honeypot value={hp} onChange={setHp} />
      <Field id="v-category" label="Bill type" error={errors.category}>
        <Select id="v-category" value={f.category} onChange={set('category')} error={errors.category}>
          <CategoryOptions />
        </Select>
      </Field>
      <Field id="v-idea" label="What should Alice explain?" error={errors.idea}>
        <Textarea id="v-idea" value={f.idea} onChange={set('idea')} maxLength={2000} placeholder="e.g. What's a demand charge, and why is it on my bill?" error={errors.idea} />
      </Field>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="v-name" label="First name" optional>
          <Input id="v-name" value={f.name} onChange={set('name')} maxLength={80} />
        </Field>
        <Field id="v-email" label="Email" optional error={errors.email}>
          <Input id="v-email" type="email" value={f.email} onChange={set('email')} error={errors.email} />
        </Field>
      </div>
      <FormStatus status={status} message={message} />
      <Button type="submit" variant="secondary" disabled={status === 'loading'} className="self-start">
        {status === 'loading' ? 'Sending…' : 'Suggest this video'}
      </Button>
    </form>
  )
}
