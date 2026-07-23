import { motion } from 'framer-motion'
import { fadeUp, stagger, inView } from '../lib/motion'
import { principles } from '../data/content'

const ICONS = [
  <path key="a" d="M12 2v20M6 6h9a3 3 0 010 6H9a3 3 0 000 6h9" />,
  <>
    <path key="b1" d="M4 5h16v14H4z" />
    <path key="b2" d="M4 9h16" />
  </>,
  <path key="c" d="M20 6L9 17l-5-5" />,
]

export default function Principles() {
  return (
    <section className="bg-mist py-28">
      <motion.div {...inView} variants={stagger} className="container-x">
        <motion.span variants={fadeUp} className="eyebrow text-teal">
          {principles.eyebrow}
        </motion.span>
        <motion.h2 variants={fadeUp} className="mt-4 max-w-2xl font-bold tracking-[-0.035em] text-tealDeep text-[clamp(2rem,4.2vw,3rem)] leading-[1.08]">
          {principles.title}
        </motion.h2>

        <motion.div variants={stagger} className="mt-14 grid gap-5 md:grid-cols-3">
          {principles.cards.map((c, i) => (
            <motion.div
              key={c.title}
              variants={fadeUp}
              className="rounded-xl2 border border-line bg-white p-8 shadow-xs"
            >
              <span className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-mist text-teal">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  {ICONS[i]}
                </svg>
              </span>
              <h4 className="text-[1.24rem] font-bold tracking-[-0.02em] text-tealDeep">{c.title}</h4>
              <p className="mt-2 text-[0.96rem] text-muted">{c.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
