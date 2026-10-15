import type { StateGuide } from '../types'

export const de: StateGuide = {
  code: 'DE',
  lastReviewed: '2026-10-15',
  intro:
    'If Delmarva Power delivers your electricity, you can buy the supply part of your bill from a third-party supplier, but natural gas customers do not have that option.[^4] Delaware law also limits utility shutoffs on very cold or very hot days and over the winter holidays.[^9]',
  regulator: {
    name: 'Delaware Public Service Commission (PSC)',
    url: 'https://depsc.delaware.gov/',
    complaintUrl: 'https://depsc.delaware.gov/formal-complaint-process/',
    text:
      'The Delaware Public Service Commission regulates public utilities such as electric, natural gas, water, wastewater and telecommunications companies.[^1] Delmarva Power is the only electric distribution company it regulates.[^8] **Contact your utility first.** If you are not satisfied, the Division of the Public Advocate can help you resolve the complaint with the utility; after that, you can file a formal complaint with the PSC, which must name the law, rule or order you believe was broken.[^2][^3]',
  },
  electricity: {
    market: 'choice',
    text:
      'Delaware deregulated electric supply in 1999, and Delmarva Power customers can choose a third-party electric supplier.[^4] You do not have to switch; if you stay, Delmarva buys your supply, and it delivers your power and sends your bill either way, with the supplier\'s charges shown separately.[^4] Questions about a supplier contract or what you owe the supplier go to the supplier.[^4] See [supply vs. delivery charges](/learn/supply-vs-delivery-charges).',
    shopping: null,
  },
  gas: {
    text:
      'Supplier choice in Delaware is for electricity only.[^4] The PSC regulates natural gas distribution: delivery costs are set in rate cases, and the cost of the gas itself is passed through in an annual fuel adjustment, so gas rates typically change at least once a year.[^5] The PSC does not regulate propane prices; ask your propane provider.[^5]',
    shopping: null,
  },
  water: {
    text:
      'For the water utilities under its jurisdiction, such as Artesian, Tidewater and Veolia Water Delaware, the PSC regulates most aspects of water distribution, including the rates they can charge.[^6] It does not regulate water service from municipalities or governmental authorities, so take rate questions to your town or authority.[^6] Drinking water quality is regulated by the Delaware Division of Public Health.[^6] See [water and sewer bills](/categories/water-sewer).',
  },
  shutoff: {
    text:
      'A gas or electric utility cannot shut off a home for nonpayment on a day when the 8 a.m. temperature at an airport in your county is **35 degrees or below**, and an electric utility cannot do so when the forecast heat index may reach **95 degrees or higher**.[^9] Except for safety emergencies, no utility may shut off a home from December 21 to January 1.[^9] During the heating season (November 1 to March 31) and cooling season (June 1 to September 30), gas and electric utilities must give 14 calendar days written notice first; at other times, the law requires at least 72 hours notice.[^9] A signed statement from a licensed physician, physician associate or advanced nurse practitioner that a shutoff would harm an ill occupant stops termination for 120 days, and it can be renewed if you make a good faith effort to pay.[^9] Each utility\'s detailed disconnection rules are in its tariff.[^2]',
  },
  help: [
    {
      name: 'Low Income Home Energy Assistance Program (LIHEAP)',
      url: 'https://dhss.delaware.gov/dss/division-of-social-services/utility-assistance/',
      summary:
        'The Division of Social Services runs LIHEAP with community partners such as Catholic Charities.[^10] Winter Heating Assistance is available October 1 to March 31, Crisis Assistance is available year-round for shutoff notices, low fuel or past-due energy bills, and Summer Cooling Assistance offers a one-time payment toward summer electric costs.[^10] Eligibility is capped at 60% of state median income; apply online through the ASSIST portal or through a partner agency.[^10]',
    },
    {
      name: 'Weatherization Assistance Program (WAP)',
      url: 'https://dnrec.delaware.gov/climate-coastal-energy/energy-office/programs/wap/',
      summary:
        'DNREC\'s free Weatherization Assistance Program helps income-eligible homeowners and renters with an energy assessment and measures such as air sealing, weatherstripping and insulation.[^11] Eligible households are placed on a waiting list based on need and funding.[^11]',
    },
  ],
  consumer: {
    name: 'Delaware Department of Justice Consumer Protection Unit',
    url: 'https://attorneygeneral.delaware.gov/fraud/cpu/',
    summary:
      'The Consumer Protection Unit in the Attorney General\'s office enforces Delaware\'s consumer protection laws and works to protect the public from consumer frauds and scams.[^7] For a dispute with a regulated utility, start with the Division of the Public Advocate.[^3]',
  },
  rebates: [],
  sources: [
    { title: 'About the Public Service Commission', publisher: 'Delaware Public Service Commission', url: 'https://depsc.delaware.gov/public-service-commission/', accessed: '2026-10-15' },
    { title: 'Customer Assistance', publisher: 'Delaware Public Service Commission', url: 'https://depsc.delaware.gov/customer-assistance/', accessed: '2026-10-15' },
    { title: 'Formal Complaint Process', publisher: 'Delaware Public Service Commission', url: 'https://depsc.delaware.gov/formal-complaint-process/', accessed: '2026-10-15' },
    { title: 'Customer Electric Choice', publisher: 'Delaware Public Service Commission', url: 'https://depsc.delaware.gov/customer-electric-choice/', accessed: '2026-10-15' },
    { title: 'Natural Gas Regulation', publisher: 'Delaware Public Service Commission', url: 'https://depsc.delaware.gov/natural-gas-regulation/', accessed: '2026-10-15' },
    { title: 'Water Regulation', publisher: 'Delaware Public Service Commission', url: 'https://depsc.delaware.gov/water-regulation/', accessed: '2026-10-15' },
    { title: 'Consumer Protection Unit', publisher: 'Delaware Department of Justice', url: 'https://attorneygeneral.delaware.gov/fraud/cpu/', accessed: '2026-10-15' },
    { title: 'Division of the Public Advocate', publisher: 'Delaware Division of the Public Advocate', url: 'https://publicadvocate.delaware.gov/', accessed: '2026-10-15' },
    { title: '26 Del. C. § 117, Termination of service or sale to a dwelling unit', publisher: 'Delaware Code (Title 26, Chapter 1)', url: 'https://delcode.delaware.gov/title26/c001/sc01/index.html', accessed: '2026-10-15' },
    { title: 'Utility Assistance (LIHEAP)', publisher: 'Delaware Health and Social Services, Division of Social Services', url: 'https://dhss.delaware.gov/dss/division-of-social-services/utility-assistance/', accessed: '2026-10-15' },
    { title: 'Weatherization Assistance Program', publisher: 'Delaware Department of Natural Resources and Environmental Control (DNREC)', url: 'https://dnrec.delaware.gov/climate-coastal-energy/energy-office/programs/wap/', accessed: '2026-10-15' },
  ],
}
