import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { newsApi } from 'services/newsApi';
import { authApi } from 'services/authApi';

// const authPersistConfig = {
//   key: 'auth',
//   storage,
//   whitelist: ['token'],
// };

export const store = configureStore({
  reducer: {
    [newsApi.reducerPath]: newsApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(newsApi.middleware).concat(newsApi.middleware),
});

setupListeners(store.dispatch);
