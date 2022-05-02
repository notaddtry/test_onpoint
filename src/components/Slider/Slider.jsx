import React, { useEffect } from 'react'
import { useSlider } from '../../hooks/sliderHook'

import styles from './slider.module.scss'

const Slider = ({
  children,
  width,
  storeState,
  decIndex,
  incIndex,
  stylePrefix,
}) => {
  const { slideIndex, touchEnd, touchMove, touchStart } = useSlider(
    children.length,
    storeState,
    { decIndex, incIndex }
  )

  // const styleContainer  = style + 'slider_container'
  // const style = 'popup'

  return (
    <div className={styles[stylePrefix + 'slider_container']}>
      <div
        className={styles[stylePrefix + 'slider_wrapper']}
        style={{
          transform: `translateX(-${slideIndex * width}px)`,
          width: `${children.length * width}px`,
        }}
        onTouchStart={(e) => touchStart(e)}
        onTouchMove={(e) => touchMove(e)}
        onTouchEnd={(e) => touchEnd(e)}>
        {children}
      </div>
    </div>
  )
}

export default Slider
