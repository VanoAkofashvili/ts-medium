import { createSlice } from '@reduxjs/toolkit';

interface User {
  username?: string;
  token: string | null;
  isAdmin?: boolean;
}

interface AuthState {
  loading: boolean;
  currentUser: User;
  error: string | null;
}

const initialState: AuthState = {
  loading: false,
  error: null,
  currentUser: {
    token: null,
  },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // actions => action handlers
    loggedIn: (state, action) => {
      state.loading = false;
      state.currentUser = action.payload;
      state.error = null;
    },
    registered: (state, action) => {
      state.loading = false;
      state.currentUser = action.payload;
      state.error = null;
    },
  },
});

// Action creators
export const { loggedIn, registered } = authSlice.actions;

// Selectors

// Reducer
export default authSlice.reducer;
