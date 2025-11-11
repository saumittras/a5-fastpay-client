import {
  BarChart,
  DollarSign,
  History,
  Home,
  MessageCircleIcon,
  Send,
  Settings,
  UserCog,
  Users,
  Wallet,
} from "lucide-react";

export const sidebarLinks = {
  USER: [
    { name: "Overview", icon: Home, path: "/dashboard/user" },
    { name: "Send Money", icon: Send, path: "/dashboard/user/send-money" },
    {
      name: "Withdraw Money",
      icon: Send,
      path: "/dashboard/user/withdraw",
    },
    { name: "Deposit Money", icon: Send, path: "/dashboard/user/deposit" },
    {
      name: "Transactions",
      icon: History,
      path: "/dashboard/user/transactions",
    },
    { name: "Profile", icon: Settings, path: "/dashboard/user/profile" },
  ],
  AGENT: [
    { name: "Overview", icon: Wallet, path: "/dashboard/agent" },
    { name: "Cash In", icon: Send, path: "/dashboard/agent/cash-in" },
    { name: "Cash Out", icon: Send, path: "/dashboard/agent/cash-out" },
    {
      name: "Transactions",
      icon: History,
      path: "/dashboard/agent/transactions",
    },
    {
      name: "Commission",
      icon: DollarSign,
      path: "/dashboard/agent/commission",
    },
    { name: "Profile", icon: Settings, path: "/dashboard/agent/profile" },
  ],
  ADMIN: [
    { name: "Overview", icon: BarChart, path: "/dashboard/admin" },
    {
      name: "Manage Users",
      icon: Users,
      path: "/dashboard/admin/manage-users",
    },
    {
      name: "Manage Agents",
      icon: UserCog,
      path: "/dashboard/admin/manage-agents",
    },
    {
      name: "Transactions",
      icon: History,
      path: "/dashboard/admin/transactions",
    },
    {
      name: "Messages",
      icon: MessageCircleIcon,
      path: "/dashboard/admin/messages",
    },
    { name: "Profile", icon: Settings, path: "/dashboard/admin/profile" },
  ],
  SUPER_ADMIN: [
    { name: "Overview", icon: BarChart, path: "/dashboard/admin" },
    {
      name: "Manage Users",
      icon: Users,
      path: "/dashboard/admin/manage-users",
    },
    {
      name: "Manage Agents",
      icon: UserCog,
      path: "/dashboard/admin/manage-agents",
    },
    {
      name: "Transactions",
      icon: History,
      path: "/dashboard/admin/transactions",
    },
    {
      name: "Messages",
      icon: MessageCircleIcon,
      path: "/dashboard/admin/messages",
    },
    { name: "Profile", icon: Settings, path: "/dashboard/admin/profile" },
  ],
};
