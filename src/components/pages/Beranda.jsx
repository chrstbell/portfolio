import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Clock, Clapperboard, Palette } from 'lucide-react'
import { SiGmail, SiFigma, SiLaravel, SiJavascript, SiMysql, SiHtml5, SiCss, SiGit, SiGithub, SiLaragon, SiPhp } from 'react-icons/si'
import { FaLinkedin, FaInstagram } from 'react-icons/fa'
import { useLanguage } from '../../context/LanguageContext'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { useMiniProfile } from '../../context/MiniProfileContext'
import { LanguageFade } from '../ui/LanguageFade'
import ToolKeycap from '../ui/ToolKeycap'
import { currentWork } from '../../data/currentWork'

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
}

const socialLinks = [
  { icon: SiGmail, href: 'mailto:christabelaurelia021@gmail.com', label: 'Email' },
  { icon: FaLinkedin, href: 'https://linkedin.com/in/christabelaurelia', label: 'LinkedIn' },
  { icon: FaInstagram, href: 'https://instagram.com/christabelaurelia', label: 'Instagram' },
]

const tools = [
  { icon: SiFigma, label: 'Figma' },
  { icon: SiHtml5, label: 'HTML' },
  { icon: SiCss, label: 'CSS' },
  { icon: SiJavascript, label: 'JavaScript' },
  { icon: SiGit, label: 'Git' },
  { icon: SiGithub, label: 'GitHub' },
  { icon: SiLaragon, label: 'Laragon' },
  { icon: SiPhp, label: 'PHP' },
  { icon: SiLaravel, label: 'Laravel' },
  { icon: SiMysql, label: 'MySQL' },
  { icon: Palette, label: 'Canva' },
  { icon: Clapperboard, label: 'CapCut' },
]

const statusLabel = {
  id: { ongoing: 'Sedang Berlangsung', upcoming: 'Akan Datang' },
  en: { ongoing: 'In Progress', upcoming: 'Upcoming' },
}

const selectedWork = [
  { slug: 'hozof', label: 'HOZOF', tag: { id: 'Pengembangan Full-Stack', en: 'Full-Stack Development' } },
  { slug: 'hero', label: 'HERO', tag: { id: 'Pengembangan Full-Stack', en: 'Full-Stack Development' } },
  { slug: 'laundry', label: 'LAUNDRY', tag: { id: 'Redesign & Pengembangan Fitur', en: 'Redesign & Feature Enhancement' } },
]

export default function Beranda() {
  const { content, language } = useLanguage()
  const reduced = useReducedMotion()
  const { setIsVisible } = useMiniProfile()
  const nameRef = useRef(null)

  useEffect(() => {
    const el = nameRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(!entry.isIntersecting),
      { threshold: 0.1 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [setIsVisible])

  const sl = statusLabel[language] || statusLabel.id

  const sectionLabel = (idText, enText) => (
    <LanguageFade as="span">
      {language === 'id' ? idText : enText}
    </LanguageFade>
  )

  return (
    <div className="flex min-h-screen items-center justify-center px-6 py-24 pl-20 sm:px-8 sm:pl-24 md:pl-28 lg:pl-32">
      <motion.div
        variants={reduced ? undefined : stagger}
        initial={reduced ? false : 'hidden'}
        animate="show"
        className="w-full max-w-xl"
      >
        {/* Avatar */}
        <motion.div variants={reduced ? undefined : fadeUp} className="mb-6">
          <div
            className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full text-lg font-bold"
            style={{
              background: 'var(--chip-bg)',
              border: '1px solid var(--line)',
            }}
          >
            {content.hero.avatarUrl ? (
              <img
                src={content.hero.avatarUrl}
                alt="Christabel Aurelia R."
                className="h-full w-full object-cover"
              />
            ) : (
              <span style={{ color: 'var(--accent-blue-dark, #6E8FB5)' }}>CA</span>
            )}
          </div>
        </motion.div>

        {/* Badges */}
        <motion.div
          variants={reduced ? undefined : fadeUp}
          className="mb-6 flex flex-wrap items-center gap-3"
        >
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-body text-xs font-medium"
            style={{
              border: '1px solid var(--line)',
              color: 'var(--fg-secondary)',
            }}
          >
            <MapPin size={12} />
            {content.hero.badge1}
          </span>
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-body text-xs font-medium"
            style={{
              border: '1px solid var(--line)',
              color: 'var(--fg-secondary)',
            }}
          >
            <Clock size={12} />
            {content.hero.badge2}
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          ref={nameRef}
          variants={reduced ? undefined : fadeUp}
          className="mb-3 font-heading text-4xl font-bold leading-tight sm:text-5xl"
          style={{ color: 'var(--fg)' }}
        >
          <LanguageFade as="span">{content.hero.greeting}</LanguageFade>
        </motion.h1>

        {/* Title */}
        <motion.p
          variants={reduced ? undefined : fadeUp}
          className="mb-6 font-body text-base font-medium sm:text-lg"
          style={{ color: 'var(--fg-secondary)' }}
        >
          <LanguageFade as="span">
            UI/UX Designer · Front-End Developer · Graphic Designer
          </LanguageFade>
        </motion.p>

        {/* Bio */}
        <motion.p
          variants={reduced ? undefined : fadeUp}
          className="mb-8 max-w-md font-body text-sm leading-relaxed sm:text-base"
          style={{ color: 'var(--muted)' }}
        >
          <LanguageFade as="span">
            {content.hero.bio}
          </LanguageFade>
        </motion.p>

        {/* Social icons */}
        <motion.div variants={reduced ? undefined : fadeUp} className="mb-10 flex gap-3">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-10 w-10 items-center justify-center rounded-xl transition-colors"
              style={{
                border: '1px solid var(--line)',
                color: 'var(--fg-secondary)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent-blue-dark, #6E8FB5)'
                e.currentTarget.style.color = 'var(--accent-blue-dark, #6E8FB5)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--line)'
                e.currentTarget.style.color = 'var(--fg-secondary)'
              }}
            >
              <Icon size={18} />
            </a>
          ))}
        </motion.div>

        {/* Tools — keycap style */}
        <motion.div variants={reduced ? undefined : fadeUp} className="mb-12">
          <h3
            className="mb-4 font-heading text-sm font-bold uppercase tracking-widest"
            style={{ color: 'var(--muted)' }}
          >
            {sectionLabel('Keahlian', 'Skills')}
          </h3>
          <div className="flex flex-wrap gap-3">
            {tools.map((tool) => (
              <ToolKeycap key={tool.label} icon={tool.icon} label={tool.label} />
            ))}
          </div>
        </motion.div>

        {/* Sedang Dikerjakan / Currently Working On */}
        {currentWork.length > 0 && (
          <motion.div variants={reduced ? undefined : fadeUp} className="mb-12">
            <h3
              className="mb-4 font-heading text-sm font-bold uppercase tracking-widest"
              style={{ color: 'var(--muted)' }}
            >
              {sectionLabel('Sedang Dikerjakan', 'Currently Working On')}
            </h3>
            <div className="relative">
              <div
                className="absolute bottom-0 left-[17px] top-0 w-0.5"
                style={{ background: 'var(--line)' }}
                aria-hidden="true"
              />
              <div className="space-y-1">
                {currentWork.map((item, i) => {
                  const title = language === 'id' ? item.id_title : item.en_title
                  const label = sl[item.status]
                  const isOngoing = item.status === 'ongoing'
                  return (
                    <motion.div
                      key={item.id}
                      initial={reduced ? false : { opacity: 0, x: 12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-40px' }}
                      transition={{ duration: 0.35, delay: i * 0.08 }}
                      className="group relative flex items-center gap-4 rounded-xl px-3 py-2.5 transition-colors"
                      style={{ cursor: 'default' }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'var(--chip-bg)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'transparent'
                      }}
                    >
                      <div className="relative z-10 flex shrink-0 items-center justify-center" style={{ width: '10px', height: '10px' }}>
                        {isOngoing && (
                          <div
                            className="absolute inset-0 rounded-full"
                            style={{
                              boxShadow: '0 0 0 4px var(--accent-blue)',
                              opacity: 0.15,
                            }}
                          />
                        )}
                        <div
                          className="h-2.5 w-2.5 rounded-full"
                          style={{
                            background: isOngoing
                              ? 'var(--accent-blue-dark, #6E8FB5)'
                              : 'var(--muted)',
                          }}
                        />
                      </div>
                      <span
                        className="flex-1 font-body text-sm font-medium"
                        style={{ color: 'var(--fg)' }}
                      >
                        {title}
                      </span>
                      <span
                        className="shrink-0 rounded-full px-2.5 py-0.5 font-body text-[10px] font-semibold"
                        style={
                          isOngoing
                            ? {
                                background: 'var(--accent-blue)',
                                color: 'var(--accent-blue-dark, #6E8FB5)',
                              }
                            : {
                                border: '1px solid var(--line-strong)',
                                color: 'var(--muted)',
                              }
                        }
                      >
                        {label}
                      </span>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </motion.div>
        )}

        {/* Karya Pilihan / Selected Work */}
        <motion.div variants={reduced ? undefined : fadeUp}>
          <h3
            className="mb-3 font-heading text-sm font-bold uppercase tracking-widest"
            style={{ color: 'var(--muted)' }}
          >
            {sectionLabel('Karya Pilihan', 'Selected Work')}
          </h3>
          <div className="flex flex-col">
            {selectedWork.map((p, i) => (
              <a
                key={p.slug}
                href={`/proyek/${p.slug}`}
                className="work-row group"
              >
                <div className="work-row-left">
                  <span className="work-row-index">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="work-row-title">{p.label}</span>
                  <span className="work-row-tag">{language === 'id' ? p.tag.id : p.tag.en}</span>
                </div>
                <span className="work-row-arrow">→</span>
              </a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
