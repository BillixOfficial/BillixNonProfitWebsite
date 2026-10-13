'use client'

import { useEffect, useState } from 'react'
import { clsx } from 'clsx'
import { calculateAppliance, calculateBill, centsToDollars, type ValidationError } from '@/lib/calculators/electricity'

const usd = (n: number, digits = 2) => n.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: digits, maximumFractionDigits: digits })
const num = (n: number, digits = 1) => n.toLocaleString('en-US', { maximumFractionDigits: digits })

/** Parse a text field; empty string stays "missing" so we never invent a value. */
const parse = (s: string) => (s.trim() === '' ? NaN : Number(s.replace(/[,$\s]/g, '')))

function NumField({ id, label, unit, value, onChange, hint, error, step = 'any' }: { id: string; label: string; unit: string; value: string; onChange: (v: string) => void; hint?: string; error?: string; step?: string }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-[0.9rem] font-semibold text-teal-deep">{label}</label>
      <div className={clsx('flex items-center overflow-hidden rounded-xl border bg-white focus-within:ring-2 focus-within:ring-teal/20', error ? 'border-danger' : 'border-line focus-within:border-teal')}>
        <input id={id} inputMode="decimal" type="number" step={step} min="0" value={value} onChange={(e) => onChange(e.target.value)} aria-invalid={!!error} aria-describedby={`${id}-desc`} className="min-w-0 flex-1 bg-transparent px-4 py-3 text-[1rem] tabular-nums outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none" />
        <span className="shrink-0 border-l border-line bg-paper px-3 py-3 text-sm text-muted">{unit}</span>
      </div>
      <p id={`${id}-desc`} className={clsx('mt-1.5 text-sm', error ? 'font-medium text-danger' : 'text-muted')}>{error ?? hint}</p>
    </div>
  )
}

const errFor = (errors: ValidationError[], field: string) => errors.find((e) => e.field === field)?.message

function BillEstimator() {
  const [usage, setUsage] = useState('')
  const [supply, setSupply] = useState('')
  const [delivery, setDelivery] = useState('')
  const [fixed, setFixed] = useState('')
  const [tax, setTax] = useState('')
  const [touched, setTouched] = useState(false)

  const input = { usageKwh: parse(usage), supplyRate: centsToDollars(parse(supply)), deliveryRate: delivery.trim() === '' ? 0 : centsToDollars(parse(delivery)), fixedCharge: fixed.trim() === '' ? 0 : parse(fixed), taxPercent: tax.trim() === '' ? 0 : parse(tax) }
  const result = calculateBill(input)
  const ready = usage.trim() !== '' && supply.trim() !== ''
  const errors = !result.ok && (touched || ready) ? result.errors : []

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_22rem]">
      <form className="grid gap-5 sm:grid-cols-2" onSubmit={(e) => e.preventDefault()} onBlur={() => setTouched(true)} aria-label="Electric bill estimate">
        <NumField id="usage" label="Electricity used" unit="kWh" value={usage} onChange={setUsage} hint="On your bill as kWh used this period." error={errFor(errors, 'usageKwh')} />
        <NumField id="supply" label="Supply (energy) rate" unit="¢/kWh" value={supply} onChange={setSupply} hint="If your bill shows one all-in rate, enter it here." error={errFor(errors, 'supplyRate')} />
        <NumField id="delivery" label="Delivery rate" unit="¢/kWh" value={delivery} onChange={setDelivery} hint="Distribution + transmission. Leave blank if included above." error={errFor(errors, 'deliveryRate')} />
        <NumField id="fixed" label="Fixed monthly charge" unit="$" value={fixed} onChange={setFixed} hint="Customer or service charge. Blank = $0." error={errFor(errors, 'fixedCharge')} />
        <NumField id="tax" label="Taxes and percentage fees" unit="%" value={tax} onChange={setTax} hint="Optional. Blank = 0%." error={errFor(errors, 'taxPercent')} />
      </form>
      <output htmlFor="usage supply delivery fixed tax" aria-live="polite" className="block rounded-[var(--radius-panel)] bg-teal-deep p-6 text-cream">
        <p className="eyebrow text-gold">Estimated bill</p>
        {result.ok && ready ? (
          <>
            <p className="mt-2 font-display text-5xl font-semibold tabular-nums">{usd(result.value.total)}</p>
            <p className="mt-1 text-sm text-cream/70">About {usd(result.value.annualEstimate, 0)} a year at this usage</p>
            <dl className="mt-6 space-y-2.5 text-[0.95rem]">
              {[
                ['Supply', result.value.supplyCost],
                ['Delivery', result.value.deliveryCost],
                ['Fixed charge', result.value.fixedCharge],
                ['Taxes & fees', result.value.taxes],
              ].map(([k, v]) => (
                <div key={k as string} className="flex justify-between border-b border-cream/10 pb-2"><dt className="text-cream/75">{k}</dt><dd className="font-semibold tabular-nums">{usd(v as number)}</dd></div>
              ))}
              <div className="flex justify-between pt-1"><dt className="text-cream/75">All-in cost per kWh</dt><dd className="font-semibold tabular-nums">{num(result.value.effectiveRate * 100, 2)}¢</dd></div>
            </dl>
          </>
        ) : (
          <p className="mt-3 text-cream/75">Enter your usage and rate from your bill to see an estimate. We don&rsquo;t fill in rates for you, because they vary a lot by utility, plan and season.</p>
        )}
      </output>
    </div>
  )
}

function ApplianceEstimator() {
  const [watts, setWatts] = useState('')
  const [hours, setHours] = useState('')
  const [days, setDays] = useState('7')
  const [qty, setQty] = useState('1')
  const [rate, setRate] = useState('')

  const input = { watts: parse(watts), hoursPerDay: parse(hours), daysPerWeek: parse(days), quantity: parse(qty), rate: centsToDollars(parse(rate)) }
  const result = calculateAppliance(input)
  const ready = [watts, hours, days, qty, rate].every((s) => s.trim() !== '')
  const errors = !result.ok && ready ? result.errors : []

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_22rem]">
      <form className="grid gap-5 sm:grid-cols-2" onSubmit={(e) => e.preventDefault()} aria-label="Appliance cost estimate">
        <NumField id="watts" label="Power draw" unit="watts" value={watts} onChange={setWatts} hint="On the label or manual. Amps × volts also works." error={errFor(errors, 'watts')} />
        <NumField id="hours" label="Hours used per day" unit="hours" value={hours} onChange={setHours} error={errFor(errors, 'hoursPerDay')} />
        <NumField id="days" label="Days used per week" unit="days" value={days} onChange={setDays} error={errFor(errors, 'daysPerWeek')} step="1" />
        <NumField id="qty" label="How many" unit="units" value={qty} onChange={setQty} error={errFor(errors, 'quantity')} step="1" />
        <NumField id="rate" label="Your electricity rate" unit="¢/kWh" value={rate} onChange={setRate} hint="Use your all-in rate: bill total ÷ kWh × 100." error={errFor(errors, 'rate')} />
      </form>
      <output aria-live="polite" className="block rounded-[var(--radius-panel)] bg-teal-deep p-6 text-cream">
        <p className="eyebrow text-gold">Estimated running cost</p>
        {result.ok && ready ? (
          <>
            <p className="mt-2 font-display text-5xl font-semibold tabular-nums">{usd(result.value.costPerMonth)}<span className="text-xl text-cream/70"> /mo</span></p>
            <dl className="mt-6 space-y-2.5 text-[0.95rem]">
              <div className="flex justify-between border-b border-cream/10 pb-2"><dt className="text-cream/75">Per day of use</dt><dd className="font-semibold tabular-nums">{usd(result.value.costPerDayOfUse)}</dd></div>
              <div className="flex justify-between border-b border-cream/10 pb-2"><dt className="text-cream/75">Per year</dt><dd className="font-semibold tabular-nums">{usd(result.value.costPerYear)}</dd></div>
              <div className="flex justify-between border-b border-cream/10 pb-2"><dt className="text-cream/75">Energy per month</dt><dd className="font-semibold tabular-nums">{num(result.value.kwhPerMonth)} kWh</dd></div>
              <div className="flex justify-between"><dt className="text-cream/75">Energy per year</dt><dd className="font-semibold tabular-nums">{num(result.value.kwhPerYear, 0)} kWh</dd></div>
            </dl>
          </>
        ) : (
          <p className="mt-3 text-cream/75">Fill in all five fields to see the cost.</p>
        )}
      </output>
    </div>
  )
}

export function ElectricityCalculator() {
  const [tab, setTab] = useState<'bill' | 'appliance'>('bill')
  useEffect(() => {
    // Deep link: /tools/electricity-cost#appliance opens the appliance tab.
    if (window.location.hash === '#appliance') setTab('appliance') // eslint-disable-line react-hooks/set-state-in-effect
  }, [])
  return (
    <div id="appliance">
      <div role="tablist" aria-label="Calculator mode" className="inline-flex rounded-full border border-line bg-paper p-1">
        {([['bill', 'Monthly bill'], ['appliance', 'One appliance']] as const).map(([id, label]) => (
          <button key={id} id={`tab-${id}`} role="tab" type="button" aria-selected={tab === id} aria-controls={`panel-${id}`} onClick={() => setTab(id)} className={clsx('rounded-full px-5 py-2 text-sm font-semibold transition-colors', tab === id ? 'bg-teal text-white' : 'text-teal-deep hover:bg-white')}>
            {label}
          </button>
        ))}
      </div>
      <div id="panel-bill" role="tabpanel" aria-labelledby="tab-bill" hidden={tab !== 'bill'} className="mt-8"><BillEstimator /></div>
      <div id="panel-appliance" role="tabpanel" aria-labelledby="tab-appliance" hidden={tab !== 'appliance'} className="mt-8"><ApplianceEstimator /></div>
    </div>
  )
}
