import { motion } from 'framer-motion'
import { useReducedMotion } from '../../hooks/useReducedMotion'

export default function Card({
  children,
  className = '',
  delay = 0,
  hover = true,
}) {
  const reduced = useReducedMotion()

  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: 28, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, delay, ease: 'easeOut' }}
      whileHover={
        hover && !reduced ? { y: -4, transition: { duration: 0.25 } } : undefined
      }
      className={`rounded-3xl bg-white p-6 shadow-lg shadow-primary-blue/5 ring-1 ring-slate-100 sm:p-8 ${className}`}
    >
      {children}
    </motion.div>
  )
}
