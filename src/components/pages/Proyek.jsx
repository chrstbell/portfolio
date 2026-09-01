import { useMemo, useState } from 'react'
import { ArrowLeft } from 'lucide-react'
import { featuredProjects, courseworkProjects } from '../../data/projects'
import { visualWorkEvents } from '../../data/visualWorks'
import { useLanguage } from '../../context/LanguageContext'
import SectionHeading from '../ui/SectionHeading'
import { LanguageFade } from '../ui/LanguageFade'
import ProjectCard from '../Projects/ProjectCard'
import LightboxModal from '../ui/LightboxModal'
import ItemCarousel from '../ui/ItemCarousel'

function getCategoryBadges(items, translateCategory) {
  const seen = new Set()
  const badges = []
  for (const item of items) {
    const label = translateCategory(item.category)
    const short = label.split('—')[0].split('–')[0].trim()
    if (!seen.has(short)) {
      seen.add(short)
      badges.push(short)
    }
  }
  return badges.slice(0, 3).join(' · ')
}

function GalleryItem({ item, translateCategory, onExpand }) {
  const label = translateCategory(item.category)
  return (
    <button
      type="button"
      onClick={() => onExpand(item)}
      className="overflow-hidden rounded-2xl text-left"
      style={{ background: 'var(--bg-alt)' }}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <ItemCarousel
          media={item.media}
          type={item.type}
          alt={label}
        />
      </div>
      <p
        className="px-3 py-2 font-body text-xs font-medium"
        style={{ color: 'var(--muted)' }}
      >
        <LanguageFade as="span">{label}</LanguageFade>
      </p>
    </button>
  )
}

function CategoryDivider({ label }) {
  return (
    <div className="flex items-center gap-4 py-6">
      <div className="h-px flex-1" style={{ background: 'var(--line)' }} />
      <span
        className="font-body text-xs font-semibold uppercase tracking-widest"
        style={{ color: 'var(--muted)' }}
      >
        {label}
      </span>
      <div className="h-px flex-1" style={{ background: 'var(--line)' }} />
    </div>
  )
}

export default function Proyek() {
  const { content, language } = useLanguage()
  const [activeEvent, setActiveEvent] = useState(null)
  const [expandedItem, setExpandedItem] = useState(null)

  const translateCategory = useMemo(
    () => (category) => content.visualWorks.categories[category] ?? category,
    [content.visualWorks.categories],
  )

  const fsLabel = 'Full-Stack Development'
  const uxLabel = language === 'id' ? 'Desain UI/UX' : 'UI/UX Design'
  const gdLabel = language === 'id' ? 'Desain Grafis & Konten' : 'Graphic Design & Content'

  const closeModal = () => {
    setActiveEvent(null)
    setExpandedItem(null)
  }

  return (
    <div className="min-h-screen px-4 py-20 pl-20 sm:px-6 sm:pl-24 md:pl-28 lg:px-8 lg:pl-32">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow={
            <LanguageFade as="span">
              {content.projects.featuredSection.eyebrow}
            </LanguageFade>
          }
          title={
            <LanguageFade as="span">
              {content.projects.featuredSection.title}
            </LanguageFade>
          }
          subtitle={
            <LanguageFade as="span">
              {content.projects.featuredSection.subtitle}
            </LanguageFade>
          }
          className="mb-12"
        />

        {/* Category 1: Full-Stack Development */}
        <CategoryDivider label={fsLabel} />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, i) => {
            const projectContent = content.projects.featured[project.id]
            if (!projectContent) return null
            const firstImg = project.images?.[0]
            return (
              <ProjectCard
                key={project.id}
                to={`/proyek/${project.id}`}
                badge={projectContent.label}
                title={project.title}
                description={null}
                imageSrc={firstImg?.src || null}
                imageAlt={firstImg?.alt || project.title}
                accent={project.accent}
                number={project.number}
                delay={i * 0.06}
              />
            )
          })}
        </div>

        {/* Category 2: UI/UX Design */}
        <CategoryDivider label={uxLabel} />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {courseworkProjects.map((project, i) => {
            const projectContent = content.projects.coursework[project.id]
            if (!projectContent) return null
            return (
              <ProjectCard
                key={project.id}
                to={`/proyek/${project.id}`}
                badge={projectContent.badge}
                title={project.title}
                description={projectContent.description}
                imageSrc={project.image}
                imageAlt={project.title}
                accent="var(--chip-bg)"
                delay={i * 0.06}
              />
            )
          })}
        </div>

        {/* Category 3: Graphic Design & Content — uniform cards */}
        <CategoryDivider label={gdLabel} />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visualWorkEvents.map((event, i) => {
            const badges = getCategoryBadges(event.items, translateCategory)
            const workLabel = content.visualWorks.workCount(event.items.length)
            return (
              <div
                key={event.id}
                className="overflow-hidden rounded-2xl transition-shadow hover:shadow-lg"
                style={{
                  border: '1px solid var(--line)',
                  background: 'var(--card-bg)',
                }}
              >
                <button
                  type="button"
                  onClick={() => {
                    setActiveEvent(event)
                    setExpandedItem(null)
                  }}
                  className="flex h-full flex-col text-left"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={event.cover}
                      alt={event.org}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-[1.02]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-4 sm:p-5">
                    <div className="mb-2 flex flex-wrap items-center gap-2">
                      {event.year && (
                        <span
                          className="rounded-full px-2.5 py-0.5 font-body text-[10px] font-medium"
                          style={{
                            color: 'var(--accent-blue-dark, #6E8FB5)',
                            background: 'var(--chip-bg)',
                          }}
                        >
                          {event.year}
                        </span>
                      )}
                      <span
                        className="font-body text-[10px] font-medium"
                        style={{ color: 'var(--muted)' }}
                      >
                        {workLabel}
                      </span>
                    </div>
                    <h3
                      className="mb-2 font-heading text-base font-bold sm:text-lg"
                      style={{ color: 'var(--fg)' }}
                    >
                      {event.org}
                    </h3>
                    {badges && (
                      <span
                        className="mt-auto inline-block w-fit rounded-full px-2.5 py-0.5 font-body text-[10px] font-medium"
                        style={{
                          color: 'var(--accent-blue-dark, #6E8FB5)',
                          background: 'var(--chip-bg)',
                        }}
                      >
                        {badges}
                      </span>
                    )}
                  </div>
                </button>
              </div>
            )
          })}
        </div>
      </div>

      <LightboxModal
        isOpen={Boolean(activeEvent)}
        onClose={closeModal}
        title={activeEvent?.org}
        size="full"
        ariaLabel={content.visualWorks.galleryLabel}
      >
        {activeEvent && !expandedItem && (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {activeEvent.items.map((item, idx) => (
              <GalleryItem
                key={`${activeEvent.id}-${idx}`}
                item={item}
                translateCategory={translateCategory}
                onExpand={setExpandedItem}
              />
            ))}
          </div>
        )}
        {activeEvent && expandedItem && (
          <div>
            <button
              type="button"
              onClick={() => setExpandedItem(null)}
              className="mb-4 inline-flex items-center gap-2 font-body text-sm font-medium transition-colors hover:opacity-80"
              style={{ color: 'var(--accent-blue-dark, #6E8FB5)' }}
            >
              <ArrowLeft size={16} />
              <LanguageFade as="span">
                {content.visualWorks.backToGallery}
              </LanguageFade>
            </button>
            <div
              className="relative overflow-hidden rounded-2xl"
              style={{
                background: 'var(--chip-bg)',
                border: '1px solid var(--line)',
                aspectRatio: '16 / 10',
                minHeight: '320px',
              }}
            >
              <ItemCarousel
                media={expandedItem.media}
                type={expandedItem.type}
                alt={translateCategory(expandedItem.category)}
                objectFit="contain"
              />
            </div>
            <p
              className="mt-4 text-center font-body text-sm font-medium"
              style={{ color: 'var(--fg-secondary)' }}
            >
              <LanguageFade as="span">
                {translateCategory(expandedItem.category)}
              </LanguageFade>
            </p>
          </div>
        )}
      </LightboxModal>
    </div>
  )
}
