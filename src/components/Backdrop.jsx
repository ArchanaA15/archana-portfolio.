import { useMemo } from 'react'
import { motion } from 'framer-motion'
const corners = ['M0 150H60L130 80', 'M1440 150H1380L1310 80', 'M0 760H60L130 830', 'M1440 760H1380L1310 830']
export default function Backdrop() {
  const dust = useMemo(() => Array.from({ length: 70 }, (_, i) => ({ l: (i * 37.7) % 100, t: (i * 53.3) % 100, d: (i * 0.37) % 5, s: i % 6 === 0 ? 3 : 2 })), [])
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#0b0a1a]">
      <motion.div className="absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-violet-600/25 blur-3xl" animate={{ x: [0, -40, 0], y: [0, 30, 0] }} transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }} />
      <motion.div className="absolute -bottom-48 -left-40 h-[36rem] w-[36rem] rounded-full bg-cyan-500/20 blur-3xl" animate={{ x: [0, 40, 0], y: [0, -30, 0] }} transition={{ duration: 36, repeat: Infinity, ease: 'easeInOut' }} />
      {dust.map((p, i) => <span key={i} className="dust" style={{ left: `${p.l}%`, top: `${p.t}%`, width: p.s, height: p.s, animationDelay: `${p.d}s` }} />)}
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" fill="none">
        {corners.map((d, i) => <motion.path key={i} d={d} stroke="#475569" strokeWidth="1.2" vectorEffect="non-scaling-stroke" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2.2, delay: 0.4, ease: 'easeOut' }} />)}
      </svg>
      {[-14, 0, 14].map((o) => <div key={o} className="absolute bottom-0 h-1/3 w-px bg-gradient-to-t from-slate-600 to-transparent" style={{ left: `calc(50% + ${o}px)` }} />)}
      <motion.div className="absolute left-0 top-[62%] h-[2px] w-44 rounded-full bg-gradient-to-r from-transparent via-violet-400 to-violet-200"
        style={{ rotate: -18 }} animate={{ x: ['-15vw', '110vw'], y: [0, -140], opacity: [0, 1, 1, 0] }} transition={{ duration: 2.4, repeat: Infinity, repeatDelay: 11, ease: 'easeIn' }} />
    </div>
  )
}
