import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api' }),

  endpoints: builder => ({
    getNews: builder.query({
      query: page => ({
        url: `/news`,
        params: {
          page,
          limit: 6,
        },
      }),
    }),
  }),
});

export const { useGetNewsQuery } = newsApi;
