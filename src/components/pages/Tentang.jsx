import { motion } from 'framer-motion'
import { GraduationCap, Users } from 'lucide-react'
import { educationData } from '../../data/education'
import { organizations } from '../../data/organizations'
import { useLanguage } from '../../context/LanguageContext'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import SectionHeading from '../ui/SectionHeading'
import { LanguageFade } from '../ui/LanguageFade'

export default function Tentang() {
  const { content, language } = useLanguage()
  const reduced = useReducedMotion()

  return (
    <div className="min-h-screen px-4 py-20 pl-20 sm:px-6 sm:pl-24 md:pl-28 lg:px-8 lg:pl-32">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          title={content.about.heading}
          className="mb-10"
        />

        <div className="space-y-5">
          {content.about.paragraphs.map((p, i) => (
            <motion.p
              key={i}
              initial={reduced ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="font-body text-base leading-relaxed sm:text-lg"
              style={{ color: 'var(--fg-secondary)' }}
            >
              <LanguageFade as="span">{p}</LanguageFade>
            </motion.p>
          ))}
        </div>

        <div className="mt-16">
          <SectionHeading
            title={
              <LanguageFade as="span">{content.education.title}</LanguageFade>
            }
            className="mb-8"
          />

          <div className="space-y-0">
            {educationData.map((item, i) => {
              const itemContent = content.education.items[item.id]
              return (
                <motion.div
                  key={item.id}
                  initial={reduced ? false : { opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-start gap-4 border-b py-5 last:border-b-0"
                  style={{ borderColor: 'var(--line)' }}
                >
                  <div
                    className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                    style={{ background: 'var(--chip-bg)' }}
                  >
                    <GraduationCap
                      size={18}
                      className="text-accent-blue-dark"
                    />
                  </div>
                  <div className="flex-1">
                    <h3
                      className="font-body text-sm font-bold sm:text-base"
                      style={{ color: 'var(--fg)' }}
                    >
                      {item.institution}
                    </h3>
                    <p
                      className="mt-0.5 font-body text-sm"
                      style={{ color: 'var(--fg-secondary)' }}
                    >
                      <LanguageFade as="span">{itemContent.degree}</LanguageFade>
                    </p>
                    <div className="mt-1.5 flex items-center gap-2">
                      <span
                        className="font-body text-xs font-medium"
                        style={{ color: 'var(--muted)' }}
                      >
                        {item.period}
                      </span>
                      {itemContent.detail && (
                        <span
                          className="rounded-full px-2 py-0.5 font-body text-xs font-semibold text-accent-blue-dark"
                          style={{ background: 'var(--chip-bg)' }}
                        >
                          <LanguageFade as="span">{itemContent.detail}</LanguageFade>
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Organizations */}
        <div className="mt-16">
          <SectionHeading
            title={
              <LanguageFade as="span">
                {content.organizations.title}
              </LanguageFade>
            }
            className="mb-8"
          />

          {/* Campus Organizations */}
          <div className="mb-10">
            <h4
              className="mb-4 font-body text-xs font-semibold uppercase tracking-widest"
              style={{ color: 'var(--muted)' }}
            >
              <LanguageFade as="span">
                {content.organizations.campusLabel}
              </LanguageFade>
            </h4>
            <div className="space-y-0">
              {organizations.campus.map((org, i) => (
                <motion.div
                  key={org.org}
                  initial={reduced ? false : { opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-start gap-4 border-b py-5 last:border-b-0"
                  style={{ borderColor: 'var(--line)' }}
                >
                  <div
                    className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                    style={{ background: 'var(--chip-bg)' }}
                  >
                    <Users
                      size={18}
                      style={{ color: 'var(--accent-blue-dark, #6E8FB5)' }}
                    />
                  </div>
                  <div className="flex-1">
                    <h3
                      className="font-body text-sm font-bold sm:text-base"
                      style={{ color: 'var(--fg)' }}
                    >
                      {org.org}
                    </h3>
                    <div className="mt-1 space-y-1">
                      {org.roles.map((role) => (
                        <div key={role.year + role.id_title} className="flex items-center gap-2">
                          <p
                            className="font-body text-sm"
                            style={{ color: 'var(--fg-secondary)' }}
                          >
                            <LanguageFade as="span">
                              {language === 'id' ? role.id_title : role.en_title}
                            </LanguageFade>
                          </p>
                          <span
                            className="font-body text-xs font-medium"
                            style={{ color: 'var(--muted)' }}
                          >
                            {role.year}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Event Committees */}
          <div>
            <h4
              className="mb-4 font-body text-xs font-semibold uppercase tracking-widest"
              style={{ color: 'var(--muted)' }}
            >
              <LanguageFade as="span">
                {content.organizations.committeeLabel}
              </LanguageFade>
            </h4>
            <div className="space-y-0">
              {organizations.committee.map((item, i) => (
                <motion.div
                  key={item.org}
                  initial={reduced ? false : { opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-start gap-4 border-b py-5 last:border-b-0"
                  style={{ borderColor: 'var(--line)' }}
                >
                  <div
                    className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                    style={{ background: 'var(--chip-bg)' }}
                  >
                    <Users
                      size={18}
                      style={{ color: 'var(--accent-blue-dark, #6E8FB5)' }}
                    />
                  </div>
                  <div className="flex-1">
                    <h3
                      className="font-body text-sm font-bold sm:text-base"
                      style={{ color: 'var(--fg)' }}
                    >
                      {item.org}
                    </h3>
                    <p
                      className="mt-0.5 font-body text-sm"
                      style={{ color: 'var(--fg-secondary)' }}
                    >
                      <LanguageFade as="span">
                        {language === 'id' ? item.id_role : item.en_role}
                      </LanguageFade>
                    </p>
                    <div className="mt-1.5">
                      <span
                        className="font-body text-xs font-medium"
                        style={{ color: 'var(--muted)' }}
                      >
                        {item.year}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
