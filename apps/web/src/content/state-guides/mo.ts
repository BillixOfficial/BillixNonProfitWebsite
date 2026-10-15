import type { StateGuide } from '../types'

export const mo: StateGuide = {
  code: 'MO',
  lastReviewed: '2026-10-15',
  intro:
    'In Missouri, investor-owned companies such as Ameren Missouri, Evergy, Liberty and Spire are the only provider of electric, gas or water service where they operate, and the Missouri Public Service Commission must approve any rate change.[^8][^1] City utilities, rural electric cooperatives and public water districts set their own rates.[^2]',
  regulator: {
    name: 'Missouri Public Service Commission (PSC)',
    url: 'https://psc.mo.gov/',
    complaintUrl: 'https://psc.mo.gov/General/Submit_A_Complaint',
    text:
      'The PSC regulates investor-owned electric, natural gas, steam, water and sewer utilities, and for rural electric cooperatives and city-owned gas systems it oversees only operational safety.[^1] It does not regulate the rates of city-owned utilities, rural cooperatives or public water and sewer districts, and it does not handle cell phone, internet, cable TV or trash service.[^2] **Contact your utility first.** If that does not solve the problem, file an informal complaint with the PSC’s Consumer Services Unit or call the Utility Consumer Hotline at 1-800-392-4211.[^2] The state Office of the Public Counsel separately represents customers of investor-owned utilities in rate cases.[^8]',
  },
  electricity: {
    market: 'regulated',
    text:
      'The PSC sets rates for four investor-owned electric utilities: Ameren Missouri, The Empire District Electric Company (Liberty), Evergy Missouri Metro and Evergy Missouri West.[^3] A utility cannot raise rates or change its terms of service until the PSC approves the change.[^8] Once a supplier provides permanent service to a building, state law gives it the right to keep serving it; the PSC can order a change of supplier only for a public-interest reason other than a rate difference.[^4] Municipal utilities and electric cooperatives set their own rates.[^2] See [supply vs. delivery charges](/learn/supply-vs-delivery-charges) to understand your bill.',
    shopping: null,
  },
  gas: {
    text:
      'The PSC regulates the rates and service of five natural gas companies: Ameren Missouri, The Empire District Gas Company (Liberty), Spire Missouri, Liberty Utilities (Midstates Natural Gas) and Summit Natural Gas.[^5] For city-owned gas systems, the PSC oversees operational safety only.[^1] The state does not run a gas shopping website, so contact your gas utility with questions about your rate.',
    shopping: null,
  },
  water: {
    text:
      'The PSC regulates investor-owned water and sewer companies.[^1] It does not regulate the rates of city-owned utilities or public water and sewer districts; those rates are set locally, so take questions to your city or district.[^2] Before a PSC-regulated sewer company shuts off service, it must send notice by certified mail at least 30 days ahead.[^6]',
  },
  shutoff: {
    text:
      'A PSC-regulated electric, gas or water utility must mail you a written notice at least 10 days before a shutoff, or hand it to you at least 96 hours before, and it must try to contact you again in the 24 hours before.[^6] A shutoff must be postponed up to 21 days if it would make a medical emergency worse for someone in the home.[^6] Under the **Cold Weather Rule** (November 1 through March 31), gas or electric heat cannot be shut off on days when the forecast calls for temperatures below 32°F within the next 72 hours.[^6] During that period, you can also avoid a shutoff, or get service back without a deposit, by telling the utility you cannot pay in full, making an initial payment and entering a payment plan; the utility must first offer a 12-month budget plan.[^6] From June 1 through September 30, state law bars shutting off gas or electric service used for cooling when the forecast is above 95°F or a heat index above 105°F within 72 hours.[^7] The Cold Weather Rule does not cover city utilities, electric cooperatives or delivered propane.[^8]',
  },
  help: [
    {
      name: 'Low Income Home Energy Assistance Program (LIHEAP)',
      url: 'https://dss.mo.gov/utility-assistance/liheap',
      summary:
        'Run by the Missouri Department of Social Services, LIHEAP makes a one-time payment toward heating or cooling costs from October through May.[^9] Its Energy Crisis Intervention Program (ECIP) helps if you have a disconnect notice or are running out of fuel. As of October 2026, it pays up to $800 in winter (November to May) and up to $300 in summer (June to September), based on funding.[^9] Apply through the contracted agency for your area or call 855-373-4636.[^9]',
    },
    {
      name: 'Weatherization Assistance Program',
      url: 'https://dnr.mo.gov/energy/weatherization',
      summary:
        'The Missouri Department of Natural Resources runs this program, which makes energy-saving improvements such as air sealing, insulation and heating or cooling system repair for income-eligible households.[^10] Homeowners and, with the landlord’s permission, renters can qualify.[^10]',
    },
  ],
  consumer: {
    name: 'Missouri Attorney General Consumer Protection Section',
    url: 'https://ago.mo.gov/divisions/consumer/',
    summary:
      'The Attorney General’s Consumer Protection Section takes complaints about fraud and deceptive business practices and mediates many of them; file online or call 800-392-8222.[^11] If someone calls claiming to be your utility and threatens an immediate shutoff, the PSC says to hang up and call your utility directly.[^13]',
  },
  rebates: [
    {
      name: 'Home Energy Rebates Programs (Missouri Department of Natural Resources)',
      url: 'https://dnr.mo.gov/communications/news/department-natural-resources-seeks-contractor-home-energy-rebates',
      summary:
        'Missouri was allocated over $151 million in federal funds for the HOMES and HEEHR rebate programs.[^12] In June 2026, the state began seeking a contractor to run the programs and said it was still waiting on federal approval, so check with the Department of Natural Resources for current status.[^12]',
    },
  ],
  sources: [
    { title: 'About The PSC', publisher: 'Missouri Public Service Commission', url: 'https://psc.mo.gov/General/About_The_PSC', accessed: '2026-10-15' },
    { title: 'Submit A Complaint', publisher: 'Missouri Public Service Commission', url: 'https://psc.mo.gov/General/Submit_A_Complaint', accessed: '2026-10-15' },
    { title: 'Electric', publisher: 'Missouri Public Service Commission', url: 'https://psc.mo.gov/Electric/', accessed: '2026-10-15' },
    { title: 'RSMo Section 393.106: Electric power suppliers exclusive right to serve structures', publisher: 'Missouri Revisor of Statutes', url: 'https://revisor.mo.gov/main/OneSection.aspx?section=393.106', accessed: '2026-10-15' },
    { title: 'Natural Gas', publisher: 'Missouri Public Service Commission', url: 'https://psc.mo.gov/NaturalGas/', accessed: '2026-10-15' },
    { title: '20 CSR 4240-13: Service and Billing Practices for Residential Customers of Electric, Gas, Sewer, and Water Utilities', publisher: 'Missouri Secretary of State (Code of State Regulations)', url: 'https://www.sos.mo.gov/CMSImages/AdRules/csr/current/20csr/20c4240-13.pdf', accessed: '2026-10-15' },
    { title: 'RSMo Section 393.108: Hot weather rule', publisher: 'Missouri Revisor of Statutes', url: 'https://revisor.mo.gov/main/OneSection.aspx?section=393.108', accessed: '2026-10-15' },
    { title: 'Missouri Office of the Public Counsel', publisher: 'Missouri Office of the Public Counsel', url: 'https://opc.mo.gov/', accessed: '2026-10-15' },
    { title: 'Low Income Home Energy Assistance Program (LIHEAP)', publisher: 'Missouri Department of Social Services', url: 'https://dss.mo.gov/utility-assistance/liheap', accessed: '2026-10-15' },
    { title: 'Weatherization', publisher: 'Missouri Department of Natural Resources', url: 'https://dnr.mo.gov/energy/weatherization', accessed: '2026-10-15' },
    { title: 'Consumer Protection', publisher: 'Missouri Attorney General', url: 'https://ago.mo.gov/divisions/consumer/', accessed: '2026-10-15' },
    { title: 'Department of Natural Resources Seeks Contractor for Home Energy Rebates (June 17, 2026)', publisher: 'Missouri Department of Natural Resources', url: 'https://dnr.mo.gov/communications/news/department-natural-resources-seeks-contractor-home-energy-rebates', accessed: '2026-10-15' },
    { title: 'Utility Resources Question Answer Page', publisher: 'Missouri Public Service Commission', url: 'https://psc.mo.gov/General/Utility_Resources_Question_Answer_Page', accessed: '2026-10-15' },
  ],
}
