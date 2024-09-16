import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Filters } from "../../interfaces/filters";
import { resetFilters } from "../user/userSlice";

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
        setUsersFilters: (state, action : PayloadAction<Filters>) => {
            const { username, email, name, phone } = action.payload
            return {
                email: email,
                username: username,
                name: name,
                phone: phone
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


export const { setUsersFilters, resetUsersFilters} = userFiltersSlice.actions;

export default userFiltersSlice.reducer;