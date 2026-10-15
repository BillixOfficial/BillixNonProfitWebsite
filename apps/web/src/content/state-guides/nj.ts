import type { StateGuide } from '../types'

export const nj: StateGuide = {
  code: 'NJ',
  lastReviewed: '2026-10-15',
  intro:
    'New Jersey splits your electric and gas bills into supply and delivery, and you can shop for the supply part while your utility keeps delivering it.[^4] The Board of Public Utilities also runs several bill-help programs and a winter shutoff protection program for eligible households.[^7]',
  regulator: {
    name: 'New Jersey Board of Public Utilities (NJBPU)',
    url: 'https://www.nj.gov/bpu/',
    complaintUrl: 'https://www.nj.gov/bpu/assistance/complaints/',
    text:
      'The New Jersey Board of Public Utilities[^1] oversees the regulated electric, gas, water and wastewater utilities in the state.[^2] **Contact your utility first**; if the issue is not resolved, the BPU\'s Division of Customer Assistance takes complaints about service, shutoffs, payment arrangements, high bills, deposits and rates.[^3] Call (800) 624-0241 or file online; online complaints are processed during business hours, so call for a shutoff or anything urgent.[^3] Municipal water systems and municipal utilities authorities are not regulated by the BPU.[^6]',
  },
  electricity: {
    market: 'choice',
    text:
      'Under New Jersey\'s energy deregulation law, the supply part of your bill is open to competition, so you can buy it from a licensed Third Party Supplier.[^4] Your utility still delivers your power and responds to emergencies no matter who supplies it.[^4] If you do not switch, your utility provides Basic Generation Service (BGS), with charges regulated by the BPU.[^5] Be careful with variable-rate contracts: prices can rise sharply in extreme weather, and canceling may carry an **early termination fee**.[^8] See [supply vs. delivery charges](/learn/supply-vs-delivery-charges).',
    shopping: { name: 'NJ Power Switch (NJBPU)', url: 'https://nj.gov/njpowerswitch/' },
  },
  gas: {
    text:
      'Natural gas works the same way: you can buy gas supply from a Third Party Supplier, and your gas utility still delivers it through its pipes.[^4] The BPU lists licensed gas suppliers for the Elizabethtown Gas, New Jersey Natural Gas, PSE&G and South Jersey Gas service areas.[^4]',
    shopping: { name: 'NJ Power Switch (NJBPU)', url: 'https://nj.gov/njpowerswitch/' },
  },
  water: {
    text:
      'The BPU regulates about 30 private, investor-owned water utilities.[^6] It does not regulate municipal water systems or municipal utilities authorities, which together serve a larger part of the state, so if your water comes from your town or a local authority, take rate questions to them.[^6] Residential water and wastewater customers of regulated utilities have the right to a budget billing plan.[^9] See [water and sewer bills](/categories/water-sewer).',
  },
  shutoff: {
    text:
      'Your utility must give you at least 10 days written notice before shutting off service for nonpayment.[^9] Except in a safety emergency, shutoffs can happen only from 8 a.m. to 4 p.m., Monday through Thursday, and not on a state holiday, the day before one, or when a valid medical emergency exists in your household.[^9] The **Winter Termination Program** protects eligible customers, including people who get LIHEAP, USF, SSI, TANF or Lifeline, and those who self-certify they cannot pay because of hardship, from water, wastewater, gas or electric shutoff from November 15 to March 15; call your utility to request it.[^7] You also have the right to at least one deferred payment plan per year.[^9] If you have been disconnected, you can ask for reconnection once a year with proof you applied for an assistance program, after a down payment of up to 25% of the balance.[^7]',
  },
  help: [
    {
      name: 'Low Income Home Energy Assistance Program (LIHEAP)',
      url: 'https://www.nj.gov/dca/dhcr/offices/hea.shtml',
      summary:
        'The Department of Community Affairs runs LIHEAP, which helps with heating costs, medically necessary cooling and emergencies, including deliverable fuels and heater repairs.[^7][^10] Applications are accepted October 1 through June 30 while funds last; apply online or through your local application agency.[^7][^10] For help, call the NJ Utility Assistance hotline at (800) 510-3102.[^7]',
    },
    {
      name: 'Universal Service Fund (USF) and Fresh Start',
      url: 'https://www.nj.gov/bpu/assistance/programs/',
      summary:
        'USF gives income-eligible households monthly credits on electric and gas bills, from $20 up to $200 a month combined.[^7] USF customers with overdue balances of $60 or more are enrolled in Fresh Start, which forgives the old balance over 12 months of on-time payments.[^7] USF uses the same application as LIHEAP.[^7]',
    },
    {
      name: 'Payment Assistance for Gas and Electric (PAGE)',
      url: 'https://www.nj.gov/bpu/assistance/programs/',
      summary:
        'PAGE helps low- to moderate-income households with gas and electric bills; apply for USF first if you qualify.[^7] It is administered by SHARES Nation, Inc. with funding from the New Jersey Department of the Treasury, and depends on available funds.[^7]',
    },
  ],
  consumer: {
    name: 'New Jersey Division of Consumer Affairs',
    url: 'https://www.njconsumeraffairs.gov/Pages/Consumer-Complaints.aspx',
    summary:
      'The Division of Consumer Affairs takes consumer complaints against businesses online or by email.[^11] For a utility bill or shutoff dispute, the BPU\'s Division of Customer Assistance is the right place to start.[^3]',
  },
  rebates: [
    {
      name: 'Comfort Partners (New Jersey\'s Clean Energy Program)',
      url: 'https://cleanenergy.nj.gov/programs/energy-efficiency/comfort-partners',
      summary:
        'Comfort Partners is a free program from the BPU and your electric and gas utilities for income-eligible customers.[^12] It can install measures such as insulation, air sealing, duct sealing, thermostats and refrigerator replacement at no cost, plus energy education.[^12]',
    },
  ],
  sources: [
    { title: 'New Jersey Board of Public Utilities', publisher: 'New Jersey Board of Public Utilities', url: 'https://www.nj.gov/bpu/', accessed: '2026-10-15' },
    { title: 'Water Division', publisher: 'New Jersey Board of Public Utilities', url: 'https://www.nj.gov/bpu/about/divisions/water/', accessed: '2026-10-15' },
    { title: 'Filing Complaints', publisher: 'New Jersey Board of Public Utilities', url: 'https://www.nj.gov/bpu/assistance/complaints/', accessed: '2026-10-15' },
    { title: 'Shop for Energy Suppliers', publisher: 'New Jersey Board of Public Utilities', url: 'https://www.nj.gov/bpu/commercial/shopping.html', accessed: '2026-10-15' },
    { title: 'Basic Generation Service (BGS)', publisher: 'New Jersey Board of Public Utilities', url: 'https://www.nj.gov/bpu/about/divisions/energy/bgs.html', accessed: '2026-10-15' },
    { title: 'Water Tariffs', publisher: 'New Jersey Board of Public Utilities', url: 'https://nj.gov/bpu/about/divisions/water/tariffs_water.html', accessed: '2026-10-15' },
    { title: 'Utility Assistance Programs', publisher: 'New Jersey Board of Public Utilities', url: 'https://www.nj.gov/bpu/assistance/programs/', accessed: '2026-10-15' },
    { title: 'Variable Rates - Third Party Suppliers', publisher: 'New Jersey Board of Public Utilities', url: 'https://www.nj.gov/bpu/assistance/complaints/tpsvariablerates.shtml', accessed: '2026-10-15' },
    { title: 'Utility Customer Bill of Rights', publisher: 'New Jersey Board of Public Utilities', url: 'https://nj.gov/bpu/assistance/rights/', accessed: '2026-10-15' },
    { title: 'Low Income Home Energy Assistance (LIHEAP)', publisher: 'New Jersey Department of Community Affairs', url: 'https://www.nj.gov/dca/dhcr/offices/hea.shtml', accessed: '2026-10-15' },
    { title: 'To File a Complaint', publisher: 'New Jersey Division of Consumer Affairs', url: 'https://www.njconsumeraffairs.gov/Pages/Consumer-Complaints.aspx', accessed: '2026-10-15' },
    { title: 'Comfort Partners', publisher: 'New Jersey\'s Clean Energy Program (NJBPU)', url: 'https://cleanenergy.nj.gov/programs/energy-efficiency/comfort-partners', accessed: '2026-10-15' },
  ],
}
