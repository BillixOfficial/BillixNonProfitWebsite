'use client'

import { useState } from 'react'
import Link from 'next/link'
import { clsx } from 'clsx'
import { AliceFace, type AliceMood } from '@/components/brand/alice'

interface Line {
  id: string
  label: string
  detail: string
  amount: number
  half: 'delivery' | 'supply' | 'other'
  mood: AliceMood
  explain: string
  href: string
}

// An illustrative bill. The numbers are an example that adds up; they are not anyone's real rates.
const lines: Line[] = [
  { id: 'customer', label: 'Customer charge', detail: 'Fixed monthly', amount: 15, half: 'delivery', mood: 'reading-bill', explain: 'A flat fee for having service at all: the meter, billing and customer service. You pay it even in a month you use nothing.', href: '/glossary#customer-charge' },
  { id: 'distribution', label: 'Distribution', detail: '600 kWh × 8.5¢', amount: 51, half: 'delivery', mood: 'explaining', explain: 'This pays for the poles, wires and substations that carry power down your street. Your local utility charges it, at rates its regulators approve.', href: '/learn/supply-vs-delivery-charges' },
  { id: 'transmission', label: 'Transmission', detail: '600 kWh × 2.2¢', amount: 13.2, half: 'delivery', mood: 'thinking', explain: 'The high-voltage lines that move power from plants to your area. It’s part of the delivery half of the bill.', href: '/learn/supply-vs-delivery-charges' },
  { id: 'supply', label: 'Electricity supply', detail: '600 kWh × 12.0¢', amount: 72, half: 'supply', mood: 'idea', explain: 'The electricity itself. In some states you can choose who supplies it; delivery stays with your utility either way.', href: '/glossary#supply-charge' },
  { id: 'riders', label: 'Riders & surcharges', detail: 'Approved add-ons', amount: 4.8, half: 'other', mood: 'confused', explain: 'Extra line items regulators approve to recover specific costs, like storm repairs or efficiency programs. Names vary a lot by utility.', href: '/glossary#rider' },
  { id: 'taxes', label: 'Taxes & fees', detail: 'Varies by place', amount: 7.35, half: 'other', mood: 'surprised', explain: 'State and local taxes and fees. They depend on where you live, so two neighbors in different towns can pay different amounts.', href: '/categories/government-fees' },
]

const usd = (n: number) => n.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
const total = lines.reduce((s, l) => s + l.amount, 0)

export function BillDecoder() {
  const [active, setActive] = useState<string | null>(null)
  const line = lines.find((l) => l.id === active)

  return (
    <div className="relative">
      {/* Alice + speech bubble */}
      <div className="relative z-10 mb-[-1.5rem] flex min-h-[10.5rem] items-end gap-3 pl-2 sm:pl-6">
        <AliceFace key={line?.mood ?? 'neutral'} mood={line?.mood ?? 'hello'} size={172} priority className="animate-[pop_.35s_cubic-bezier(.2,.9,.3,1.3)]" />
        <div aria-live="polite" className="relative mb-9 max-w-[19rem] rounded-2xl rounded-bl-sm bg-teal-deep px-4 py-3 text-[0.93rem] leading-snug text-cream shadow-[var(--shadow-lift)]">
          {line ? (
            <>
              <p className="font-display text-base font-bold text-highlight">{line.label}</p>
              <p className="mt-1">{line.explain}</p>
              <Link href={line.href} className="mt-2 inline-block text-sm font-semibold text-gold underline underline-offset-2">Learn more</Link>
            </>
          ) : (
            <p>Tap any line on this bill and I&rsquo;ll tell you what it pays for.</p>
          )}
        </div>
      </div>

      {/* The bill */}
      <div className="receipt-edge relative rotate-[1.2deg] bg-receipt px-5 pb-8 pt-9 font-mono text-teal-night shadow-[0_30px_60px_-30px_rgba(15,46,43,.55)] sm:px-7">
        <div className="flex items-baseline justify-between border-b-2 border-dashed border-teal-night/30 pb-3">
          <p className="text-lg font-bold tracking-tight">ELECTRIC BILL</p>
          <p className="text-xs uppercase opacity-70">Example</p>
        </div>
        <ul className="mt-3 space-y-1" role="list">
          {lines.map((l) => {
            const on = l.id === active
            return (
              <li key={l.id}>
                <button
                  type="button"
                  aria-pressed={on}
                  onClick={() => setActive(on ? null : l.id)}
                  className={clsx(
                    'group flex w-full items-baseline justify-between gap-3 rounded-md px-2 py-1.5 text-left transition-colors',
                    on ? 'bg-highlight' : 'hover:bg-highlight/45',
                  )}
                >
                  <span>
                    <span className="block text-[0.98rem] font-bold">{l.label}</span>
                    <span className="block text-xs opacity-70">{l.detail}</span>
                  </span>
                  <span className="text-[0.98rem] font-bold tabular-nums">{usd(l.amount)}</span>
                </button>
              </li>
            )
          })}
        </ul>
        <div className="mt-3 flex items-baseline justify-between border-t-2 border-dashed border-teal-night/30 px-2 pt-3">
          <span className="text-lg font-bold">TOTAL</span>
          <span className="text-xl font-bold tabular-nums text-danger">{usd(total)}</span>
        </div>
        <div className="mt-3 flex gap-1.5 px-2 text-[0.7rem] font-bold uppercase">
          <span className="rounded bg-teal/15 px-1.5 py-0.5">Delivery {usd(lines.filter((l) => l.half === 'delivery').reduce((s, l) => s + l.amount, 0))}</span>
          <span className="rounded bg-gold/25 px-1.5 py-0.5">Supply {usd(lines.filter((l) => l.half === 'supply').reduce((s, l) => s + l.amount, 0))}</span>
        </div>
      </div>
    </div>
  )
}
