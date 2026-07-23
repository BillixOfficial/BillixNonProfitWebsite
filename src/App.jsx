import { motion } from 'framer-motion'
import { fadeUp, stagger, inView } from './lib/motion'
import { productIntro, features } from './data/content'
import Nav from './components/Nav'
import Hero from './components/Hero'
import ServedStrip from './components/ServedStrip'
import Feature from './components/Feature'
import Mission from './components/Mission'
import WhoFor from './components/WhoFor'
import Process from './components/Process'
import Principles from './components/Principles'
import Founder from './components/Founder'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="page-frame">
      <Nav />
      <main>
        <Hero />
        <ServedStrip />

        {/* Product / features */}
        <section id="what" className="bg-white py-28">
          <motion.div {...inView} variants={stagger} className="container-x text-center">
            <motion.span variants={fadeUp} className="eyebrow text-teal">
              {productIntro.eyebrow}
            </motion.span>
            <motion.h2 variants={fadeUp} className="mx-auto mt-4 max-w-2xl font-bold tracking-[-0.035em] text-tealDeep text-[clamp(2rem,4.2vw,3rem)] leading-[1.08]">
              {productIntro.title}
            </motion.h2>
            <motion.p variants={fadeUp} className="mx-auto mt-5 max-w-xl text-[1.1rem] text-muted">
              {productIntro.intro}
            </motion.p>
          </motion.div>

          <div className="container-x mt-20">
            {features.map((f) => (
              <Feature key={f.num} {...f} />
            ))}
          </div>
        </section>

        <Mission />
        <WhoFor />
        <Process />
        <Principles />
        <Founder />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
