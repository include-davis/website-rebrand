import styles from './Nav.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const Nav = () => {
  const { pathname } = useRouter()

  useEffect(() => {
    console.log(pathname)
  }, [pathname])

  return (
    <div id={styles.background}>
      <Link href="/"><a><h1>#</h1></a></Link>
      <nav id={styles.menu}>
        <Link href="/">
          <a className={pathname === "/" ? styles.selected : undefined}>Home</a>
        </Link>
        <Link href="/about">
          <a className={pathname === "/about" ? styles.selected : undefined}>About</a>
        </Link>
        <Link href="/events">
          <a className={pathname === "/events" ? styles.selected : undefined}>Events</a>
        </Link>
        <Link href="/projects">
          <a className={pathname === "/projects" ? styles.selected : undefined}>Projects</a>
        </Link>
        <Link href="/resources">
          <a className={pathname === "/resources" ? styles.selected : undefined}>Resources</a>
        </Link>
        <Link href="/contact-us">
          <a className={pathname === "/contact-us" ? styles.selected : undefined}>Contact Us</a>
        </Link>
      </nav>
    </div>
  )
}

export default Nav
