import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import Api from '../components/forms/services/api'

export const registerUser = createAsyncThunk(
  'register',
  async (url, thunkAPI) => {
    try {
      const {username, email, password} = thunkAPI.getState().authenticator
      console.log(state)
      await Api.post(url, {username, email, password})
    } catch (error) {
      console.log(error)
    }
  }
)
const initialState = {
  username: '',
  email: '',
  password: '',
  profileImage: '',
  selectedInterest: [],
  addedInterest: [],
  isLoading: false,
}
const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    setUserDetails: (state, { payload }) => {
      state.username = payload.username
      state.email = payload.email
      state.password = payload.password
    },
    setUserImage: (state, { payload }) => {
      state.profileImage = payload
    },
    setSelectedInterest: (state, { payload }) => {
      state.selectedInterest = payload
    },
    setAddedInterest: (state, { payload }) => {
      state.addedInterest = payload
    },
  },
  extraReducers: builder => {
    builder
      .addMatcher(
        (registerUser.pending,
        state => {
          state.isLoading = true
        })
      )
      .addMatcher(
        (registerUser.fulfilled,
        (state) => {
          state.isLoading = false
        })
      )
      .addMatcher(
        (registerUser.rejected,
        state => {
          state.isLoading = false
        })
      )
  },
})

export const {
  setUserDetails,
  setUserImage,
  setSelectedInterest,
  setAddedInterest,
} = authSlice.actions

export default authSlice.reducer
