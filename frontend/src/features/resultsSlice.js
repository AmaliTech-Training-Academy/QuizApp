import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    data: [],
    status: 'empty',
}

// const URL = `https://quiz-master.onrender.com/api/users/${userId}/quizzes/${quizId}/results`
export const getResults = createAsyncThunk('results/get', async({userId,quizId, token})=> {
    try{
        const URL = `https://quiz-master.onrender.com/api/users/${userId}/quizzes/${quizId}/results`
        const headers = {
            'Authorization': `Bearer ${token}`
        };
        const response = await axios.get(URL, { headers });
        console.log(response.data);
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch results');
    }
} )

const resultSlice = createSlice({
    name: 'results',
    initialState,
    reducers: {
        // getResults: (state, {payload}) => {
        //     state.data = payload;
        //     state.status= 'full';
        // }
    },
});

// export const { getResults } = resultSlice.actions;
export default resultSlice.reducer;