import { motion } from 'framer-motion'
import { useLanguage } from '../../context/LanguageContext'

export default function LanguageToggle({ scrolled = false, className = '' }) {
  const { language, toggleLanguage } = useLanguage()

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label={language === 'id' ? 'Switch to English' : 'Ganti ke Bahasa Indonesia'}
      className={`relative flex rounded-full p-1 ${
        scrolled ? 'bg-primary-blue/10' : 'bg-white/15'
      } ${className}`}
    >
      <motion.span
        layoutId="language-pill"
        className="absolute inset-y-1 w-[calc(50%-2px)] rounded-full bg-white shadow-sm"
        style={{ left: language === 'id' ? 4 : 'calc(50% + 0px)' }}
        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
      />
      <span
        className={`relative z-10 px-3 py-1 font-body text-xs font-semibold transition-colors ${
          language === 'id'
            ? scrolled
              ? 'text-primary-blue'
              : 'text-primary-blue'
            : scrolled
              ? 'text-slate-500'
              : 'text-white/70'
        }`}
      >
        ID
      </span>
      <span
        className={`relative z-10 px-3 py-1 font-body text-xs font-semibold transition-colors ${
          language === 'en'
            ? scrolled
              ? 'text-primary-blue'
              : 'text-primary-blue'
            : scrolled
              ? 'text-slate-500'
              : 'text-white/70'
        }`}
      >
        EN
      </span>
    </button>
  )
}
