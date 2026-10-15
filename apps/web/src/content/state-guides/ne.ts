import type { StateGuide } from '../types'

export const ne: StateGuide = {
  code: 'NE',
  lastReviewed: '2026-10-15',
  intro:
    'Nebraska is the only state served at retail entirely by consumer-owned electric utilities: public power districts, cooperatives and city utilities, each answerable to a local board or council.[^1][^2][^6] The state Power Review Board has no say over electric rates, and the Public Service Commission’s utility role covers the two investor-owned gas utilities and private water company rates.[^6][^3][^4]',
  regulator: {
    name: 'Nebraska Public Service Commission (PSC)',
    url: 'https://psc.nebraska.gov/',
    complaintUrl: 'https://psc.nebraska.gov/natural-gas/natural-gas-complaint-form',
    text:
      'The PSC regulates jurisdictional natural gas utilities, telecommunications carriers and private water company rates, among other industries.[^3] Electric utilities fall under a different agency, the Nebraska Power Review Board, and city-owned gas utilities are outside the PSC’s authority.[^1][^10] For gas service or billing problems, contact your gas company first, then use the PSC’s natural gas complaint form.[^5] For electric service, the Nebraska Power Review Board oversees service areas and new power plants, but it has no authority over rates, late payments or shutoff procedures; take those concerns to your utility’s board.[^1][^6]',
  },
  electricity: {
    market: 'regulated',
    text:
      'Nebraska does not allow retail competition among electric suppliers.[^7] Each public power district, cooperative or city utility has the exclusive right to serve customers in its service area, under agreements approved by the Nebraska Power Review Board.[^1][^7] **The Power Review Board has no authority over rates**, so it cannot hear rate complaints; it can step in only if a utility refuses to connect you or treats you differently from other customers in the same rate class.[^6] To raise concerns about rates, contact your public power district board of directors, city council or village board, or your cooperative’s board, the people ultimately responsible for your utility’s operations and policies.[^6]',
    shopping: null,
  },
  gas: {
    text:
      'Since 2003, the PSC has regulated the rates and service quality of Nebraska’s two investor-owned gas utilities, Black Hills Energy and NorthWestern Energy.[^4] City-owned gas utilities are not regulated by the PSC.[^10] Black Hills customers in its Rate Area 5, roughly the western two-thirds of the state, can pick a gas supplier during an annual selection period through the **Choice Gas Program** (the 2026 selection period ended April 22, so check with the PSC for the next one); customers who do not choose are assigned a supplier, and Black Hills still delivers the gas, reads meters and sends the bill.[^8] Black Hills customers in eastern Nebraska and customers of other gas utilities are not eligible.[^8] A state Public Advocate represents gas ratepayers as a group in PSC rate cases.[^9]',
    shopping: { name: 'Nebraska Choice Gas Program (Public Service Commission)', url: 'https://psc.nebraska.gov/natural-gas/choice-gas-program' },
  },
  water: {
    text:
      'The PSC regulates the rates of private water companies.[^3] If your water comes from a city or village system, contact your city council or village board about rates and service. State law requires the same shutoff notice for water as for gas and electric service (see below).[^11]',
  },
  shutoff: {
    text:
      'Under state law, a public or private utility selling water, natural gas or electricity (other than a village-owned utility) must give you notice at least **7 days** before shutting off your home for nonpayment, not counting weekends and holidays.[^11] A certificate from a licensed physician, physician assistant or advanced practice registered nurse, filed within 5 days of the notice, postpones the shutoff at least 30 days if the shutoff would cause a serious health hazard for someone in the home.[^12] You can ask for a conference with the utility to dispute a shutoff, and service cannot be cut off while it is pending.[^12] From November 1 through March 31, the PSC’s cold weather rule gives customers of Black Hills Energy and NorthWestern Energy an extra 30 days past the due date before a gas shutoff; city-owned gas utilities do not have to follow it.[^10]',
  },
  help: [
    {
      name: 'Low Income Home Energy Assistance Program (LIHEAP)',
      url: 'https://dhhs.ne.gov/Pages/Energy-Assistance.aspx',
      summary:
        'The Nebraska Department of Health and Human Services pays part of your heating costs once per heating season (October 1 through March 31) if your income is at or below 150% of the federal poverty level.[^13] It also offers cooling help (June 1 through August 31) for certain households, year-round crisis help that can cover deposits and reconnection fees, and furnace or air conditioner repair help.[^13] If you have a shut-off notice, call (800) 383-4278.[^13]',
    },
    {
      name: 'Weatherization Assistance Program',
      url: 'https://dwee.nebraska.gov/aid/nebraska-weatherization-assistance-program',
      summary:
        'This free program, run by the state through local nonprofit providers, starts with an energy audit and then makes improvements such as insulation and sealing air leaks.[^14] Households with income below 200% of the federal poverty level can qualify.[^14]',
    },
  ],
  consumer: {
    name: 'Nebraska Attorney General’s Office (Protect The Good Life)',
    url: 'https://protectthegoodlife.nebraska.gov/',
    summary:
      'The Attorney General’s Office enforces laws against unfair and deceptive business practices and runs a voluntary complaint resolution process.[^15] Contact the business first; you need to have tried to resolve the issue before filing.[^15]',
  },
  rebates: [
    {
      name: 'Dollar and Energy Saving Loans',
      url: 'https://dwee.nebraska.gov/state-energy-information/dollar-energy-saving-loans',
      summary:
        'The Nebraska Department of Water, Energy, and Environment and participating lenders offer low-interest loans statewide for efficiency upgrades such as insulation.[^16] You apply through a participating Nebraska bank, savings institution or credit union and must meet its credit requirements.[^16]',
    },
  ],
  sources: [
    { title: 'About the NPRB', publisher: 'Nebraska Power Review Board', url: 'https://powerreview.nebraska.gov/about-nprb', accessed: '2026-10-15' },
    { title: 'Welcome', publisher: 'Nebraska Power Review Board', url: 'https://powerreview.nebraska.gov/', accessed: '2026-10-15' },
    { title: 'Nebraska Public Service Commission (home page)', publisher: 'Nebraska Public Service Commission', url: 'https://psc.nebraska.gov/', accessed: '2026-10-15' },
    { title: 'Natural Gas Information', publisher: 'Nebraska Public Service Commission', url: 'https://psc.nebraska.gov/natural-gas/natural-gas-information', accessed: '2026-10-15' },
    { title: 'Natural Gas Consumer Info', publisher: 'Nebraska Public Service Commission', url: 'https://psc.nebraska.gov/natural-gas-consumer-info', accessed: '2026-10-15' },
    { title: 'Complaints', publisher: 'Nebraska Power Review Board', url: 'https://powerreview.nebraska.gov/complaints', accessed: '2026-10-15' },
    { title: 'Deregulation Activities', publisher: 'Nebraska Power Review Board', url: 'https://powerreview.nebraska.gov/deregulation-activities', accessed: '2026-10-15' },
    { title: 'April 22 Choice Gas Selection Deadline Nears (April 15, 2026)', publisher: 'Nebraska Public Service Commission', url: 'https://psc.nebraska.gov/for-consumers/april-22-choice-gas-selection-deadline-nears', accessed: '2026-10-15' },
    { title: 'Public Advocate', publisher: 'Nebraska Public Service Commission', url: 'https://psc.nebraska.gov/natural-gas/public-advocate', accessed: '2026-10-15' },
    { title: 'Helping Ease Winter Struggle’s Goal of PSC Cold Weather Rule (October 30, 2024)', publisher: 'Nebraska Public Service Commission', url: 'https://psc.nebraska.gov/sites/default/files/doc/Helping%20Ease%20Winter%20Struggle%27s%20Goal%20of%20PSC%20Cold%20Weather%20Rule.pdf', accessed: '2026-10-15' },
    { title: 'Neb. Rev. Stat. 70-1605: Discontinuance of service; notice; procedure; limitation on fees', publisher: 'Nebraska Legislature', url: 'https://nebraskalegislature.gov/laws/statutes.php?statute=70-1605', accessed: '2026-10-15' },
    { title: 'Neb. Rev. Stat. 70-1606: Discontinuance of service; notice; contents', publisher: 'Nebraska Legislature', url: 'https://nebraskalegislature.gov/laws/statutes.php?statute=70-1606', accessed: '2026-10-15' },
    { title: 'Energy Assistance (LIHEAP)', publisher: 'Nebraska Department of Health and Human Services', url: 'https://dhhs.ne.gov/Pages/Energy-Assistance.aspx', accessed: '2026-10-15' },
    { title: 'Weatherization Assistance Program', publisher: 'Nebraska Department of Water, Energy, and Environment', url: 'https://dwee.nebraska.gov/aid/nebraska-weatherization-assistance-program', accessed: '2026-10-15' },
    { title: 'File a Consumer Complaint', publisher: 'Nebraska Attorney General', url: 'https://protectthegoodlife.nebraska.gov/file-consumer-complaint', accessed: '2026-10-15' },
    { title: 'Dollar & Energy Saving Loans', publisher: 'Nebraska Department of Water, Energy, and Environment', url: 'https://dwee.nebraska.gov/state-energy-information/dollar-energy-saving-loans', accessed: '2026-10-15' },
  ],
}
