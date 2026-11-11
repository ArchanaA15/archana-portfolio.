import { motion } from 'framer-motion'
import { Download, FolderOpen, Mail, Code2, Database, Layers } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import Blobs from '../components/Blobs'
import { scrollToContact } from '../components/Navbar'
import { profile } from '../data'
const word = { hidden: { y: '110%' }, show: { y: 0, transition: { duration: 0.7, ease: [0.2, 0.7, 0.2, 1] } } }
const floaters = [
  { Icon: Code2, cls: 'left-[6%] top-[22%]', c: 'text-violet-400' }, { Icon: Database, cls: 'right-[8%] top-[28%]', c: 'text-cyan-400' },
  { Icon: Layers, cls: 'right-[18%] bottom-[14%]', c: 'text-pink-400' },
]
export default function Home() {
  const nav = useNavigate()
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-center overflow-hidden">
      <Blobs variant="home" />
      {floaters.map(({ Icon, cls, c }, i) => (
        <motion.div key={i} aria-hidden="true" className={`glass absolute hidden md:grid h-16 w-16 place-items-center rounded-2xl ${cls} ${c}`}
          animate={{ y: [0, -18, 0], rotate: [-4, 4, -4] }} transition={{ duration: 5 + i, repeat: Infinity, ease: 'easeInOut' }}><Icon size={28} /></motion.div>
      ))}
      <div className="mx-auto w-full max-w-6xl px-5 py-16">
        <motion.h1 initial="hidden" animate="show" transition={{ staggerChildren: 0.12 }} className="text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-7xl lg:text-8xl">
          {['Hello,', "I'm", 'Archana.'].map((w, i) => (
            <span key={w} className="mr-4 inline-block overflow-hidden align-bottom pb-2"><motion.span variants={word} className={`inline-block ${i === 2 ? 'grad-text' : ''}`}>{w}</motion.span></span>
          ))}
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="mt-4 font-display text-2xl font-bold text-violet-300 sm:text-3xl">An Aspiring Software Developer</motion.p>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="mt-5 max-w-2xl text-lg text-ink/75">
          I'm an aspiring software developer passionate about building web applications and developing practical software solutions using Java, Spring Boot, React.js and database technologies.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} className="mt-8 flex flex-wrap gap-3">
          <Button icon={Download} href={profile.resume} download="Archana_Resume.pdf">Download Resume</Button>
          <Button variant="secondary" icon={FolderOpen} onClick={() => nav('/projects')}>View Projects</Button>
          <Button variant="ghost" icon={Mail} onClick={scrollToContact}>Contact Me</Button>
        </motion.div>
      </div>
    </section>
  )
}
