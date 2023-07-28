import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    data: [],
    originalData: [],
    filterData: {},
    searchQuery: '',
    status: 'idle',
};

export const getTopics = createAsyncThunk('topics/get', async (token)=> {
    try {
        const url = 'https://quiz-master.onrender.com/api/users/topics';
        const headers = {
            'Authorization': `Bearer ${token}`
        };
        const response = await axios.get(url, { headers });
        // console.log(response.data);
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch topics');
    }
});


const topicSlice = createSlice({
    name: 'topics',
    initialState,
    reducers: {
        setOptions: (state, {payload}) => {
            const {name, checked} = payload;
            state.filterData = {...state.filterData, [name]: checked}
        },

        filterTopics: (state, {payload}) => {
            const filterOpt = Object.keys(state.filterData).filter((topic) => state.filterData[topic]);            ; 
            if(filterOpt.length === 0){
            state.data = [...state.originalData] ;
            }else{
            state.data = state.originalData.filter((topic) => filterOpt.includes(topic.topic));
        }
    },
    setSearchQuery: (state, action) => {
        state.searchQuery = action.payload;
    },
    filterTopicsBySearch: (state) => {
        const { data, searchQuery } = state;
        if (searchQuery.trim() === '') {
        state.data = state.originalData;
        } else {
        const matchedTopics = data.filter((topic) =>
            topic.topic.toLowerCase().includes(searchQuery.toLowerCase())
        );
        state.data = matchedTopics;
        }
    },
    resetTopics: (state, action) => {
        state.originalData = []; 
        state.data = [];
        state.filterData = [];
        state.status =  null;
        state.searchQuery = null;
    }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getTopics.pending, (state, action) => {
            state.status = 'Loading...';
        })
        .addCase(getTopics.fulfilled, (state, {payload}) => {
            state.originalData = payload.message; 
            state.data = [...payload.message];
            state.filterData = payload.message.reduce((acc, topic) => {
                acc[topic.topic] = false;
                return acc;
            }, {});
            state.status = 'Success!';
        })
        .addCase(getTopics.rejected, (state, action) => {
            state.status = 'Error';
        })
    }
});



export const { setOptions, filterTopics, setSearchQuery, filterTopicsBySearch, resetTopics  } = topicSlice.actions;
export default topicSlice.reducer;


