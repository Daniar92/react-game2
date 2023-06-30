import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        username: localStorage.getItem('nickname')
    },
    reducers: {
        setUsername: (state, action) => {
            state.username = action.payload
        },
    },
});

export const { setUsername } = userSlice.actions;
