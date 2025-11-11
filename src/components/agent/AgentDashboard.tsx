import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAgentOverviewQuery } from "@/redux/features/agent/agent.api";
import LoadingScreen from "../LoadingScreen";
import { AgentTransactions } from "./AgentTransactions";

const AgentDashboard = () => {
  const { data, isLoading } = useAgentOverviewQuery(undefined);
  if (isLoading) return <LoadingScreen />;

  return (
    <div className="p-6  space-y-6">
      <h1 className="text-2xl font-semibold">Agent Dashboard</h1>

      {/* Summary Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Balance</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-green-600">
              ৳{data?.data?.presentBalance}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Total Cash-In</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-green-600">
              ৳{data?.data?.totalCashIn}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Total Cash-Out</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-red-600">
              ৳{data?.data?.totalCashOut}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Commission Earned</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-blue-600">
              ৳{data?.data?.totalCommission}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Recent Transactions</h2>
        <div className="border rounded-md p-4 text-gray-500">
          <AgentTransactions />
        </div>
      </div>
    </div>
  );
};

export default AgentDashboard;
