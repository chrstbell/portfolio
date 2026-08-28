import { useEffect, useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { useActiveSection } from '../hooks/useActiveSection'
import LanguageToggle from './ui/LanguageToggle'
import { LanguageFade } from './ui/LanguageFade'

function NavLink({ link, scrolled, active, onNavigate, className = '' }) {
  const isActive = active === link.href.slice(1)

  return (
    <a
      href={link.href}
      onClick={(e) => {
        e.preventDefault()
        onNavigate(link.href)
      }}
      className={`relative rounded-full px-3 py-2 font-body text-sm font-medium transition-colors lg:px-4 ${className}`}
    >
      <LanguageFade as="span">{link.label}</LanguageFade>
      {isActive && (
        <motion.span
          layoutId="nav-active-indicator"
          className={`absolute inset-x-2 bottom-1 h-0.5 rounded-full ${
            scrolled ? 'bg-primary-gold' : 'bg-primary-gold'
          }`}
          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
        />
      )}
    </a>
  )
}

export default function Navbar() {
  const { content } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  const sectionIds = useMemo(
    () => ['hero', ...content.nav.links.map((link) => link.href.slice(1))],
    [content.nav.links],
  )

  const activeSection = useActiveSection(sectionIds)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const handleNav = (href) => {
    setOpen(false)
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  const desktopLinkClass = (href) => {
    const isActive = activeSection === href.slice(1)
    if (scrolled) {
      return isActive
        ? 'text-primary-gold'
        : 'text-slate-700 hover:bg-primary-blue/10 hover:text-primary-blue'
    }
    return isActive
      ? 'text-primary-gold'
      : 'text-white/90 hover:bg-white/10 hover:text-white'
  }

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 shadow-md shadow-primary-blue/5 backdrop-blur-md'
            : 'bg-transparent'
        }`}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault()
              handleNav('#hero')
            }}
            className={`font-heading text-lg font-bold tracking-wide transition-colors sm:text-xl ${
              activeSection === 'hero'
                ? 'text-primary-gold'
                : scrolled
                  ? 'text-primary-blue'
                  : 'text-white'
            }`}
          >
            CAR<span className="text-primary-gold">.</span>
          </a>

          <div className="hidden items-center gap-3 md:flex">
            <ul className="flex items-center gap-1">
              {content.nav.links.map((link) => (
                <li key={link.href}>
                  <NavLink
                    link={link}
                    scrolled={scrolled}
                    active={activeSection}
                    onNavigate={handleNav}
                    className={desktopLinkClass(link.href)}
                  />
                </li>
              ))}
            </ul>
            <LanguageToggle scrolled={scrolled} />
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <LanguageToggle scrolled={scrolled} />
            <button
              type="button"
              onClick={() => setOpen(!open)}
              className={`rounded-2xl p-2 ${
                scrolled ? 'text-primary-blue' : 'text-white'
              }`}
              aria-label={open ? content.common.closeMenu : content.common.openMenu}
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-primary-blue/95 backdrop-blur-sm md:hidden"
          >
            <motion.ul
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              className="flex h-full flex-col items-center justify-center gap-6"
            >
              {content.nav.links.map((link, i) => {
                const isActive = activeSection === link.href.slice(1)
                return (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault()
                        handleNav(link.href)
                      }}
                      className={`relative font-heading text-2xl font-bold transition-colors ${
                        isActive ? 'text-primary-gold' : 'text-white'
                      }`}
                    >
                      <LanguageFade as="span">{link.label}</LanguageFade>
                      {isActive && (
                        <motion.span
                          layoutId="nav-active-indicator-mobile"
                          className="absolute -bottom-2 left-0 right-0 mx-auto h-0.5 w-8 rounded-full bg-primary-gold"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </a>
                  </motion.li>
                )
              })}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
