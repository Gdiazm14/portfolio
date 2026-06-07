import { skills } from '../data.js';
import { useScrollReveal } from '../hooks/useScrollReveal.js';

type Skill = { category: string; items: string[] };

const categoryMeta: Record<string, { icon: string; color: string; border: string; bg: string }> = {
  Frontend:        { icon: 'web',                  color: 'text-primary',   border: 'hover:border-primary/50',   bg: 'bg-primary/5 group-hover:bg-primary/15' },
  Backend:         { icon: 'dns',                  color: 'text-secondary', border: 'hover:border-secondary/50', bg: 'bg-secondary/5 group-hover:bg-secondary/15' },
  Databases:       { icon: 'storage',              color: 'text-tertiary',  border: 'hover:border-tertiary/50',  bg: 'bg-tertiary/5 group-hover:bg-tertiary/15' },
  'DevOps & Tools':{ icon: 'terminal',             color: 'text-primary',   border: 'hover:border-primary/50',   bg: 'bg-primary/5 group-hover:bg-primary/15' },
  Networking:      { icon: 'router',               color: 'text-secondary', border: 'hover:border-secondary/50', bg: 'bg-secondary/5 group-hover:bg-secondary/15' },
};

const fallback = { icon: 'category', color: 'text-primary', border: 'hover:border-primary/50', bg: 'bg-primary/5 group-hover:bg-primary/15' };

export function Skills() {
  const ref = useScrollReveal();

  return (
    <section
      id="skills"
      ref={ref}
      className="reveal-init py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto border-b border-white/5"
    >
      <div className="mb-16">
        <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-background font-bold mb-4">
          Core Expertise
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
          Full-stack skills built across academic projects, personal work, and professional experience.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {(skills as Skill[]).map(({ category, items }) => {
          const meta = categoryMeta[category] ?? fallback;
          return (
            <div
              key={category}
              className={`group bg-surface-container p-6 rounded-lg border border-white/5 ${meta.border} hover:bg-surface-container-high transition-all duration-500 relative overflow-hidden`}
            >
              {/* Corner decoration */}
              <div className={`absolute top-0 right-0 w-24 h-24 rounded-bl-full translate-x-1/2 -translate-y-1/2 transition-colors duration-500 ${meta.bg}`} />

              <span className={`material-symbols-outlined text-4xl ${meta.color} mb-4 block`}>{meta.icon}</span>

              <h3 className="font-headline-md text-headline-md text-on-background mb-4">{category}</h3>

              <div className="flex flex-wrap gap-2">
                {items.map((item: string) => (
                  <span
                    key={item}
                    className="px-2.5 py-1 rounded-full bg-surface border border-white/5 font-code-sm text-code-sm text-on-surface-variant"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
