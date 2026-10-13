'use client'

import { useState } from 'react'
import Link from 'next/link'
import { clsx } from 'clsx'
import { RotateCcw } from 'lucide-react'
import { AliceFace, type AliceMood } from '@/components/brand/alice'

type Half = 'supply' | 'delivery'

// General rules for U.S. bills that split supply from delivery. Utilities name lines differently.
const questions: { charge: string; answer: Half; why: string }[] = [
  { charge: 'Customer charge', answer: 'delivery', why: 'It covers the meter, billing and keeping you connected, all run by your utility.' },
  { charge: 'Generation charge', answer: 'supply', why: '“Generation” is the electricity itself, which is the supply half.' },
  { charge: 'Distribution charge', answer: 'delivery', why: 'Distribution is the local poles and wires that bring power to your home.' },
  { charge: 'Transmission charge', answer: 'delivery', why: 'Transmission is the high-voltage network between power plants and your area.' },
  { charge: 'Price to compare', answer: 'supply', why: 'In choice states, it’s the utility’s supply price you can compare offers against.' },
]

export function BillQuiz() {
  const [step, setStep] = useState(0)
  const [picked, setPicked] = useState<Half | null>(null)
  const [score, setScore] = useState(0)
  const done = step >= questions.length
  const q = questions[Math.min(step, questions.length - 1)]
  const right = picked !== null && picked === q.answer

  const mood: AliceMood = done ? (score >= 4 ? 'laughing' : 'relieved') : picked === null ? 'thinking' : right ? 'thumbs-up' : 'confused'

  const choose = (h: Half) => {
    if (picked) return
    setPicked(h)
    if (h === q.answer) setScore((s) => s + 1)
  }
  const next = () => {
    setPicked(null)
    setStep((s) => s + 1)
  }
  const reset = () => {
    setStep(0)
    setPicked(null)
    setScore(0)
  }

  return (
    <div className="relative overflow-hidden rounded-[var(--radius-panel)] bg-teal-deep p-6 text-cream sm:p-10">
      <div className="grid items-center gap-8 md:grid-cols-[auto_1fr]">
        <AliceFace key={mood} mood={mood} size={170} className="mx-auto animate-[pop_.35s_cubic-bezier(.2,.9,.3,1.3)]" />
        <div aria-live="polite">
          <p className="text-sm font-bold text-gold">Quick quiz · {done ? 'Done' : `${step + 1} of ${questions.length}`}</p>
          {done ? (
            <>
              <h3 className="mt-2 text-3xl font-extrabold">{score} out of {questions.length}</h3>
              <p className="mt-2 max-w-md text-cream/80">{score >= 4 ? 'You can read the two halves of an electric bill. Most people can’t.' : 'The split trips everyone up at first. The guide makes it click.'}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/learn/supply-vs-delivery-charges" className="rounded-full bg-gold px-5 py-2.5 font-semibold text-teal-night hover:bg-highlight">Read: supply vs. delivery</Link>
                <button type="button" onClick={reset} className="inline-flex items-center gap-2 rounded-full px-4 py-2.5 font-semibold text-cream ring-1 ring-cream/30 hover:bg-cream/10"><RotateCcw className="size-4" aria-hidden />Try again</button>
              </div>
            </>
          ) : (
            <>
              <h3 className="mt-2 text-[clamp(1.5rem,3vw,2.2rem)] font-extrabold leading-tight">Is the <span className="mark text-teal-night">{q.charge}</span> part of supply or delivery?</h3>
              <div className="mt-6 flex flex-wrap gap-3">
                {(['supply', 'delivery'] as const).map((h) => (
                  <button
                    key={h}
                    type="button"
                    onClick={() => choose(h)}
                    disabled={picked !== null}
                    className={clsx(
                      'min-w-36 rounded-2xl px-6 py-3.5 text-lg font-bold capitalize transition-all',
                      picked === null && 'bg-cream text-teal-deep hover:-translate-y-0.5 hover:bg-white',
                      picked !== null && h === q.answer && 'bg-cash text-white',
                      picked === h && h !== q.answer && 'bg-danger text-white',
                      picked !== null && picked !== h && h !== q.answer && 'bg-cream/20 text-cream/60',
                    )}
                  >
                    {h}
                  </button>
                ))}
              </div>
              {picked && (
                <div className="mt-5 flex flex-wrap items-center gap-4">
                  <p className="max-w-md text-cream/85"><span className="font-bold">{right ? 'Right.' : 'Not quite.'}</span> {q.why}</p>
                  <button type="button" onClick={next} className="rounded-full bg-gold px-5 py-2 font-semibold text-teal-night hover:bg-highlight">{step + 1 === questions.length ? 'See score' : 'Next'}</button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
