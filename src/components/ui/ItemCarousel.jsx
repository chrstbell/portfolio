import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import MediaWithPlaceholder from './MediaWithPlaceholder'

export default function ItemCarousel({
  media,
  type = 'image',
  alt = '',
  className = '',
  objectFit = 'cover',
  mediaClassName = '',
  onMediaClick,
}) {
  const reduced = useReducedMotion()
  const items = media.filter(Boolean)
  const [playing, setPlaying] = useState(false)
  const [[index, direction], setSlide] = useState([0, 0])

  if (items.length === 0) return null

  if (items.length === 1) {
    return (
      <div className={`h-full w-full ${className}`}>
        <MediaWithPlaceholder
          src={items[0]}
          alt={alt}
          type={type}
          objectFit={objectFit}
          mediaClassName={mediaClassName}
          playing={playing}
          onClick={
            type === 'video'
              ? () => setPlaying(true)
              : onMediaClick
          }
        />
      </div>
    )
  }

  const paginate = (step) => {
    setPlaying(false)
    setSlide(([current]) => {
      const next = (current + step + items.length) % items.length
      return [next, step]
    })
  }

  const currentSrc = items[index]

  return (
    <div className={`relative h-full w-full ${className}`}>
      <div className="relative h-full w-full overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={index}
            custom={direction}
            initial={
              reduced
                ? { opacity: 0 }
                : { opacity: 0, x: direction >= 0 ? 48 : -48 }
            }
            animate={{ opacity: 1, x: 0 }}
            exit={
              reduced
                ? { opacity: 0 }
                : { opacity: 0, x: direction >= 0 ? -48 : 48 }
            }
            transition={{ duration: reduced ? 0 : 0.3, ease: 'easeOut' }}
            className="absolute inset-0 h-full w-full"
          >
            <MediaWithPlaceholder
              src={currentSrc}
              alt={`${alt} ${index + 1}`}
              type={type}
              objectFit={objectFit}
              mediaClassName={mediaClassName}
              playing={playing}
              onClick={
                type === 'video'
                  ? () => setPlaying(true)
                  : onMediaClick
              }
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation()
          paginate(-1)
        }}
        className="absolute left-1.5 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full transition-colors sm:left-2 sm:h-9 sm:w-9"
        style={{
          background: 'var(--chip-bg)',
          color: 'var(--fg-secondary)',
          border: '1px solid var(--line)',
        }}
        aria-label="Previous slide"
      >
        <ChevronLeft size={18} />
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation()
          paginate(1)
        }}
        className="absolute right-1.5 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full transition-colors sm:right-2 sm:h-9 sm:w-9"
        style={{
          background: 'var(--chip-bg)',
          color: 'var(--fg-secondary)',
          border: '1px solid var(--line)',
        }}
        aria-label="Next slide"
      >
        <ChevronRight size={18} />
      </button>

      <div className="absolute inset-x-0 bottom-2 z-10 flex justify-center gap-1.5">
        {items.map((_, dotIndex) => (
          <button
            key={dotIndex}
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              setPlaying(false)
              setSlide([dotIndex, dotIndex > index ? 1 : -1])
            }}
            className="h-1.5 rounded-full transition-all"
            style={{
              width: dotIndex === index ? '1rem' : '0.375rem',
              background:
                dotIndex === index
                  ? 'var(--accent-blue-dark, #6E8FB5)'
                  : 'var(--line-strong)',
            }}
            aria-label={`Go to slide ${dotIndex + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
