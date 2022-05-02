import React from 'react'

import styles from './slides.module.scss'

const Homepage = () => {
  return (
    <div className={styles.homeslide_wrapper}>
      <span className={styles.homeslide_hello}>Привет,</span>
      <span className={styles.homeslide_text}>
        это не коммерческое задание
        <button className={`${styles.homeslide_btn} ${styles.btn}`}></button>
      </span>
    </div>
  )
}

export default Homepage
