// import App from "@/App";
// import DashboardLayout from "@/components/layout/DashboardLayout";
// import Unauthorized from "@/components/UnauthorizeAccess";
// import About from "@/pages/About";
// import Contact from "@/pages/Contact";
// import ErrorPage from "@/pages/ErrorPage";
// import Faq from "@/pages/Faq";
// import Features from "@/pages/Features";
// import Home from "@/pages/Home";
// import LoginPage from "@/pages/Login";
// import RegisterPage from "@/pages/Register";
// import { role, type URole } from "@/types/types";
// import { generateRoutes } from "@/util/generateRoutes";
// import { withAuth } from "@/util/withAuth";
// import { createBrowserRouter, Navigate } from "react-router";
// // import { adminSidebarItems } from "./adminSideBarItems";
// import { agentSidebarItems } from "./agentSidebarItems";
// import { userSidebarItems } from "./userSidebarItems";

// export const router = createBrowserRouter([
//   {
//     Component: App,
//     path: "/",
//     errorElement: <ErrorPage />,
//     children: [
//       { index: true, Component: Home },
//       { path: "about", Component: About },
//       { path: "contact", Component: Contact },
//       { path: "feature", Component: Features },
//       { path: "faq", Component: Faq },
//       { path: "login", Component: LoginPage },
//       { path: "register", Component: RegisterPage },
//     ],
//   },

//   {
//     Component: withAuth(DashboardLayout, role.superAdmin as URole),
//     path: "/dashboard/admin",
//     children: [
//       { index: true, element: <Navigate to="/dashboard/admin" /> },
//       ...generateRoutes(adminSidebarItems),
//     ],
//   },

//   {
//     Component: withAuth(DashboardLayout, role.agent as URole),
//     path: "/dashboard/agent",
//     children: [
//       { index: true, element: <Navigate to="/dashboard/agent" /> },
//       ...generateRoutes(agentSidebarItems),
//     ],
//   },

//   {
//     Component: withAuth(DashboardLayout, role.user as URole),
//     path: "/dashboard/user",
//     children: [
//       { index: true, element: <Navigate to="/dashboard/user" /> },
//       ...generateRoutes(userSidebarItems),
//     ],
//   },

//   {
//     Component: Unauthorized,
//     path: "/unauthorized",
//   },
// ]);
