import { personal, opportunities } from '../data.js';

export function Hero() {
  return (
    <section className="relative min-h-[716px] flex items-center justify-center px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto border-b border-white/5 overflow-hidden">

      {/* ── Background layer ── */}

      {/* Dot grid */}
      <div className="absolute inset-0 hero-grid pointer-events-none" />

      {/* Central glow — largest */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[640px] h-[640px] bg-primary/20 rounded-full blur-[130px] pointer-events-none anim-glow-pulse" />

      {/* Floating orb — secondary, top-right */}
      <div
        className="absolute top-1/4 right-1/5 w-72 h-72 bg-secondary/10 rounded-full blur-[90px] pointer-events-none anim-float-mid"
        style={{ animationDelay: '1.5s' }}
      />

      {/* Floating orb — tertiary, bottom-left */}
      <div
        className="absolute bottom-1/4 left-1/6 w-56 h-56 bg-tertiary/10 rounded-full blur-[70px] pointer-events-none anim-float-drift"
        style={{ animationDelay: '3s' }}
      />

      {/* Floating orb — primary accent, top-left */}
      <div
        className="absolute top-1/3 left-1/4 w-40 h-40 bg-primary/10 rounded-full blur-[60px] pointer-events-none anim-float-slow"
        style={{ animationDelay: '0.8s' }}
      />

      {/* Horizontal scan line */}
      <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent pointer-events-none anim-scan" />

      {/* Subtle top-left corner glow */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      {/* ── Content ── */}
      <div className="relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center gap-6 py-16">

        {/* Availability badge */}
        <div className="hero-el-1 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-surface-container/50 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">
            {opportunities.title}
          </span>
        </div>

        {/* Name */}
        <h1 className="hero-el-2 font-headline-xl text-headline-xl md:text-[64px] md:leading-[1.1] font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-on-background to-on-surface-variant">
          {personal.name}
        </h1>

        {/* Role + year + location */}
        <p className="hero-el-3 font-body-lg text-body-lg text-primary font-medium">
          {personal.role}
          <span className="text-on-surface-variant font-normal">
            {' '}·{' '}{personal.year}{' '}·{' '}{personal.location}
          </span>
        </p>

        {/* Bio intro */}
        <p className="hero-el-4 font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          {personal.bio[0]}
        </p>

        {/* CTAs */}
        <div className="hero-el-5 flex flex-wrap justify-center gap-4 mt-2">
          <a
            href="#about"
            className="font-label-md text-label-md bg-gradient-to-r from-primary to-primary-container text-on-primary px-8 py-3 rounded hover:shadow-[0_0_24px_rgba(192,193,255,0.35)] transition-all duration-300 btn-shimmer"
          >
            Explore my Work
          </a>
          <a
            href="#contact"
            className="font-label-md text-label-md border border-white/10 bg-surface-container-low text-on-surface px-8 py-3 rounded hover:bg-surface-container hover:border-white/20 transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>

        {/* Social pill links */}
        <div className="hero-el-5 flex gap-4 mt-2" style={{ animationDelay: '1.1s' }}>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"
          >
            <span className="material-symbols-outlined text-base">code</span>
            GitHub
          </a>
          <span className="text-outline-variant">·</span>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"
          >
            <span className="material-symbols-outlined text-base">person</span>
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
