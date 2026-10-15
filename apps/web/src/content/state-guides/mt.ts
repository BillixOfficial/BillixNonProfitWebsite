import type { StateGuide } from '../types'

export const mt: StateGuide = {
  code: 'MT',
  lastReviewed: '2026-10-15',
  intro:
    'Montana\'s electricity supply market is no longer open to choice, but NorthWestern Energy customers can pick a competitive natural gas supplier.[^2] The Public Service Commission (PSC) sets rates for privately owned electric and gas utilities, while electric co-ops are governed by their own member-elected boards.[^3]',
  regulator: {
    name: 'Montana Public Service Commission (PSC)',
    url: 'https://psc.mt.gov/',
    complaintUrl: 'https://psc.mt.gov/Consumers/Request-Assistance',
    text:
      'The PSC regulates rates and service quality for investor-owned electric, natural gas, water, wastewater, and legacy telephone companies.[^1] It does **not** regulate rural electric cooperatives, municipal water and sewer services, county water and sewer districts, homeowners\' association water systems, or propane dealers.[^1] Contact your utility first. If that does not resolve the problem, ask the PSC\'s Consumer Assistance Program for help online or at (800) 646-6150.[^4]',
  },
  electricity: {
    market: 'regulated',
    text:
      'According to the PSC, the electricity supply market in Montana is no longer open to choice.[^2] The PSC sets the rates that privately owned electric utilities may charge, but it has no authority over electric co-ops.[^3] On a regulated bill, delivery charges need PSC approval, while supply charges can change monthly with market prices and are reviewed by the PSC each year in a "true-up" docket.[^2] See [supply vs. delivery charges](/learn/supply-vs-delivery-charges) for how the two parts of your bill differ.',
    shopping: null,
  },
  gas: {
    text:
      'NorthWestern Energy and NorthWestern Energy-Great Falls customers can choose their natural gas supplier; call the PSC at 1-800-646-6150 for a list of licensed suppliers.[^2] Your local utility still delivers the gas, and you may get two bills, one from the supplier and one from the utility, unless they have a billing agreement.[^2] The PSC licenses competitive gas suppliers but does **not** regulate their rates, so compare offers carefully.[^3]',
    shopping: null,
  },
  water: {
    text:
      'The PSC regulates privately owned water and sewer companies, setting their rates and taking service quality complaints.[^3] City and county water or sewer districts, municipal systems, and homeowners\' association systems are outside PSC jurisdiction, so their rates are set locally.[^1][^3]',
  },
  shutoff: {
    text:
      'From November 1 to April 1, PSC-regulated utilities may not disconnect you if they have been told that someone in the household is handicapped or 62 or older, or that the account holder is on public assistance or has income at or below the federal poverty guideline.[^2] If a licensed health care professional certifies that losing service would aggravate a medical condition that threatens the health of a permanent resident, the account is noted for 6 months and extra steps are required before any shutoff, though service can eventually be cut off if required payments are not made.[^2] Utilities not regulated by the PSC, such as co-ops, set their own shutoff policies.[^2]',
  },
  help: [
    {
      name: 'Low Income Home Energy Assistance Program (LIHEAP)',
      url: 'https://dphhs.mt.gov/hcsd/energyassistance/',
      summary:
        'Run by the Montana Department of Public Health and Human Services (DPHHS). It pays part of winter energy bills and may help with furnace emergencies. Apply during the heating season, October 1 through April 30, through your local eligibility office. Homeowners and renters may apply, and households on SNAP, SSI, or TANF may qualify automatically.[^5]',
    },
    {
      name: 'Weatherization Assistance',
      url: 'https://dphhs.mt.gov/hcsd/energyassistance/',
      summary:
        'A DPHHS program that helps improve the heating efficiency of your home to cut energy use. You can apply any time of year, and income and resource limits apply.[^5]',
    },
    {
      name: 'Human Resource Development Council (HRDC) bill help',
      url: 'https://psc.mt.gov/Consumers/HowDoI/HowDoIUtilityHelp',
      summary:
        'The PSC directs customers who need help paying a bill to their local HRDC office, which checks eligibility for LIHEAP or Energy Share and refers you to other local help. You can also call 211.[^6]',
    },
  ],
  consumer: {
    name: 'Montana Department of Justice, Office of Consumer Protection',
    url: 'https://dojmt.gov/office-of-consumer-protection/',
    summary:
      'Enforces the Consumer Protection Act, investigates deceptive trade practices, posts scam alerts, and accepts consumer complaints online.[^7]',
  },
  rebates: [
    {
      name: 'Montana Home Energy Rebates Program',
      url: 'https://deq.mt.gov/energy/Programs/efficiency',
      summary:
        'As of October 2026, the Montana Department of Environmental Quality\'s federally funded HOMES and home electrification rebates are **not available**; the program cannot launch until the U.S. Department of Energy approves the state\'s application.[^8]',
    },
  ],
  sources: [
    { title: 'What We Do', publisher: 'Montana Public Service Commission', url: 'https://psc.mt.gov/About-Us/What-We-Do', accessed: '2026-10-15' },
    { title: 'Frequently Asked Questions', publisher: 'Montana Public Service Commission', url: 'https://psc.mt.gov/Consumers/FAQ', accessed: '2026-10-15' },
    { title: 'Consumer Information', publisher: 'Montana Public Service Commission', url: 'https://psc.mt.gov/Consumers/Consumer-Information/index', accessed: '2026-10-15' },
    { title: 'Request Assistance', publisher: 'Montana Public Service Commission', url: 'https://psc.mt.gov/Consumers/Request-Assistance', accessed: '2026-10-15' },
    { title: 'Home Energy, Water and Weatherization Assistance Programs', publisher: 'Montana Department of Public Health and Human Services', url: 'https://dphhs.mt.gov/hcsd/energyassistance/', accessed: '2026-10-15' },
    { title: 'How Do I Get Help Paying My Utility Bill', publisher: 'Montana Public Service Commission', url: 'https://psc.mt.gov/Consumers/HowDoI/HowDoIUtilityHelp', accessed: '2026-10-15' },
    { title: 'Office of Consumer Protection', publisher: 'Montana Department of Justice', url: 'https://dojmt.gov/office-of-consumer-protection/', accessed: '2026-10-15' },
    { title: 'Home Energy Rebates Program', publisher: 'Montana Department of Environmental Quality', url: 'https://deq.mt.gov/energy/Programs/efficiency', accessed: '2026-10-15' },
  ],
}
