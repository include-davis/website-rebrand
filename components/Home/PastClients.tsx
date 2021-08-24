import styles from './PastClients.module.scss'

const Card = () => {
  return (
    <div>
      <article className={styles.card}>
        <h3>Farm Davis</h3>
      </article>
    </div>
  )
}

const PastClients = () => {
  return (
    <section id={styles.background}>
      <h2>Past Clients</h2>
      <hr />
      <div id={styles.container}>
        {new Array(8).fill(0).map(Card)}
      </div>
    </section>
  )
}

export default PastClients
