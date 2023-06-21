import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';

const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: () => '/posts',
        }),
        addPost: builder.mutation({
            query: (newPost) => ({
                url: '/posts',
                method: 'POST',
                body: newPost,
            }),
        }),
    }),
});

export const { useGetPostsQuery, useAddPostMutation } = api;
