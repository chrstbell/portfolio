import { useState } from 'react'
import { ShieldCheck } from 'lucide-react'
import { certificates } from '../data/certificates'
import { hki } from '../data/hki'
import { useLanguage } from '../context/LanguageContext'
import SectionHeading from './ui/SectionHeading'
import { LanguageFade } from './ui/LanguageFade'
import Card from './ui/Card'
import LightboxModal from './ui/LightboxModal'
import MediaWithPlaceholder from './ui/MediaWithPlaceholder'

function getCategoryBadgeClass(category) {
  if (category === 'competency') {
    return 'border-primary-gold/55 bg-primary-gold/10 text-primary-gold'
  }
  return 'border-slate-300/90 bg-white/85 text-slate-600'
}

function getCertificateCardClass(category) {
  if (category === 'competency') {
    return '!p-0 ring-primary-gold/35 shadow-primary-gold/10'
  }
  return '!p-0'
}

export default function Certificates() {
  const { content } = useLanguage()
  const [activeCert, setActiveCert] = useState(null)

  return (
    <>
      <section
        id="certificates"
        className="relative overflow-hidden bg-white py-20 sm:py-28"
      >
        <div className="pointer-events-none absolute inset-0 grid-texture-subtle opacity-40" />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={
              <LanguageFade as="span">{content.certificates.sectionTitle}</LanguageFade>
            }
            align="center"
            className="mb-12 sm:mb-16"
          />

          <div className="mb-14">
            <h3 className="mb-6 text-center font-heading text-xl font-bold text-slate-900 sm:text-2xl">
              <LanguageFade as="span">{content.certificates.certificatesLabel}</LanguageFade>
            </h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {certificates.map((cert, i) => (
                <Card
                  key={cert.id}
                  delay={i * 0.08}
                  hover={false}
                  className={getCertificateCardClass(cert.category)}
                >
                  <button
                    type="button"
                    onClick={() => setActiveCert(cert)}
                    className="w-full text-left"
                    aria-label={`${content.certificates.viewCertificate}: ${cert.title}`}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden rounded-t-3xl">
                      {cert.category && content.certificates.categoryLabels?.[cert.category] ? (
                        <span
                          className={`pointer-events-none absolute right-3 top-3 z-10 rounded-full border px-2.5 py-0.5 font-body text-[10px] font-medium shadow-sm backdrop-blur-sm sm:text-xs ${getCategoryBadgeClass(cert.category)}`}
                        >
                          <LanguageFade as="span">
                            {content.certificates.categoryLabels[cert.category]}
                          </LanguageFade>
                        </span>
                      ) : null}
                      <MediaWithPlaceholder
                        src={cert.image}
                        alt={cert.title}
                        className="transition-transform duration-300 hover:scale-[1.02]"
                      />
                    </div>
                    <div className="p-5 sm:p-6">
                      <h4 className="font-heading text-lg font-bold text-slate-900">
                        {cert.title}
                      </h4>
                      {cert.issuer ? (
                        <p className="mt-1 font-body text-sm text-slate-600">{cert.issuer}</p>
                      ) : null}
                      {cert.year ? (
                        <p className="mt-2 font-body text-xs font-semibold uppercase tracking-wider text-primary-blue">
                          {cert.year}
                        </p>
                      ) : null}
                    </div>
                  </button>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-center font-heading text-xl font-bold text-slate-900 sm:text-2xl">
              <LanguageFade as="span">{content.certificates.hkiLabel}</LanguageFade>
            </h3>
            <Card
              delay={0.2}
              hover={false}
              className="mx-auto max-w-3xl border border-primary-gold/30 bg-gradient-to-br from-primary-gold/10 via-white to-primary-gold/5"
            >
              <div className="flex items-start gap-4 sm:items-center">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary-gold/20 shadow-sm">
                  <ShieldCheck className="h-7 w-7 text-primary-gold" strokeWidth={2} />
                </div>
                <div>
                  <p className="font-body text-base leading-relaxed text-slate-700 sm:text-lg">
                    <LanguageFade as="span">{content.certificates.hkiText}</LanguageFade>
                  </p>
                  {hki.pressReleaseUrl ? (
                    <a
                      href={hki.pressReleaseUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-block font-body text-sm font-semibold text-primary-gold transition-colors hover:underline"
                    >
                      <LanguageFade as="span">{content.certificates.pressReleaseLink}</LanguageFade>
                    </a>
                  ) : null}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <LightboxModal
        isOpen={Boolean(activeCert)}
        onClose={() => setActiveCert(null)}
        title={activeCert?.title}
        size="default"
        ariaLabel={content.certificates.viewCertificate}
      >
        {activeCert && (
          <div>
            <div className="overflow-hidden rounded-2xl bg-slate-50">
              <MediaWithPlaceholder
                src={activeCert.image}
                alt={activeCert.title}
                objectFit="contain"
                mediaClassName="max-h-[65vh]"
                className="aspect-[4/3] max-h-[65vh]"
              />
            </div>
            <div className="mt-4 text-center">
              {activeCert.category && content.certificates.categoryLabels?.[activeCert.category] ? (
                <span
                  className={`mb-2 inline-block rounded-full border px-2.5 py-0.5 font-body text-[10px] font-medium sm:text-xs ${getCategoryBadgeClass(activeCert.category)}`}
                >
                  <LanguageFade as="span">
                    {content.certificates.categoryLabels[activeCert.category]}
                  </LanguageFade>
                </span>
              ) : null}
              {activeCert.issuer ? (
                <p className="font-body text-sm text-slate-600">{activeCert.issuer}</p>
              ) : null}
              {activeCert.year ? (
                <p className="mt-1 font-body text-xs font-semibold uppercase tracking-wider text-primary-blue">
                  {activeCert.year}
                </p>
              ) : null}
            </div>
          </div>
        )}
      </LightboxModal>
    </>
  )
}
