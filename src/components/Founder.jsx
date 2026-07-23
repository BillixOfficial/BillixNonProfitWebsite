import { motion } from 'framer-motion'
import { fadeUp, stagger, inView } from '../lib/motion'
import { founder } from '../data/content'

export default function Founder() {
  return (
    <section className="bg-mist py-28">
      <div className="container-x grid items-center gap-12 md:grid-cols-[0.72fr_1.28fr]">
        {/* portrait placeholder — swap for a real photo */}
        <motion.div {...inView} variants={fadeUp} className="mx-auto w-full max-w-[280px]">
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl3 border border-line shadow-card">
            <div className="grid h-full w-full place-items-center bg-gradient-to-br from-[#dff0ea] via-[#bfe0d6] to-teal">
              <svg viewBox="0 0 64 64" width="66" height="66" fill="none" stroke="white" strokeOpacity="0.85" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="32" cy="24" r="10" />
                <path d="M14 51c2-11 10-16 18-16s16 5 18 16" />
              </svg>
            </div>
            <span className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-white/90 px-3 py-1 text-[0.66rem] font-bold uppercase tracking-wide text-tealDeep">
              {founder.note}
            </span>
          </div>
        </motion.div>

        <motion.div {...inView} variants={stagger}>
          <motion.span variants={fadeUp} className="eyebrow text-teal">{founder.eyebrow}</motion.span>
          {founder.paragraphs.map((p, i) => (
            <motion.p
              key={i}
              variants={fadeUp}
              className={`mt-5 max-w-2xl leading-relaxed ${
                i === 0
                  ? 'text-[clamp(1.3rem,2.4vw,1.7rem)] font-semibold tracking-[-0.01em] text-tealDeep'
                  : 'text-[1.08rem] text-muted'
              }`}
            >
              {p}
            </motion.p>
          ))}
          <motion.p variants={fadeUp} className="mt-7 text-[1.05rem] font-semibold text-tealDeep">
            {founder.signature}
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
