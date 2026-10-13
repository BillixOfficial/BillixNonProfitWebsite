import Link from 'next/link'
import { footerNav, legalNav } from '@/config/navigation'
import { site } from '@/config/site'
import { Logo } from '@/components/brand/alice'
import { SocialIconRow } from '@/components/brand/social-links'
import { NewsletterForm } from '@/components/forms/newsletter-form'

export function SiteFooter() {
  return (
    <footer data-site-footer className="bg-teal-night text-cream/85">
      <div className="container-x grid gap-10 border-b border-cream/10 py-14 lg:grid-cols-[1.1fr_1.9fr]">
        <div>
          <Logo tone="light" />
          <p className="mt-4 max-w-sm text-[0.98rem] leading-relaxed text-cream/75">{site.tagline} Free, plain-English education about the household bills you pay.</p>
          <div className="mt-6 max-w-sm">
            <p className="font-display text-lg font-semibold text-cream">The Billix Brief</p>
            <p className="mb-3 mt-1 text-sm text-cream/70">Smarter bills, delivered to your inbox.</p>
            <NewsletterForm variant="footer" source="footer" />
          </div>
          <div className="mt-7">
            <p className="mb-3 text-sm font-semibold text-cream">Follow Billix</p>
            <SocialIconRow tone="light" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
          {footerNav.map((col) => (
            <div key={col.title}>
              <p className="eyebrow text-gold">{col.title}</p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-[0.93rem] text-cream/80 transition-colors hover:text-cream hover:underline">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="container-x flex flex-col gap-4 py-7 text-[0.82rem] text-cream/60 lg:flex-row lg:items-center lg:justify-between">
        <p>
          &copy; Billix. Educational information only, not financial, legal or tax advice.{' '}
          <Link href="/editorial-standards" className="underline hover:text-cream">Editorial standards</Link>
        </p>
        <ul className="flex flex-wrap gap-x-4 gap-y-2">
          {legalNav.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="hover:text-cream hover:underline">{l.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
