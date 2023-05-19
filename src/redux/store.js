import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { wiseAutoApi } from 'services/wiseAutoApi';

export const store = configureStore({
  reducer: {
    [wiseAutoApi.reducerPath]: wiseAutoApi.reducer,
  },

  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(wiseAutoApi.middleware),
});

setupListeners(store.dispatch);
