import type { Source, StateCode } from './types'

/**
 * Average residential electricity price by state, in cents per kWh, from EIA's
 * Electric Power Monthly Table 5.6.A. Preliminary figures; refresh monthly.
 */
export const statePriceSource: Source = {
  title: 'Electric Power Monthly, Table 5.6.A: Average Price of Electricity to Ultimate Customers by End-Use Sector, by State',
  publisher: 'U.S. Energy Information Administration',
  url: 'https://www.eia.gov/electricity/monthly/epm_table_grapher.php?t=epmt_5_6_a',
  accessed: '2026-10-15',
  note: 'Residential sector, July 2026 and July 2025. Preliminary.',
}

export const statePricePeriod = { current: 'July 2026', previous: 'July 2025' }

export const usResidentialPrice = { current: 18.31, previous: 17.45 }

/** [current, previous] cents per kWh. */
export const stateResidentialPrice: Record<StateCode, [number, number]> = {
  CT: [24.16, 27.6], ME: [32.41, 27.98], MA: [30.49, 30.07], NH: [26.6, 22.79], RI: [28.29, 26.18], VT: [23.75, 22.14],
  NJ: [25.19, 25.32], NY: [29.9, 26.22], PA: [21.72, 19.51],
  IL: [19.22, 17.22], IN: [16.73, 16.18], MI: [23.05, 20.55], OH: [19.45, 17.38], WI: [19.06, 18.25],
  IA: [15.99, 15.31], KS: [15.27, 14.46], MN: [17.45, 16.92], MO: [16.09, 15.56], NE: [13.78, 12.84], ND: [13.41, 13.31], SD: [15.37, 14.52],
  DE: [18.48, 16.58], DC: [25.21, 23.04], FL: [15.03, 15.11], GA: [16.27, 15.56], MD: [21.41, 18.83], NC: [15.16, 13.37], SC: [15.47, 14.7], VA: [17.55, 15.78], WV: [15.78, 15.43],
  AL: [16.4, 15.93], KY: [13.81, 13.13], MS: [14.54, 13.58], TN: [13.71, 13.21],
  AR: [14.33, 13.26], LA: [12.72, 13.12], OK: [14.35, 13.52], TX: [15.88, 15.36],
  AZ: [15.38, 15.34], CO: [17, 15.99], ID: [13.73, 12.28], MT: [14.99, 14.27], NV: [12.77, 12.39], NM: [16.09, 15.8], UT: [13.12, 13.45], WY: [14.36, 14.64],
  CA: [33.61, 32.66], OR: [15.97, 15.61], WA: [14.71, 13.45],
  AK: [28.83, 27.3], HI: [48, 39.36],
}
