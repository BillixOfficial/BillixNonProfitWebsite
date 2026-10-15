import type { StateGuide } from '../types'

export const wi: StateGuide = {
  code: 'WI',
  lastReviewed: '2026-10-15',
  intro:
    'In Wisconsin you cannot choose a different electricity provider.[^4] The Public Service Commission (PSC) must approve rate changes for investor-owned and municipal electric, gas, and water utilities, so city-owned utilities are regulated by the state too.[^1][^2][^5]',
  regulator: {
    name: 'Public Service Commission of Wisconsin (PSC)',
    url: 'https://psc.wi.gov/',
    complaintUrl: 'https://psc.wi.gov/Pages/ForConsumers/LogAComplaint.aspx',
    text:
      'The PSC regulates Wisconsin public utilities, including municipally owned ones: electric, natural gas, water, and certain parts of local telephone service.[^1] Most activities of Wisconsin\'s 28 electric cooperatives are **not** under PSC jurisdiction, and neither are propane, fuel oil, cable TV, or internet service.[^3] You must first try to resolve a dispute with your utility. If that fails, contact PSC Consumer Affairs online, by mail, or at 1-800-225-7729.[^7]',
  },
  electricity: {
    market: 'regulated',
    text:
      'You cannot switch to a different electricity provider in Wisconsin. The state looked at retail choice in the 1990s and decided against it.[^4] The PSC regulates all investor-owned and municipal electric utilities, and its approval is required before they can change rates.[^2][^1] Your bill may include a Power Cost Adjustment Clause (PCAC) charge, which lets the utility pass along changes in what it pays to buy power.[^4] See [how to read your electric bill](/learn/how-to-read-your-electric-bill).',
    shopping: null,
  },
  gas: {
    text:
      'The PSC regulates all investor-owned and municipal gas utilities.[^2] It regulates the non-fuel part of your gas bill, such as the customer charge and distribution charges. The gas itself, often 70 percent or more of the bill, is not regulated and is passed through at cost through a purchased gas adjustment that the PSC reviews monthly.[^4] Ask your utility about budget billing to even out high winter gas bills.[^6] See [budget billing](/glossary#budget-billing).',
    shopping: null,
  },
  water: {
    text:
      'The PSC oversees more than 575 drinking water utilities, including **municipal** and investor-owned systems, and most utilities need PSC approval before setting new rates.[^5][^1] Regional water authorities, cooperatives, water trusts, and private wells are generally not PSC-regulated, and its authority over sanitary sewer and storm water utilities is limited.[^5][^3] Some unpaid municipal utility bills can be added to the property owner\'s tax bill.[^6] See [water and sewer bills](/categories/water-sewer).',
  },
  shutoff: {
    text:
      'A utility must send you a notice before disconnecting, except for a safety hazard, and the notice must explain how to set up a payment plan, report a medical emergency, and dispute the shutoff.[^6] If a utility service provides or affects your **primary heat source**, the utility cannot disconnect it from **November 1 through April 15**.[^6] A utility may delay a shutoff for up to 21 days if it would aggravate a medical or protective services emergency.[^6] Utilities may not disconnect electric or water service to an occupied home while a National Weather Service heat advisory, heat warning, or heat emergency is in effect.[^3] You can ask for a deferred payment agreement, though some municipal utilities may not have to offer one.[^6]',
  },
  help: [
    {
      name: 'Wisconsin Home Energy Assistance Program (WHEAP)',
      url: 'https://energyandhousing.wi.gov/Pages/AgencyResources/energy-assistance.aspx',
      summary:
        'Helps eligible households with heating and electric bills through regular benefits and crisis assistance. It is funded by federal LIHEAP and the state Public Benefits program, and benefits stop when the year\'s funds run out. Apply online or through your local agency, or call 1-866-HEATWIS (432-8947).[^8]',
    },
    {
      name: 'Weatherization Assistance Program',
      url: 'https://energyandhousing.wi.gov/Pages/AgencyResources/weatherization.aspx',
      summary:
        'The federal program that helps low-income families make their homes more energy efficient, run in Wisconsin by the Division of Energy, Housing and Community Resources.[^9][^10]',
    },
  ],
  consumer: {
    name: 'Wisconsin Department of Agriculture, Trade and Consumer Protection (DATCP), Bureau of Consumer Protection',
    url: 'https://datcp.wi.gov/Pages/Programs_Services/ConsumerProtection.aspx',
    summary:
      'Wisconsin\'s primary consumer protection agency. It runs the Consumer Protection Hotline and handles complaints about unfair business practices. The PSC refers complaints about services it does not regulate to DATCP.[^11][^7]',
  },
  rebates: [
    {
      name: 'Focus on Energy',
      url: 'https://focusonenergy.com/',
      summary:
        'Wisconsin\'s statewide energy efficiency and renewables program. It offers home energy audits, and you may qualify for cash rebates if you follow the audit\'s recommendations.[^10]',
    },
    {
      name: 'IRA Home Energy Rebates',
      url: 'https://focusonenergy.com/home-energy-rebates',
      summary:
        'Wisconsin received $149 million in federal Home Energy Rebates, delivered by Focus on Energy for the PSC. As of October 2026, both HOMES (whole-home efficiency) and HEAR (electric appliances and heat pumps for low- and moderate-income households) are available, based on household income.[^12]',
    },
  ],
  sources: [
    {
      title: 'Regulation',
      publisher: 'Public Service Commission of Wisconsin',
      url: 'https://psc.wi.gov/Pages/AboutPSC/Regulation.aspx',
      accessed: '2026-10-15',
    },
    {
      title: 'Energy Regulation Topics',
      publisher: 'Public Service Commission of Wisconsin',
      url: 'https://psc.wi.gov/Pages/ServiceType/EnergyTopics.aspx',
      accessed: '2026-10-15',
    },
    {
      title: 'General FAQs',
      publisher: 'Public Service Commission of Wisconsin',
      url: 'https://psc.wi.gov/Pages/ForConsumers/MoreResources/GeneralFAQ.aspx',
      accessed: '2026-10-15',
    },
    {
      title: 'Natural Gas and Electric FAQs',
      publisher: 'Public Service Commission of Wisconsin',
      url: 'https://psc.wi.gov/Pages/ForConsumers/MoreResources/GasElectricFAQ.aspx',
      accessed: '2026-10-15',
    },
    {
      title: 'Water Regulation Topics',
      publisher: 'Public Service Commission of Wisconsin',
      url: 'https://psc.wi.gov/Pages/ServiceType/WaterTopics.aspx',
      accessed: '2026-10-15',
    },
    {
      title: 'Utility Customer Bill of Rights',
      publisher: 'Public Service Commission of Wisconsin',
      url: 'https://psc.wi.gov/Pages/ForConsumers/MoreResources/UtilityCustomerBillRights.aspx',
      accessed: '2026-10-15',
    },
    {
      title: 'File a Utility Complaint',
      publisher: 'Public Service Commission of Wisconsin',
      url: 'https://psc.wi.gov/Pages/ForConsumers/LogAComplaint.aspx',
      accessed: '2026-10-15',
    },
    {
      title: 'Wisconsin Home Energy Assistance Program (WHEAP)',
      publisher: 'Wisconsin Department of Administration, Division of Energy, Housing and Community Resources',
      url: 'https://energyandhousing.wi.gov/Pages/AgencyResources/energy-assistance.aspx',
      accessed: '2026-10-15',
    },
    {
      title: 'Weatherization',
      publisher: 'Wisconsin Department of Administration, Division of Energy, Housing and Community Resources',
      url: 'https://energyandhousing.wi.gov/Pages/AgencyResources/weatherization.aspx',
      accessed: '2026-10-15',
    },
    {
      title: 'Utility Payment Assistance',
      publisher: 'Public Service Commission of Wisconsin',
      url: 'https://psc.wi.gov/Pages/ForConsumers/UtilityPaymentAssistance.aspx',
      accessed: '2026-10-15',
    },
    {
      title: 'Bureau of Consumer Protection',
      publisher: 'Wisconsin Department of Agriculture, Trade and Consumer Protection',
      url: 'https://datcp.wi.gov/Pages/Programs_Services/ConsumerProtection.aspx',
      accessed: '2026-10-15',
    },
    {
      title: 'IRA Home Energy Rebates',
      publisher: 'Focus on Energy (program administrator chosen by the PSC)',
      url: 'https://focusonenergy.com/home-energy-rebates',
      accessed: '2026-10-15',
    },
  ],
}
