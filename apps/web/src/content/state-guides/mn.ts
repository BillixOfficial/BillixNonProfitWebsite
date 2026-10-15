import type { StateGuide } from '../types'

export const mn: StateGuide = {
  code: 'MN',
  lastReviewed: '2026-10-15',
  intro:
    'In Minnesota, each electric utility has the exclusive right to serve its assigned area, and the Public Utilities Commission sets rates for the major investor-owned electric and gas utilities, such as Xcel Energy, Minnesota Power and CenterPoint Energy.[^3][^1] Minnesota’s Cold Weather Rule protects households that keep a payment agreement from October 1 through April 30.[^4]',
  regulator: {
    name: 'Minnesota Public Utilities Commission (PUC)',
    url: 'https://mn.gov/puc/',
    complaintUrl: 'https://mn.gov/puc/consumers/help/',
    text:
      'The PUC regulates the rates and service quality of investor-owned electric and gas utilities and of city or cooperative utilities whose members chose rate regulation, and it oversees service quality for landline phone companies.[^1] Most city utilities and cooperatives are overseen by their own elected boards or city councils, and cell phones are regulated by the FCC.[^1] The PUC’s Consumer Affairs Office helps with complaints about billing, service quality, and shutoffs and reconnections; call 651-296-0406 or 800-657-3782, or email consumer.puc@state.mn.us.[^2]',
  },
  electricity: {
    market: 'regulated',
    text:
      'State law gives each electric utility the **exclusive right** to provide retail electric service in its assigned service area.[^3] The PUC sets rates and terms of service for the investor-owned electric utilities Xcel Energy, Minnesota Power and Otter Tail Power, plus Dakota Electric Association, a cooperative whose members chose rate regulation.[^1] Other cooperatives and city utilities answer to their own elected boards or city councils.[^1] For a walk-through of your bill, see [how to read your electric bill](/learn/how-to-read-your-electric-bill).',
    shopping: null,
  },
  gas: {
    text:
      'The PUC sets rates and terms of service for the investor-owned gas utilities CenterPoint Energy, Minnesota Energy Resources (MERC), Great Plains Natural Gas, Greater Minnesota Gas and Xcel Energy.[^1] If you heat with gas and qualify for Energy Assistance, you may also qualify for your gas utility’s Low-income Gas Affordability Program (GAP).[^2] There is no state gas shopping website; contact your gas utility with rate questions.',
    shopping: null,
  },
  water: {
    text:
      'The PUC lists the electric, natural gas and telephone utilities it regulates; water utilities are not among them.[^1] For water and sewer rates or service problems, contact your city or the water system that serves you. Learn more in our [water and sewer guide](/categories/water-sewer).',
  },
  shutoff: {
    text:
      'Under the **Cold Weather Rule** (October 1 through April 30), a regulated utility cannot disconnect, and must reconnect, gas or electric heat for a household at or below 50% of state median income that sets up and keeps a payment agreement; the utility cannot require more than 10% of household income toward heating bills.[^4] Households above that income also have the right to a payment agreement and cannot be shut off while they keep it.[^4] During that period, shutoffs are not allowed on weekends, holidays or the day before a holiday, and generally not on Fridays.[^4] City utilities and electric cooperatives must follow similar cold weather protections for income-eligible customers on a payment plan.[^5] Year-round, a utility must continue or restore service when a doctor, physician assistant or advanced practice registered nurse certifies a medical emergency or life-sustaining equipment; if you are behind, you must also set up a payment agreement.[^6] Electric utilities, including co-ops and city utilities, may not shut off homes in an area under a National Weather Service heat advisory or excessive heat watch or warning.[^7]',
  },
  help: [
    {
      name: 'Energy Assistance Program',
      url: 'https://mn.gov/commerce/energy/consumer-assistance/energy-assistance-program/',
      summary:
        'Minnesota’s Energy Assistance Program helps households with eligible incomes pay heating and power costs, free of charge; renters and homeowners can both qualify. Check the page for this season’s benefit amounts.[^2]',
    },
    {
      name: 'Weatherization Assistance Program',
      url: 'https://mn.gov/commerce/energy/consumer-assistance/wap/',
      summary: 'This program offers free home energy upgrades that permanently reduce energy costs for eligible households.[^2]',
    },
    {
      name: 'Low-income electric rate discounts and Gas Affordability Program (PUC)',
      url: 'https://mn.gov/puc/consumers/help/',
      summary:
        'If you receive energy assistance, you may qualify for a credit on your electric bill, and gas-heated homes may qualify for GAP; ask your utility.[^2] By law, utilities must also offer a payment agreement for past-due balances, and most must offer budget billing.[^6]',
    },
  ],
  consumer: {
    name: 'Minnesota Attorney General Consumer Action Division',
    url: 'https://www.ag.state.mn.us/Office/Complaint.asp',
    summary:
      'The Attorney General’s Consumer Action Division offers an informal complaint resolution service, contacting businesses to try to resolve disputes voluntarily.[^8] The office cannot file lawsuits for individuals or give legal advice.[^8]',
  },
  rebates: [],
  sources: [
    { title: 'What We Regulate', publisher: 'Minnesota Public Utilities Commission', url: 'https://mn.gov/puc/about-us/what-we-regulate/', accessed: '2026-10-15', note: 'Site blocks scripted requests; read via WebFetch.' },
    { title: 'Gas and electric bill assistance', publisher: 'Minnesota Public Utilities Commission', url: 'https://mn.gov/puc/consumers/help/', accessed: '2026-10-15', note: 'Site blocks scripted requests; verified in a browser.' },
    { title: 'Minn. Stat. 216B.40: Exclusive service right; service extension', publisher: 'Minnesota Office of the Revisor of Statutes', url: 'https://www.revisor.mn.gov/statutes/cite/216B.40', accessed: '2026-10-15' },
    { title: 'Minn. Stat. 216B.096: Cold weather rule; public utility', publisher: 'Minnesota Office of the Revisor of Statutes', url: 'https://www.revisor.mn.gov/statutes/cite/216B.096', accessed: '2026-10-15' },
    { title: 'Minn. Stat. 216B.097: Cold weather rule; cooperative or municipal utility', publisher: 'Minnesota Office of the Revisor of Statutes', url: 'https://www.revisor.mn.gov/statutes/cite/216B.097', accessed: '2026-10-15' },
    { title: 'Minn. Stat. 216B.098: Residential customer protections', publisher: 'Minnesota Office of the Revisor of Statutes', url: 'https://www.revisor.mn.gov/statutes/cite/216B.098', accessed: '2026-10-15' },
    { title: 'Minn. Stat. 216B.0975: Disconnection during extreme heat conditions', publisher: 'Minnesota Office of the Revisor of Statutes', url: 'https://www.revisor.mn.gov/statutes/cite/216B.0975', accessed: '2026-10-15' },
    { title: 'File a Complaint', publisher: 'Minnesota Attorney General', url: 'https://www.ag.state.mn.us/Office/Complaint.asp', accessed: '2026-10-15' },
  ],
}
