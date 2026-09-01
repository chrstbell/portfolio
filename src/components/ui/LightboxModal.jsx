import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { useLanguage } from '../../context/LanguageContext'

export default function LightboxModal({
  isOpen,
  onClose,
  title,
  children,
  size = 'default',
  ariaLabel,
}) {
  const reduced = useReducedMotion()
  const { content } = useLanguage()

  useEffect(() => {
    if (!isOpen) return undefined

    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, onClose])

  const sizeClass =
    size === 'wide'
      ? 'max-w-5xl'
      : size === 'full'
        ? 'max-w-6xl'
        : 'max-w-3xl'

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={ariaLabel || title || content.common.closeModal}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduced ? 0 : 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0"
            style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)' }}
            aria-hidden="true"
          />

          <motion.div
            initial={reduced ? false : { opacity: 0, scale: 0.92, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.95, y: 8 }}
            transition={{ duration: reduced ? 0 : 0.28, ease: 'easeOut' }}
            className={`relative z-10 flex max-h-[90vh] w-full flex-col overflow-hidden rounded-3xl shadow-2xl ${sizeClass}`}
            style={{
              background: 'var(--bg)',
              border: '1px solid var(--line)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="flex shrink-0 items-start justify-between gap-4 px-5 py-4 sm:px-6"
              style={{ borderBottom: '1px solid var(--line)' }}
            >
              {title ? (
                <h3
                  className="font-heading text-lg font-bold sm:text-xl"
                  style={{ color: 'var(--fg)' }}
                >
                  {title}
                </h3>
              ) : (
                <span />
              )}
              <button
                type="button"
                onClick={onClose}
                className="rounded-full p-2 transition-colors"
                style={{ color: 'var(--muted)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--fg)'
                  e.currentTarget.style.background = 'var(--chip-bg)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--muted)'
                  e.currentTarget.style.background = 'transparent'
                }}
                aria-label={content.common.closeModal}
              >
                <X size={20} />
              </button>
            </div>

            <div className="min-h-0 flex-1 overflow-y-auto p-5 sm:p-6">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
