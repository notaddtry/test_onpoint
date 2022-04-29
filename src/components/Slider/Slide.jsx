import React from 'react'
import Homepage from './slides/HomeSlide'
import Secondpage from './slides/SecondSlide'
import Thirdpage from './slides/ThirdSlide'

const Slide = ({ children, type }) => {
  return children ? (
    <>{children}</>
  ) : (
    <div className='slider_item'>
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

export default Slide
