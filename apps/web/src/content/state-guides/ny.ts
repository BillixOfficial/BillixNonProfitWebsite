import type { StateGuide } from '../types'

export const ny: StateGuide = {
  code: 'NY',
  lastReviewed: '2026-10-15',
  intro:
    'In New York, your utility delivers your electricity and natural gas, but you can buy the energy itself from an energy service company (ESCO) if you want to.[^4] Residential gas and electric customers also have shutoff protections under the Home Energy Fair Practices Act (HEFPA).[^3]',
  regulator: {
    name: 'New York State Department of Public Service',
    url: 'https://dps.ny.gov/',
    complaintUrl: 'https://dps.ny.gov/file-complaint',
    text:
      'The New York State Department of Public Service[^1] takes complaints about electric, natural gas, steam, landline telephone, cable TV and water utilities.[^2] **Contact your utility first**: the department says utilities are required by law to help you.[^2] If that does not fix it, file a complaint online or call the Helpline at 800-342-3377; for a residential gas or electric shutoff, call the Hotline at 800-342-3355.[^2] Complaints about cell phones, satellite TV, internet, heating oil and propane go to the New York State Attorney General, and water from a city or town goes to that municipality.[^2]',
  },
  electricity: {
    market: 'choice',
    text:
      'You can stay with your utility for supply or buy it from an ESCO, a company eligible to sell electricity or natural gas over your utility\'s lines.[^4] Your utility still delivers your energy and responds to emergencies even if you switch.[^4] The state\'s Power to Choose website lists ESCO offers for residential customers.[^4][^5] Before you sign, read the contract: ESCOs can charge an **early termination fee** if you cancel before the term ends, and residential customers can rescind an agreement within three days of receiving it.[^4] See [supply vs. delivery charges](/learn/supply-vs-delivery-charges).',
    shopping: { name: 'Power to Choose (NYS Department of Public Service)', url: 'https://documents.dps.ny.gov/PTC' },
  },
  gas: {
    text:
      'The same ESCO rules cover natural gas: an ESCO can sell you gas supply while your utility keeps delivering it and handling emergencies.[^4] Shutoff protections under HEFPA apply to residential gas customers too.[^3]',
    shopping: { name: 'Power to Choose (NYS Department of Public Service)', url: 'https://documents.dps.ny.gov/PTC' },
  },
  water: {
    text:
      'The Public Service Commission regulates the rates and service of about 230 private water companies.[^6] If your water comes from a city, town or village, the department says to contact that municipality directly, and water quality questions go to your local health department.[^2] See [water and sewer bills](/categories/water-sewer).',
  },
  shutoff: {
    text:
      'Under HEFPA, a final termination notice can be sent 20 days after a payment was due, and the utility must allow 15 days for you to resolve the problem before it shuts off service.[^3] Shutoffs can happen only from 8 a.m. to 4 p.m., Monday through Thursday, and not on a public holiday, the day before a holiday, or during the two-week period that includes Christmas and New Year\'s Day.[^3] From **November 1 to April 15**, utilities must make special efforts to find out whether shutting off heat-related service would harm anyone\'s health or safety; if harm might result, the utility must notify the local Department of Social Services and cannot shut off service for another 15 business days.[^3] If a doctor or the local Board of Health certifies a medical emergency, service stays on for 30 days, and the certificate can be renewed.[^3] You can also ask for a deferred payment agreement to pay what you owe over time.[^3]',
  },
  help: [
    {
      name: 'Home Energy Assistance Program (HEAP)',
      url: 'https://otda.ny.gov/programs/heap/',
      summary:
        'HEAP helps eligible New Yorkers heat and cool their homes, with one Regular benefit per program year and Emergency benefits if you are about to run out of fuel or have your utility service shut off.[^7] As of October 2026, the 2026-2027 Regular benefit is scheduled to open November 2, 2026, and the Emergency benefit January 4, 2027; check the page for current dates.[^7] Apply through myBenefits.ny.gov or your HEAP Local District Contact.[^7]',
    },
    {
      name: 'Energy Affordability Program (EAP)',
      url: 'https://dps.ny.gov/energy-affordability-program',
      summary:
        'EAP gives monthly bill discounts on your utility bill to households with income below the state or area median.[^8] Households that get HEAP, SNAP, Medicaid, SSI, TANF or Lifeline, among others, may be enrolled automatically; otherwise you can apply through your utility.[^8] Participants are also placed on [budget billing](/glossary#budget-billing) and can opt out.[^8]',
    },
    {
      name: 'Weatherization Assistance Program (WAP)',
      url: 'https://hcr.ny.gov/weatherization',
      summary:
        'New York State Homes and Community Renewal runs WAP, which helps income-eligible homeowners and some renters cut heating and cooling costs with energy-saving work and health and safety fixes.[^9] Contact your local WAP provider to apply.[^9]',
    },
  ],
  consumer: {
    name: 'New York State Attorney General Consumer Frauds Bureau',
    url: 'https://ag.ny.gov/resources/individuals/consumer-issues',
    summary:
      'The Attorney General\'s office investigates fraudulent, misleading and deceptive business practices and runs a consumer mediation program to help New Yorkers resolve problems with businesses.[^10] It also handles complaints about heating oil, propane, cell phone and internet service, which the Department of Public Service does not.[^2]',
  },
  rebates: [
    {
      name: 'EmPower+ (NYSERDA)',
      url: 'https://www.nyserda.ny.gov/All-Programs/EmPower-New-York-Program',
      summary:
        'EmPower+ helps low- and moderate-income owners and renters of one- to four-family homes with no-cost home energy assessments and funding for upgrades such as air sealing, insulation and heat pumps.[^11] Low-income households can get no-cost improvements up to a project cap, and moderate-income households can get 50% of the cost up to a cap.[^11] Home Electrification Appliance Rebate (HEAR) incentives are available through EmPower+ on top of those amounts.[^11]',
    },
  ],
  sources: [
    { title: 'New York State Department of Public Service', publisher: 'New York State Department of Public Service', url: 'https://dps.ny.gov/', accessed: '2026-10-15' },
    { title: 'File a Complaint', publisher: 'New York State Department of Public Service', url: 'https://dps.ny.gov/file-complaint', accessed: '2026-10-15' },
    { title: 'Your Rights as a Residential Gas, Electric or Steam Customer under HEFPA', publisher: 'New York State Department of Public Service', url: 'https://dps.ny.gov/your-rights-residential-gas-electric-or-steam-customer-under-hefpa', accessed: '2026-10-15' },
    { title: 'How to Shop for Energy Services', publisher: 'New York State Department of Public Service', url: 'https://dps.ny.gov/how-shop-energy-services', accessed: '2026-10-15' },
    { title: 'Power to Choose', publisher: 'New York State Department of Public Service', url: 'https://documents.dps.ny.gov/PTC', accessed: '2026-10-15' },
    { title: 'Water', publisher: 'New York State Department of Public Service', url: 'https://dps.ny.gov/water', accessed: '2026-10-15' },
    { title: 'Home Energy Assistance Program (HEAP)', publisher: 'New York State Office of Temporary and Disability Assistance', url: 'https://otda.ny.gov/programs/heap/', accessed: '2026-10-15' },
    { title: 'Energy Affordability Program', publisher: 'New York State Department of Public Service', url: 'https://dps.ny.gov/energy-affordability-program', accessed: '2026-10-15' },
    { title: 'Weatherization Assistance Program', publisher: 'New York State Homes and Community Renewal', url: 'https://hcr.ny.gov/weatherization', accessed: '2026-10-15' },
    { title: 'Consumer Issues', publisher: 'Office of the New York State Attorney General', url: 'https://ag.ny.gov/resources/individuals/consumer-issues', accessed: '2026-10-15' },
    { title: 'EmPower+', publisher: 'New York State Energy Research and Development Authority (NYSERDA)', url: 'https://www.nyserda.ny.gov/All-Programs/EmPower-New-York-Program', accessed: '2026-10-15' },
  ],
}
