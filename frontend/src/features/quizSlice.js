import { createSlice, createAsyncThunk, } from "@reduxjs/toolkit";
// import axios from "axios";
import Api from "../components/forms/services/api";


const initialState = {
    data: [],
};

export const getQuestions = createAsyncThunk('questions/get', async ({topicId, page})=> {
    try {
        // const baseURL = `https://quiz-master.onrender.com/api/users/questions?topicId=${topicId}&page=${page}&limit=5`
        const response = await Api.get(`users/questions?topicId=${topicId}&page=${page}&limit=5`);
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch topics');
    }
});

// const resetQuestion = createSelector((state) => state.question);

const quizSlice = createSlice({
    name: 'quiz',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
    builder
        .addCase(getQuestions.pending, (state) => {
        state.status = 'loading';
        })
        .addCase(getQuestions.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.error = null;
        // console.log(resetQuestion(state));
        })
        .addCase(getQuestions.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
        });
    },
});

export default quizSlice.reducer;