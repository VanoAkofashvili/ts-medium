import { createSlice } from '@reduxjs/toolkit';
import { User, apiSlice } from '../api';
import { RootState } from '../../app/store';

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  user: null,
  token: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loggedIn: (state, { payload }) => {
      state.isAuthenticated = true;
      state.token = payload;
    },
    signedOut: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      apiSlice.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        state.token = payload.token;
        state.user = payload.user;
      }
    );
    builder.addMatcher(
      apiSlice.endpoints.getCurrentUser.matchFulfilled,
      (state, { payload }) => {
        state.user = payload.user;
      }
    );
  },
});

export default authSlice.reducer;

export const { loggedIn } = authSlice.actions;

export const selectCurrentUser = (state: RootState) => state.auth.user;
