import type { StateGuide } from '../types'

export const ok: StateGuide = {
  code: 'OK',
  lastReviewed: '2026-10-15',
  intro:
    'In Oklahoma, the Oklahoma Corporation Commission sets electricity prices for the three investor-owned electric companies that serve much of the state.[^3] Cities, public power authorities and most electric co-ops set their own prices, so who regulates your bill depends on who serves you.[^3]',
  regulator: {
    name: 'Oklahoma Corporation Commission (OCC)',
    url: 'https://oklahoma.gov/occ.html',
    complaintUrl: 'https://oklahoma.gov/occ/complaints/public-utility.html',
    text:
      'The OCC is the state agency that regulates public utilities, along with fuel, oil and gas, and transportation.[^1] It sets prices for investor-owned electric, natural gas and water utilities, but state law keeps it from regulating utilities run by cities or other governments, and most electric co-ops have opted out of its price regulation.[^3][^4][^5] It does not handle internet, cable TV or damage claims.[^2] Start with your utility; if that doesn\'t fix the problem, you can file a complaint with the OCC by phone at 1-800-522-8154, by email or with its online form.[^2]',
  },
  electricity: {
    market: 'regulated',
    text:
      'The OCC sets prices and service reliability rules for three investor-owned electric utilities, Liberty Utilities, Oklahoma Gas and Electric (OG&E) and Public Service Company of Oklahoma, through rate cases.[^3] State law keeps the OCC from regulating utilities run by a government, such as the Grand River Dam Authority or member cities of the Oklahoma Municipal Power Authority.[^3] Most electric co-ops have opted out of OCC price regulation, though the OCC still oversees their service reliability.[^3] See [how to read your electric bill](/learn/how-to-read-your-electric-bill).',
    shopping: null,
  },
  gas: {
    text:
      'The OCC regulates the delivery charges and service reliability of investor-owned natural gas utilities such as Oklahoma Natural Gas and Summit Utilities Oklahoma.[^4] **The gas commodity price itself is not regulated** and follows market conditions, so the gas part of your bill can move with the market.[^4] The OCC has no authority over city-run gas utilities, and propane dealers are regulated by a separate state commission.[^4]',
    shopping: null,
  },
  water: {
    text:
      'The OCC regulates prices and service reliability for investor-owned water utilities.[^5] State law keeps it from regulating water systems run by a city or a rural water district, so contact your city or rural water district about those rates.[^5] The OCC does not regulate storm or sanitary sewers.[^5] See [water and sewer bills](/categories/water-sewer).',
  },
  shutoff: {
    text:
      'For electric utilities the OCC regulates, the utility must mail a first disconnection notice at least 10 days before shutting off a residential customer for nonpayment, and from November 15 through April 15 it must also give a second notice at least 48 hours ahead.[^6] Shutoffs are suspended when the National Weather Service forecasts temperatures below 32°F in the next 24 hours and you heat with electricity, or when the heat index is forecast or measured at 101°F or higher on the day of disconnection and you cool with electricity.[^6] If you have applied for financial assistance, the utility must delay disconnection at least 20 days from the notice, and it must offer a deferred payment agreement before disconnecting if you can\'t pay in full.[^6] **If someone in your home depends on life-sustaining equipment**, tell the utility and return a Medical Certificate signed by a licensed medical doctor or osteopath within 30 days; this pauses disconnection for 30 days, and if the condition requires it the utility can extend it once for another 30 days at your request.[^6]',
  },
  help: [
    {
      name: 'Low-Income Home Energy Assistance Program (LIHEAP)',
      url: 'https://oklahoma.gov/okdhs/services/liheap/utilityservicesliheapmain.html',
      summary:
        'Oklahoma Human Services offers winter heating, summer cooling and Energy Crisis Assistance Program (ECAP) help during set application periods, applied for online at OKDHSLive.org.[^7] Life-threatening crisis help is available year-round for households with someone who needs lifesaving medical equipment or during extreme temperatures; call 405-522-5050 and choose the energy assistance options.[^7]',
    },
    {
      name: 'Weatherization Assistance Program',
      url: 'https://www.okcommerce.gov/weatherization/',
      summary:
        'A no-cost program run by the Oklahoma Department of Commerce through local nonprofits that serve all 77 counties. Low-income renters and owners at or below 200% of the poverty level can apply. The department says some counties have recently been without weatherization services, so check its service-area map for a provider near you.[^8]',
    },
  ],
  consumer: {
    name: 'Oklahoma Attorney General Consumer Protection Unit',
    url: 'https://oklahoma.gov/oag/about/divisions/cpu.html',
    summary:
      'The Consumer Protection Unit mediates consumer complaints and acts against deceptive, fraudulent or unfair business practices. To file, complete its complaint form and email it to the office.[^9]',
  },
  rebates: [],
  sources: [
    { title: 'Oklahoma Corporation Commission home page', publisher: 'Oklahoma Corporation Commission', url: 'https://oklahoma.gov/occ.html', accessed: '2026-10-15' },
    { title: 'Public Utility Complaints', publisher: 'Oklahoma Corporation Commission', url: 'https://oklahoma.gov/occ/complaints/public-utility.html', accessed: '2026-10-15' },
    { title: 'Electric Utility', publisher: 'Oklahoma Corporation Commission', url: 'https://oklahoma.gov/occ/divisions/public-utility/energy/electric-utility.html', accessed: '2026-10-15' },
    { title: 'Gas Utility', publisher: 'Oklahoma Corporation Commission', url: 'https://oklahoma.gov/occ/divisions/public-utility/energy/gas-utility.html', accessed: '2026-10-15' },
    { title: 'Water Utility', publisher: 'Oklahoma Corporation Commission', url: 'https://oklahoma.gov/occ/divisions/public-utility/energy/water-utility.html', accessed: '2026-10-15' },
    { title: 'OAC 165:35, Electric Utility Rules (effective 10-01-2024)', publisher: 'Oklahoma Corporation Commission', url: 'https://oklahoma.gov/content/dam/ok/en/occ/documents/ajls/jls-courts/rules/2024/chapter-35-electric%20utility-rules-copy-with-df-edits-effective-10-01-24.pdf', accessed: '2026-10-15' },
    { title: 'Energy Assistance (LIHEAP)', publisher: 'Oklahoma Human Services', url: 'https://oklahoma.gov/okdhs/services/liheap/utilityservicesliheapmain.html', accessed: '2026-10-15' },
    { title: 'Weatherization Assistance Program', publisher: 'Oklahoma Department of Commerce', url: 'https://www.okcommerce.gov/weatherization/', accessed: '2026-10-15' },
    { title: 'Consumer Protection Unit', publisher: 'Oklahoma Office of the Attorney General', url: 'https://oklahoma.gov/oag/about/divisions/cpu.html', accessed: '2026-10-15' },
  ],
}
