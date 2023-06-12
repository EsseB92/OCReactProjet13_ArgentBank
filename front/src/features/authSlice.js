import { createSlice } from '@reduxjs/toolkit';

const authInitialState = {
    token:
        JSON.parse(localStorage.getItem('token')) ||
        JSON.parse(sessionStorage.getItem('token')),
    isAuth:
        localStorage.getItem('token') !== null ||
        sessionStorage.getItem('token') !== null,
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState: authInitialState,
    reducers: {
        // Handle login success
        loginSuccess: (state, action) => {
            state.token = action.payload.body.token;
            state.isAuth = true;
            state.error = null;
        },
        // Handle login failure
        loginFail: (state, action) => {
            state.token = null;
            state.isAuth = false;
            state.error = action.payload;
        },
        // Handle logout success
        logoutSuccess: (state) => {
            state.token = null;
            state.isAuth = false;
            state.error = null;
        },
        resetError: (state) => {
            state.error = null;
        },
    },
});

export const { loginSuccess, loginFail, logoutSuccess, resetError } =
    authSlice.actions;

export const authReducer = authSlice.reducer;
