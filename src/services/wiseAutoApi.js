import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const wiseAutoApi = createApi({
  reducerPath: 'wiseAutoApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api/' }),

  endpoints: builder => ({
    login: builder.mutation({
      query(body) {
        return {
          url: `auth/login`,
          method: 'POST',
          body,
        };
      },
      transformResponse: (response, meta, arg) => response.data,
      transformErrorResponse: (response, meta, arg) => response.data,

      invalidatesTags: ['Login', 'User'],
      tagTypes: ['Login', 'User'],
      providesTags: ['Login', 'User'],
    }),

    register: builder.mutation({
      query(body) {
        return {
          url: `auth/signup`,
          method: 'POST',
          body,
        };
      },
      transformResponse: (response, meta, arg) => response.data,
      transformErrorResponse: (response, meta, arg) => response.data,

      invalidatesTags: ['Register', 'User'],
      tagTypes: ['Register', 'User'],
      providesTags: ['Register', 'User'],
    }),

    getNews: builder.query({
      query(page) {
        return {
          url: `/news`,
          params: { page, limit: 6 },
        };
      },
      tagTypes: ['News'],
      providesTags: ['News'],
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation, useGetNewsQuery } = wiseAutoApi;
