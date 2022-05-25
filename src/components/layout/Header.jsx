import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { goHomeSlide } from '../../store/slices/sliderSlice'

const Header = () => {
  const dispatch = useDispatch()
  const activeIndex = useSelector((state) => state.slider.index)

  const goHome = () => {
    if (activeIndex) dispatch(goHomeSlide())
  }

  return (
    <header onClick={goHome}>
      <img
        src={`${process.env.PUBLIC_URL}/assets/images/header.svg`}
        alt='header'
      />
    </header>
  )
}

export default Header
