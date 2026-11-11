import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import Section from '../components/Section'
import Blobs from '../components/Blobs'
import ProjectCard from '../components/ProjectCard'
import Button from '../components/Button'
import { GitHubIcon } from '../components/Icons'
import { projects } from '../data'
export default function Projects() {
  const [sel, setSel] = useState(null)
  const closeRef = useRef(null)
  useEffect(() => {
    if (!sel) return
    closeRef.current?.focus()
    const k = (e) => e.key === 'Escape' && setSel(null)
    window.addEventListener('keydown', k); return () => window.removeEventListener('keydown', k)
  }, [sel])
  return (
    <div className="relative">
      <Blobs variant="projects" />
      <Section title="Projects" intro="One project is still in development; the others are finished.">
        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12, duration: 0.6 }}>
              <ProjectCard p={p} featured={i === 1} onOpen={() => setSel(p)} />
            </motion.div>
          ))}
        </div>
      </Section>
      <AnimatePresence>
        {sel && (
          <motion.div className="fixed inset-0 z-[60] grid place-items-center bg-black/60 p-4 backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSel(null)}>
            <motion.div role="dialog" aria-modal="true" aria-label={sel.title} onClick={(e) => e.stopPropagation()} initial={{ scale: 0.9, y: 30 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 30 }}
              className="max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-3xl border border-white/10 bg-[#14122b] p-7 shadow-2xl">
              <div className="flex items-start justify-between gap-4">
                <div><span className={`rounded-full px-3 py-1 text-xs font-bold ${sel.statusColor}`}>{sel.status}</span><h3 className="mt-3 text-3xl font-extrabold">{sel.title}</h3><p className="font-medium text-violet-300">{sel.subtitle}</p></div>
                <button ref={closeRef} onClick={() => setSel(null)} aria-label="Close details" className="rounded-full p-2 hover:bg-white/10"><X /></button>
              </div>
              <p className="mt-4 text-ink/80">{sel.intro}</p>
              <h4 className="mt-5 font-bold">Technologies</h4>
              <p className="mt-1 flex flex-wrap gap-1.5">{sel.tech.map((t) => <span key={t} className="rounded-full bg-violet-500/15 px-2.5 py-1 text-xs font-bold text-violet-200">{t}</span>)}</p>
              <h4 className="mt-5 font-bold">Key features</h4>
              <ul className="mt-1 list-disc space-y-1 pl-5 text-ink/80">{sel.features.map((f) => <li key={f}>{f}</li>)}</ul>
              {sel.github && <div className="mt-6"><Button variant="secondary" icon={GitHubIcon} href={sel.github} target="_blank" rel="noopener noreferrer">GitHub</Button></div>}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
