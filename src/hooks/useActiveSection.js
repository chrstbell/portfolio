import { useEffect, useState } from 'react'

export function useActiveSection(sectionIds) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? '')

  useEffect(() => {
    if (sectionIds.length === 0) return undefined

    const ratios = new Map(sectionIds.map((id) => [id, 0]))

    const pickActive = () => {
      if (window.scrollY < 80) {
        setActiveSection('hero')
        return
      }

      let bestId = sectionIds[0]
      let bestRatio = 0

      for (const [id, ratio] of ratios) {
        if (id === 'hero') continue
        if (ratio > bestRatio) {
          bestRatio = ratio
          bestId = id
        }
      }

      if (bestRatio > 0) {
        setActiveSection(bestId)
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          ratios.set(entry.target.id, entry.intersectionRatio)
        }
        pickActive()
      },
      {
        rootMargin: '-35% 0px -35% 0px',
        threshold: [0, 0.15, 0.35, 0.5, 0.65, 0.85, 1],
      },
    )

    for (const id of sectionIds) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }

    const onScroll = () => {
      if (window.scrollY < 80) {
        setActiveSection('hero')
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    pickActive()

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [sectionIds])

  return activeSection
}
