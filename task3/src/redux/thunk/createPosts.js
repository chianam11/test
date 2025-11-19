import { createAsyncThunk } from '@reduxjs/toolkit';

export const createPosts = createAsyncThunk(
    'posts/CreatePosts',
    async (body) => {
        try {
            console.log("22");

            const response = await fetch('https://jsonplaceholder.typicode.com/posts',
                {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    method: "POST",
                    body: JSON.stringify({ ...body })
                }
            );
            const data = await response.json();
            console.log(data);

            return data;
        } catch (e) {
            console.log(e);
        }
    }
);