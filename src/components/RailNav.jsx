import { NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Home, User, FolderOpen, Award, Briefcase, Mail, Sun, Moon, Download } from 'lucide-react'
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

export default function RailNav({ miniProfileVisible = true }) {
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
              href={`${import.meta.env.BASE_URL}cv.pdf`}
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

      {/* Mobile bottom bar */}
      <nav
        className="fixed bottom-0 inset-x-0 z-50 border-t md:hidden"
        style={{
          background: 'var(--rail-bg)',
          borderColor: 'var(--rail-border)',
          backdropFilter: 'blur(12px)',
        }}
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-around px-2 py-2">
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `flex flex-col items-center gap-0.5 rounded-xl px-3 py-1.5 transition-colors ${
                    isActive ? 'bg-accent-blue/15' : ''
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <Icon
                      size={18}
                      style={{ color: isActive ? 'var(--color-accent-blue-dark)' : 'var(--muted)' }}
                    />
                    <span
                      className="font-body text-[10px] font-medium"
                      style={{
                        color: isActive ? 'var(--color-accent-blue-dark)' : 'var(--muted)',
                      }}
                    >
                      {language === 'id' ? item.labelId : item.labelEn}
                    </span>
                  </>
                )}
              </NavLink>
            )
          })}
          <button
            type="button"
            onClick={toggleTheme}
            className="flex flex-col items-center gap-0.5 rounded-xl px-3 py-1.5"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? (
              <Sun size={18} style={{ color: 'var(--muted)' }} />
            ) : (
              <Moon size={18} style={{ color: 'var(--muted)' }} />
            )}
            <span
              className="font-body text-[10px] font-medium"
              style={{ color: 'var(--muted)' }}
            >
              {theme === 'dark' ? 'Light' : 'Dark'}
            </span>
          </button>
        </div>
      </nav>
    </>
  )
}
