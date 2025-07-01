import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://task-server-m-4.vercel.app/api/user",
  }),
  tagTypes: ["user"],
  endpoints: (builder) => ({
    getAllUser: builder.query({
      query: () => "/get-all-user",
      providesTags: ["user"],
    }),
    getAUser: builder.query({
      query: (id: string) => `/get-a-user/${id}`,
      providesTags: ["user"],
    }),
    createUser: builder.mutation({
      query: (userData) => ({
        url: "create-user",
        method: "POST",
        body: userData,
      }),
      invalidatesTags: ["user"],
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/delete-user/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const {
  useGetAllUserQuery,
  useGetAUserQuery,
  useCreateUserMutation,
  useDeleteUserMutation,
} = userApi;
