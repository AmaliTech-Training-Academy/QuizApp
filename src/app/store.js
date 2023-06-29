import { configureStore, combineReducers } from '@reduxjs/toolkit';
import stepperReducer from '../features/stepperSlice';
import authReducer from '../features/authSlice';
import topicSlice from '../features/topicSlice';
import { persistReducer } from 'redux-persist';
import storage  from "redux-persist/lib/storage";


const persistConfig = {
  key: 'root',
  storage,
}

  const reducer = combineReducers({
      topics: topicSlice,
      counter: stepperReducer,
      authenticator : authReducer,
  })

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
  reducer: persistedReducer
});


