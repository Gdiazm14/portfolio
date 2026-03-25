import { education, approachItems } from '../data'
import styles from '../modules/Experience.module.css'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="section-header">
        <span className="section-num">03</span>
        <h2 className="section-title">Education</h2>
      </div>

      {/* Formal education */}
      <div className={styles.list}>
        {education.map((item, i) => (
          <div key={i} className={styles.item}>
            <span className={styles.period}>{item.period}</span>
            <div className={styles.content}>
              <p className={styles.degree}>{item.degree}</p>
              <p className={styles.institution}>{item.institution}</p>
              <p className={styles.detail}>{item.detail}</p>
            </div>
          </div>
        ))}
      </div>

      {/* My approach */}
      <div className={styles.values}>
        <p className={styles.valuesLabel}>My Approach</p>
        <div className={styles.valuesGrid}>
          {approachItems.map(v => (
            <div key={v.label} className={styles.valueCard}>
              <span className={styles.valueDot} aria-hidden="true" />
              <p className={styles.valueLabel}>{v.label}</p>
              <p className={styles.valueDesc}>{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}