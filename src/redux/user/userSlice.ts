import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FetchUserDataState } from "../../interfaces/fetchUserDataState";
import { User } from "../../interfaces/User";
import axios from "axios";

const initialState : FetchUserDataState = {
    loading: false,
    users: [],
    filterUsers: [],
    error: ''
};

const fetchUserDataSlice = createSlice({
    name: "fetchUserData",
    initialState,
    reducers: {
        filterByUsername: (state, payload : PayloadAction<string>) => {
            return {
                ...state,
                filterUsers: state.users.filter((user : User) => user.username.toLowerCase().startsWith(payload.payload.toLowerCase()))
            }
        },
        filterByEmail: (state, payload : PayloadAction<string>) => {
            return {
                ...state,
                filterUsers: state.users.filter((user : User) => user.email.toLowerCase().startsWith(payload.payload.toLowerCase()))
            }
        },
        filterByName: (state, payload : PayloadAction<string>) => {
            return {
                ...state,
                filterUsers: state.users.filter((user : User) => user.name.toLowerCase().startsWith(payload.payload.toLowerCase()))
            }
        },
        filterByPhone: (state, payload : PayloadAction<string>) => {
            return {
                ...state,
                filterUsers: state.users.filter((user : User) => user.phone.toLowerCase().startsWith(payload.payload.toLowerCase()))
            }
        },
        resetFilters: (state) => {
            return {
                ...state,
                filterUsers: state.users
            }
        }
    },
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
                filterUsers: action.payload,
                error: ''
            };
        })
        .addCase(fetchUsers.rejected, (state, action : PayloadAction<string | undefined>) => {
            return {
                loading: false,
                users: [],
                filterUsers: [],
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

export const {filterByEmail, filterByName, filterByPhone, filterByUsername, resetFilters} = fetchUserDataSlice.actions;

export default fetchUserDataSlice.reducer;