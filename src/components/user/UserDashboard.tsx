import { useUserBalanceQuery } from "@/redux/features/walletUser/walletUser.api";
import { Link } from "react-router";
import LoadingScreen from "../LoadingScreen";
import UserTransactions from "./UserTransactions";

export const UserDashboard = () => {
  const { data: user, isLoading } = useUserBalanceQuery(undefined);
  if (isLoading) return <LoadingScreen />;

  return (
    <div className="p-6 space-y-6">
      <div className="bg-base rounded-2xl p-6 shadow">
        <h2 className="text-2xl font-semibold mb-2">Wallet Balance</h2>
        <p className="text-4xl font-bold text-green-600">৳ {user?.data}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <button className="bg-blue-500 text-white py-3 rounded-lg">
          <Link to={"/dashboard/user/deposit"}>Deposit</Link>
        </button>

        <button className="bg-yellow-500 text-white py-3 rounded-lg">
          <Link to={"/dashboard/user/withdraw"}>Withdraw</Link>
        </button>
        <button className="bg-green-500 text-white py-3 rounded-lg">
          <Link to={"/dashboard/user/send-money"}>Send Money</Link>
        </button>
      </div>

      <div className="bg-base rounded-2xl p-6 shadow">
        <h3 className="text-xl font-semibold mb-4">Recent Transactions</h3>
        <ul className="space-y-2">
          <UserTransactions />
        </ul>
      </div>
    </div>
  );
};
