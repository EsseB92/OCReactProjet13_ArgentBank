import { createSlice } from '@reduxjs/toolkit';
const profileInitialState = {
    email: null,
    firstName: null,
    lastName: null,
    id: null,
    error: null,
};

function updateProfile(state, action, error = null) {
    state.email = action.payload.body.email;
    state.firstName = action.payload.body.firstName;
    state.lastName = action.payload.body.lastName;
    state.id = action.payload.body.id;
    state.error = error;
}

function clearProfile(state, error) {
    state.email = null;
    state.firstName = null;
    state.lastName = null;
    state.id = null;
    state.error = error;
}

const profileSlice = createSlice({
    name: 'profile',
    initialState: profileInitialState,
    reducers: {
        userProfileSuccess: (state, action) => {
            updateProfile(state, action);
        },
        userProfileFail: (state, action) => {
            clearProfile(state, action.payload.message);
        },
        userUpdateSuccess: (state, action) => {
            updateProfile(state, action);
        },
        userUpdateFail: (state, action) => {
            updateProfile(state, action, action.payload.message);
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
