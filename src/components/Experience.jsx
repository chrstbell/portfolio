import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'
import { experienceData } from '../data/experience'
import { useLanguage } from '../context/LanguageContext'
import { useReducedMotion } from '../hooks/useReducedMotion'
import SectionHeading from './ui/SectionHeading'
import { LanguageFade } from './ui/LanguageFade'
import ShapeDivider from './ui/ShapeDivider'

export default function Experience() {
  const { content } = useLanguage()
  const reduced = useReducedMotion()

  return (
    <>
      <section
        id="experience"
        className="relative overflow-hidden bg-white py-20 sm:py-28"
      >
        <div className="pointer-events-none absolute inset-0 grid-texture-subtle opacity-40" />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={
              <LanguageFade as="span">{content.experience.eyebrow}</LanguageFade>
            }
            title={
              <LanguageFade as="span">{content.experience.title}</LanguageFade>
            }
            align="center"
            className="mb-12 sm:mb-16"
          />

          <div className="relative mx-auto max-w-3xl">
            <div
              className="absolute bottom-0 left-[19px] top-0 w-0.5 bg-gradient-to-b from-primary-blue via-primary-gold to-lavender sm:left-1/2 sm:-ml-px"
              aria-hidden="true"
            />

            {experienceData.map((item, i) => {
              const itemContent = content.experience.items[item.id]
              return (
                <motion.div
                  key={item.id}
                  initial={reduced ? false : { opacity: 0, x: i % 2 === 0 ? -24 : 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`relative mb-10 flex gap-6 sm:mb-12 ${
                    i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                  }`}
                >
                  <div className="hidden flex-1 sm:block" />

                  <motion.div
                    initial={reduced ? false : { scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20, delay: i * 0.15 }}
                    className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-gold shadow-lg shadow-primary-gold/30 sm:absolute sm:left-1/2 sm:-ml-5"
                  >
                    <Briefcase className="h-4 w-4 text-white" />
                    <motion.span
                      className="absolute inset-0 rounded-full border-2 border-primary-gold"
                      animate={
                        reduced
                          ? undefined
                          : { scale: [1, 1.4, 1], opacity: [0.8, 0, 0.8] }
                      }
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                    />
                  </motion.div>

                  <div className="flex-1 rounded-3xl bg-white p-6 shadow-lg shadow-primary-blue/5 ring-1 ring-slate-100 sm:max-w-[calc(50%-2.5rem)]">
                    <LanguageFade
                      as="span"
                      className="font-body text-xs font-semibold uppercase tracking-wider text-primary-gold"
                    >
                      {itemContent.period}
                    </LanguageFade>
                    <h3 className="mt-1 font-heading text-xl font-bold text-slate-900">
                      {item.company}
                    </h3>
                    <p className="mt-1 font-body text-sm font-medium text-primary-blue">
                      {item.role}
                    </p>
                    <p className="mt-3 font-body text-sm leading-relaxed text-slate-600 sm:text-base">
                      <LanguageFade as="span">{itemContent.description}</LanguageFade>
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
      <ShapeDivider fromColor="#FFFFFF" toColor="#4A8FC9" variant="blob" />
    </>
  )
}
