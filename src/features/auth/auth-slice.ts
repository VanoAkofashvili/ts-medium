import { createSlice } from '@reduxjs/toolkit';
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
    loggedIn: (state) => {
      // console.log('shemovida');
      // state.isAuthenticated = true;
    },
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
        // state.token = payload.token;
        // state.user = payload;
      }
    );
  },
});

export default authSlice.reducer;

export const { loggedIn } = authSlice.actions;

export const selectCurrentUser = (state: RootState) => state.auth.user;
