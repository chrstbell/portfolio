import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useReducedMotion } from '../../hooks/useReducedMotion'

export default function CustomCursor() {
  const reduced = useReducedMotion()
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [hovering, setHovering] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (reduced) return undefined
    if (!window.matchMedia('(pointer: fine)').matches) return undefined

    document.body.classList.add('custom-cursor-active')

    const move = (e) => setPos({ x: e.clientX, y: e.clientY })
    const enter = () => setVisible(true)
    const leave = () => setVisible(false)

    const onOver = (e) => {
      const target = e.target.closest('a, button, [data-cursor-hover]')
      setHovering(Boolean(target))
    }

    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', onOver)
    document.body.addEventListener('mouseenter', enter)
    document.body.addEventListener('mouseleave', leave)

    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', onOver)
      document.body.removeEventListener('mouseenter', enter)
      document.body.removeEventListener('mouseleave', leave)
      document.body.classList.remove('custom-cursor-active')
    }
  }, [reduced])

  if (reduced) return null

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden mix-blend-difference md:block"
      animate={{
        x: pos.x - (hovering ? 20 : 8),
        y: pos.y - (hovering ? 20 : 8),
        width: hovering ? 40 : 16,
        height: hovering ? 40 : 16,
        opacity: visible ? 1 : 0,
      }}
      transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.4 }}
    >
      <div className="h-full w-full rounded-full border-2 border-white bg-primary-gold/80" />
    </motion.div>
  )
}
