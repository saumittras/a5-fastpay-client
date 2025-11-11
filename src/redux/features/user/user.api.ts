// src/redux/api/userApi.ts
import { baseApi } from "@/redux/baseApi";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (body) => ({
        url: "/user/create",
        method: "POST",
        data: body,
      }),
    }),
  }),
});

export const { useCreateUserMutation } = userApi;
