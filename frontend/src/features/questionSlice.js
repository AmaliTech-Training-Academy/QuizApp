import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const questionSlice = createSlice({
    name: 'question',
    initialState : [],
    reducers: {
        setQuestion: (state, action) => {
            return action.payload;
        },
    },
});


export const { setQuestion } = questionSlice.actions;
export default questionSlice.reducer;