import { mainDashboardTour } from "@/util/driver/mainDashboardTore";
import { useEffect } from "react";

export const useMainTour = () => {
  // Auto start tour only once
  useEffect(() => {
    const hasSeenTour = localStorage.getItem("seenMainTour");
    if (!hasSeenTour) {
      const timer = setTimeout(() => {
        mainDashboardTour.drive(); // start the tour automatically
        localStorage.setItem("seenMainTour", "true");
      }, 1000); // small delay for layout render

      return () => clearTimeout(timer);
    }
  }, []);

  // Manual trigger (for Help button)
  const startTour = () => mainDashboardTour.drive();

  return { startTour };
};
