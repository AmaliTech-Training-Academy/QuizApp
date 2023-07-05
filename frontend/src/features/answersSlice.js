import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { submitAnswersToAPI } from "./submitAnswers";


const answersSlice = createSlice({
    name: 'answers',
    initialState: [],
    reducers: {
        submitAnswers: (state, {payload}) => {
            const existingAnswer = state.find(answer => answer.questionNumber === payload.questionNumber);
            if(existingAnswer){
                existingAnswer.answer = payload.answer;
            }else{
                state.push(payload)
            }
        },
    }, 
    extraReducers: (builder) => {
        builder
        .addCase(submit.pending, (state) => {
        })
        .addCase(submit.fulfilled, (state) => {
            state = [];
        })
        .addCase(submit.rejected, (state, action) => {
        });
      },
});

export const submit = createAsyncThunk(
    "answers/submitAnswers",
    async (_, thunkAPI) => {
        const number = thunkAPI.getState().quiz.limit;
        const state = thunkAPI.getState().answers;
    if(state.length === number){
        try {
            await submitAnswersToAPI(state);
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }else {
        return thunkAPI.rejectWithValue("State length is not as expected");
    }
    }
);

export const { submitAnswers } = answersSlice.actions;
export default answersSlice.reducer;
