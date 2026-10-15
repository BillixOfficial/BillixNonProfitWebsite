import type { StateGuide } from '../types'

export const il: StateGuide = {
  code: 'IL',
  lastReviewed: '2026-10-15',
  intro:
    'If ComEd, Ameren Illinois, or MidAmerican serves you, you can choose who supplies your electricity. As of October 2026, about 1.15 million residential customers use an alternative supplier.[^3][^4] Illinois also sets temperature-based shutoff limits and runs LIHEAP through the Department of Commerce and Economic Opportunity.[^9][^12]',
  regulator: {
    name: 'Illinois Commerce Commission (ICC)',
    url: 'https://www.icc.illinois.gov/',
    complaintUrl: 'https://www.icc.illinois.gov/complaints',
    text:
      'The ICC regulates Illinois investor-owned electric, natural gas, telephone, water, and sewer companies.[^17] It does **not** regulate municipal or cooperative utilities, and its informal complaint process does not cover them.[^1] Try to resolve the issue with your utility first. If you cannot, ICC consumer services counselors can help through an informal complaint, which is typically resolved or explained within 1 to 14 days. Call 1-800-524-0795 or file online.[^1][^2]',
  },
  electricity: {
    market: 'choice',
    text:
      'Customers in the Ameren Illinois, ComEd, and MidAmerican service territories can choose who provides the supply part of their electricity: an Alternative Retail Electric Supplier (ARES), the utility\'s own supply price, or the utility\'s residential real-time pricing program.[^4] Your utility still delivers the power and handles outages.[^4] Savings claims are measured against the utility\'s **"Price to Compare."**[^4] Since January 1, 2020, residential customers can end an ARES contract at any time without termination fees or penalties.[^4] In Ameren Illinois and ComEd territory, you can rescind an agreement within 10 days of the utility processing the enrollment.[^5] The Attorney General\'s office publishes a consumer brochure warning that alternative energy suppliers can mean higher prices with questionable benefits.[^15] See [supply vs. delivery charges](/learn/supply-vs-delivery-charges).',
    shopping: { name: 'Plug In Illinois (Illinois Commerce Commission)', url: 'https://plugin.illinois.gov/' },
  },
  gas: {
    text:
      'Residential and small business customers of Nicor Gas, North Shore Gas, and Peoples Gas can buy their gas supply from an Alternative Gas Supplier (AGS).[^6] If you stay with the utility, you pay its gas supply price, which can change monthly through the Purchased Gas Adjustment, and the utility cannot mark up the cost.[^6] AGS prices are **not regulated or reviewed by the ICC**, though the ICC does regulate suppliers\' sales and marketing practices.[^6] Your utility keeps delivering the gas and answering safety calls either way.[^6] The ICC lists current supplier offers by service area.[^7]',
    shopping: { name: 'Natural Gas Choice Product Offers (ICC)', url: 'https://www.icc.illinois.gov/natural-gas-choice/products' },
  },
  water: {
    text:
      'The ICC regulates six investor-owned water utilities, including Aqua Illinois and Illinois-American Water.[^8] Water from a city, village, or other municipal system is not ICC-regulated, so rate questions go to that local provider.[^1] Some regulated water companies now offer income-based discounts. For example, eligible Aqua Illinois customers at or below 150 percent of the federal poverty level can get a 70 percent discount on base volumetric charges.[^11] See [water and sewer bills](/categories/water-sewer).',
  },
  shutoff: {
    text:
      'If gas or electricity is your only source of heat, a gas or electric utility cannot cut off your service for nonpayment on a day when the National Weather Service forecast for the next 24 hours is **32°F or below**, or before a weekend or holiday with that forecast.[^9] If it is your only source of cooling, the utility cannot disconnect when the forecast is **90°F or above**, or during a heat watch, heat advisory, or excessive heat warning.[^9] From **December 1 through March 31**, before disconnecting a home that primarily heats with gas or electricity, the utility must offer a deferred payment plan of at least 4 months with a down payment of no more than 10 percent of the past-due amount, and it must wait at least 6 business days after notifying you.[^10] Ask your utility about any medical protections that apply to you.',
  },
  help: [
    {
      name: 'Low Income Home Energy Assistance Program (LIHEAP)',
      url: 'https://dceo.illinois.gov/communityservices/utilitybillassistance.html',
      summary:
        'Helps eligible low-income households pay for home energy, mainly heating.[^12] Applications open in the fall, with priority groups first: adults 60 and older, people with disabilities, households with a child 5 or under, and households that are disconnected or facing disconnection. For the 2027 program year, priority groups could apply from October 1, 2026, all other income-eligible households from November 1, 2026, and applications run through August 13, 2027, or until funds run out. Check the page for the current season\'s dates. Apply at helpillinoisfamilies.com or through your local agency, or call 1-833-711-0374.[^13]',
    },
    {
      name: 'Low-income discount rates',
      url: 'https://www.icc.illinois.gov/consumers/utility-energy-assistance',
      summary:
        'Ameren Illinois, Nicor Gas, and Peoples Gas/North Shore Gas offer tiered low-income discount rates with monthly bill credits of 5 to 84 percent. LIHEAP households qualify automatically, and households at 201 to 300 percent of the federal poverty level can get a 5 percent discount by reporting their income to the utility.[^11]',
    },
    {
      name: 'Illinois Home Weatherization Assistance Program (IHWAP)',
      url: 'https://dceo.illinois.gov/communityservices/homeweatherization.html',
      summary:
        'Helps low-income households cut energy costs with air sealing, insulation, heating and water heater repair or replacement, and health and safety measures. Households at or below 200 percent of the federal poverty level are eligible.[^14]',
    },
  ],
  consumer: {
    name: 'Illinois Attorney General, Consumer Protection (Public Utilities)',
    url: 'https://illinoisattorneygeneral.gov/consumer-protection/public-utilities/',
    summary:
      'The Attorney General\'s office publishes guides on your rights with gas and electric service and alternative energy suppliers, and takes consumer complaints. Hotlines: Chicago 1-800-386-5438, Springfield 1-800-243-0618, Carbondale 1-800-243-0607.[^15]',
  },
  rebates: [
    {
      name: 'Home Energy Rebate Programs (Illinois EPA Office of Energy)',
      url: 'https://epa.illinois.gov/topics/energy/energy-rebates.html',
      summary:
        'Illinois EPA was allocated $263 million for the federal HOMES and HEAR rebate programs. As of October 2026, the HOMES pilot launch was pending federal approval and the HEAR application had not yet been processed, so rebates are not yet available. Only projects approved after launch will be eligible.[^16]',
    },
  ],
  sources: [
    {
      title: 'Citizens Guide to the Illinois Commerce Commission',
      publisher: 'Illinois Commerce Commission',
      url: 'https://www.icc.illinois.gov/downloads/public/Citizens%20Guide%20to%20ICC.pdf',
      accessed: '2026-10-15',
    },
    {
      title: 'File a Complaint',
      publisher: 'Illinois Commerce Commission',
      url: 'https://www.icc.illinois.gov/complaints',
      accessed: '2026-10-15',
    },
    {
      title: 'Plug In Illinois',
      publisher: 'Illinois Commerce Commission',
      url: 'https://plugin.illinois.gov/',
      accessed: '2026-10-15',
    },
    {
      title: 'Electric Choice Basics',
      publisher: 'Illinois Commerce Commission (Plug In Illinois)',
      url: 'https://plugin.illinois.gov/electric-choice-basics',
      accessed: '2026-10-15',
    },
    {
      title: 'Consumer Protections',
      publisher: 'Illinois Commerce Commission (Plug In Illinois)',
      url: 'https://plugin.illinois.gov/consumer-protections',
      accessed: '2026-10-15',
    },
    {
      title: 'Natural Gas Choice: Consumer Education',
      publisher: 'Illinois Commerce Commission',
      url: 'https://www.icc.illinois.gov/natural-gas-choice/consumer-education',
      accessed: '2026-10-15',
    },
    {
      title: 'Natural Gas Choice Product Offers',
      publisher: 'Illinois Commerce Commission',
      url: 'https://www.icc.illinois.gov/natural-gas-choice/products',
      accessed: '2026-10-15',
    },
    {
      title: 'Authority: Water',
      publisher: 'Illinois Commerce Commission',
      url: 'https://www.icc.illinois.gov/authority/water',
      accessed: '2026-10-15',
    },
    {
      title: '220 ILCS 5/8-205 (termination of service in extreme temperatures)',
      publisher: 'Illinois General Assembly',
      url: 'https://www.ilga.gov/documents/legislation/ilcs/documents/022000050K8-205.htm',
      accessed: '2026-10-15',
    },
    {
      title: '220 ILCS 5/8-206, Winter termination for nonpayment',
      publisher: 'Illinois General Assembly',
      url: 'https://www.ilga.gov/documents/legislation/ilcs/documents/022000050K8-206.htm',
      accessed: '2026-10-15',
    },
    {
      title: 'Utility Energy Assistance',
      publisher: 'Illinois Commerce Commission',
      url: 'https://www.icc.illinois.gov/consumers/utility-energy-assistance',
      accessed: '2026-10-15',
    },
    {
      title: 'Utility Bill Assistance',
      publisher: 'Illinois Department of Commerce and Economic Opportunity',
      url: 'https://dceo.illinois.gov/communityservices/utilitybillassistance.html',
      accessed: '2026-10-15',
    },
    {
      title: 'Utility Bill Assistance: How to Apply',
      publisher: 'Illinois Department of Commerce and Economic Opportunity',
      url: 'https://dceo.illinois.gov/communityservices/utilitybillassistance/howtoapply.html',
      accessed: '2026-10-15',
    },
    {
      title: 'Home Weatherization',
      publisher: 'Illinois Department of Commerce and Economic Opportunity',
      url: 'https://dceo.illinois.gov/communityservices/homeweatherization.html',
      accessed: '2026-10-15',
    },
    {
      title: 'Public Utilities',
      publisher: 'Office of the Illinois Attorney General',
      url: 'https://illinoisattorneygeneral.gov/consumer-protection/public-utilities/',
      accessed: '2026-10-15',
    },
    {
      title: 'Energy Rebates',
      publisher: 'Illinois Environmental Protection Agency',
      url: 'https://epa.illinois.gov/topics/energy/energy-rebates.html',
      accessed: '2026-10-15',
    },
    {
      title: 'About the ICC',
      publisher: 'Illinois Commerce Commission',
      url: 'https://www.icc.illinois.gov/about',
      accessed: '2026-10-15',
    },
  ],
}
