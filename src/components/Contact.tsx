import { useState, type ChangeEvent, type FormEvent } from 'react';
import { personal, opportunities } from '../data.js';
import { useScrollReveal } from '../hooks/useScrollReveal.js';

type FormState = { name: string; email: string; message: string };

export function Contact() {
  const ref = useScrollReveal();
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm(prev => ({ ...prev, [e.target.id]: e.target.value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.open(`mailto:${personal.email}?subject=${subject}&body=${body}`);
    setSent(true);
  }

  return (
    <section
      id="contact"
      ref={ref}
      className="reveal-init py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto"
    >
      <div className="bg-surface-container-low border border-white/5 rounded-2xl p-8 md:p-16 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/10 rounded-full blur-3xl pointer-events-none -translate-x-1/3 translate-y-1/3" />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="font-headline-xl text-headline-xl md:text-5xl font-bold tracking-tighter text-on-background mb-6">
            Let's Build Together
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-12">
            {opportunities.description}
          </p>

          {/* Social links */}
          <div className="flex justify-center gap-6 mb-12">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-label-md text-label-md bg-surface-container border border-white/10 px-5 py-2.5 rounded-lg text-on-surface hover:border-primary/40 hover:text-primary transition-all duration-300"
            >
              <span className="material-symbols-outlined text-base">code</span>
              GitHub
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-label-md text-label-md bg-surface-container border border-white/10 px-5 py-2.5 rounded-lg text-on-surface hover:border-secondary/40 hover:text-secondary transition-all duration-300"
            >
              <span className="material-symbols-outlined text-base">person</span>
              LinkedIn
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="flex items-center gap-2 font-label-md text-label-md bg-surface-container border border-white/10 px-5 py-2.5 rounded-lg text-on-surface hover:border-tertiary/40 hover:text-tertiary transition-all duration-300"
            >
              <span className="material-symbols-outlined text-base">mail</span>
              Email
            </a>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-12">
            <div className="flex-1 h-px bg-white/5" />
            <span className="font-body-sm text-body-sm text-on-surface-variant">or send a message</span>
            <div className="flex-1 h-px bg-white/5" />
          </div>

          {/* Form */}
          {sent ? (
            <div className="bg-surface-container border border-primary/20 rounded-xl p-8 text-center">
              <span className="material-symbols-outlined text-5xl text-primary mb-4 block">check_circle</span>
              <h3 className="font-headline-md text-headline-md text-on-background mb-2">Message sent!</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Your email client should have opened. Looking forward to connecting!
              </p>
              <button
                onClick={() => setSent(false)}
                className="mt-6 font-label-md text-label-md text-primary hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6 text-left">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block font-label-md text-label-md text-on-surface-variant mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full bg-surface border border-white/10 rounded-lg px-4 py-3 text-on-background placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-label-md text-label-md text-on-surface-variant mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full bg-surface border border-white/10 rounded-lg px-4 py-3 text-on-background placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block font-label-md text-label-md text-on-surface-variant mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  value={form.message}
                  onChange={handleChange}
                  placeholder="How can we collaborate?"
                  rows={4}
                  className="w-full bg-surface border border-white/10 rounded-lg px-4 py-3 text-on-background placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full font-label-md text-label-md bg-primary text-on-primary px-8 py-4 rounded-lg hover:bg-primary-fixed transition-colors duration-300 flex items-center justify-center gap-2"
              >
                Send Message
                <span className="material-symbols-outlined text-sm">send</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
