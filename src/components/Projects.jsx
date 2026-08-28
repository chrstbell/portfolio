import { featuredProjects, courseworkProjects } from '../data/projects'
import { useLanguage } from '../context/LanguageContext'
import SectionHeading from './ui/SectionHeading'
import { LanguageFade } from './ui/LanguageFade'
import FeaturedProject from './Projects/FeaturedProject'
import ProjectCard from './Projects/ProjectCard'
import { Sticker } from './ui/Stickers'

export default function Projects() {
  const { content } = useLanguage()

  return (
    <>
      <section
        id="projects"
        className="relative overflow-hidden bg-white py-20 sm:py-28"
      >
        <div className="pointer-events-none absolute right-6 top-16">
          <Sticker type="sparkle" />
        </div>
        <div className="pointer-events-none absolute inset-0 grid-texture-subtle opacity-40" />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
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
            align="center"
            className="mb-14 sm:mb-20"
          />

          <div className="space-y-12 sm:space-y-16">
            {featuredProjects.map((project, i) => (
              <FeaturedProject key={project.id} project={project} index={i} />
            ))}
          </div>

          <div className="mt-20 sm:mt-28">
            <SectionHeading
              eyebrow={
                <LanguageFade as="span">
                  {content.projects.courseworkSection.eyebrow}
                </LanguageFade>
              }
              title={
                <LanguageFade as="span">
                  {content.projects.courseworkSection.title}
                </LanguageFade>
              }
              subtitle={
                content.projects.courseworkSection.subtitle ? (
                  <LanguageFade as="span">
                    {content.projects.courseworkSection.subtitle}
                  </LanguageFade>
                ) : null
              }
              align="center"
              className="mb-10 sm:mb-12"
            />
            <div className="grid gap-6 sm:grid-cols-2">
              {courseworkProjects.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
