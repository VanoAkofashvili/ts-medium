import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { LoginFormFields } from '../auth';
import { RootState } from '../../app/store';
import { ACCESS_TOKEN } from '../../app/constants';

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

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:8800/api',
  prepareHeaders: (headers, { getState }) => {
    // By default, if we have a token in the store, let's use that for authenticated requests
    const token = (getState() as RootState).auth.token;
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth: BaseQueryFn<string | FetchArgs,
  unknown,
  FetchBaseQueryError> = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);
    if (result.error && result.error.status === 401) {
      console.error({ TOKEN: 'invalid token' });
      // const refreshResult = await baseQuery('token/refresh/', api, extraOptions);

      // if (refreshResult.data) {
      //   api.dispatch(tokenUpdated({ accessToken: refreshResult.data as string }));

      //   // retry the initial query
      //   result = await baseQuery(args, api, extraOptions);
      // } else {
      //   api.dispatch(logout());
      // }
    }
    return result;
  };

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    // Auth
    login: builder.mutation<LoginResponse, LoginFormFields>({
      query: (credintials) => ({
        url: 'auth/login',
        method: 'POST',
        body: credintials,
      }),
      onCacheEntryAdded: async (arg, { cacheDataLoaded, getCacheEntry }) => {
        await cacheDataLoaded;
        if (getCacheEntry().data) {
          localStorage.setItem(
            ACCESS_TOKEN,
            getCacheEntry().data?.token as string,
          );
        }
      },
    }),
    getCurrentUser: builder.mutation<{ user: User }, void>({
      query: () => ({ url: 'auth/currentuser', method: 'GET' }),
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
