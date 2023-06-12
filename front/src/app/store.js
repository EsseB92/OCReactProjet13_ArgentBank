import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from '../features/authSlice';
import { profileReducer } from '../features/profileSlice';

export const store = configureStore({
    reducer: {
        authStatus: authReducer,
        userProfile: profileReducer,
    },
    devTools: true,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});
