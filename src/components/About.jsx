import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import { useReducedMotion } from '../hooks/useReducedMotion'
import SectionHeading from './ui/SectionHeading'
import { LanguageFade } from './ui/LanguageFade'
import { DoodleArrow, Sticker } from './ui/Stickers'

export default function About() {
  const { content } = useLanguage()
  const reduced = useReducedMotion()

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-20 sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0 grid-texture-subtle opacity-60" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={reduced ? false : { opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="relative mx-auto w-full max-w-sm lg:max-w-none"
          >
            <div className="relative">
              <div
                className="absolute -inset-3 rounded-[2.5rem] bg-gradient-to-br from-mint via-lavender to-peach opacity-70 blur-sm"
                aria-hidden="true"
              />
              <div
                className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary-blue/20 to-primary-gold/20 p-1"
                style={{
                  clipPath:
                    'polygon(8% 0%, 92% 2%, 100% 12%, 98% 88%, 90% 100%, 10% 98%, 0% 88%, 2% 12%)',
                }}
              >
                <div className="flex aspect-[4/5] items-center justify-center overflow-hidden rounded-[1.8rem] bg-gradient-to-br from-primary-blue/10 to-lavender/30">
                  <img
                    src={`${import.meta.env.BASE_URL}profile.jpg`}
                    alt={content.about.profileAlt}
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      e.currentTarget.onerror = null
                      e.currentTarget.src = `${import.meta.env.BASE_URL}profile-placeholder.svg`
                    }}
                  />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4">
                <DoodleArrow />
              </div>
              <div className="absolute -left-6 top-8">
                <Sticker type="star" />
              </div>
            </div>
          </motion.div>

          <div>
            <SectionHeading
              eyebrow={
                <LanguageFade as="span">{content.about.eyebrow}</LanguageFade>
              }
              title={content.about.heading}
              className="mb-8"
            />
            <div className="space-y-5">
              {content.about.paragraphs.map((p, i) => (
                <motion.p
                  key={i}
                  initial={reduced ? false : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.45, delay: i * 0.1 }}
                  className="font-body text-base leading-relaxed text-slate-600 sm:text-lg"
                >
                  <LanguageFade as="span">{p}</LanguageFade>
                </motion.p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
