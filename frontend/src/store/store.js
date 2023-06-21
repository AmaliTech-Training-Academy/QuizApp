import { configureStore, combineReducers } from "@reduxjs/toolkit";
import topicSlice from "./topicSlice";
import { persistReducer, persistStore } from 'redux-persist';
import storage  from "redux-persist/lib/storage";


const persistConfig = {
    key: 'root',
    storage,
  }

    const reducer = combineReducers({
        topics: topicSlice,
    })

  const persistedReducer = persistReducer(persistConfig, reducer)



const store = configureStore({
    reducer: persistedReducer
});



export default store;