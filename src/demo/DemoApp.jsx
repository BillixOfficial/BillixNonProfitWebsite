import { useState } from 'react'
import ApplyFlow from './apply/ApplyFlow'

// Tiny inline icons (kept local so the demo stays self-contained).
const Icon = ({ d, size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {d}
  </svg>
)
const PhoneIcon = (p) => <Icon {...p} d={<><rect x="6" y="2" width="12" height="20" rx="2.5" /><path d="M11 18h2" /></>} />
const UsersIcon = (p) => <Icon {...p} d={<><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13A4 4 0 0 1 16 11" /></>} />
const ArrowRight = (p) => <Icon {...p} d={<path d="M5 12h14M13 6l6 6-6 6" />} />
const ArrowLeft = (p) => <Icon {...p} d={<path d="M19 12H5M11 6l-6 6 6 6" />} />
const Lock = (p) => <Icon {...p} d={<><rect x="4" y="10" width="16" height="11" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></>} />

const OPTIONS = [
  {
    key: 'applicant',
    Icon: PhoneIcon,
    eyebrow: 'For families',
    title: 'Apply for assistance',
    body: 'Answer a few questions from your phone to see the help you qualify for.',
  },
  {
    key: 'caseworker',
    Icon: UsersIcon,
    eyebrow: 'For agency staff',
    title: 'Caseworker dashboard',
    body: 'Review applications and track every approval to a confirmed utility hold.',
  },
]

const initialView = () => {
  if (typeof window === 'undefined') return null
  const v = new URLSearchParams(window.location.search).get('view')
  return v === 'applicant' || v === 'caseworker' ? v : null
}

export default function DemoApp() {
  const [view, setView] = useState(initialView) // null | 'applicant' | 'caseworker'

  if (view === 'applicant') return <ApplyFlow onExit={() => setView(null)} />
  if (view) return <Placeholder option={OPTIONS.find((o) => o.key === view)} onBack={() => setView(null)} />

  return (
    <div className="min-h-[100dvh] bg-tealDeep text-white flex flex-col">
      <div className="mx-auto w-full max-w-md flex-1 flex flex-col px-6 py-8">
        {/* header */}
        <div className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-gold grid place-items-center text-tealDeep font-bold text-sm">B</span>
          <span className="font-semibold">Billix</span>
          <span className="ml-1.5 font-mono uppercase tracking-[0.1em] text-[0.6rem] bg-white/10 rounded-full px-2 py-0.5 text-white/70">Demo</span>
        </div>

        {/* headline */}
        <div className="mt-12">
          <h1 className="text-[1.9rem] font-bold leading-[1.1] tracking-[-0.02em]">Take a look inside Billix.</h1>
          <p className="mt-3 text-white/70 text-[1.05rem] leading-relaxed">Two views, all sample data. Choose where to start.</p>
        </div>

        {/* options */}
        <div className="mt-8 space-y-4">
          {OPTIONS.map((o) => (
            <button
              key={o.key}
              onClick={() => setView(o.key)}
              className="group w-full text-left rounded-[20px] bg-white/[0.06] hover:bg-white/[0.1] border border-white/10 p-5 transition
                focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-gold/40"
            >
              <span className="inline-grid place-items-center w-11 h-11 rounded-full bg-gold/15 text-gold mb-4">
                <o.Icon size={22} />
              </span>
              <span className="block font-mono uppercase tracking-[0.1em] text-[0.6rem] text-white/50">{o.eyebrow}</span>
              <span className="block text-lg font-semibold mt-1">{o.title}</span>
              <span className="block text-white/70 text-[0.95rem] leading-relaxed mt-1.5">{o.body}</span>
              <span className="mt-3 inline-flex items-center gap-1 text-gold font-medium text-sm">
                Open <ArrowRight size={16} />
              </span>
            </button>
          ))}
        </div>

        {/* footer note */}
        <div className="mt-auto pt-8 flex items-start gap-2 text-sm text-white/55">
          <Lock size={16} className="mt-0.5 shrink-0" />
          <span>Sample data only. Nothing here is submitted, stored, or sent anywhere.</span>
        </div>
      </div>
    </div>
  )
}

// Temporary stand-in until each flow is built out.
function Placeholder({ option, onBack }) {
  return (
    <div className="min-h-[100dvh] bg-mist text-ink flex flex-col">
      <div className="mx-auto w-full max-w-md flex-1 flex flex-col px-6 py-6">
        <button onClick={onBack} className="inline-flex items-center gap-1.5 text-teal font-medium text-sm w-fit">
          <ArrowLeft size={16} /> Back
        </button>
        <div className="flex-1 grid place-items-center text-center">
          <div>
            <span className="inline-grid place-items-center w-14 h-14 rounded-full bg-teal/10 text-teal mb-4">
              <option.Icon size={26} />
            </span>
            <h1 className="text-2xl font-bold">{option.title}</h1>
            <p className="mt-2 text-muted">This flow is next — we'll build it out from here.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
