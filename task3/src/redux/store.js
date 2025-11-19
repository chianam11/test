import { configureStore } from '@reduxjs/toolkit'
import postsSlice from './post/posts.slice'
export const store = configureStore({
    reducer: { posts: postsSlice.reducer },
})