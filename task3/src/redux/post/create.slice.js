import { createSlice } from "@reduxjs/toolkit";
import { createPosts } from "../thunk/createPosts";
const initialState = {
    items: [],
    loading: false,
    error: null,
}

const newPostsSlice = createSlice({
    name: "createPosts",
    initialState,
    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(createPosts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createPosts.fulfilled, (state, action) => {
                state.loading = false;
                state.items.push(action.payload);
            })
            .addCase(createPosts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
});

export default newPostsSlice;
