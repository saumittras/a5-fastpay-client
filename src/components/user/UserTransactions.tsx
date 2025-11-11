/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import { useGetUserTransactionsQuery } from "@/redux/features/walletUser/walletUser.api";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import LoadingScreen from "../LoadingScreen";

const UserTransactions: React.FC = () => {
  const [page, setPage] = useState(1);
  const [typeFilter, setTypeFilter] = useState("all");
  const [itemsPerPage, setItemsPerPage] = useState(10); // default 10

  const { data: userData, isLoading: userLoading } =
    useUserInfoQuery(undefined);
  const walletNo = userData?.data?.phone;

  const { data, isLoading } = useGetUserTransactionsQuery(
    {
      walletNo,
      page,
      limit: itemsPerPage,
      type: typeFilter === "all" ? undefined : typeFilter,
    },
    { skip: !walletNo }
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page, typeFilter, itemsPerPage]);

  if (userLoading || !walletNo)
    return (
      <div className="flex justify-center items-center h-40 text-primary animate-pulse">
        <LoadingScreen />
      </div>
    );

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-40 text-primary animate-pulse">
        Loading transactions...
      </div>
    );

  const transactions = data?.data || [];
  const totalPages = data?.meta?.pages || 1;
  const totalItems = data?.meta?.total || 0;

  return (
    <div className="p-6 space-y-6 bg-gradient-to-b from-background via-muted/20 to-background rounded-lg shadow-md border border-border">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
        <h2 className="text-2xl sm:text-3xl font-bold text-primary tracking-tight">
          Transaction History
        </h2>

        {/* Type Filter */}
        <Select value={typeFilter} onValueChange={(v) => setTypeFilter(v)}>
          <SelectTrigger className="w-full sm:w-56 bg-card border-border focus:ring-2 focus:ring-primary">
            <SelectValue placeholder="Filter by Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="ADD_MONEY">Deposit</SelectItem>
            <SelectItem value="WITHDRAW">Withdraw</SelectItem>
            <SelectItem value="SEND_MONEY">Send</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Transaction List */}
      <div className="grid gap-4 min-h-[300px]">
        {transactions.length === 0 ? (
          <p className="text-center text-muted-foreground bg-muted/30 rounded-md py-4">
            No transactions found.
          </p>
        ) : (
          transactions.map((tx: any) => (
            <Card
              key={tx._id}
              className="p-4 border border-border bg-card hover:bg-accent/20 hover:shadow-lg transition-all duration-200 rounded-xl"
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm">
                    <strong className="text-primary">From:</strong>{" "}
                    {tx.phoneFrom} |{" "}
                    <strong className="text-primary">To:</strong> {tx.phoneTo}
                  </p>
                  <p className="text-sm">
                    <strong className="text-foreground">Amount:</strong>{" "}
                    <span className="text-green-600 dark:text-green-400">
                      <span className="text-xl font-bold pr-2">৳</span>
                      {tx.amount.toFixed(2)}
                    </span>
                  </p>
                  <p className="text-sm">
                    <strong className="text-foreground">Type:</strong>{" "}
                    <span className="capitalize text-primary font-medium">
                      {tx.transactionType}
                    </span>{" "}
                    | <strong>Status:</strong>{" "}
                    <span
                      className={`${
                        tx.status === "SUCCESS"
                          ? "text-green-600 dark:text-green-400"
                          : "text-yellow-600 dark:text-yellow-400"
                      } font-medium`}
                    >
                      {tx.status}
                    </span>
                  </p>
                </div>
                <div className="text-xs text-muted-foreground">
                  {format(new Date(tx.createdAt), "dd MMM yyyy, hh:mm a")}
                </div>
              </div>
            </Card>
          ))
        )}
      </div>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-border pt-4">
        {/* Page Control */}
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            disabled={page <= 1}
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
            className="px-4 hover:bg-primary hover:text-primary-foreground"
          >
            Previous
          </Button>
          <span className="text-sm text-foreground">
            Page <span className="font-semibold text-primary">{page}</span> of{" "}
            {totalPages}
          </span>
          <Button
            variant="outline"
            disabled={page >= totalPages}
            onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
            className="px-4 hover:bg-primary hover:text-primary-foreground"
          >
            Next
          </Button>
        </div>

        {/* Items per page selector + Summary */}
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Items per page:</span>
          <Select
            value={String(itemsPerPage)}
            onValueChange={(v) => {
              setItemsPerPage(Number(v));
              setPage(1); // reset page when items per page changes
            }}
          >
            <SelectTrigger className="w-[80px] bg-card border-border focus:ring-2 focus:ring-primary">
              <SelectValue placeholder="Items" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="20">20</SelectItem>
              <SelectItem value="30">30</SelectItem>
            </SelectContent>
          </Select>

          <span className="text-sm text-muted-foreground">
            Total Items:{" "}
            <span className="text-primary font-medium">{totalItems}</span> |
            Total Pages:{" "}
            <span className="text-primary font-medium">{totalPages}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default UserTransactions;
