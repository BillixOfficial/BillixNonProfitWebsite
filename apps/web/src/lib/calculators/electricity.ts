/**
 * Electricity cost formulas. Pure functions so they can be unit tested and reused
 * by the web calculator, Ask Alice and the mobile app.
 *
 * Units: energy in kWh, power in watts, rates in US dollars per kWh.
 * 1 kWh = 1,000 watts used for 1 hour.
 */

export interface ValidationError {
  field: string
  message: string
}

export type Result<T> = { ok: true; value: T } | { ok: false; errors: ValidationError[] }

const DAYS_PER_YEAR = 365
const AVG_DAYS_PER_MONTH = DAYS_PER_YEAR / 12 // 30.4167

function check(errors: ValidationError[], field: string, value: number, min: number, max: number, label: string) {
  if (!Number.isFinite(value)) errors.push({ field, message: `Enter a number for ${label}.` })
  else if (value < min) errors.push({ field, message: `${label} can’t be less than ${min}.` })
  else if (value > max) errors.push({ field, message: `${label} looks too high (max ${max.toLocaleString('en-US')}).` })
}

/* ---------------- Monthly bill estimate ---------------- */

export interface BillInput {
  /** Electricity used in the billing period, kWh. */
  usageKwh: number
  /** Supply (generation) rate, $/kWh. */
  supplyRate: number
  /** Delivery (distribution + transmission) rate, $/kWh. Use 0 if your bill shows one all-in rate. */
  deliveryRate: number
  /** Fixed monthly customer/service charge, $. */
  fixedCharge: number
  /** Taxes and percentage-based fees, % of the subtotal. */
  taxPercent: number
}

export interface BillResult {
  supplyCost: number
  deliveryCost: number
  fixedCharge: number
  subtotal: number
  taxes: number
  total: number
  /** Total divided by kWh: what each kWh really cost you, all-in. */
  effectiveRate: number
  annualEstimate: number
}

export function validateBill(i: BillInput): ValidationError[] {
  const e: ValidationError[] = []
  check(e, 'usageKwh', i.usageKwh, 0, 100_000, 'Usage')
  check(e, 'supplyRate', i.supplyRate, 0, 5, 'Supply rate')
  check(e, 'deliveryRate', i.deliveryRate, 0, 5, 'Delivery rate')
  check(e, 'fixedCharge', i.fixedCharge, 0, 1_000, 'Fixed charge')
  check(e, 'taxPercent', i.taxPercent, 0, 50, 'Taxes and fees')
  if (e.length === 0 && i.supplyRate + i.deliveryRate === 0 && i.usageKwh > 0)
    e.push({ field: 'supplyRate', message: 'Enter at least one rate. You’ll find it on your bill as cents or dollars per kWh.' })
  return e
}

export function calculateBill(i: BillInput): Result<BillResult> {
  const errors = validateBill(i)
  if (errors.length) return { ok: false, errors }
  const supplyCost = i.usageKwh * i.supplyRate
  const deliveryCost = i.usageKwh * i.deliveryRate
  const subtotal = supplyCost + deliveryCost + i.fixedCharge
  const taxes = subtotal * (i.taxPercent / 100)
  const total = subtotal + taxes
  return {
    ok: true,
    value: {
      supplyCost,
      deliveryCost,
      fixedCharge: i.fixedCharge,
      subtotal,
      taxes,
      total,
      effectiveRate: i.usageKwh > 0 ? total / i.usageKwh : 0,
      annualEstimate: total * 12,
    },
  }
}

/* ---------------- Appliance cost ---------------- */

export interface ApplianceInput {
  /** Power draw while running, watts (from the label, or amps x volts). */
  watts: number
  /** Hours of use per day. */
  hoursPerDay: number
  /** Days used per week. */
  daysPerWeek: number
  /** All-in electricity rate, $/kWh. */
  rate: number
  /** Number of identical units (e.g. 4 bulbs). */
  quantity: number
}

export interface ApplianceResult {
  kwhPerDayOfUse: number
  kwhPerYear: number
  kwhPerMonth: number
  costPerDayOfUse: number
  costPerMonth: number
  costPerYear: number
}

export function validateAppliance(i: ApplianceInput): ValidationError[] {
  const e: ValidationError[] = []
  check(e, 'watts', i.watts, 0, 50_000, 'Wattage')
  check(e, 'hoursPerDay', i.hoursPerDay, 0, 24, 'Hours per day')
  check(e, 'daysPerWeek', i.daysPerWeek, 0, 7, 'Days per week')
  check(e, 'rate', i.rate, 0, 5, 'Rate')
  check(e, 'quantity', i.quantity, 1, 1_000, 'Quantity')
  if (Number.isFinite(i.quantity) && !Number.isInteger(i.quantity)) e.push({ field: 'quantity', message: 'Quantity must be a whole number.' })
  return e
}

export function calculateAppliance(i: ApplianceInput): Result<ApplianceResult> {
  const errors = validateAppliance(i)
  if (errors.length) return { ok: false, errors }
  const kwhPerDayOfUse = (i.watts * i.hoursPerDay * i.quantity) / 1000
  const daysPerYear = (i.daysPerWeek / 7) * DAYS_PER_YEAR
  const kwhPerYear = kwhPerDayOfUse * daysPerYear
  return {
    ok: true,
    value: {
      kwhPerDayOfUse,
      kwhPerYear,
      kwhPerMonth: kwhPerYear / 12,
      costPerDayOfUse: kwhPerDayOfUse * i.rate,
      costPerMonth: (kwhPerYear / 12) * i.rate,
      costPerYear: kwhPerYear * i.rate,
    },
  }
}

/* ---------------- Plan comparison ---------------- */

export interface PlanInput {
  name: string
  /** Energy rate, $/kWh. */
  rate: number
  /** Fixed monthly fee charged by this plan, $. */
  monthlyFee: number
}

export interface PlanCost {
  name: string
  monthly: number
  annual: number
}

export function comparePlans(usageKwh: number, plans: PlanInput[]): Result<{ costs: PlanCost[]; breakEvenKwh: number | null }> {
  const errors: ValidationError[] = []
  check(errors, 'usageKwh', usageKwh, 0, 100_000, 'Monthly usage')
  plans.forEach((p, idx) => {
    check(errors, `plans.${idx}.rate`, p.rate, 0, 5, `Plan ${idx + 1} rate`)
    check(errors, `plans.${idx}.monthlyFee`, p.monthlyFee, 0, 1_000, `Plan ${idx + 1} monthly fee`)
  })
  if (errors.length) return { ok: false, errors }
  const costs = plans.map((p) => {
    const monthly = usageKwh * p.rate + p.monthlyFee
    return { name: p.name, monthly, annual: monthly * 12 }
  })
  // Usage at which two plans cost the same: rateA*u + feeA = rateB*u + feeB
  let breakEvenKwh: number | null = null
  if (plans.length === 2 && plans[0].rate !== plans[1].rate) {
    const u = (plans[1].monthlyFee - plans[0].monthlyFee) / (plans[0].rate - plans[1].rate)
    breakEvenKwh = u > 0 ? u : null
  }
  return { ok: true, value: { costs, breakEvenKwh } }
}

/** Convert a rate shown in cents/kWh to $/kWh. */
export const centsToDollars = (cents: number) => cents / 100

export const AVG_MONTH_DAYS = AVG_DAYS_PER_MONTH
