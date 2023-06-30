import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './userSlice';
import { statsSlice } from './statsSlice';
import { gameSlice } from './gameSlice';

export const store = configureStore({
    reducer: {
        [userSlice.name]: userSlice.reducer,
        [statsSlice.name]: statsSlice.reducer,
        [gameSlice.name]: gameSlice.reducer,
    },
});
