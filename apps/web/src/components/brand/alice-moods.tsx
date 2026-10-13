'use client'

import { useState } from 'react'
import { clsx } from 'clsx'
import { AliceFace, aliceMoods, type AliceMood } from './alice'

const labels: Record<AliceMood, string> = {
  hello: 'Saying hi',
  explaining: 'Explaining a charge',
  thinking: 'Working it out',
  magnifier: 'Reading the fine print',
  calculator: 'Running the numbers',
  'reading-bill': 'Reading your bill',
  laughing: 'Laughing it off',
  surprised: 'Spotting a surprise fee',
  confused: 'Confused by a line item',
  'thumbs-up': 'Nailed it',
  wink: 'Sharing a tip',
  idea: 'Got an idea',
  determined: 'Ready to fix it',
  relieved: 'Bill paid',
  mic: 'Recording a video',
  shopping: 'Shopping smart',
  mug: 'Monday-morning bills',
  book: 'Studying up',
  worried: 'Seeing a high bill',
}

/** Pick an expression to see Alice up close. */
export function AliceMoods() {
  const [mood, setMood] = useState<AliceMood>('explaining')
  return (
    <div className="grid items-center gap-8 lg:grid-cols-[auto_1fr]">
      <div className="mx-auto text-center">
        <AliceFace key={mood} mood={mood} size={320} className="animate-[pop_.35s_cubic-bezier(.2,.9,.3,1.3)]" />
        <p className="mt-3 font-display text-xl font-bold text-teal-deep" aria-live="polite">{labels[mood]}</p>
      </div>
      <div role="radiogroup" aria-label="Alice's expressions" className="grid grid-cols-4 gap-2 sm:grid-cols-5 lg:grid-cols-5">
        {aliceMoods.map((m) => (
          <button
            key={m}
            type="button"
            role="radio"
            aria-checked={mood === m}
            aria-label={labels[m]}
            title={labels[m]}
            onClick={() => setMood(m)}
            onMouseEnter={() => setMood(m)}
            className={clsx('grid place-items-center rounded-2xl p-1.5 transition', mood === m ? 'bg-gold-soft ring-2 ring-gold' : 'bg-paper ring-1 ring-line hover:ring-teal/40')}
          >
            <AliceFace mood={m} size={74} backdrop={false} alt="" />
          </button>
        ))}
      </div>
    </div>
  )
}
