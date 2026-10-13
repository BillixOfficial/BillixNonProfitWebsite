import type { BillCategory } from '../types'
import { electricity } from './electricity'
import { heatingCooling } from './heating-cooling'
import { waterSewer } from './water-sewer'
import { internetPhone } from './internet-phone'
import { housing } from './housing'
import { insurance } from './insurance'
import { transportation } from './transportation'
import { homeServices } from './home-services'
import { bankingDebt } from './banking-debt'
import { healthcareFamily } from './healthcare-family'
import { subscriptions } from './subscriptions'
import { governmentFees } from './government-fees'

/** All 12 category guides, in navigation order (utilities first). */
export const categories: BillCategory[] = [
  electricity,
  heatingCooling,
  waterSewer,
  internetPhone,
  housing,
  insurance,
  transportation,
  homeServices,
  bankingDebt,
  healthcareFamily,
  subscriptions,
  governmentFees,
]
