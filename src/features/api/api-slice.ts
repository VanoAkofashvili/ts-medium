import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { LoginFormFields } from '../auth';

interface User {
  username: string;
  email: string;
  isAdmin: boolean;
  token: string;
}

export interface Post {
  likes: string[];
  _id?: string;
  userId: string;
  desc: string;
  img: string;
}

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
  }),
  endpoints: (builder) => ({
    login: builder.mutation<User, LoginFormFields>({
      query: (data) => {
        return {
          url: '/auth/login',
          body: data,
          method: 'POST',
        };
      },
      transformResponse: (response: { data: User }) => {
        console.log('Transform response: ', response);
        return response.data;
      },
    }),
    getPostsAll: builder.query<Post[], void>({
      query: () => '/posts',
    }),
    getPost: builder.query<Post, string>({
      query: (postId) => `/posts/${postId}`,
    }),
    addNewPost: builder.mutation<Post, Post>({
      query: (post) => ({
        url: '/posts',
        method: 'POST',
        body: post,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useGetPostsAllQuery,
  useGetPostQuery,
  useAddNewPostMutation,
} = apiSlice;
