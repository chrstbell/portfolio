import { Link } from 'react-router-dom'
import { ImageOff } from 'lucide-react'
import { motion } from 'framer-motion'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { LanguageFade } from '../ui/LanguageFade'

export default function ProjectCard({
  to,
  badge,
  title,
  description,
  imageSrc,
  imageAlt,
  accent,
  number,
  delay = 0,
}) {
  const reduced = useReducedMotion()

  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay, ease: 'easeOut' }}
    >
      <Link
        to={to}
        className="group block overflow-hidden rounded-2xl transition-shadow hover:shadow-lg"
        style={{
          border: '1px solid var(--line)',
          background: 'var(--card-bg)',
        }}
      >
        {/* Image area */}
        <div
          className="relative flex aspect-[4/3] items-center justify-center overflow-hidden"
          style={{ background: accent || 'var(--chip-bg)' }}
        >
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={imageAlt}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            />
          ) : (
            <div className="flex flex-col items-center gap-2">
              <ImageOff
                size={28}
                style={{ color: 'var(--muted)', opacity: 0.4 }}
              />
              <span
                className="font-heading text-3xl font-extrabold"
                style={{ color: 'var(--fg)', opacity: 0.1 }}
              >
                {number || title}
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4 sm:p-5">
          {badge && (
            <span
              className="mb-2 inline-block rounded-full px-2.5 py-0.5 font-body text-[10px] font-medium"
              style={{
                color: 'var(--accent-blue-dark, #6E8FB5)',
                background: 'var(--chip-bg)',
              }}
            >
              <LanguageFade as="span">{badge}</LanguageFade>
            </span>
          )}
          <h3
            className="font-heading text-lg font-bold"
            style={{ color: 'var(--fg)' }}
          >
            {title}
          </h3>
          {description && (
            <p
              className="mt-1 line-clamp-2 font-body text-sm"
              style={{ color: 'var(--muted)' }}
            >
              <LanguageFade as="span">{description}</LanguageFade>
            </p>
          )}
        </div>
      </Link>
    </motion.div>
  )
}
