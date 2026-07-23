import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { nav } from '../data/content'

const logo = import.meta.env.BASE_URL + 'billix-logo-sm.png'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'bg-white/85 backdrop-blur-xl border-b border-line'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="container-x relative flex items-center justify-between h-[76px]">
        <a href="#top" className="flex items-center gap-3" aria-label="Billix home">
          <img
            src={logo}
            width="44"
            height="44"
            alt="Billix logo"
            className="w-11 h-11 rounded-xl shadow-card ring-1 ring-black/5"
          />
          <span
            className={`font-bold text-[1.45rem] tracking-tight transition-colors ${
              scrolled ? 'text-tealDeep' : 'text-white [text-shadow:0_1px_12px_rgba(16,48,45,0.35)]'
            }`}
          >
            Billix
          </span>
        </a>

        <nav
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex"
          aria-label="Primary"
        >
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className={`text-[0.94rem] font-semibold transition-colors ${
                scrolled
                  ? 'text-ink/80 hover:text-teal'
                  : 'text-white hover:text-white/80 [text-shadow:0_1px_12px_rgba(16,48,45,0.4)]'
              }`}
            >
              {n.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className={`rounded-full px-5 py-2.5 text-[0.9rem] font-semibold shadow-card transition-all hover:-translate-y-0.5 ${
            scrolled ? 'bg-teal text-white hover:bg-tealDeep' : 'bg-white text-tealDeep hover:bg-white/90'
          }`}
        >
          Contact us
        </a>
      </div>
    </motion.header>
  )
}
