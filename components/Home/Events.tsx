import styles from './Events.module.scss'

import Link from 'next/link'

const Events = () => {
  return (
    <section id={styles.background}>
      <h2>
        Join #include and stay up to date with <Link href="/events"><a>events</a></Link> all year round
      </h2>
      <div id={styles.container}>
        <div>
          <div className={styles.circle}></div>
          <h3>Workshops</h3>
        </div>
        <div>
          <div className={styles.circle}></div>
          <h3>Invited Guests</h3>
        </div>
        <div>
          <div className={styles.circle}></div>
          <h3>Group Activities</h3>
        </div>
        <div>
          <div className={styles.circle}></div>
          <h3>Hangouts</h3>
        </div>
      </div>
      <Link href="/resources">
        <a><button>Go to Resources</button></a>
      </Link>
    </section>
  )
}

export default Events
