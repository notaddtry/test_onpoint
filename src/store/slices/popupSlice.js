import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  index: 0,
  showPopup: false,
}

const popupSlice = createSlice({
  name: 'popupSlider',
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
    goToSlide(state, action) {
      state.index = action.payload
    },
    setShowPopup(state, action) {
      state.showPopup = action.payload
    },
  },
})

export const { incIndex, decIndex, goHomeSlide, goToSlide, setShowPopup } =
  popupSlice.actions

export default popupSlice.reducer
