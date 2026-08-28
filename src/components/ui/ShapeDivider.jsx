import { motion } from 'framer-motion'
import { useReducedMotion } from '../../hooks/useReducedMotion'

export default function ShapeDivider({
  fromColor = '#4A8FC9',
  toColor = '#FFFFFF',
  flip = false,
  variant = 'wave',
}) {
  const reduced = useReducedMotion()

  const path =
    variant === 'blob'
      ? 'M0,64 C180,120 320,0 480,48 C640,96 780,32 960,64 L960,120 L0,120 Z'
      : 'M0,48 C240,96 480,0 720,48 C840,72 920,56 960,64 L960,80 L0,80 Z'

  return (
    <div
      className={`relative -mt-px w-full overflow-hidden leading-none ${flip ? 'rotate-180' : ''}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 960 80"
        preserveAspectRatio="none"
        className="block h-10 w-full sm:h-14 md:h-16"
      >
        <motion.path
          d={path}
          fill={toColor}
          initial={reduced ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        />
      </svg>
      <div className="absolute inset-0 -z-10" style={{ backgroundColor: fromColor }} />
    </div>
  )
}
