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
      console.log({ token2: token });
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
    getCurrentUser: builder.mutation<User, void>({
      query: () => ({ url: 'auth/currentuser', method: 'GET' }),
      // transformResponse: (response: { user: User }) => {
      //   console.log(`response`, response);
      //   return response.user;
      // },
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
  useGetCurrentUserMutation,
} = apiSlice;
