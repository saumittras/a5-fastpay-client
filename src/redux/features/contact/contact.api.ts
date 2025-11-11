import { baseApi } from "@/redux/baseApi";
import type { IMessageResponse } from "../admin/admin.api";

export const contactApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    sendMessage: builder.mutation({
      query: (body) => ({
        url: "/contact/send-message",
        method: "POST",
        data: body,
      }),
    }),

    getMessagess: builder.query({
      query: (params) => ({
        url: "/contact/get-message",
        method: "GET",
        params: params,
      }),
      providesTags: ["TRANSACTION"],
    }),

    getMessages: builder.query<
      IMessageResponse,
      { page?: number; limit?: number; search?: string }
    >({
      query: ({ page = 1, limit = 10, search = "" }) => {
        const params = new URLSearchParams({
          page: page.toString(),
          limit: limit.toString(),
          ...(search && { search }),
        });
        return {
          url: `/contact/get-message?${params.toString()}`,
          method: "GET",
        };
      },
      providesTags: ["Messages"],
    }),
  }),
});

export const { useSendMessageMutation, useGetMessagesQuery } = contactApi;
