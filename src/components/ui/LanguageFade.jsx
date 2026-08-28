import { AnimatePresence, motion } from 'framer-motion'
import { useLanguage } from '../../context/LanguageContext'

const motionMap = {
  span: motion.span,
  p: motion.p,
  h2: motion.h2,
  h3: motion.h3,
  h4: motion.h4,
  div: motion.div,
}

export function LanguageFade({ as = 'span', children, className = '', ...props }) {
  const { language } = useLanguage()
  const MotionEl = motionMap[as] || motion.span

  return (
    <AnimatePresence mode="wait">
      <MotionEl
        key={language}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className={className}
        {...props}
      >
        {children}
      </MotionEl>
    </AnimatePresence>
  )
}
