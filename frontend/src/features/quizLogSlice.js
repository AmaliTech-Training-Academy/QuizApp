import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    attempted: [],
    passed: [],
    status: 'idle',
    interested: true,
};


export const getLog = createAsyncThunk('log/get', async ({token, userId})=> {
    try {
        const url = `https://quiz-master.onrender.com/api/users/QuizLog/${userId}`;
        const headers = {
            'Authorization': `Bearer ${token}`
        };
        const response = await axios.get(url, { headers });
        console.log(response.data);
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch log');
    }
});


const quizLogSlice = createSlice({
    name: 'quizlog',
    initialState,
    reducers: {
        resetLog: (state, action)=>{
        state.attempted = [];
        state.passed = [];
        state.status = 'idle';
        },
        dismissSchedule: (state, {payload})=>{
            state.interested = payload;
            },
    },
    extraReducers: (builder) => {
        builder
        .addCase(getLog.pending, (state, action) => {
            state.status = 'Loading...';
        })
        .addCase(getLog.fulfilled, (state, {payload}) => {
            state.attempted = payload.attemptedQuizzes;
            state.passed = payload.passedQuizzes;
            state.status = 'Success!';
        })
        .addCase(getLog.rejected, (state, action) => {
            state.status = 'Error';
        })
    }
})


export const { resetLog, dismissSchedule } = quizLogSlice.actions
export default quizLogSlice.reducer;