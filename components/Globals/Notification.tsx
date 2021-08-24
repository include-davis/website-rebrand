import styles from './Notification.module.scss'

import arrow from './images/right-arrow.png'

const Notification = () => {
  return (
    <aside id={styles.container}>
      <h2>
        Fall Applications are now open! Everyone is encouraged to apply
      </h2>
      <img src={arrow.src} alt="" />
    </aside>
  )
}

export default Notification
