// // import { ISidebarItem } from "@/types";
// import type { ISidebarItem } from "@/types/types";
// import { lazy } from "react";

// // const AdminDashboard = lazy(() => import("@/components/admin/AdminDashboard"));
// // const ManageUsers = lazy(() => import("@/components/admin/ManageUsers"));
// // const ManageAgents = lazy(() => import("@/components/admin/ManageAgents"));
// // const TransactionsTable = lazy(
// //   () => import("@/components/admin/TransactionsTable")
// // );
// // const SystemSettings = lazy(() => import("@/components/admin/SystemSetting"));
// const MessagesPage = lazy(() => import("@/components/admin/message"));
// const UpdateProfile = lazy(() => import("@/components/admin/AdminProfile"));

// export const adminSidebarItems: ISidebarItem[] = [
//   {
//     title: "Dashboard",
//     items: [
//       { title: "Overview", url: "/dashboard/admin", component: AdminDashboard },
//     ],
//   },
//   {
//     title: "Management",
//     items: [
//       {
//         title: "Manage Users",
//         url: "/dashboard/admin/manage-users",
//         component: ManageUsers,
//       },
//       {
//         title: "Manage Agents",
//         url: "/dashboard/admin/manage-agents",
//         component: ManageAgents,
//       },
//     ],
//   },
//   {
//     title: "Finance",
//     items: [
//       {
//         title: "Transactions",
//         url: "/dashboard/admin/transactions",
//         component: TransactionsTable,
//       },
//     ],
//   },
//   {
//     title: "System",
//     items: [
//       {
//         title: "Settings",
//         url: "/dashboard/admin/settings",
//         component: SystemSettings,
//       },
//       {
//         title: "Messages",
//         url: "/dashboard/admin/messages",
//         component: MessagesPage,
//       },
//       {
//         title: "Profile",
//         url: "/dashboard/admin/profile",
//         component: UpdateProfile,
//       },
//     ],
//   },
// ];
