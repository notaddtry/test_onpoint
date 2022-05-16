import React, { forwardRef } from 'react'
import Homepage from 'components/slides/HomeSlide'
import Secondpage from 'components/slides/SecondSlide'
import Thirdpage from 'components/slides/ThirdSlide'

import styles from './slider.module.scss'

const Slide = React.forwardRef(
  ({ children, type, id, activeSlide }, SlideRef) => {
    return children ? (
      <div
        ref={SlideRef}
        className={
          id === activeSlide
            ? styles.slider_children_item_active
            : styles.slider_children_item
        }>
        {children}
      </div>
    ) : (
      <div className={styles.slider_item}>
        {type === 'firstSlide' ? (
          <Homepage />
        ) : type === 'secondSlide' ? (
          <Secondpage />
        ) : (
          <Thirdpage />
        )}
      </div>
    )
  }
)

export default Slide
