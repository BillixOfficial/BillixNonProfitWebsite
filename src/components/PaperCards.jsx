import { motion } from 'framer-motion'

/**
 * Hero visual: a fanned deck of paper rising from the bottom center, with a
 * Before / After pair in front — original Billix artwork.
 *   Before = a paper disconnection notice + incomplete scrawled application.
 *   After  = a clean Billix screen: verified docs and a confirmed hold.
 * The hero clips the bottom, so the deck bleeds off-screen.
 */

const CARD_W = 244 // px; half is used to center each card on the axis

const blanks = [
  { c: -300, rot: -22, y: 76 },
  { c: -182, rot: -13, y: 34 },
  { c: 182, rot: 13, y: 34 },
  { c: 300, rot: 22, y: 76 },
]

export default function PaperCards() {
  return (
    <div className="relative mx-auto mt-12 h-[340px] max-w-3xl">
      <div className="absolute left-1/2 top-0 h-full w-full origin-top -translate-x-1/2 scale-[0.62] sm:scale-95 md:scale-[1.04]">
        {/* blank fanned cards */}
        {blanks.map((b, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: b.c - CARD_W / 2, y: b.y + 60, rotate: b.rot }}
            animate={{ opacity: 1, x: b.c - CARD_W / 2, y: b.y, rotate: b.rot }}
            transition={{ duration: 0.9, delay: 0.2 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
            style={{ width: CARD_W }}
            className="absolute left-1/2 top-0 h-[300px] rounded-2xl border border-line bg-white shadow-card"
          >
            <div className="space-y-2.5 p-5 opacity-60">
              <div className="h-2 w-1/2 rounded-full bg-[#e7ecea]" />
              <div className="h-2 w-full rounded-full bg-[#eef2f0]" />
              <div className="h-2 w-5/6 rounded-full bg-[#eef2f0]" />
              <div className="h-2 w-2/3 rounded-full bg-[#eef2f0]" />
            </div>
          </motion.div>
        ))}

        {/* BEFORE */}
        <motion.div
          initial={{ opacity: 0, x: -75 - CARD_W / 2, y: 70, rotate: -5 }}
          animate={{ opacity: 1, x: -75 - CARD_W / 2, y: 10, rotate: -5 }}
          transition={{ duration: 0.9, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
          style={{ width: CARD_W }}
          className="absolute left-1/2 top-0 z-10 h-[320px] rounded-2xl border border-line bg-[#fbfaf6] p-4 text-left shadow-card"
        >
          <span className="eyebrow text-[0.62rem] text-[#b06a4a]">Before · on paper</span>
          <div className="mt-2.5 rounded-lg bg-[#fff4ec] px-2.5 py-1.5 text-[0.72rem] font-semibold text-[#b5651d] ring-1 ring-[#f0d8c4]">
            ⚠ 12-day shutoff notice
          </div>
          <div className="mt-3.5 space-y-2">
            <div className="h-2 w-3/4 rounded-full bg-[#e7e2d6]" />
            <div className="h-2 w-full rounded-full bg-[#e7e2d6]" />
            <div className="h-2 w-5/6 rounded-full bg-[#e7e2d6]" />
          </div>
          <div className="mt-3 flex items-center gap-1.5 text-[0.72rem] text-[#9a8f7a]">
            <span className="grid h-4 w-4 place-items-center rounded-full bg-[#f0e7d5] text-[10px] text-[#b5651d]">?</span>
            Missing pay stub · illegible bill
          </div>
          <div className="mt-2 text-[0.74rem] italic text-[#a99c82] [font-family:Georgia,serif]">
            “come back with your other document…”
          </div>
        </motion.div>

        {/* AFTER */}
        <motion.div
          initial={{ opacity: 0, x: 80 - CARD_W / 2, y: 64, rotate: 4 }}
          animate={{ opacity: 1, x: 80 - CARD_W / 2, y: 0, rotate: 4 }}
          transition={{ duration: 0.9, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
          style={{ width: CARD_W }}
          className="absolute left-1/2 top-0 z-20 h-[330px] rounded-2xl border border-line bg-white p-4 text-left shadow-float"
        >
          <span className="eyebrow text-[0.62rem] text-teal">After · in Billix</span>
          <div className="mt-2.5 flex flex-wrap gap-1.5">
            {['ID', 'Utility bill', 'Income'].map((c) => (
              <span key={c} className="inline-flex items-center gap-1 rounded-full bg-[#e9f6ee] px-2 py-0.5 text-[0.68rem] font-semibold text-cash">
                ✓ {c}
              </span>
            ))}
          </div>
          <div className="mt-2.5 rounded-lg bg-mist px-2.5 py-1.5 text-[0.72rem] font-semibold text-tealDeep ring-1 ring-line">
            200% FPL · eligible
          </div>
          <div className="mt-3.5 space-y-2.5">
            <Row done label="Application complete" sub="From phone · 9 min" />
            <Row done label="Reviewed & approved" sub="Income computed" />
            <Row now label="Pledge sent to utility" sub="Timestamped" />
          </div>
          <div className="mt-3.5 flex items-center justify-between rounded-xl bg-teal px-3 py-2 text-white">
            <span className="text-[0.8rem] font-semibold">Hold confirmed</span>
            <span className="font-mono text-[0.62rem] text-white/80">7 days before</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

function Row({ label, sub, done, now }) {
  return (
    <div className="flex items-start gap-2">
      <span
        className={`mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full text-[10px] font-bold ${
          done ? 'bg-[#e9f6ee] text-cash' : now ? 'bg-teal text-white ring-2 ring-teal/20' : 'bg-[#eef1f0] text-[#9aa7a2]'
        }`}
      >
        {done ? '✓' : now ? '→' : '•'}
      </span>
      <div>
        <div className="text-[0.78rem] font-semibold leading-tight text-tealDeep">{label}</div>
        <div className="text-[0.66rem] text-muted">{sub}</div>
      </div>
    </div>
  )
}
