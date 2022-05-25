import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setShowPopup } from 'store/slices/popupSlice.js'
import PopupSlider from './PopupSlider.jsx'
import SlideBackground from './SlideBackground.jsx'

import styles from './slides.module.scss'

const images = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const slideName = 'thirdslide'

const Thirdpage = () => {
  const dispatch = useDispatch()
  const isPopupShown = useSelector((state) => state.popupSlider.showPopup)

  const handleShowPopup = () => {
    dispatch(setShowPopup(true))
  }

  return (
    <>
      <div
        className={`${styles.thirdslide_wrapper} container_body`}
        id='thirdSlide'>
        <SlideBackground images={images} slideName={slideName} />
        <div className={styles.thirdslide_wrapper_content}>
          <div className={styles.thirdslide_header}>
            <span className={styles.thirdslide_hello}>Ключевое сообщение</span>
            <span className={styles.thirdslide_title}>
              BREND
              <span className={styles.thirdslide_title_bold}>XY</span>
            </span>
          </div>
          <div className={styles.thirdslide_body}>
            <span
              className={`${styles.thirdslide_body_text} ${styles.thirdslide_text_1}`}>
              Ehicula ipsum a arcu cursus vitae. Eu non diam phasellus
              vestibulum lorem
            </span>

            <span
              className={`${styles.thirdslide_body_text} ${styles.thirdslide_text_2}`}>
              A arcu cursus vitae
            </span>
            <button className={styles.thirdslide_btn}>
              <img
                className={styles.styles_btn}
                onClick={handleShowPopup}
                src={`${process.env.PUBLIC_URL}/assets/images/thirdslide_background/btn2.svg`}
                alt=''
              />
            </button>
          </div>
        </div>
      </div>
      {isPopupShown && <PopupSlider />}
    </>
  )
}

export default Thirdpage
