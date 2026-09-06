import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Home, User, FolderOpen, Award, Briefcase, Mail, Sun, Moon, Download, Menu, X, ChevronRight } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { useTheme } from '../context/ThemeContext'
import LanguageToggle from './ui/LanguageToggle'

const navItems = [
  { to: '/', icon: Home, labelId: 'Beranda', labelEn: 'Home' },
  { to: '/tentang', icon: User, labelId: 'Tentang', labelEn: 'About' },
  { to: '/proyek', icon: FolderOpen, labelId: 'Proyek', labelEn: 'Projects' },
  { to: '/sertifikat', icon: Award, labelId: 'Sertifikat', labelEn: 'Certificates' },
  { to: '/experience', icon: Briefcase, labelId: 'Pengalaman', labelEn: 'Experience' },
  { to: '/kontak', icon: Mail, labelId: 'Kontak', labelEn: 'Contact' },
]

function MiniProfile({ isVisible, avatarUrl }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="flex items-center gap-2.5 px-1 pb-3"
        >
          <div
            className="flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full font-body text-xs font-bold"
            style={{
              background: 'var(--chip-bg)',
              border: '1px solid var(--line)',
              color: 'var(--accent-blue-dark, #6E8FB5)',
            }}
          >
            {avatarUrl ? (
              <img
                src={avatarUrl}
                alt="Christabel Aurelia R."
                className="h-full w-full object-cover"
              />
            ) : (
              'CA'
            )}
          </div>
          <div className="min-w-0">
            <p className="truncate font-body text-xs font-bold" style={{ color: 'var(--fg)' }}>
              Christabel A.
            </p>
            <p className="truncate font-body text-[10px]" style={{ color: 'var(--muted)' }}>
              Designer & Developer
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function MobileDrawer({ isOpen, onClose }) {
  const { language } = useLanguage()
  const { theme, toggleTheme } = useTheme()
  const location = useLocation()

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  useEffect(() => {
    onClose()
  }, [location.pathname])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-black/50 md:hidden"
            onClick={onClose}
          />
          <motion.nav
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed left-0 top-0 z-[70] flex h-full w-64 flex-col border-r py-6 md:hidden"
            style={{
              background: 'var(--rail-bg)',
              borderColor: 'var(--rail-border)',
            }}
            aria-label="Mobile navigation"
          >
            <div className="flex items-center justify-between px-6 pb-4">
              <span className="font-heading text-sm font-bold" style={{ color: 'var(--fg)' }}>
                Navigation
              </span>
              <button
                type="button"
                onClick={onClose}
                className="flex h-8 w-8 items-center justify-center rounded-lg transition-colors hover:bg-chip"
                aria-label="Close menu"
              >
                <X size={18} style={{ color: 'var(--muted)' }} />
              </button>
            </div>

            <div className="flex items-center gap-2 px-6 pb-5">
              <button
                type="button"
                onClick={toggleTheme}
                className="flex h-9 w-9 items-center justify-center rounded-full transition-colors"
                style={{ background: 'var(--chip-bg)', border: '1px solid var(--line)' }}
                aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {theme === 'dark' ? (
                  <Sun size={15} style={{ color: 'var(--muted)' }} />
                ) : (
                  <Moon size={15} style={{ color: 'var(--muted)' }} />
                )}
              </button>
              <LanguageToggle className="!rounded-full" />
              <a
                href={`${import.meta.env.BASE_URL}CV-CHRISTABELAURELIA.pdf`}
                download
                className="flex h-9 w-9 items-center justify-center rounded-full transition-colors"
                style={{ background: 'var(--chip-bg)', border: '1px solid var(--line)' }}
                aria-label="Download CV"
              >
                <Download size={15} style={{ color: 'var(--muted)' }} />
              </a>
            </div>

            <div className="mx-6 h-px" style={{ background: 'var(--line)' }} />

            <div className="flex flex-col gap-1 px-4 pt-4">
              {navItems.map((item) => {
                const Icon = item.icon
                const label = language === 'id' ? item.labelId : item.labelEn
                const isActive = location.pathname === item.to || (item.to !== '/' && location.pathname.startsWith(item.to))
                return (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.to === '/'}
                    className={({ isActive: active }) =>
                      `group flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors ${
                        active ? 'bg-accent-blue/15' : 'hover:bg-chip'
                      }`
                    }
                  >
                    {({ isActive: active }) => (
                      <>
                        <Icon
                          size={18}
                          style={{ color: active ? 'var(--accent-blue-dark)' : 'var(--muted)' }}
                        />
                        <span
                          className="flex-1 font-body text-sm font-medium"
                          style={{ color: active ? 'var(--accent-blue-dark)' : 'var(--fg-secondary)' }}
                        >
                          {label}
                        </span>
                        {active && (
                          <ChevronRight size={14} style={{ color: 'var(--accent-blue-dark)' }} />
                        )}
                      </>
                    )}
                  </NavLink>
                )
              })}
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  )
}

export default function RailNav({ miniProfileVisible = true }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { content, language } = useLanguage()
  const { theme, toggleTheme } = useTheme()
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <>
      {/* Desktop sidebar */}
      <nav
        className="fixed left-4 top-1/2 z-50 hidden -translate-y-1/2 md:flex"
        aria-label="Main navigation"
      >
        <div
          className="flex flex-col gap-1 rounded-2xl border px-3 py-3 backdrop-blur-md"
          style={{
            background: 'var(--rail-bg)',
            borderColor: 'var(--rail-border)',
          }}
        >
          <MiniProfile isVisible={isHome ? miniProfileVisible : true} avatarUrl={content.hero?.avatarUrl} />

          <div className="flex flex-col gap-0.5">
            {navItems.map((item) => {
              const Icon = item.icon
              const label = language === 'id' ? item.labelId : item.labelEn
              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `group relative flex items-center gap-2.5 rounded-xl px-2.5 py-2 transition-colors ${
                      isActive ? 'bg-accent-blue/15' : 'hover:bg-chip'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <Icon
                        size={18}
                        className={`shrink-0 transition-colors ${
                          isActive ? 'text-accent-blue-dark' : ''
                        }`}
                        style={{ color: isActive ? undefined : 'var(--muted)' }}
                      />
                      <span
                        className={`font-body text-xs font-medium transition-colors ${
                          isActive ? 'text-accent-blue-dark' : ''
                        }`}
                        style={{ color: isActive ? undefined : 'var(--fg-secondary)' }}
                      >
                        {label}
                      </span>
                      {isActive && (
                        <motion.span
                          layoutId="rail-active"
                          className="absolute inset-y-1 left-0 w-0.5 rounded-full bg-accent-blue"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              )
            })}
          </div>

          <div
            className="my-2 h-px"
            style={{ background: 'var(--line)' }}
          />

          <div className="flex items-center justify-center gap-1">
            <LanguageToggle className="!bg-transparent !p-1.5" />
            <a
              href={`${import.meta.env.BASE_URL}CV-CHRISTABELAURELIA.pdf`}
              download
              className="flex items-center justify-center rounded-lg p-1.5 transition-colors hover:bg-chip"
              aria-label="Download CV"
            >
              <Download size={16} style={{ color: 'var(--muted)' }} />
            </a>
            <button
              type="button"
              onClick={toggleTheme}
              className="flex items-center justify-center rounded-lg p-1.5 transition-colors hover:bg-chip"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? (
                <Sun size={16} style={{ color: 'var(--muted)' }} />
              ) : (
                <Moon size={16} style={{ color: 'var(--muted)' }} />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile hamburger button */}
      <button
        type="button"
        onClick={() => setMobileOpen(true)}
        className="fixed left-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-xl border backdrop-blur-md md:hidden"
        style={{
          background: 'var(--rail-bg)',
          borderColor: 'var(--rail-border)',
        }}
        aria-label="Open menu"
      >
        <Menu size={18} style={{ color: 'var(--fg)' }} />
      </button>

      {/* Mobile drawer */}
      <MobileDrawer isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  )
}
