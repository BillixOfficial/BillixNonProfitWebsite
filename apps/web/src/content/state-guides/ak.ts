import type { StateGuide } from '../types'

export const ak: StateGuide = {
  code: 'AK',
  lastReviewed: '2026-10-15',
  intro:
    'Electricity in rural Alaska can cost three to five times more than in urban areas, which is why the state\'s Power Cost Equalization program lowers residential rates in eligible rural communities.[^5] The Regulatory Commission of Alaska (RCA) oversees the rates and service rules of the utilities it regulates.[^1][^2]',
  regulator: {
    name: 'Regulatory Commission of Alaska (RCA)',
    url: 'https://rca.alaska.gov/RCAWeb/home.aspx',
    complaintUrl: 'https://rca.alaska.gov/RCAWeb/ForConsumers/InformalComplaints.aspx',
    text:
      'The RCA certifies public utility providers and makes sure they provide safe and adequate service at just and reasonable rates, terms, and conditions.[^1] Its Consumer Protection & Information Section can look into electric, natural gas, and water and wastewater issues such as billing, deposits, disconnection, and rates, but not damage claims, wiring inside your home, or electric co-op bylaws and capital credits.[^2][^3][^4] Try to resolve the problem with your utility first.[^11] If you are not satisfied, file an informal complaint online or by form; staff will contact you within two business days, and you should call right away about an urgent matter like a disconnection.[^6]',
  },
  electricity: {
    market: 'regulated',
    text:
      'For the electric utilities it regulates, the RCA oversees rates and charges, cost of power adjustments, and periodic rate adjustments for electric cooperatives.[^2] Regulated utilities must charge the rates, terms, and conditions in their current approved tariff, which you can look up on the RCA website.[^6] In rural communities that rely largely on diesel, the Power Cost Equalization program brings residential electric rates closer to those in Anchorage, Fairbanks, and Juneau.[^5]',
    shopping: null,
  },
  gas: {
    text:
      'The RCA\'s consumer staff can look into natural gas utility issues including rates and charges, gas cost adjustments, gas supply agreements, budget billing, deposits, and disconnection.[^3]',
    shopping: null,
  },
  water: {
    text:
      'The RCA\'s consumer staff can look into issues with regulated water and wastewater utilities, including rates, billing, deposits, and discontinuance of service.[^4] For water quality problems, the RCA says to contact the Alaska Department of Environmental Conservation first.[^4] Check your bill or the RCA\'s list of certificated utilities to see whether your water provider is regulated.[^6]',
  },
  shutoff: {
    text:
      'Under state rules, a regulated utility may begin disconnection if you have not paid within 40 days of the bill, unless you have a deferred payment agreement, and it must mail or deliver written notice at least 15 days before the shutoff date.[^7] If the utility knows the home has someone seriously ill, elderly, with a disability, or on life support, that notice must come at least **30 days** ahead, and a later notification extends the shutoff date by 15 days.[^7] The utility must try to reach you by phone or in person at least three working days before disconnecting, and it may not disconnect on a Friday or the day before a holiday.[^7] It also may not disconnect you while you are keeping to, or negotiating in time, a deferred payment agreement you qualify for.[^7]',
  },
  help: [
    {
      name: 'Heating Assistance Program (HAP), including LIHEAP',
      url: 'https://health.alaska.gov/en/services/division-of-public-assistance-dpa-services/heating-assistance/',
      summary:
        'The Division of Public Assistance runs the federal Low-Income Home Energy Assistance Program (LIHEAP) for households with income up to 150 percent of federal poverty guidelines, and the state-funded Alaska Affordable Heating Program (AAHP) for households above 150 and up to 225 percent. Households must have at least $200 a year in heating costs. Apply October 1 through April 30; crisis help is available if your heat or electric service is disconnected or within 48 hours of disconnection.[^8]',
    },
    {
      name: 'Power Cost Equalization (PCE)',
      url: 'https://www.akenergyauthority.org/PCE',
      summary:
        'Run by the Alaska Energy Authority with the RCA, PCE lowers electric rates for eligible residential customers of rural utilities in 193 communities. The credit appears through your utility, which is reimbursed by the program.[^5]',
    },
    {
      name: 'Weatherization program',
      url: 'https://www.ahfc.us/efficiency/weatherization',
      summary:
        'Alaska Housing Finance Corporation\'s weatherization program is free for qualified applicants, including renters and condo owners. Check the income guidelines, then contact a weatherization provider for your area.[^9]',
    },
  ],
  consumer: {
    name: 'Alaska Department of Law, Consumer Protection Unit',
    url: 'https://law.alaska.gov/department/civil/consumer/cpindex.html',
    summary:
      'Investigates unfair or deceptive business practices, informally mediates consumer complaints, and educates the public. It does not provide legal representation or legal advice to individuals.[^10]',
  },
  rebates: [],
  sources: [
    { title: 'About the RCA', publisher: 'Regulatory Commission of Alaska', url: 'https://rca.alaska.gov/RCAWeb/AboutRCA/AboutTheRCA.aspx', accessed: '2026-10-15', note: 'Site blocks scripted requests; verified in a browser.' },
    { title: 'Electric (For Consumers)', publisher: 'Regulatory Commission of Alaska', url: 'https://rca.alaska.gov/RCAWeb/ForConsumers/Electric.aspx', accessed: '2026-10-15', note: 'Verified in a browser.' },
    { title: 'Natural Gas (For Consumers)', publisher: 'Regulatory Commission of Alaska', url: 'https://rca.alaska.gov/RCAWeb/ForConsumers/NaturalGas.aspx', accessed: '2026-10-15', note: 'Verified in a browser.' },
    { title: 'Water & Wastewater (For Consumers)', publisher: 'Regulatory Commission of Alaska', url: 'https://rca.alaska.gov/RCAWeb/ForConsumers/WaterAndWastewater.aspx', accessed: '2026-10-15', note: 'Verified in a browser.' },
    { title: 'Power Cost Equalization', publisher: 'Alaska Energy Authority', url: 'https://www.akenergyauthority.org/PCE', accessed: '2026-10-15' },
    { title: 'General Information and Complaints (For Consumers)', publisher: 'Regulatory Commission of Alaska', url: 'https://rca.alaska.gov/RCAWeb/ForConsumers/GeneralInfo.aspx', accessed: '2026-10-15', note: 'Verified in a browser.' },
    { title: '3 AAC 52.450, Disconnection of service', publisher: 'Alaska Administrative Code (Alaska State Legislature)', url: 'https://www.akleg.gov/basis/aac.asp?media=print&secStart=3.52.450&secEnd=3.52.450', accessed: '2026-10-15' },
    { title: 'Heating Assistance Program (HAP)', publisher: 'Alaska Department of Health, Division of Public Assistance', url: 'https://health.alaska.gov/en/services/division-of-public-assistance-dpa-services/heating-assistance/', accessed: '2026-10-15' },
    { title: 'Weatherization', publisher: 'Alaska Housing Finance Corporation', url: 'https://www.ahfc.us/efficiency/weatherization', accessed: '2026-10-15' },
    { title: 'Consumer Protection Unit', publisher: 'Alaska Department of Law', url: 'https://law.alaska.gov/department/civil/consumer/cpindex.html', accessed: '2026-10-15' },
    { title: 'Complaints (For Consumers)', publisher: 'Regulatory Commission of Alaska', url: 'https://rca.alaska.gov/RCAWeb/ForConsumers/InformalComplaints.aspx', accessed: '2026-10-15', note: 'Verified in a browser.' },
  ],
}
