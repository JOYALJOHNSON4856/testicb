import { BASE_URL } from '@/utils/allapis';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authapi = createApi({
  reducerPath: 'authapi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://poc-restaurant-api.icodebdev.com/' }),
  endpoints: (builder) => ({
    adminlogin: builder.mutation({
      query: (data) => ({
        url: 'authenticate',
        method: 'POST',
        body: data,
      }),
    }),
   
  }),
});

export const { useAdminloginMutation} = authapi;