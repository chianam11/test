import { configureStore } from '@reduxjs/toolkit'
import postsSlice from './post/posts.slice'
import newPostsSlice from './post/create.slice'
export const store = configureStore({
    reducer: {
        posts: postsSlice.reducer,
        newPosts: newPostsSlice.reducer
    },
})