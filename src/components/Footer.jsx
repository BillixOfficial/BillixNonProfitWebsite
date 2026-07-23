import { footer } from '../data/content'

const logo = import.meta.env.BASE_URL + 'billix-logo-sm.png'
const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="rounded-b-[26px] bg-tealDark text-[#cfe0da]" style={{ paddingTop: '4.5rem', paddingBottom: '2.25rem' }}>
      <div className="container-x grid gap-11 md:grid-cols-[1.5fr_1fr]">
        <div className="flex flex-wrap items-center gap-3.5">
          <img src={logo} width="52" height="52" alt="Billix logo" className="rounded-xl ring-1 ring-white/15" style={{ width: '52px', height: '52px' }} />
          <span className="text-[1.5rem] font-bold tracking-tight text-white">Billix</span>
          <p className="mt-2.5 basis-full max-w-md text-[0.96rem] text-[#cfe0da]/65">{footer.blurb}</p>
        </div>
        <div className="flex flex-col items-start gap-3">
          {footer.links.map((l) => (
            <a key={l.label} href={l.href} className="text-[0.95rem] text-[#cfe0da]/85 transition-colors hover:text-white">
              {l.label}
            </a>
          ))}
        </div>
      </div>
      <div className="container-x border-t border-white/15 pt-6 text-[0.82rem] text-[#cfe0da]/50" style={{ marginTop: '3.25rem' }}>
        © {year} Billix. All rights reserved.
      </div>
    </footer>
  )
}
