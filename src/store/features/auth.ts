import { createSlice } from '@reduxjs/toolkit';

interface User {
  email: string;
  username: string;
  bio: string;
  image: string;
  token: string;
}

interface AuthState {
  inProgress: boolean;
  errors: object | null;
  currentUser: User | null;
}

const initialState: AuthState = {
  inProgress: false,
  errors: null,
  currentUser: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // actions => action handlers
    login: (state, action) => {
      state.inProgress = false;
      state.errors = action.payload.errors || null;
    },
    createUser: (state) => {
      state.currentUser = {
        email: 'vanikoakofa@gmail.com',
        bio: 'no bio',
        image: 'no image',
        token: RandomString(),
        username: 'vano.akofa11',
      };
    },
  },
});

const RandomString = () => {
  return Math.random().toString(36).substr(2, 10);
};

// Action creators
export const { login, createUser } = authSlice.actions;

// Selectors
export const getCurrentUser = (state: AuthState) => state.currentUser;

// Reducer
export default authSlice.reducer;
