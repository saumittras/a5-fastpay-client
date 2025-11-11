"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetMessagesQuery } from "@/redux/features/contact/contact.api";
// import { useGetMessagesQuery } from "@/redux/features/admin/admin.api";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import { useEffect, useState } from "react";

export default function MessageList() {
  const [page, setPage] = useState(1);
  const [limit] = useState(5);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  // debounce for better UX
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedSearch(search), 500);
    return () => clearTimeout(timer);
  }, [search]);

  const { data, isLoading, isError, isFetching } = useGetMessagesQuery({
    page,
    limit,
    search: debouncedSearch,
  });

  const messages = data?.data ?? [];
  const meta = data?.meta;

  const handlePrev = () => setPage((p) => Math.max(1, p - 1));
  const handleNext = () => {
    if (meta && page < meta.totalPages) setPage((p) => p + 1);
  };

  return (
    <div className="space-y-4">
      {/* Search bar */}
      <div className="flex items-center gap-2">
        <div className="relative w-full">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search by name, email or subject..."
            className="pl-9"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Message list */}
      <ScrollArea className="h-[70vh] w-full rounded-md border p-4">
        {isLoading || isFetching ? (
          <div className="space-y-3">
            {[...Array(3)].map((_, i) => (
              <Skeleton key={i} className="h-24 w-full rounded-lg" />
            ))}
          </div>
        ) : isError ? (
          <div className="text-center text-red-500 mt-6">
            Failed to load messages 😢
          </div>
        ) : messages.length === 0 ? (
          <div className="text-center text-gray-500 mt-6">
            No messages found.
          </div>
        ) : (
          <div className="space-y-4">
            {messages.map((msg) => (
              <Card key={msg._id} className="hover:shadow-md transition">
                <CardHeader>
                  <CardTitle className="text-lg">{msg.subject}</CardTitle>
                  <p className="text-sm ">
                    Name: {msg.senderName} • e-mail: {msg.email}
                  </p>
                  <p className="text-xs ">
                    {new Date(msg.createdAt).toLocaleString()}
                  </p>
                </CardHeader>
                <Separator />
                <CardContent>
                  <p className=" whitespace-pre-wrap">{msg.message}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </ScrollArea>

      {/* Pagination Controls */}
      {meta && meta.totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 pt-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handlePrev}
            disabled={page === 1}
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Prev
          </Button>
          <span className="text-sm text-gray-600">
            Page {meta.page} of {meta.totalPages}
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={handleNext}
            disabled={page === meta.totalPages}
          >
            Next
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      )}
    </div>
  );
}
