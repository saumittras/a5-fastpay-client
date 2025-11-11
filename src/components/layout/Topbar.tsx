import { Button } from "@/components/ui/button";

// import { LogOut } from "lucide-react";
import {
  authApi,
  useLogoutMutation,
  useUserInfoQuery,
} from "@/redux/features/auth/auth.api";
import { LogOut } from "lucide-react";
import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router";
import { ModeToggle } from "./ModeToggler";

const Topbar: React.FC = () => {
  const naviget = useNavigate();
  const dispatch = useDispatch();
  const { data } = useUserInfoQuery(undefined);
  const [logout] = useLogoutMutation();

  const handleLogout = async () => {
    await logout(undefined);
    dispatch(authApi.util.resetApiState());
    naviget("/login");
  };

  return (
    <header
      id="#stats-cards"
      className="sticky top-0 z-30 w-full bg-white/10 dark:bg-black/20 backdrop-blur-xl border-b border-white/10 shadow-md flex justify-between items-center px-6 py-3"
    >
      <h2 className="lg:text-xl md:text-sm font-semibold text-theme">
        {data?.data?.name ? `Welcome, ${data?.data?.name}` : "Please Login"}
      </h2>

      <div className="flex items-center gap-4">
        <ModeToggle />

        {/* <Button
          variant="destructive"
          onClick={handleLogout}
          className="bg-green-500 text-[#5e6ec9] "
        >
          <LogOut size={16} className="mr-1" /> Logout
        </Button> */}

        {data?.data?.name ? (
          <Button
            variant="destructive"
            onClick={handleLogout}
            className=" bg-[#5e6ec9] "
          >
            <LogOut size={16} className="mr-1" /> Logout
          </Button>
        ) : (
          <Button
            variant="destructive"
            onClick={handleLogout}
            className=" bg-[#5e6ec9] "
          >
            <Link to={"/login"}>Login</Link>
          </Button>
        )}
      </div>
    </header>
  );
};

export default Topbar;
