import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FetchUserDataState } from "../../interfaces/fetchUserDataState";
import { User } from "../../interfaces/User";
import axios from "axios";

const initialState : FetchUserDataState = {
    loading: false,
    users: [],
    error: ''
};

const fetchUserDataSlice = createSlice({
    name: "fetchUserData",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchUsers.pending, (state) => {
            return {
                ...state,
                loading: true
            };
        })
        .addCase(fetchUsers.fulfilled, (state, action : PayloadAction<User[]>) => {
            return {
                loading: false,
                users: action.payload,
                error: ''
            };
        })
        .addCase(fetchUsers.rejected, (state, action : PayloadAction<string | undefined>) => {
            return {
                loading: false,
                users: [],
                error: action.payload || 'Failed to fetch users'
            };
        })
    }
});

export const fetchUsers = createAsyncThunk<User[],void,{ rejectValue: string }>('users/fetchUsers', async (_, { rejectWithValue }) => {
    try {
        const response : any = await axios.get("https://jsonplaceholder.typicode.com/users")
        const users : User[] =  await response.data.map((user : any) => ({
            id: user.id,
            name: user.name,
            username: user.username,
            email: user.email,
            phone: user.phone
        }));
        return users;
    } catch (err : any) {
        const errorMsg : string = err.message
        return rejectWithValue(errorMsg);
    }
}

)

export const {} = fetchUserDataSlice.actions;

export default fetchUserDataSlice.reducer;