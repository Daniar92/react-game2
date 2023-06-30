import { createSlice } from '@reduxjs/toolkit';

export const statsSlice = createSlice({
    name: 'stats',
    initialState: {
        played: 0,
        correct: 0,
        wrong: 0,
        points: 0,

    },
    reducers: {
        stats: (state, action) => {
            state.played = action.payload.played;
            state.correct = action.payload.correct;
            state.wrong = action.payload.wrong;
            state.points = action.payload.points;
        },
        correctAnswers: (state, action) => {
            state.correct += 1;
            state.played += 1;
        },
        wrongAnswers: (state, action) => {
            state.wrong += 1;
            state.played += 1;
        },
        getPoints: (state, action) => {
            const gamePoints = action.payload;
            state.points += gamePoints;
        },
    },
});

export const { setStats, correctAnswers, wrongAnswers, getPoints } =
    statsSlice.actions;
