import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    general: true,
    password: false,
    myQuizzes: false,
}

const sectionSlice = createSlice({
    name: 'section',
    initialState,
    reducers: {
        changeSection: (state, {payload}) => {
            return {
            ...state,
            ...payload,
        };
    },
},
});


export const { changeSection } = sectionSlice.actions;
export default sectionSlice.reducer;
