import type { StateGuide } from '../types'

export const or: StateGuide = {
  code: 'OR',
  lastReviewed: '2026-10-15',
  intro:
    'Most Oregon households buy electricity and natural gas from a regulated utility, and only nonresidential customers can buy power from a competitive supplier.[^2][^3] Oregon rules also bar electric disconnections during heat advisories and when air quality is poor.[^1]',
  regulator: {
    name: 'Oregon Public Utility Commission (PUC)',
    url: 'https://www.oregon.gov/puc/',
    complaintUrl: 'https://www.oregon.gov/puc/Pages/Consumer-Information-Center.aspx',
    text:
      'The PUC regulates the investor-owned electric utilities (Idaho Power, Pacific Power, and Portland General Electric) and natural gas utilities (Avista, Cascade Natural Gas, and NW Natural).[^2] It does **not** regulate cooperatives, utility districts, or city-owned utilities, except for safety.[^2] Try to resolve a problem with your utility first. If you cannot, contact PUC Consumer Services by phone, by email, or online.[^1]',
  },
  electricity: {
    market: 'partial',
    text:
      '**Households in Oregon cannot buy electricity from a competitive supplier**: under Oregon law, only nonresidential customers may buy from a PUC-certified electricity service supplier, which is called Direct Access.[^3][^4] Instead, electric companies must give smaller customers a regulated cost-of-service rate plus a portfolio of rate options that includes a renewable energy option and a market-based rate.[^4] Your utility still delivers your power, and you do not have to choose anything.[^3]',
    shopping: null,
  },
  gas: {
    text:
      'The PUC regulates three natural gas utilities that serve Oregon homes: Avista, Cascade Natural Gas, and NW Natural.[^2] Ask your gas utility about its bill payment assistance, income-based discounts, and payment arrangements.[^1]',
    shopping: null,
  },
  water: {
    text:
      'Most Oregonians get water from one of about 1,100 cities and publicly owned systems, which the PUC does **not** regulate; their rates are set locally.[^1] The PUC oversees some investor-owned water utilities, mobile home parks, and associations, and it sets rates for only a small number of them.[^1] If you are a customer of a water association or provider serving 500 customers or fewer, you can petition the PUC to regulate it.[^1]',
  },
  shutoff: {
    text:
      'Regulated utilities must send notices before disconnecting for nonpayment: 15-day and 5-day notices for electric and natural gas, and 15-day and 7-day notices for water.[^1] They may not disconnect on a weekend, a national holiday, or the day before.[^1] Electric utilities may not disconnect residential service when the National Weather Service has issued an extreme heat warning, extreme heat watch, or Heat Advisory for your area, or when the Air Quality Index is 100 or more.[^1] Regulated utilities (other than phone) must offer payment arrangements, typically 12 months, and the **Emergency Medical Certificate Program** can allow a more lenient payment plan if someone in your home is under a doctor\'s care.[^1]',
  },
  help: [
    {
      name: 'Low Income Home Energy Assistance Program (LIHEAP)',
      url: 'https://www.oregon.gov/ohcs/energy-weatherization/Pages/utility-bill-payment-assistance.aspx',
      summary:
        'Oregon Housing and Community Services (OHCS) funds LIHEAP through local Community Action Agencies, which take applications and pay the energy provider for you. Household income must be at or below 60 percent of Oregon\'s median income. LIHEAP may also help repair or replace an unsafe heating system.[^5]',
    },
    {
      name: 'Oregon Energy Assistance Program (OEAP)',
      url: 'https://www.oregon.gov/ohcs/energy-weatherization/Pages/utility-bill-payment-assistance.aspx',
      summary:
        'Electric bill payment help for low-income customers of Pacific Power and Portland General Electric, delivered by local Community Action Agencies.[^5]',
    },
  ],
  consumer: {
    name: 'Oregon Department of Justice, Consumer Protection',
    url: 'https://www.doj.state.or.us/consumer-protection/',
    summary:
      'Takes consumer complaints online, enforces consumer protection laws, and posts scam warnings. Use the PUC for disputes with a regulated utility.[^6]',
  },
  rebates: [
    {
      name: 'Oregon Heat Pump Purchase Program',
      url: 'https://www.oregon.gov/energy/Incentives/Pages/default.aspx',
      summary:
        'An Oregon Department of Energy program offering $2,000 heat pump incentives to homeowners, rental property owners, and builders. Check the page for which incentives are still available.[^7]',
    },
    {
      name: 'Home Energy Rebates (HOMES and HEAR)',
      url: 'https://www.oregon.gov/energy/incentives/Pages/home-energy-rebates.aspx',
      summary:
        'Federally funded rebates for efficiency upgrades and electric appliances, aimed at low- and moderate-income households. **As of October 2026, no rebates were available**; the state needs U.S. Department of Energy approval to launch and had not set an application date.[^8]',
    },
  ],
  sources: [
    { title: 'Consumer Information Center', publisher: 'Oregon Public Utility Commission', url: 'https://www.oregon.gov/puc/Pages/Consumer-Information-Center.aspx', accessed: '2026-10-15' },
    { title: 'Energy: Who We Regulate', publisher: 'Oregon Public Utility Commission', url: 'https://www.oregon.gov/puc/utilities/Pages/Energy-Who-We-Regulate.aspx', accessed: '2026-10-15' },
    { title: 'Direct Access', publisher: 'Oregon Public Utility Commission', url: 'https://www.oregon.gov/puc/utilities/Pages/Direct-Access.aspx', accessed: '2026-10-15' },
    { title: 'ORS Chapter 757 (sections 757.601 and 757.603)', publisher: 'Oregon State Legislature', url: 'https://www.oregonlegislature.gov/bills_laws/ors/ors757.html', accessed: '2026-10-15' },
    { title: 'Oregon Energy Assistance Programs', publisher: 'Oregon Housing and Community Services', url: 'https://www.oregon.gov/ohcs/energy-weatherization/Pages/utility-bill-payment-assistance.aspx', accessed: '2026-10-15' },
    { title: 'Consumer Protection', publisher: 'Oregon Department of Justice', url: 'https://www.doj.state.or.us/consumer-protection/', accessed: '2026-10-15' },
    { title: 'ODOE Energy Incentives and Grants', publisher: 'Oregon Department of Energy', url: 'https://www.oregon.gov/energy/Incentives/Pages/default.aspx', accessed: '2026-10-15' },
    { title: 'Home Energy Rebate Programs', publisher: 'Oregon Department of Energy', url: 'https://www.oregon.gov/energy/incentives/Pages/home-energy-rebates.aspx', accessed: '2026-10-15' },
  ],
}
