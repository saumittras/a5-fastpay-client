// src/utils/driver/mainDashboardTour.ts
import { driver } from "driver.js";
import { driverBaseConfig } from "./driverBaseConfig";

export const mainDashboardTour = driver({
  ...driverBaseConfig,
  steps: [
    {
      element: "#nav-menu",
      popover: {
        title: "Navigation Menu",
        description:
          "Use this sidebar to switch between dashboard sections like Overview, Users, and Transactions.",
        side: "right",
        align: "start",
      },
    },
    {
      element: "#stats-cards",
      popover: {
        title: "Dashboard Stats",
        description:
          "These cards give you a quick summary of key data — like total users, transactions, or wallet balance.",
        side: "bottom",
      },
    },
    {
      element: "#chart-section",
      popover: {
        title: "Charts & Insights",
        description:
          "Visualize important trends and performance metrics here. Hover over the chart for more details.",
        side: "top",
      },
    },
    {
      element: "#table-filter",
      popover: {
        title: "Search & Filter",
        description:
          "Find specific records easily using the search bar or filters. You can combine multiple filters too.",
        side: "bottom",
      },
    },
    {
      element: "#theme-toggle",
      popover: {
        title: "Theme Switcher",
        description:
          "Toggle between Light and Dark mode for a personalized dashboard experience.",
        side: "left",
      },
    },
  ],
});
