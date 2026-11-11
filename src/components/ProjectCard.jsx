import { motion } from 'framer-motion'
import { Eye, CircleDot, CheckCircle2, User } from 'lucide-react'
import Button from './Button'
import { GitHubIcon } from './Icons'
const StatusIcon = { 'In Development': CircleDot, 'Personal Project': User, Completed: CheckCircle2 }
export default function ProjectCard({ p, featured, onOpen }) {
  const Icon = StatusIcon[p.status]
  return (
    <motion.article whileHover={{ y: -10 }} className={`group relative rounded-[2rem] p-[2px] bg-gradient-to-br ${p.accent} ${featured ? 'lg:-mt-6' : ''}`}>
      <div className="glass !bg-[#14122b] flex h-full flex-col rounded-[calc(2rem-2px)] p-7">
        <span className={`inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold ${p.statusColor}`}>
          <Icon size={14} className={p.status === 'In Development' ? 'animate-pulse' : ''} aria-hidden="true" />{p.status}
        </span>
        <h3 className="mt-4 text-2xl font-extrabold">{p.title}</h3>
        <p className="text-sm font-medium text-violet-300">{p.subtitle}</p>
        <p className="mt-3 text-ink/70">{p.intro}</p>
        <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Technologies">
          {p.tech.map((t) => <li key={t} className="rounded-full bg-violet-500/15 px-2.5 py-1 text-xs font-bold text-violet-200">{t}</li>)}
        </ul>
        <ul className="mt-5 space-y-2 text-sm text-ink/80 flex-1">
          {p.features.map((f) => <li key={f} className="flex gap-2"><span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r ${p.accent}`} />{f}</li>)}
        </ul>
        <div className="mt-6 flex flex-wrap gap-2">
          <Button icon={Eye} onClick={onOpen} aria-haspopup="dialog">View Project</Button>
          {p.github && <Button variant="secondary" icon={GitHubIcon} href={p.github} target="_blank" rel="noopener noreferrer">GitHub</Button>}
        </div>
      </div>
    </motion.article>
  )
}
