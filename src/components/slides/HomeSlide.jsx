import React from 'react'
import { useDispatch } from 'react-redux'
import { incIndex } from 'store/slices/sliderSlice'

import styles from './slides.module.scss'

const Homepage = () => {
  const dispatch = useDispatch()
  const submitHandler = () => {
    dispatch(incIndex())
  }

  return (
    <div className={`${styles.homeslide_wrapper} container_body`}>
      <div className={styles.homeslide_background}>
        <picture className={styles.homeslide_background_1}>
          <source
            srcSet={`${process.env.PUBLIC_URL}/assets/images/bg_homepage/Layer7.webp`}
            type='image/webp'
          />
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/bg_homepage/Layer7.png`}
            alt='описание'
          />
        </picture>
        <picture className={styles.homeslide_background_2}>
          <source
            srcSet={`${process.env.PUBLIC_URL}/assets/images/bg_homepage/bakti_1.webp`}
            type='image/webp'
          />
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/bg_homepage/bakti_1.png`}
            alt='описание'
          />
        </picture>
        <picture className={styles.homeslide_background_3}>
          <source
            srcSet={`${process.env.PUBLIC_URL}/assets/images/bg_homepage/pink_sperm.webp`}
            type='image/webp'
          />
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/bg_homepage/pink_sperm.png`}
            alt='описание'
          />
        </picture>
        <picture className={styles.homeslide_background_4}>
          <source
            srcSet={`${process.env.PUBLIC_URL}/assets/images/bg_homepage/Layer4copy.webp`}
            type='image/webp'
          />
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/bg_homepage/Layer4copy.png`}
            alt='описание'
          />
        </picture>
        <picture className={styles.homeslide_background_5}>
          <source
            srcSet={`${process.env.PUBLIC_URL}/assets/images/bg_homepage/pink_sperm_1.webp`}
            type='image/webp'
          />
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/bg_homepage/pink_sperm_1.png`}
            alt='описание'
          />
        </picture>
        <picture className={styles.homeslide_background_6}>
          <source
            srcSet={`${process.env.PUBLIC_URL}/assets/images/bg_homepage/Layer4.webp`}
            type='image/webp'
          />
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/bg_homepage/Layer4.png`}
            alt='описание'
          />
        </picture>
        <picture className={styles.homeslide_background_7}>
          <source
            srcSet={`${process.env.PUBLIC_URL}/assets/images/bg_homepage/Layer9.webp`}
            type='image/webp'
          />
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/bg_homepage/Layer9.png`}
            alt='описание'
          />
        </picture>
        <picture className={styles.homeslide_background_7}>
          <source
            srcSet={`${process.env.PUBLIC_URL}/assets/images/bg_homepage/Layer8.webp`}
            type='image/webp'
          />
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/bg_homepage/Layer8.png`}
            alt='описание'
          />
        </picture>
        <picture className={styles.homeslide_background_7}>
          <source
            srcSet={`${process.env.PUBLIC_URL}/assets/images/bg_homepage/Layer4copy2.webp`}
            type='image/webp'
          />
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/bg_homepage/Layer4copy2.png`}
            alt='описание'
          />
        </picture>
      </div>
      <span className={styles.homeslide_hello}>Привет,</span>
      <br />
      <span className={styles.homeslide_text}>
        это <span className={styles.homeslide_text_bold}> не</span> коммерческое
        задание
        <button className={styles.homeslide_btn} onClick={submitHandler}>
          <img
            className={styles.styles_btn}
            src={`${process.env.PUBLIC_URL}/assets/images/bg_homepage/btn.svg`}
            alt=''
          />
        </button>
      </span>
    </div>
  )
}

export default Homepage
