import React from 'react'
import Slide from '../../Slider/Slide'
import Slider from '../../Slider/Slider'

import { decIndex, incIndex } from '../../../store/slices/popupSlice'

import styles from '../slides.module.scss'

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
  return (
    <div className={styles.popup_wrapper}>
      <div className={styles.thirdslide_header}>
        <span className={styles.thirdslide_hello}>преимущества</span>
        <span className={styles.thirdslide_title}>
          BREND
          <span className={styles.thirdslide_title_bold}>XY </span>
        </span>
        <img src='' alt='' />
      </div>
      <Slider
        width={300}
        decIndex={decIndex}
        incIndex={incIndex}
        storeState={'popupSlider'}
        stylePrefix='popup_'>
        {SLIDES.map((slide) => (
          // <span key={slide.id}> asdasdad</span>
          <Slide key={slide.id}>
            {slide.content.map((item) => (
              <>
                <span>{item.spanId}</span>
                <span>{item.text}</span>
              </>
            ))}
          </Slide>
        ))}
      </Slider>
    </div>
  )
}

export default PopupSlider
