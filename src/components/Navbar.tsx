import { useState } from 'react';
import { resume } from '../data.js';

const links = [
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education',  href: '#education' },
  { label: 'Contact',    href: '#contact' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-white/5 transition-all duration-300">
      <div className="flex justify-between items-center h-16 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">


        {/* Brand */}
        <a
          href="#"
          className="font-headline-md text-headline-md font-bold text-on-background tracking-tighter hover:text-primary transition-colors"
        >
          {"GD"}
        </a>

        {/* Desktop nav links */}
        <div className="hidden md:flex gap-1 items-center font-body-md text-body-md">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="text-on-surface-variant hover:text-on-surface hover:bg-white/5 px-3 py-2 rounded-lg transition-all duration-200"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Desktop CV button */}
        <a
          href={resume.file}
          download
          className="hidden md:inline-flex items-center gap-2 font-label-md text-label-md bg-white text-background px-5 py-2 rounded-full hover:bg-primary hover:text-on-primary transition-colors duration-300"
        >
          <span className="material-symbols-outlined text-base">download</span>
          {resume.label}
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-on-background p-1"
          onClick={() => setOpen(p => !p)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined">{open ? 'close' : 'menu'}</span>
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden border-t border-white/5 bg-background/95 backdrop-blur-xl px-margin-mobile py-4 flex flex-col gap-2">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-on-surface-variant hover:text-on-surface px-3 py-2 rounded-lg hover:bg-white/5 transition-all"
            >
              {l.label}
            </a>
          ))}
          <a
            href={resume.file}
            download
            className="mt-2 flex items-center justify-center gap-2 font-label-md text-label-md bg-white text-background px-5 py-2 rounded-full"
          >
            <span className="material-symbols-outlined text-base">download</span>
            {resume.label}
          </a>
        </div>
      )}
    </nav>
  );
}
