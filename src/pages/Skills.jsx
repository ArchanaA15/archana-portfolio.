import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, ScanSearch, Undo2 } from 'lucide-react'
import Section from '../components/Section'
import Button from '../components/Button'
import { skills, levels } from '../data'
const notes = [
  ['// frontend', '— HTML, CSS, JavaScript and React.js for building the interface.'],
  ['// backend', '— Java, JDBC, JSP, Servlets and Spring Boot for server-side logic.'],
  ['// database', '— MySQL for storing and querying application data.'],
  ['// tools', '— IntelliJ IDEA, Postman and Apache Tomcat for building, testing and running projects.'],
]
const pad = (n) => String(n).padStart(2, '0')
export default function Skills() {
  const [i, setI] = useState(0)
  const [dived, setDived] = useState(false)
  const go = (d) => setI((v) => (v + d + skills.length) % skills.length)
  useEffect(() => {
    if (!dived) return
    const k = (e) => { if (e.key === 'ArrowRight') go(1); if (e.key === 'ArrowLeft') go(-1); if (e.key === 'Escape') setDived(false) }
    window.addEventListener('keydown', k); return () => window.removeEventListener('keydown', k)
  }, [dived])
  const s = skills[i]
  const ease = [0.65, 0, 0.35, 1]
  return (
    <Section title="Technical skills" intro="Dive into the laptop, then flip through the four skill categories.">
      <div className={`grid items-center gap-8 ${dived ? 'lg:grid-cols-[14rem_minmax(0,1fr)_23rem]' : ''}`}>
        <AnimatePresence>
          {dived && (
            <motion.div key="desc" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} className="order-2 lg:order-1">
              <AnimatePresence mode="wait">
                <motion.div key={i} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                  <p className="text-lg font-bold">{notes[i][0]}</p>
                  <p className="mt-3 text-ink/80">{notes[i][1]}</p>
                  <p className="mt-5 text-sm font-bold tracking-widest text-ink/60" aria-live="polite">{pad(i + 1)} / {pad(skills.length)}</p>
                </motion.div>
              </AnimatePresence>
              <div className="mt-6 flex gap-6">
                <button onClick={() => go(-1)} aria-label="Previous case" className="group flex flex-col items-center gap-2 text-sm font-semibold"><span className="grid h-12 w-12 place-items-center rounded-full border-2 border-ink/80 transition group-hover:scale-110"><ChevronLeft /></span>previous<br />case</button>
                <button onClick={() => go(1)} aria-label="Next case" className="group flex flex-col items-center gap-2 text-sm font-semibold"><span className="grid h-12 w-12 place-items-center rounded-full bg-violet-600 text-white transition group-hover:scale-110 group-hover:bg-pink-500"><ChevronRight /></span>next<br />case</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="order-1 lg:order-2">
          <motion.div animate={dived ? { scale: 1, y: 0, rotate: 0 } : { scale: 0.78, y: [10, -8, 10], rotate: -3 }}
            transition={dived ? { duration: 1.1, ease } : { duration: 1.1, ease, y: { duration: 5, repeat: Infinity, ease: 'easeInOut' } }}>
            <div className="rounded-t-2xl bg-gradient-to-b from-slate-600 to-slate-800 p-2.5 shadow-2xl shadow-violet-900/40">
              <div className="relative aspect-[16/10] overflow-hidden rounded-md bg-gradient-to-b from-[#0b2f20] to-[#1a5a40]">
                <AnimatePresence mode="wait">
                  {dived ? (
                    <motion.ul key={i} initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="flex h-full flex-wrap content-center justify-center gap-3 p-4" aria-label={s.title}>
                      {s.items.map((t, k) => <motion.li key={t} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: [0, -5, 0] }} transition={{ opacity: { delay: k * 0.07 }, y: { delay: k * 0.07, duration: 4 + k, repeat: Infinity } }} className="rounded-xl bg-white/95 px-4 py-2 text-slate-900 text-sm font-bold sm:text-base">{t}</motion.li>)}
                    </motion.ul>
                  ) : (
                    <motion.div key="idle" exit={{ opacity: 0 }} className="p-5 font-mono text-xs leading-6 text-emerald-100/90 sm:text-sm">
                      <p>const skills = [</p>{skills.map((k) => <p key={k.title} className="pl-5">'{k.title}',</p>)}<p>]</p>
                    </motion.div>
                  )}
                </AnimatePresence>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
              </div>
            </div>
            <div className="mx-auto h-3.5 w-[112%] -translate-x-[5.5%] rounded-b-3xl bg-gradient-to-b from-slate-600 to-slate-800 shadow-xl" />
          </motion.div>
          <div className="mt-8 flex justify-center">
            {dived ? <Button variant="ghost" icon={Undo2} onClick={() => setDived(false)}>Back to overview</Button> : <Button icon={ScanSearch} onClick={() => setDived(true)}>Dive into the laptop</Button>}
          </div>
        </div>
        <AnimatePresence>
          {dived && (
            <motion.div key={i} initial={{ opacity: 0, y: -50, rotate: -6 }} animate={{ opacity: 1, y: [-50, 6, 0], rotate: [-6, 1.2, 0] }} exit={{ opacity: 0, y: -30 }} transition={{ duration: 0.8 }}
              className="relative order-3 rounded-lg border border-white/10 bg-[#14122b] p-6 pl-9 shadow-2xl shadow-black/50" style={{ transformOrigin: '50% 0' }}>
              {['left-3 top-3', 'right-3 top-3', 'left-3 bottom-3', 'right-3 bottom-3'].map((c) => <span key={c} className={`absolute h-4 w-4 rounded-full bg-[#0b0a1a] shadow-inner ${c}`} aria-hidden="true" />)}
              <h3 className="text-4xl font-extrabold leading-none">{s.title}</h3>
              <ul className="mt-5 space-y-4">{s.items.map((t, k) => (
                <li key={t}>
                  <div className="flex items-baseline justify-between gap-3 text-xl font-extrabold sm:text-2xl"><span>{t}</span><span className="grad-text">{levels[t]}%</span></div>
                  <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-white/10" role="progressbar" aria-label={t} aria-valuenow={levels[t]} aria-valuemin={0} aria-valuemax={100}>
                    <motion.div initial={{ width: 0 }} animate={{ width: `${levels[t]}%` }} transition={{ duration: 0.9, delay: 0.3 + k * 0.1 }} className="h-full rounded-full bg-gradient-to-r from-violet-500 to-pink-500" />
                  </div>
                </li>))}</ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Section>
  )
}
