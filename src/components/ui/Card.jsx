import { motion } from 'framer-motion'
import { useReducedMotion } from '../../hooks/useReducedMotion'

export default function Card({
  children,
  className = '',
  style = {},
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
      className={`rounded-3xl p-6 shadow-lg sm:p-8 ${className}`}
      style={{
        background: 'var(--card-bg)',
        boxShadow: '0 4px 24px var(--card-shadow)',
        border: '1px solid var(--line)',
        ...style,
      }}
    >
      {children}
    </motion.div>
  )
}
