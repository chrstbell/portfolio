import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useReducedMotion } from '../../hooks/useReducedMotion'

const VIDEO_RE = /\.(mp4|webm|mov|m4v)$/i

function stackStyle(position, total) {
  return {
    zIndex: total - position,
    scale: 1 - position * 0.045,
    y: position * 8,
    x: 0,
    opacity: Math.max(0.5, 1 - position * 0.15),
  }
}

export default function PhotoStack({ images }) {
  const reduced = useReducedMotion()
  const [order, setOrder] = useState(() => images.map((_, i) => i))

  const frontImageIndex = order[0]
  const multi = images.length > 1

  const goNext = () =>
    setOrder((prev) => {
      const next = [...prev]
      next.push(next.shift())
      return next
    })

  const goPrev = () =>
    setOrder((prev) => {
      const next = [...prev]
      next.unshift(next.pop())
      return next
    })

  const goTo = (i) =>
    setOrder((prev) => {
      const at = prev.indexOf(i)
      if (at <= 0) return prev
      const next = [...prev]
      next.splice(at, 1)
      next.unshift(i)
      return next
    })

  if (!images?.length) return null

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-4">
      <div className="relative min-h-0 w-full flex-1">
        {order.map((imageIndex, position) => {
          const image = images[imageIndex]
          const isFront = position === 0
          const isVideo = VIDEO_RE.test(image.src)
          const style = stackStyle(position, images.length)

          return (
            <div
              key={imageIndex}
              className="pointer-events-none absolute inset-0 flex items-center justify-center"
            >
              <motion.div
                aria-label={image.alt}
                className={`w-[86%] overflow-hidden rounded-2xl shadow-lg ${
                  isFront ? 'pointer-events-auto' : 'pointer-events-none'
                }`}
                initial={false}
                animate={style}
                transition={
                  reduced
                    ? { duration: 0 }
                    : { type: 'spring', stiffness: 280, damping: 24, mass: 0.8 }
                }
                style={{
                  zIndex: style.zIndex,
                  transformOrigin: 'center center',
                  background: 'var(--card-bg)',
                  border: '1px solid var(--line)',
                }}
              >
                <div
                  className="relative flex aspect-[170/108] w-full items-center justify-center overflow-hidden"
                  style={{ background: 'var(--chip-bg)' }}
                >
                  {isVideo ? (
                    <video
                      src={image.src}
                      controls
                      playsInline
                      preload="metadata"
                      className="absolute inset-0 h-full w-full"
                      style={{ objectFit: 'contain' }}
                      onClick={(e) => {
                        const real = e.composedPath()[0]
                        if (real !== e.currentTarget) return
                        e.preventDefault()
                        const v = e.currentTarget
                        if (v.paused) v.play().catch(() => {})
                        else v.pause()
                      }}
                    />
                  ) : (
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="h-full w-full object-contain object-center"
                      draggable={false}
                      onError={(e) => {
                        e.currentTarget.style.display = 'none'
                      }}
                    />
                  )}
                </div>
              </motion.div>
            </div>
          )
        })}

        {multi && (
          <>
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous photo"
              className="absolute left-2 top-1/2 z-50 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full transition-colors"
              style={{
                background: 'var(--chip-bg)',
                color: 'var(--fg-secondary)',
                border: '1px solid var(--line)',
              }}
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Next photo"
              className="absolute right-2 top-1/2 z-50 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full transition-colors"
              style={{
                background: 'var(--chip-bg)',
                color: 'var(--fg-secondary)',
                border: '1px solid var(--line)',
              }}
            >
              <ChevronRight size={18} />
            </button>
          </>
        )}
      </div>

      {multi && (
        <div className="flex items-center gap-1.5">
          {images.map((image, i) => (
            <button
              key={i}
              type="button"
              aria-label={image.alt}
              onClick={() => goTo(i)}
              className="h-1.5 rounded-full transition-all duration-300"
              style={{
                width: i === frontImageIndex ? '1rem' : '0.375rem',
                background:
                  i === frontImageIndex
                    ? 'var(--accent-blue-dark, #6E8FB5)'
                    : 'var(--line-strong)',
              }}
            />
          ))}
        </div>
      )}
    </div>
  )
}
