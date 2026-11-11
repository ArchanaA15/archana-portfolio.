import { motion } from 'framer-motion'
const styles = {
  primary: 'text-white bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 shadow-lg shadow-violet-900/50',
  secondary: 'text-ink bg-white/5 border border-white/20 hover:border-violet-400 hover:bg-white/10',
  ghost: 'text-violet-200 bg-violet-500/20 hover:bg-violet-500/30',
}
export default function Button({ variant = 'primary', icon: Icon, children, className = '', ...props }) {
  const Tag = props.href ? motion.a : motion.button
  return (
    <Tag whileHover={{ y: -3, scale: 1.03 }} whileTap={{ scale: 0.97 }}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-bold text-sm sm:text-base transition-colors ${styles[variant]} ${className}`} {...props}>
      {Icon && <Icon size={18} aria-hidden="true" />}{children}
    </Tag>
  )
}
