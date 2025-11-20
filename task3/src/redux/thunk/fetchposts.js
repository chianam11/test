import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async (userId) => {
        console.log(222222222, userId);

        const url = userId
            ? `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
            : `https://jsonplaceholder.typicode.com/posts`;

        try {
            const response = await fetch(url);
            const data = await response.json();
            return data;
        } catch (e) {
            console.log(e);
        }
    }
);