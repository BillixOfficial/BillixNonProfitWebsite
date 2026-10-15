import type { StateGuide } from '../types'

export const in_: StateGuide = {
  code: 'IN',
  lastReviewed: '2026-10-15',
  intro:
    'Indiana electric utilities generate most of their power at plants they own, and the Indiana Utility Regulatory Commission (IURC) must approve rate changes for the utilities under its authority.[^3][^1] Many municipal utilities and all rural electric cooperatives set their rates locally instead.[^3][^8]',
  regulator: {
    name: 'Indiana Utility Regulatory Commission (IURC)',
    url: 'https://www.in.gov/iurc/',
    complaintUrl: 'https://www.in.gov/iurc/customer-assistance/',
    text:
      'The IURC regulates electric, natural gas, steam, water, and wastewater utilities.[^1] Municipal utilities, not-for-profit utilities, and some electric companies can remove themselves from parts of its authority, such as rates. Most municipal utilities have done so, and for those, rates are set by the elected city or town council.[^1][^8] Try to resolve the problem with your utility first. Then contact the IURC Consumer Affairs Division at 1-800-851-4268 or through its online complaint form.[^2][^14] The Indiana Office of Utility Consumer Counselor (OUCC) represents customers in cases before the IURC.[^2]',
  },
  electricity: {
    market: 'regulated',
    text:
      'Indiana electric utilities generate most of their electricity at plants they own and operate, and may also buy power on the wholesale market.[^3] The IURC regulates 5 investor-owned utilities and 9 municipal electric utilities. Base rates can only change through an IURC proceeding. Fuel costs are passed through to customers dollar for dollar, without profit, after IURC approval in periodic fuel adjustment reviews.[^3] Sixty-seven municipal electric utilities and all rural electric membership cooperatives (REMCs) have left IURC rate regulation, so their rates are set locally.[^3] The IURC still keeps authority over every Indiana electric utility\'s service territory and new generation facilities.[^4] See [how to read your electric bill](/learn/how-to-read-your-electric-bill).',
    shopping: null,
  },
  gas: {
    text:
      'The IURC regulates natural gas utility rates and reviews gas cost adjustments; some gas utilities have withdrawn from parts of its rate authority, but the IURC keeps pipeline safety oversight over all of them.[^5] NIPSCO runs a CHOICE program, with suppliers registered through the IURC.[^5] Under it, eligible NIPSCO customers can buy gas from a certified supplier while NIPSCO keeps delivering it and reading the meter. NIPSCO notes there is **no guarantee of savings**, so check contract length and whether you can cancel.[^6]',
    shopping: null,
  },
  water: {
    text:
      'The IURC regulates rates, charges, and quality of service for the water and wastewater utilities under its authority.[^7] Most municipal water utilities have withdrawn from IURC oversight, so their rates are set by the elected city or town council, and state law does not give the IURC jurisdiction over municipal sewer utilities.[^8] Your water bill or local government can tell you which applies to you. See [water and sewer bills](/categories/water-sewer).',
  },
  shutoff: {
    text:
      'Under Indiana\'s **winter moratorium**, electric and natural gas utilities cannot disconnect your heat source from **December 1 through March 15** if you receive Energy Assistance Program (EAP) help, or qualify, have applied, and have given the utility written proof.[^2][^9] It covers investor-owned and municipal utilities and REMCs, but not propane, water, or phone service. You still owe the bills you run up.[^9] If you provide a medical statement from a licensed doctor or public health official, the utility must postpone a disconnection for 10 days.[^9] A utility is only required to offer a payment arrangement once in any 12-month period, so call before your disconnection date.[^2]',
  },
  help: [
    {
      name: 'Energy Assistance Program (EAP)',
      url: 'https://www.in.gov/ihcda/homeowners-and-renters/low-income-home-energy-assistance-program-liheap',
      summary:
        'Indiana\'s LIHEAP-funded program gives a one-time annual benefit, paid to your utility, to help with heat and electric bills, including if you are disconnected or about to be. Households at or below 60 percent of state median income may qualify. Applications for the 2027 program year run October 1, 2026, through April 30, 2027; check the page for the current season\'s dates. Apply online, by mail, or in person through your Local Service Provider.[^10]',
    },
    {
      name: 'Weatherization Assistance Program (WAP)',
      url: 'https://www.in.gov/ihcda/homeowners-and-renters/weatherizationenergy-conservation',
      summary:
        'Free, income-based energy conservation work for renters and owners, such as insulation, air sealing, and heating system repair or replacement. Apply through your Local Service Provider.[^11]',
    },
  ],
  consumer: {
    name: 'Indiana Attorney General Consumer Protection Division',
    url: 'https://www.in.gov/attorneygeneral/consumer-protection-division/',
    summary:
      'Mediates and investigates consumer complaints against businesses and takes action under Indiana\'s Deceptive Consumer Sales Act. It cannot act as your private attorney.[^12]',
  },
  rebates: [
    {
      name: 'Indiana Energy Saver Program (Home Energy Rebates)',
      url: 'https://www.in.gov/oed/grants-and-funding-opportunities/homeowner-incentives/',
      summary:
        'Run by the Indiana Office of Energy Development with $182 million in federal funding, it offers HOMES whole-home efficiency rebates and HEAR appliance rebates as upfront discounts through qualified contractors. As of October 2026, applications are open at IndianaEnergySaver.com. Program contractors do not go door-to-door.[^13]',
    },
  ],
  sources: [
    {
      title: 'About the IURC',
      publisher: 'Indiana Utility Regulatory Commission',
      url: 'https://www.in.gov/iurc/about-us/about-the-iurc/',
      accessed: '2026-10-15',
    },
    {
      title: 'Customer Assistance',
      publisher: 'Indiana Utility Regulatory Commission',
      url: 'https://www.in.gov/iurc/customer-assistance/',
      accessed: '2026-10-15',
    },
    {
      title: 'Understanding Electric Rates',
      publisher: 'Indiana Office of Utility Consumer Counselor',
      url: 'https://www.in.gov/oucc/electric/tips-and-publications/understanding-electric-rates',
      accessed: '2026-10-15',
    },
    {
      title: 'Electricity Industry',
      publisher: 'Indiana Utility Regulatory Commission',
      url: 'https://www.in.gov/iurc/energy-division/electricity-industry/',
      accessed: '2026-10-15',
    },
    {
      title: 'Natural Gas Industry',
      publisher: 'Indiana Utility Regulatory Commission',
      url: 'https://www.in.gov/iurc/energy-division/natural-gas-industry/',
      accessed: '2026-10-15',
    },
    {
      title: 'CHOICE',
      publisher: 'NIPSCO (utility)',
      url: 'https://www.nipsco.com/bills-and-payments/billing-programs/choice',
      accessed: '2026-10-15',
      note: 'Utility page; cited for program details the IURC page does not describe.',
    },
    {
      title: 'Water and Wastewater Division',
      publisher: 'Indiana Utility Regulatory Commission',
      url: 'https://www.in.gov/iurc/water-and-wastewater-division/',
      accessed: '2026-10-15',
    },
    {
      title: 'Fast Facts: Municipal Utilities',
      publisher: 'Indiana Office of Utility Consumer Counselor',
      url: 'https://www.in.gov/oucc/files/FastFacts_MunicipalUtilities_English.pdf',
      accessed: '2026-10-15',
      note: 'Fact sheet updated 11/2020.',
    },
    {
      title: 'Fast Facts: Winter Shutoff Moratorium',
      publisher: 'Indiana Office of Utility Consumer Counselor',
      url: 'https://www.in.gov/oucc/files/WinterMoratorium_English.pdf',
      accessed: '2026-10-15',
      note: 'Fact sheet updated 10/2020.',
    },
    {
      title: 'Energy Assistance Program (EAP)',
      publisher: 'Indiana Housing and Community Development Authority',
      url: 'https://www.in.gov/ihcda/homeowners-and-renters/low-income-home-energy-assistance-program-liheap',
      accessed: '2026-10-15',
    },
    {
      title: 'Weatherization (WAP)',
      publisher: 'Indiana Housing and Community Development Authority',
      url: 'https://www.in.gov/ihcda/homeowners-and-renters/weatherizationenergy-conservation',
      accessed: '2026-10-15',
    },
    {
      title: 'Consumer Protection Division',
      publisher: 'Indiana Attorney General',
      url: 'https://www.in.gov/attorneygeneral/consumer-protection-division/',
      accessed: '2026-10-15',
    },
    {
      title: 'Home Energy Rebates',
      publisher: 'Indiana Office of Energy Development',
      url: 'https://www.in.gov/oed/grants-and-funding-opportunities/homeowner-incentives/',
      accessed: '2026-10-15',
    },
    {
      title: 'Utility Complaints',
      publisher: 'Indiana Office of Utility Consumer Counselor',
      url: 'https://www.in.gov/oucc/utility-complaints/',
      accessed: '2026-10-15',
    },
  ],
}
