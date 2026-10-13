import { describe, expect, it } from 'vitest'
import { calculateAppliance, calculateBill, comparePlans } from '@/lib/calculators/electricity'

describe('calculateBill', () => {
  it('adds supply, delivery, fixed charge and taxes', () => {
    const r = calculateBill({ usageKwh: 600, supplyRate: 0.12, deliveryRate: 0.1, fixedCharge: 15, taxPercent: 5 })
    expect(r.ok).toBe(true)
    if (!r.ok) return
    expect(r.value.supplyCost).toBeCloseTo(72)
    expect(r.value.deliveryCost).toBeCloseTo(60)
    expect(r.value.subtotal).toBeCloseTo(147)
    expect(r.value.taxes).toBeCloseTo(7.35)
    expect(r.value.total).toBeCloseTo(154.35)
    expect(r.value.effectiveRate).toBeCloseTo(154.35 / 600)
    expect(r.value.annualEstimate).toBeCloseTo(154.35 * 12)
  })

  it('handles zero usage without dividing by zero', () => {
    const r = calculateBill({ usageKwh: 0, supplyRate: 0.12, deliveryRate: 0, fixedCharge: 10, taxPercent: 0 })
    expect(r.ok && r.value.total).toBe(10)
    expect(r.ok && r.value.effectiveRate).toBe(0)
  })

  it('rejects missing, negative and implausible inputs', () => {
    const r = calculateBill({ usageKwh: NaN, supplyRate: -1, deliveryRate: 9, fixedCharge: 0, taxPercent: 0 })
    expect(r.ok).toBe(false)
    if (r.ok) return
    expect(r.errors.map((e) => e.field).sort()).toEqual(['deliveryRate', 'supplyRate', 'usageKwh'])
  })

  it('requires at least one rate when there is usage', () => {
    const r = calculateBill({ usageKwh: 500, supplyRate: 0, deliveryRate: 0, fixedCharge: 0, taxPercent: 0 })
    expect(r.ok).toBe(false)
  })
})

describe('calculateAppliance', () => {
  it('computes kWh and cost for daily use', () => {
    // 1,000 W for 1 h/day, every day, at $0.20/kWh = 1 kWh/day = 365 kWh/yr = $73/yr
    const r = calculateAppliance({ watts: 1000, hoursPerDay: 1, daysPerWeek: 7, rate: 0.2, quantity: 1 })
    expect(r.ok).toBe(true)
    if (!r.ok) return
    expect(r.value.kwhPerDayOfUse).toBeCloseTo(1)
    expect(r.value.kwhPerYear).toBeCloseTo(365)
    expect(r.value.costPerYear).toBeCloseTo(73)
    expect(r.value.costPerMonth).toBeCloseTo(73 / 12)
  })

  it('scales by quantity and days per week', () => {
    const r = calculateAppliance({ watts: 10, hoursPerDay: 5, daysPerWeek: 3.5, rate: 0.15, quantity: 4 })
    expect(r.ok && r.value.kwhPerDayOfUse).toBeCloseTo(0.2)
    expect(r.ok && r.value.kwhPerYear).toBeCloseTo(0.2 * 182.5)
  })

  it('rejects more than 24 hours a day and fractional quantities', () => {
    const r = calculateAppliance({ watts: 100, hoursPerDay: 25, daysPerWeek: 7, rate: 0.1, quantity: 1.5 })
    expect(r.ok).toBe(false)
    if (r.ok) return
    expect(r.errors.map((e) => e.field)).toEqual(expect.arrayContaining(['hoursPerDay', 'quantity']))
  })
})

describe('comparePlans', () => {
  it('finds the cheaper plan and the break-even usage', () => {
    // A: 10c + $0 fee; B: 8c + $10 fee -> equal at 500 kWh
    const r = comparePlans(800, [
      { name: 'A', rate: 0.1, monthlyFee: 0 },
      { name: 'B', rate: 0.08, monthlyFee: 10 },
    ])
    expect(r.ok).toBe(true)
    if (!r.ok) return
    expect(r.value.costs[0].monthly).toBeCloseTo(80)
    expect(r.value.costs[1].monthly).toBeCloseTo(74)
    expect(r.value.breakEvenKwh).toBeCloseTo(500)
  })

  it('reports no break-even when one plan always wins', () => {
    const r = comparePlans(500, [
      { name: 'A', rate: 0.1, monthlyFee: 0 },
      { name: 'B', rate: 0.12, monthlyFee: 5 },
    ])
    expect(r.ok && r.value.breakEvenKwh).toBeNull()
  })
})
