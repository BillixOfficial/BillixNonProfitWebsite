import type { Metadata } from 'next'
import { CalendarClock, ChartLine, Bell, Save, FileText, Users } from 'lucide-react'
import { AliceFace } from '@/components/brand/alice'
import { ButtonLink, ComingSoonBadge } from '@/components/ui/primitives'

export const metadata: Metadata = { title: 'My Billix', robots: { index: false } }

export default function AccountPage() {
  return (
    <div className="container-x grid items-center gap-10 py-16 sm:py-20 lg:grid-cols-[1fr_auto]">
      <div className="max-w-2xl">
        <ComingSoonBadge />
        <h1 className="mt-4 text-[clamp(2.2rem,5vw,3.4rem)] font-semibold leading-tight text-teal-deep">My Billix accounts are coming</h1>
        <p className="mt-4 text-lg text-muted">Sign-in isn&rsquo;t available yet. Everything on Billix today is free to use without an account, and we don&rsquo;t store anything you type into our calculators.</p>
        <p className="mt-6 font-semibold text-teal-deep">When accounts launch, you&rsquo;ll be able to:</p>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {[
            { I: CalendarClock, t: 'Track recurring bills and due dates' },
            { I: Bell, t: 'Get reminders before bills are due' },
            { I: ChartLine, t: 'See monthly and yearly spending' },
            { I: Save, t: 'Save calculator results' },
            { I: FileText, t: 'Download reports' },
            { I: Users, t: 'Share a household with family' },
          ].map(({ I, t }) => (
            <li key={t} className="flex items-center gap-3"><span className="grid size-9 place-items-center rounded-lg bg-teal-soft text-teal-deep"><I className="size-4.5" aria-hidden /></span>{t}</li>
          ))}
        </ul>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="/app">Join the app waitlist</ButtonLink>
          <ButtonLink href="/tools" variant="ghost">Use the free tools</ButtonLink>
        </div>
      </div>
      <AliceFace mood="thumbs-up" size={300} className="mx-auto" />
    </div>
  )
}
