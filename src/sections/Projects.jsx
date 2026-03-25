import { useState, useCallback } from 'react'
import { projects } from '../data'
import styles from '../modules/Projects.module.css'

function Carousel({ images, name }) {
  const [index, setIndex] = useState(0)

  const prev = useCallback((e) => {
    e.stopPropagation()
    setIndex(i => (i - 1 + images.length) % images.length)
  }, [images.length])

  const next = useCallback((e) => {
    e.stopPropagation()
    setIndex(i => (i + 1) % images.length)
  }, [images.length])

  if (!images || images.length === 0) {
    return (
      <div className={styles.previewPlaceholder}>
        <span className={styles.placeholderIcon}>⬡</span>
        <span className={styles.placeholderLabel}>{name}</span>
      </div>
    )
  }

  return (
    <div className={styles.carousel}>
      {/* Slides */}
      <div className={styles.slides} style={{ transform: `translateX(-${index * 100}%)` }}>
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`${name} screenshot ${i + 1}`}
            className={styles.slide}
            draggable={false}
          />
        ))}
      </div>

      {/* Arrows — only show when more than one image */}
      {images.length > 1 && (
        <>
          <button
            className={`${styles.arrow} ${styles.arrowLeft}`}
            onClick={prev}
            aria-label="Previous screenshot"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>
          <button
            className={`${styles.arrow} ${styles.arrowRight}`}
            onClick={next}
            aria-label="Next screenshot"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>

          {/* Counter */}
          <span className={styles.counter}>{index + 1} / {images.length}</span>
        </>
      )}
    </div>
  )
}

function ProjectCard({ project }) {
  return (
    <article className={styles.card}>

      {/* Preview / Carousel */}
      <div className={styles.preview}>
        <Carousel images={project.images} name={project.name} />

        {/* Overlay links — shown on hover */}
        <div className={styles.previewOverlay}>
          <div className={styles.previewLinks}>
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer"
                className={styles.previewBtn}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
                GitHub
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer"
                className={`${styles.previewBtn} ${styles.previewBtnPrimary}`}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="1.5">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
                </svg>
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Card body */}
      <div className={styles.body}>
        <span className={styles.tag}>{project.tag}</span>
        <h3 className={styles.name}>{project.name}</h3>
        <p className={styles.desc}>{project.description}</p>

        {project.highlights && (
          <ul className={styles.highlights}>
            {project.highlights.map(h => (
              <li key={h} className={styles.highlight}>
                <span className={styles.highlightDot} aria-hidden="true" />
                {h}
              </li>
            ))}
          </ul>
        )}

        <div className={styles.stack}>
          {project.stack.map(s => (
            <span key={s} className={styles.pill}>{s}</span>
          ))}
        </div>
      </div>

    </article>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-header">
        <span className="section-num">02</span>
        <h2 className="section-title">Projects</h2>
      </div>

      <div className={styles.grid}>
        {projects.map(p => (
          <ProjectCard key={p.name} project={p} />
        ))}
      </div>
    </section>
  )
}