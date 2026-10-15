import type { StateGuide } from '../types'

export const ia: StateGuide = {
  code: 'IA',
  lastReviewed: '2026-10-15',
  intro:
    'Most Iowa homes get electricity from one of two investor-owned utilities, MidAmerican Energy or Interstate Power and Light (Alliant Energy), and the rest are served by 135 municipal utilities and 44 rural electric cooperatives.[^2] Your electric provider is set by where you live, and the Iowa Utilities Commission sets rates only for the investor-owned utilities.[^1][^4]',
  regulator: {
    name: 'Iowa Utilities Commission (IUC)',
    url: 'https://iuc.iowa.gov/',
    complaintUrl: 'https://iuc.iowa.gov/customer-assistance/how-do-i-file-utility-complaint',
    text:
      'The IUC regulates the rates and service of investor-owned electric, natural gas, water and sewer utilities.[^1] It has only limited authority over municipal electric utilities and rural electric cooperatives, covering service, safety and engineering, and it does not regulate propane, cell phone or cable TV service.[^1][^2] If you cannot resolve a problem with your utility, IUC Customer Service can help: file online, email, or call 877-565-4450 on weekdays.[^3] Anything you submit is subject to the Iowa Open Records Act and can be viewed by the public.[^3]',
  },
  electricity: {
    market: 'regulated',
    text:
      'Iowa law gives each electric utility an **exclusive service area**, and the IUC keeps the official map of those areas, so your address determines your provider.[^4] The IUC regulates the rates of the two investor-owned utilities, MidAmerican Energy and Interstate Power and Light, which serve about 73% of Iowa electric customers.[^1][^2] Municipal utilities and rural electric cooperatives set their own rates; the IUC oversees only their service, safety and engineering.[^2] To see what you pay for, read [how to read your electric bill](/learn/how-to-read-your-electric-bill).',
    shopping: null,
  },
  gas: {
    text:
      'The IUC regulates the rates and service of four investor-owned gas utilities: MidAmerican Energy, Interstate Power and Light, Liberty Utilities (Midstates Natural Gas) and Black Hills/Iowa Gas Utility Company (Black Hills Energy).[^1] It has specific authority over municipal gas utilities, and it does not regulate propane.[^1] Companies that sell competitive natural gas service to Iowa customers must first get an IUC certificate.[^5] The state does not run a gas shopping website, so ask your gas utility what supply options apply to your home.',
    shopping: null,
  },
  water: {
    text:
      'The IUC regulates one investor-owned water utility, Iowa-American Water Company, which serves about 213,000 customers.[^1] It does not regulate city-owned waterworks, rural water districts or water utilities with fewer than 2,000 customers.[^1][^6] If you cannot resolve a problem with a city or rural water utility, the IUC says to take it to that utility’s governing body, such as the city council or water board.[^6]',
  },
  shutoff: {
    text:
      'For investor-owned electric and gas utilities, you must get written notice at least 12 days before a shutoff for nonpayment, and the utility must also try to reach you by phone or in person.[^7][^15] Service cannot be shut off if the temperature is forecast to be **20°F or colder** in the next 24 hours, and households certified for energy assistance cannot be disconnected from **November 1 through April 1**.[^7][^8] A written statement from a doctor or public health official that a shutoff would be especially dangerous to someone’s health delays disconnection for 30 days.[^7] You can also ask for a payment plan; your first plan should spread the past-due amount evenly over at least 12 months.[^7] Shutoffs can happen only from 6 a.m. to 2 p.m. on weekdays, never on weekends or holidays.[^7]',
  },
  help: [
    {
      name: 'Low-Income Home Energy Assistance Program (LIHEAP)',
      url: 'https://hhs.iowa.gov/assistance-programs/housing-rent-assistance/low-income-home-energy-assistance',
      summary:
        'Run by Iowa Health and Human Services, LIHEAP pays part of your winter heating costs if your household income is at or below 200% of the federal poverty guidelines.[^9] Households with someone 60 or older or with a disability can apply starting October 1; everyone else can apply from November 1 through April 30, at your local community action agency.[^9]',
    },
    {
      name: 'Weatherization Assistance Program',
      url: 'https://hhs.iowa.gov/assistance-programs/housing-rent-assistance/weatherization-assistance',
      summary:
        'This federally funded program makes low-income homes more energy efficient, for example with insulation and by reducing air leaks, and includes safety checks of all combustion (fuel-burning) appliances.[^10] Apply through your local community action agency.[^10]',
    },
  ],
  consumer: {
    name: 'Iowa Attorney General Consumer Protection Division',
    url: 'https://www.iowaattorneygeneral.gov/for-consumers',
    summary:
      'The Consumer Protection Division takes complaints about scams and unfair business practices.[^11] The Attorney General’s Office of Consumer Advocate represents utility customers in cases before the IUC, including rate cases; call 515-725-7200.[^12]',
  },
  rebates: [
    {
      name: 'Utility energy efficiency programs (IUC)',
      url: 'https://iuc.iowa.gov/regulated-industries/energy-efficiency-programs',
      summary:
        'The IUC approves the energy efficiency plans of investor-owned utilities, which often offer rebates or loans for efficient equipment.[^13] Check your utility’s website for current programs; the IUC page links to each one.[^13]',
    },
    {
      name: 'Residential Energy Efficiency and Electrification Programs (Iowa Energy Office)',
      url: 'https://opportunityiowa.gov/community/energy/grants-funding/residential-energy-efficiency-programs',
      summary:
        'This is Iowa’s page for the federal Home Energy Rebates (HOMES and HEEHRA). As of October 2026, the state’s page says these rebates are not yet available and offers an email sign-up for updates.[^14]',
    },
  ],
  sources: [
    { title: 'Jurisdiction & Regulatory Authority of the Iowa Utilities Commission', publisher: 'Iowa Utilities Commission', url: 'https://iuc.iowa.gov/about/iuc-jurisdiction', accessed: '2026-10-15' },
    { title: "Iowa's Electric Profile", publisher: 'Iowa Utilities Commission', url: 'https://iuc.iowa.gov/regulated-industries/electric/iowas-electric-profile', accessed: '2026-10-15' },
    { title: 'How Do I File a Utility Complaint?', publisher: 'Iowa Utilities Commission', url: 'https://iuc.iowa.gov/customer-assistance/how-do-i-file-utility-complaint', accessed: '2026-10-15' },
    { title: 'Electric Service Area Boundary Map', publisher: 'Iowa Utilities Commission', url: 'https://iuc.iowa.gov/regulated-industries/electric/electric-service-area-boundary-map', accessed: '2026-10-15' },
    { title: 'Certified Natural Gas Providers', publisher: 'Iowa Utilities Commission', url: 'https://iuc.iowa.gov/regulated-industries/pipelines/certified-natural-gas-providers', accessed: '2026-10-15' },
    { title: 'Water', publisher: 'Iowa Utilities Commission', url: 'https://iuc.iowa.gov/regulated-industries/water', accessed: '2026-10-15' },
    { title: 'Customer Rights and Responsibilities to Avoid Shutoff of Electric Service for Nonpayment', publisher: 'Iowa Utilities Commission', url: 'https://iuc.iowa.gov/media/1593/download?inline', accessed: '2026-10-15' },
    { title: 'How Do I Apply for Energy Assistance (LIHEAP)?', publisher: 'Iowa Utilities Commission', url: 'https://iuc.iowa.gov/customer-assistance/how-do-i-apply-energy-assistance-liheap', accessed: '2026-10-15' },
    { title: 'Low-Income Home Energy Assistance', publisher: 'Iowa Department of Health and Human Services', url: 'https://hhs.iowa.gov/assistance-programs/housing-rent-assistance/low-income-home-energy-assistance', accessed: '2026-10-15' },
    { title: 'Weatherization Assistance', publisher: 'Iowa Department of Health and Human Services', url: 'https://hhs.iowa.gov/assistance-programs/housing-rent-assistance/weatherization-assistance', accessed: '2026-10-15' },
    { title: 'For Consumers', publisher: 'Iowa Attorney General', url: 'https://www.iowaattorneygeneral.gov/for-consumers', accessed: '2026-10-15' },
    { title: 'Office of Consumer Advocate (Utilities)', publisher: 'Iowa Attorney General', url: 'https://www.iowaattorneygeneral.gov/for-consumers/office-of-consumer-advocate-utilities/', accessed: '2026-10-15' },
    { title: 'Energy Efficiency Programs', publisher: 'Iowa Utilities Commission', url: 'https://iuc.iowa.gov/regulated-industries/energy-efficiency-programs', accessed: '2026-10-15' },
    { title: 'Residential Energy Efficiency Programs', publisher: 'Iowa Economic Development Authority (Iowa Energy Office)', url: 'https://opportunityiowa.gov/community/energy/grants-funding/residential-energy-efficiency-programs', accessed: '2026-10-15' },
    { title: 'Customer Rights and Responsibilities to Avoid Shutoff of Gas Service for Nonpayment', publisher: 'Iowa Utilities Commission', url: 'https://iuc.iowa.gov/media/1594/download?inline', accessed: '2026-10-15' },
  ],
}
