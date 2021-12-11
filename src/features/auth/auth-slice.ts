import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
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

export const autoLogin = createAsyncThunk(
  'auth/autoLogin',
  async (token: any) => {
    console.log('token: ', token);
    const response = await fetch('http://localhost:8800/api/auth/currentuser', {
      headers: {
        authorization: 'Bearer ' + token,
      },
    });
    console.log({ response });
    return response.json();
  }
);

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
    builder.addCase(autoLogin.fulfilled, (state, action) => {
      state.user = action.payload;
    });
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
export const selectIsAuthenticated = (state: RootState) =>
  state.auth.isAuthenticated;
export const selectCurrentUser = (state: RootState) => state.auth.user;

// Reducer
export default authSlice.reducer;

// Action creators
export const { loggedIn } = authSlice.actions;
