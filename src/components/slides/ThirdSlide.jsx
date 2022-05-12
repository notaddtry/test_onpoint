import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setShowPopup } from 'store/slices/popupSlice.js'
import PopupSlider from './PopupSlider.jsx'

import styles from './slides.module.scss'

const Thirdpage = () => {
  const dispatch = useDispatch()
  const isPopupShown = useSelector((state) => state.popupSlider.showPopup)
  // const [isPopupShow, setPopupShow] = useState(false)

  const handleShowPopup = () => {
    dispatch(setShowPopup(true))
  }

  return (
    <div className={`${styles.thirdslide_wrapper} container_body`}>
      <div className={styles.thirdslide_wrapper_content}>
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
              Ehicula ipsum a arcu cursus vitae. Eu non diam phasellus
              vestibulum lorem sed risus ultricies
            </span>
          </div>
          <div className={styles.thirdslide_item}>
            <span
              className={`${styles.thirdslide_body_text} ${styles.thirdslide_text_2}`}>
              A arcu cursus vitae
            </span>
          </div>
          <button className={styles.thirdslide_btn}>
            <img
              className={styles.styles_btn}
              onClick={handleShowPopup}
              src={`${process.env.PUBLIC_URL}/assets/images/bg_thirdpage/btn2.svg`}
              alt=''
            />
          </button>
        </div>
        {isPopupShown && <PopupSlider />}
      </div>
    </div>
  )
}

export default Thirdpage
