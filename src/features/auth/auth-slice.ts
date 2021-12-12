import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, apiSlice } from '../api';
import { RootState } from '../../app/store';

interface AuthState {
  user: User | null;
  token: string | null;
}

const initialState: AuthState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    autoLogin: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
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

// Selectors
export const selectIsAuthenticated = (state: RootState) => state.auth.user || state.auth.token;

export const selectCurrentUser = (state: RootState) => state.auth.user;

// Reducer
export default authSlice.reducer;

// Action creators
export const { autoLogin } = authSlice.actions;
