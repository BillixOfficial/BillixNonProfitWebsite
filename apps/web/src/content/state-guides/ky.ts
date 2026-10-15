import type { StateGuide } from '../types'

export const ky: StateGuide = {
  code: 'KY',
  lastReviewed: '2026-10-15',
  intro:
    'The Kentucky Public Service Commission regulates investor-owned utilities and also rural electric co-ops and water districts.[^1] It does not regulate TVA-supplied electric utilities or city-owned utilities, and some Kentucky homes buy power from one of 14 local power companies that get it from the Tennessee Valley Authority (TVA).[^1][^4]',
  regulator: {
    name: 'Kentucky Public Service Commission (PSC)',
    url: 'https://psc.ky.gov/',
    complaintUrl: 'https://psc.ky.gov/WebNet/Inquiry',
    text:
      'The PSC regulates the rates and services of investor-owned electric, natural gas, telephone, water and sewer utilities, rural electric and telephone cooperatives, and water districts and associations.[^1] It does **not** regulate TVA-supplied electric utilities, utilities owned by local governments (except for natural gas safety and wholesale rates), sanitation districts or cable TV.[^1] Contact your utility first and ask for a supervisor if needed. If that does not work, contact PSC Consumer Services or use its online utility inquiry form; you can also file a formal complaint and ask for a hearing.[^1][^2]',
  },
  electricity: {
    market: 'regulated',
    text:
      'For investor-owned utilities and rural electric co-ops, the PSC regulates rates and service, and each utility\'s approved tariff lays out its rates and rules.[^1] Kentucky has 30 city-owned electric systems. Ten buy wholesale power from TVA and are regulated by TVA; the rest are self-regulated by the city.[^3] TVA serves more than 550,000 Kentuckians through 14 local power companies.[^4] Federal law lets TVA include resale rate schedules in its power contracts, so ask your TVA-supplied utility how its rates are set.[^5] See [how to read your electric bill](/learn/how-to-read-your-electric-bill).',
    shopping: null,
  },
  gas: {
    text:
      'The PSC regulates investor-owned natural gas utilities.[^1] One of them, Columbia Gas of Kentucky, runs a Customer CHOICE program that lets eligible customers buy gas from a certified marketer. The PSC ordered Columbia to continue the program until March 31, 2028.[^6][^7] **Compare before you switch:** Columbia\'s 2026 annual report to the PSC lists the program\'s total "savings" from its start in 2000 through April 30, 2026 as negative $81,529,405. In plain terms, Choice customers as a group paid about $81.5 million more than they would have paid if they had stayed with Columbia for their gas.[^7] See [supply vs. delivery charges](/learn/supply-vs-delivery-charges).',
    shopping: null,
  },
  water: {
    text:
      'The PSC regulates investor-owned water and sewer utilities and also water districts and water associations.[^1] It does not regulate utilities owned and run by local governments, or sanitation districts.[^1] If a city system serves you, contact the city about rates. Water, sewer and telephone utilities the PSC regulates must give five days of written notice before a shutoff for nonpayment, and not sooner than 20 days after the original bill date.[^1] See [water and sewer bills](/categories/water-sewer).',
  },
  shutoff: {
    text:
      'Under PSC rules, a gas or electric utility must give **10 days of written notice** before shutting off service for nonpayment, and cannot cut service sooner than 27 days after the original bill was mailed.[^8] A medical certificate from a physician, registered nurse or public health officer, saying a shutoff would aggravate a debilitating illness, delays it for 30 days.[^8] If you get a termination notice between November 1 and March 31, a **certificate of need** from the Cabinet for Health and Family Services (or its designee) delays a gas or electric shutoff for 30 days if your income is at or below 130% of the poverty level or you qualify for energy assistance. You must present it during the 10-day notice period, make a good-faith payment and agree to a plan to be current by October 15.[^8] From November 1 through March 31, a disconnected customer with a certificate of need can be reconnected by paying one-third of the bill or $200, whichever is less, and agreeing to a repayment plan.[^8] Utilities must negotiate reasonable partial payment plans.[^8] These PSC rules do not cover TVA-supplied or city-owned utilities.[^1]',
  },
  help: [
    {
      name: 'Low Income Home Energy Assistance Program (LIHEAP)',
      url: 'https://www.chfs.ky.gov/agencies/dcbs/dfs/pdb/Pages/liheap.aspx',
      summary:
        'The Cabinet for Health and Family Services contracts with Community Action Agencies across Kentucky to take LIHEAP applications. The heating program has a subsidy component and a crisis component for households facing loss of heat, and a summer cooling component when extra funds are available.[^9]',
    },
    {
      name: 'Weatherization Assistance Program',
      url: 'https://www.kyhousing.org/programs/administering-weatherization',
      summary:
        'Kentucky Housing Corporation funds Community Action Agencies and other nonprofits that make free energy-efficiency retrofits, such as insulation, air sealing, duct repairs and, if needed, heating equipment replacement, for eligible low-income households.[^10]',
    },
  ],
  consumer: {
    name: 'Kentucky Attorney General Office of Consumer Protection',
    url: 'https://www.ag.ky.gov/about/Office-Divisions/OCP/Pages/default.aspx',
    summary:
      'The office enforces the Kentucky Consumer Protection Act. If you cannot resolve a consumer problem with a business, you can file an online complaint to request mediation, or report scams.[^11] For utility bill and service problems, start with the PSC.[^1]',
  },
  rebates: [
    {
      name: 'Kentucky Home Energy Rebates Program',
      url: 'https://energyrebates.ky.gov/',
      summary:
        'The Energy and Environment Cabinet\'s Office of Energy Policy will run this federally funded program, but as of October 2026 rebates are **not yet available** and applications are not being accepted until the U.S. Department of Energy approves the state\'s plans. Anyone offering these rebates now is misinformed.[^12]',
    },
  ],
  sources: [
    { title: 'Road Map to Utility Services in Kentucky', publisher: 'Kentucky Public Service Commission', url: 'https://psc.ky.gov/Home/UtilityServiceRoadmap', accessed: '2026-10-15' },
    { title: 'Utility Inquiry Form', publisher: 'Kentucky Public Service Commission', url: 'https://psc.ky.gov/WebNet/Inquiry', accessed: '2026-10-15' },
    { title: 'Electric Distribution Service Areas (map)', publisher: 'Kentucky Public Service Commission', url: 'https://psc.ky.gov/agencies/psc/images/Electric_Service_Area_Map.pdf', accessed: '2026-10-15' },
    {
      title: 'TVA in Kentucky (FY 2025 fact sheet)',
      publisher: 'Tennessee Valley Authority',
      url: 'https://tva-azr-eastus-cdn-ep-tvawcm-prd.azureedge.net/cdn-tvawcma/docs/default-source/about-tva/fact-sheets/state-fact-sheets-fy25/kentucky-fact-sheet-fy25.pdf?sfvrsn=4bbfb347_1',
      accessed: '2026-10-15',
      note: 'Linked from tva.com/about-tva.',
    },
    {
      title: '16 U.S. Code § 831i (TVA Act, sale of power)',
      publisher: 'Legal Information Institute, Cornell Law School (text of federal statute)',
      url: 'https://www.law.cornell.edu/uscode/text/16/831i',
      accessed: '2026-10-15',
    },
    { title: 'Case No. 2021-00386 filings (Columbia Gas of Kentucky)', publisher: 'Kentucky Public Service Commission', url: 'https://psc.ky.gov/Case/ViewCaseFilings/2021-00386', accessed: '2026-10-15' },
    {
      title: 'Customer CHOICE Program 2026 Annual Report',
      publisher: 'Columbia Gas of Kentucky, Inc. (filed with the Kentucky Public Service Commission)',
      url: 'https://psc.ky.gov/pscecf/2021-00386/jmcoop%40nisource.com/06012026064814/Choice_Annual_Report_2026.pdf',
      accessed: '2026-10-15',
    },
    { title: '807 KAR 5:006, General rules', publisher: 'Kentucky Legislative Research Commission', url: 'https://apps.legislature.ky.gov/law/kar/titles/807/005/006/', accessed: '2026-10-15' },
    { title: 'Low Income Home Energy Assistance Program (LIHEAP)', publisher: 'Kentucky Cabinet for Health and Family Services', url: 'https://www.chfs.ky.gov/agencies/dcbs/dfs/pdb/Pages/liheap.aspx', accessed: '2026-10-15' },
    { title: 'Administering Weatherization', publisher: 'Kentucky Housing Corporation', url: 'https://www.kyhousing.org/programs/administering-weatherization', accessed: '2026-10-15' },
    { title: 'Office of Consumer Protection', publisher: 'Office of the Kentucky Attorney General', url: 'https://www.ag.ky.gov/about/Office-Divisions/OCP/Pages/default.aspx', accessed: '2026-10-15' },
    { title: 'Kentucky Energy Rebates Program', publisher: 'Kentucky Energy and Environment Cabinet, Office of Energy Policy', url: 'https://energyrebates.ky.gov/', accessed: '2026-10-15' },
  ],
}
