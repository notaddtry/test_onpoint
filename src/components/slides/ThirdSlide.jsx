import React from 'react'
import PopupSlider from './PopupSlider.jsx'

import styles from './slides.module.scss'

const Thirdpage = () => {
  return (
    <div className={styles.thirdslide_wrapper}>
      <div className={styles.thirdslide_header}>
        <span className={styles.thirdslide_hello}>Ключевое сообщение</span>
        <span className={styles.thirdslide_title}>
          BREND
          <span className={styles.thirdslide_title_bold}>XY</span>
        </span>
      </div>
      <div className={styles.thirdslide_body}>
        <div className={styles.thirdslide_item}>
          <span
            className={`${styles.thirdslide_body_text} ${styles.thirdslide_text_1}`}>
            Ehicula ipsum a arcu cursus vitae. Eu non diam phasellus vestibulum
            lorem sed risus ultricies
          </span>
        </div>
        <div className={styles.thirdslide_item}>
          <span
            className={`${styles.thirdslide_body_text} ${styles.thirdslide_text_2}`}>
            A arcu cursus vitae
          </span>
        </div>
        <button className={`${styles.thirdslide_btn} ${styles.btn}`}></button>
      </div>
      <PopupSlider />
    </div>
  )
}

export default Thirdpage
