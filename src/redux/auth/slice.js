import { createSlice } from '@reduxjs/toolkit';
import { login, logout, register, refreshUser } from './operations';

const initialState = {
  user: {
    name: null,
    email: null,
    phone: null,
    city: null,
    birthday: null,
    avatarUrl: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  isError: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,

  extraReducers: builder =>
    builder
      .addCase(register.pending, (state, action) => state)
      .addCase(register.rejected, (state, action) => state)
      .addCase(register.fulfilled, (state, { payload }) => {
        state.user = payload.result;
        state.token = payload.token;
        state.isLoggedIn = true;
      })

      .addCase(login.pending, (state, action) => state)
      .addCase(login.rejected, (state, action) => state)
      .addCase(login.fulfilled, (state, { payload }) => {
        state.user = payload.result;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
      })

      .addCase(logout.pending, (state, action) => state)
      .addCase(logout.rejected, (state, action) => state)
      .addCase(logout.fulfilled, (state, action) => {
        state.user = { name: null, email: null, phone: null, city: null, birthday: null };
        state.token = null;
        state.isLoggedIn = false;
      })

      .addCase(refreshUser.pending, (state, action) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.rejected, (state, action) => {
        state.isRefreshing = false;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      }),
});

export const authReducer = authSlice.reducer;
