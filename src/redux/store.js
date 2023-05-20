import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { wiseAutoApi } from 'services/wiseAutoApi';
import { authReducer } from './auth/authSlice';

export const store = configureStore({
  reducer: {
    [wiseAutoApi.reducerPath]: wiseAutoApi.reducer,
    auth: authReducer,
  },

  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(wiseAutoApi.middleware),
});

setupListeners(store.dispatch);
