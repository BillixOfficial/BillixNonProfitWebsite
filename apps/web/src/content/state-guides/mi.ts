import type { StateGuide } from '../types'

export const mi: StateGuide = {
  code: 'MI',
  lastReviewed: '2026-10-15',
  intro:
    'Michigan caps electric choice by law, and no suppliers are currently enrolling residential customers, so you generally cannot shop for electricity at home.[^2] Natural gas is different: customers of four gas utilities can shop for a supplier.[^4]',
  regulator: {
    name: 'Michigan Public Service Commission (MPSC)',
    url: 'https://www.michigan.gov/mpsc',
    complaintUrl: 'https://www.michigan.gov/mpsc/consumer/complaints',
    text:
      'The MPSC regulates natural gas, electricity, and telecommunications.[^7] It sets rates and service conditions, including metering and billing, for seven privately owned electric utilities and seven natural gas utilities.[^1][^3] Some shutoff protections may not be offered by municipal electric utilities or electric cooperatives.[^8] Contact your utility first. If that does not work, file an informal complaint online, by phone at 1-800-292-9555, or by mail. The MPSC sends it to the company, which has up to 10 business days to investigate and respond.[^6][^8]',
  },
  electricity: {
    market: 'partial',
    text:
      'Michigan\'s Electric Customer Choice program lets some customers buy power supply from licensed alternative electric suppliers, but state law caps participation at **10 percent** of each utility\'s sales.[^2] When a utility\'s cap is full, new customers go into a queue, and because of the limit **no licensed suppliers are currently marketing or enrolling residential customers**.[^2] Supplier rates are not regulated, and your local utility still delivers your power.[^2] If one of the seven privately owned electric utilities the MPSC regulates serves you, your rates are the ones the MPSC approves.[^1] See [supply vs. delivery charges](/learn/supply-vs-delivery-charges).',
    shopping: null,
  },
  gas: {
    text:
      'The MPSC regulates retail natural gas rates and service conditions for seven natural gas utilities.[^3] Through Gas Customer Choice, residential and business customers of Consumers Energy, DTE Gas, Michigan Gas Utilities, and SEMCO Energy Gas Company can buy gas from a licensed alternative gas supplier, or do nothing and stay on the utility\'s regulated rate.[^4] Supplier rates are **not regulated**, so compare offers before you switch. Your local utility still delivers the gas.[^4] The MPSC\'s CompareMIGas site shows current offers, and suppliers are responsible for their accuracy.[^4][^5]',
    shopping: { name: 'CompareMIGas', url: 'https://gaschoice.apps.lara.state.mi.us/' },
  },
  water: {
    text:
      'Water is not one of the industries the MPSC regulates, and its complaint process covers natural gas, electricity, telecommunications, video, and damage prevention, not water.[^7][^6] Take water and sewer billing questions to your water provider. If you are behind on a water bill, the state Water Assistance Program can pay up to $3,000 a year for eligible households.[^12] See [water and sewer bills](/categories/water-sewer).',
  },
  shutoff: {
    text:
      'A regulated utility must send a shutoff notice by first-class mail or personal service **at least 10 days** before it shuts off service.[^9] The Low Income Winter Protection Plan protects eligible customers from shutoff from **November 1 to March 31** if they keep up with required payments. That includes paying at least 7 percent of the estimated annual bill each month.[^8] Customers 65 and older are protected from shutoff from November 1 to March 31.[^8] A Medical Emergency Protection gives a 21-day hold that can be extended. Critical Care Protection covers households that rely on home medical equipment or life support. Both require the MPSC Medical Certification Form, certified by a physician or public health official.[^8] Active-duty military customers may qualify for a 90-day protection.[^8]',
  },
  help: [
    {
      name: 'Energy & Weatherization assistance (Home Heating Credit, State Emergency Relief, Weatherization Assistance)',
      url: 'https://www.michigan.gov/mdhhs/assistance-programs/emergency-relief/energyweatherization',
      summary:
        'Michigan uses federal energy assistance money through several programs.[^10] The **Home Heating Credit** from the Michigan Department of Treasury helps with heating costs, and you can apply from January through September 30.[^10] **State Emergency Relief (SER)** helps with energy crises such as a past-due or shutoff notice; apply through MI Bridges.[^10] The **Weatherization Assistance Program** provides free energy conservation services for eligible homeowners and renters.[^10]',
    },
    {
      name: 'Michigan Energy Assistance Program (MEAP)',
      url: 'https://www.michigan.gov/mpsc/consumer/energy-assistance',
      summary:
        'Helps eligible low-income households pay electricity, natural gas, propane, heating oil, and other deliverable fuel bills, with a focus on self-sufficiency.[^11] You must be served by an electric utility that collects the Low Income Energy Assistance Fund surcharge and meet income or program-participation rules. Call 2-1-1 to reach a MEAP provider.[^8]',
    },
    {
      name: 'Water Assistance Program',
      url: 'https://www.michigan.gov/mdhhs/assistance-programs/water-assistance-program',
      summary:
        'Helps eligible low-income residential account holders with water or wastewater arrears and shutoffs, up to $3,000 per fiscal year. It is run through Community Action Agencies.[^12]',
    },
  ],
  consumer: {
    name: 'Michigan Department of Attorney General, Consumer Protection',
    url: 'https://www.michigan.gov/ag/consumer-protection',
    summary:
      'The Consumer Protection team handles consumer complaints and informally mediates disputes with businesses. You can file online or call 877-765-8388 toll-free.[^13]',
  },
  rebates: [
    {
      name: 'Michigan Home Energy Rebates (MiHER)',
      url: 'https://www.michigan.gov/egle/about/organization/materials-management/energy/rfps-loans/home-energy-rebate-programs',
      summary:
        'Federally funded rebates run by the Michigan Department of Environment, Great Lakes, and Energy (EGLE) for efficiency and electrification upgrades, through HOMES and HEAR. Work must be done by a MiHER Registered Contractor. As of October 2026, new income-qualified applications in some EGLE districts are temporarily paused, so check the page for current status.[^14]',
    },
  ],
  sources: [
    {
      title: 'Electricity',
      publisher: 'Michigan Public Service Commission',
      url: 'https://www.michigan.gov/mpsc/consumer/electricity',
      accessed: '2026-10-15',
    },
    {
      title: 'Electric Customer Choice',
      publisher: 'Michigan Public Service Commission',
      url: 'https://www.michigan.gov/mpsc/consumer/electricity/choice',
      accessed: '2026-10-15',
    },
    {
      title: 'Natural Gas & Pipelines',
      publisher: 'Michigan Public Service Commission',
      url: 'https://www.michigan.gov/mpsc/consumer/natural-gas',
      accessed: '2026-10-15',
    },
    {
      title: 'Natural Gas Customer Choice',
      publisher: 'Michigan Public Service Commission',
      url: 'https://www.michigan.gov/mpsc/consumer/natural-gas/customer-choice',
      accessed: '2026-10-15',
    },
    {
      title: 'Compare MI Gas',
      publisher: 'Michigan Public Service Commission',
      url: 'https://gaschoice.apps.lara.state.mi.us/',
      accessed: '2026-10-15',
    },
    {
      title: 'Inquiries & Complaints',
      publisher: 'Michigan Public Service Commission',
      url: 'https://www.michigan.gov/mpsc/consumer/complaints',
      accessed: '2026-10-15',
    },
    {
      title: 'About the MPSC',
      publisher: 'Michigan Public Service Commission',
      url: 'https://www.michigan.gov/mpsc/about',
      accessed: '2026-10-15',
    },
    {
      title: 'Home Energy, Telephone, and Internet Assistance Information for Customers',
      publisher: 'Michigan Public Service Commission',
      url: 'https://www.michigan.gov/mpsc/consumer/get-help/utility-customers',
      accessed: '2026-10-15',
    },
    {
      title: 'Consumer Standards and Billing Practices for Electric and Natural Gas Service (R 460.101 to R 460.169)',
      publisher: 'Michigan Department of Licensing and Regulatory Affairs, Michigan Administrative Code',
      url: 'https://ars.apps.lara.state.mi.us/AdminCode/DownloadAdminCodeFile?FileName=R%20460.101%20to%20R%20460.169.pdf',
      accessed: '2026-10-15',
    },
    {
      title: 'Energy & Weatherization',
      publisher: 'Michigan Department of Health and Human Services',
      url: 'https://www.michigan.gov/mdhhs/assistance-programs/emergency-relief/energyweatherization',
      accessed: '2026-10-15',
    },
    {
      title: 'Michigan Energy Assistance Program',
      publisher: 'Michigan Public Service Commission',
      url: 'https://www.michigan.gov/mpsc/consumer/energy-assistance',
      accessed: '2026-10-15',
    },
    {
      title: 'Water Assistance Program',
      publisher: 'Michigan Department of Health and Human Services',
      url: 'https://www.michigan.gov/mdhhs/assistance-programs/water-assistance-program',
      accessed: '2026-10-15',
    },
    {
      title: 'Consumer Protection',
      publisher: 'Michigan Department of Attorney General',
      url: 'https://www.michigan.gov/ag/consumer-protection',
      accessed: '2026-10-15',
    },
    {
      title: 'Home Energy Rebates',
      publisher: 'Michigan Department of Environment, Great Lakes, and Energy',
      url: 'https://www.michigan.gov/egle/about/organization/materials-management/energy/rfps-loans/home-energy-rebate-programs',
      accessed: '2026-10-15',
    },
  ],
}
