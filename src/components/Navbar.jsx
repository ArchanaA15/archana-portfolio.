import { useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
export const scrollToContact = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
const links = [['/', 'Home'], ['/about', 'About'], ['/skills', 'Skills'], ['/projects', 'Projects']]
export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [contactActive, setContactActive] = useState(false)
  const { pathname } = useLocation()
  const go = () => { setOpen(false); setContactActive(true); setTimeout(scrollToContact, 50) }
  const item = (active) => `relative px-4 py-2 rounded-full text-sm font-bold transition-colors ${active ? 'text-white' : 'text-ink/70 hover:text-violet-300'}`
  const pill = <motion.span layoutId="pill" className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-violet-600 to-pink-500" />
  return (
    <header className="sticky top-0 z-50 px-4 pt-3">
      <nav aria-label="Main navigation" className="glass mx-auto flex max-w-6xl items-center justify-between rounded-full px-5 py-2.5">
        <NavLink to="/" onClick={() => setContactActive(false)} className="font-display text-xl font-extrabold">Archana<span className="text-pink-500">.</span></NavLink>
        <ul className="hidden md:flex items-center gap-1">
          {links.map(([to, label]) => (
            <li key={to}><NavLink to={to} end onClick={() => setContactActive(false)} className={({ isActive }) => item(isActive && !contactActive)}>
              {({ isActive }) => <>{isActive && !contactActive && pill}{label}</>}</NavLink></li>
          ))}
          <li><button onClick={go} className={item(contactActive)}>{contactActive && pill}Contact</button></li>
        </ul>
        <button className="md:hidden p-2" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.ul initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            className="glass md:hidden mx-auto mt-2 max-w-6xl rounded-3xl p-3 flex flex-col">
            {links.map(([to, label]) => (<li key={to}><NavLink to={to} end onClick={() => { setOpen(false); setContactActive(false) }}
              className={({ isActive }) => `block rounded-2xl px-4 py-3 font-bold ${isActive ? 'bg-violet-500/20 text-violet-200' : ''}`}>{label}</NavLink></li>))}
            <li><button onClick={go} className="w-full text-left rounded-2xl px-4 py-3 font-bold">Contact</button></li>
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  )
}
