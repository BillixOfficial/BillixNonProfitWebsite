import type { StateGuide } from '../types'

export const md: StateGuide = {
  code: 'MD',
  lastReviewed: '2026-10-15',
  intro:
    'Maryland customers can buy electricity and natural gas supply from a retail energy supplier instead of their utility, though 2024 reforms led some suppliers to stop serving homes.[^4][^5] The state also limits shutoffs in extreme cold and heat and runs year-round energy bill assistance through the Office of Home Energy Programs.[^2][^6]',
  regulator: {
    name: 'Maryland Public Service Commission (PSC)',
    url: 'https://psc.maryland.gov/',
    complaintUrl: 'https://psc.maryland.gov/online-services/file-a-complaint/',
    text:
      'The Maryland Public Service Commission[^1] regulates gas, electric, telephone and for-profit water and sewage companies, and it licenses gas and electric suppliers.[^2] **You must contact your utility or supplier first**; if you are not satisfied, file a complaint with the PSC\'s Consumer Affairs Division, which offers free dispute resolution, including for disputes with suppliers.[^2] You can reach the division at 1-800-492-0474.[^2] While a dispute is pending, you can hold back the disputed amount, but you must keep paying the undisputed part and new bills.[^2]',
  },
  electricity: {
    market: 'choice',
    text:
      'You can buy electricity for your home from a retail energy supplier instead of your utility.[^4] If you do not choose a supplier, your utility sells you Standard Offer Service (SOS), which it buys through competitive bids regulated by the PSC.[^3] Your utility must give you its current supply price so you can compare it with supplier offers.[^3] A 2024 state law tightened oversight of suppliers, so you may see fewer residential offers than before.[^4] See [supply vs. delivery charges](/learn/supply-vs-delivery-charges).',
    shopping: { name: 'MD Electric Choice (Maryland PSC)', url: 'https://www.mdelectricchoice.com/' },
  },
  gas: {
    text:
      'Residential gas customers can also choose to buy gas supply from a retail energy supplier instead of their utility.[^5] The PSC runs an official gas choice site for comparing offers, and the same 2024 reforms apply.[^5]',
    shopping: { name: 'MD Gas Choice (Maryland PSC)', url: 'https://www.mdgaschoice.com/' },
  },
  water: {
    text:
      'The PSC regulates for-profit water and sewage companies.[^2] If your water comes from a city, county or public water authority, contact that provider about its rates. See [water and sewer bills](/categories/water-sewer).',
  },
  shutoff: {
    text:
      'From **November 1 to March 31**, a gas or electric utility cannot shut off a home for nonpayment unless it first files an affidavit with the PSC, at least 24 hours ahead, certifying that the shutoff does not threaten anyone\'s life or health.[^2] In winter, no shutoff for nonpayment is allowed when the 6 a.m. forecast is 32 degrees or below; in summer, electric service (and gas used for cooling) cannot be shut off when the 6 a.m. forecast is 95 degrees or above.[^2] If someone in your home has a serious medical condition or needs life support equipment, tell the utility before the notice expires; a certification stops termination for an additional 30 days while you set up a payment plan.[^2] If you get a termination notice, call your utility right away to ask for an extension or payment arrangement.[^2]',
  },
  help: [
    {
      name: 'Maryland Energy Assistance Program (MEAP)',
      url: 'https://dhs.maryland.gov/office-of-home-energy-programs/about-energy-assistance/',
      summary:
        'The Department of Human Services\' Office of Home Energy Programs (OHEP) runs MEAP, which helps low-income households with home heating bills by paying the fuel supplier or utility for you.[^6] You can apply at any time during the year, and you do not need a turn-off notice to qualify.[^6] The program year runs July to June, and you must reapply each year.[^6][^7]',
    },
    {
      name: 'Electric Universal Service Program (EUSP)',
      url: 'https://dhs.maryland.gov/office-of-home-energy-programs/about-energy-assistance/',
      summary:
        'EUSP is OHEP\'s electric bill grant, available once per program year.[^6] OHEP also offers Arrearage Retirement Assistance of up to $2,000 for past-due electric and gas bills of $300 or more.[^6]',
    },
    {
      name: 'Utility Service Protection Program (USPP)',
      url: 'https://dhs.maryland.gov/office-of-home-energy-programs/about-energy-assistance/',
      summary:
        'USPP protects low-income families from utility turn-offs during the heating season.[^6] All MEAP-eligible customers can join, but you must stay on year-round [budget billing](/glossary#budget-billing) and keep up with payments.[^6]',
    },
  ],
  consumer: {
    name: 'Maryland Attorney General Consumer Protection Division',
    url: 'https://oag.maryland.gov/i-need-to/Pages/business-complaints.aspx',
    summary:
      'The Consumer Protection Division helps Maryland consumers resolve disputes with businesses through mediation, and you can file a complaint online through its portal.[^8] Utility bill and supplier disputes go to the PSC\'s Consumer Affairs Division.[^2]',
  },
  rebates: [
    {
      name: 'EmPOWER Maryland',
      url: 'https://psc.maryland.gov/regulated-utilities/electricity/energy-efficiency-and-empower-maryland/',
      summary:
        'Under EmPOWER Maryland, the state\'s five largest electric utilities offer programs such as appliance rebates, HVAC incentives and Home Performance with ENERGY STAR, and BGE and Washington Gas offer natural gas programs.[^9] Check your utility\'s program page, linked from the PSC.[^9]',
    },
  ],
  sources: [
    { title: 'Maryland Public Service Commission', publisher: 'Maryland Public Service Commission', url: 'https://psc.maryland.gov/', accessed: '2026-10-15' },
    { title: 'Consumer FAQs', publisher: 'Maryland Public Service Commission', url: 'https://psc.maryland.gov/get-help/consumer-faqs/', accessed: '2026-10-15' },
    { title: 'Standard Offer Service', publisher: 'Maryland Public Service Commission', url: 'https://psc.maryland.gov/regulated-utilities/electricity/standard-offer-service/', accessed: '2026-10-15' },
    { title: 'MD Electric Choice', publisher: 'Maryland Public Service Commission', url: 'https://www.mdelectricchoice.com/', accessed: '2026-10-15' },
    { title: 'MD Gas Choice', publisher: 'Maryland Public Service Commission', url: 'https://www.mdgaschoice.com/', accessed: '2026-10-15' },
    { title: 'Energy Assistance', publisher: 'Maryland Department of Human Services, Office of Home Energy Programs', url: 'https://dhs.maryland.gov/office-of-home-energy-programs/about-energy-assistance/', accessed: '2026-10-15' },
    { title: 'Applying for Energy Assistance?', publisher: 'Maryland Department of Human Services, Office of Home Energy Programs', url: 'https://dhs.maryland.gov/office-of-home-energy-programs/', accessed: '2026-10-15' },
    { title: 'Business Complaints', publisher: 'Maryland Office of the Attorney General', url: 'https://oag.maryland.gov/i-need-to/Pages/business-complaints.aspx', accessed: '2026-10-15' },
    { title: 'Energy Efficiency and EmPOWER Maryland', publisher: 'Maryland Public Service Commission', url: 'https://psc.maryland.gov/regulated-utilities/electricity/energy-efficiency-and-empower-maryland/', accessed: '2026-10-15' },
  ],
}
