import FastPayLogo from "@/assets/icons/Logo copy";
import { cn } from "@/lib/utils"; // ShadCN helper
import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import { Link, useLocation } from "react-router";
import { sidebarLinks } from "./RoleSidebarLinks";

const Sidebar: React.FC = () => {
  const [open, setOpen] = useState(true);
  const location = useLocation();
  const { data, isLoading } = useUserInfoQuery(undefined);

  if (isLoading) return <p></p>;
  const role = data?.data?.role || "USER";
  // const role = "ADMIN";

  const links = sidebarLinks[role as keyof typeof sidebarLinks];

  return (
    <div id="#nav-menu">
      <button
        className="md:hidden fixed top-4 left-4 z-50  p-2 rounded-lg shadow-lg"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      <motion.aside
        initial={{ x: -300 }}
        animate={{ x: open ? 0 : -300 }}
        transition={{ type: "spring", stiffness: 100 }}
        className={cn(
          "fixed md:static top-0 left-0 z-40 h-screen w-64 md:w-60 bg-white/10 dark:bg-black/20 backdrop-blur-xl shadow-2xl",
          "border-r border-white/10 text-sm overflow-y-auto p-4"
        )}
      >
        <h1 className="text-2xl font-bold text-theme mb-6 text-center">
          <Link to={"/"}>
            <FastPayLogo />
          </Link>
        </h1>
        <nav className="space-y-3">
          {links.map((link) => {
            const active = location.pathname === link.path;
            const Icon = link.icon;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-xl transition-all duration-200",
                  active
                    ? "bg-theme  shadow-lg"
                    : "hover:bg-theme/20 dark:hover:bg-theme/30 text-gray-800 dark:text-gray-200"
                )}
              >
                <Icon size={18} />
                {link.name}
              </Link>
            );
          })}
        </nav>
      </motion.aside>
    </div>
  );
};

export default Sidebar;
