import { motion } from 'framer-motion'
import { expertiseAreas } from '../data/expertise'
import { useLanguage } from '../context/LanguageContext'
import { useReducedMotion } from '../hooks/useReducedMotion'
import SectionHeading from './ui/SectionHeading'
import { LanguageFade } from './ui/LanguageFade'
import Card from './ui/Card'
import ShapeDivider from './ui/ShapeDivider'

export default function Expertise() {
  const { content } = useLanguage()
  const reduced = useReducedMotion()

  return (
    <>
      <section
        id="expertise"
        className="relative overflow-hidden bg-lavender/30 py-20 sm:py-28"
      >
        <div className="pointer-events-none absolute inset-0 grid-texture-subtle" />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={
              <LanguageFade as="span">{content.expertise.eyebrow}</LanguageFade>
            }
            title={
              <LanguageFade as="span">{content.expertise.title}</LanguageFade>
            }
            subtitle={
              <LanguageFade as="span">{content.expertise.subtitle}</LanguageFade>
            }
            align="center"
            className="mb-12 sm:mb-16"
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
            {expertiseAreas.map((area, i) => {
              const Icon = area.icon
              const areaContent = content.expertise.areas[area.id]
              return (
                <Card key={area.id} delay={i * 0.08} className={area.color}>
                  <motion.div
                    whileHover={
                      reduced
                        ? undefined
                        : { rotate: [0, -6, 6, 0], transition: { duration: 0.4 } }
                    }
                    className="mb-4 inline-flex rounded-2xl bg-white p-3 shadow-sm"
                  >
                    <Icon className={`h-7 w-7 ${area.accent}`} strokeWidth={2} />
                  </motion.div>
                  <h3 className="mb-3 font-heading text-xl font-bold text-slate-900 sm:text-2xl">
                    {area.title}
                  </h3>
                  <ul className="space-y-2">
                    {areaContent.skills.map((skill) => (
                      <li
                        key={skill}
                        className="flex items-start gap-2 font-body text-sm text-slate-700 sm:text-base"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-gold" />
                        <LanguageFade as="span">{skill}</LanguageFade>
                      </li>
                    ))}
                  </ul>
                </Card>
              )
            })}
          </div>
        </div>
      </section>
      <ShapeDivider fromColor="rgba(198,183,240,0.3)" toColor="#FFFFFF" variant="blob" flip />
    </>
  )
}
