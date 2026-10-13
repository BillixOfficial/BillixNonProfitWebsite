'use client'

import { useEffect, useRef, type ReactNode } from 'react'

/** Fades children in when they scroll into view. Content is visible without JS. */
export function Reveal({ children, className, delay = 0, as: As = 'div' }: { children: ReactNode; className?: string; delay?: number; as?: 'div' | 'section' | 'li' }) {
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.setAttribute('data-shown', '')
          io.disconnect()
        }
      },
      { rootMargin: '0px 0px -8% 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    // @ts-expect-error polymorphic ref
    <As ref={ref} data-reveal="" className={className} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </As>
  )
}
