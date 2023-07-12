import { createSlice } from "@reduxjs/toolkit";

const initialState = { showSettings: false };

const accountSettingsSlice = createSlice({
  name: 'accountSettings',
  initialState,
  reducers: {
    toggleSettings: (state) => {
      state.showSettings = !state.showSettings;
    },
  },
});

export const { toggleSettings } = accountSettingsSlice.actions;

export default accountSettingsSlice.reducer;
5