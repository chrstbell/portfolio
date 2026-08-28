import { ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'
import { useLanguage } from '../../context/LanguageContext'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { useTilt } from '../../hooks/useTilt'
import Button from '../ui/Button'
import { LanguageFade } from '../ui/LanguageFade'
import Card from '../ui/Card'

export default function ProjectCard({ project, index = 0 }) {
  const { content } = useLanguage()
  const reduced = useReducedMotion()
  const { ref, onMouseMove, onMouseLeave } = useTilt(reduced ? 0 : 6)
  const projectContent = content.projects.coursework[project.id]
  const labels = content.projects.labels

  return (
    <Card delay={index * 0.08} hover={false} className="flex h-full flex-col">
      <div
        ref={ref}
        onMouseMove={reduced ? undefined : onMouseMove}
        onMouseLeave={reduced ? undefined : onMouseLeave}
        className="mb-5 overflow-hidden rounded-2xl bg-gradient-to-br from-primary-blue/10 to-lavender/20 transition-transform duration-300 ease-out"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="aspect-video overflow-hidden">
      <img
      src={project.image}
      alt={project.title}
      className="h-full w-full object-cover"
    />
  </div>
</div>

      <LanguageFade
        as="span"
        className="mb-2 inline-block w-fit rounded-full bg-primary-gold/20 px-3 py-1 font-body text-xs font-semibold text-primary-blue"
      >
        {projectContent.badge}
      </LanguageFade>
      <h3 className="mb-2 font-heading text-xl font-bold text-slate-900">
        {project.title}
      </h3>
      <p className="mb-5 flex-1 font-body text-sm leading-relaxed text-slate-600">
        <LanguageFade as="span">{projectContent.description}</LanguageFade>
      </p>
      <Button href={project.figmaUrl} variant="secondary" className="w-full sm:w-auto">
        <LanguageFade as="span">{labels.viewFigma}</LanguageFade>
        <ExternalLink size={16} />
      </Button>
    </Card>
  )
}
