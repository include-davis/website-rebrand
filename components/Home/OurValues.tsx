import styles from './OurValues.module.scss'

import whiteBox from './images/white-box.png'

interface Value {
  name: string
  img: string
}

const Values: Value[] = [
  {
    name: "imagine",
    img: whiteBox.src
  },
  {
    name: "innovate",
    img: whiteBox.src
  },
  {
    name: "inspire",
    img: whiteBox.src
  }
]

const Card = ({ name, img }: Value) => {
  return (
    <article className={styles.card}>
      <h3>{name}</h3>
      <img src={img} alt="" />
    </article>
  )
}

const OurValues = () => {
  return (
    <div id={styles.background}>
      <section id={styles.container}>
        <h2>Our Values</h2>
        <hr />
        <div id={styles.cardBox}>
          {Values.map(Card)}
        </div>
      </section>
    </div>
  )
}

export default OurValues
