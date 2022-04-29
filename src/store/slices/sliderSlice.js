import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  index: 0,
}

const sliderSlice = createSlice({
  name: 'slider',
  initialState,
  reducers: {
    incIndex(state) {
      state.index++
    },
    decIndex(state) {
      state.index--
    },
    goHomeSlide(state) {
      state.index = 0
    },
  },
})

export const { incIndex, decIndex, goHomeSlide } = sliderSlice.actions

export default sliderSlice.reducer
