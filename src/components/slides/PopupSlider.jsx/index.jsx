import React, { useLayoutEffect, useRef, useState } from 'react'
import Slide from '../../Slider/Slide'
import Slider from '../../Slider/Slider'

import {
  decIndex,
  incIndex,
  goToSlide,
  setShowPopup,
} from '../../../store/slices/popupSlice'

import styles from '../slides.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { useWindowResize } from 'hooks/sliderHook'

const SLIDES = [
  {
    id: 1,
    name: 'firstPopupSlide',
    content: [
      {
        spanId: '01',
        text: 'Lorem, ipsum dolor sit amet',
      },
      {
        spanId: '02',
        text: 'Lorem, ipsum dolor',
      },
      {
        spanId: '03',
        text: 'Lorem, ipsum dolor sit amet conse',
      },
    ],
  },
  {
    id: 2,
    name: 'secondPopupSlide',
    content: [
      {
        spanId: '04',
        text: 'Lorem, ipsum',
      },
      {
        spanId: '05',
        text: 'Lorem, ipsum dolor sit amet consectt',
      },
      {
        spanId: '06',
        text: 'Lorem, ipsum dolor sit amet consectetur',
      },
    ],
  },
]

const PopupSlider = () => {
  const dispatch = useDispatch()
  const SlideRef = useRef(null)

  const activeSlide = useSelector((state) => state.popupSlider.index)
  const isPopupShown = useSelector((state) => state.popupSlider.showPopup)
  const [slideClassName, setSlideClassName] = useState('')

  const handleShowPopup = () => {
    dispatch(setShowPopup(false))
  }

  useLayoutEffect(() => {
    setSlideClassName(SlideRef.current.className)
  }, [])

  useLayoutEffect(() => {
    resizeEvent()
    initEvent()
  }, [slideClassName])

  const { width, resizeEvent, initEvent } = useWindowResize(slideClassName)

  return (
    <div className={styles.popup_wrapper}>
      <div className={`${styles.popup_body} container_body`}>
        <div className={styles.popup_body_wrapper}>
          <div className={styles.popup_body_header}>
            <div className={styles.thirdslide_header}>
              <span className={styles.thirdslide_hello}>преимущества</span>
              <span className={styles.thirdslide_title}>
                BREND
                <span className={styles.thirdslide_title_bold}>XY </span>
              </span>
            </div>
            <button className={styles.popup_btn} onClick={handleShowPopup}>
              <img
                className={styles.styles_btn}
                src={`${process.env.PUBLIC_URL}/assets/images/popup/btn_close.svg`}
                alt=''
              />
            </button>
          </div>

          <div className={styles.thirdslide_content}>
            <Slider
              width={width}
              decIndex={decIndex}
              incIndex={incIndex}
              goToSlide={goToSlide}
              storeState={'popupSlider'}
              stylePrefix='popup_'
              bullets={true}
              activeSlide={activeSlide}>
              {SLIDES.map((slide) => (
                <Slide
                  key={slide.id}
                  id={slide.id}
                  activeSlide={activeSlide + 1}
                  ref={SlideRef}>
                  {slide.content.map((item, index) => (
                    <div className={styles.thirdslide_content_item} key={index}>
                      <span className={styles.popup_span_id}>
                        {item.spanId}
                      </span>
                      <span className={styles.popup_span_text}>
                        {item.text}
                      </span>
                    </div>
                  ))}
                </Slide>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PopupSlider
