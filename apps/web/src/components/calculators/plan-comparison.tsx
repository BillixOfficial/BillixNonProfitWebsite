'use client'

import { useState } from 'react'
import { centsToDollars, comparePlans } from '@/lib/calculators/electricity'

const usd = (n: number) => n.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
const parse = (s: string) => (s.trim() === '' ? NaN : Number(s))
const cls = 'w-full rounded-xl border border-line bg-white px-4 py-3 tabular-nums outline-none focus:border-teal focus:ring-2 focus:ring-teal/20'

export function PlanComparison() {
  const [usage, setUsage] = useState('')
  const [plans, setPlans] = useState([
    { name: 'Plan A', rate: '', fee: '' },
    { name: 'Plan B', rate: '', fee: '' },
  ])
  const update = (i: number, k: 'name' | 'rate' | 'fee', v: string) => setPlans((p) => p.map((x, j) => (j === i ? { ...x, [k]: v } : x)))
  const ready = usage.trim() !== '' && plans.every((p) => p.rate.trim() !== '')
  const res = comparePlans(parse(usage), plans.map((p) => ({ name: p.name || 'Plan', rate: centsToDollars(parse(p.rate)), monthlyFee: p.fee.trim() === '' ? 0 : parse(p.fee) })))
  const cheapest = res.ok ? [...res.value.costs].sort((a, b) => a.monthly - b.monthly)[0] : null
  const diff = res.ok ? Math.abs(res.value.costs[0].monthly - res.value.costs[1].monthly) : 0

  return (
    <div className="space-y-8">
      <div className="max-w-xs">
        <label htmlFor="cmp-usage" className="mb-1.5 block font-semibold text-teal-deep">Your monthly usage (kWh)</label>
        <input id="cmp-usage" type="number" min="0" inputMode="decimal" value={usage} onChange={(e) => setUsage(e.target.value)} className={cls} />
        <p className="mt-1.5 text-sm text-muted">Tip: average your last 12 bills, since usage changes by season.</p>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {plans.map((p, i) => (
          <fieldset key={i} className="rounded-[var(--radius-card)] border border-line bg-paper p-5">
            <legend className="sr-only">Plan {i + 1}</legend>
            <label className="block text-sm font-semibold text-teal-deep" htmlFor={`pn-${i}`}>Plan name</label>
            <input id={`pn-${i}`} value={p.name} maxLength={40} onChange={(e) => update(i, 'name', e.target.value)} className={`${cls} mt-1.5`} />
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-semibold text-teal-deep" htmlFor={`pr-${i}`}>Rate (¢/kWh)</label>
                <input id={`pr-${i}`} type="number" min="0" inputMode="decimal" value={p.rate} onChange={(e) => update(i, 'rate', e.target.value)} className={`${cls} mt-1.5`} />
              </div>
              <div>
                <label className="block text-sm font-semibold text-teal-deep" htmlFor={`pf-${i}`}>Monthly fee ($)</label>
                <input id={`pf-${i}`} type="number" min="0" inputMode="decimal" value={p.fee} onChange={(e) => update(i, 'fee', e.target.value)} className={`${cls} mt-1.5`} />
              </div>
            </div>
          </fieldset>
        ))}
      </div>
      <output aria-live="polite" className="block rounded-[var(--radius-panel)] bg-teal-deep p-6 text-cream">
        {!ready ? (
          <p className="text-cream/75">Enter your usage and both plans&rsquo; rates (from the offer or your state&rsquo;s official shopping site) to compare.</p>
        ) : !res.ok ? (
          <ul className="space-y-1 text-gold">{res.errors.map((e) => <li key={e.field}>{e.message}</li>)}</ul>
        ) : (
          <>
            <div className="grid gap-4 sm:grid-cols-2">
              {res.value.costs.map((c) => (
                <div key={c.name} className="rounded-2xl bg-cream/8 p-4">
                  <p className="font-semibold">{c.name}</p>
                  <p className="mt-1 font-display text-3xl font-semibold tabular-nums">{usd(c.monthly)}<span className="text-base text-cream/70"> /mo</span></p>
                  <p className="text-sm text-cream/70">{usd(c.annual)} a year</p>
                </div>
              ))}
            </div>
            <p className="mt-5 text-[0.98rem]">
              {diff < 0.005 ? 'Both plans cost the same at this usage.' : <>At {usage} kWh a month, <strong>{cheapest!.name}</strong> costs {usd(diff)} less per month for the energy portion.</>}
              {res.value.breakEvenKwh !== null && <> The plans cost the same at about <strong>{Math.round(res.value.breakEvenKwh).toLocaleString('en-US')} kWh</strong> a month.</>}
            </p>
          </>
        )}
      </output>
    </div>
  )
}
