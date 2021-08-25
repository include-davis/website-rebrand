import styles from './Footer.module.scss'

import Link from 'next/link'
import { useRouter } from 'next/router'

const Footer = () => {
  const { pathname } = useRouter()

  return (
    <footer id={styles.background}>
      <div id={styles.topRow}>
        <div id={styles.slogan}>
          <h2>#include</h2>
          <p>imagine, innovate, inspire.</p>
        </div>
        <div id={styles.navigation}>
          <div>
            <Link href="/">
              <a className={pathname === "/" ? styles.selected : undefined}>Home</a>
            </Link>
            <Link href="/about">
              <a className={pathname === "/about" ? styles.selected : undefined}>About</a>
            </Link>
            <Link href="/projects">
              <a className={pathname === "/projects" ? styles.selected : undefined}>Projects</a>
            </Link>
          </div>
          <div>
            <Link href="/events">
              <a className={pathname === "/events" ? styles.selected : undefined}>Events</a>
            </Link>
            <Link href="resources">
              <a className={pathname === "/resources" ? styles.selected : undefined}>Resources</a>
            </Link>
            <Link href="/contact-us">
              <a className={pathname === "/contact-us" ? styles.selected : undefined}>Contact Us</a>
            </Link>
          </div>
        </div>
        <form id={styles.newsletter}>
          <label htmlFor="email">Join our Weekly Newsletter:</label>
          <input type="text" id="email" name="email" placeholder="Type your email here" />
        </form>
      </div>
      <hr />
      <div id={styles.socials}>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
      </div>
      <p>made with &lt;3 at Davis</p>
    </footer>
  )
}

export default Footer
