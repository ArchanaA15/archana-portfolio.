import { motion } from 'framer-motion'
export default function Section({ id, title, intro, children, className = '' }) {
  return (
    <section id={id} className={`relative mx-auto max-w-6xl px-5 py-20 ${className}`}>
      {title && (
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} className="mb-10 max-w-2xl">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">{title}</h2>
          {intro && <p className="mt-3 text-lg text-ink/70">{intro}</p>}
        </motion.div>
      )}
      {children}
    </section>
  )
}
