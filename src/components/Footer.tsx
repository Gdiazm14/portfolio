import { personal } from '../data.js';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full py-8 bg-surface-container-lowest border-t border-white/5">
      <div className="flex flex-col md:flex-row justify-between items-center px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto gap-4">
        <div className="font-body-sm text-body-sm text-on-surface-variant">
          © {year} {personal.name}. Built with React &amp; Tailwind.
        </div>
        <div className="flex gap-6">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary hover:-translate-y-0.5 transition-all duration-300"
          >
            GitHub
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary hover:-translate-y-0.5 transition-all duration-300"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary hover:-translate-y-0.5 transition-all duration-300"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
