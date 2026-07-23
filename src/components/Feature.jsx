import { motion } from 'framer-motion'
import { fadeUp, inView } from '../lib/motion'
import PhoneMock from './mocks/PhoneMock'
import RowsMock from './mocks/RowsMock'
import TimelineMock from './mocks/TimelineMock'

const MOCKS = { phone: PhoneMock, rows: RowsMock, timeline: TimelineMock }

export default function Feature({ num, title, body, mock, flip }) {
  const Mock = MOCKS[mock]
  return (
    <motion.div
      {...inView}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
      className="grid items-center gap-14 md:grid-cols-2 [&:not(:first-child)]:mt-28"
    >
      <motion.div variants={fadeUp} className={flip ? 'md:order-2' : ''}>
        <Mock />
      </motion.div>
      <motion.div variants={fadeUp} className={flip ? 'md:order-1' : ''}>
        <span className="font-mono text-[0.78rem] text-teal">{num}</span>
        <h3 className="mt-3 font-bold tracking-[-0.03em] text-tealDeep text-[clamp(1.5rem,2.8vw,2.1rem)]">
          {title}
        </h3>
        <p className="mt-4 text-[1.06rem] leading-relaxed text-muted">{body}</p>
      </motion.div>
    </motion.div>
  )
}
