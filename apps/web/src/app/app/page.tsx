import type { Metadata } from 'next'
import { Bell, BookmarkCheck, Calculator, ChartColumn, LayoutDashboard, MessageCircle, Repeat, ScanLine, Settings, Smartphone } from 'lucide-react'
import { appStores, features } from '@/config/site'
import { PhoneMock } from '@/components/brand/mockups'
import { AliceNote } from '@/components/brand/alice'
import { WaitlistForm } from '@/components/forms/waitlist-form'
import { ButtonLink, ComingSoonBadge, Section, SectionHeading } from '@/components/ui/primitives'

export const metadata: Metadata = {
  title: 'The Billix App',
  description: 'The Billix app for iPhone and Android is in development: track bills, get reminders, scan bills and ask Alice. Join the waitlist.',
  alternates: { canonical: '/app' },
}

const appFeatures = [
  { I: LayoutDashboard, t: 'Household bill dashboard', b: 'Every recurring bill and its due date on one screen.' },
  { I: Repeat, t: 'Recurring bill tracking', b: 'Log amounts and usage to see how each bill changes.' },
  { I: Bell, t: 'Bill reminders', b: 'A heads-up before a bill is due or a promo rate ends.' },
  { I: ScanLine, t: 'Bill scanning', b: 'Snap a bill to see its charges explained. You review everything first.' },
  { I: MessageCircle, t: 'Ask Alice', b: 'Questions about a charge, answered with sources.' },
  { I: Calculator, t: 'Calculators', b: 'The Billix tools, built for your phone.' },
  { I: BookmarkCheck, t: 'Saved articles', b: 'Keep the guides you need for later.' },
  { I: ChartColumn, t: 'Spending reports', b: 'Monthly and yearly totals by bill type.' },
  { I: Settings, t: 'Privacy controls', b: 'You decide what’s stored, and can delete it anytime.' },
]

const faqs = [
  { q: 'When will the app launch?', a: 'We haven’t set a date yet. Join the waitlist and we’ll email you once, when it’s ready to download.' },
  { q: 'Will it be free?', a: 'Pricing isn’t decided. The educational guides and calculators on this website will stay free.' },
  { q: 'Will the app connect to my utility or bank accounts?', a: 'Not at launch. You’ll add bills yourself or scan them. Any future account connections will be optional and clearly explained.' },
  { q: 'Does the app share my data with providers?', a: 'No. We don’t sell personal information. Our privacy policy will be updated with app-specific details before launch.' },
]

export default function AppPage() {
  return (
    <>
      <section className="overflow-hidden bg-teal-deep text-cream">
        <div className="container-x grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-2">
          <div>
            <ComingSoonBadge />
            <h1 className="mt-5 text-[clamp(2.4rem,5.4vw,4rem)] font-semibold leading-[1.02]">Your household bills, in your pocket</h1>
            <p className="mt-5 max-w-lg text-lg text-cream/75">We&rsquo;re building the Billix app for iPhone and Android. It shares one secure account with this website, so your bills follow you everywhere.</p>
            <div id="download" className="mt-8 max-w-md scroll-mt-28">
              {features.appLaunched ? (
                <div className="flex flex-wrap gap-3">
                  {appStores.ios && <ButtonLink href={appStores.ios}>Download on the App Store</ButtonLink>}
                  {appStores.android && <ButtonLink href={appStores.android}>Get it on Google Play</ButtonLink>}
                </div>
              ) : (
                <>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {['App Store', 'Google Play'].map((s) => (
                      <span key={s} className="inline-flex items-center gap-2 rounded-xl border border-cream/20 px-3.5 py-2 text-sm text-cream/75"><Smartphone className="size-4" aria-hidden />{s}: coming soon</span>
                    ))}
                  </div>
                  <WaitlistForm list="app" dark />
                </>
              )}
            </div>
          </div>
          <div className="flex justify-center gap-6">
            <div className="text-center"><PhoneMock platform="ios" className="rotate-[-3deg]" /><p className="mt-4 text-sm text-cream/60">iPhone</p></div>
            <div className="mt-12 hidden text-center sm:block"><PhoneMock platform="android" className="rotate-[3deg]" /><p className="mt-4 text-sm text-cream/60">Android</p></div>
          </div>
        </div>
      </section>
      <Section>
        <SectionHeading title="Planned features" lede="These describe the app we&rsquo;re building. Screens shown are concept previews, not screenshots of a finished app." />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {appFeatures.map(({ I, t, b }) => (
            <div key={t} className="rounded-[var(--radius-card)] border border-line bg-paper p-5">
              <I className="size-6 text-teal" aria-hidden />
              <h3 className="mt-3 text-lg font-semibold text-teal-deep">{t}</h3>
              <p className="mt-1 text-[0.95rem] text-muted">{b}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section tone="paper" id="updates">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading title="Development log" />
            <ol className="mt-8 space-y-5 border-l-2 border-gold pl-6">
              <li><p className="text-sm font-semibold text-teal-ink">Now</p><p className="mt-1">Website, guides and the first calculator are live. The app is in planning, sharing its backend with this site.</p></li>
              <li><p className="text-sm font-semibold text-teal-ink">Next</p><p className="mt-1">Accounts and bill tracking on the web, then the same features in the app.</p></li>
            </ol>
            <AliceNote className="mt-8">We&rsquo;ll post real updates here as the app takes shape, not promises.</AliceNote>
          </div>
          <div>
            <SectionHeading title="Questions about the app" />
            <div className="mt-8 divide-y divide-line rounded-[var(--radius-card)] border border-line bg-white">
              {faqs.map((f) => (
                <details key={f.q} className="group px-5 py-4">
                  <summary className="flex cursor-pointer list-none justify-between gap-4 font-semibold text-teal-deep">{f.q}<span aria-hidden className="text-xl leading-none text-teal group-open:rotate-45">+</span></summary>
                  <p className="mt-3 text-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
