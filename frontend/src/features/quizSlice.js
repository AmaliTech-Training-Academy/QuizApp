import { createSlice, createAsyncThunk, } from "@reduxjs/toolkit";
import Api from "../components/forms/services/api";


const initialState = {
    page: 1,
    data: [],
};

export const getQuestions = createAsyncThunk('questions/get', async ({topicId}, { getState, rejectWithValue })=> {
    try {
        const { page } = getState().quiz;
        const response = await Api.get(`users/questions?topicId=${topicId}&page=${page}&limit=5`);
        console.log(response.data);
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