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
  extraReducers: builder =>
    builder
      .addMatcher(endpoints.register.matchPending, (state, action) => state)
      .addMatcher(endpoints.register.matchRejected, (state, action) => state)
      .addMatcher(endpoints.register.matchFulfilled, (state, { payload }) => {
        state.token = payload.token;
        state.user = payload.result;
        state.isLoggedIn = true;
      })

      .addMatcher(endpoints.login.matchPending, (state, action) => state)
      .addMatcher(endpoints.login.matchRejected, (state, action) => state)
      .addMatcher(endpoints.login.matchFulfilled, (state, { payload }) => {
        state.token = payload.token;
        state.user = payload.result;
        state.isLoggedIn = true;
      }),
});

export const authReducer = authSlice.reducer;

// matchPending
// matchRejected
// matchFulfilled
