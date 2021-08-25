import styles from './Footer.module.scss'

import Link from 'next/link'

const Footer = () => {
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
              <a>Home</a>
            </Link>
            <Link href="/about">
              <a>About</a>
            </Link>
            <Link href="/projects">
              <a>Projects</a>
            </Link>
          </div>
          <div>
            <Link href="/events">
              <a>Events</a>
            </Link>
            <Link href="resources">
              <a>Resources</a>
            </Link>
            <Link href="/contact-us">
              <a>Contact Us</a>
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
