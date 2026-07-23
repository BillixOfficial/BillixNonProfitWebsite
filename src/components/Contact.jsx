import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeUp, stagger, inView } from '../lib/motion'
import { contact } from '../data/content'

const EMAIL = 'info@billixapp.com'
const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function Contact() {
  const [values, setValues] = useState({
    name: '', org: '', email: '', role: '', orgType: '', state: '', message: '',
  })
  const [touched, setTouched] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | done

  const set = (k) => (e) => setValues((v) => ({ ...v, [k]: e.target.value }))
  const blur = (k) => () => setTouched((t) => ({ ...t, [k]: true }))

  const valid = {
    name: values.name.trim().length > 1,
    email: emailRe.test(values.email.trim()),
    message: values.message.trim().length > 4,
  }
  const formValid = valid.name && valid.email && valid.message

  const onSubmit = (e) => {
    e.preventDefault()
    setTouched({ name: true, email: true, message: true })
    if (!formValid || status !== 'idle') return

    setStatus('sending')
    const g = (k) => (values[k] || '').trim()
    const subject = `Billix inquiry from ${g('org') || g('name') || 'a visitor'}`
    const body = [
      `Name: ${g('name')}`, `Organization: ${g('org')}`, `Role: ${g('role')}`,
      `Organization type: ${g('orgType')}`, `State: ${g('state')}`, `Email: ${g('email')}`,
      '', 'Message:', g('message'),
    ].join('\n')
    const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setTimeout(() => {
      window.location.href = mailto
      setStatus('done')
    }, 750)
  }

  return (
    <section id="contact" className="bg-[#eaf4f1] py-28">
      <div className="container-x grid items-start gap-14 md:grid-cols-[0.9fr_1.1fr]">
        <motion.div {...inView} variants={stagger}>
          <motion.span variants={fadeUp} className="eyebrow text-teal">{contact.eyebrow}</motion.span>
          <motion.h2 variants={fadeUp} className="mt-4 font-bold tracking-[-0.035em] text-tealDeep text-[clamp(2rem,4.2vw,3rem)] leading-[1.08]">
            {contact.title}
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-5 text-[1.1rem] text-muted">{contact.intro}</motion.p>

          <motion.ul variants={stagger} className="mt-9 grid gap-5">
            {contact.details.map((d) => (
              <motion.li key={d.label} variants={fadeUp} className="flex flex-col gap-0.5">
                <span className="font-mono text-[0.68rem] uppercase tracking-[0.09em] text-teal">{d.label}</span>
                {d.href ? (
                  <a href={d.href} className="font-semibold text-tealDeep hover:text-teal">{d.value}</a>
                ) : (
                  <span className="text-tealDeep/90">{d.value}</span>
                )}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.form
          {...inView}
          variants={fadeUp}
          onSubmit={onSubmit}
          noValidate
          className="rounded-xl3 border border-line bg-white p-9 shadow-float"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Full name" name="name" placeholder="Jordan Rivera" value={values.name} onChange={set('name')} onBlur={blur('name')}
              ok={valid.name} error={touched.name && !valid.name ? 'Please enter your name' : ''} />
            <Field label="Organization" name="org" placeholder="Community Action of…" value={values.org} onChange={set('org')} onBlur={blur('org')}
              ok={values.org.trim().length > 1} />
            <Field label="Work email" name="email" type="email" placeholder="you@agency.org" value={values.email} onChange={set('email')} onBlur={blur('email')}
              ok={valid.email} error={touched.email && !valid.email ? 'Enter a valid email address' : ''} />
            <Field label="Your role" name="role" placeholder="Energy Program Director" value={values.role} onChange={set('role')} onBlur={blur('role')}
              ok={values.role.trim().length > 1} />
            <div className="flex flex-col gap-1.5">
              <label htmlFor="orgType" className="text-[0.86rem] font-semibold text-tealDeep">You are a…</label>
              <select id="orgType" name="orgType" value={values.orgType} onChange={set('orgType')} className={inputCls('ok', values.orgType !== '')}>
                <option value="">Select one</option>
                {contact.orgTypes.map((o) => <option key={o}>{o}</option>)}
              </select>
            </div>
            <Field label="State" name="state" placeholder="New Jersey" value={values.state} onChange={set('state')} onBlur={blur('state')}
              ok={values.state.trim().length > 1} />
          </div>

          <div className="mt-4 flex flex-col gap-1.5">
            <div className="flex items-center justify-between">
              <label htmlFor="message" className="text-[0.86rem] font-semibold text-tealDeep">
                What's the biggest pain in your workflow right now?
              </label>
              <span className={`font-mono text-[0.68rem] transition-colors ${values.message.length > 0 ? 'text-teal' : 'text-muted/60'}`}>
                {values.message.length}
              </span>
            </div>
            <textarea
              id="message" name="message" rows="5" value={values.message} onChange={set('message')} onBlur={blur('message')}
              placeholder="Tell us about intake, document chasing, or getting a confirmed hold on the utility account…"
              className={`${inputCls(touched.message && !valid.message ? 'err' : 'ok', valid.message)} resize-y`}
            />
            <AnimatePresence>
              {touched.message && !valid.message && (
                <motion.span initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                  className="text-[0.78rem] font-medium text-[#c2603f]">
                  Please add a short note so we can help
                </motion.span>
              )}
            </AnimatePresence>
          </div>

          <motion.button
            type="submit"
            disabled={status !== 'idle'}
            whileHover={status === 'idle' ? { y: -2 } : {}}
            whileTap={status === 'idle' ? { scale: 0.98 } : {}}
            className={`mt-6 flex w-full items-center justify-center gap-2 rounded-full py-4 font-semibold shadow-card transition-colors ${
              status === 'done' ? 'bg-teal text-white' : 'bg-gold text-tealDark'
            }`}
          >
            <AnimatePresence mode="wait" initial={false}>
              {status === 'idle' && <motion.span key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>Send message</motion.span>}
              {status === 'sending' && (
                <motion.span key="sending" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                  <motion.span animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 0.7, ease: 'linear' }}
                    className="inline-block h-4 w-4 rounded-full border-2 border-tealDark/30 border-t-tealDark" />
                  Sending…
                </motion.span>
              )}
              {status === 'done' && (
                <motion.span key="done" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="flex items-center gap-2">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                  Email opened
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>

          <p className="mt-4 text-[0.84rem] leading-relaxed text-muted" role="status" aria-live="polite">
            {status === 'done' ? (
              <>Thanks! Your email client should be opening now. If it didn't, write us at{' '}
                <a href={`mailto:${EMAIL}`} className="font-semibold text-teal">{EMAIL}</a>.</>
            ) : (
              <>This opens your email client, pre-filled to <strong>{EMAIL}</strong>. Prefer to write us directly?{' '}
                <a href={`mailto:${EMAIL}`} className="font-semibold text-teal">{EMAIL}</a></>
            )}
          </p>
        </motion.form>
      </div>
    </section>
  )
}

function inputCls(state, filled) {
  const base =
    'w-full rounded-[14px] border-[1.5px] bg-mist px-4 py-3 text-[0.97rem] text-ink outline-none transition-all duration-200 placeholder:text-[#9aa7a2] focus:bg-white focus:ring-4'
  if (state === 'err') return `${base} border-[#e0a58e] focus:border-[#c2603f] focus:ring-[#c2603f]/15`
  return `${base} ${filled ? 'border-teal/50' : 'border-line'} focus:border-teal focus:ring-teal/15`
}

function Field({ label, name, type = 'text', placeholder, value, onChange, onBlur, ok, error }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-[0.86rem] font-semibold text-tealDeep">{label}</label>
      <div className="relative">
        <input
          id={name} name={name} type={type} placeholder={placeholder}
          value={value} onChange={onChange} onBlur={onBlur}
          className={`${inputCls(error ? 'err' : 'ok', ok)} pr-10`}
        />
        <AnimatePresence>
          {ok && (
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.5 }}
              className="absolute right-3 top-1/2 grid h-5 w-5 -translate-y-1/2 place-items-center rounded-full bg-[#e9f6ee] text-cash"
            >
              <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
            </motion.span>
          )}
        </AnimatePresence>
      </div>
      <AnimatePresence>
        {error && (
          <motion.span initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
            className="text-[0.78rem] font-medium text-[#c2603f]">
            {error}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  )
}
