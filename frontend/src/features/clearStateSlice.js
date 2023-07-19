import { createSlice } from '@reduxjs/toolkit';

const clearStateSlice = createSlice({
  name: 'clearState',
  initialState: null,
  reducers: {
    clearState: () => null,
  },
});

export const { clearState } = clearStateSlice.actions;
export default clearStateSlice.reducer;
