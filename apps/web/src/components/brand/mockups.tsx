import { clsx } from 'clsx'
import { Bell, Calculator, MessageCircle, ScanLine } from 'lucide-react'

/** Illustrative example bill used in the hero. Numbers are an example, labeled as such. */
export function BillPreview({ className }: { className?: string }) {
  const rows = [
    { label: 'Delivery', sub: 'Poles, wires, meter', amount: '$80.00', w: '52%', color: 'bg-teal' },
    { label: 'Electricity supply', sub: '600 kWh used', amount: '$72.00', w: '46%', color: 'bg-gold' },
    { label: 'Taxes & fees', sub: 'Varies by place', amount: '$7.00', w: '5%', color: 'bg-plum' },
  ]
  return (
    <div className={clsx('w-[19rem] rounded-2xl border border-line bg-white p-5 shadow-[var(--shadow-lift)]', className)}>
      <div className="flex items-center justify-between">
        <p className="text-xs font-bold uppercase tracking-wider text-teal-ink">Example electric bill</p>
        <span className="rounded-full bg-sand px-2 py-0.5 text-[0.65rem] font-semibold text-teal-deep">Illustration</span>
      </div>
      <p className="mt-2 font-display text-3xl font-semibold text-teal-deep">$159.00</p>
      <div className="mt-3 flex h-2.5 overflow-hidden rounded-full bg-sand">
        {rows.map((r) => (
          <span key={r.label} className={r.color} style={{ width: r.w }} />
        ))}
      </div>
      <ul className="mt-4 space-y-3">
        {rows.map((r) => (
          <li key={r.label} className="flex items-center justify-between gap-3 text-sm">
            <span className="flex items-center gap-2.5">
              <span className={clsx('size-2.5 rounded-full', r.color)} />
              <span>
                <span className="block font-semibold text-teal-deep">{r.label}</span>
                <span className="block text-xs text-muted">{r.sub}</span>
              </span>
            </span>
            <span className="font-semibold tabular-nums text-teal-deep">{r.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

/** Phone frame showing a concept screen of the planned app. */
export function PhoneMock({ platform = 'ios', className }: { platform?: 'ios' | 'android'; className?: string }) {
  const bills = [
    { name: 'Electric', due: 'Due in 4 days', amt: '$142', c: 'bg-gold' },
    { name: 'Water & sewer', due: 'Due in 11 days', amt: '$68', c: 'bg-teal' },
    { name: 'Internet', due: 'Paid', amt: '$65', c: 'bg-plum' },
  ]
  return (
    <div className={clsx('relative w-[15.5rem] rounded-[2.6rem] bg-teal-night p-2.5 shadow-[0_40px_80px_-30px_rgba(15,46,43,0.7)]', className)} aria-label={`${platform === 'ios' ? 'iPhone' : 'Android'} concept screen of the planned Billix app`} role="img">
      <div className="overflow-hidden rounded-[2.1rem] bg-cream">
        <div className="flex h-7 items-center justify-center">
          {platform === 'ios' ? <span className="h-4 w-20 rounded-full bg-teal-night" /> : <span className="size-2.5 rounded-full bg-teal-night" />}
        </div>
        <div className="px-4 pb-5">
          <p className="text-[0.62rem] font-bold uppercase tracking-wider text-teal-ink">This month</p>
          <p className="font-display text-2xl font-semibold text-teal-deep">$275</p>
          <p className="text-[0.65rem] text-muted">3 recurring bills</p>
          <ul className="mt-3 space-y-2">
            {bills.map((b) => (
              <li key={b.name} className="flex items-center gap-2.5 rounded-xl bg-white p-2.5 shadow-sm">
                <span className={clsx('size-7 rounded-lg', b.c)} />
                <span className="flex-1">
                  <span className="block text-[0.72rem] font-semibold text-teal-deep">{b.name}</span>
                  <span className="block text-[0.6rem] text-muted">{b.due}</span>
                </span>
                <span className="text-[0.72rem] font-semibold text-teal-deep">{b.amt}</span>
              </li>
            ))}
          </ul>
          <div className="mt-3 grid grid-cols-4 gap-1.5">
            {[Bell, ScanLine, Calculator, MessageCircle].map((I, i) => (
              <span key={i} className="grid aspect-square place-items-center rounded-xl bg-teal-soft text-teal-deep">
                <I className="size-4" aria-hidden />
              </span>
            ))}
          </div>
          <p className="mt-3 text-center text-[0.55rem] font-semibold uppercase tracking-wider text-muted">Concept preview</p>
        </div>
      </div>
    </div>
  )
}
