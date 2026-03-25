import { personal } from '../data'
import styles from '../modules/Contact.module.css'

const links = [
    {
        label: 'Email',
        value: personal.email,
        href: `mailto:${personal.email}`,
    },
    {
        label: 'GitHub',
        value: personal.github.replace('https://', ''),
        href: personal.github,
    },
    {
        label: 'LinkedIn',
        value: personal.linkedin.replace('https://', ''),
        href: personal.linkedin,
    },
]

export default function Contact() {
    return (
        <section id="contact" className="section">
            <div className="section-header">
                <span className="section-num">04</span>
                <h2 className="section-title">Contact</h2>
            </div>

            <div className={styles.grid}>

                <div className={styles.left}>
                    <h3 className={styles.headline}>
                        Let's build something<br />
                        <em className={styles.em}>together.</em>
                    </h3>
                    <p className={styles.sub}>
                        I'm actively looking for internship opportunities and collaborative
                        projects where I can contribute, learn, and grow.
                        Feel free to reach out — I'd love to connect.
                    </p>
                </div>

                <div className={styles.links}>
                    {links.map(l => (
                        <a
                            key={l.label}
                            href={l.href}
                            target={l.href.startsWith('mailto') ? undefined : '_blank'}
                            rel="noopener noreferrer"
                            className={styles.link}
                        >
                            <div>
                                <p className={styles.linkLabel}>{l.label}</p>
                                <p className={styles.linkValue}>{l.value}</p>
                            </div>
                            <span className={styles.arrow}>↗</span>
                        </a>
                    ))}
                </div>

            </div>
        </section>
    )
}