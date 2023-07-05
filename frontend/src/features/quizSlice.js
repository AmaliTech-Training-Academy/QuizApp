import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    data: [],
};

export const getQuestions = createAsyncThunk('questions/get', async ({topicId, page})=> {
    try {
        const baseURL = `https://quiz-master.onrender.com/api/users/questions?topicId=${topicId}&page=${page}&limit=5`
        const response = await axios.get(baseURL);
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch topics');
    }
});

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
        })
        .addCase(getQuestions.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
        });
    },
});

export default quizSlice.reducer;