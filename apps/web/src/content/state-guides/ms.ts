import type { StateGuide } from '../types'

export const ms: StateGuide = {
  code: 'MS',
  lastReviewed: '2026-10-15',
  intro:
    'In Mississippi, the Public Service Commission sets rates for investor-owned electric, gas and private water companies, but not for city-owned utilities, electric cooperatives or rural water associations.[^2] In parts of the state, power comes from the Tennessee Valley Authority (TVA) through 28 local power companies.[^6]',
  regulator: {
    name: 'Mississippi Public Service Commission (MPSC)',
    url: 'https://www.psc.ms.gov/',
    complaintUrl: 'https://ctsportal.psc.ms.gov/portal/Workflow/Run?workflowId=gb7c65056-6fc2-40df-965e-81966b7748da',
    text:
      'The MPSC regulates investor-owned electric and gas utilities, private water and sewer companies, and independent telecommunications companies. It is charged with making sure rates are just and reasonable and service is adequate.[^1][^2] It does **not** have rate-setting authority over city-owned gas and electric utilities, electric membership cooperatives or rural water associations, though it says it still works to ensure they give quality service.[^2] The Commission encourages you to try to settle a dispute with your utility first. If that fails, you can file a complaint through its independent complaint process using the online form.[^3][^4]',
  },
  electricity: {
    market: 'regulated',
    text:
      'For investor-owned electric utilities, the MPSC sets rates and charges, which must be just and reasonable.[^1][^2] The MPSC does not set rates for electric membership cooperatives or city-owned electric utilities, so take rate questions to those providers.[^2] TVA supplies power to about 930,000 Mississippians through 28 local power companies.[^6] Federal law lets TVA include resale rate schedules in its power contracts with those companies, so ask your local power company how its rates are set.[^7] See [supply vs. delivery charges](/learn/supply-vs-delivery-charges) to understand your bill.',
    shopping: null,
  },
  gas: {
    text:
      'The MPSC regulates investor-owned gas utilities.[^2] It does not set rates for city-owned gas utilities, so take rate questions about a city gas system to that system.[^2] The MPSC brochure does not mention any program for buying gas from a separate supplier.[^2]',
    shopping: null,
  },
  water: {
    text:
      'The MPSC regulates private water and sewer companies.[^2] It does not set rates for rural water associations.[^2] City-owned utilities are also outside its rate authority, so contact your city or water system about municipal water rates.[^2] See [water and sewer bills](/categories/water-sewer) for how these bills work.',
  },
  shutoff: {
    text:
      'The MPSC service rules apply to utilities under the Commission\'s jurisdiction, to the extent of that jurisdiction.[^5] Under them, you must get **at least five days of written notice** before a shutoff for nonpayment, and service cannot be cut off on a weekend or utility holiday unless the utility is open to take payment and restore service.[^5] A written notice from a doctor licensed in Mississippi or an adjoining state, saying a shutoff would create a life-threatening situation, delays disconnection for 60 days.[^5] Electric or gas service cannot be cut off for nonpayment if the National Weather Service has issued a freeze warning for your county as of 8 a.m. on the scheduled day; electric service is also protected by an Excessive Heat Warning.[^5] From December through March, the "mid-winter rule" lets a customer in extreme financial difficulty avoid electric or gas disconnection by filing a signed statement and following a set payment plan.[^5][^4] Service also cannot be cut off if you have been approved for LIHEAP benefits that cover the delinquent balance within 30 days and the utility has been told.[^5]',
  },
  help: [
    {
      name: 'Low-Income Home Energy Assistance Program (LIHEAP)',
      url: 'https://www.mdhs.ms.gov/community/liheap/',
      summary:
        'The Mississippi Department of Human Services (MDHS) offers LIHEAP and the emergency Energy Crisis Intervention Program (ECIP) in all 82 counties while funds last. Households typically qualify with income at or below 60% of the state median income. Apply through the Access MS online portal, and your local Community Action Agency will schedule an appointment. Approved payments go straight to your energy provider.[^8]',
    },
    {
      name: 'Weatherization Assistance Program',
      url: 'https://www.mdhs.ms.gov/wap/',
      summary:
        'MDHS and local Community Action Agencies improve the energy efficiency of homes for households within 200% of the federal poverty guidelines. You apply the same way as for LIHEAP, through the Access MS portal.[^9]',
    },
  ],
  consumer: {
    name: 'Mississippi Attorney General Consumer Protection Division',
    url: 'https://attorneygenerallynnfitch.com/divisions/consumer-protection/',
    summary:
      'The division enforces the Mississippi Consumer Protection Act and offers consumer mediators you can reach through an online complaint form. It also carries out the Attorney General\'s duties before the Public Service Commission and monitors cases that may affect consumers.[^10]',
  },
  rebates: [],
  sources: [
    { title: 'Mississippi Public Service Commission (About Us)', publisher: 'Mississippi Public Service Commission', url: 'https://www.psc.ms.gov/home/home', accessed: '2026-10-15' },
    { title: 'MPSC brochure (2024)', publisher: 'Mississippi Public Service Commission', url: 'https://www.psc.ms.gov/sites/default/files/2024-08/MPSCbrochure2024.pdf', accessed: '2026-10-15' },
    { title: 'File Utility Complaint', publisher: 'Mississippi Public Service Commission', url: 'https://ctsportal.psc.ms.gov/portal/Workflow/Run?workflowId=gb7c65056-6fc2-40df-965e-81966b7748da', accessed: '2026-10-15' },
    { title: 'Mississippi Ratepayers\' Bill of Rights', publisher: 'Mississippi Public Service Commission', url: 'https://www.psc.ms.gov/sites/default/files/Documents/Mississippi%20Ratepayers%20Bill%20of%20Rights.pdf', accessed: '2026-10-15' },
    { title: 'Rules and Regulations Governing Public Utility Service', publisher: 'Mississippi Public Service Commission', url: 'https://www.psc.ms.gov/sites/default/files/Documents/Service%20Rules.pdf', accessed: '2026-10-15' },
    {
      title: 'TVA in Mississippi (FY 2025 fact sheet)',
      publisher: 'Tennessee Valley Authority',
      url: 'https://tva-azr-eastus-cdn-ep-tvawcm-prd.azureedge.net/cdn-tvawcma/docs/default-source/about-tva/fact-sheets/state-fact-sheets-fy25/mississippi-fact-sheet-fy25-v2.pdf?sfvrsn=7d570876_1',
      accessed: '2026-10-15',
      note: 'Linked from tva.com/about-tva.',
    },
    {
      title: '16 U.S. Code § 831i (TVA Act, sale of power)',
      publisher: 'Legal Information Institute, Cornell Law School (text of federal statute)',
      url: 'https://www.law.cornell.edu/uscode/text/16/831i',
      accessed: '2026-10-15',
    },
    { title: 'Low-Income Home Energy Assistance Program', publisher: 'Mississippi Department of Human Services', url: 'https://www.mdhs.ms.gov/community/liheap/', accessed: '2026-10-15' },
    { title: 'Weatherization Assistance Program', publisher: 'Mississippi Department of Human Services', url: 'https://www.mdhs.ms.gov/wap/', accessed: '2026-10-15' },
    { title: 'Consumer Protection Division', publisher: 'Office of the Mississippi Attorney General', url: 'https://attorneygenerallynnfitch.com/divisions/consumer-protection/', accessed: '2026-10-15' },
  ],
}
