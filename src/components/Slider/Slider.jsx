import React, { useEffect } from 'react'
import { useSlider } from '../../hooks/sliderHook'

const Slider = ({ children, width, storeState, decIndex, incIndex }) => {
  const { slideIndex, touchEnd, touchMove, touchStart } = useSlider(
    children.length,
    storeState,
    { decIndex, incIndex }
  )

  return (
    <div className='slider_container'>
      <div
        className='slider_wrapper'
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
