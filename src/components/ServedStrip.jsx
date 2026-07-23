import { motion } from 'framer-motion'
import { fadeUp, stagger, inView } from '../lib/motion'
import { served } from '../data/content'

export default function ServedStrip() {
  return (
    <section className="bg-mist py-16">
      <motion.div {...inView} variants={stagger} className="container-x text-center">
        <motion.p variants={fadeUp} className="mb-6 font-mono text-[0.72rem] uppercase tracking-[0.1em] text-muted">
          {served.label}
        </motion.p>
        <motion.div variants={stagger} className="flex flex-wrap justify-center gap-3">
          {served.items.map((item) => (
            <motion.span
              key={item}
              variants={fadeUp}
              className="rounded-full border border-line bg-white px-5 py-2.5 text-[0.92rem] font-semibold text-tealDeep shadow-xs"
            >
              {item}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
