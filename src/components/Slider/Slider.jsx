import React from 'react'
import { useSelector } from 'react-redux'
import { useSlider } from '../../hooks/sliderHook'

import styles from './slider.module.scss'

const Slider = ({
  children,
  width,
  storeState,
  decIndex,
  incIndex,
  goToSlide,
  stylePrefix,
  bullets,
  activeSlide,
}) => {
  const childrenLength = children.length
  const childrenArray = Array(childrenLength).fill('')

  const {
    slideIndex,
    touchEnd,
    touchMove,
    touchStart,
    goNextSlide,
    goPrevSlide,
    goIndexSlide,
  } = useSlider(childrenLength, storeState, { decIndex, incIndex, goToSlide })

  const isPopupShown = useSelector((state) => state.popupSlider.showPopup)

  const wrapperStyles = {
    transform: `translateX(-${slideIndex * width}px)`,
    width: `${childrenLength * width}px`,
  }
  if (isPopupShown) {
    wrapperStyles.pointerEvents = 'none'
  }

  return (
    <div className={styles[stylePrefix + 'slider_container']}>
      <div
        className={styles[stylePrefix + 'slider_wrapper']}
        style={wrapperStyles}
        onTouchStart={(e) => touchStart(e, { passive: false })}
        onTouchMove={(e) => touchMove(e)}
        onTouchEnd={(e) => touchEnd(e)}>
        {children}
      </div>
      {bullets ? (
        <div className={styles.bullets_wrapper}>
          <div className={styles.bullets_prev} onClick={goPrevSlide}></div>
          <div className={styles.bullets_pagination_wrapper}>
            {childrenArray.map((_, index) => (
              <div
                className={
                  activeSlide === index
                    ? styles.pagination_item_active
                    : styles.pagination_item
                }
                key={index}
                onClick={() => goIndexSlide(index)}></div>
            ))}
          </div>
          <div className={styles.bullets_next} onClick={goNextSlide}></div>
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}

export default Slider
