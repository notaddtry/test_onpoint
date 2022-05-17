import { useLayoutEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const useSlider = (
  childrenCount,
  storeState,
  { ...dispatchEvents },
  stylePrefix
) => {
  const dispatch = useDispatch()
  const slideIndex = useSelector((state) => state[storeState].index)

  let x1 = 0
  let x2 = 0
  let endX = 0
  const sliderLength = childrenCount - 1

  const touchStart = (event) => {
    event.stopPropagation()

    endX = 0

    if (checkSlider(event.target)) {
      x1 = event.touches[0].clientX
    }
  }
  const touchMove = (event) => {
    event.stopPropagation()
    if (checkSlider(event.target)) {
      x2 = event.touches[0].clientX
    }
  }
  const touchEnd = (event) => {
    endX = x2 - x1

    if (x2 && checkSlider(event.target)) {
      if (endX <= -100) {
        if (slideIndex < sliderLength) dispatch(dispatchEvents.incIndex())
      } else if (endX >= 100) {
        if (slideIndex > 0) dispatch(dispatchEvents.decIndex())
      }
    }
  }

  const checkSlider = (target) => {
    if (
      target.className.substr(0, 7 + stylePrefix.length) ===
      `slider_${stylePrefix}`
    )
      return true
  }

  const goNextSlide = () => {
    if (slideIndex < sliderLength) dispatch(dispatchEvents.incIndex())
  }
  const goPrevSlide = () => {
    if (slideIndex > 0) dispatch(dispatchEvents.decIndex())
  }
  const goIndexSlide = (id) => {
    dispatch(dispatchEvents.goToSlide(id))
  }

  return {
    slideIndex,
    touchStart,
    touchMove,
    touchEnd,
    goNextSlide,
    goPrevSlide,
    goIndexSlide,
  }
}

export const useWindowResize = (queryElem) => {
  const [width, setWidth] = useState(0)
  const [elemWidth, setElemWidth] = useState(0)
  let elem = null

  useLayoutEffect(() => {
    setWidth(elemWidth)
  }, [elemWidth])

  const resizeEvent = () => {
    window.addEventListener('resize', function resize() {
      if (queryElem) {
        console.log(document.querySelector(`.${queryElem}`).clientWidth)
        elem = document.querySelector(`.${queryElem}`).clientWidth
      } else {
        elem = window.innerWidth
      }

      setElemWidth(elem)
    })
  }

  const initEvent = () => {
    if (queryElem) {
      elem = document.querySelector(`.${queryElem}`).clientWidth
    } else {
      elem = window.innerWidth
    }

    setElemWidth(elem)
  }

  return { width, resizeEvent, initEvent }
}
