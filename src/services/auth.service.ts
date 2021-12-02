import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { LoginFormFields } from '../components';

interface User {
  username: string;
  email: string;
  isAdmin: boolean;
  token: string;
}
export const authApi = createApi({
  reducerPath: 'authApi',
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
  }),
});

export const { useLoginMutation } = authApi;
