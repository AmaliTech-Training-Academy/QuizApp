import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    attempted: [],
    passed: [],
    status: 'idle',
};


export const getLog = createAsyncThunk('log/get', async ({token, userId})=> {
    try {
        // const query = ThunkAPI.getState().searchQuery
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

export default quizLogSlice.reducer;