import { createSlice } from '@reduxjs/toolkit'
import { fetchPosts } from '../thunk/fetchposts';
const initialState = {
    items: [],
    status: 'idle',
    error: null
}

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        return builder.addCase(fetchPosts.pending, (state) => {
            state.status = 'loading';
            state.error = null;
        })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
})


export default postsSlice