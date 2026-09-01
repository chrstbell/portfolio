import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../../context/LanguageContext'
import { useReducedMotion } from '../../hooks/useReducedMotion'

const ROTATIONS = [-6, 5, -4, 6, -3, 4]

function stackStyle(position, total) {
  return {
    zIndex: total - position,
    scale: 1 - position * 0.045,
    y: position * 10,
    x: position * (position % 2 === 0 ? 8 : -8),
    opacity: Math.max(0.55, 1 - position * 0.14),
  }
}

export default function PhotoStack({ images }) {
  const { content } = useLanguage()
  const reduced = useReducedMotion()
  const [order, setOrder] = useState(() => images.map((_, i) => i))
  const [showHint, setShowHint] = useState(true)

  const rotations = useMemo(
    () => images.map((_, i) => ROTATIONS[i % ROTATIONS.length]),
    [images.length],
  )

  const frontImageIndex = order[0]

  const handleClick = () => {
    setShowHint(false)
    setOrder((prev) => {
      const next = [...prev]
      next.push(next.shift())
      return next
    })
  }

  if (!images?.length) return null

  return (
    <div className="flex flex-col items-center">
      <div
        className="relative mx-auto w-full overflow-hidden"
        style={{
          aspectRatio: '16 / 10',
          minHeight: '320px',
          borderRadius: '1rem',
          background: 'var(--chip-bg)',
          border: '1px solid var(--line)',
        }}
      >
        {order.map((imageIndex, position) => {
          const image = images[imageIndex]
          const isFront = position === 0
          const style = stackStyle(position, images.length)

          return (
            <motion.button
              key={imageIndex}
              type="button"
              layout
              onClick={isFront ? handleClick : undefined}
              disabled={!isFront}
              aria-label={image.alt}
              className={`absolute left-1/2 top-0 w-[78%] -translate-x-1/2 overflow-hidden rounded-2xl shadow-lg ${
                isFront ? 'cursor-pointer' : 'pointer-events-none'
              }`}
              initial={false}
              animate={{
                ...style,
                rotate: rotations[imageIndex],
              }}
              transition={
                reduced
                  ? { duration: 0 }
                  : { type: 'spring', stiffness: 280, damping: 24, mass: 0.8 }
              }
              whileTap={isFront && !reduced ? { scale: style.scale * 0.97 } : undefined}
              style={{
                transformOrigin: 'center center',
                background: 'var(--card-bg)',
                border: '1px solid var(--line)',
              }}
            >
              <div
                className="relative aspect-[4/3] w-full overflow-hidden"
                style={{ background: 'var(--chip-bg)' }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="absolute inset-0 h-full w-full object-cover"
                  draggable={false}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                />
              </div>
            </motion.button>
          )
        })}
      </div>

      <div className="mt-5 flex items-center gap-1.5">
        {images.map((_, i) => (
          <span
            key={i}
            className="h-1.5 rounded-full transition-all duration-300"
            style={{
              width: i === frontImageIndex ? '1rem' : '0.375rem',
              background:
                i === frontImageIndex
                  ? 'var(--accent-blue-dark, #6E8FB5)'
                  : 'var(--line-strong)',
            }}
            aria-hidden="true"
          />
        ))}
      </div>

      <AnimatePresence>
        {showHint && (
          <motion.p
            key={content.photoStack.hint}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.3 }}
            className="mt-2 font-body text-xs"
            style={{ color: 'var(--muted)' }}
          >
            {content.photoStack.hint}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  )
}
