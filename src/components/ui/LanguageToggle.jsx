import { motion } from 'framer-motion'
import { useLanguage } from '../../context/LanguageContext'

export default function LanguageToggle({ className = '' }) {
  const { language, toggleLanguage } = useLanguage()

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label={language === 'id' ? 'Switch to English' : 'Ganti ke Bahasa Indonesia'}
      className={`relative flex rounded-full p-1 ${className}`}
      style={{ background: 'var(--chip-bg)' }}
    >
      <motion.span
        layoutId="language-pill"
        className="absolute inset-y-1 w-[calc(50%-2px)] rounded-full shadow-sm"
        style={{
          left: language === 'id' ? 4 : 'calc(50% + 0px)',
          background: 'var(--bg)',
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
      />
      <span
        className="relative z-10 px-2 py-1 font-body text-[10px] font-semibold transition-colors sm:px-3 sm:text-xs"
        style={{
          color: language === 'id' ? 'var(--fg)' : 'var(--muted)',
        }}
      >
        ID
      </span>
      <span
        className="relative z-10 px-2 py-1 font-body text-[10px] font-semibold transition-colors sm:px-3 sm:text-xs"
        style={{
          color: language === 'en' ? 'var(--fg)' : 'var(--muted)',
        }}
      >
        EN
      </span>
    </button>
  )
}
