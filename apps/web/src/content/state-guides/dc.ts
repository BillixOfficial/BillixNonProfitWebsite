import type { StateGuide } from '../types'

export const dc: StateGuide = {
  code: 'DC',
  lastReviewed: '2026-10-15',
  intro:
    'District residents can choose a competitive supplier for both electricity and natural gas, while your regulated utility keeps delivering it and you still get one bill.[^3] Water and sewer service comes from DC Water, which the Public Service Commission does not regulate.[^1]',
  regulator: {
    name: 'Public Service Commission of the District of Columbia (DCPSC)',
    url: 'https://dcpsc.org/',
    complaintUrl: 'https://dcpsc.org/Consumers-Corner/Utility-Bills-Complaints-and-Service-Providers/Utility-Consumer-Complaints-Mediation-Inquiries.aspx',
    text:
      'The DCPSC oversees the District\'s competitive electricity and natural gas markets and regulates traditional landline telephone service.[^3] Its Office of Consumer Services helps residents with problems with a utility company or competitive supplier.[^2] It lists water and sewer, wireless and cable TV service as not regulated by the PSC.[^1] **Contact your utility or supplier first**; if you cannot reach a fair agreement, the PSC\'s Office of Consumer Services can help mediate.[^5] File a complaint online or call (202) 626-5120; if the office cannot resolve it informally, you can petition the PSC for a formal hearing.[^2]',
  },
  electricity: {
    market: 'choice',
    text:
      'Retail choice separates delivery, handled by the regulated utility, from supply, which you can buy from a licensed competitive supplier.[^3] You still receive one bill.[^3] Suppliers may offer fixed, variable or non-volumetric rates; compare their offers with the price per kilowatt-hour and supply charges on your current bill.[^4] The District\'s Consumer Bill of Rights gives you a 3-day cancellation period for door-to-door sales and protection against being switched without your consent.[^3] See [supply vs. delivery charges](/learn/supply-vs-delivery-charges).',
    shopping: { name: 'DC Power Connect (DCPSC)', url: 'https://dcpowerconnect.com/' },
  },
  gas: {
    text:
      'The District has a competitive market for natural gas as well as electricity, with licensed suppliers offering different rates and contract terms.[^3] DC Power Connect lists approved natural gas suppliers, but its interactive comparison tool covers electricity offers.[^3]',
    shopping: { name: 'DC Power Connect (DCPSC)', url: 'https://dcpowerconnect.com/' },
  },
  water: {
    text:
      'The PSC does not regulate water and sewer service.[^1] DC Water\'s Board of Directors approves its rates after a public hearing, and new rates take effect on October 1.[^10] Income-eligible residents can get discounts on water and sewer bills through the Department of Energy and Environment\'s Utility Discount Program.[^8] See [water and sewer bills](/categories/water-sewer).',
  },
  shutoff: {
    text:
      'Your electric service cannot be disconnected for nonpayment when the National Weather Service forecasts **95 degrees or higher, or 32 degrees or below**, and gas service cannot be disconnected when the forecast is 32 degrees or below.[^5] If a shutoff would harm the health or safety of someone in your home, the utility must postpone it for up to 21 days if you provide a certificate from a physician or public health official and enter a payment agreement.[^5] You can also set up a Deferred Payment Agreement to pay a past-due balance in installments.[^5] These rules are part of the PSC\'s Consumer Bill of Rights in Title 15, Chapter 3 of the D.C. Municipal Regulations.[^5]',
  },
  help: [
    {
      name: 'Low Income Home Energy Assistance Program (LIHEAP)',
      url: 'https://doee.dc.gov/liheap',
      summary:
        'The Department of Energy and Environment (DOEE) runs LIHEAP, which helps income-eligible households with heating and cooling costs through a one-time benefit of $250 to $1,800, plus crisis help if your service is disconnected or your fuel tank is nearly empty.[^7] As of October 2026, DOEE planned to open FY27 applications on October 20, 2026; check the page for current status, or call 311 or (202) 737-4404 with questions.[^7] Apply only through DOEE, the sole entity authorized to accept LIHEAP applications.[^7]',
    },
    {
      name: 'Utility Discount Program (UDP)',
      url: 'https://doee.dc.gov/udp',
      summary:
        'UDP lowers electric, winter gas, and water and sewer bills for low-income residents, with the bills in the applicant\'s name.[^8] As of October 2026, DOEE planned to open FY27 applications on October 20, 2026; check the page for current status.[^8] The PSC also requires Pepco and Washington Gas to sponsor their own discount programs, such as Pepco\'s Residential Aid Discount.[^6]',
    },
    {
      name: 'Weatherization Assistance Program (WAP)',
      url: 'https://doee.dc.gov/service/weatherization-assistance-program-wap',
      summary:
        'DOEE\'s WAP provides energy audits and installs measures such as insulation, duct sealing and heating and cooling repairs for households below 60% of state median income or receiving TANF or SSI.[^9] As of October 2026, DOEE said WAP openings were delayed this fiscal year and it would contact people on the waitlist; check the page for current status.[^9]',
    },
  ],
  consumer: {
    name: 'Office of the Attorney General for the District of Columbia, Office of Consumer Protection',
    url: 'https://oag.dc.gov/consumer-protection',
    summary:
      'The Office of Consumer Protection addresses deceptive, unfair and illegal practices by businesses and landlords.[^11] Its free Consumer and Tenant Response program contacts the business on your behalf to try to resolve a dispute; call 202-442-9828 or file online.[^11]',
  },
  rebates: [
    {
      name: 'DC Sustainable Energy Utility (DCSEU)',
      url: 'https://www.dcseu.com/homeowners-renters',
      summary:
        'The DCSEU offers District homeowners and renters rebates on heating, cooling, appliances and electric service upgrades.[^12] Income-qualified homeowners may get no-cost rooftop solar through DOEE\'s Solar for All program, and income-qualified homeowners and renters in single-family homes may get no-cost electric heating and cooling upgrades.[^12]',
    },
  ],
  sources: [
    { title: 'Public Service Commission of the District of Columbia', publisher: 'Public Service Commission of the District of Columbia', url: 'https://dcpsc.org/', accessed: '2026-10-15' },
    { title: 'Utility Consumer Complaints, Mediation, and Inquiries', publisher: 'Public Service Commission of the District of Columbia', url: 'https://dcpsc.org/Consumers-Corner/Utility-Bills-Complaints-and-Service-Providers/Utility-Consumer-Complaints-Mediation-Inquiries.aspx', accessed: '2026-10-15' },
    { title: 'Choose an Energy Supplier (Retail Choice)', publisher: 'Public Service Commission of the District of Columbia', url: 'https://dcpsc.org/Consumers-Corner/Service-Providers/Retail-Choice.aspx', accessed: '2026-10-15' },
    { title: 'DC Power Connect', publisher: 'Public Service Commission of the District of Columbia', url: 'https://dcpowerconnect.com/', accessed: '2026-10-15' },
    { title: 'Consumer Bill of Rights', publisher: 'Public Service Commission of the District of Columbia', url: 'https://dcpsc.org/Consumers-Corner/Information/Consumer-Bill-of-Rights.aspx', accessed: '2026-10-15' },
    { title: 'Utility discount programs, bill credits, and other assistance', publisher: 'Public Service Commission of the District of Columbia', url: 'https://dcpsc.org/Consumers-Corner/Programs/Utility-discount-programs,-bill-credits-and-other.aspx', accessed: '2026-10-15' },
    { title: 'Receive Assistance With Your Utility Bills (LIHEAP)', publisher: 'District Department of Energy and Environment (DOEE)', url: 'https://doee.dc.gov/liheap', accessed: '2026-10-15' },
    { title: 'Receive Discounts on Your Utility Bills (UDP)', publisher: 'District Department of Energy and Environment (DOEE)', url: 'https://doee.dc.gov/udp', accessed: '2026-10-15' },
    { title: 'Weatherization Assistance Program (WAP)', publisher: 'District Department of Energy and Environment (DOEE)', url: 'https://doee.dc.gov/service/weatherization-assistance-program-wap', accessed: '2026-10-15' },
    { title: 'Ratemaking Process', publisher: 'DC Water (District of Columbia Water and Sewer Authority)', url: 'https://www.dcwater.com/content/ratemaking-process', accessed: '2026-10-15' },
    { title: 'Consumer Protection', publisher: 'Office of the Attorney General for the District of Columbia', url: 'https://oag.dc.gov/consumer-protection', accessed: '2026-10-15' },
    { title: 'Homeowners & Renters', publisher: 'DC Sustainable Energy Utility (DCSEU)', url: 'https://www.dcseu.com/homeowners-renters', accessed: '2026-10-15' },
  ],
}
