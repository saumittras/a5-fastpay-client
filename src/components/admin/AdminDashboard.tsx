import { motion } from "framer-motion";
import UpdateProfile from "./AdminProfile";
import { DashboardOverview } from "./DashboardOverview";
import { ManageAgents } from "./ManageAgents";
import { ManageUsers } from "./ManageUsers";

import MessageList from "./MessageList";
import { SystemSettings } from "./SystemSetting";
import { TransactionsTable } from "./TransactionsTable";

export const AdminDashboard = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-6 space-y-10"
    >
      <DashboardOverview />
      <ManageUsers />
      <ManageAgents />
      <TransactionsTable />
      <SystemSettings />
      <UpdateProfile />
      <MessageList />
    </motion.div>
  );
};
