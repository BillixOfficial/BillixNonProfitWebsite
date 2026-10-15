import type { StateGuide } from '../types'

export const la: StateGuide = {
  code: 'LA',
  lastReviewed: '2026-10-15',
  intro:
    'The Louisiana Public Service Commission regulates non-municipal electric, gas, water and wastewater utilities and every electric cooperative in the state, but not city-owned utilities.[^1][^2] New Orleans is different: the City Council, not the state commission, regulates electric and gas service in Orleans Parish.[^3]',
  regulator: {
    name: 'Louisiana Public Service Commission (LPSC)',
    url: 'https://lpsc.louisiana.gov/',
    complaintUrl: 'https://lpsc.louisiana.gov/Complaints',
    text:
      'The LPSC has jurisdiction over non-municipal utilities that provide electric, water, wastewater, natural gas and telecommunications service, and over all electric cooperatives in Louisiana.[^2] Utilities owned and run by a city are **not** under its jurisdiction.[^1] Contact your utility first. To complain about an LPSC-regulated utility, contact your Commissioner\'s district office by email, mail, phone or fax, or the LPSC main office if you cannot reach it. A formal, docketed complaint is a separate process under the Commission\'s rules of practice.[^2]',
  },
  electricity: {
    market: 'regulated',
    text:
      'Outside New Orleans, the LPSC regulates the investor-owned electric utilities and all electric cooperatives.[^2] City-owned electric systems are not subject to LPSC jurisdiction, so take rate questions to your city utility.[^1] In Orleans Parish, the New Orleans City Council acts as the retail regulator for electric and gas service from Entergy New Orleans and Entergy Louisiana.[^3] See [how to read your electric bill](/learn/how-to-read-your-electric-bill).',
    shopping: null,
  },
  gas: {
    text:
      'The LPSC regulates non-municipal natural gas utilities.[^2] City-owned gas systems are outside its jurisdiction.[^1] In Orleans Parish, the New Orleans City Council regulates gas service.[^3]',
    shopping: null,
  },
  water: {
    text:
      'The LPSC regulates non-municipal water and wastewater utilities.[^2] Water and sewer systems owned and run by a city are not subject to LPSC jurisdiction, so contact your city or local system about those rates.[^1] See [water and sewer bills](/categories/water-sewer).',
  },
  shutoff: {
    text:
      'Under LPSC General Order R-29706, an electric or natural gas utility cannot disconnect a residential customer in a parish on a day when the previous day\'s high did not exceed 32 degrees Fahrenheit and the temperature is predicted to stay at or below that level for the next 24 hours, based on the nearest National Weather Service reports.[^4][^5] In summer, the protection applies when the nearest National Weather Service office issues a **heat advisory**. A gas utility may still disconnect in summer if you do not rely on gas to cool your home.[^4] A 1980 LPSC order requires regulated electric and gas utilities to include a rule against shutting off service while the utility has been told or has reason to believe it would be especially dangerous to the health of someone in the home, if you show you cannot pay or can pay only in installments.[^6] Notice requirements are in each utility\'s tariff and LPSC orders, so check your utility\'s rules.[^6] In New Orleans, the City Council regulates Entergy\'s service, so ask it or your utility which rules apply.[^3]',
  },
  help: [
    {
      name: 'Low-Income Home Energy Assistance Program (LIHEAP)',
      url: 'https://www.lhc.la.gov/energy-assistance',
      summary:
        'The Louisiana Housing Corporation (LHC) offers LIHEAP help with heating and cooling bills, crisis bill payments, and repair or replacement of heating and cooling equipment. You must be responsible for the energy bill and have an active account, and you can get one benefit per season. Income limits are based on 60% of the state median income. Crisis applications go through your local agency, not the online portal.[^7]',
    },
    {
      name: 'Weatherization Assistance Program',
      url: 'https://www.lhc.la.gov/weatherization',
      summary:
        'The LHC offers weatherization services such as insulation, air sealing, weather-stripping and duct sealing to make homes more energy-efficient. Household income determines eligibility, and help is not guaranteed.[^8]',
    },
  ],
  consumer: {
    name: 'Louisiana Attorney General Consumer Protection Section',
    url: 'https://ag.louisiana.gov/ConsumerDispute',
    summary:
      'The Consumer Protection Section takes consumer disputes about unfair or deceptive business practices online or on a printable form. **It does not handle disputes about utility companies**, so take utility problems to the LPSC (or, in New Orleans, the City Council).[^9][^2][^3]',
  },
  rebates: [
    {
      name: 'Louisiana Energy Efficiency Program (LEEP)',
      url: 'https://lpsc.louisiana.gov/Efficiency',
      summary:
        'An LPSC General Order requires the investor-owned electric utilities and larger (Group 1) gas utilities it regulates to run energy efficiency programs for their customers, which began January 1, 2026. Ask your utility which programs it offers.[^10]',
    },
  ],
  sources: [
    { title: 'About the Louisiana Public Service Commission', publisher: 'Louisiana Public Service Commission', url: 'https://lpsc.louisiana.gov/About', accessed: '2026-10-15' },
    { title: 'Submitting a Complaint with the Louisiana Public Service Commission', publisher: 'Louisiana Public Service Commission', url: 'https://lpsc.louisiana.gov/Complaints', accessed: '2026-10-15' },
    {
      title: 'Request for Qualifications: Utilities Accountant (background on Council utility regulation)',
      publisher: 'Council of the City of New Orleans',
      url: 'https://council.nola.gov/council/media/Assets/rfps/4-22-15UtilitiesAccountantRFQ.pdf',
      accessed: '2026-10-15',
      note: 'Dated 2015; describes the Council\'s role as retail regulator in Orleans Parish.',
    },
    {
      title: 'General Order R-29706 (Second Amended), Disconnection of Service: Electric and Gas Utilities',
      publisher: 'Louisiana Public Service Commission',
      url: 'https://lpscpubvalence.lpsc.louisiana.gov/portal/PSC/ViewFile?fileId=46j1cnIKxpM%3D',
      accessed: '2026-10-15',
    },
    { title: 'General Rules and Regulations', publisher: 'Louisiana Public Service Commission', url: 'https://lpsc.louisiana.gov/Regs_General', accessed: '2026-10-15' },
    { title: 'Order No. U-13423 (Utility Service Regulations)', publisher: 'Louisiana Public Service Commission', url: 'https://lpsc.louisiana.gov/docs/orders/OrderU-13423.pdf', accessed: '2026-10-15' },
    { title: 'Energy Assistance (LIHEAP)', publisher: 'Louisiana Housing Corporation', url: 'https://www.lhc.la.gov/energy-assistance', accessed: '2026-10-15' },
    { title: 'Weatherization', publisher: 'Louisiana Housing Corporation', url: 'https://www.lhc.la.gov/weatherization', accessed: '2026-10-15' },
    { title: 'Consumer Dispute', publisher: 'Louisiana Department of Justice, Office of the Attorney General', url: 'https://ag.louisiana.gov/ConsumerDispute', accessed: '2026-10-15' },
    { title: 'Louisiana Energy Efficiency Programs', publisher: 'Louisiana Public Service Commission', url: 'https://lpsc.louisiana.gov/Efficiency', accessed: '2026-10-15' },
  ],
}
