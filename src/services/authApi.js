import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api/auth/' }),

  endpoints: builder => ({
    login: builder.mutation({
      query(body) {
        return { url: `login`, method: 'POST', body };
      },
      invalidatesTags: [{ type: 'Login', id: 'LIST' }],
    }),
  }),
});

export const { useLoginMutation } = authApi;
