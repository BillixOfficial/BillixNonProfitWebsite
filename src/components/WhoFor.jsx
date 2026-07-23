import { motion } from 'framer-motion'
import { fadeUp, stagger, inView } from '../lib/motion'
import { who } from '../data/content'

export default function WhoFor() {
  return (
    <section id="who" className="bg-[#eaf4f1] py-28">
      <motion.div {...inView} variants={stagger} className="container-x">
        <motion.span variants={fadeUp} className="eyebrow text-teal">
          {who.eyebrow}
        </motion.span>
        <motion.h2 variants={fadeUp} className="mt-4 max-w-2xl font-bold tracking-[-0.035em] text-tealDeep text-[clamp(2rem,4.2vw,3rem)] leading-[1.08]">
          {who.title}
        </motion.h2>
        <motion.p variants={fadeUp} className="mt-5 max-w-2xl text-[1.1rem] text-muted">
          {who.intro}
        </motion.p>

        <motion.div variants={stagger} className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {who.cards.map((c) => (
            <motion.div
              key={c.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="rounded-xl2 border border-line bg-white p-7 shadow-xs"
            >
              <span className="font-mono text-[0.72rem] text-teal">{c.tag}</span>
              <h4 className="mt-3 text-[1.18rem] font-bold tracking-[-0.02em] text-tealDeep">{c.title}</h4>
              <p className="mt-2 text-[0.93rem] text-muted">{c.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
