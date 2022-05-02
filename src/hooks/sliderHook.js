import { useLayoutEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decIndex, incIndex } from '../store/slices/sliderSlice'

export const useSlider = (childrenCount, storeState, { ...dispatchEvents }) => {
  const dispatch = useDispatch()
  const slideIndex = useSelector((state) => state[storeState].index)

  let x1 = 0
  let x2 = 0
  let endX = 0

  const touchStart = (event) => {
    event.stopPropagation()
    x1 = event.touches[0].clientX
  }
  const touchMove = (event) => {
    event.stopPropagation()
    x2 = event.touches[0].clientX
  }
  const touchEnd = () => {
    const sliderLength = childrenCount - 1
    endX = x2 - x1
    if (x2) {
      if (endX <= -100) {
        if (slideIndex < sliderLength) dispatch(dispatchEvents.incIndex())
      } else if (endX >= 100) {
        if (slideIndex > 0) dispatch(dispatchEvents.decIndex())
      }
    }
  }

  return { slideIndex, touchStart, touchMove, touchEnd }
}

export const useWindowResize = (queryElem) => {
  const [width, setWidth] = useState(0)

  useLayoutEffect(() => {
    if (queryElem) {
      setWidth(document.querySelector(`.${queryElem}`).clientWidth)
    } else {
      setWidth(window.innerWidth)
    }
  }, [width])

  const resizeEvent = () => {
    window.addEventListener('resize', function resize() {
      setWidth(width)
    })
  }

  return { width, resizeEvent }
}
