import React from 'react'
import { useDispatch } from 'react-redux'

import { incIndex } from 'store/slices/sliderSlice'
import SlideBackground from './SlideBackground'

import styles from './slides.module.scss'

const images = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const slideName = 'homeslide'

const Homepage = () => {
  const dispatch = useDispatch()
  const submitHandler = () => {
    dispatch(incIndex())
  }

  return (
    <div
      className={`${styles.homeslide_wrapper} container_body`}
      id='homeSlide'>
      <SlideBackground images={images} slideName={slideName} />
      <span className={styles.homeslide_hello}>Привет,</span>
      <span className={styles.homeslide_text}>
        это <span className='text_bold'> не</span> коммерческое задание
        <button className={styles.homeslide_btn} onClick={submitHandler}>
          <img
            className={styles.styles_btn}
            src={`${process.env.PUBLIC_URL}/assets/images/homeslide_background/btn.svg`}
            alt=''
          />
        </button>
      </span>
    </div>
  )
}

export default Homepage
