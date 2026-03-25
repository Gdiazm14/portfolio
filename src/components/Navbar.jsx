import { useState, useEffect } from 'react'
import { personal } from '../data'
import styles from './Navbar.module.css'

const links = [
  { href: '#about',      label: 'About' },
  { href: '#projects',   label: 'Projects' },
  { href: '#experience', label: 'Education' },
  { href: '#contact',    label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>

        <a href="#hero" className={styles.logo}>
          {personal.name.split(' ').slice(0, 2).map(w => w[0]).join('')}
        </a>

        <ul className={styles.links}>
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} className={styles.link}>{l.label}</a>
            </li>
          ))}
        </ul>

        <a href={`mailto:${personal.email}`} className={styles.cta}>
          Let's Talk ↗
        </a>

        <button
          className={styles.burger}
          onClick={() => setOpen(o => !o)}
          aria-label="Menu"
        >
          <span className={`${styles.bar} ${open ? styles.bar1 : ''}`} />
          <span className={`${styles.bar} ${open ? styles.bar2 : ''}`} />
        </button>
      </div>

      <div className={`${styles.mobile} ${open ? styles.mobileOpen : ''}`}>
        {links.map(l => (
          <a key={l.href} href={l.href} className={styles.mobileLink}
            onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
      </div>
    </nav>
  )
}