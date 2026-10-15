import type { StateGuide } from '../types'

export const nc: StateGuide = {
  code: 'NC',
  lastReviewed: '2026-10-15',
  intro:
    'North Carolina utilities are monopolies in their service areas, and the North Carolina Utilities Commission (NCUC) oversees the prices of investor-owned electric, natural gas and water companies such as Duke Energy Carolinas, Duke Energy Progress, Dominion Energy North Carolina, Piedmont Natural Gas and PSNC Energy.[^1][^2] A separate agency, the Public Staff, represents customers and helps resolve complaints.[^1][^3]',
  regulator: {
    name: 'North Carolina Utilities Commission (NCUC)',
    url: 'https://www.ncuc.gov/',
    complaintUrl: 'https://publicstaff.nc.gov/submit-complaint',
    text:
      'The NCUC regulates rates, billing accuracy and service quality for investor-owned electric, natural gas and water and sewer utilities, and disconnection of electric and water service.[^2] It has only very limited oversight of electric cooperatives and city-run utilities and does not regulate their rates, and it does not regulate cable TV or internet providers.[^1] **Talk to your utility first and ask for a supervisor if needed.** If that fails, contact the Consumer Services Division of the Public Staff at 919-733-9277 or 866-380-9816 or through its online form; if the problem is still not resolved, you can file a formal complaint with the Commission.[^3][^4] Complaints about municipal systems go to your local government.[^4]',
  },
  electricity: {
    market: 'regulated',
    text:
      'Because utility providers are monopolies and customers usually cannot choose their provider, the NCUC has authority over the prices of investor-owned electric companies: Dominion Energy North Carolina, Duke Energy Carolinas and Duke Energy Progress.[^1][^2] The NCUC does not regulate the rates of electric membership corporations (cooperatives) or city-run utilities.[^1] To understand your charges, see [how to read your electric bill](/learn/how-to-read-your-electric-bill).',
    shopping: null,
  },
  gas: {
    text:
      'The NCUC regulates the rates, billing accuracy, reliability and safety of natural gas distribution companies, including Piedmont Natural Gas, PSNC Energy, Frontier Natural Gas and Toccoa Natural Gas.[^2] As with electricity, the NCUC describes utility providers as monopolies that customers usually cannot choose.[^1] It does not regulate propane or heating oil prices.[^2]',
    shopping: null,
  },
  water: {
    text:
      'The NCUC regulates privately owned water and sewer companies that serve 15 or more customers for pay, covering rates, billing accuracy, disconnections and service quality other than drinking water quality.[^2] It does not regulate municipal or county water systems or nonprofit and consumer-owned systems, so contact your town, city or county about those rates.[^2][^4] See [water and sewer bills](/categories/water-sewer) for how these bills work.',
  },
  shutoff: {
    text:
      'Under NCUC rules for electric utilities, your bill cannot be past due until at least 25 days after the billing date, and service cannot be cut for nonpayment until you get at least 10 days of written notice.[^5] The notice must say service will not be cut if you cannot pay in full and agree to a reasonable installment plan of up to six months.[^5] **For bills issued November 1 through March 31, service cannot be cut without Commission approval if a household member is 65 or older or disabled, you cannot pay, and your local social services office certifies you as eligible for energy crisis assistance.**[^5] Utilities cannot disconnect on Fridays, weekends, state or federal holidays or the day before a holiday, and if you appeal to the Public Staff before service is cut, the utility must get Commission approval to proceed.[^5]',
  },
  help: [
    {
      name: 'Low Income Energy Assistance Program (LIEAP)',
      url: 'https://www.ncdhhs.gov/divisions/social-services/energy-assistance/low-income-energy-assistance-lieap',
      summary:
        'Run by the NC Department of Health and Human Services, LIEAP makes a one-time payment to your heating vendor. Households with someone 60 or older, or a person with disabilities receiving services through the Division of Aging and Adult Services, can sign up December 1 to 31; all other households can apply January 1 to March 31 or until funds run out. Apply through your local Department of Social Services or online through ePASS.[^6]',
    },
    {
      name: 'Crisis Intervention Program (CIP)',
      url: 'https://www.ncdhhs.gov/divisions/social-services/energy-assistance/low-income-energy-assistance/crisis-intervention-program',
      summary:
        'Helps households in a heating or cooling crisis, such as having no heating or cooling source or a disconnect notice when a household member’s health would be in danger. Applications are taken July 1 through June 30 or until funds run out, through your local Department of Social Services or ePASS.[^7]',
    },
    {
      name: 'Weatherization Assistance Program',
      url: 'https://www.deq.nc.gov/energy-climate/state-energy-office/weatherization-assistance-program',
      summary:
        'Run by the NC Department of Environmental Quality State Energy Office through local providers. It helps income-eligible households with insulation, air sealing, heating and cooling improvements and health and safety repairs, with priority for older adults, people with disabilities, families with children and households with high energy costs.[^8]',
    },
  ],
  consumer: {
    name: 'North Carolina Department of Justice, Consumer Protection',
    url: 'https://ncdoj.gov/file-a-complaint/',
    summary:
      'The Attorney General’s office mediates complaints between consumers and businesses and may sue when it finds possible violations of consumer protection laws. It prefers complaints through its online form; you can also call 1-877-5-NO-SCAM in North Carolina.[^9] The Public Staff directs complaints about internet, cable, wireless and propane providers to this office.[^4]',
  },
  rebates: [
    {
      name: 'Energy Saver North Carolina',
      url: 'https://www.deq.nc.gov/energy-climate/state-energy-office/energy-saver-north-carolina',
      summary:
        'The state’s Home Energy Rebates program, run by the NC Department of Environmental Quality. It helps income-eligible homeowners and renters pay for efficiency and electrification upgrades such as heat pumps, electrical panels and insulation. DEQ says updated U.S. Department of Energy guidance issued May 29, 2026 changed the program, so check the page for current terms before you plan a project.[^10]',
    },
  ],
  sources: [
    { title: 'Frequently Asked Questions', publisher: 'North Carolina Utilities Commission', url: 'https://www.ncuc.gov/Consumer/faq.html', accessed: '2026-10-15' },
    { title: 'What does the NC Utilities Commission Regulate?', publisher: 'North Carolina Utilities Commission', url: 'https://www.ncuc.gov/Consumer/whatwedo.html', accessed: '2026-10-15' },
    { title: 'Complaint Process', publisher: 'North Carolina Utilities Commission', url: 'https://www.ncuc.gov/Consumer/pursuecomplaint.html', accessed: '2026-10-15' },
    { title: 'Submit a Complaint', publisher: 'Public Staff, North Carolina Utilities Commission', url: 'https://publicstaff.nc.gov/submit-complaint', accessed: '2026-10-15' },
    { title: 'Chapter 12 rules, Rule R12-11 (Disconnection of residential customer’s electric service)', publisher: 'North Carolina Utilities Commission', url: 'https://www.ncuc.gov/ncrules/Chapter12.pdf', accessed: '2026-10-15' },
    { title: 'Low Income Energy Assistance', publisher: 'NC Department of Health and Human Services', url: 'https://www.ncdhhs.gov/divisions/social-services/energy-assistance/low-income-energy-assistance-lieap', accessed: '2026-10-15' },
    { title: 'Crisis Intervention Program (Heating and Cooling)', publisher: 'NC Department of Health and Human Services', url: 'https://www.ncdhhs.gov/divisions/social-services/energy-assistance/low-income-energy-assistance/crisis-intervention-program', accessed: '2026-10-15' },
    { title: 'Weatherization Assistance Program', publisher: 'NC Department of Environmental Quality, State Energy Office', url: 'https://www.deq.nc.gov/energy-climate/state-energy-office/weatherization-assistance-program', accessed: '2026-10-15' },
    { title: 'File a Complaint', publisher: 'North Carolina Department of Justice', url: 'https://ncdoj.gov/file-a-complaint/', accessed: '2026-10-15' },
    { title: 'Energy Saver North Carolina', publisher: 'NC Department of Environmental Quality, State Energy Office', url: 'https://www.deq.nc.gov/energy-climate/state-energy-office/energy-saver-north-carolina', accessed: '2026-10-15' },
  ],
}
