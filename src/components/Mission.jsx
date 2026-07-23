import { motion } from 'framer-motion'
import { fadeUp, stagger, inView } from '../lib/motion'
import { mission } from '../data/content'

export default function Mission() {
  return (
    <section className="relative overflow-hidden bg-tealDark py-24 text-white md:py-28">
      {/* warm glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_85%_at_50%_0%,rgba(227,166,60,0.20),transparent_62%)]" />
      <motion.div {...inView} variants={stagger} className="container-x relative text-center">
        <motion.p variants={fadeUp} className="eyebrow text-goldSoft">{mission.kicker}</motion.p>
        <motion.h2 variants={fadeUp} className="mx-auto mt-5 max-w-3xl font-extrabold tracking-[-0.03em] text-[clamp(2.4rem,6vw,4rem)] leading-[1.0]">
          {mission.headline}
        </motion.h2>
        <motion.p variants={fadeUp} className="mx-auto mt-6 max-w-2xl text-[1.18rem] leading-relaxed text-white/80">
          {mission.body}
        </motion.p>
      </motion.div>
    </section>
  )
}
