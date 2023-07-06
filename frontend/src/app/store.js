import { configureStore, combineReducers } from '@reduxjs/toolkit';
import stepperReducer from '../features/stepperSlice';
import authReducer from '../features/authSlice';
import topicSlice from '../features/topicSlice';
import quizSlice from "../features/quizSlice";
import { persistReducer } from 'redux-persist';
import storage  from "redux-persist/lib/storage";
import answersSlice from '../features/answersSlice'
import questionSlice from '../features/questionSlice';
import sureSlice from '../features/sureSlice';



const persistConfig = {
  key: 'root',
  storage,
}

  const reducer = combineReducers({
      topics: topicSlice,
      quiz: quizSlice,
      counter: stepperReducer,
      authenticator : authReducer,
      question: questionSlice,
      answers: answersSlice,
      sure: sureSlice,
  })

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
  reducer: persistedReducer
});


