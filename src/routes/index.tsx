import App from "@/App";
import { AdminDashboard } from "@/components/admin/AdminDashboard";
import UpdateProfile from "@/components/admin/AdminProfile";
import { ManageAgents } from "@/components/admin/ManageAgents";
import { ManageUsers } from "@/components/admin/ManageUsers";
import MessagesPage from "@/components/admin/message";
import { SystemSettings } from "@/components/admin/SystemSetting";
import { TransactionsTable } from "@/components/admin/TransactionsTable";
import AgentAddMoney from "@/components/agent/AgentAddMoney";
import AgentCommission from "@/components/agent/AgentCommission";
import AgentDashboard from "@/components/agent/AgentDashboard";
import { AgentTransactions } from "@/components/agent/AgentTransactions";

import AgentWithdrawUser from "@/components/agent/AgentWithdrawUser";
import DashboardLayout from "@/components/layout/DashboardLayout";
import Unauthorized from "@/components/UnauthorizeAccess";
import { UserDashboard } from "@/components/user/UserDashboard";
import { UserDeposit } from "@/components/user/UserDeposit";
// import { UpdateProfile } from "@/components/user/UserProfile";
import { UserSendMoney } from "@/components/user/UserSendMoney";
import UserTransactions from "@/components/user/UserTransactions";
import { UserWithdraw } from "@/components/user/UserWithdraw";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import ErrorPage from "@/pages/ErrorPage";
import Faq from "@/pages/Faq";
import Features from "@/pages/Features";
import Home from "@/pages/Home";
import LoginPage from "@/pages/Login";

import RegisterPage from "@/pages/Register";

import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    Component: App,
    path: "/",
    errorElement: <ErrorPage />,
    children: [
      { path: "/", Component: Home },
      { path: "/about", Component: About },
      { path: "/contact", Component: Contact },
      { path: "/feature", Component: Features },
      { path: "/faq", Component: Faq },
      { path: "/login", Component: LoginPage },
      { path: "/register", Component: RegisterPage },
    ],
  },

  {
    Component: DashboardLayout,
    path: "/dashboard",
    errorElement: <ErrorPage />,
    children: [
      {
        path: "admin",
        children: [
          { index: true, Component: AdminDashboard },
          //   { path: "admin", Component: AdminDashboard },
          { path: "manage-users", Component: ManageUsers },
          { path: "manage-agents", Component: ManageAgents },
          { path: "transactions", Component: TransactionsTable },
          { path: "settings", Component: SystemSettings },
          { path: "messages", Component: MessagesPage },
          { path: "profile", Component: UpdateProfile },
        ],
      },
      {
        path: "agent",
        children: [
          { index: true, Component: AgentDashboard },
          { path: "cash-in", Component: AgentAddMoney },
          { path: "cash-out", Component: AgentWithdrawUser },
          { path: "transactions", Component: AgentTransactions },
          { path: "commission", Component: AgentCommission },
          { path: "profile", Component: UpdateProfile },
        ],
      },
      {
        path: "user",
        children: [
          { index: true, Component: UserDashboard },
          { path: "deposit", Component: UserDeposit },
          { path: "withdraw", Component: UserWithdraw },
          { path: "send-money", Component: UserSendMoney },
          { path: "transactions", Component: UserTransactions },
          { path: "profile", Component: UpdateProfile },
        ],
      },
    ],
  },
  {
    Component: Unauthorized,
    path: "/unauthorized",
  },
]);

// export const router = createBrowserRouter([
//   {
//     Component: App,
//     path: "/",
//     errorElement: <ErrorPage />,
//     children: [
//       { path: "/", Component: Home },
//       { path: "/about", Component: About },
//       { path: "/contact", Component: Contact },
//       { path: "/feature", Component: Features },
//       { path: "/faq", Component: Faq },
//       { path: "/login", Component: LoginPage },
//       { path: "/register", Component: RegisterPage },
//     ],
//   },

//   // ✅ Protected dashboard routes
//   {
//     element: <ProtectedRoute />, // ✅ all dashboard routes protected
//     children: [
//       {
//         Component: DashboardLayout,
//         path: "/dashboard",
//         errorElement: <ErrorPage />,
//         children: [
//           // Admin routes
//           {
//             element: <ProtectedRoute allowedRoles={["ADMIN"]} />, // ✅ only admin
//             path: "admin",
//             children: [
//               { index: true, Component: AdminDashboard },
//               { path: "manage-users", Component: ManageUsers },
//               { path: "manage-agents", Component: ManageAgents },
//               { path: "transactions", Component: TransactionsTable },
//               { path: "settings", Component: SystemSettings },
//               { path: "profile", Component: AdminProfile },
//             ],
//           },

//           // Agent routes
//           {
//             element: <ProtectedRoute allowedRoles={["AGENT"]} />, // ✅ only agent
//             path: "agent",
//             children: [
//               { index: true, Component: AgentDashboard },
//               { path: "cash-in", Component: AgentAddMoney },
//               { path: "cash-out", Component: AgentWithdrawUser },
//               { path: "transactions", Component: AgentTransactions },
//               { path: "commission", Component: AgentCommission },
//               { path: "profile", Component: AgentProfile },
//             ],
//           },

//           // User routes
//           {
//             element: <ProtectedRoute allowedRoles={["USER"]} />, // ✅ only user
//             path: "user",
//             children: [
//               { index: true, Component: UserDashboard },
//               { path: "deposit", Component: UserDeposit },
//               { path: "withdraw", Component: UserWithdraw },
//               { path: "send-money", Component: UserSendMoney },
//               { path: "transactions", Component: UserTransactions },
//               { path: "profile", Component: UserProfile },
//             ],
//           },
//         ],
//       },
//     ],
//   },
// ]);
