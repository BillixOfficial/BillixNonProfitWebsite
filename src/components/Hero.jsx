import { motion } from 'framer-motion'
import { hero } from '../data/content'
import PaperCards from './PaperCards'

const logo = import.meta.env.BASE_URL + 'billix-logo-hero.png'

export default function Hero() {
  return (
    <section id="top" className="hero-gradient relative -mt-[70px] overflow-hidden rounded-t-[26px] text-white">
      <div className="hero-specks pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_0%,transparent_58%,rgba(16,48,45,0.22)_100%)]" />

      <div className="container-x relative pt-32 pb-0 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mx-auto max-w-3xl"
        >
          {/* Prominent app-icon logo */}
          <motion.img
            src={logo}
            width="96"
            height="96"
            alt="Billix logo"
            initial={{ opacity: 0, scale: 0.85, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mb-6 h-24 w-24 rounded-[26px] shadow-float ring-1 ring-white/30"
          />

          <div className="mb-7 inline-flex items-center rounded-full bg-white/15 px-4 py-2 backdrop-blur ring-1 ring-white/25">
            <span className="eyebrow text-white">{hero.eyebrow}</span>
          </div>

          <h1 className="font-extrabold leading-[1.0] tracking-[-0.05em] text-[clamp(2.8rem,7vw,5rem)] [text-shadow:0_2px_30px_rgba(16,48,45,0.28)]">
            {hero.titleTop}
            <br />
            {hero.titleAccent}
          </h1>

          <div className="mx-auto mt-7 max-w-lg space-y-1 text-[1.16rem] leading-snug text-white/90">
            {hero.ledeLines.map((line, i) => (
              <p key={i}>
                {line.map((seg, j) =>
                  seg[1] ? (
                    <strong key={j} className="font-semibold text-white">
                      {seg[0]}
                    </strong>
                  ) : (
                    <span key={j}>{seg[0]}</span>
                  ),
                )}
              </p>
            ))}
          </div>

          <div className="mt-9">
            <a
              href={hero.primary.href}
              className="inline-flex rounded-full bg-tealDark px-8 py-4 font-semibold text-white shadow-float ring-1 ring-white/10 transition-transform hover:-translate-y-0.5"
            >
              {hero.primary.label}
            </a>
          </div>

          <p className="mt-5 font-mono text-[0.76rem] text-white/75">{hero.reassure}</p>
        </motion.div>

        <PaperCards />
      </div>
    </section>
  )
}
