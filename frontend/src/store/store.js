import { configureStore } from "@reduxjs/toolkit";
import topicSlice from "./topicSlice";


const store = configureStore({
    reducer: {
        topics: topicSlice,
    }
});

export default store;