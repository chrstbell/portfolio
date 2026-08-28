import { ExternalLink, GitBranch } from 'lucide-react'
import { motion } from 'framer-motion'
import { useLanguage } from '../../context/LanguageContext'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import Button from '../ui/Button'
import PhotoStack from '../ui/PhotoStack'
import { LanguageFade } from '../ui/LanguageFade'

export default function FeaturedProject({ project, index = 0 }) {
  const { content } = useLanguage()
  const reduced = useReducedMotion()
  const reversed = index % 2 === 1
  const projectContent = content.projects.featured[project.id]
  const labels = content.projects.labels

  return (
    <motion.article
      initial={reduced ? false : { opacity: 0, y: 40, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className="overflow-hidden rounded-[2rem] bg-white shadow-xl shadow-primary-blue/5 ring-1 ring-slate-100"
    >
      <div
        className={`grid lg:grid-cols-2 ${reversed ? 'lg:[direction:rtl]' : ''}`}
      >
        <div
          className={`${project.accent} flex items-center justify-center p-8 sm:p-12 lg:[direction:ltr]`}
        >
          <div className="w-full max-w-md overflow-hidden rounded-2xl bg-white/60 p-4 shadow-lg backdrop-blur-sm">
            {project.images?.length > 0 ? (
              <PhotoStack images={project.images} />
            ) : (
              <div className="flex aspect-[4/3] items-center justify-center rounded-xl bg-gradient-to-br from-white to-primary-blue/5">
                <div className="text-center">
                  <span className="font-heading text-5xl font-extrabold text-primary-blue/20">
                    {project.number}
                  </span>
                  <p className="mt-2 font-heading text-2xl font-bold text-primary-blue">
                    {project.title}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col justify-center p-6 sm:p-10 lg:[direction:ltr]">
          <LanguageFade
            as="span"
            className="mb-2 font-heading text-sm font-bold text-primary-gold"
          >
            {labels.portfolioTitle(project.number)}
          </LanguageFade>
          <LanguageFade
            as="span"
            className="mb-4 inline-block w-fit rounded-full bg-primary-blue/10 px-3 py-1 font-body text-xs font-medium text-primary-blue"
          >
            {projectContent.label}
          </LanguageFade>

          <div className="space-y-4 font-body text-sm leading-relaxed text-slate-600 sm:text-base">
            <div>
              <LanguageFade as="h4" className="mb-1 font-semibold text-slate-900">
                {labels.problem}
              </LanguageFade>
              <LanguageFade as="p">{projectContent.problem}</LanguageFade>
            </div>
            <div>
              <LanguageFade as="h4" className="mb-1 font-semibold text-slate-900">
                {labels.process}
              </LanguageFade>
              <LanguageFade as="p">{projectContent.process}</LanguageFade>
            </div>
            {projectContent.versions && (
              <div>
                <LanguageFade as="h4" className="mb-2 font-semibold text-slate-900">
                  {labels.versionHistory}
                </LanguageFade>
                <ul className="space-y-2">
                  {projectContent.versions.map((v) => (
                    <li key={v.title} className="rounded-xl bg-slate-50 p-3">
                      <span className="font-medium text-slate-800">{v.title}:</span>{' '}
                      <LanguageFade as="span">{v.description}</LanguageFade>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div>
              <LanguageFade as="h4" className="mb-1 font-semibold text-slate-900">
                {labels.result}
              </LanguageFade>
              <LanguageFade as="p">{projectContent.result}</LanguageFade>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button href={project.figmaUrl}>
              <LanguageFade as="span">{labels.viewFigma}</LanguageFade>
              <ExternalLink size={16} />
            </Button>
            <Button href={project.githubUrl} variant="secondary">
              <LanguageFade as="span">{labels.viewGithub}</LanguageFade>
              <GitBranch size={16} />
            </Button>
          </div>
        </div>
      </div>
    </motion.article>
  )
}
