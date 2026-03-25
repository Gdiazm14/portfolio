import { useEffect, useRef } from 'react'
import { personal } from '../data'
import styles from '../modules/Hero.module.css'

const WORDS = ['Greivin Díaz.', 'a Full-Stack Dev.', 'a Problem Solver.']

function useTypewriter(elementRef) {
    useEffect(() => {
        let wi = 0, ci = 0, deleting = false, timer

        function tick() {
            const word = WORDS[wi]
            if (!deleting) {
                ci++
                elementRef.current.textContent = word.slice(0, ci)
                if (ci === word.length) {
                    deleting = true
                    timer = setTimeout(tick, 1400)
                    return
                }
            } else {
                ci--
                elementRef.current.textContent = word.slice(0, ci)
                if (ci === 0) {
                    deleting = false
                    wi = (wi + 1) % WORDS.length
                }
            }
            timer = setTimeout(tick, deleting ? 55 : 95)
        }

        timer = setTimeout(tick, 600)
        return () => clearTimeout(timer)
    }, [])
}

const configLines = [
    { key: 'name',   value: `"${personal.name}"`,           type: 'str' },
    { key: 'stack',  value: '["React", "Spring Boot", "ASP.NET"]', type: 'arr' },
    { key: 'status', value: 'OPEN_TO_WORK',                 type: 'val' },
]

export default function Hero() {
    const twRef = useRef(null)
    useTypewriter(twRef)

    return (
        <section id="hero" className={styles.hero}>
            <div className={styles.inner}>

                {/* Terminal code block */}
                <div className={`${styles.terminalWrap} fade-up`} style={{ animationDelay: '0.05s' }}>
                    <div className={styles.fileTab}>
                        <span className={styles.fileDot} />
                        <span className={styles.fileName}>portfolio.config.js</span>
                    </div>
                    <div className={styles.terminal}>
                        <p className={styles.codeLine}>
                            <span className={styles.cCmt}>// developer profile</span>
                        </p>
                        <p className={styles.codeLine}>
                            <span className={styles.cKey}>const </span>
                            <span className={styles.cDefault}>developer</span>
                            <span className={styles.cCmt}> = {'{'}</span>
                        </p>
                        {configLines.map(l => (
                            <p key={l.key} className={`${styles.codeLine} ${styles.codeIndent}`}>
                                <span className={styles.cKey}>{l.key}</span>
                                <span className={styles.cCmt}>: </span>
                                <span className={l.type === 'str' ? styles.cStr : l.type === 'val' ? styles.cVal : styles.cArr}>
                                    {l.value}
                                </span>
                                <span className={styles.cCmt}>,</span>
                            </p>
                        ))}
                        <p className={styles.codeLine}>
                            <span className={styles.cCmt}>{'}'}</span>
                        </p>
                    </div>
                </div>

                {/* Eyebrow */}
                <p className={`${styles.eyebrow} fade-up`} style={{ animationDelay: '0.15s' }}>
                    {personal.role} · {personal.year}
                </p>

                {/* Typewriter headline */}
                <div className={`${styles.typewriterBlock} fade-up`} style={{ animationDelay: '0.2s' }}>
                    <span className={styles.twPrefix}>// hi, i'm</span>
                    <h1 className={styles.name}>
                        <span ref={twRef} className={styles.twText}></span>
                        <span className={styles.cursor} aria-hidden="true">|</span>
                    </h1>
                </div>

                <p className={`${styles.tagline} fade-up`} style={{ animationDelay: '0.3s' }}>
                    I build scalable web applications using modern technologies,
                    focusing on clean architecture, performance, and continuous learning.
                </p>

                <div className={`${styles.ctas} fade-up`} style={{ animationDelay: '0.38s' }}>
                    <button
                        className="btn-primary"
                        onClick={() => document.getElementById('projects')
                            .scrollIntoView({ behavior: 'smooth' })}
                    >
                        View Projects
                    </button>
                    <button
                        className="btn-outline"
                        onClick={() => document.getElementById('contact')
                            .scrollIntoView({ behavior: 'smooth' })}
                    >
                        Contact Me
                    </button>
                </div>

            </div>
        </section>
    )
}