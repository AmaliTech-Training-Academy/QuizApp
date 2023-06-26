import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    data: [],
    status: 'idle',
};

const baseURL = "https://nss-quizapp.up.railway.app/api/users/topic";


export const getTopics = createAsyncThunk('topics/get', async ()=> {
    try {
        const response = await axios.get(baseURL);
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
        state.data = action.payload.topics;
        state.status = 'Success!';
    })
    .addCase(getTopics.rejected, (state, action) => {
        state.status = 'Error';
    })
}
});



export default topicSlice.reducer;
