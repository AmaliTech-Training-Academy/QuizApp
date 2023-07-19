import { createSlice, createAsyncThunk, } from "@reduxjs/toolkit"
import axios from "axios"


const initialState = {
    page: 1,
    data: [],
    isRunning: false,
    status: 'idle',
    error: null,
};

export const getQuestions = createAsyncThunk('questions/get', async ({topicId, page, token})=> {
    try {
        const url = `https://quiz-master.onrender.com/api/users/questions?topicId=${topicId}&page=${page}&limit=5`;
        const headers = {
            'Authorization': `Bearer ${token}`
        };
        const response = await axios.get(url, { headers });
        // console.log(response.data);
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch question');
    }
});

const quizSlice = createSlice({
    name: 'quiz',
    initialState,
    reducers: {
        nextQuestion: (state, action)=>{
            state.page++;
        },
        previousQuestion: (state, action)=>{
            if(state.page > 1){
                state.page--
            }
        },
        selectQuestion: (state, {payload})=>{
            state.page = payload;
        },
        totalReset: (state, action) => {
            state.data = null
            state.page= null
            state.isRunning = false;
        },
        timerExpired: (state) => {
            state.isRunning = false;
        },
        timerStart: (state, action) => {
            state.isRunning = true;
        }
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

export const {nextQuestion, previousQuestion, selectQuestion, resetQuestion, timerExpired, timerStart, totalReset} = quizSlice.actions;
export default quizSlice.reducer;