import { Star, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

export function Sticker({ type = 'star', className = '', animate = true }) {
  const Icon = type === 'sparkle' ? Sparkles : Star

  return (
    <motion.span
      className={`inline-flex ${className}`}
      animate={
        animate
          ? { rotate: [0, 8, -8, 0], scale: [1, 1.1, 1] }
          : undefined
      }
      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      aria-hidden="true"
    >
      <Icon className="h-5 w-5 fill-primary-gold text-primary-gold sm:h-6 sm:w-6" />
    </motion.span>
  )
}

export function DoodleArrow({ className = '' }) {
  return (
    <svg
      viewBox="0 0 80 40"
      className={`h-8 w-16 text-primary-gold ${className}`}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 28 C20 8, 40 36, 76 12"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M62 8 L76 12 L70 26"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
