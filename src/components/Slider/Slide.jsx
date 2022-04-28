import React from 'react'
import Homepage from './slides/HomeSlide'
import Secondpage from './slides/SecondSlide'
import Thirdpage from './slides/ThirdSlide'

const Slide = (props) => {
  const { type } = props

  return (
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
