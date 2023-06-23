/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  count: 1,
}

const stepperSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increaseCount: state => {
      state.count = state.count += 1
    },
    decreaseCount : state => {
      state.count > 1 ? state.count -= 1 : state.count = 1;
    }
  },
})

export const { increaseCount, decreaseCount } = stepperSlice.actions
export default stepperSlice.reducer
