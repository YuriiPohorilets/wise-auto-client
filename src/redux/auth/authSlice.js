import { createSlice } from '@reduxjs/toolkit';
import { wiseAutoApi } from 'services/wiseAutoApi';

const initialState = {
  user: null,
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const { endpoints } = wiseAutoApi;

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: { logout: () => initialState },

  extraReducers: builder =>
    builder
      .addMatcher(endpoints.register.matchPending, (state, action) => state)
      .addMatcher(endpoints.register.matchRejected, (state, action) => state)
      .addMatcher(endpoints.register.matchFulfilled, (state, { payload }) => {
        state.token = payload.token;
        state.user = payload.result.user;
        state.isLoggedIn = true;
      })

      .addMatcher(endpoints.login.matchPending, (state, action) => state)
      .addMatcher(endpoints.login.matchRejected, (state, action) => state)
      .addMatcher(endpoints.login.matchFulfilled, (state, { payload }) => {
        state.token = payload.token;
        state.user = payload.result.user;
        state.isLoggedIn = true;
      })

      .addMatcher(endpoints.logout.matchPending, (state, action) => state)
      .addMatcher(endpoints.logout.matchRejected, (state, action) => state)
      .addMatcher(endpoints.logout.matchFulfilled, (state, { payload }) => {
        state.token = null;
        state.user = null;
        state.isLoggedIn = false;
      }),
});

export const { logout } = authSlice.actions;

export const authReducer = authSlice.reducer;
