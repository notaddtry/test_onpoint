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
