import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user_name: '',
    user_id: '',
    user_email: '',
    user_token: ''
}

const userSlice = createSlice({
    name: 'userData',
    initialState,
    reducers: {
        addUser: (state, {payload}) => {
            state.user_name = payload.name;
            state.user_id = payload.id;
            state.user_email = payload.email;
            state.user_token = payload.token;
        },
        removeUser: (state, action) => {
            state.user_name = '';
            state.user_id = '';
            state.user_email = '';
            state.user_token = '';
        },
    },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;