import { configureStore, combineReducers } from '@reduxjs/toolkit'
import stepperReducer from '../features/stepperSlice'
import authReducer from '../features/authSlice'

const rootReducer = combineReducers({
  counter: stepperReducer,
  authenticator : authReducer,

})

export const store = configureStore({
  reducer: rootReducer,
})