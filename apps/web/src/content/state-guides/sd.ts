import type { StateGuide } from '../types'

export const sd: StateGuide = {
  code: 'SD',
  lastReviewed: '2026-10-15',
  intro:
    'In South Dakota, every electric utility has its own exclusive service territory, so your address decides who supplies your power.[^2] The Public Utilities Commission sets rates for six investor-owned electric companies and three investor-owned gas companies; rural electric cooperatives and city utilities are run by boards their own customers or residents elect.[^2][^4]',
  regulator: {
    name: 'South Dakota Public Utilities Commission (PUC)',
    url: 'https://puc.sd.gov/',
    complaintUrl: 'https://puc.sd.gov/consumer/consumercomplaints.aspx',
    text:
      'The PUC, led by three elected commissioners, regulates investor-owned electric, natural gas and telephone utilities and makes sure they charge just and reasonable rates.[^1] It has a more limited role with cooperative and municipal utilities.[^1] **Try to resolve a dispute with the company first.** If that fails, contact the PUC online, by email, or at (605) 773-3201 or (800) 332-1782, and a consumer affairs representative will investigate and try to help you and the utility settle it.[^3]',
  },
  electricity: {
    market: 'regulated',
    text:
      'Since 1975, state law has given each electric utility an **exclusive right** to provide retail service in its territory, along with a duty to serve everyone there; only a PUC order can change those boundaries.[^2] The PUC regulates the rates of six investor-owned utilities: Black Hills Energy, MidAmerican Energy, Montana-Dakota Utilities, NorthWestern Energy, Otter Tail Power and Xcel Energy.[^2] Rural electric cooperatives and municipal systems are not rate-regulated by the PUC, because their members or residents elect the people who run them.[^2] For help with the charges on your bill, see [how to read your electric bill](/learn/how-to-read-your-electric-bill).',
    shopping: null,
  },
  gas: {
    text:
      'Three investor-owned gas companies, Montana-Dakota Utilities, MidAmerican Energy and NorthWestern Energy, serve South Dakota and are regulated by the PUC.[^4] Crooks, Garretson, Humboldt and Watertown have city-owned gas utilities.[^4] There is no state gas shopping website; contact your gas utility with rate questions.',
    shopping: null,
  },
  water: {
    text:
      'The PUC regulates investor-owned electric, natural gas and telephone utilities; water utilities are not on that list.[^1] For water and sewer rates or service problems, contact your city or the water system that serves you.',
  },
  shutoff: {
    text:
      'For PUC-regulated gas and electric utilities, you must get at least 20 days from billing to due date, plus a further notice period of at least 10 days, before a shutoff for nonpayment.[^5] Before a first-ever disconnection, the utility must also notify you personally by phone, a visit or a certificate of mailing.[^5] From **November 1 to March 31**, the utility must add another 30 days before disconnecting a home and tell you about the extra time.[^7] A physician’s certificate, or a notice from a public health or social services official, that a shutoff would worsen a medical emergency postpones it 30 days, one time.[^8] Shutoffs are not allowed on Fridays, weekends, legal holidays, or when the utility’s offices are closed.[^6] The PUC does not regulate the shutoff policies of electric cooperatives and city electric utilities.[^2]',
  },
  help: [
    {
      name: 'Low Income Energy Assistance Program (LIEAP)',
      url: 'https://dss.sd.gov/economicassistance/energyassistance/',
      summary:
        'The South Dakota Department of Social Services’ Office of Energy Assistance helps low-income households pay home heating costs, with the payment sent directly to your energy supplier.[^9] Its Energy Crisis Intervention Program (ECIP) can help if you have a disconnection notice for your main heat source; call 800-233-8503.[^9]',
    },
    {
      name: 'Weatherization Assistance Program',
      url: 'https://dss.sd.gov/economicassistance/energyassistance/',
      summary:
        'Also run by the Department of Social Services, this program makes low-income homes more energy efficient with work such as weather-stripping, insulation and heating system repair, done by four community action programs.[^9][^10]',
    },
  ],
  consumer: {
    name: 'South Dakota Attorney General Division of Consumer Protection',
    url: 'https://consumer.sd.gov/',
    summary:
      'The Division of Consumer Protection investigates false, misleading or deceptive trade practices, and its investigators help mediate consumer complaints.[^11] Call (605) 773-4400 or 1-800-300-1986 (in-state), or email consumerhelp@state.sd.us.[^12]',
  },
  rebates: [],
  sources: [
    { title: 'About the PUC', publisher: 'South Dakota Public Utilities Commission', url: 'https://puc.sd.gov/whatispuc/default.aspx', accessed: '2026-10-15' },
    { title: 'South Dakota Electric Service Laws FAQ', publisher: 'South Dakota Public Utilities Commission', url: 'https://puc.sd.gov/Publications/electriclawsfaq.aspx', accessed: '2026-10-15' },
    { title: 'Consumer and Utility Provider Disputes and Complaints', publisher: 'South Dakota Public Utilities Commission', url: 'https://puc.sd.gov/consumer/consumercomplaints.aspx', accessed: '2026-10-15' },
    { title: 'South Dakota Utility Providers', publisher: 'South Dakota Public Utilities Commission', url: 'https://puc.sd.gov/consumer/sdutilityproviders.aspx', accessed: '2026-10-15' },
    { title: 'ARSD 20:10:20:03: Nonpayment of past due bills as reason for disconnection', publisher: 'South Dakota Legislature (Administrative Rules)', url: 'https://sdlegislature.gov/api/Rules/20:10:20:03.html', accessed: '2026-10-15' },
    { title: 'ARSD 20:10:20:06: The disconnecting act', publisher: 'South Dakota Legislature (Administrative Rules)', url: 'https://sdlegislature.gov/api/Rules/20:10:20:06.html', accessed: '2026-10-15' },
    { title: 'ARSD 20:10:20:10: Residential winter disconnection', publisher: 'South Dakota Legislature (Administrative Rules)', url: 'https://sdlegislature.gov/api/Rules/20:10:20:10.html', accessed: '2026-10-15' },
    { title: 'ARSD 20:10:20:11: Residential medical emergency', publisher: 'South Dakota Legislature (Administrative Rules)', url: 'https://sdlegislature.gov/api/Rules/20:10:20:11.html', accessed: '2026-10-15' },
    { title: 'Energy and Weatherization Assistance', publisher: 'South Dakota Department of Social Services', url: 'https://dss.sd.gov/economicassistance/energyassistance/', accessed: '2026-10-15', note: 'Page content loads by script; verified in a browser.' },
    { title: 'Payment Assistance and Budgeting', publisher: 'South Dakota Public Utilities Commission', url: 'https://puc.sd.gov/consumer/help.aspx', accessed: '2026-10-15' },
    { title: 'Who We Are', publisher: 'South Dakota Attorney General, Division of Consumer Protection', url: 'https://consumer.sd.gov/whoweare.aspx', accessed: '2026-10-15' },
    { title: 'Contact Us', publisher: 'South Dakota Attorney General, Division of Consumer Protection', url: 'https://consumer.sd.gov/contact.aspx', accessed: '2026-10-15' },
  ],
}
