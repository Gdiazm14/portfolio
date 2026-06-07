import { useState } from 'react';
import { education, certifications, languages } from '../data.js';
import { useScrollReveal } from '../hooks/useScrollReveal.js';

type Edu  = { period: string; degree: string; institution: string; detail: string };
type Cert = { name: string; issuer: string; date: string; credentialUrl: string; image?: string };
type Lang = { name: string; level: string };

function CertCard({ cert }: { cert: Cert }) {
  const [hovered, setHovered] = useState(false);
  const hasImage = Boolean(cert.image);
  const hasLink  = Boolean(cert.credentialUrl && cert.credentialUrl !== '#');

  return (
    <div
      className="bg-surface-container-low rounded-xl border border-white/5 overflow-hidden group hover:border-white/10 transition-all duration-300"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* ── Certificate image area ──────────────────────────── */}
      {hasImage ? (
        <div className="relative h-64 overflow-hidden bg-surface-container-lowest flex items-center justify-center">
          <img
            src={cert.image}
            alt={`${cert.name} certificate`}
            className="max-w-full max-h-full object-contain transition-opacity duration-300"
          />
          {/* Hover overlay */}
          {hasLink && (
            <div
              className={`absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm transition-all duration-300 ${
                hovered ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 font-label-md text-label-md bg-secondary/10 border border-secondary/20 text-secondary px-6 py-3 rounded-lg hover:opacity-80 transition-all duration-200 translate-y-0 ${
                  hovered ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
                }`}
                style={{ transition: 'opacity 300ms, transform 300ms' }}
              >
                <span className="material-symbols-outlined text-base">verified</span>
                View Certificate
                <span className="material-symbols-outlined text-sm">arrow_outward</span>
              </a>
            </div>
          )}
        </div>
      ) : (
        /* Ghost icon version (no image) */
        <div className="relative p-8 pb-0 overflow-hidden">
          <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none">
            <span className="material-symbols-outlined text-8xl">verified</span>
          </div>
        </div>
      )}

      {/* ── Card content ────────────────────────────────────── */}
      <div className={`relative z-10 ${hasImage ? 'p-6' : 'px-8 pb-8'}`}>
        <span className="inline-block px-3 py-1 rounded bg-surface border border-white/10 font-label-md text-label-md text-on-surface-variant mb-4">
          {cert.date}
        </span>
        <h3 className="font-headline-md text-headline-md text-on-background mb-2">{cert.name}</h3>
        <h4 className="font-body-lg text-body-lg text-secondary mb-4">{cert.issuer}</h4>

        {/* Link shown below content only when there's no image */}
        {!hasImage && hasLink && (
          <a
            href={cert.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-label-md text-label-md text-primary hover:underline"
          >
            View credential
            <span className="material-symbols-outlined text-sm">arrow_outward</span>
          </a>
        )}
      </div>
    </div>
  );
}

export function Education() {
  const ref = useScrollReveal();

  return (
    <section
      id="education"
      ref={ref}
      className="reveal-init py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto border-b border-white/5"
    >
      <div className="mb-16">
        <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-background font-bold mb-4">
          Education &amp; Certifications
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
          Academic background and professional credentials.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Education entries */}
        {(education as Edu[]).map(edu => (
          <div
            key={edu.degree}
            className="bg-surface-container-low p-8 rounded-xl border border-white/5 relative overflow-hidden group hover:border-white/10 transition-all duration-300"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none">
              <span className="material-symbols-outlined text-8xl">school</span>
            </div>
            <div className="relative z-10">
              <span className="inline-block px-3 py-1 rounded bg-surface border border-white/10 font-label-md text-label-md text-on-surface-variant mb-4">
                {edu.period}
              </span>
              <h3 className="font-headline-md text-headline-md text-on-background mb-2">{edu.degree}</h3>
              <h4 className="font-body-lg text-body-lg text-primary mb-4">{edu.institution}</h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">{edu.detail}</p>
            </div>
          </div>
        ))}

        {/* Certification entries */}
        {(certifications as Cert[]).map(cert => (
          <CertCard key={cert.name} cert={cert} />
        ))}
      </div>

      {/* Languages */}
      <div className="mt-12">
        <h3 className="font-headline-md text-headline-md text-on-background mb-6">Languages</h3>
        <div className="flex flex-wrap gap-4">
          {(languages as Lang[]).map(lang => (
            <div
              key={lang.name}
              className="flex items-center gap-3 bg-surface-container-low px-5 py-3 rounded-lg border border-white/5"
            >
              <span className="material-symbols-outlined text-primary text-xl">translate</span>
              <div>
                <span className="font-label-md text-label-md text-on-background block">{lang.name}</span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">{lang.level}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
