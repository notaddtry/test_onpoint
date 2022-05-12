import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
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
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit',
      },
      {
        spanId: '02',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit',
      },
      {
        spanId: '03',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit',
      },
    ],
  },
  {
    id: 2,
    name: 'secondPopupSlide',
    content: [
      {
        spanId: '04',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit',
      },
      {
        spanId: '05',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit',
      },
      {
        spanId: '06',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit',
      },
    ],
  },
]

const PopupSlider = () => {
  const dispatch = useDispatch()
  const activeSlide = useSelector((state) => state.popupSlider.index)
  const isPopupShown = useSelector((state) => state.popupSlider.showPopup)
  const [sliderClassName, setSliderClassName] = useState('')
  const { width } = useWindowResize(sliderClassName)

  const SliderRef = useRef(null)

  const handleShowPopup = () => {
    dispatch(setShowPopup(false))
  }

  useLayoutEffect(() => {
    setSliderClassName(SliderRef.current.className)
  }, [])

  return (
    <div className={styles.popup_wrapper}>
      <div className={`${styles.popup_body} container_body`}>
        <div className={styles.popup_body_wrapper}>
          <div className={styles.thirdslide_header}>
            <span className={styles.thirdslide_hello}>преимущества</span>
            <span className={styles.thirdslide_title}>
              BREND
              <span className={styles.thirdslide_title_bold}>XY </span>
            </span>
            <button className={styles.popup_btn} onClick={handleShowPopup}>
              <img
                className={styles.styles_btn}
                src={`${process.env.PUBLIC_URL}/assets/images/popup/btn_close.svg`}
                alt=''
              />
            </button>
          </div>
          <div className={styles.thirdslide_content} ref={SliderRef}>
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
                  activeSlide={activeSlide + 1}>
                  {slide.content.map((item, index) => (
                    <div className={styles.thirdslide_content_item} key={index}>
                      <span>{item.spanId}</span>
                      <span>{item.text}</span>
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
