import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const questionSlice = createSlice({
    name: 'question',
    initialState : [],
    reducers: {
        setQuestion: (state, action) => {
            return action.payload;
        },
        resetQuestion: (state, action) => {
            return action.payload;
        }
    },
});


export const { setQuestion, resetQuestion } = questionSlice.actions;
export default questionSlice.reducer;