import type { StateGuide } from '../types'

export const ct: StateGuide = {
  code: 'CT',
  lastReviewed: '2026-10-15',
  intro:
    'Connecticut lets you shop for the supply part of your electric bill, but not for home natural gas[^4]. The Public Utilities Regulatory Authority (PURA) oversees the investor-owned electric, gas and water companies that serve most homes[^1].',
  regulator: {
    name: 'Public Utilities Regulatory Authority (PURA)',
    url: 'https://portal.ct.gov/pura',
    complaintUrl: 'https://portal.ct.gov/pura/consumer-services/file-a-complaint',
    text: "PURA regulates Connecticut's investor-owned electric, natural gas and water companies[^1]. It does not regulate municipal electric and water utilities, sewer charges, or heating oil and propane companies[^2]. **Contact your utility first** and give it a chance to fix the problem. If it is still not resolved, file a complaint with PURA's Customer Affairs Resolution Center online, by email at pura.information@ct.gov, or by phone at 1-800-382-4586[^3].",
  },
  electricity: {
    market: 'choice',
    text: "PURA regulates the rates and services of the state's two investor-owned electric companies, Eversource and United Illuminating (UI)[^1]. You can buy the [supply part of your bill](/learn/supply-vs-delivery-charges) from a licensed supplier, or stay on Standard Service, the default supply price, which is set through auctions and changes every January 1 and July 1[^4]. Before you sign, compare the offer with your current rate and ask how long the rate lasts and whether the contract renews automatically, possibly at a higher price[^4]. The state's rate board says suppliers may not charge cancellation fees to residential customers[^12]. State law has barred suppliers from charging residential customers variable rates since July 1, 2022[^5]. PURA says the only official portal to choose a supplier is Energize CT[^4].",
    shopping: { name: 'Energize CT supplier rate board', url: 'https://www.energizect.com/rate-board/compare-energy-supplier-rates' },
  },
  gas: {
    text: 'PURA regulates three gas utilities: Connecticut Natural Gas, Southern Connecticut Gas and Eversource (formerly Yankee Gas)[^1]. **Residential customers cannot choose a natural gas supplier.** Your utility provides both the gas supply and the delivery[^4]. Only some commercial and industrial customers can buy gas from a marketer[^4].',
    shopping: null,
  },
  water: {
    text: "PURA handles filings from Connecticut's investor-owned water companies, including their water rates[^1]. It does not regulate the services and rates of municipal water companies, such as the Metropolitan District Commission, or sewer charges, including those of Water Pollution Control Authorities[^2]. If a municipal or regional water utility serves you, take rate questions to that utility, not PURA[^2].",
  },
  shutoff: {
    text: 'From November 1 through May 1, electric companies cannot shut off residential service for customers with hardship status who cannot pay their full balance; for gas, the protection covers hardship customers who heat with gas[^5]. You request hardship status from your utility based on income or benefits such as CEAP or SNAP, and you may need to renew it each year[^7]. A utility cannot shut off electric or gas service if you cannot pay the full bill and the shutoff would create a life-threatening situation for someone in your home; medical protection requires a physician\'s certification[^5][^7]. The utility must mail a written notice at least 13 calendar days before a shutoff, and residential service cannot be cut on a Friday, weekend, legal holiday or the day before a legal holiday[^5][^6].',
  },
  help: [
    {
      name: 'Connecticut Energy Assistance Program (CEAP)',
      url: 'https://portal.ct.gov/DSS/Economic-Security/Winter-Heating-Assistance/Energy-Assistance---Winter-Heating',
      summary:
        'Helps households pay home heating costs, with benefits usually paid directly to your utility or fuel dealer. As of October 2026, the Department of Social Services lists benefits of $355 to $705 for the 2026-2027 season and an application deadline of May 31, 2027; you apply each year through your local Community Action Agency[^8].',
    },
    {
      name: 'Utility payment assistance programs (PURA)',
      url: 'https://portal.ct.gov/pura/consumer-services/payment-assistance-programs',
      summary:
        "PURA's guide to help offered through Eversource, UI, Connecticut Natural Gas and Southern Connecticut Gas: financial hardship status, a low-income discount rate on electric bills, the Matching Payment Program (MPP) that matches your payments to clear past-due balances, and 18-month flexible payment plans. Contact your utility to enroll[^7].",
    },
    {
      name: 'Weatherization Assistance Program (CT WAP)',
      url: 'https://portal.ct.gov/deep/energy/weatherization/weatherization-in-connecticut',
      summary:
        'Free efficiency work such as air sealing, insulation and heating system tune-ups for income-eligible households, run by the Department of Energy and Environmental Protection (DEEP) with Community Action Agencies. It uses the same eligibility as CEAP (60% of State Median Income), and you can ask for it when you apply for CEAP[^9].',
    },
  ],
  consumer: {
    name: 'Connecticut Office of the Attorney General',
    url: 'https://portal.ct.gov/ag/common/complaint-form-landing-page',
    summary:
      'The Attorney General may offer informal mediation when you cannot resolve a problem with a business on your own, and may refer complaints to other agencies. It represents the public interest and cannot give you legal advice[^11].',
  },
  rebates: [
    {
      name: 'Energize CT (Home Energy Solutions)',
      url: 'https://energizect.com',
      summary:
        'The utility-run efficiency programs paid for by ratepayers. Home Energy Solutions is open to any customer regardless of income, and Home Energy Solutions - Income Eligible serves income-eligible households[^9].',
    },
    {
      name: 'Inflation Reduction Act Home Energy Rebate Programs (DEEP)',
      url: 'https://portal.ct.gov/deep/energy/inflation-reduction-act-home-energy-rebate-programs',
      summary:
        "DEEP's page for the federal Home Electrification and Appliance Rebate (HEAR) and Home Efficiency Rebate (HER) programs. DEEP says rebates will not be available until the programs launch after U.S. Department of Energy approval, so check the page for current status[^10].",
    },
  ],
  sources: [
    { title: 'Industries We Regulate', publisher: 'Connecticut Public Utilities Regulatory Authority', url: 'https://portal.ct.gov/PURA/Industries/Industries-We-Regulate', accessed: '2026-10-15' },
    { title: 'Unregulated Activities', publisher: 'Connecticut Public Utilities Regulatory Authority', url: 'https://portal.ct.gov/pura/consumer-services/unregulated-activities', accessed: '2026-10-15' },
    { title: 'File a Complaint', publisher: 'Connecticut Public Utilities Regulatory Authority', url: 'https://portal.ct.gov/pura/consumer-services/file-a-complaint', accessed: '2026-10-15' },
    { title: 'Frequently Asked Questions', publisher: 'Connecticut Public Utilities Regulatory Authority', url: 'https://portal.ct.gov/pura/consumer-services/frequently-asked-questions', accessed: '2026-10-15' },
    { title: 'General Statutes Chapter 283 (Secs. 16-245o, 16-262c, 16-262d)', publisher: 'Connecticut General Assembly', url: 'https://www.cga.ct.gov/current/pub/chap_283.htm', accessed: '2026-10-15' },
    { title: 'Customer Rights & Responsibilities', publisher: 'Connecticut Public Utilities Regulatory Authority', url: 'https://portal.ct.gov/PURA/Consumer-Services/Customer-Rights--Responsibilities', accessed: '2026-10-15' },
    { title: 'Payment Assistance Programs', publisher: 'Connecticut Public Utilities Regulatory Authority', url: 'https://portal.ct.gov/pura/consumer-services/payment-assistance-programs', accessed: '2026-10-15' },
    { title: 'Connecticut Energy Assistance Program', publisher: 'Connecticut Department of Social Services', url: 'https://portal.ct.gov/DSS/Economic-Security/Winter-Heating-Assistance/Energy-Assistance---Winter-Heating', accessed: '2026-10-15' },
    { title: 'Weatherization in Connecticut', publisher: 'Connecticut Department of Energy and Environmental Protection', url: 'https://portal.ct.gov/deep/energy/weatherization/weatherization-in-connecticut', accessed: '2026-10-15' },
    { title: 'Inflation Reduction Act Home Energy Rebate Programs', publisher: 'Connecticut Department of Energy and Environmental Protection', url: 'https://portal.ct.gov/deep/energy/inflation-reduction-act-home-energy-rebate-programs', accessed: '2026-10-15' },
    { title: 'File a Complaint', publisher: 'Connecticut Office of the Attorney General', url: 'https://portal.ct.gov/ag/common/complaint-form-landing-page', accessed: '2026-10-15' },
    { title: 'Compare Energy Supplier Rates (Rate Board)', publisher: 'Energize Connecticut (initiative of the Energy Efficiency Fund, Connecticut Green Bank, the State and local utilities)', url: 'https://www.energizect.com/rate-board/compare-energy-supplier-rates', accessed: '2026-10-15' },
  ],
}
