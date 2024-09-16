import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Filters } from "../../interfaces/filters";

const initialState : Filters = {
    name: '',
    username: '',
    email: '',
    phone: ''
}

const userFiltersSlice = createSlice({
    name: "userFilters",
    initialState,
    reducers: {
        setNameFilter: (state, action : PayloadAction<string>) => {
            return {
                ...state,
                name: action.payload,
            }
        },
        setUsernameFilter: (state, action : PayloadAction<string>) => {
            return {
                ...state,
                username: action.payload,
            }
        },
        setEmailFilter: (state, action : PayloadAction<string>) => {
            return {
                ...state,
                email: action.payload,
            }
        },
        setPhoneFilter: (state, action : PayloadAction<string>) => {
            return {
                ...state,
                phone: action.payload,
            }
        },
        resetUsersFilters: (state) => {
            return {
                email: '',
                username: '',
                name: '',
                phone: ''
            }
        }
    }
})


export const { setNameFilter, setUsernameFilter, setPhoneFilter, setEmailFilter, resetUsersFilters} = userFiltersSlice.actions;

export default userFiltersSlice.reducer;