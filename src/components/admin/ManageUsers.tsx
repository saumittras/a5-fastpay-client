/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  useGetAllUsersQuery,
  useUserActionMutation,
} from "@/redux/features/admin/admin.api";
import type { Status } from "@/types/types";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import LoadingScreen from "../LoadingScreen";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export const ManageUsers = () => {
  const statusColors: Record<Status, string> = {
    PENDING: "text-yellow-500",
    ACTIVE: "text-green-500",
    BLOCKED: "text-red-500",
    FROZEN: "text-blue-500",
    CLOSED: "text-gray-500",
    DELETED: "text-slate-400",
    SUSPENDED: "text-orange-500",
  };

  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");

  const { data, refetch, isLoading } = useGetAllUsersQuery({
    page,
    limit: itemsPerPage,
    search: searchTerm,
    status: statusFilter !== "ALL" ? statusFilter : undefined,
  });

  const [userAction] = useUserActionMutation();

  const toggleStatus = async (accountStatus: string, phone: string) => {
    const action = accountStatus === "ACTIVE" ? "block" : "unblock";
    const result = await userAction({ walletNo: phone, action });
    if (result) {
      toast.success(
        `User ${action === "block" ? "blocked" : "unblocked"} successfully`
      );
      refetch();
    }
  };

  const totalPages = data?.meta?.pages || 1;
  const totalItems = data?.meta?.total || 0;

  useEffect(() => {
    setPage(1);
  }, [searchTerm, statusFilter, itemsPerPage]);

  return (
    <div className="mt-8 space-y-4">
      <h2 className="text-xl font-semibold">Manage Users</h2>

      <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
        <Input
          placeholder="Search by name or phone..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="sm:w-1/3"
        />
        <Select
          value={statusFilter}
          onValueChange={(val) => setStatusFilter(val)}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ALL">All</SelectItem>
            <SelectItem value="ACTIVE">Active</SelectItem>
            <SelectItem value="BLOCKED">Blocked</SelectItem>
            <SelectItem value="FROZEN">Frozen</SelectItem>
            <SelectItem value="CLOSED">Closed</SelectItem>
            <SelectItem value="DELETED">Deleted</SelectItem>
            <SelectItem value="SUSPENDED">Suspended</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="overflow-x-auto border min-h-60 rounded-lg">
        <table className="min-w-full">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2 text-left text-gray-500">Name</th>
              <th className="p-2 text-left text-gray-500">Wallet No</th>
              <th className="p-2 text-left text-gray-500">Status</th>
              <th className="p-2 text-center text-gray-500">Action</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan={4} className="p-4 text-center">
                  <LoadingScreen />
                </td>
              </tr>
            ) : data?.data.length ? (
              data.data.map((user: any) => (
                <tr key={user._id} className="border-t hover:bg-gray-50">
                  <td className="p-2">{user.name}</td>
                  <td className="p-2">{user.phone}</td>
                  <td
                    className={`p-2 font-medium ${
                      statusColors[user.accountStatus as Status]
                    }`}
                  >
                    {user.accountStatus}
                  </td>
                  <td className="p-2 text-center">
                    <Button
                      onClick={() =>
                        toggleStatus(user.accountStatus, user.phone)
                      }
                      variant={
                        user.accountStatus === "ACTIVE"
                          ? "destructive"
                          : "default"
                      }
                    >
                      {user.accountStatus === "ACTIVE" ? "Block" : "Unblock"}
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="p-4 text-center text-gray-500">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
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
            onValueChange={(v) => setItemsPerPage(Number(v))}
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
