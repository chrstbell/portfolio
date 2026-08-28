import { motion } from 'framer-motion'
import { useReducedMotion } from '../../hooks/useReducedMotion'

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  className = '',
}) {
  const reduced = useReducedMotion()
  const alignClass =
    align === 'center' ? 'text-center items-center' : 'text-left items-start'

  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: 24, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`flex flex-col gap-2 ${alignClass} ${className}`}
    >
      {eyebrow && (
        <span className="font-body text-sm font-medium uppercase tracking-widest text-primary-blue/70">
          {eyebrow}
        </span>
      )}
      <h2 className="font-heading text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-2xl font-body text-base text-slate-600 sm:text-lg">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
