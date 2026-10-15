import type { StateGuide } from '../types'

export const ar: StateGuide = {
  code: 'AR',
  lastReviewed: '2026-10-15',
  intro:
    'Arkansas passed laws for retail electric competition but repealed them in 2003, finding it in the public interest to keep regulating electric rates.[^2] The Arkansas Public Service Commission regulates investor-owned utilities and electric cooperatives, but not city-owned utilities.[^1][^2]',
  regulator: {
    name: 'Arkansas Public Service Commission (APSC)',
    url: 'https://apsc.arkansas.gov/',
    complaintUrl: 'https://apsc.arkansas.gov/filing-a-complaint/',
    text:
      'The APSC regulates public utilities that provide electric, gas and telephone service, and larger water companies.[^1] It does **not** regulate the rates and service of city-owned electric, gas, water or sewer utilities, water and sewer improvement districts, or utilities owned by property owners associations.[^1] Try to resolve the problem with your utility first. Then contact APSC Consumer Services for an informal complaint by phone, letter or in person; APSC rules require the utility to respond within 15 days. If you are not satisfied, you can file a formal complaint.[^1] The APSC cannot award money damages.[^1]',
  },
  electricity: {
    market: 'regulated',
    text:
      'Act 204 of 2003 repealed Arkansas\'s retail electric competition law and found it in the public interest to keep regulating electric rates.[^2] The APSC regulates 24 electric utilities, including four investor-owned utilities and seventeen distribution cooperatives, and each one\'s rates and terms are in its Commission-approved tariff.[^2] The APSC does not regulate city-owned utilities or public power agencies, so contact those providers about their rates.[^2] See [how to read your electric bill](/learn/how-to-read-your-electric-bill).',
    shopping: null,
  },
  gas: {
    text:
      'The APSC regulates four natural gas utilities: Arkansas Oklahoma Gas Corporation, CenterPoint Energy Arkansas Gas, Logan Township Gas User\'s Association and Black Hills Energy Arkansas.[^3] It does not regulate city-owned gas utilities.[^3] Rates and rules for each regulated gas utility are in its approved tariff.[^3]',
    shopping: null,
  },
  water: {
    text:
      'The APSC regulates only two water utilities, Liberty Utilities (Pine Bluff Water) and Liberty Utilities (Arkansas Water), and currently no sewer utilities.[^4] It does not regulate city or town utilities, improvement districts, smaller (Class B or lower) water and sewer companies, or property owners associations.[^4] If a city or district serves you, contact it about rates and billing. See [water and sewer bills](/categories/water-sewer).',
  },
  shutoff: {
    text:
      'For regulated utilities, you must get **at least five days of written notice** before a shutoff, plus three more days if the notice is mailed.[^5] Gas or electric service to a home cannot be shut off on a day when the National Weather Service forecasts 32 degrees Fahrenheit or lower at any time in the next 24 hours.[^5] If you are identified to the utility as 65 or older or handicapped, electric service cannot be shut off when 95 degrees is forecast in the next 24 hours (for gas, only if you have gas air conditioning).[^5] Your physician can file a medical certificate that postpones a shutoff for up to 30 days.[^5] A social service agency that agrees in writing to pay at least one-fourth of an overdue bill can keep service on if you enter a delayed payment agreement.[^5] You can also name a third party to get copies of shutoff notices.[^5] Service should not be cut off over a disputed amount while you pay the undisputed part.[^1]',
  },
  help: [
    {
      name: 'Low-Income Home Energy Assistance Program (LIHEAP)',
      url: 'https://www.adeq.state.ar.us/energy/assistance/liheap.aspx',
      summary:
        'The Arkansas Energy Office oversees LIHEAP, which helps with winter heating and summer cooling bills. You apply through the community-based organization serving your county, not the state office. The program opens and closes with funding. As of October 2026, the state page says LIHEAP is closed and suggests checking with your local Community Action Agency for other options, so check the page for when it reopens.[^6]',
    },
    {
      name: 'Weatherization Assistance Program',
      url: 'https://www.adeq.state.ar.us/energy/assistance/wap.aspx',
      summary:
        'Local agencies in all 75 counties provide free energy conservation work, such as insulation, heating and cooling repairs and safety upgrades, after an energy audit. Households with income up to 200% of federal poverty guidelines may qualify, and households with an SSI recipient or that receive or qualify for LIHEAP are automatically eligible. Apply with your local provider.[^7]',
    },
  ],
  consumer: {
    name: 'Arkansas Attorney General Consumer Protection Division',
    url: 'https://arkansasag.gov/file-a-complaint/',
    summary:
      'The Consumer Protection Division helps by contacting businesses and mediating disputes, and you can file a complaint online or on paper.[^8][^10] The Attorney General\'s Consumer Utility Rate Advocacy Division represents utility customers before the APSC and also works to resolve complaints against utilities through informal mediation.[^9]',
  },
  rebates: [
    {
      name: 'Utility energy efficiency programs (APSC)',
      url: 'https://apsc.arkansas.gov/programs-initiatives-activities/energy-efficiency/',
      summary:
        'Electric and natural gas utilities under APSC jurisdiction run Commission-approved energy efficiency programs to help customers save energy, and each files an annual report. Ask your utility what it offers.[^11]',
    },
  ],
  sources: [
    { title: 'File a Complaint', publisher: 'Arkansas Public Service Commission', url: 'https://apsc.arkansas.gov/filing-a-complaint/', accessed: '2026-10-15' },
    { title: 'Electric Utilities The Commission Regulates', publisher: 'Arkansas Public Service Commission', url: 'https://apsc.arkansas.gov/utilities/electric/', accessed: '2026-10-15' },
    { title: 'Gas utilities', publisher: 'Arkansas Public Service Commission', url: 'https://apsc.arkansas.gov/utilities/gas/', accessed: '2026-10-15' },
    { title: 'Water utilities', publisher: 'Arkansas Public Service Commission', url: 'https://apsc.arkansas.gov/utilities/water/', accessed: '2026-10-15' },
    { title: 'Suspension of Service: What You Should Know and Special Protections', publisher: 'Arkansas Public Service Commission', url: 'https://apsc.arkansas.gov/consumer-services/suspension-of-service/', accessed: '2026-10-15' },
    { title: 'Low-Income Home Energy Assistance Program (LIHEAP)', publisher: 'Arkansas Department of Energy and Environment, Arkansas Energy Office', url: 'https://www.adeq.state.ar.us/energy/assistance/liheap.aspx', accessed: '2026-10-15' },
    { title: 'Weatherization Assistance Program', publisher: 'Arkansas Department of Energy and Environment, Arkansas Energy Office', url: 'https://www.adeq.state.ar.us/energy/assistance/wap.aspx', accessed: '2026-10-15' },
    { title: 'Consumer Protection', publisher: 'Arkansas Attorney General', url: 'https://arkansasag.gov/divisions/public-protection/consumer-protection/', accessed: '2026-10-15' },
    { title: 'Consumer Utility Rate Advocacy', publisher: 'Arkansas Attorney General', url: 'https://arkansasag.gov/divisions/state-agencies/consumer-utility-rate-advocacy/', accessed: '2026-10-15' },
    { title: 'File a Complaint', publisher: 'Arkansas Attorney General', url: 'https://arkansasag.gov/file-a-complaint/', accessed: '2026-10-15' },
    { title: 'Energy Efficiency', publisher: 'Arkansas Public Service Commission', url: 'https://apsc.arkansas.gov/programs-initiatives-activities/energy-efficiency/', accessed: '2026-10-15' },
  ],
}
