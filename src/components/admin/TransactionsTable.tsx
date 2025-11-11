/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useGetAllTransactionsQuery } from "@/redux/features/admin/admin.api";
import { useEffect, useState } from "react";
import LoadingScreen from "../LoadingScreen";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export const TransactionsTable = () => {
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // filters
  const [typeFilter, setTypeFilter] = useState("all");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [search, setSearch] = useState("");

  const { data, isLoading: tnxIsLoading } = useGetAllTransactionsQuery({
    page,
    limit: itemsPerPage,
    type: typeFilter === "all" ? undefined : typeFilter,
    startDate: startDate || undefined,
    endDate: endDate || undefined,
    search: search || undefined,
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page, typeFilter, itemsPerPage, startDate, endDate, search]);

  const transactions = data?.data || [];
  const totalPages = data?.meta?.pages || 1;
  const totalItems = data?.meta?.total || 0;
  if (tnxIsLoading)
    return (
      <div className="flex justify-center items-center h-40 text-primary animate-pulse">
        <LoadingScreen />
      </div>
    );

  return (
    <div className="mt-10">
      <h2 className="text-xl font-semibold mb-4">All Transactions</h2>

      {/* === Filters Section === */}
      <div className="flex flex-col sm:flex-row sm:items-end gap-4 border border-border p-4 rounded-lg bg-card/50">
        <div className="flex flex-col gap-1">
          <label className="text-sm text-muted-foreground">Start Date</label>
          <Input
            type="date"
            value={startDate}
            onChange={(e) => {
              setStartDate(e.target.value);
              setPage(1);
            }}
            className="w-full sm:w-40"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm text-muted-foreground">End Date</label>
          <Input
            type="date"
            value={endDate}
            onChange={(e) => {
              setEndDate(e.target.value);
              setPage(1);
            }}
            className="w-full sm:w-40"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm text-muted-foreground">
            Transaction Type
          </label>
          <Select
            value={typeFilter}
            onValueChange={(v) => {
              setTypeFilter(v);
              setPage(1);
            }}
          >
            <SelectTrigger className="w-40 bg-card border-border focus:ring-2 focus:ring-primary">
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="SEND_MONEY">Send Money</SelectItem>
              <SelectItem value="CASH_IN">Cash In</SelectItem>
              <SelectItem value="CASH_OUT">Cash Out</SelectItem>
              <SelectItem value="PAYMENT">Payment</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm text-muted-foreground">
            Search (Phone or ID)
          </label>
          <Input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
            className="w-full sm:w-56"
          />
        </div>

        <Button
          variant="outline"
          onClick={() => {
            setTypeFilter("all");
            setStartDate("");
            setEndDate("");
            setSearch("");
            setPage(1);
          }}
          className="mt-2 sm:mt-0"
        >
          Reset
        </Button>
      </div>

      {/* === Table === */}
      <div className="overflow-x-auto mt-4 border rounded-lg">
        <table className="min-w-full text-sm">
          <thead className="bg-muted/50">
            <tr>
              <th className="p-2 text-left">Tran. Type</th>
              <th className="p-2 text-left">From</th>
              <th className="p-2 text-left">To</th>
              <th className="p-2 text-left">Amount</th>
              <th className="p-2 text-left">Date</th>
            </tr>
          </thead>
          <tbody>
            {transactions.length > 0 ? (
              transactions.map((t: any) => (
                <tr
                  key={t._id}
                  className="border-t hover:bg-muted/30 transition"
                >
                  <td className="p-2 capitalize">{t.transactionType}</td>
                  <td className="p-2">{t.phoneFrom}</td>
                  <td className="p-2">{t.phoneTo}</td>
                  <td className="p-2 font-medium text-primary">${t.amount}</td>
                  <td className="p-2 text-muted-foreground">
                    {new Date(t.createdAt).toLocaleString()}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={5}
                  className="text-center py-4 text-muted-foreground"
                >
                  No transactions found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* === Pagination Section === */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-border pt-4">
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

        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Items per page:</span>
          <Select
            value={String(itemsPerPage)}
            onValueChange={(v) => {
              setItemsPerPage(Number(v));
              setPage(1);
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
            Total:{" "}
            <span className="text-primary font-medium">{totalItems}</span> items
            | <span className="text-primary font-medium">{totalPages}</span>{" "}
            pages
          </span>
        </div>
      </div>
    </div>
  );
};
