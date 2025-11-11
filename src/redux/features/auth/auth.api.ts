import { baseApi } from "@/redux/baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (userInfo) => ({
        url: "/user/register",
        method: "POST",
        data: userInfo,
      }),
    }),
    login: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/login",
        method: "POST",
        data: userInfo,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
      invalidatesTags: ["USER"],
    }),
    userInfo: builder.query({
      query: () => ({
        url: "/auth/me",
        method: "GET",
      }),
      providesTags: ["USER"],
    }),
    accessToken: builder.query({
      query: () => ({
        url: "/auth//refresh-token",
        method: "GET",
      }),
      providesTags: ["USER"],
    }),
    updateProfile: builder.mutation({
      query: (data) => {
        return { url: "/auth/update-profile", method: "PATCH", data: data };
      },
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useLogoutMutation,
  useAccessTokenQuery,
  useUserInfoQuery,
  useUpdateProfileMutation,
} = authApi;
