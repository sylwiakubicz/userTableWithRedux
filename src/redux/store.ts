import { configureStore } from '@reduxjs/toolkit';
import fetchUserDataReducer from "./user/userSlice";
import userFiltersReducer from "./usersFilters/userFiltersSlice";


export const store = configureStore({
    reducer: {
        fetchUserData: fetchUserDataReducer,
        userFilters: userFiltersReducer
    }
});

export type RootState = ReturnType<typeof store.getState>; 
export type AppDispatch = typeof store.dispatch

