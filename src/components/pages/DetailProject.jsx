import { useParams, Link } from 'react-router-dom'
import { ExternalLink, GitBranch, ArrowLeft, ImageOff } from 'lucide-react'
import { featuredProjects, courseworkProjects } from '../../data/projects'
import { useLanguage } from '../../context/LanguageContext'
import PhotoStack from '../ui/PhotoStack'
import Button from '../ui/Button'
import { LanguageFade } from '../ui/LanguageFade'

export default function DetailProject() {
  const { slug } = useParams()
  const { content, language } = useLanguage()

  const allProjects = [...featuredProjects, ...courseworkProjects]
  const project = allProjects.find((p) => p.id === slug)

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center px-4 pl-20 sm:pl-24 md:pl-28 lg:pl-32">
        <div className="text-center">
          <p className="font-body text-lg" style={{ color: 'var(--muted)' }}>
            Project not found.
          </p>
          <Link
            to="/proyek"
            className="mt-4 inline-flex items-center gap-2 font-body text-sm font-medium hover:opacity-80"
            style={{ color: 'var(--accent-blue-dark, #6E8FB5)' }}
          >
            <ArrowLeft size={16} />
            <LanguageFade as="span">
              {language === 'id' ? 'Kembali ke Proyek' : 'Back to Projects'}
            </LanguageFade>
          </Link>
        </div>
      </div>
    )
  }

  const isFeatured = featuredProjects.some((p) => p.id === slug)
  const projectContent = isFeatured
    ? content.projects.featured[slug]
    : content.projects.coursework[slug]
  const labels = content.projects.labels

  if (!projectContent) {
    return (
      <div className="flex min-h-screen items-center justify-center px-4 pl-20 sm:pl-24 md:pl-28 lg:pl-32">
        <p className="font-body text-lg" style={{ color: 'var(--muted)' }}>
          Content not available.
        </p>
      </div>
    )
  }

  const hasImages = project.images && project.images.length > 0

  return (
    <div className="min-h-screen px-4 py-12 pl-20 sm:px-6 sm:pl-24 md:pl-28 lg:px-8 lg:pl-32">
      <div className="mx-auto max-w-3xl">
        <Link
          to="/proyek"
          className="mb-8 inline-flex items-center gap-2 font-body text-sm font-medium transition-opacity hover:opacity-80"
          style={{ color: 'var(--accent-blue-dark, #6E8FB5)' }}
        >
          <ArrowLeft size={16} />
          <LanguageFade as="span">
            {language === 'id' ? 'Kembali ke Proyek' : 'Back to Projects'}
          </LanguageFade>
        </Link>

        {isFeatured && project.number && (
          <div
            className="mb-2 font-body text-xs font-bold uppercase tracking-widest"
            style={{ color: 'var(--accent-blue-dark, #6E8FB5)' }}
          >
            <LanguageFade as="span">
              {labels.portfolioTitle(project.number)}
            </LanguageFade>
          </div>
        )}

        <h1
          className="mb-3 font-heading text-3xl font-bold sm:text-4xl"
          style={{ color: 'var(--fg)' }}
        >
          {project.title}
        </h1>

        <span
          className="mb-6 inline-block rounded-full px-3 py-1 font-body text-xs font-medium"
          style={{
            color: 'var(--accent-blue-dark, #6E8FB5)',
            background: 'var(--chip-bg)',
          }}
        >
          {projectContent.label}
        </span>

        {projectContent.attributionNote && (
          <div
            className="mb-6 rounded-xl border px-4 py-3 italic text-sm"
            style={{
              borderColor: 'var(--line)',
              background: 'var(--bg-alt)',
              color: 'var(--muted)',
            }}
          >
            <LanguageFade as="p">
              {projectContent.attributionNote}
            </LanguageFade>
          </div>
        )}

        {/* Photo slot — always rendered */}
        <div
          className="mb-8 overflow-hidden"
          style={{
            aspectRatio: '16 / 10',
            minHeight: '320px',
            borderRadius: '1rem',
            border: '1px solid var(--line)',
            background: 'var(--chip-bg)',
          }}
        >
          {hasImages ? (
            <PhotoStack images={project.images} />
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <div className="flex flex-col items-center gap-2">
                <ImageOff
                  size={32}
                  style={{ color: 'var(--muted)', opacity: 0.3 }}
                />
                <span
                  className="font-body text-xs"
                  style={{ color: 'var(--muted)', opacity: 0.5 }}
                >
                  {language === 'id'
                    ? 'Foto belum tersedia'
                    : 'Photos coming soon'}
                </span>
              </div>
            </div>
          )}
        </div>

        {isFeatured && (
          <div className="space-y-5">
            <div>
              <h4
                className="mb-1 font-body text-sm font-semibold"
                style={{ color: 'var(--fg)' }}
              >
                {labels.problem}
              </h4>
              <p
                className="font-body text-sm leading-relaxed sm:text-base"
                style={{ color: 'var(--fg-secondary)' }}
              >
                <LanguageFade as="span">
                  {projectContent.problem}
                </LanguageFade>
              </p>
            </div>
            <div>
              <h4
                className="mb-1 font-body text-sm font-semibold"
                style={{ color: 'var(--fg)' }}
              >
                {labels.process}
              </h4>
              <p
                className="font-body text-sm leading-relaxed sm:text-base"
                style={{ color: 'var(--fg-secondary)' }}
              >
                <LanguageFade as="span">
                  {projectContent.process}
                </LanguageFade>
              </p>
            </div>
            {projectContent.versions && (
              <div>
                <h4
                  className="mb-2 font-body text-sm font-semibold"
                  style={{ color: 'var(--fg)' }}
                >
                  {labels.versionHistory}
                </h4>
                <ul className="space-y-2">
                  {projectContent.versions.map((v) => (
                    <li
                      key={v.title}
                      className="rounded-xl p-3"
                      style={{ background: 'var(--bg-alt)' }}
                    >
                      <span
                        className="font-body text-sm font-medium"
                        style={{ color: 'var(--fg)' }}
                      >
                        {v.title}:
                      </span>{' '}
                      <LanguageFade as="span">
                        <span
                          className="font-body text-sm"
                          style={{ color: 'var(--fg-secondary)' }}
                        >
                          {v.description}
                        </span>
                      </LanguageFade>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div>
              <h4
                className="mb-1 font-body text-sm font-semibold"
                style={{ color: 'var(--fg)' }}
              >
                {labels.result}
              </h4>
              <p
                className="font-body text-sm leading-relaxed sm:text-base"
                style={{ color: 'var(--fg-secondary)' }}
              >
                <LanguageFade as="span">
                  {projectContent.result}
                </LanguageFade>
              </p>
            </div>
          </div>
        )}

        {!isFeatured && (
          <div>
            <p
              className="font-body text-sm leading-relaxed sm:text-base"
              style={{ color: 'var(--fg-secondary)' }}
            >
              <LanguageFade as="span">
                {projectContent.description}
              </LanguageFade>
            </p>
          </div>
        )}

        <div className="mt-8 flex flex-wrap gap-3">
          {project.figmaUrl && (
            <Button href={project.figmaUrl}>
              <LanguageFade as="span">{labels.viewFigma}</LanguageFade>
              <ExternalLink size={16} />
            </Button>
          )}
          {project.githubUrl && (
            <Button href={project.githubUrl} variant="secondary">
              <LanguageFade as="span">{labels.viewGithub}</LanguageFade>
              <GitBranch size={16} />
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
