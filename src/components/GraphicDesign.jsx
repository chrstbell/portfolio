import { useMemo, useState } from 'react'
import { ArrowLeft } from 'lucide-react'
import { visualWorkEvents } from '../data/visualWorks'
import { useLanguage } from '../context/LanguageContext'
import SectionHeading from './ui/SectionHeading'
import { LanguageFade } from './ui/LanguageFade'
import Card from './ui/Card'
import LightboxModal from './ui/LightboxModal'
import MediaWithPlaceholder from './ui/MediaWithPlaceholder'
import ItemCarousel from './ui/ItemCarousel'
import ShapeDivider from './ui/ShapeDivider'

const BENTO_SPANS = [
  'sm:col-span-2 sm:row-span-2',
  'sm:col-span-1',
  'sm:col-span-1',
  'sm:col-span-2 sm:row-span-2',
  'sm:col-span-1',
]

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
    <div className="overflow-hidden rounded-2xl bg-slate-50 ring-1 ring-slate-100">
      <div className="aspect-[4/3] overflow-hidden">
        <ItemCarousel
          media={item.media}
          type={item.type}
          alt={label}
          onMediaClick={
            item.type === 'image' ? () => onExpand(item) : undefined
          }
        />
      </div>
      <p className="px-3 py-2 font-body text-xs font-medium text-slate-600">
        <LanguageFade as="span">{label}</LanguageFade>
      </p>
    </div>
  )
}

export default function GraphicDesign() {
  const { content } = useLanguage()
  const [activeEvent, setActiveEvent] = useState(null)
  const [expandedItem, setExpandedItem] = useState(null)

  const translateCategory = useMemo(
    () => (category) =>
      content.visualWorks.categories[category] ?? category,
    [content.visualWorks.categories],
  )

  const closeModal = () => {
    setActiveEvent(null)
    setExpandedItem(null)
  }

  const handleExpand = (item) => {
    setExpandedItem(item)
  }

  return (
    <>
      <section
        id="graphic-design"
        className="relative overflow-hidden bg-lavender/30 py-20 sm:py-28"
      >
        <div className="pointer-events-none absolute inset-0 grid-texture-subtle opacity-50" />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={
              <LanguageFade as="span">{content.visualWorks.eyebrow}</LanguageFade>
            }
            title={
              <LanguageFade as="span">{content.visualWorks.title}</LanguageFade>
            }
            subtitle={
              <LanguageFade as="span">{content.visualWorks.subtitle}</LanguageFade>
            }
            align="center"
            className="mb-12 sm:mb-16"
          />

          <div className="grid auto-rows-[minmax(180px,auto)] grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-6">
            {visualWorkEvents.map((event, i) => {
              const badges = getCategoryBadges(event.items, translateCategory)
              const workLabel = content.visualWorks.workCount(event.items.length)

              return (
                <Card
                  key={event.id}
                  delay={i * 0.08}
                  hover={false}
                  className={`flex cursor-pointer flex-col !p-0 transition-shadow hover:shadow-xl ${BENTO_SPANS[i] ?? ''}`}
                >
                  <button
                    type="button"
                    onClick={() => {
                      setActiveEvent(event)
                      setExpandedItem(null)
                    }}
                    className="flex h-full flex-col text-left"
                  >
                    <div className="aspect-[16/10] overflow-hidden rounded-t-3xl">
                      <MediaWithPlaceholder
                        src={event.cover}
                        alt={event.org}
                        className="h-full transition-transform duration-300 hover:scale-[1.02]"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-5 sm:p-6">
                      <div className="mb-2 flex flex-wrap items-center gap-2">
                        {event.year && (
                          <span className="rounded-full bg-primary-blue/10 px-2.5 py-0.5 font-body text-xs font-semibold text-primary-blue">
                            {event.year}
                          </span>
                        )}
                        <span className="font-body text-xs font-medium text-slate-500">
                          {workLabel}
                        </span>
                      </div>
                      <h3 className="mb-2 font-heading text-lg font-bold text-slate-900 sm:text-xl">
                        {event.org}
                      </h3>
                      {badges && (
                        <span className="mt-auto inline-block w-fit rounded-full bg-primary-gold/20 px-3 py-1 font-body text-xs font-semibold text-primary-blue">
                          {badges}
                        </span>
                      )}
                    </div>
                  </button>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <ShapeDivider
        fromColor="rgba(198,183,240,0.3)"
        toColor="rgba(143,217,196,0.35)"
        variant="wave"
      />

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
                onExpand={handleExpand}
              />
            ))}
          </div>
        )}

        {activeEvent && expandedItem && (
          <div>
            <button
              type="button"
              onClick={() => setExpandedItem(null)}
              className="mb-4 inline-flex items-center gap-2 font-body text-sm font-medium text-primary-blue transition-colors hover:text-primary-blue/80"
            >
              <ArrowLeft size={16} />
              <LanguageFade as="span">{content.visualWorks.backToGallery}</LanguageFade>
            </button>
            <div className="overflow-hidden rounded-2xl bg-slate-50">
              <div className="aspect-[4/3] max-h-[60vh] sm:aspect-auto sm:max-h-[70vh]">
                <ItemCarousel
                  media={expandedItem.media}
                  type={expandedItem.type}
                  alt={translateCategory(expandedItem.category)}
                  objectFit="contain"
                  mediaClassName="max-h-[70vh]"
                />
              </div>
            </div>
            <p className="mt-4 text-center font-body text-sm font-medium text-slate-600">
              <LanguageFade as="span">
                {translateCategory(expandedItem.category)}
              </LanguageFade>
            </p>
          </div>
        )}
      </LightboxModal>
    </>
  )
}
