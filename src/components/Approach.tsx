import { approachItems } from '../data.js';
import { useScrollReveal } from '../hooks/useScrollReveal.js';

type ApproachItem = { label: string; desc: string };

const icons: Record<string, string> = {
  'Clean Architecture':   'architecture',
  'Continuous Learning':  'school',
  'Good Practices':       'verified',
  'Product Mindset':      'rocket_launch',
};

const colors = [
  { color: 'text-primary',   border: 'hover:border-primary/50',   bg: 'bg-primary/5 group-hover:bg-primary/15' },
  { color: 'text-secondary', border: 'hover:border-secondary/50', bg: 'bg-secondary/5 group-hover:bg-secondary/15' },
  { color: 'text-tertiary',  border: 'hover:border-tertiary/50',  bg: 'bg-tertiary/5 group-hover:bg-tertiary/15' },
  { color: 'text-primary',   border: 'hover:border-primary/50',   bg: 'bg-primary/5 group-hover:bg-primary/15' },
];

export function Approach() {
  const ref = useScrollReveal();

  return (
    <section
      ref={ref}
      className="reveal-init py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto border-b border-white/5"
    >
      <div className="mb-16">
        <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-background font-bold mb-4">
          My Approach
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
          Principles that guide every project from inception to delivery.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {(approachItems as ApproachItem[]).map((item, i) => {
          const c = colors[i % colors.length];
          const icon = icons[item.label] ?? 'lightbulb';
          return (
            <div
              key={item.label}
              className={`group bg-surface-container p-8 rounded-lg border border-white/5 ${c.border} hover:bg-surface-container-high transition-all duration-500 relative overflow-hidden`}
            >
              <div className={`absolute top-0 right-0 w-28 h-28 rounded-bl-full translate-x-1/2 -translate-y-1/2 transition-colors duration-500 ${c.bg}`} />
              <span className={`material-symbols-outlined text-4xl ${c.color} mb-5 block`}>{icon}</span>
              <h3 className="font-headline-md text-headline-md text-on-background mb-3">{item.label}</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
