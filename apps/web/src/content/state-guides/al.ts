import type { StateGuide } from '../types'

export const al: StateGuide = {
  code: 'AL',
  lastReviewed: '2026-10-15',
  intro:
    'Who sets your Alabama utility rates depends on who serves you. The Alabama Public Service Commission oversees Alabama Power and the investor-owned gas companies, but not electric co-ops, city utilities or the Tennessee Valley Authority (TVA), which supplies power to about 1.29 million Alabamians through 25 local power companies.[^1][^3][^4]',
  regulator: {
    name: 'Alabama Public Service Commission (APSC)',
    url: 'https://psc.alabama.gov/',
    complaintUrl: 'https://psc.alabama.gov/file-a-complaint/',
    text:
      'The APSC regulates investor-owned utilities in Alabama, including Alabama Power and the investor-owned natural gas companies.[^3][^6] It does **not** regulate electric cooperatives, most water companies, municipal utilities or the Tennessee Valley Authority, so it cannot resolve complaints about them.[^1] Contact your utility first. If that does not fix the problem, call the APSC consumer hotline or file a complaint online or by mail.[^1][^2]',
  },
  electricity: {
    market: 'regulated',
    text:
      'Alabama Power is the only electric utility whose rates the APSC regulates. Staff review its Rate Stabilization and Equalization (RSE) ratemaking mechanism and other rate issues and make recommendations to the Commission.[^3] Cooperatives and municipal systems are exempt from state regulation, and the APSC does not regulate TVA.[^3] TVA supplies power to about 1.29 million people in Alabama through 25 local power companies.[^4] Federal law lets TVA write resale rate schedules into its power contracts with those local companies, so contact your local power company about its rates.[^5] To understand your bill, see [how to read your electric bill](/learn/how-to-read-your-electric-bill).',
    shopping: null,
  },
  gas: {
    text:
      'The APSC regulates investor-owned natural gas companies, including Spire Alabama and Spire Gulf.[^6] It has no authority over municipal gas systems, membership cooperatives, gas districts or propane systems.[^6] If your gas comes from one of those, take questions about rates to that provider. The APSC gas page does not describe any program for buying gas from a separate supplier.[^6]',
    shopping: null,
  },
  water: {
    text:
      'The APSC does not regulate most water companies or municipal utilities.[^1] If a city or local water system serves you, contact that system about its rates and billing. The APSC does approve rates for certain private companies that run decentralized wastewater systems, called Wastewater Management Entities.[^7] See [water and sewer bills](/categories/water-sewer) for how these bills work.',
  },
  shutoff: {
    text:
      'The APSC general rules apply to the electric, gas and water utilities under its jurisdiction.[^13] A bill becomes delinquent 10 days after its due date, and the utility must then give you at least **five days of written notice** before cutting service. You can pay the full delinquent amount any time before the actual disconnection.[^8] Residential electric or natural gas service cannot be cut off for nonpayment on a day when the National Weather Service forecasts 32 degrees Fahrenheit or below for your location.[^8] Service also cannot be cut off for nonpayment after 3:30 p.m. on a day before the utility office will be closed.[^8] Each utility must have tariff rules for cases where a shutoff could threaten life or health, or where age or disability calls for special care, so ask your utility about its medical policy.[^8] Each office must also have someone who can extend a due date or set up installments.[^8] The APSC does not regulate co-ops, city utilities or TVA, so if one of them serves you, ask it for its own shutoff policy.[^1]',
  },
  help: [
    {
      name: 'Low-Income Home Energy Assistance Program (LIHEAP)',
      url: 'https://adeca.alabama.gov/liheap/',
      summary:
        'The Alabama Department of Economic and Community Affairs (ADECA) funds local community action agencies that help low-income households pay heating and cooling costs. Household income must not exceed 150% of the federal poverty level. ADECA does not take applications, so contact the agency for your county using the map on this page.[^9]',
    },
    {
      name: 'Alabama Weatherization Assistance Program',
      url: 'https://adeca.alabama.gov/weatherization/',
      summary:
        'Local agencies in all 67 counties make energy-efficiency improvements to homes of low-income households after an energy audit, with priority for older adults, people with disabilities and families with children. Income must not exceed 200% of the federal poverty level. Apply through the agency serving your county.[^10]',
    },
  ],
  consumer: {
    name: 'Alabama Attorney General Consumer Interest Division',
    url: 'https://www.alabamaag.gov/consumer-complaint/',
    summary:
      'You can file a consumer complaint online, and a Consumer Specialist will review it. Filing a complaint is not a legal action, and the division does not give legal advice.[^11] For a bill or service problem with a regulated utility, start with the APSC.[^1]',
  },
  rebates: [
    {
      name: 'Inflation Reduction Act Home Energy Rebates Program',
      url: 'https://adeca.alabama.gov/ira-rebates/',
      summary:
        'As of October 2026, ADECA is still developing Alabama\'s federal Home Energy Rebates program, and it has not set a date when households can apply. You can email ADECA to be notified of updates.[^12]',
    },
  ],
  sources: [
    { title: 'Consumer Services', publisher: 'Alabama Public Service Commission', url: 'https://psc.alabama.gov/consumers/', accessed: '2026-10-15' },
    { title: 'File a Complaint', publisher: 'Alabama Public Service Commission', url: 'https://psc.alabama.gov/file-a-complaint/', accessed: '2026-10-15' },
    { title: 'Electricity Policy Division', publisher: 'Alabama Public Service Commission', url: 'https://psc.alabama.gov/electricity/', accessed: '2026-10-15' },
    {
      title: 'TVA in Alabama (FY 2025 fact sheet)',
      publisher: 'Tennessee Valley Authority',
      url: 'https://tva-azr-eastus-cdn-ep-tvawcm-prd.azureedge.net/cdn-tvawcma/docs/default-source/about-tva/fact-sheets/state-fact-sheets-fy25/alabama-fact-sheet-fy25.pdf?sfvrsn=5775b4a5_1',
      accessed: '2026-10-15',
      note: 'Linked from tva.com/about-tva.',
    },
    {
      title: '16 U.S. Code § 831i (TVA Act, sale of power)',
      publisher: 'Legal Information Institute, Cornell Law School (text of federal statute)',
      url: 'https://www.law.cornell.edu/uscode/text/16/831i',
      accessed: '2026-10-15',
    },
    { title: 'Natural Gas Section', publisher: 'Alabama Public Service Commission', url: 'https://psc.alabama.gov/gas/', accessed: '2026-10-15' },
    { title: 'Water and Wastewater Management', publisher: 'Alabama Public Service Commission', url: 'https://psc.alabama.gov/water/', accessed: '2026-10-15' },
    {
      title: 'Ala. Admin. Code r. 770-X-1-.12, Collection of Delinquent Accounts and Discontinuance of Service to Customers for Nonpayment',
      publisher: 'Alabama Legislative Services Agency, Alabama Administrative Code',
      url: 'https://admincode.legislature.state.al.us/api/rule/770-X-1-.12',
      accessed: '2026-10-15',
    },
    { title: 'Low-Income Home Energy Assistance Program (LIHEAP)', publisher: 'Alabama Department of Economic and Community Affairs', url: 'https://adeca.alabama.gov/liheap/', accessed: '2026-10-15' },
    { title: 'Alabama Weatherization Assistance Program', publisher: 'Alabama Department of Economic and Community Affairs', url: 'https://adeca.alabama.gov/weatherization/', accessed: '2026-10-15' },
    { title: 'Consumer Complaint', publisher: 'Alabama Attorney General\'s Office', url: 'https://www.alabamaag.gov/consumer-complaint/', accessed: '2026-10-15' },
    { title: 'Inflation Reduction Act Home Energy Rebates Program', publisher: 'Alabama Department of Economic and Community Affairs', url: 'https://adeca.alabama.gov/ira-rebates/', accessed: '2026-10-15' },
    {
      title: 'Ala. Admin. Code r. 770-X-1-.01, Application of Rules',
      publisher: 'Alabama Legislative Services Agency, Alabama Administrative Code',
      url: 'https://admincode.legislature.state.al.us/api/rule/770-X-1-.01',
      accessed: '2026-10-15',
    },
  ],
}
