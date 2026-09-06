import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Phone, Camera, Link, Globe } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { useReducedMotion } from '../hooks/useReducedMotion'
import SectionHeading from './ui/SectionHeading'
import { LanguageFade } from './ui/LanguageFade'
import Button from './ui/Button'

const contactLinks = [
  {
    id: 'email',
    label: 'christabelaurelia021@gmail.com',
    href: 'mailto:christabelaurelia021@gmail.com',
    icon: Mail,
  },
  {
    id: 'phone',
    label: '+6288223616523',
    href: 'https://wa.me/6288223616523',
    icon: Phone,
  },
  {
    id: 'instagram',
    label: '@christabelaurelia',
    href: 'https://instagram.com/christabelaurelia',
    icon: Camera,
  },
  {
    id: 'linkedin',
    label: 'linkedin.com/in/christabelaurelia',
    href: 'https://linkedin.com/in/christabelaurelia',
    icon: Link,
  },
]

export default function Contact() {
  const { content } = useLanguage()
  const reduced = useReducedMotion()
  const footerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ['start end', 'end end'],
  })
  const easterEggY = useTransform(scrollYProgress, [0, 1], [40, 0])
  const easterEggRotate = useTransform(scrollYProgress, [0, 1], [0, 360])

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-primary-blue py-20 sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0 grid-texture opacity-40" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={
            <LanguageFade as="span">{content.contact.heading}</LanguageFade>
          }
          subtitle={
            <LanguageFade as="span">{content.contact.subtext}</LanguageFade>
          }
          align="center"
          className="mb-12 [&_h2]:text-white [&_p]:text-white/80"
        />

        <div className="mx-auto grid max-w-2xl gap-4 sm:grid-cols-2">
          {contactLinks.map((link, i) => {
            const Icon = link.icon
            return (
              <motion.div
                key={link.id}
                initial={reduced ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
              >
                <Button
                  href={link.href}
                  variant="ghost"
                  className="w-full justify-start gap-3 text-left"
                  data-cursor-hover
                >
                  <Icon size={20} className="shrink-0 text-primary-gold" />
                  <span className="truncate text-sm sm:text-base">{link.label}</span>
                </Button>
              </motion.div>
            )
          })}
        </div>

        <footer
          ref={footerRef}
          className="relative mt-16 border-t border-white/15 pt-8 text-center"
        >
          <p className="font-body text-sm text-white/60">
            {content.contact.copyright}
          </p>
          {!reduced && (
            <motion.div
              style={{ y: easterEggY, rotate: easterEggRotate }}
              className="pointer-events-none absolute -top-6 right-4 text-3xl sm:right-8"
              aria-hidden="true"
            >
              ✨🎨
            </motion.div>
          )}
          <motion.p
            className="mt-2 font-body text-xs text-white/40"
            animate={reduced ? undefined : { opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <LanguageFade as="span">{content.contact.footerNote}</LanguageFade>
          </motion.p>
        </footer>
      </div>
    </section>
  )
}
