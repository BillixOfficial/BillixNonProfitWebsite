import type { StateGuide } from '../types'

export const tx: StateGuide = {
  code: 'TX',
  lastReviewed: '2026-10-15',
  intro:
    'In most of Texas you pick the company that sells you electricity, while a regulated local wires company still delivers it.[^4] Cities, co-ops and some regions are exceptions, so the first step is finding out which kind of area you live in.[^3]',
  regulator: {
    name: 'Public Utility Commission of Texas (PUCT)',
    url: 'https://www.puc.texas.gov/',
    complaintUrl: 'https://www.puc.texas.gov/consumer-help/complaints/complaint/',
    text:
      'The PUCT regulates the state\'s electric, telecommunication, and water and sewer utilities and helps resolve consumer complaints.[^1] It does not regulate customer service at municipally owned utilities, and since 1999 it no longer regulates customer service at electric co-ops; co-op boards and city governments set those retail rates.[^3] Natural gas utilities are overseen by a different agency, the Railroad Commission of Texas.[^7] **Contact your provider first.** If you can\'t resolve the problem, submit a complaint with the PUCT Office of Consumer Assistance.[^2]',
  },
  electricity: {
    market: 'choice',
    text:
      'A 1999 law let people in most parts of Texas choose their electric company, called a Retail Electric Provider (REP).[^4] Your local wires company (the Transmission and Distribution Utility, or TDU) still delivers the power, reads meters and handles outages, and the PUCT regulates that delivery.[^4] Municipally owned utilities and co-ops decide for themselves whether to offer choice, and state law has delayed competition in the areas served by Entergy Gulf States, Southwestern Public Service Company, El Paso Electric Company and AEP SWEPCO.[^3] Power to Choose is the PUCT\'s official comparison site; enter your ZIP code to see whether plans are offered where you live.[^5][^4] Before you sign, read the plan\'s Electricity Facts Label and Terms of Service, since some plans charge a minimum usage fee and breaking a contract early can cost an early termination fee.[^4][^6] **If your contract ends and you do nothing, you move to a month-to-month, variable rate plan.**[^4]',
    shopping: { name: 'Power to Choose', url: 'https://www.powertochoose.org/' },
  },
  gas: {
    text:
      'The Railroad Commission of Texas oversees natural gas utilities.[^7] Inside city limits, a gas utility must first ask the city government to change rates, and either side can appeal to the Railroad Commission if they disagree.[^7] In unincorporated areas, the Railroad Commission has exclusive jurisdiction over gas rates and services.[^7]',
    shopping: null,
  },
  water: {
    text:
      'The PUCT approves the rates charged by for-profit, investor-owned water utilities.[^8] Utility districts, water supply corporations and city-owned utilities set their own water and wastewater rates without PUCT approval, though their customers may still have the right to appeal a rate change to the PUCT.[^8] If you think your water bill is wrong, contact your provider first, then the PUCT Office of Consumer Assistance.[^8] See [water and sewer bills](/categories/water-sewer) for how these charges work.',
  },
  shutoff: {
    text:
      'Your REP must send a separate written disconnection notice, and the disconnection date must be 10 days after the notice is issued.[^9] A REP may not authorize a shutoff for nonpayment in a county during an **extreme weather emergency**: a day when the previous day\'s high did not exceed 32°F and the temperature is forecast to stay at or below that level for the next 24 hours, or when the National Weather Service has issued a heat advisory for the county that day or either of the two days before.[^10] During such an emergency, you can ask your REP for a deferred payment plan for bills that come due.[^10] If someone in your home would become seriously ill without power, you can avoid disconnection as a Critical Care Residential Customer by having the person\'s physician contact the REP and send a written statement, and by entering a deferred payment plan, all by the disconnection date; this protection lasts up to 63 days.[^10][^9] Water and sewer companies the PUCT regulates must also give a written notice with a disconnection date 10 days after it is issued, unless the PUCT allows a shorter time.[^9]',
  },
  help: [
    {
      name: 'Comprehensive Energy Assistance Program (CEAP)',
      url: 'https://www.tdhca.texas.gov/comprehensive-energy-assistance-program-ceap',
      summary:
        'Texas\'s LIHEAP-funded utility assistance program for low-income households, run by the Texas Department of Housing and Community Affairs through local agencies covering all 254 counties.[^11] You can reach TDHCA toll free at 877-399-8939 to find help.[^12]',
    },
    {
      name: 'Retail electric provider low-income discounts',
      url: 'https://www.puc.texas.gov/consumer-help/electricity/paying-my-bill/',
      summary:
        'Some REPs choose to offer benefits to low-income customers on SNAP or Medicaid; the program participant\'s name must match the name on the electric bill, and you can\'t self-enroll. Ask your provider whether it takes part.[^12]',
    },
    {
      name: 'Weatherization Assistance Program (WAP)',
      url: 'https://www.tdhca.texas.gov/weatherization-assistance-program',
      summary:
        'TDHCA\'s program for low-income households includes an energy audit and work such as insulation, weather-stripping and heating and cooling repairs, delivered by local agencies statewide.[^13]',
    },
  ],
  consumer: {
    name: 'Office of the Texas Attorney General, Consumer Protection',
    url: 'https://www.texasattorneygeneral.gov/consumer-protection/file-consumer-complaint',
    summary:
      'The Attorney General accepts complaints about false, misleading or deceptive business practices, including billing and refund issues.[^14] For problems with an electric, phone or water provider, the PUCT complaint process is usually the faster route.[^2]',
  },
  rebates: [
    {
      name: 'Texas Home Energy Rebates (HOMES and HEAR)',
      url: 'https://comptroller.texas.gov/programs/seco/funding/ira/',
      summary:
        'The State Energy Conservation Office is planning federally funded home efficiency and appliance rebates. **As of October 2026, these programs have not launched**; a launch date will be set once the state has DOE approval.[^15]',
    },
    {
      name: 'Utility energy efficiency programs',
      url: 'https://www.puc.texas.gov/industry/electric/energy-efficiency/',
      summary:
        'The state\'s eight investor-owned electric utilities must offer energy efficiency programs to residential customers, with oversight from the PUCT.[^16]',
    },
  ],
  sources: [
    { title: 'Public Utility Commission of Texas home page', publisher: 'Public Utility Commission of Texas', url: 'https://www.puc.texas.gov/', accessed: '2026-10-15' },
    { title: 'Submit a Complaint', publisher: 'Public Utility Commission of Texas', url: 'https://www.puc.texas.gov/consumer-help/complaints/complaint/', accessed: '2026-10-15' },
    { title: 'Municipally-Owned Electric Utilities and Electric Cooperatives FAQs', publisher: 'Public Utility Commission of Texas', url: 'https://www.puc.texas.gov/consumer-help/faq/muni/', accessed: '2026-10-15' },
    { title: 'Frequently Asked Questions', publisher: 'Power to Choose (Public Utility Commission of Texas)', url: 'https://www.powertochoose.org/en-us/Content/Resource/FAQ', accessed: '2026-10-15' },
    { title: 'About Us', publisher: 'Power to Choose (Public Utility Commission of Texas)', url: 'https://www.powertochoose.org/en-us/Content/Resource/About-Us', accessed: '2026-10-15' },
    { title: 'Electricity FAQs', publisher: 'Public Utility Commission of Texas', url: 'https://www.puc.texas.gov/consumer-help/faq/electricity/', accessed: '2026-10-15' },
    { title: 'Gas Services', publisher: 'Railroad Commission of Texas', url: 'https://www.rrc.texas.gov/gas-services/', accessed: '2026-10-15' },
    { title: 'Understanding Charges On Your Water Bill', publisher: 'Public Utility Commission of Texas', url: 'https://www.puc.texas.gov/consumer-help/water/bill-charges/', accessed: '2026-10-15' },
    { title: 'Know Your Rights', publisher: 'Public Utility Commission of Texas', url: 'https://www.puc.texas.gov/consumer-help/complaints/rights/', accessed: '2026-10-15' },
    { title: '16 TAC §25.483, Disconnection of Service', publisher: 'Public Utility Commission of Texas', url: 'https://ftp.puc.texas.gov/public/puct-info/agency/rulesnlaws/subrules/electric/25.483/25.483.pdf', accessed: '2026-10-15' },
    { title: 'Comprehensive Energy Assistance Program (CEAP)', publisher: 'Texas Department of Housing and Community Affairs', url: 'https://www.tdhca.texas.gov/comprehensive-energy-assistance-program-ceap', accessed: '2026-10-15' },
    { title: 'Assistance Paying Your Bill', publisher: 'Public Utility Commission of Texas', url: 'https://www.puc.texas.gov/consumer-help/electricity/paying-my-bill/', accessed: '2026-10-15' },
    { title: 'Weatherization Assistance Program', publisher: 'Texas Department of Housing and Community Affairs', url: 'https://www.tdhca.texas.gov/weatherization-assistance-program', accessed: '2026-10-15' },
    { title: 'File a Consumer Complaint', publisher: 'Office of the Texas Attorney General', url: 'https://www.texasattorneygeneral.gov/consumer-protection/file-consumer-complaint', accessed: '2026-10-15' },
    { title: 'Texas Home Energy Rebates', publisher: 'Texas Comptroller of Public Accounts, State Energy Conservation Office', url: 'https://comptroller.texas.gov/programs/seco/funding/ira/', accessed: '2026-10-15' },
    { title: 'Energy Efficiency', publisher: 'Public Utility Commission of Texas', url: 'https://www.puc.texas.gov/industry/electric/energy-efficiency/', accessed: '2026-10-15' },
  ],
}
