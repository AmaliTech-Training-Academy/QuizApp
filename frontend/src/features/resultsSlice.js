import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    data: [],
    status: 'empty',
}

export const getResults = createAsyncThunk('results/get', async({userId,quizResultsId, token})=> {
    try{
        const URL = `https://quiz-master.onrender.com/api/users/${userId}/quizzes/${quizResultsId}/results`
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

const resultSlice = createSlice({
    name: 'results',
    initialState,
    reducers: {
        getResults: (state, {payload}) => {
            state.data = payload;
            state.status= 'full';
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase( getResults.pending, (state) => {
            state.status='loading';
        })
        .addCase(getResults.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.data = action.payload;
            state.error = null;
        })
        .addCase(getResults.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        });
    }
});

// export const { getResults } = resultSlice.actions;
export default resultSlice.reducer;