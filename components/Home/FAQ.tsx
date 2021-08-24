import styles from './FAQ.module.scss'

const FAQ = () => {
  return (
    <div id={styles.background}>
      <section id={styles.container}>
        <h2>FAQ</h2>
        <ul id={styles.questions}>
          <li className={styles.question}>
            <p>Who are we?</p>
            <span>+</span>
          </li>
          <hr />
          <li className={styles.question}>
            <p>What do we do?</p>
            <span>+</span>
          </li>
          <hr />
          <li className={styles.question}>
            <p>How does #include fight technological inaccessibility?</p>
            <span>+</span>
          </li>
        </ul>
      </section>
    </div>
  )
}

export default FAQ
