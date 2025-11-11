import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAdminOverviewQuery } from "@/redux/features/admin/admin.api";
import { motion } from "framer-motion";
import LoadingScreen from "../LoadingScreen";

export const DashboardOverview = () => {
  const { data: overview, isLoading } = useAdminOverviewQuery(undefined);
  if (isLoading) return <LoadingScreen />;
  const stats = [
    { label: "Total Users", value: overview?.data?.totalUsers || 0 },
    { label: "Total Agents", value: overview?.data?.totalAgents || 0 },
    {
      label: "Total Transactions",
      value: overview?.data?.totalTransactions || 0,
    },
    {
      label: "Transaction Volume",
      value: overview?.data?.totalTransactionVolume || 0,
    },
  ];
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((item, index) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card className=" t shadow-md">
            <CardHeader>
              <CardTitle>{item.label}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-semibold">{item.value}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};
