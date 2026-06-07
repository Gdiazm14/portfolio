import { experience } from '../data.js';
import { useScrollReveal } from '../hooks/useScrollReveal.js';

type Job = { role: string; company: string; period: string; description: string[] };

export function Experience() {
  const ref = useScrollReveal();

  return (
    <section
      id="experience"
      ref={ref}
      className="reveal-init py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto border-b border-white/5"
    >
      <div className="mb-16">
        <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-background font-bold mb-4">
          Work Experience
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
          Professional roles that shaped my technical foundation and collaborative mindset.
        </p>
      </div>

      <div className="space-y-6">
        {(experience as Job[]).map((job) => (
          <div
            key={job.role}
            className="bg-surface-container-low rounded-xl border border-white/5 p-8 relative overflow-hidden group hover:border-white/10 transition-all duration-300"
          >
            {/* Accent glow on hover */}
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-primary-container rounded-l-xl opacity-50 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="flex flex-col md:flex-row md:items-start gap-6 ml-4">

              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-surface-container border border-white/10 flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-2xl text-on-surface-variant">work</span>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                  <div>
                    <h3 className="font-headline-md text-headline-md text-on-background mb-1">{job.role}</h3>
                    <p className="font-body-md text-body-md text-primary">{job.company}</p>
                  </div>
                  <span className="inline-block px-3 py-1 rounded bg-surface border border-white/10 font-label-md text-label-md text-on-surface-variant flex-shrink-0">
                    {job.period}
                  </span>
                </div>

                <ul className="space-y-2">
                  {job.description.map((item: string) => (
                    <li key={item} className="flex items-start gap-3 font-body-sm text-body-sm text-on-surface-variant">
                      <span className="material-symbols-outlined text-primary text-sm mt-0.5 flex-shrink-0">arrow_right</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
