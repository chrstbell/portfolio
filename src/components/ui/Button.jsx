import { motion } from 'framer-motion'

const variants = {
  primary:
    'text-white shadow-lg',
  secondary:
    'bg-transparent shadow-sm',
  ghost:
    'shadow-sm',
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
  const base = 'inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 font-body text-sm font-semibold transition-colors sm:px-6 sm:py-3 sm:text-base'

  const variantStyles = {
    primary: {
      background: 'var(--accent-blue-dark, #6E8FB5)',
      color: '#fff',
    },
    secondary: {
      border: '1px solid var(--line)',
      background: 'transparent',
      color: 'var(--fg)',
    },
    ghost: {
      border: '1px solid var(--line)',
      background: 'var(--chip-bg)',
      color: 'var(--fg)',
    },
  }

  const motionProps = {
    whileHover: { scale: 1.03, y: -1 },
    whileTap: { scale: 0.97 },
    transition: { type: 'spring', stiffness: 400, damping: 18 },
  }

  const allClasses = `${base} ${variants[variant] || ''} ${className}`

  if (href) {
    return (
      <motion.a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={allClasses}
        style={variantStyles[variant]}
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
      className={allClasses}
      style={variantStyles[variant]}
      {...motionProps}
      {...props}
    >
      {children}
    </motion.button>
  )
}
