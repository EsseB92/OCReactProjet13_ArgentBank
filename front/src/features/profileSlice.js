import { createSlice } from '@reduxjs/toolkit';
const profileInitialState = {
    email: null,
    firstName: null,
    lastName: null,
    id: null,
    error: null,
};

const profileSlice = createSlice({
    name: 'profile',
    initialState: profileInitialState,
    reducers: {
        userProfileSuccess: (state, action) => {
            state.email = action.payload.body.email;
            state.firstName = action.payload.body.firstName;
            state.lastName = action.payload.body.lastName;
            state.id = action.payload.body.id;
            state.error = null;
        },
        userProfileFail: (state, action) => {
            state.email = null;
            state.firstName = null;
            state.lastName = null;
            state.id = null;
            state.error = action.payload.message;
        },
        userUpdateSuccess: (state, action) => {
            state.email = action.payload.body.email;
            state.firstName = action.payload.body.firstName;
            state.lastName = action.payload.body.lastName;
            state.id = action.payload.body.id;
            state.error = null;
        },
        userUpdateFail: (state, action) => {
            state.email = action.payload.body.email;
            state.firstName = action.payload.body.firstName;
            state.lastName = action.payload.body.lastName;
            state.id = action.payload.body.id;
            state.error = action.payload.message;
        },
    },
});

export const {
    userProfileSuccess,
    userProfileFail,
    userUpdateSuccess,
    userUpdateFail,
} = profileSlice.actions;
export const profileReducer = profileSlice.reducer;
