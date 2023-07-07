import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Api from '../components/forms/services/api';
// import axios from 'axios';


const initialState = {
    data: [],
    status: 'idle',
};



export const getTopics = createAsyncThunk('topics/get', async ()=> {
    try {
        const response = await Api.get('users/topics');
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch topics');
    }
});


const topicSlice = createSlice({
    name: 'topics',
    initialState,
    reducers: {
    },
    
    extraReducers: (builder) => {
        builder
        .addCase(getTopics.pending, (state, action) => {
            state.status = 'Loading...';
        })
        .addCase(getTopics.fulfilled, (state, action) => {
            state.data = action.payload.message;
            state.status = 'Success!';
        })
        .addCase(getTopics.rejected, (state, action) => {
            state.status = 'Error';
        })
    }
});



export default topicSlice.reducer;


// const baseURL = "https://quiz-master.onrender.com/api/users/topics";
