import { createSlice } from '@reduxjs/toolkit';

export const gameSlice = createSlice({
    name: 'game',
    initialState: {
        categories: {
            // example - food: [{}, {}, {}, {}, {}],
        },
    },
    reducers: {
        updateCategories: (state, action) => {
            const categories = action.payload;
            for (let category of categories) {
                state.categories[category.title] = [];
            }
        },
        updateCategory: (state, action) => {
            const category = action.payload;
            const updateQuestions = category.clues
                .filter((clue) => !!clue.value)
                .slice(0, 5)
                .map((clue) => ({ ...clue, isAnswered: false }));
            state.categories[category.title] = updateQuestions;
        },
        hideQuestion: (state, action) => {
            const {
                question: { id },
                title,
            } = action.payload;
            let updated = state.categories[title].map((q) => {
                if (q.id !== id) return q;
                return { ...q, isAnswered: true };
            });

			state.categories[title] = updated
        },
    },
});

// const i = [{id: 303, answer: 'Marvin Gardens', question: 'Not flowers but hotels & houses grow on this Monopoly board "garden"', value: 100, airdate: '1985-04-08T19:00:00.000Z',},
// {id: 309, answer: "<i>A Child\\'s Garden of Verse</i>", question: "Robert Louis Stevenson's masterpiece of children's literature", value: 200, airdate: '1985-04-08T19:00:00.000Z',},
// {id: 315, answer: '"Garden Party"', question: "'72 hit that summed up Rick Nelson's feelings about being considered only a rock 'n' roller", value: 300, airdate: '1985-04-08T19:00:00.000Z',},
// {id: 100614, answer: 'a maze', question: "Get lost in Hampton Court Palace's one of these, f…by clipped hedges, that dates back to the 17th c.", value: 200, airdate: '2005-04-06T19:00:00.000Z',}]

export const { updateCategories, updateCategory, hideQuestion } =
    gameSlice.actions;
