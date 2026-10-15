import type { StateGuide } from '../types'

export const id: StateGuide = {
  code: 'ID',
  lastReviewed: '2026-10-15',
  intro:
    'In Idaho, the Public Utilities Commission sets rates for investor-owned utilities such as Idaho Power and Intermountain Gas, while city-owned utilities and cooperatives are not regulated by the commission.[^1] Idaho\'s winter rules keep gas or electric heat on from December through February for qualifying households that cannot pay.[^3]',
  regulator: {
    name: 'Idaho Public Utilities Commission (IPUC)',
    url: 'https://puc.idaho.gov/',
    complaintUrl: 'https://puc.idaho.gov/Form/ConsumerAssistance',
    text:
      'The IPUC regulates investor-owned utilities that provide gas, water, electricity, or some telephone services for profit, covering rates, billing, quality of service, and customer relations.[^1] It does **not** regulate cooperatives, utilities operated by cities, or sewer operations.[^1] Its Consumer Assistance Staff can help you negotiate payment arrangements with a regulated utility, but the IPUC does not provide financial assistance.[^2] If you and your utility cannot agree, use the online complaint form or call the IPUC; staff will investigate.[^3][^4]',
  },
  electricity: {
    market: 'regulated',
    text:
      'For investor-owned electric utilities, the IPUC sets rates and makes rules governing utility operations.[^1] Idaho\'s investor-owned electric utilities include Idaho Power, Avista, and Rocky Mountain Power.[^1][^2] If your power comes from a city utility or a cooperative, its rates are set locally, not by the IPUC.[^1] To understand what you are paying for, see [how to read your electric bill](/learn/how-to-read-your-electric-bill).',
    shopping: null,
  },
  gas: {
    text:
      'The IPUC regulates investor-owned gas utilities such as Intermountain Gas, including their rates, billing, and service, and it inspects the gas pipelines of the utilities it regulates.[^1] Ask your gas utility about payment plans, including the Winter Payment Plan.[^3]',
    shopping: null,
  },
  water: {
    text:
      'The IPUC regulates investor-owned or privately owned water utilities.[^1] It does not regulate water systems run by cities, and it has no jurisdiction over sewer operations; those rates are set locally.[^1] Regulated water utilities must follow the same notice rules before disconnection as gas and electric utilities.[^3]',
  },
  shutoff: {
    text:
      'A regulated utility must mail a written notice at least seven days before a planned shutoff and give a final notice at least 24 hours before, and it may not disconnect on a Friday, weekend, state holiday, or the day before a holiday.[^3] If you cannot pay and have children, elderly, or seriously ill people at home, your **gas or electric heat cannot be shut off in December, January, or February**, but you must tell the utility that you cannot pay and how you qualify.[^3] A certificate from a doctor or public health official stating that a shutoff would create a serious illness or medical emergency postpones disconnection for 30 days.[^3] A Winter Payment Plan lets qualified gas and electric customers pay half of their level pay amount during the winter.[^3]',
  },
  help: [
    {
      name: 'Low Income Home Energy Assistance Program (LIHEAP)',
      url: 'https://healthandwelfare.idaho.gov/services-programs/financial-assistance/home-heating-and-utility-assistance/about-heating-assistance',
      summary:
        'Administered by the Idaho Department of Health and Welfare[^2] and provided by Community Action Agencies serving every county in Idaho.[^5] Seasonal help is a one-time payment toward heating bills; crisis help is available year-round to prevent or restore a shutoff. Families with children under six or elderly or disabled members can apply starting in October, and others starting in November. Funding is first-come, first-served.[^5]',
    },
    {
      name: 'Weatherization Assistance Program (WAP)',
      url: 'https://healthandwelfare.idaho.gov/services-programs/financial-assistance/home-heating-and-utility-assistance/about-heating-assistance',
      summary:
        'Helps low-income homeowners and renters make their homes more energy efficient. It is available year-round, and eligibility is based on income.[^5][^6]',
    },
  ],
  consumer: {
    name: 'Idaho Office of Attorney General, Consumer Protection Division',
    url: 'https://www.ag.idaho.gov/consumer-protection/',
    summary:
      'Enforces Idaho\'s Consumer Protection Act and other consumer laws, offers voluntary dispute resolution, and takes complaints through an online form.[^7]',
  },
  rebates: [
    {
      name: 'Idaho State Energy Loan Program',
      url: 'https://oemr.idaho.gov/financial-information/incentives/',
      summary:
        'Low-interest loans from the Idaho Governor\'s Office of Energy and Mineral Resources for energy efficiency projects in single-family homes; loans must be secured with real estate. As of October 2026, the same page says federal Home Energy Rebates are **not available** in Idaho.[^6]',
    },
  ],
  sources: [
    { title: 'About the Commission', publisher: 'Idaho Public Utilities Commission', url: 'https://puc.idaho.gov/Page/Info/35', accessed: '2026-10-15' },
    { title: 'Utility Frequently Asked Questions (Financial Assistance)', publisher: 'Idaho Public Utilities Commission', url: 'https://puc.idaho.gov/Page/FAQ/30', accessed: '2026-10-15' },
    { title: 'Idaho Residential Utility Disconnection (fact sheet)', publisher: 'Idaho Public Utilities Commission', url: 'https://puc.idaho.gov/Fileroom/PublicFiles/Consumer/Utility%20Disconnection%20Factsheet.pdf', accessed: '2026-10-15' },
    { title: 'Consumer Complaint / Inquiry Form', publisher: 'Idaho Public Utilities Commission', url: 'https://puc.idaho.gov/Form/ConsumerAssistance', accessed: '2026-10-15' },
    { title: 'About Heating Assistance', publisher: 'Idaho Department of Health and Welfare', url: 'https://healthandwelfare.idaho.gov/services-programs/financial-assistance/home-heating-and-utility-assistance/about-heating-assistance', accessed: '2026-10-15' },
    { title: 'Programs & Incentives', publisher: 'Idaho Governor\'s Office of Energy and Mineral Resources', url: 'https://oemr.idaho.gov/financial-information/incentives/', accessed: '2026-10-15' },
    { title: 'Consumer Protection', publisher: 'Idaho Office of Attorney General', url: 'https://www.ag.idaho.gov/consumer-protection/', accessed: '2026-10-15' },
  ],
}
