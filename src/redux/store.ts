import { configureStore } from '@reduxjs/toolkit';
import fetchUserDataReducer from "./user/userSlice";

export const store = configureStore({
    reducer: {
        fetchUserData: fetchUserDataReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>; 
export type AppDispatch = typeof store.dispatch

