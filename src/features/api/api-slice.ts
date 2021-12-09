import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { LoginFormFields } from '../auth';
import { RootState } from '../../app/store';

export interface User {
  username: string;
}

export interface LoginResponse {
  token: string;
  user: User;
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
    baseUrl: 'http://localhost:8800/api',
    prepareHeaders: (headers, { getState }) => {
      // By default, if we have a token in the store, let's use that for authenticated requests
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    // Auth
    login: builder.mutation<LoginResponse, LoginFormFields>({
      query: (credintials) => ({
        url: 'auth/login',
        method: 'POST',
        body: credintials,
      }),
    }),
    getCurrentUser: builder.query<User, string>({
      query: (token) => ({
        url: 'auth/currentuser',
        method: 'GET',
        headers: {
          authorization: token,
        },
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
