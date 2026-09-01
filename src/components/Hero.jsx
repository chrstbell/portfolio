import { useRef } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { LanguageFade } from './ui/LanguageFade'
import ShapeDivider from './ui/ShapeDivider'
import { Sticker } from './ui/Stickers'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.04, delayChildren: 0.2 },
  },
}

const letter = {
  hidden: { opacity: 0, y: 24, scale: 0.85 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
}

const heroName = 'CHRISTABEL AURELIA R'

export default function Hero() {
  const { content } = useLanguage()
  const reduced = useReducedMotion()
  const gridRef = useRef(null)

  const handleMouseMove = (e) => {
    if (reduced || !gridRef.current) return
    const { clientX, clientY } = e
    const x = (clientX / window.innerWidth - 0.5) * 12
    const y = (clientY / window.innerHeight - 0.5) * 12
    gridRef.current.style.transform = `translate(${x}px, ${y}px)`
  }

  const handleMouseLeave = () => {
    if (gridRef.current) gridRef.current.style.transform = 'translate(0, 0)'
  }

  const nameLetters = heroName.split('')

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-primary-blue"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={gridRef}
        className="pointer-events-none absolute inset-[-24px] grid-texture transition-transform duration-300 ease-out"
        aria-hidden="true"
      />

      <div className="pointer-events-none absolute right-8 top-28 hidden sm:block">
        <Sticker type="sparkle" />
      </div>
      <div className="pointer-events-none absolute bottom-40 left-10 hidden md:block">
        <Sticker type="star" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-4 pb-24 pt-28 text-center sm:px-6 lg:px-8">
        <motion.h1
          id="hero-name"
          variants={reduced ? undefined : container}
          initial={reduced ? false : 'hidden'}
          animate="show"
          className="font-heading text-3xl font-extrabold leading-tight tracking-wide text-white sm:text-5xl md:text-6xl lg:text-7xl"
          aria-label={heroName}
        >
          {nameLetters.map((char, i) => (
            <motion.span
              key={`${char}-${i}`}
              variants={reduced ? undefined : letter}
              className="inline-block"
              style={{ whiteSpace: char === ' ' ? 'pre' : undefined }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          initial={reduced ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="mt-3 font-heading text-xl font-bold tracking-[0.2em] text-primary-gold sm:text-2xl md:text-3xl"
        >
          PORTFOLIO
        </motion.p>

        <motion.p
          initial={reduced ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          className="mt-6 max-w-xl font-body text-sm leading-relaxed text-white/85 sm:text-base"
        >
          <LanguageFade as="span">
            {content.hero.tagline} — {content.hero.subTagline}
          </LanguageFade>
        </motion.p>

        <motion.a
          href="#about"
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.5 }}
          className="absolute bottom-10 flex flex-col items-center gap-1 text-white/70"
          aria-label="Scroll to about section"
          onClick={(e) => {
            e.preventDefault()
            document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
          }}
        >
          <LanguageFade
            as="span"
            className="font-body text-xs uppercase tracking-widest"
          >
            {content.hero.scrollLabel}
          </LanguageFade>
          <motion.span
            animate={reduced ? undefined : { y: [0, 8, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown size={24} />
          </motion.span>
        </motion.a>
      </div>

      <ShapeDivider fromColor="#4A8FC9" toColor="#FFFFFF" variant="wave" />
    </section>
  )
}
