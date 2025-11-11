import MessageList from "@/components/admin/MessageList";

export default function MessagesPage() {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">📬 User Messages</h1>
      <p className="text-gray-500">
        View, search and browse messages sent by users.
      </p>
      <MessageList />
    </div>
  );
}
