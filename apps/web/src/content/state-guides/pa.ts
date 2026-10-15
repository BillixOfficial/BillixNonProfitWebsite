import type { StateGuide } from '../types'

export const pa: StateGuide = {
  code: 'PA',
  lastReviewed: '2026-10-15',
  intro:
    'In Pennsylvania you can choose who supplies your electricity while your local utility keeps delivering it, and the state runs official sites for comparing both electric and natural gas offers.[^5][^6] The Public Utility Commission also enforces winter and medical shutoff protections for customers of the utilities it regulates.[^3]',
  regulator: {
    name: 'Pennsylvania Public Utility Commission (PUC)',
    url: 'https://www.puc.pa.gov/',
    complaintUrl: 'https://www.puc.pa.gov/complaints/',
    text:
      'The Pennsylvania Public Utility Commission[^1] regulates utilities such as electric, natural gas, water and wastewater companies.[^3][^8] For most problems, **you must contact your utility first**, then file an informal complaint with the PUC, which handles issues like billing, service quality and payment arrangements.[^2] Utilities owned and run by cities, boroughs or townships that operate wholly within their limits are not under the PUC; the PUC lists who to contact instead.[^2] You can reach the PUC at 1-800-692-7380.[^2]',
  },
  electricity: {
    market: 'choice',
    text:
      'You can switch the company that generates your electricity, while the distribution service stays with your local utility.[^5] To compare offers, use the **price to compare**: the price per kilowatt-hour your utility charges for supply, which suppliers will also quote for an apples-to-apples comparison.[^5] Check your contract for early cancellation fees and watch your renewal notices; if you do nothing, a fixed rate may change to a variable rate.[^7] Switching back to your utility\'s default service comes with no cost from the utility.[^7] See [supply vs. delivery charges](/learn/supply-vs-delivery-charges).',
    shopping: { name: 'PAPowerSwitch (PA PUC)', url: 'https://www.papowerswitch.com/' },
  },
  gas: {
    text:
      'The PUC also runs PAGasSwitch, its official site for comparing natural gas supply offers for your home by ZIP code.[^6] As with electricity, you can choose between fixed and variable rates, so read the terms before you switch.[^6]',
    shopping: { name: 'PAGasSwitch (PA PUC)', url: 'https://www.pagasswitch.com/' },
  },
  water: {
    text:
      'The PUC sets rates and service rules for more than 150 water and wastewater utilities, including some municipal ones.[^8] It generally does not regulate water or wastewater authorities, and it has no jurisdiction over a city, borough or township system unless that system serves customers outside its boundaries.[^8] If your water comes from a municipality or authority, ask them about rates. See [water and sewer bills](/categories/water-sewer).',
  },
  shutoff: {
    text:
      'Before a shutoff, your utility must send a 10-day notice and try to contact you at least three days before the disconnection date.[^3] A **winter moratorium** protects customers from termination between December 1 and March 31, but service can still be shut off in winter without PUC approval if your income is above the utility\'s income guidelines or you are not keeping up as a responsible customer.[^3] A medical certificate from a licensed physician, physician assistant or nurse practitioner can stop a shutoff for up to 30 days, with renewals possible, though you still owe your bill.[^3] These protections apply to electric, natural gas, water, steam heat and wastewater utilities.[^3]',
  },
  help: [
    {
      name: 'Low Income Home Energy Assistance Program (LIHEAP)',
      url: 'https://www.pa.gov/services/dhs/apply-for-the-low-income-home-energy-assistance-program-liheap',
      summary:
        'The Department of Human Services gives LIHEAP cash grants that are paid directly to your utility or fuel company, plus crisis grants for heating emergencies such as a shutoff notice or running out of fuel.[^9] Renters and homeowners can both qualify, and you do not need unpaid bills to apply.[^9] As of October 2026, the 2026-2027 season is scheduled to open November 2, 2026; check the page for current dates.[^9]',
    },
    {
      name: 'Customer Assistance Programs (CAP) and other utility programs',
      url: 'https://www.puc.pa.gov/about-the-puc/consumer-education/utility-assistance-programs/',
      summary:
        'Most utilities offer assistance programs, including Customer Assistance Programs (CAPs) that can lower your monthly bill based on household income and may reduce what you already owe.[^4] Ask your utility about CARES referrals, hardship fund grants and the Low Income Usage Reduction Program (LIURP); income limits apply, and each utility names its CAP differently.[^4][^2]',
    },
    {
      name: 'Weatherization Assistance Program (WAP)',
      url: 'https://dced.pa.gov/programs/weatherization-assistance-program-wap/',
      summary:
        'The Department of Community and Economic Development\'s WAP provides energy audits and measures such as insulation for households at or below 200% of the federal poverty level, with priority for older adults, people with disabilities, families with children and high energy users.[^10] Apply through the weatherization agency for your county.[^10]',
    },
  ],
  consumer: {
    name: 'Pennsylvania Office of Attorney General, Bureau of Consumer Protection',
    url: 'https://www.attorneygeneral.gov/submit-a-complaint/',
    summary:
      'If you have a problem with a business or think you were treated unfairly, you can submit a consumer complaint to the Office of Attorney General online or by mail.[^11] The PUC lists the Bureau of Consumer Protection as a contact for some services it does not regulate.[^2]',
  },
  rebates: [
    {
      name: 'Utility energy efficiency programs (PA PUC)',
      url: 'https://www.puc.pa.gov/electricity/energy-efficiency-conservation-savings/',
      summary:
        'The PUC links to the savings, rebates and incentives offered by the major electric utilities, including PECO, PPL, Duquesne Light, the FirstEnergy companies and UGI.[^12]',
    },
  ],
  sources: [
    { title: 'Pennsylvania Public Utility Commission', publisher: 'Pennsylvania Public Utility Commission', url: 'https://www.puc.pa.gov/', accessed: '2026-10-15' },
    { title: 'Complaints', publisher: 'Pennsylvania Public Utility Commission', url: 'https://www.puc.pa.gov/complaints/', accessed: '2026-10-15' },
    { title: 'Protections for Responsible Utility Customers (fact sheet, February 2026)', publisher: 'Pennsylvania Public Utility Commission', url: 'https://www.puc.pa.gov/media/3827/26_protections_for_responsible_utility_customers_020426.pdf', accessed: '2026-10-15' },
    { title: 'Utility Assistance Programs', publisher: 'Pennsylvania Public Utility Commission', url: 'https://www.puc.pa.gov/about-the-puc/consumer-education/utility-assistance-programs/', accessed: '2026-10-15' },
    { title: 'Understanding Your Bill', publisher: 'PAPowerSwitch (Pennsylvania Public Utility Commission)', url: 'https://www.papowerswitch.com/understanding-energy/understanding-your-bill/', accessed: '2026-10-15' },
    { title: 'PAGasSwitch', publisher: 'Pennsylvania Public Utility Commission', url: 'https://www.pagasswitch.com/', accessed: '2026-10-15' },
    { title: 'Understanding Contracts', publisher: 'PAPowerSwitch (Pennsylvania Public Utility Commission)', url: 'https://www.papowerswitch.com/understanding-energy/about-rates-terms/understanding-contracts/', accessed: '2026-10-15' },
    { title: 'Water / Wastewater', publisher: 'Pennsylvania Public Utility Commission', url: 'https://www.puc.pa.gov/water-wastewater/', accessed: '2026-10-15' },
    { title: 'Apply for the Low Income Home Energy Assistance Program (LIHEAP)', publisher: 'Pennsylvania Department of Human Services', url: 'https://www.pa.gov/services/dhs/apply-for-the-low-income-home-energy-assistance-program-liheap', accessed: '2026-10-15' },
    { title: 'Weatherization Assistance Program (WAP)', publisher: 'Pennsylvania Department of Community and Economic Development', url: 'https://dced.pa.gov/programs/weatherization-assistance-program-wap/', accessed: '2026-10-15' },
    { title: 'Submit a Complaint', publisher: 'Pennsylvania Office of Attorney General', url: 'https://www.attorneygeneral.gov/submit-a-complaint/', accessed: '2026-10-15' },
    { title: 'Energy Efficiency, Conservation & Savings', publisher: 'Pennsylvania Public Utility Commission', url: 'https://www.puc.pa.gov/electricity/energy-efficiency-conservation-savings/', accessed: '2026-10-15' },
  ],
}
