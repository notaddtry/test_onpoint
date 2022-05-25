import { useEffect } from 'react'

import { useWindowResize } from './hooks/sliderHook'
import { decIndex, incIndex } from './store/slices/sliderSlice'

import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import Slide from './components/Slider/Slide'
import Slider from './components/Slider/Slider'

const SLIDES = [
  { id: 1, name: 'firstSlide' },
  { id: 2, name: 'secondSlide' },
  { id: 3, name: 'thirdSlide' },
]

function App() {
  const { width, resizeEvent, initEvent, endResizeEvent } = useWindowResize()

  useEffect(() => {
    resizeEvent()
    initEvent()
    return () => endResizeEvent()
    // eslint-disable-next-line
  }, [])

  return (
    <div className='wrapper'>
      <div className='container'>
        <Header />
        <Slider
          width={width}
          decIndex={decIndex}
          incIndex={incIndex}
          storeState={'slider'}
          stylePrefix=''>
          {SLIDES.map((slide) => (
            <Slide key={slide.id} type={slide.name} />
          ))}
        </Slider>
        <Footer />
      </div>
    </div>
  )
}

export default App
