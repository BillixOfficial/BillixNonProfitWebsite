import { useState } from 'react'

// Tiny inline icons (self-contained).
const Icon = ({ d, size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{d}</svg>
)
const ArrowRight = (p) => <Icon {...p} d={<path d="M5 12h14M13 6l6 6-6 6" />} />
const ArrowLeft = (p) => <Icon {...p} d={<path d="M19 12H5M11 6l-6 6 6 6" />} />

// The apply-for-assistance flow. Real component, mobile-first, no device mockup.
// Full-bleed on a phone; a centered column on wider screens.
export default function ApplyFlow({ onExit }) {
  const [step, setStep] = useState(0)

  return (
    <div className="min-h-[100dvh] w-full bg-mist">
      <div className="mx-auto w-full max-w-md min-h-[100dvh] flex flex-col">
        {step === 0 && <Welcome onStart={() => setStep(1)} onExit={onExit} />}
        {step > 0 && (
          <div className="flex-1 grid place-items-center text-center px-6">
            <div>
              <p className="text-muted">Next screen goes here — you guide what it is.</p>
              <button onClick={() => setStep(0)} className="mt-4 text-teal font-medium">← Back to start</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function Welcome({ onStart, onExit }) {
  return (
    <div className="flex-1 flex flex-col px-6 pt-6 pb-8">
      {/* top bar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-gold grid place-items-center text-tealDeep font-bold text-sm">B</span>
          <span className="font-semibold text-ink">Billix</span>
        </div>
        <button onClick={onExit} className="text-teal text-sm font-medium inline-flex items-center gap-1">
          <ArrowLeft size={15} /> Exit
        </button>
      </div>

      {/* body */}
      <div className="flex-1 flex flex-col justify-center">
        <span className="font-mono uppercase tracking-[0.12em] text-[0.72rem] text-teal">Ohio Summer Crisis Program</span>
        <h1 className="mt-3 text-[2rem] font-bold leading-[1.1] tracking-[-0.02em] text-ink">Get help with your energy bill.</h1>
        <p className="mt-3 text-muted text-[1.05rem] leading-relaxed">Answer a few questions to see the help you qualify for. About 9 minutes — save and come back anytime.</p>
      </div>

      {/* CTA */}
      <button
        onClick={onStart}
        className="w-full h-14 rounded-[14px] bg-teal text-white text-lg font-semibold inline-flex items-center justify-center gap-2
          shadow-card active:scale-[.99] transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-teal/30"
      >
        Start <ArrowRight size={20} />
      </button>
    </div>
  )
}
