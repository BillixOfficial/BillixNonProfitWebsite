import type { StateGuide } from '../types'

export const oh: StateGuide = {
  code: 'OH',
  lastReviewed: '2026-10-15',
  intro:
    'In much of Ohio you can choose who supplies your electricity and natural gas, while your local utility keeps delivering it and handling outages.[^1][^4] If you are behind on a heating bill, Ohio has winter protections, including the Special Reconnect Order, plus income-based help such as HEAP and PIPP Plus.[^7][^8]',
  regulator: {
    name: 'Public Utilities Commission of Ohio (PUCO)',
    url: 'https://puco.ohio.gov/',
    complaintUrl: 'https://puco.ohio.gov/help-center/file-a-complaint',
    text:
      'The PUCO regulates electric and natural gas companies, local and long distance telephone companies, and water and wastewater companies.[^3] It does **not** regulate electric cooperatives or municipal electric utilities.[^2] For a billing or meter problem, call your utility first. For a problem with a supplier contract, call the supplier. If it is not resolved, contact the PUCO Call Center at (800) 686-7826 or start an informal complaint online.[^1][^13]',
  },
  electricity: {
    market: 'choice',
    text:
      'With electric choice, you may be able to pick the company that supplies the generation part of your electricity. Your local utility still delivers it, and you still call the utility if your power goes out.[^1] To compare, look at a supplier\'s price per kilowatt-hour against the **"price to compare"** on your current bill. If you do not choose a supplier, your utility keeps providing your electricity.[^1] Before you sign, ask whether the price is fixed or variable, how long the contract lasts, what happens when it ends, and whether there are cancellation fees. You have seven days from the postmark on your utility\'s confirmation letter to cancel.[^1] Some communities buy power as a group through "opt-out" governmental aggregation, which enrolls residents automatically unless they opt out.[^1] Electric cooperative members are not part of the choice program.[^2] See [supply vs. delivery charges](/learn/supply-vs-delivery-charges).',
    shopping: { name: 'Energy Choice Ohio', url: 'https://energychoice.ohio.gov/' },
  },
  gas: {
    text:
      'The PUCO regulates natural gas companies.[^3] Customers of Duke Energy, Columbia Gas of Ohio, Dominion Energy, and CenterPoint Energy of Ohio can choose a natural gas supplier, and the local utility keeps delivering the gas and answering safety calls.[^4] Make sure a supplier is PUCO-certified, and ask about the price per ccf or mcf, whether it can change, and any early cancellation fee.[^4] The PUCO posts supplier offers on its Energy Choice Ohio website.[^4][^12]',
    shopping: { name: 'Energy Choice Ohio', url: 'https://energychoice.ohio.gov/' },
  },
  water: {
    text:
      'In many parts of Ohio, water systems are run by local governments and are not regulated by the PUCO. Where a for-profit company owns and runs the water utility, the PUCO closely regulates it.[^5] If your water comes from a city or village, questions about rates go to that local government. See [water and sewer bills](/categories/water-sewer).',
  },
  shutoff: {
    text:
      'A regulated electric or gas utility must give you at least **14 days\' notice** before disconnecting for nonpayment. From November 1 through April 15, it must also contact you 10 days before disconnection, which pushes the date back by 10 more days.[^6] A medical certificate from a licensed physician or certain other medical professionals stops a disconnection for 30 days, and it can be renewed two more times.[^6] The **Special Reconnect Order**, issued each year and typically in effect mid-October through mid-April, lets any residential customer of a regulated utility keep or restore service once per heating season per utility, regardless of income; as of October 2026, the PUCO lists the payment as $175 plus a reconnection fee of no more than $36.[^7] From November 1 to April 15, regulated gas and electric companies also offer a winter plan where you pay one-third of your balance each month.[^8]',
  },
  help: [
    {
      name: 'Home Energy Assistance Program (HEAP)',
      url: 'https://jfs.ohio.gov/public-assistance/energy-and-community-assistance/home-energy-assistance-program-heap',
      summary:
        'A federally funded, once-a-year benefit applied directly to your utility or bulk fuel bill. Households of up to eight people with income at or below 175 percent of the federal poverty guidelines are eligible (larger households use a state median income limit), and both homeowners and renters can apply. Since April 6, 2026, the program has been run by the Ohio Department of Job and Family Services.[^9]',
    },
    {
      name: 'Percentage of Income Payment Plan (PIPP Plus)',
      url: 'https://jfs.ohio.gov/public-assistance/energy-and-community-assistance',
      summary:
        'Helps eligible Ohioans manage energy bills year-round.[^10] When you pay your monthly PIPP Plus amount on time and in full, part of your past-due balance and the rest of that month\'s bill are forgiven as a credit.[^8]',
    },
    {
      name: 'HEAP Winter Crisis Program',
      url: 'https://jfs.ohio.gov/public-assistance/energy-and-community-assistance',
      summary:
        'Helps income-eligible Ohioans who are threatened with disconnection, have been disconnected, or have less than a 25 percent supply of bulk fuel.[^10] It is run through local community action agencies for households at or below 175 percent of the federal poverty guidelines.[^8]',
    },
    {
      name: 'Home Weatherization Assistance Program (HWAP)',
      url: 'https://jfs.ohio.gov/public-assistance/energy-and-community-assistance',
      summary:
        'A federally funded, low-income energy efficiency program. Services can include insulation, air leakage reduction, and heating system repairs or replacements, based on an on-site energy audit.[^8][^10]',
    },
  ],
  consumer: {
    name: 'Ohio Attorney General Consumer Protection',
    url: 'https://www.ohioattorneygeneral.gov/Individuals-and-Families/Consumers',
    summary:
      'The Attorney General\'s office helps consumers resolve problems with businesses, warns about scams and deceptive practices, and takes consumer complaints online.[^11]',
  },
  rebates: [],
  sources: [
    {
      title: 'Choosing an electric supplier',
      publisher: 'Public Utilities Commission of Ohio',
      url: 'https://puco.ohio.gov/utilities/electricity/resources/choosing-an-electric-supplier',
      accessed: '2026-10-15',
    },
    {
      title: 'Electric cooperatives',
      publisher: 'Public Utilities Commission of Ohio',
      url: 'https://puco.ohio.gov/utilities/electricity/resources/electric-cooperatives',
      accessed: '2026-10-15',
    },
    {
      title: 'Consumers',
      publisher: 'Public Utilities Commission of Ohio',
      url: 'https://puco.ohio.gov/consumers',
      accessed: '2026-10-15',
    },
    {
      title: 'Choosing a natural gas supplier',
      publisher: 'Public Utilities Commission of Ohio',
      url: 'https://puco.ohio.gov/utilities/gas/resources/choosing-a-natural-gas-supplier',
      accessed: '2026-10-15',
    },
    {
      title: 'Water and Wastewater Overview',
      publisher: 'Public Utilities Commission of Ohio',
      url: 'https://puco.ohio.gov/utilities/water/resources/water-and-wastewater-overview',
      accessed: '2026-10-15',
    },
    {
      title: 'Ohio Adm.Code 4901:1-18-06, Disconnection procedures for electric, gas, and natural gas utilities',
      publisher: 'Ohio Legislative Service Commission (codes.ohio.gov)',
      url: 'https://codes.ohio.gov/ohio-administrative-code/rule-4901:1-18-06',
      accessed: '2026-10-15',
    },
    {
      title: 'Special Reconnect Order: Maintain electric and natural gas service',
      publisher: 'Public Utilities Commission of Ohio',
      url: 'https://puco.ohio.gov/utilities/gas/resources/special-reconnect-order-maintain-electric-and-natural-gas-service',
      accessed: '2026-10-15',
    },
    {
      title: 'Utility assistance programs',
      publisher: 'Public Utilities Commission of Ohio',
      url: 'https://puco.ohio.gov/utilities/electricity/resources/utility-assistance-programs',
      accessed: '2026-10-15',
    },
    {
      title: 'Home Energy Assistance Program (HEAP)',
      publisher: 'Ohio Department of Job and Family Services',
      url: 'https://jfs.ohio.gov/public-assistance/energy-and-community-assistance/home-energy-assistance-program-heap',
      accessed: '2026-10-15',
    },
    {
      title: 'Energy & Community Assistance',
      publisher: 'Ohio Department of Job and Family Services',
      url: 'https://jfs.ohio.gov/public-assistance/energy-and-community-assistance',
      accessed: '2026-10-15',
    },
    {
      title: 'Services for Consumers',
      publisher: 'Ohio Attorney General',
      url: 'https://www.ohioattorneygeneral.gov/Individuals-and-Families/Consumers',
      accessed: '2026-10-15',
    },
    {
      title: 'Energy Choice Ohio',
      publisher: 'Public Utilities Commission of Ohio',
      url: 'https://energychoice.ohio.gov/',
      accessed: '2026-10-15',
    },
    {
      title: 'File a Complaint',
      publisher: 'Public Utilities Commission of Ohio',
      url: 'https://puco.ohio.gov/help-center/file-a-complaint',
      accessed: '2026-10-15',
    },
  ],
}
