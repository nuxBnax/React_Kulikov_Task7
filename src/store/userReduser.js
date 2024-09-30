import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const fetchUser = createAsyncThunk(
    'user/fetchUser',
    async (id, thunkApi) => {

        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
            if (!response.ok) {
                throw new Error('Something go wrong')
            }
            return await response.json();
        } catch (error) {
            return thunkApi.rejectWithValue(error.message)
        }
    })

const initialState = {
    user: [],
    loadingUser: false,
    errorUser: null,
}
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers:
        (builder) => {
            builder
                .addCase(fetchUser.pending, (state) => {
                    state.loadingUser = true;
                    state.errorUser = null;
                })
                .addCase(fetchUser.fulfilled, (state, action) => {
                    state.loadingUser = false;
                    state.user = action.payload;
                })
                .addCase(fetchUser.rejected, (state, action) => {
                    state.loadingUser = false;
                    state.errorUser = action.payload;
                })
        }
});
export const { fetchUsersFailure, fetchUsersSuccess, fetchUsersRequest } = userSlice.actions;
export default userSlice.reducer;