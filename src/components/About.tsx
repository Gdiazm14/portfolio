import { personal, skills, languages } from '../data.js';
import { useScrollReveal } from '../hooks/useScrollReveal.js';

const stats = [
  { value: personal.year,         label: 'University Year' },
  { value: `${skills.length}+`,   label: 'Tech Stacks' },
  { value: `${languages.length}`, label: 'Languages' },
];

export function About() {
  const ref = useScrollReveal();

  return (
    <section
      id="about"
      ref={ref}
      className="reveal-init py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto border-b border-white/5"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left — text */}
        <div>
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-background font-bold mb-6">
            About Me
          </h2>

          <div className="space-y-5 font-body-md text-body-md text-on-surface-variant">
            {personal.bio.map((p: string, i: number) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {/* Stats row */}
          <div className="mt-10 flex gap-4 flex-wrap">
            {stats.map(s => (
              <div
                key={s.label}
                className="bg-surface-container-low p-4 rounded-lg border border-white/5 min-w-[110px]"
              >
                <div className="font-headline-lg text-headline-lg text-primary font-bold mb-1">{s.value}</div>
                <div className="font-body-sm text-body-sm text-on-surface-variant">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — info card */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/10 rounded-2xl blur-3xl pointer-events-none" />
          <div className="relative bg-surface-container border border-white/10 rounded-2xl p-8 shadow-2xl">

            {/* Profile header */}
            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/10">
              <div className="w-16 h-16 rounded-full bg-surface border border-white/10 flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-3xl text-on-surface-variant">person</span>
              </div>
              <div>
                <h3 className="font-headline-md text-headline-md text-on-background">{personal.name}</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">{personal.role}</p>
              </div>
            </div>

            {/* Info rows */}
            <div className="space-y-4">
              {[
                { label: 'Location', value: personal.location },
                { label: 'Education', value: `${personal.year} — UCR` },
                { label: 'Email', value: personal.email },
                {
                  label: 'Status',
                  value: 'Open to Internship',
                  highlight: true,
                },
              ].map(row => (
                <div key={row.label} className="flex justify-between items-center gap-4">
                  <span className="font-body-sm text-body-sm text-on-surface-variant flex-shrink-0">{row.label}</span>
                  <span
                    className={`font-body-sm text-body-sm text-right ${
                      row.highlight
                        ? 'text-primary flex items-center gap-2'
                        : 'text-on-background'
                    }`}
                  >
                    {row.highlight && <span className="w-2 h-2 rounded-full bg-primary animate-pulse flex-shrink-0" />}
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
