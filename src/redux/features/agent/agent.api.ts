/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "@/redux/baseApi";

export const agentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    cashIn: builder.mutation<any, any>({
      query: (body) => ({
        url: "/agent-wallet/cash-in",
        method: "POST",
        data: body,
      }),
    }),
    cashOut: builder.mutation<any, any>({
      query: (body) => ({
        url: "/agent-wallet/cash-out",
        method: "POST",
        data: body,
      }),
    }),
    agentTransactions: builder.query<any, Record<string, any>>({
      query: (params) => ({
        url: "/agent-wallet/transactions",
        method: "GET",
        params,
      }),
    }),
    agentOverview: builder.query({
      query: (params) => ({
        url: "/agent-wallet/agent-overview",
        method: "GET",
        params,
      }),
    }),
  }),
});

export const {
  useCashInMutation,
  useCashOutMutation,
  useAgentTransactionsQuery,
  useAgentOverviewQuery,
} = agentApi;
