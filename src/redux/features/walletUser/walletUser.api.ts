import { baseApi } from "@/redux/baseApi";

export const walletUserApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    sendMoneyToUser: builder.mutation({
      query: (body) => ({
        url: "/test/send-money",
        method: "POST",
        data: body,
      }),
    }),
    depositMoney: builder.mutation({
      query: (body) => ({
        url: "/test/add-money",
        method: "POST",
        data: body,
      }),
    }),
    withdrawMoney: builder.mutation({
      query: (body) => ({
        url: "/test/withdraw-Money",
        method: "POST",
        data: body,
      }),
    }),
    getUserTransactions: builder.query({
      query: (params) => ({
        url: "/test/transactions",
        method: "GET",
        params: params,
      }),
      providesTags: ["TRANSACTION"],
    }),
    userBalance: builder.query({
      query: (params) => ({
        url: "test/user-balance",
        method: "GET",
        params: params,
      }),
      providesTags: ["TRANSACTION"],
    }),
  }),
});

export const {
  useSendMoneyToUserMutation,
  useDepositMoneyMutation,
  useWithdrawMoneyMutation,
  useGetUserTransactionsQuery,
  useUserBalanceQuery,
} = walletUserApi;
