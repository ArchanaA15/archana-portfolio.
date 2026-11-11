import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Backdrop from './components/Backdrop'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
const titles = { '/': 'Archana A | Aspiring Software Developer', '/about': 'About | Archana A', '/skills': 'Skills | Archana A', '/projects': 'Projects | Archana A' }
export default function App() {
  const loc = useLocation()
  useEffect(() => { document.title = titles[loc.pathname] || titles['/']; window.scrollTo(0, 0) }, [loc.pathname])
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-lg focus:bg-white focus:p-3 focus:text-slate-900">Skip to content</a>
      <Backdrop />
      <Navbar />
      <main id="main">
        <AnimatePresence mode="wait">
          <motion.div key={loc.pathname} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
            <Routes location={loc}>
              <Route path="/" element={<Home />} /><Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} /><Route path="/projects" element={<Projects />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
        <Contact />
      </main>
      <Footer />
    </>
  )
}
