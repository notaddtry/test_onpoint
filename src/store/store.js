import { configureStore } from '@reduxjs/toolkit'
import sliderSlice from './slices/sliderSlice.js'

const store = configureStore({
  reducer: {
    slider: sliderSlice,
  },
})

export default store
