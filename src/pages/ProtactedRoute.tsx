import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import type { URole } from "@/types/types";
import type { ComponentType } from "react";

import { Navigate } from "react-router";

export const withAuth = (Component: ComponentType, requiredRole?: URole) => {
  return function AuthWrapper() {
    const { data, isLoading } = useUserInfoQuery(undefined);

    if (!isLoading && !data?.data?.phone) {
      return <Navigate to="/login" />;
    }

    if (requiredRole && !isLoading && requiredRole !== data?.data?.role) {
      return <Navigate to="/unauthorized" />;
    }

    return <Component />;
  };
};
