import { baseApi } from "@/redux/baseApi";

export interface IMessage {
  _id: string;
  senderName: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
}

export interface IMessageResponse {
  data: IMessage[];
  meta: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}

export const adminApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: (params) => ({
        url: "/admin/users",
        method: "GET",
        params: params,
      }),
      providesTags: ["USER"],
    }),
    getAllWallets: builder.query({
      query: () => ({
        url: "/admin/wallets",
        method: "GET",
      }),
      providesTags: ["USER"],
    }),
    getAllTransactions: builder.query({
      query: (params) => ({
        url: "/admin/transactions",
        method: "GET",
        params: params,
      }),
      providesTags: ["TRANSACTION"],
    }),
    agentWallet: builder.query({
      query: () => ({
        url: "/admin/get-agent",
        method: "GET",
      }),
      providesTags: ["TRANSACTION"],
    }),
    userAction: builder.mutation({
      query: (body) => ({
        url: "/admin/user-action",
        method: "POST",
        data: body,
      }),
      invalidatesTags: ["USER"],
    }),
    agentAction: builder.mutation({
      query: (body) => ({
        url: "/admin/agent-action",
        method: "POST",
        data: body,
      }),
      invalidatesTags: ["AGENT"],
    }),
    adminOverview: builder.query({
      query: () => ({
        url: "/admin/admin-overview",
        method: "GET",
      }),
      providesTags: ["ADMIN_OVERVIEW"],
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useGetAllWalletsQuery,
  useGetAllTransactionsQuery,
  useUserActionMutation,
  useAgentActionMutation,
  useAgentWalletQuery,
  useAdminOverviewQuery,
} = adminApi;
