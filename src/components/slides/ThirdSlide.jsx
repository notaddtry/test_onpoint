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
      <div className={styles.thirdslide_background}>
        <picture className={styles.thirdslide_background_1}>
          <source
            srcSet={`${process.env.PUBLIC_URL}/assets/images/bg_thirdpage/bubbles_back/1.webp`}
            type='image/webp'
          />
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/bg_thirdpage/bubbles_back/1.png`}
            alt='описание'
          />
        </picture>
        <picture className={styles.thirdslide_background_2}>
          <source
            srcSet={`${process.env.PUBLIC_URL}/assets/images/bg_thirdpage/bubbles_back/2.webp`}
            type='image/webp'
          />
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/bg_thirdpage/bubbles_back/2.png`}
            alt='описание'
          />
        </picture>
        <picture className={styles.thirdslide_background_3}>
          <source
            srcSet={`${process.env.PUBLIC_URL}/assets/images/bg_thirdpage/bubbles_back/3.webp`}
            type='image/webp'
          />
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/bg_thirdpage/bubbles_back/3.png`}
            alt='описание'
          />
        </picture>
        <picture className={styles.thirdslide_background_4}>
          <source
            srcSet={`${process.env.PUBLIC_URL}/assets/images/bg_thirdpage/bubbles_back/4.webp`}
            type='image/webp'
          />
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/bg_thirdpage/bubbles_back/4.png`}
            alt='описание'
          />
        </picture>
        <picture className={styles.thirdslide_background_5}>
          <source
            srcSet={`${process.env.PUBLIC_URL}/assets/images/bg_thirdpage/bubbles_front/5.webp`}
            type='image/webp'
          />
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/bg_thirdpage/bubbles_front/5.png`}
            alt='описание'
          />
        </picture>
        <picture className={styles.thirdslide_background_6}>
          <source
            srcSet={`${process.env.PUBLIC_URL}/assets/images/bg_thirdpage/bubbles_front/6.webp`}
            type='image/webp'
          />
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/bg_thirdpage/bubbles_front/6.png`}
            alt='описание'
          />
        </picture>
        <picture className={styles.thirdslide_background_7}>
          <source
            srcSet={`${process.env.PUBLIC_URL}/assets/images/bg_thirdpage/bubbles_front/7.webp`}
            type='image/webp'
          />
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/bg_thirdpage/bubbles_front/7.png`}
            alt='описание'
          />
        </picture>
        <picture className={styles.thirdslide_background_7}>
          <source
            srcSet={`${process.env.PUBLIC_URL}/assets/images/bg_thirdpage/bubbles_front/8.webp`}
            type='image/webp'
          />
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/bg_thirdpage/bubbles_front/8.png`}
            alt='описание'
          />
        </picture>
        <picture className={styles.thirdslide_background_7}>
          <source
            srcSet={`${process.env.PUBLIC_URL}/assets/images/bg_thirdpage/bottle.webp`}
            type='image/webp'
          />
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/bg_thirdpage/bottle.png`}
            alt='описание'
          />
        </picture>
      </div>

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
            Ehicula ipsum a arcu cursus vitae. Eu non diam phasellus vestibulum
            lorem
          </span>

          <span
            className={`${styles.thirdslide_body_text} ${styles.thirdslide_text_2}`}>
            A arcu cursus vitae
          </span>
          <button className={styles.thirdslide_btn}>
            <img
              className={styles.styles_btn}
              onClick={handleShowPopup}
              src={`${process.env.PUBLIC_URL}/assets/images/bg_thirdpage/btn2.svg`}
              alt=''
            />
          </button>
        </div>
      </div>
      {isPopupShown && <PopupSlider />}
    </div>
  )
}

export default Thirdpage
