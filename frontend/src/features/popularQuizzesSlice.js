import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    data: [],
    status: 'empty',
}


export const getQuizzes = createAsyncThunk('quizzes/get', async(token)=> {
    try{
        const URL = `https://quiz-master.onrender.com/api/users/popular-topics`
        const headers = {
            'Authorization': `Bearer ${token}`
        };
        const response = await axios.get(URL, { headers });
        console.log('data', response.data);
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch results');
    }
})


const popularQuizzesSlice = createSlice({
    name: 'quiz',
    initialState,
    reducers: {
        clearQuizzes: (state, action) => {
            state.data = [];
            state.status = 'empty';
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getQuizzes.pending, (state) => {
            state.status = 'loading';
            })
            .addCase(getQuizzes.fulfilled, (state, {payload}) => {
            state.status = 'succeeded';
            state.data = payload;
            state.error = null;
            })
            .addCase(getQuizzes.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
            });
        },
})


export const {clearQuizzes} = popularQuizzesSlice.actions;
export default popularQuizzesSlice.reducer;