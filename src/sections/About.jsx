import { personal, skills } from '../data'
import styles from '../modules/About.module.css'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="section-header">
        <span className="section-num">01</span>
        <h2 className="section-title">About Me</h2>
      </div>

      <div className={styles.grid}>

        <div className={styles.bio}>
          {personal.bio.map((para, i) => (
            <p key={i} className={styles.para}>{para}</p>
          ))}
          <div className={styles.pills}>
            <span className={styles.pill}>📍 {personal.location}</span>
            <span className={styles.pill}>🎓 {personal.year}</span>
            <span className={styles.pill}>✅ Open to Internships</span>
          </div>
        </div>

        <div className={styles.skillsCol}>
          {skills.map(group => (
            <div key={group.category} className={styles.group}>
              <p className={styles.groupLabel}>{group.category}</p>
              <div className={styles.tags}>
                {group.items.map(s => (
                  <span key={s} className="skill-tag">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}