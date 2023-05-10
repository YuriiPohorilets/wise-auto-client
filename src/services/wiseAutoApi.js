import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const wiseAutoApi = createApi({
  reducerPath: 'wiseAutoApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api' }),

  endpoints: builder => ({
    getNews: builder.query({
      query: () => `/news`,
    }),
  }),
});

export const { useGetNewsQuery } = wiseAutoApi;
