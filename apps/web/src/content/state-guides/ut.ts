import type { StateGuide } from '../types'

export const ut: StateGuide = {
  code: 'UT',
  lastReviewed: '2026-10-15',
  intro:
    'In Utah, Rocky Mountain Power is the only electric utility whose rates the Public Service Commission sets, and it serves about three-fourths of the state\'s land area.[^4] Many cities run their own electric and water systems, which the commission does not regulate.[^3][^4]',
  regulator: {
    name: 'Public Service Commission of Utah (PSC)',
    url: 'https://psc.utah.gov/',
    complaintUrl: 'https://psc.utah.gov/complaint-process/',
    text:
      'The PSC\'s main job is to ensure safe, reliable, adequate and reasonably priced utility service, and it sets just and reasonable rates through hearings.[^1] It has jurisdiction over investor-owned and co-op electric, natural gas, phone, water and sewer utilities, but not utilities run by cities, service districts or conservancy districts.[^3] **Start with your utility.** If that fails, file an informal complaint with the Division of Public Utilities (DPU) online or at 800-874-0904; if you are still unsatisfied, the DPU will give you a form to file a formal complaint with the PSC.[^2]',
  },
  electricity: {
    market: 'regulated',
    text:
      'Rocky Mountain Power is the only rate-regulated electric utility in Utah, and its rates are set in general rate cases.[^4] Electric co-ops set their own rates through their boards after notice and hearing, then file them with the PSC; they must still follow PSC rules on terms of service and safety.[^4] City-owned electric utilities, in communities such as Provo, Logan, St. George and Murray, are not regulated by the PSC; their rates are typically set by the utility and approved by the city council.[^4] See [how to read your electric bill](/learn/how-to-read-your-electric-bill).',
    shopping: null,
  },
  gas: {
    text:
      'The PSC regulates investor-owned natural gas utilities.[^3] The wholesale price of natural gas is set in the market, so gas rates go up and down as wholesale prices change.[^5] [Budget billing](/glossary#budget-billing) can spread your gas costs evenly across the year.[^5]',
    shopping: null,
  },
  water: {
    text:
      'The PSC regulates investor-owned and co-op water and sewer companies, and the DPU monitors numerous private water companies.[^3][^6] It has no authority over water systems run by cities, service districts or conservancy districts, so contact your city or district directly about those.[^3] See [water and sewer bills](/categories/water-sewer).',
  },
  shutoff: {
    text:
      'A regulated utility must send written notice at least 10 calendar days before shutting off residential service for nonpayment, or 30 days if you have given it a life-supporting equipment statement.[^7] At least 48 hours before the shutoff it must try to notify you, and from October 1 through March 31 that notice must be personal, such as a visit or phone call.[^7] Service may be cut only between 9 a.m. and 4 p.m., not from Thursday at 4 p.m. to Monday at 9 a.m., and not on state holidays.[^7] **A serious illness or infirmity statement from a licensed medical provider keeps service on for up to one month, up to twice a year.**[^7] Utilities also may not shut off a household for at least 30 days after receiving a HEAT payment for it.[^7]',
  },
  help: [
    {
      name: 'Home Energy Assistance Target (HEAT) Program',
      url: 'https://jobs.utah.gov/heat/',
      summary:
        'Utah\'s LIHEAP program, run by the Department of Workforce Services, helps households at or below 150% of the federal poverty level with energy bills. Households with older adults, people with disabilities or children under 6 can apply starting October 1; others from November 1. If you face a shutoff, contact your local HEAT office about crisis help.[^8]',
    },
    {
      name: 'Weatherization Assistance Program',
      url: 'https://commerce.utah.gov/dpu/customer-service/faqs/how-do-i-get-help-paying-my-utility-bills/',
      summary:
        'Also run by the Department of Workforce Services through local government and nonprofit agencies, it helps eligible low-income households make their homes more energy efficient. You can ask for a referral when you apply for HEAT.[^9][^8]',
    },
  ],
  consumer: {
    name: 'Utah Division of Consumer Protection',
    url: 'https://commerce.utah.gov/dcp/',
    summary:
      'Part of the Utah Department of Commerce, the division protects consumers through education and enforcement.[^10] Filing a complaint starts an official process that may lead to an investigation and legal action; for questions, call (801) 530-6601.[^11]',
  },
  rebates: [],
  sources: [
    { title: 'History', publisher: 'Public Service Commission of Utah', url: 'https://psc.utah.gov/history/', accessed: '2026-10-15' },
    { title: 'Complaint Process', publisher: 'Public Service Commission of Utah', url: 'https://psc.utah.gov/complaint-process/', accessed: '2026-10-15' },
    { title: 'What is Regulated and What is Not?', publisher: 'Utah Division of Public Utilities', url: 'https://commerce.utah.gov/dpu/customer-service/faqs/what-is-regulated-and-what-is-not/', accessed: '2026-10-15' },
    { title: 'Electric Utilities', publisher: 'Utah Office of Consumer Services', url: 'https://commerce.utah.gov/ocs/learn-about-your-service-provider/electric-utilities/', accessed: '2026-10-15' },
    { title: 'FAQs', publisher: 'Public Service Commission of Utah', url: 'https://psc.utah.gov/faqs/', accessed: '2026-10-15' },
    { title: 'About DPU', publisher: 'Utah Division of Public Utilities', url: 'https://commerce.utah.gov/dpu/about/', accessed: '2026-10-15' },
    { title: 'R746-200, Residential Utility Service Rules for Electric, Gas, Water, and Sewer Utilities', publisher: 'Utah Office of Administrative Rules', url: 'https://adminrules.utah.gov/public/rule/R746-200/Current%20Rules', accessed: '2026-10-15', note: 'Verified in a browser; the page loads its text with JavaScript.' },
    { title: 'Home Energy Assistance Target (HEAT) Program', publisher: 'Utah Department of Workforce Services', url: 'https://jobs.utah.gov/heat/', accessed: '2026-10-15', note: 'Verified in a browser; the page does not load for scripted requests.' },
    { title: 'How Do I Get Help Paying My Utility Bills?', publisher: 'Utah Division of Public Utilities', url: 'https://commerce.utah.gov/dpu/customer-service/faqs/how-do-i-get-help-paying-my-utility-bills/', accessed: '2026-10-15' },
    { title: 'Division of Consumer Protection', publisher: 'Utah Department of Commerce', url: 'https://commerce.utah.gov/dcp/', accessed: '2026-10-15' },
    { title: 'File a Complaint', publisher: 'Utah Division of Consumer Protection', url: 'https://services.commerce.utah.gov/dcp-complaint/', accessed: '2026-10-15' },
  ],
}
