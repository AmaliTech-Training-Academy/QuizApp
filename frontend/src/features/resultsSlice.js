import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    status: 'empty',
}

const resultSlice = createSlice({
    name: 'results',
    initialState,
    reducers: {
        getResults: (state, {payload}) => {
            state.data = payload;
            state.status= 'full';
        }
    },
});

export const { getResults } = resultSlice.actions;
export default resultSlice.reducer;