import Image from 'next/image'
import Link from 'next/link'
import { clsx } from 'clsx'
import type { ReactNode } from 'react'
import type { AlicePose, CategorySlug } from '@/content/types'

/**
 * Alice is only ever shown in head-and-shoulders close-ups. The high-resolution set
 * lives in public/alice/hd (1600px tall, transparent, generated from the character kit
 * and reviewed for likeness). Each page uses a different look so she doesn't repeat.
 */
const looks = {
  hello: [1272, 1600],
  explaining: [1251, 1600],
  thinking: [1226, 1600],
  magnifier: [1311, 1600],
  calculator: [1241, 1600],
  'reading-bill': [1316, 1600],
  laughing: [1353, 1600],
  surprised: [1375, 1600],
  confused: [1346, 1600],
  'thumbs-up': [1256, 1600],
  wink: [1346, 1600],
  idea: [1400, 1600],
  determined: [1172, 1600],
  relieved: [1384, 1600],
  mic: [1382, 1600],
  shopping: [1138, 1600],
  mug: [1280, 1600],
  book: [1224, 1600],
  worried: [1349, 1600],
} as const satisfies Record<string, readonly [number, number]>

export type AliceMood = keyof typeof looks

/** Redrawn looks get a new file name so browsers and CDNs never serve the old art. */
const fileFor: Partial<Record<AliceMood, string>> = { hello: 'hello-v2', idea: 'idea-v2' }
const src = (mood: AliceMood) => `/alice/hd/${fileFor[mood] ?? mood}.webp`
export const aliceMoods = Object.keys(looks) as AliceMood[]

/** Content written with the older pose names maps onto the close-up set. */
const poseToMood: Record<AlicePose, AliceMood> = {
  presenting: 'explaining',
  'holding-bill': 'reading-bill',
  'holding-calculator': 'calculator',
  'holding-magnifier': 'magnifier',
  'holding-phone': 'wink',
  'point-up': 'idea',
  thinking: 'thinking',
  counting: 'calculator',
  celebrating: 'laughing',
  'showing-bill': 'reading-bill',
}
export const moodForPose = (pose: AlicePose) => poseToMood[pose]

/** One look per bill category, shared by the category pages and the homepage explorer. */
export const categoryMood: Record<CategorySlug, AliceMood> = {
  electricity: 'idea',
  'heating-cooling': 'mug',
  'water-sewer': 'worried',
  'internet-phone': 'thinking',
  housing: 'book',
  insurance: 'relieved',
  transportation: 'determined',
  'home-services': 'magnifier',
  'banking-debt': 'calculator',
  'healthcare-family': 'explaining',
  subscriptions: 'surprised',
  'government-fees': 'reading-bill',
}

export function AliceFace({
  mood = 'hello',
  size = 220,
  className,
  priority,
  alt = 'Alice, the Billix narrator',
  backdrop = true,
}: {
  mood?: AliceMood
  size?: number
  className?: string
  priority?: boolean
  alt?: string
  /** Draws the soft gold disc behind her, like the logo. */
  backdrop?: boolean
}) {
  const [w, h] = looks[mood]
  return (
    <span className={clsx('relative inline-grid shrink-0 place-items-end justify-center', className)} style={{ width: size, height: size }}>
      {backdrop && <span aria-hidden className="absolute inset-x-[4%] bottom-0 top-[8%] rounded-full bg-gold-soft" />}
      <Image
        src={src(mood)}
        alt={alt}
        width={w}
        height={h}
        quality={90}
        priority={priority}
        loading={priority ? undefined : 'eager'}
        className="relative h-full w-auto select-none object-contain object-bottom"
        sizes={`${Math.round((size * w) / h)}px`}
      />
    </span>
  )
}

/** Circular avatar cropped to her face. */
export function AliceAvatar({ size = 48, className, mood = 'hello' }: { size?: number; className?: string; mood?: AliceMood }) {
  const [w, h] = looks[mood]
  return (
    <span className={clsx('relative inline-block shrink-0 overflow-hidden rounded-full bg-gold-soft ring-2 ring-white', className)} style={{ width: size, height: size }}>
      <Image src={src(mood)} alt="Alice" width={w} height={h} quality={90} loading="eager" className="absolute left-1/2 top-[4%] h-[175%] w-auto max-w-none -translate-x-1/2 object-contain" sizes={`${size * 2}px`} />
    </span>
  )
}

/** A short aside "from Alice": avatar + speech bubble. */
export function AliceNote({ children, title = 'Alice says', className, mood = 'explaining' }: { children: ReactNode; title?: string; className?: string; mood?: AliceMood }) {
  return (
    <aside className={clsx('flex items-start gap-3', className)}>
      <AliceAvatar size={56} mood={mood} />
      <div className="relative rounded-2xl rounded-tl-md border border-line bg-paper px-4 py-3 shadow-[var(--shadow-card)]">
        <p className="text-xs font-bold text-teal-ink">{title}</p>
        <div className="mt-1 text-[0.98rem] leading-relaxed text-ink">{children}</div>
      </div>
    </aside>
  )
}

export function Logo({ className, tone = 'dark' }: { className?: string; tone?: 'dark' | 'light' }) {
  return (
    <Link href="/" className={clsx('group inline-flex items-center gap-2', className)} aria-label="Billix home">
      <Image src="/brand/billix-logo-transparent.png" alt="" width={44} height={44} className="size-10 transition-transform duration-300 group-hover:-rotate-6 sm:size-11" priority />
      <span className={clsx('font-display text-[1.65rem] font-extrabold tracking-[-0.04em]', tone === 'dark' ? 'text-teal-deep' : 'text-cream')}>Billix</span>
    </Link>
  )
}
