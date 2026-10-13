'use client'

import { useState } from 'react'
import Link from 'next/link'
import { calculateBill } from '@/lib/calculators/electricity'

const usd = (n: number, d = 2) => n.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: d, maximumFractionDigits: d })

function Slider({ id, label, value, min, max, step, onChange, format }: { id: string; label: string; value: number; min: number; max: number; step: number; onChange: (n: number) => void; format: (n: number) => string }) {
  const pct = ((value - min) / (max - min)) * 100
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <label htmlFor={id} className="font-semibold text-teal-deep">{label}</label>
        <output htmlFor={id} className="font-display text-xl font-bold tabular-nums text-teal-deep">{format(value)}</output>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-3 h-2 w-full cursor-pointer appearance-none rounded-full accent-teal [&::-webkit-slider-thumb]:size-6 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-4 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:bg-teal [&::-webkit-slider-thumb]:shadow-md"
        style={{ background: `linear-gradient(to right, var(--color-teal) ${pct}%, var(--color-sand) ${pct}%)` }}
      />
    </div>
  )
}

/** Live mini-calculator. Values are whatever the visitor sets; nothing is presented as a real rate. */
export function QuickEstimate() {
  const [kwh, setKwh] = useState(700)
  const [rate, setRate] = useState(18)
  const [fixed, setFixed] = useState(12)
  const r = calculateBill({ usageKwh: kwh, supplyRate: rate / 100, deliveryRate: 0, fixedCharge: fixed, taxPercent: 0 })
  const total = r.ok ? r.value.total : 0

  return (
    <div className="grid gap-8 rounded-[var(--radius-panel)] bg-paper p-6 ring-1 ring-line sm:p-9 md:grid-cols-[1.2fr_1fr]">
      <div className="space-y-7">
        <Slider id="qe-kwh" label="Electricity used" value={kwh} min={100} max={2500} step={25} onChange={setKwh} format={(n) => `${n.toLocaleString('en-US')} kWh`} />
        <Slider id="qe-rate" label="All-in rate" value={rate} min={5} max={45} step={0.5} onChange={setRate} format={(n) => `${n.toFixed(1)}¢/kWh`} />
        <Slider id="qe-fixed" label="Fixed monthly charge" value={fixed} min={0} max={50} step={1} onChange={setFixed} format={(n) => usd(n, 0)} />
        <p className="text-sm text-muted">Starting values are just a demo. Drag them to match the numbers on your own bill.</p>
      </div>
      <div className="flex flex-col justify-between rounded-2xl bg-mist p-6">
        <div>
          <p className="text-sm font-bold text-teal-ink">Estimated monthly bill</p>
          <p className="mt-1 font-display text-6xl font-extrabold tabular-nums tracking-tight text-teal-deep">{usd(total, 0)}</p>
          <p className="mt-2 text-muted">{usd(total * 12, 0)} a year at this usage</p>
          <div className="mt-6 h-3 overflow-hidden rounded-full bg-sand" aria-hidden>
            <div className="h-full rounded-full bg-gold transition-[width] duration-300" style={{ width: `${Math.min(100, (fixed / Math.max(total, 1)) * 100)}%` }} />
          </div>
          <p className="mt-2 text-sm text-muted">Fixed charge is <strong className="text-teal-deep">{total ? Math.round((fixed / total) * 100) : 0}%</strong> of this bill</p>
        </div>
        <Link href="/tools/electricity-cost" className="mt-8 inline-flex items-center justify-center rounded-full bg-teal px-5 py-3 font-semibold text-white hover:bg-[#256a63]">Open the full calculator</Link>
      </div>
    </div>
  )
}
