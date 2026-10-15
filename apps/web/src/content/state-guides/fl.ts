import type { StateGuide } from '../types'

export const fl: StateGuide = {
  code: 'FL',
  lastReviewed: '2026-10-15',
  intro:
    'The Florida Public Service Commission (PSC) sets rates for investor-owned electric and natural gas companies such as Florida Power & Light, Duke Energy Florida, Tampa Electric, Florida Public Utilities and Peoples Gas System.[^1][^2] The PSC has limited or no authority over city-owned and cooperative electric utilities, city- and county-owned water systems and municipal gas systems.[^1]',
  regulator: {
    name: 'Florida Public Service Commission (PSC)',
    url: 'https://www.floridapsc.com/',
    complaintUrl: 'https://www.floridapsc.com/consumer-complaint-form',
    text:
      'The PSC regulates investor-owned electric and natural gas companies, investor-owned water and wastewater companies in certain counties, and certain telecommunications services.[^1] It does not regulate the rates and service of municipal and rural cooperative electric utilities, apart from reviewing their rate structure and safety, or municipally and county-owned water and wastewater utilities.[^1] **Contact your utility first.** If you do not hear back in a reasonable time or are not satisfied, call PSC Consumer Assistance at 1-800-342-3552 or use the online complaint form.[^2][^3] Florida’s public records law means your online submission may be made public.[^3]',
  },
  electricity: {
    market: 'regulated',
    text:
      'The PSC sets reasonable rates and approves the rates, charges and conditions of service for investor-owned electric companies, including Florida Power & Light, Duke Energy Florida, Tampa Electric and Florida Public Utilities.[^1][^2] For city-owned utilities and electric cooperatives, the PSC reviews only the rate structure they use to collect costs, not what costs go into rates; contact the city utilities office or the cooperative’s board of directors.[^1] On request, an investor-owned utility must help you find the rate that is most advantageous for your service.[^2] To understand your charges, see [how to read your electric bill](/learn/how-to-read-your-electric-bill).',
    shopping: null,
  },
  gas: {
    text:
      'The PSC regulates the rates, billing accuracy and pipeline safety of investor-owned natural gas companies, including Florida City Gas, Peoples Gas System, Florida Public Utilities and its divisions, Sebring Gas System and St. Joe Natural Gas.[^1] Municipally owned gas utilities and gas districts and authorities are regulated only for safety, and propane (LP gas) is outside the PSC’s authority.[^1]',
    shopping: null,
  },
  water: {
    text:
      'The PSC regulates rates, billing and service quality for investor-owned water and wastewater companies only in counties that fall under its jurisdiction; you can call 1-800-342-3552 to check whether yours does.[^1] It does not regulate municipally or county-owned water and wastewater utilities, so contact your city or county commission about those rates.[^1] See [water and sewer bills](/categories/water-sewer) for how these bills work.',
  },
  shutoff: {
    text:
      'For investor-owned electric and gas companies, you have 20 days from the postmark or delivery date to pay your bill.[^2] Under PSC rules, an electric utility can disconnect for nonpayment only after at least 5 working days of written notice that is separate from your bill, and you can name a third party to get a copy of that notice.[^4] **Residential service cannot be cut between noon Friday and 8 a.m. Monday, or between noon the day before a holiday and 8 a.m. the next working day.**[^2][^4] Each electric utility must file a procedure for disconnections when service is medically essential, so ask your utility how to enroll if someone in your home depends on electricity for medical reasons.[^4]',
  },
  help: [
    {
      name: 'Low-Income Home Energy Assistance Program (LIHEAP)',
      url: 'https://www.floridajobs.org/community-development/Low-Income-Home-Energy-Assistance-Program',
      summary:
        'FloridaCommerce funds LIHEAP through local community action agencies, which pay your utility directly. You may qualify if your household income is no more than 60 percent of the Florida state median income or 150 percent of the federal poverty level and you pay your heating or cooling bills. LIHEAP pays natural gas or propane bills only in winter when that fuel is your main heat source, and it cannot pay water, sewer or phone bills. Call your local LIHEAP provider to apply.[^5]',
    },
    {
      name: 'Weatherization Assistance Program (WAP)',
      url: 'https://www.floridajobs.org/community-development/weatherization-assistance-program',
      summary:
        'Also run by FloridaCommerce through local agencies. Households at or below 200 percent of the federal poverty guidelines can get audit-based improvements such as air sealing, insulation, duct sealing and HVAC or water heater repairs, with preference for people 60 and older, people with disabilities, families with children and households with high energy bills.[^6]',
    },
  ],
  consumer: {
    name: 'Florida Department of Agriculture and Consumer Services, Division of Consumer Services',
    url: 'https://www.fdacs.gov/Divisions-Offices/Consumer-Services',
    summary:
      'The Division of Consumer Services is the state’s clearinghouse for consumer complaints and takes complaints about Florida businesses whether or not it regulates that industry. Call 1-800-HELP-FLA (435-7352) or file online.[^7] The PSC also sends most telephone service complaints to this division.[^3]',
  },
  rebates: [],
  sources: [
    { title: 'When to Call the Florida Public Service Commission', publisher: 'Florida Public Service Commission', url: 'https://www.floridapsc.com/pscfiles/website-files//PDF/Publications/Consumer/Brochure/When_to_Call_the_PSC.pdf', accessed: '2026-10-15' },
    { title: 'What You Need to Know About Your Electric & Natural Gas Service (February 2021)', publisher: 'Florida Public Service Commission', url: 'https://www.floridapsc.com/pscfiles/website-files/PDF/publications/consumer/brochure/WhatYouNeedToKnowAboutElectricandNaturalGasService.pdf', accessed: '2026-10-15' },
    { title: 'Consumer Complaint Form', publisher: 'Florida Public Service Commission', url: 'https://www.floridapsc.com/consumer-complaint-form', accessed: '2026-10-15', note: 'Page renders only with JavaScript; verified in a browser.' },
    { title: 'Rule 25-6.105, Refusal or Discontinuance of Service by Utility', publisher: 'Florida Administrative Code (Florida Department of State)', url: 'https://www.flrules.org/gateway/ruleNo.asp?id=25-6.105', accessed: '2026-10-15' },
    { title: 'Low-Income Home Energy Assistance Program', publisher: 'FloridaCommerce', url: 'https://www.floridajobs.org/community-development/Low-Income-Home-Energy-Assistance-Program', accessed: '2026-10-15', note: 'Page renders only with JavaScript; verified in a browser.' },
    { title: 'Weatherization Assistance Program', publisher: 'FloridaCommerce', url: 'https://www.floridajobs.org/community-development/weatherization-assistance-program', accessed: '2026-10-15', note: 'Page renders only with JavaScript; verified in a browser.' },
    { title: 'Division of Consumer Services', publisher: 'Florida Department of Agriculture and Consumer Services', url: 'https://www.fdacs.gov/Divisions-Offices/Consumer-Services', accessed: '2026-10-15' },
  ],
}
