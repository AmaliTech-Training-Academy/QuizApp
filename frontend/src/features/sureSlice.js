import { createSlice } from "@reduxjs/toolkit";

const sureSlice =  createSlice({
    name: 'sure',
    initialState: [false],
    reducers: {
        sureSubmit: (state, {payload})=>{
            state[0] = payload;
        },
    },
});


export const {sureSubmit} = sureSlice.actions;
export default sureSlice.reducer;

