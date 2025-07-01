import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const taskApi = createApi({
  reducerPath: "taskApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://task-server-m-4.vercel.app/api/task",
  }),
  tagTypes: ["task"],
  endpoints: (builder) => ({
    getAllTask: builder.query({
      query: () => "/",
      providesTags: ["task"],
    }),
    getATask: builder.query({
      query: (id) => `/${id}`,
      providesTags: ["task"],
    }),
    createATask: builder.mutation({
      query: (taskData) => ({
        url: "/create-task",
        method: "POST",
        body: taskData,
      }),
      invalidatesTags: ["task"],
    }),
    updateTask: builder.mutation({
      query: ({ id, taskData }) => ({
        url: `/${id}`,
        method: "PATCH",
        body: taskData,
      }),
      invalidatesTags: ["task"],
    }),
    deleteTask: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["task"],
    }),
  }),
});

export const {
  useCreateATaskMutation,
  useGetAllTaskQuery,
  useGetATaskQuery,
  useUpdateTaskMutation,
  useDeleteTaskMutation,
} = taskApi;
