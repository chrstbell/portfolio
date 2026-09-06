import { motion } from 'framer-motion'
import { FaWhatsapp, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import { useLanguage } from '../../context/LanguageContext'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import SectionHeading from '../ui/SectionHeading'
import { LanguageFade } from '../ui/LanguageFade'

const contactLinks = [
  {
    id: 'email',
    label: 'christabelaurelia021@gmail.com',
    href: 'mailto:christabelaurelia021@gmail.com',
    icon: SiGmail,
  },
  {
    id: 'phone',
    label: '+6288223616523',
    href: 'https://wa.me/6288223616523',
    icon: FaWhatsapp,
  },
  {
    id: 'instagram',
    label: '@christabelaurelia',
    href: 'https://instagram.com/christabelaurelia',
    icon: FaInstagram,
  },
  {
    id: 'linkedin',
    label: 'linkedin.com/in/christabelaurelia',
    href: 'https://linkedin.com/in/christabelaurelia',
    icon: FaLinkedin,
  },
]

export default function Kontak() {
  const { content } = useLanguage()
  const reduced = useReducedMotion()

  return (
    <div className="flex min-h-screen flex-col px-4 pb-24 pt-20 md:pl-20 sm:px-6 sm:pl-24 md:pl-28 lg:px-8 lg:pl-32">
      <div className="flex flex-1 flex-col justify-center">
        <div className="mx-auto max-w-2xl">
          <SectionHeading
            title={
              <LanguageFade as="span">
                {content.contact.heading}
              </LanguageFade>
            }
            subtitle={
              <LanguageFade as="span">
                {content.contact.subtext}
              </LanguageFade>
            }
            className="mb-12"
          />

          <div className="grid gap-3 sm:grid-cols-2">
            {contactLinks.map((link, i) => {
              const Icon = link.icon
              return (
                <motion.a
                  key={link.id}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={reduced ? false : { opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.35 }}
                  className="flex items-center gap-3 rounded-xl px-4 py-3 transition-colors"
                  style={{
                    border: '1px solid var(--line)',
                    background: 'var(--chip-bg)',
                    color: 'var(--fg)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent-blue-dark, #6E8FB5)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--line)'
                  }}
                >
                  <Icon
                    size={18}
                    style={{ color: 'var(--accent-blue-dark, #6E8FB5)' }}
                    className="shrink-0"
                  />
                  <span
                    className="truncate font-body text-sm"
                    style={{ color: 'var(--fg-secondary)' }}
                  >
                    {link.label}
                  </span>
                </motion.a>
              )
            })}
          </div>
        </div>
      </div>

      <footer
        className="border-t pt-8 text-center"
        style={{ borderColor: 'var(--line)' }}
      >
        <p className="font-body text-sm" style={{ color: 'var(--muted)' }}>
          {content.contact.copyright}
        </p>
      </footer>
    </div>
  )
}
