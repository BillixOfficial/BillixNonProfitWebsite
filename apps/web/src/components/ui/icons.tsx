import {
  Building2,
  Car,
  Droplets,
  Flame,
  HeartPulse,
  House,
  Landmark,
  Repeat,
  ShieldCheck,
  Wifi,
  Wrench,
  Zap,
  type LucideIcon,
} from 'lucide-react'
import { siFacebook, siInstagram, siPinterest, siThreads, siTiktok, siX, siYoutube } from 'simple-icons'
import type { CategorySlug } from '@/content/types'
import type { SocialPlatform } from '@/config/site'

export const categoryIcons: Record<CategorySlug, LucideIcon> = {
  electricity: Zap,
  'heating-cooling': Flame,
  'water-sewer': Droplets,
  'internet-phone': Wifi,
  housing: House,
  insurance: ShieldCheck,
  transportation: Car,
  'home-services': Wrench,
  'banking-debt': Landmark,
  'healthcare-family': HeartPulse,
  subscriptions: Repeat,
  'government-fees': Building2,
}

/** Rotating accent per category so the grid feels lively but stays on-palette. */
export const categoryTone: Record<CategorySlug, string> = {
  electricity: 'bg-gold-soft text-teal-deep',
  'heating-cooling': 'bg-[#f3d6c4] text-teal-deep',
  'water-sewer': 'bg-teal-soft text-teal-deep',
  'internet-phone': 'bg-plum-soft text-teal-deep',
  housing: 'bg-cash-soft text-teal-deep',
  insurance: 'bg-teal-soft text-teal-deep',
  transportation: 'bg-gold-soft text-teal-deep',
  'home-services': 'bg-cash-soft text-teal-deep',
  'banking-debt': 'bg-plum-soft text-teal-deep',
  'healthcare-family': 'bg-[#f3d6c4] text-teal-deep',
  subscriptions: 'bg-plum-soft text-teal-deep',
  'government-fees': 'bg-sand text-teal-deep',
}

export function CategoryIcon({ slug, className = 'size-5' }: { slug: CategorySlug; className?: string }) {
  const Icon = categoryIcons[slug]
  return <Icon className={className} aria-hidden strokeWidth={1.9} />
}

const brandPaths: Partial<Record<SocialPlatform, string>> = {
  youtube: siYoutube.path,
  tiktok: siTiktok.path,
  instagram: siInstagram.path,
  facebook: siFacebook.path,
  pinterest: siPinterest.path,
  x: siX.path,
  threads: siThreads.path,
  // LinkedIn's "in" mark (Simple Icons no longer ships LinkedIn).
  linkedin: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.119 20.452H3.555V9h3.564v11.452z',
}

export function SocialIcon({ platform, className = 'size-5' }: { platform: SocialPlatform; className?: string }) {
  const d = brandPaths[platform]
  if (!d) return null
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
      <path d={d} />
    </svg>
  )
}
