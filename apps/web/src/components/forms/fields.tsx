'use client'

import { clsx } from 'clsx'
import type { ComponentProps, ReactNode } from 'react'
import { CircleCheck, CircleAlert } from 'lucide-react'
import { site } from '@/config/site'

export const inputClass =
  'w-full rounded-xl border border-line bg-white px-4 py-3 text-[0.98rem] text-ink outline-none transition-colors placeholder:text-muted/70 focus:border-teal focus:ring-2 focus:ring-teal/20 aria-[invalid=true]:border-danger'

export function Field({ id, label, error, hint, optional, children }: { id: string; label: string; error?: string; hint?: string; optional?: boolean; children: ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-[0.9rem] font-semibold text-teal-deep">
        {label} {optional && <span className="font-normal text-muted">(optional)</span>}
      </label>
      {children}
      {hint && !error && <p id={`${id}-hint`} className="mt-1.5 text-sm text-muted">{hint}</p>}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-sm font-medium text-danger">
          {error}
        </p>
      )}
    </div>
  )
}

export function Input({ id, error, ...props }: ComponentProps<'input'> & { id: string; error?: string }) {
  return <input id={id} name={id} aria-invalid={!!error} aria-describedby={error ? `${id}-error` : undefined} className={inputClass} {...props} />
}

export function Textarea({ id, error, ...props }: ComponentProps<'textarea'> & { id: string; error?: string }) {
  return <textarea id={id} name={id} aria-invalid={!!error} aria-describedby={error ? `${id}-error` : undefined} className={clsx(inputClass, 'min-h-32 resize-y')} {...props} />
}

export function Select({ id, error, children, ...props }: ComponentProps<'select'> & { id: string; error?: string }) {
  return (
    <select id={id} name={id} aria-invalid={!!error} className={clsx(inputClass, 'appearance-none bg-[length:16px] bg-[right_1rem_center] bg-no-repeat pr-10')} style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23163f3b' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")" }} {...props}>
      {children}
    </select>
  )
}

export function Checkbox({ id, label, error, ...props }: ComponentProps<'input'> & { id: string; label: ReactNode; error?: string }) {
  return (
    <div>
      <label htmlFor={id} className="flex cursor-pointer items-start gap-3 text-[0.9rem] leading-snug">
        <input id={id} name={id} type="checkbox" aria-invalid={!!error} className="mt-0.5 size-4.5 shrink-0 accent-teal" {...props} />
        <span>{label}</span>
      </label>
      {error && <p className="mt-1 text-sm font-medium text-danger">{error}</p>}
    </div>
  )
}

/** Hidden field bots fill in and people never see. The API discards those submissions. */
export function Honeypot({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
      <label>
        Leave this field empty
        <input type="text" tabIndex={-1} autoComplete="off" value={value} onChange={(e) => onChange(e.target.value)} name="website" />
      </label>
    </div>
  )
}

export function FormStatus({ status, message }: { status: 'idle' | 'loading' | 'success' | 'error'; message?: string }) {
  if (status === 'success')
    return (
      <div role="status" className="flex items-start gap-2 rounded-xl bg-cash-soft px-4 py-3 text-[0.95rem] text-[#24401b]">
        <CircleCheck className="mt-0.5 size-5 shrink-0" aria-hidden />
        <span>{message}</span>
      </div>
    )
  if (status === 'error')
    return (
      <div role="alert" className="flex items-start gap-2 rounded-xl bg-[#f6ddd6] px-4 py-3 text-[0.95rem] text-danger">
        <CircleAlert className="mt-0.5 size-5 shrink-0" aria-hidden />
        <span>{message}</span>
      </div>
    )
  return null
}

/** Shown in place of a form when the API isn't configured, so nothing pretends to work. */
export function FormUnavailable({ what, dark }: { what: string; dark?: boolean }) {
  return (
    <p className={clsx('rounded-xl border border-dashed px-4 py-3 text-[0.92rem]', dark ? 'border-cream/25 text-cream/75' : 'border-line bg-paper text-muted')}>
      {what} opens soon. Until then, email{' '}
      <a href={`mailto:${site.email}`} className="font-semibold underline">
        {site.email}
      </a>
      .
    </p>
  )
}

export const CONSENT_VERSION = 'newsletter-2026-10-13'
