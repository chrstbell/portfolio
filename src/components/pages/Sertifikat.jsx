import { useState } from 'react'
import { ShieldCheck } from 'lucide-react'
import { certificates } from '../../data/certificates'
import { hki } from '../../data/hki'
import { useLanguage } from '../../context/LanguageContext'
import SectionHeading from '../ui/SectionHeading'
import { LanguageFade } from '../ui/LanguageFade'
import LightboxModal from '../ui/LightboxModal'
import MediaWithPlaceholder from '../ui/MediaWithPlaceholder'

export default function Sertifikat() {
  const { content } = useLanguage()
  const [activeCert, setActiveCert] = useState(null)

  return (
    <div className="min-h-screen px-4 pb-24 pt-20 md:pl-20 sm:px-6 sm:pl-24 md:pl-28 lg:px-8 lg:pl-32">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          title={
            <LanguageFade as="span">
              {content.certificates.sectionTitle}
            </LanguageFade>
          }
          className="mb-12"
        />

        <div className="mb-14">
          <h3
            className="mb-6 font-heading text-xl font-bold sm:text-2xl"
            style={{ color: 'var(--fg)' }}
          >
            <LanguageFade as="span">
              {content.certificates.certificatesLabel}
            </LanguageFade>
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {certificates.map((cert, i) => (
              <div
                key={cert.id}
                className="overflow-hidden rounded-2xl transition-shadow hover:shadow-lg"
                style={{
                  border: '1px solid var(--line)',
                  background: 'var(--card-bg)',
                }}
              >
                <button
                  type="button"
                  onClick={() => setActiveCert(cert)}
                  className="w-full text-left"
                  aria-label={`${content.certificates.viewCertificate}: ${cert.title}`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    {cert.category &&
                    content.certificates.categoryLabels?.[cert.category] ? (
                      <span
                        className="pointer-events-none absolute right-3 top-3 z-10 rounded-full border px-2.5 py-0.5 font-body text-[10px] font-medium backdrop-blur-sm sm:text-xs"
                        style={{
                          borderColor: 'var(--line-strong)',
                          background: 'var(--chip-bg)',
                          color: 'var(--fg-secondary)',
                        }}
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
                    <h4
                      className="font-heading text-lg font-bold"
                      style={{ color: 'var(--fg)' }}
                    >
                      {cert.title}
                    </h4>
                    {cert.issuer ? (
                      <p
                        className="mt-1 font-body text-sm"
                        style={{ color: 'var(--fg-secondary)' }}
                      >
                        {cert.issuer}
                      </p>
                    ) : null}
                    {cert.year ? (
                      <p
                        className="mt-2 font-body text-xs font-semibold uppercase tracking-wider"
                        style={{ color: 'var(--accent-blue-dark, #6E8FB5)' }}
                      >
                        {cert.year}
                      </p>
                    ) : null}
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3
            className="mb-6 font-heading text-xl font-bold sm:text-2xl"
            style={{ color: 'var(--fg)' }}
          >
            <LanguageFade as="span">
              {content.certificates.hkiLabel}
            </LanguageFade>
          </h3>
          <div
            className="mx-auto max-w-3xl rounded-2xl p-6"
            style={{
              border: '1px solid var(--line)',
              background: 'var(--card-bg)',
            }}
          >
            <div className="flex items-start gap-4 sm:items-center">
              <div
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl"
                style={{ background: 'var(--chip-bg)' }}
              >
                <ShieldCheck
                  size={28}
                  style={{ color: 'var(--accent-blue-dark, #6E8FB5)' }}
                  strokeWidth={1.5}
                />
              </div>
              <div>
                <p
                  className="font-body text-base leading-relaxed sm:text-lg"
                  style={{ color: 'var(--fg-secondary)' }}
                >
                  <LanguageFade as="span">
                    {content.certificates.hkiText}
                  </LanguageFade>
                </p>
                {hki.pressReleaseUrl ? (
                  <a
                    href={hki.pressReleaseUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block font-body text-sm font-semibold transition-colors hover:underline"
                    style={{ color: 'var(--accent-blue-dark, #6E8FB5)' }}
                  >
                    <LanguageFade as="span">
                      {content.certificates.pressReleaseLink}
                    </LanguageFade>
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>

      <LightboxModal
        isOpen={Boolean(activeCert)}
        onClose={() => setActiveCert(null)}
        title={activeCert?.title}
        size="default"
        ariaLabel={content.certificates.viewCertificate}
      >
        {activeCert && (
          <div>
            <div
              className="overflow-hidden rounded-2xl"
              style={{ background: 'var(--bg-alt)' }}
            >
              <MediaWithPlaceholder
                src={activeCert.image}
                alt={activeCert.title}
                objectFit="contain"
                mediaClassName="max-h-[65vh]"
                className="aspect-[4/3] max-h-[65vh]"
              />
            </div>
            <div className="mt-4 text-center">
              {activeCert.category &&
              content.certificates.categoryLabels?.[activeCert.category] ? (
                <span
                  className="mb-2 inline-block rounded-full border px-2.5 py-0.5 font-body text-[10px] font-medium sm:text-xs"
                  style={{
                    borderColor: 'var(--line-strong)',
                    background: 'var(--chip-bg)',
                    color: 'var(--fg-secondary)',
                  }}
                >
                  <LanguageFade as="span">
                    {content.certificates.categoryLabels[activeCert.category]}
                  </LanguageFade>
                </span>
              ) : null}
              {activeCert.issuer ? (
                <p
                  className="font-body text-sm"
                  style={{ color: 'var(--fg-secondary)' }}
                >
                  {activeCert.issuer}
                </p>
              ) : null}
              {activeCert.year ? (
                <p
                  className="mt-1 font-body text-xs font-semibold uppercase tracking-wider"
                  style={{ color: 'var(--accent-blue-dark, #6E8FB5)' }}
                >
                  {activeCert.year}
                </p>
              ) : null}
            </div>
          </div>
        )}
      </LightboxModal>
    </div>
  )
}
