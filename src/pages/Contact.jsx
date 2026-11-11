import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Send, CheckCircle2 } from 'lucide-react'
import Section from '../components/Section'
import Button from '../components/Button'
import { LinkedInIcon } from '../components/Icons'
import { profile } from '../data'
const field = 'w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-ink placeholder:text-ink/40 outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-500/40'
export default function Contact() {
  const [f, setF] = useState({ name: '', email: '', subject: '', message: '' })
  const [err, setErr] = useState({})
  const [sent, setSent] = useState(false)
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })
  const submit = (e) => {
    e.preventDefault()
    const er = {}
    if (!f.name.trim()) er.name = 'Enter your name.'
    if (!/^\S+@\S+\.\S+$/.test(f.email)) er.email = 'Enter a valid email address.'
    if (!f.subject.trim()) er.subject = 'Enter a subject.'
    if (!f.message.trim()) er.message = 'Enter a message.'
    setErr(er)
    if (Object.keys(er).length) return
    const body = `${f.message}\n\nFrom: ${f.name} (${f.email})`
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(f.subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }
  const E = ({ k }) => err[k] ? <p role="alert" className="mt-1 text-sm text-pink-400">{err[k]}</p> : null
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-transparent to-violet-950/60">
      {[0, 1, 2].map((i) => (
        <motion.span key={i} aria-hidden="true" className="absolute rounded-full border-2 border-violet-500/30"
          style={{ width: 240 + i * 160, height: 240 + i * 160, right: -80 - i * 40, top: 40 }}
          animate={{ scale: [1, 1.08, 1], opacity: [0.6, 0.2, 0.6] }} transition={{ duration: 6 + i * 2, repeat: Infinity }} />
      ))}
      <Section id="contact" title="Let's talk" intro="Open to software developer opportunities. Send a message or reach out directly.">
        <div className="grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-2 space-y-4">
            <div className="glass rounded-3xl p-6">
              <p className="font-display text-2xl font-extrabold">{profile.name}</p>
              <p className="mt-4 flex items-center gap-3"><Mail size={18} className="text-violet-400" aria-hidden="true" /><a className="break-all hover:underline" href={`mailto:${profile.email}`}>{profile.email}</a></p>
              <p className="mt-3 flex items-center gap-3"><Phone size={18} className="text-violet-400" aria-hidden="true" /><a className="hover:underline" href="tel:+919342729676">{profile.phone}</a></p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button icon={Mail} href={`mailto:${profile.email}`}>Email Me</Button>
              <Button variant="secondary" icon={LinkedInIcon} href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</Button>
            </div>
          </div>
          <form onSubmit={submit} noValidate className="glass lg:col-span-3 space-y-4 rounded-3xl p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div><label htmlFor="name" className="mb-1 block text-sm font-bold">Name</label><input id="name" className={field} value={f.name} onChange={set('name')} autoComplete="name" /><E k="name" /></div>
              <div><label htmlFor="email" className="mb-1 block text-sm font-bold">Email</label><input id="email" type="email" className={field} value={f.email} onChange={set('email')} autoComplete="email" /><E k="email" /></div>
            </div>
            <div><label htmlFor="subject" className="mb-1 block text-sm font-bold">Subject</label><input id="subject" className={field} value={f.subject} onChange={set('subject')} /><E k="subject" /></div>
            <div><label htmlFor="message" className="mb-1 block text-sm font-bold">Message</label><textarea id="message" rows="5" className={field} value={f.message} onChange={set('message')} /><E k="message" /></div>
            <Button type="submit" icon={Send}>Send message</Button>
            {sent && <p role="status" className="flex items-center gap-2 text-sm font-medium text-emerald-300"><CheckCircle2 size={18} />Your email app should open with the message ready to send.</p>}
          </form>
        </div>
      </Section>
    </div>
  )
}
