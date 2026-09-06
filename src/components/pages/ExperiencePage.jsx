import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'
import { experienceData } from '../../data/experience'
import { useLanguage } from '../../context/LanguageContext'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import SectionHeading from '../ui/SectionHeading'
import { LanguageFade } from '../ui/LanguageFade'

export default function ExperiencePage() {
  const { content } = useLanguage()
  const reduced = useReducedMotion()

  return (
    <div className="min-h-screen px-4 pb-24 pt-20 md:pl-20 sm:px-6 sm:pl-24 md:pl-28 lg:px-8 lg:pl-32">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow={
            <LanguageFade as="span">{content.experience.eyebrow}</LanguageFade>
          }
          title={
            <LanguageFade as="span">{content.experience.title}</LanguageFade>
          }
          className="mb-12"
        />

        <div className="relative">
          {/* Vertical line — left side */}
          <div
            className="absolute bottom-0 left-[19px] top-0 w-0.5"
            style={{ background: 'var(--line)' }}
            aria-hidden="true"
          />

          {experienceData.map((item, i) => {
            const itemContent = content.experience.items[item.id]
            return (
              <motion.div
                key={item.id}
                initial={reduced ? false : { opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative mb-10 flex gap-6 sm:mb-12"
              >
                {/* Timeline node */}
                <div
                  className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
                  style={{ background: 'var(--chip-bg)' }}
                >
                  <Briefcase
                    size={16}
                    style={{ color: 'var(--accent-blue-dark, #6E8FB5)' }}
                  />
                </div>

                {/* Card — always on the right */}
                <div
                  className="flex-1 rounded-2xl p-6"
                  style={{
                    background: 'var(--card-bg)',
                    border: '1px solid var(--line)',
                  }}
                >
                  <LanguageFade
                    as="span"
                    className="font-body text-xs font-semibold uppercase tracking-wider"
                    style={{ color: 'var(--accent-blue-dark, #6E8FB5)' }}
                  >
                    {itemContent.period}
                  </LanguageFade>
                  <h3
                    className="mt-1 font-heading text-xl font-bold"
                    style={{ color: 'var(--fg)' }}
                  >
                    {item.company}
                  </h3>
                  <p
                    className="mt-1 font-body text-sm font-medium"
                    style={{ color: 'var(--muted)' }}
                  >
                    {item.role}
                  </p>
                  <p
                    className="mt-3 font-body text-sm leading-relaxed sm:text-base"
                    style={{ color: 'var(--fg-secondary)' }}
                  >
                    <LanguageFade as="span">
                      {itemContent.description}
                    </LanguageFade>
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
