import { useState, useEffect } from 'react';
import { projects, personal } from '../data.js';
import { useScrollReveal } from '../hooks/useScrollReveal.js';

type Project = {
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo: string;
  images: string[];
};

const palette = [
  {
    color:    'text-primary',
    iconBg:   'bg-primary/10',
    iconBorder: 'border-primary/20',
    gradientFrom: 'from-primary/10',
    hoverLink: 'hover:text-primary',
    demoBtn:  'bg-primary/10 border-primary/20 text-primary',
    mockupAccent: 'bg-primary/30',
    mockupLine: 'bg-primary/10',
  },
  {
    color:    'text-secondary',
    iconBg:   'bg-secondary/10',
    iconBorder: 'border-secondary/20',
    gradientFrom: 'from-secondary/10',
    hoverLink: 'hover:text-secondary',
    demoBtn:  'bg-secondary/10 border-secondary/20 text-secondary',
    mockupAccent: 'bg-secondary/30',
    mockupLine: 'bg-secondary/10',
  },
  {
    color:    'text-tertiary',
    iconBg:   'bg-tertiary/10',
    iconBorder: 'border-tertiary/20',
    gradientFrom: 'from-tertiary/10',
    hoverLink: 'hover:text-tertiary',
    demoBtn:  'bg-tertiary/10 border-tertiary/20 text-tertiary',
    mockupAccent: 'bg-tertiary/30',
    mockupLine: 'bg-tertiary/10',
  },
];

// ── Abstract placeholder when project has no images ──────────────────────────

function AbstractMockup({ idx }: { idx: number }) {
  const c = palette[idx % 3];
  const rotation = idx % 2 === 0 ? 'rotate-2 group-hover:rotate-0' : '-rotate-2 group-hover:rotate-0';

  return (
    <div className="w-full h-full bg-surface rounded-xl border border-white/5 flex items-center justify-center overflow-hidden">
      <div
        className={`w-2/3 h-2/3 border border-white/10 rounded-lg bg-background p-5 shadow-2xl ${rotation} transition-transform duration-500`}
      >
        {/* Window chrome */}
        <div className="flex gap-2 mb-4">
          {[0, 1, 2].map(i => (
            <div key={i} className="w-3 h-3 rounded-full bg-white/15" />
          ))}
        </div>
        {/* Fake code lines */}
        <div className="space-y-2.5">
          <div className={`h-2.5 rounded-full ${c.mockupAccent} w-2/5`} />
          <div className={`h-2 rounded-full ${c.mockupLine} w-full`} />
          <div className={`h-2 rounded-full ${c.mockupLine} w-5/6`} />
          <div className={`h-2 rounded-full ${c.mockupLine} w-4/6`} />
          <div className="h-3" />
          <div className={`h-2.5 rounded-full ${c.mockupAccent} opacity-60 w-1/3`} />
          <div className={`h-2 rounded-full ${c.mockupLine} w-full`} />
          <div className={`h-2 rounded-full ${c.mockupLine} w-3/4`} />
        </div>
      </div>
    </div>
  );
}

// ── Carousel / visual area ───────────────────────────────────────────────────

function ProjectVisual({ project, idx }: { project: Project; idx: number }) {
  const c = palette[idx % 3];
  const [current, setCurrent] = useState(0);
  const [hovered, setHovered] = useState(false);
  const hasImages = project.images.length > 0;
  const multi = hasImages && project.images.length > 1;

  // Auto-advance carousel (pauses on hover)
  useEffect(() => {
    if (!multi || hovered) return;
    const id = setInterval(
      () => setCurrent(n => (n + 1) % project.images.length),
      3500,
    );
    return () => clearInterval(id);
  }, [multi, hovered, project.images.length]);

  return (
    <div
      className={`relative bg-surface-container-low rounded-2xl border border-white/5 p-4 aspect-[4/3] group overflow-hidden cursor-pointer select-none`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Accent gradient overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-tr ${c.gradientFrom} to-transparent transition-opacity duration-500 ${hovered ? 'opacity-100' : 'opacity-50'} z-[1] pointer-events-none`}
      />

      {/* Images or placeholder */}
      {hasImages ? (
        <div className="relative w-full h-full rounded-xl overflow-hidden bg-surface-container-lowest">
          {project.images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`${project.title} screenshot ${i + 1}`}
              draggable={false}
              className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-700 ${i === current ? 'opacity-100' : 'opacity-0'}`}
            />
          ))}
        </div>
      ) : (
        <AbstractMockup idx={idx} />
      )}

      {/* Carousel dots */}
      {multi && (
        <div className="absolute bottom-5 inset-x-0 flex justify-center gap-1.5 z-10">
          {project.images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current ? 'w-6 bg-white' : 'w-1.5 bg-white/35 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
      )}

      {/* Prev / Next arrows (only on multi-image) */}
      {multi && hovered && (
        <>
          <button
            onClick={() => setCurrent(n => (n - 1 + project.images.length) % project.images.length)}
            className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-background/70 backdrop-blur-sm border border-white/10 flex items-center justify-center text-on-background hover:bg-background transition-colors"
            aria-label="Previous"
          >
            <span className="material-symbols-outlined text-base">chevron_left</span>
          </button>
          <button
            onClick={() => setCurrent(n => (n + 1) % project.images.length)}
            className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-background/70 backdrop-blur-sm border border-white/10 flex items-center justify-center text-on-background hover:bg-background transition-colors"
            aria-label="Next"
          >
            <span className="material-symbols-outlined text-base">chevron_right</span>
          </button>
        </>
      )}

      {/* Hover overlay with action buttons */}
      <div
        className={`absolute inset-0 z-20 flex flex-col items-center justify-center gap-4 bg-background/75 backdrop-blur-sm transition-all duration-300 ${
          hovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className={`flex gap-3 transition-transform duration-300 ${hovered ? 'translate-y-0' : 'translate-y-3'}`}
        >
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={e => e.stopPropagation()}
            className="flex items-center gap-2 font-label-md text-label-md bg-surface-container border border-white/15 px-5 py-2.5 rounded-lg text-on-background hover:border-white/30 hover:bg-surface-container-high transition-all duration-200"
          >
            <span className="material-symbols-outlined text-base">code</span>
            Repository
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={e => e.stopPropagation()}
              className={`flex items-center gap-2 font-label-md text-label-md border px-5 py-2.5 rounded-lg transition-all duration-200 hover:opacity-80 ${c.demoBtn}`}
            >
              <span className="material-symbols-outlined text-base">open_in_new</span>
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

// ── Single project row ───────────────────────────────────────────────────────

function ProjectRow({ project, idx }: { project: Project; idx: number }) {
  const ref = useScrollReveal<HTMLDivElement>();
  const c = palette[idx % 3];
  const isEven = idx % 2 === 0;

  const textBlock = (
    <div className={`lg:w-1/2 ${isEven ? 'order-2 lg:order-1' : ''}`}>
      <div className="flex items-center gap-3 mb-6">
        <span className={`w-10 h-10 rounded flex items-center justify-center border ${c.iconBg} ${c.iconBorder}`}>
          <span className={`material-symbols-outlined ${c.color}`}>terminal</span>
        </span>
        <h3 className="font-headline-lg text-headline-lg text-on-background">{project.title}</h3>
      </div>

      <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-8">
        {project.tags.map(tag => (
          <span
            key={tag}
            className="px-3 py-1.5 rounded-full bg-surface border border-white/5 font-code-sm text-code-sm text-on-surface-variant"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-5">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 font-label-md text-label-md text-on-background ${c.hoverLink} transition-colors`}
        >
          View Repository{' '}
          <span className="material-symbols-outlined text-sm">arrow_outward</span>
        </a>
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 font-label-md text-label-md text-on-surface-variant ${c.hoverLink} transition-colors`}
          >
            Live Demo{' '}
            <span className="material-symbols-outlined text-sm">open_in_new</span>
          </a>
        )}
      </div>
    </div>
  );

  const visualBlock = (
    <div className={`lg:w-1/2 w-full ${isEven ? 'order-1 lg:order-2' : ''}`}>
      <ProjectVisual project={project} idx={idx} />
    </div>
  );

  return (
    <div
      ref={ref}
      className="reveal-init flex flex-col lg:flex-row items-center gap-12 lg:gap-24"
    >
      {isEven ? (
        <>
          {textBlock}
          {visualBlock}
        </>
      ) : (
        <>
          {visualBlock}
          {textBlock}
        </>
      )}
    </div>
  );
}

// ── Section ──────────────────────────────────────────────────────────────────

export function Projects() {
  const ref = useScrollReveal();

  return (
    <section
      id="projects"
      ref={ref}
      className="reveal-init py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto border-b border-white/5"
    >
      <div className="mb-16 flex justify-between items-end flex-wrap gap-6">
        <div>
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-background font-bold mb-4">
            Selected Works
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
            A curated selection of projects from my academic and personal work.
          </p>
        </div>
        <a
          href={(personal as { github: string }).github}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 font-label-md text-label-md text-primary hover:text-primary-fixed transition-colors"
        >
          View all repositories{' '}
          <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </a>
      </div>

      <div className="space-y-32">
        {(projects as Project[]).map((project, i) => (
          <ProjectRow key={project.title + i} project={project} idx={i} />
        ))}
      </div>

      {/* Mobile "view all" link */}
      <div className="mt-16 md:hidden flex justify-center">
        <a
          href={(personal as { github: string }).github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-label-md text-label-md text-primary"
        >
          View all repositories{' '}
          <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </a>
      </div>
    </section>
  );
}
