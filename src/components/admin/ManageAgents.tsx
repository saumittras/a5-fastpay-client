/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import {
  useAgentActionMutation,
  useAgentWalletQuery,
} from "@/redux/features/admin/admin.api";
import type { WalletType } from "@/types/types";
import { toast } from "sonner";
import LoadingScreen from "../LoadingScreen";

export const ManageAgents = () => {
  const walletColors: Record<WalletType, string> = {
    USER: "text-blue-500",
    AGENT: "text-green-500",
    PENDING_AGENT: "text-yellow-500",
    SUSPENDED_AGENT: "text-red-500",
  };
  const toggleStatus = async (walletType: string, walletNo: string) => {
    console.log(walletType, walletNo);
    if (walletType === "AGENT") {
      const result = await agentAction({
        walletNo: walletNo,
        action: "suspend",
      });
      if (result) {
        toast.success(`Successfully ${walletNo} Suspend`);
        refetch();
      }
    } else {
      const result = await agentAction({
        walletNo: walletNo,
        action: "approve",
      });
      if (result) {
        toast.success(`Successfully ${walletNo} Approved`);
        refetch();
      }
    }
  };

  const [agentAction] = useAgentActionMutation();
  const {
    data: agents,
    refetch,
    isLoading: userIsLoading,
  } = useAgentWalletQuery(undefined);
  if (userIsLoading) return <LoadingScreen />;

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Manage Agents</h2>
      <div className="space-y-3">
        {agents?.data &&
          agents?.data?.map((a: any) => (
            <div
              key={a?._id}
              className="flex justify-between items-center border p-3 rounded-md"
            >
              <div>
                <p className="font-medium">{a?.walletNo}</p>
                <p
                  className={`text-sm ${
                    walletColors[a?.walletType as WalletType] || "text-gray-500"
                  }`}
                >
                  {a?.walletType}
                </p>
              </div>
              <Button
                onClick={() => toggleStatus(a?.walletType, a?.walletNo)}
                variant={
                  a?.walletType === "AGENT_PENDING" ? "default" : "destructive"
                }
              >
                {a.walletType === "AGENT" ? "Suspend" : "Approve"}
              </Button>
            </div>
          ))}
      </div>
    </div>
  );
};
