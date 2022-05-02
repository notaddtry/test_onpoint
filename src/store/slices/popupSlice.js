import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  index: 0,
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
  },
})

export const { incIndex, decIndex } = popupSlice.actions

export default popupSlice.reducer
