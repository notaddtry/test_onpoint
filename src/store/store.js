import { configureStore } from '@reduxjs/toolkit'
import popupSlice from './slices/popupSlice.js'
import sliderSlice from './slices/sliderSlice.js'

const store = configureStore({
  reducer: {
    slider: sliderSlice,
    popupSlider: popupSlice,
  },
})

export default store
