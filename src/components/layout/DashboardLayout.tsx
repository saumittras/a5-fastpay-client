// src/components/layout/DashboardLayout.tsx
import { mainDashboardTour } from "@/util/driver/mainDashboardTore";
import React, { useEffect } from "react";
import { Outlet } from "react-router";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
// import { Outlet } from "react-router-dom";

const DashboardLayout: React.FC = () => {
  useEffect(() => {
    const role = localStorage.getItem("userRole");
    const hasSeen = localStorage.getItem(`seenTour-${role}`);
    if (!hasSeen) {
      mainDashboardTour.drive();
      localStorage.setItem(`seenTour-${role}`, "true");
    }
  }, []);
  // const { startTour } = useMainTour();

  return (
    <div id="#stats-cards" className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex flex-col flex-1 bg-gray-50 dark:bg-gray-900 transition-all duration-300">
        <Topbar />
        <main className="flex-1 overflow-y-auto p-6 md:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
