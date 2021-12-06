import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { LoginFormFields } from '../auth';

export interface User {
  username: string;
  email: string;
  isAdmin: boolean;
  token: string;
}

export interface LoginRequest {
  email: string;
  password: string;
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
    getCurrentUser: builder.query<User, string>({
      query: (token) => ({
        url: 'auth/currentuser',
        method: 'GET',
        headers: {
          'x-access-token': token,
        },
      }),
    }),
    login: builder.mutation<User, LoginRequest>({
      query: (credintials) => ({
        url: 'auth/login',
        method: 'POST',
        body: credintials,
      }),
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
  useGetCurrentUserQuery,
} = apiSlice;
