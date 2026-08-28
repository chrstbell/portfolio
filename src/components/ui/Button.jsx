import { motion } from 'framer-motion'

const variants = {
  primary:
    'bg-primary-gold text-white shadow-lg shadow-primary-gold/25 hover:shadow-primary-gold/40',
  secondary:
    'border-2 border-primary-blue bg-transparent text-primary-blue hover:bg-primary-blue hover:text-white',
  ghost:
    'bg-white/90 text-primary-blue shadow-md hover:bg-white border border-primary-blue/10',
}

export default function Button({
  children,
  href,
  variant = 'primary',
  className = '',
  external = true,
  onClick,
  type = 'button',
  ...props
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 font-body text-sm font-semibold transition-colors sm:px-6 sm:py-3 sm:text-base ${variants[variant]} ${className}`

  const motionProps = {
    whileHover: { scale: 1.04, y: -2 },
    whileTap: { scale: 0.97 },
    transition: { type: 'spring', stiffness: 400, damping: 18 },
  }

  if (href) {
    return (
      <motion.a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={classes}
        {...motionProps}
        {...props}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={classes}
      {...motionProps}
      {...props}
    >
      {children}
    </motion.button>
  )
}
