import type { StateGuide } from '../types'

export const az: StateGuide = {
  code: 'AZ',
  lastReviewed: '2026-10-15',
  intro:
    'Arizona\'s utility regulator is the Arizona Corporation Commission, an elected commission whose mission includes safe, reliable and affordable utility service.[^1] It oversees investor-owned and co-op utilities, but not city utilities or the Salt River Project, so your protections depend on who serves you.[^3][^5]',
  regulator: {
    name: 'Arizona Corporation Commission (ACC)',
    url: 'https://www.azcc.gov/',
    complaintUrl: 'https://www.azcc.gov/utilities/consumer-services',
    text:
      'The ACC regulates investor-owned or privately owned utilities that provide gas, water, electricity or phone service, plus co-ops such as Graham County Electric Cooperative and Mohave Electric Cooperative.[^3] It does not regulate city-owned utilities, cable or satellite TV, internet service or solar companies.[^3] **Always contact your utility first.** If that doesn\'t solve it, ACC Consumer Services can take your complaint by phone, letter, email, in person or online; if needed, mediation and then a formal complaint follow.[^2]',
  },
  electricity: {
    market: 'regulated',
    text:
      'The ACC oversees the electric power industry in Arizona, including companies such as Arizona Public Service and Tucson Electric Power.[^4][^3] It has no authority over electric service from a city, irrigation district, electric district or tribal utility.[^4] The Salt River Project (SRP) is also outside the ACC\'s jurisdiction for rates, rules and regulations; SRP customers can take problems to SRP\'s customer service line and then its Ombudsman\'s Office.[^5] Some service areas were opened to competition, but the ACC says no competitive providers offer residential service, so **for practical purposes you buy power from your local utility.**[^5] See [how to read your electric bill](/learn/how-to-read-your-electric-bill).',
    shopping: null,
  },
  gas: {
    text:
      'Natural gas companies under the ACC\'s jurisdiction, such as Southwest Gas, must follow its rules, most of which are in Title 14, Article 3 of the Arizona Administrative Code.[^3][^11] The ACC regulates propane systems that are also public utilities, but not neighborhood propane filling stations.[^11] City-owned gas systems are not under its jurisdiction, except for pipeline safety.[^3]',
    shopping: null,
  },
  water: {
    text:
      'The ACC regulates private water and wastewater companies; it lists more than 400 water systems run by nearly 350 companies.[^6] City water and wastewater systems are regulated by the city or town council, and water improvement districts are governed by their county.[^5] Questions about drinking water quality go to the Arizona Department of Environmental Quality.[^6] See [water and sewer bills](/categories/water-sewer).',
  },
  shutoff: {
    text:
      'The ACC enforces a **summer shutoff moratorium from June 1 through October 15**.[^7] Arizona Public Service, Tucson Electric Power and UNS Electric can choose either that moratorium period or suspending disconnections when the National Weather Service predicts temperatures above 95°F, and all three chose the June 1 through October 15 moratorium; regulated electric co-ops have their own disconnection tariffs.[^7] Your bills are not paused or forgiven during the moratorium, so charges keep building.[^7] Ask your utility about payment arrangements and budget billing before a balance grows.[^7] For other rules, such as notice periods and medical protections, check with your utility or the ACC.',
  },
  help: [
    {
      name: 'Low Income Home Energy Assistance Program (LIHEAP)',
      url: 'https://des.az.gov/liheap',
      summary:
        'The Arizona Department of Economic Security runs this federally funded program that helps low-income households pay heating and cooling bills and handle energy crises.[^8] Its separate Power AZ utility assistance program has used up its funds and is no longer accepting applications.[^8]',
    },
  ],
  consumer: {
    name: 'Arizona Attorney General, Consumer Information and Complaints Unit',
    url: 'https://www.azag.gov/complaints/consumer',
    summary:
      'The Attorney General\'s Office investigates complaints about deceptive or unfair practices in the sale or advertisement of goods or services, and you can file online, by mail, email or fax.[^9] The ACC refers solar company complaints to the Attorney General.[^3]',
  },
  rebates: [
    {
      name: 'Efficiency Arizona',
      url: 'https://efficiencyarizona.com/',
      summary:
        'Arizona\'s federally funded appliance rebate program covers part of the cost of efficient appliances and HVAC equipment, up to $14,000 per household depending on income.[^10] **The rules changed for rebates reserved on or after September 1, 2026**: rebates now cover only replacing existing electric appliances and heat pumps, not switching from gas to electric.[^12]',
    },
  ],
  sources: [
    { title: 'Arizona Corporation Commission home page', publisher: 'Arizona Corporation Commission', url: 'https://www.azcc.gov/', accessed: '2026-10-15' },
    { title: 'Consumer Services', publisher: 'Arizona Corporation Commission', url: 'https://www.azcc.gov/utilities/consumer-services', accessed: '2026-10-15' },
    { title: 'Utilities Division', publisher: 'Arizona Corporation Commission', url: 'https://www.azcc.gov/utilities/home', accessed: '2026-10-15' },
    { title: 'Electric Utilities', publisher: 'Arizona Corporation Commission', url: 'https://www.azcc.gov/utilities/industry-types/electric/home', accessed: '2026-10-15' },
    { title: 'Utilities FAQs', publisher: 'Arizona Corporation Commission', url: 'https://www.azcc.gov/faqs/utilities-faqs', accessed: '2026-10-15' },
    { title: 'Water Utilities', publisher: 'Arizona Corporation Commission', url: 'https://www.azcc.gov/utilities/industry-types/water/home', accessed: '2026-10-15' },
    { title: 'ACC Reminds Ratepayers of Summer Utility Disconnection Moratorium, Utility Bill Assistance Programs (June 2, 2026)', publisher: 'Arizona Corporation Commission', url: 'https://azcc.gov/news/home/2026/06/02/acc-reminds-ratepayers-of-summer-utility-disconnection-moratorium--utility-bill-assistance-programs', accessed: '2026-10-15' },
    { title: 'Low Income Home Energy Assistance Program (LIHEAP)', publisher: 'Arizona Department of Economic Security', url: 'https://des.az.gov/liheap', accessed: '2026-10-15', note: 'Verified in a browser; the site blocks scripted requests.' },
    { title: 'File a Consumer Complaint', publisher: 'Arizona Attorney General\'s Office', url: 'https://www.azag.gov/complaints/consumer', accessed: '2026-10-15' },
    { title: 'Efficiency Arizona', publisher: 'Efficiency Arizona (program website)', url: 'https://efficiencyarizona.com/', accessed: '2026-10-15' },
    { title: 'Gas Utilities', publisher: 'Arizona Corporation Commission', url: 'https://www.azcc.gov/utilities/industry-types/gas/home', accessed: '2026-10-15' },
    { title: 'Significant Changes Coming to the Efficiency Arizona Program Due to Federal Government Notice', publisher: 'Efficiency Arizona (program website)', url: 'https://efficiencyarizona.com/significant-changes-coming-to-the-efficiency-arizona-program-due-to-federal-government-notice/', accessed: '2026-10-15' },
  ],
}
