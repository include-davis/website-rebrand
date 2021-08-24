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
    <div>
      <article className={styles.card} key={name}>
        <h3>{name}</h3>
        <img src={img} alt="" />
      </article>
    </div>
  )
}

const OurValues = () => {
  return (
    <section id={styles.background}>
      <h2>Our Values</h2>
      <hr />
      <div id={styles.container}>
        {Values.map(Card)}
      </div>
    </section>
  )
}

export default OurValues
