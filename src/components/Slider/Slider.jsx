import React from 'react'
import Slide from './Slide'

const Slider = () => {
  const slides = [
    { id: 1, name: 'firstSlide' },
    { id: 2, name: 'secondSlide' },
    { id: 3, name: 'thirdSlide' },
  ]

  return (
    <div className='slider_wrapper'>
      {slides.map((slide) => (
        <Slide key={slide.id} type={slide.name} />
      ))}
    </div>
  )
}

export default Slider
