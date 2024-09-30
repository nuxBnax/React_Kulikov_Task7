import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async (_, thunkApi) => {

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users/');
            if (!response.ok) {
                throw new Error('Something go wrong')
            }
            return await response.json();
        } catch (error) {
            return thunkApi.rejectWithValue(error.message)
        }
    })

const initialState = {
    users: [],
    loading: false,
    error: null,
}
const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers:
        (builder) => {
            builder
                .addCase(fetchUsers.pending, (state) => {
                    state.loading = true;
                    state.error = null;
                })
                .addCase(fetchUsers.fulfilled, (state, action) => {
                    state.loading = false;
                    state.users = action.payload;
                })
                .addCase(fetchUsers.rejected, (state, action) => {
                    state.loading = false;
                    state.error = action.payload;
                })
        }
});
export const { fetchUsersFailure, fetchUsersSuccess, fetchUsersRequest } = usersSlice.actions;
export default usersSlice.reducer;