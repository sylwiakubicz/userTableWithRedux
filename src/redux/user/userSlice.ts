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
        applyFilters: (state, action: PayloadAction<{ username?: string; email?: string; name?: string; phone?: string }>) => {
            const { username, email, name, phone } = action.payload;
            state.filterUsers = state.users.filter((user: User) => {
                return (
                    (!username || user.username.toLowerCase().startsWith(username.toLowerCase())) &&
                    (!email || user.email.toLowerCase().startsWith(email.toLowerCase())) &&
                    (!name || user.name.toLowerCase().startsWith(name.toLowerCase())) &&
                    (!phone || user.phone.toLowerCase().startsWith(phone.toLowerCase()))
                );
            });
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

export const { applyFilters, resetFilters} = fetchUserDataSlice.actions;

export default fetchUserDataSlice.reducer;