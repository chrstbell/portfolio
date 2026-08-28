import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import { educationData } from '../data/education'
import { useLanguage } from '../context/LanguageContext'
import { useReducedMotion } from '../hooks/useReducedMotion'
import SectionHeading from './ui/SectionHeading'
import { LanguageFade } from './ui/LanguageFade'
import Card from './ui/Card'

export default function Education() {
  const { content } = useLanguage()
  const reduced = useReducedMotion()

  return (
    <section
      id="education"
      className="relative overflow-hidden bg-mint/35 py-20 sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0 grid-texture-subtle" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={
            <LanguageFade as="span">{content.education.eyebrow}</LanguageFade>
          }
          title={
            <LanguageFade as="span">{content.education.title}</LanguageFade>
          }
          align="center"
          className="mb-12 sm:mb-16"
        />

        <div className="mx-auto grid max-w-3xl gap-6">
          {educationData.map((item, i) => {
            const itemContent = content.education.items[item.id]
            return (
              <Card key={item.id} delay={i * 0.1}>
                <div className="flex items-start gap-4">
                  <motion.div
                    whileHover={
                      reduced
                        ? undefined
                        : { rotate: [0, -8, 8, 0], transition: { duration: 0.35 } }
                    }
                    className="rounded-2xl bg-white p-3 shadow-sm"
                  >
                    <GraduationCap className="h-6 w-6 text-primary-blue" />
                  </motion.div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-slate-900">
                      {item.institution}
                    </h3>
                    <p className="mt-1 font-body text-base text-slate-700">
                      <LanguageFade as="span">{itemContent.degree}</LanguageFade>
                    </p>
                    <p className="mt-2 font-body text-sm font-medium text-primary-blue">
                      {item.period}
                      {itemContent.detail && (
                        <span className="ml-2 rounded-full bg-primary-gold/25 px-2 py-0.5 text-primary-blue">
                          <LanguageFade as="span">{itemContent.detail}</LanguageFade>
                        </span>
                      )}
                    </p>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
