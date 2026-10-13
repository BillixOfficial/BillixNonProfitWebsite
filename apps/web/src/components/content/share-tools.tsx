'use client'

import { useState } from 'react'
import { Check, Link2, Mail, Printer } from 'lucide-react'
import { SocialIcon } from '@/components/ui/icons'

/** Real share actions: copy link, native/email share and platform share URLs. */
export function ShareTools({ title, path }: { title: string; path: string }) {
  const [copied, setCopied] = useState(false)
  const url = () => (typeof window !== 'undefined' ? new URL(path, window.location.origin).toString() : path)
  const btn = 'inline-flex size-10 items-center justify-center rounded-full border border-line bg-white text-teal-deep transition-colors hover:border-teal hover:text-teal'

  const open = (href: string) => window.open(href, '_blank', 'noopener,noreferrer,width=640,height=560')

  return (
    <div className="no-print flex flex-wrap items-center gap-2">
      <span className="mr-1 text-sm font-semibold text-muted">Share</span>
      <button type="button" className={btn} aria-label="Copy link" onClick={async () => {
        try {
          await navigator.clipboard.writeText(url())
          setCopied(true)
          setTimeout(() => setCopied(false), 2000)
        } catch {
          window.prompt('Copy this link:', url())
        }
      }}>
        {copied ? <Check className="size-4" aria-hidden /> : <Link2 className="size-4" aria-hidden />}
      </button>
      <button type="button" className={btn} aria-label="Share by email" onClick={() => (window.location.href = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url())}`)}>
        <Mail className="size-4" aria-hidden />
      </button>
      <button type="button" className={btn} aria-label="Share on Facebook" onClick={() => open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url())}`)}>
        <SocialIcon platform="facebook" className="size-4" />
      </button>
      <button type="button" className={btn} aria-label="Share on X" onClick={() => open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url())}&text=${encodeURIComponent(title)}`)}>
        <SocialIcon platform="x" className="size-3.5" />
      </button>
      <button type="button" className={btn} aria-label="Share on LinkedIn" onClick={() => open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url())}`)}>
        <SocialIcon platform="linkedin" className="size-4" />
      </button>
      <button type="button" className={btn} aria-label="Print this page" onClick={() => window.print()}>
        <Printer className="size-4" aria-hidden />
      </button>
      <span aria-live="polite" className="sr-only">{copied ? 'Link copied' : ''}</span>
    </div>
  )
}
