import {
  ArrowUpCircle,
  ArrowDownCircle,
  Wallet,
  CreditCard,
} from "lucide-react";

import MainLayout from "../layouts/MainLayout";
import StatCard from "../components/StatCard";
import ExpenseChart from "../components/ExpenseChart";
import DoughnutChart from "../components/DoughnutChart";
import RecentTransactions from "../components/RecentTransactions";

const Dashboard = () => {
  return (
    <MainLayout
      title="Dashboard 👋"
      subtitle="Here's what's happening with your finances today."
    >
      {/* Statistics Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">

        <StatCard
          title="Total Income"
          value="₹75,000"
          change="+12% from last month"
          icon={<ArrowUpCircle size={30} />}
          color="text-green-600"
          bgColor="bg-green-100"
        />

        <StatCard
          title="Total Expense"
          value="₹25,500"
          change="-4% from last month"
          icon={<ArrowDownCircle size={30} />}
          color="text-red-600"
          bgColor="bg-red-100"
        />

        <StatCard
          title="Balance"
          value="₹49,500"
          change="+8% this month"
          icon={<Wallet size={30} />}
          color="text-blue-600"
          bgColor="bg-blue-100"
        />

        <StatCard
          title="Transactions"
          value="32"
          change="+5 New"
          icon={<CreditCard size={30} />}
          color="text-purple-600"
          bgColor="bg-purple-100"
        />

      </div>

      {/* Charts */}
      <div className="mt-10 grid grid-cols-1 gap-6 xl:grid-cols-3">

        <div className="xl:col-span-2">
          <ExpenseChart />
        </div>

        <DoughnutChart />

      </div>

      {/* Recent Transactions */}
      <div className="mt-10">
        <RecentTransactions />
      </div>

    </MainLayout>
  );
};

export default Dashboard;