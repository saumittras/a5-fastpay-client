import type { ComponentType } from "react";

export type WalletType = "USER" | "AGENT" | "PENDING_AGENT" | "SUSPENDED_AGENT";
export type URole = "SUPER_ADMIN" | "ADMIN" | "USER" | "AGENT";
export const role = {
  superAdmin: "SUPER_ADMIN",
  admin: "ADMIN",
  user: "USER",
  agent: "AGENT",
};
export type WalletStatus = "UNVERIFIED" | "BLOCKED" | "ACTIVE" | "SUSPENDED";

// src/types/status.type.ts
export type Status =
  | "PENDING"
  | "ACTIVE"
  | "BLOCKED"
  | "FROZEN"
  | "CLOSED"
  | "DELETED"
  | "SUSPENDED";

export interface ISidebarItem {
  title: string;
  items: {
    title: string;
    url: string;
    component: ComponentType;
  }[];
}
