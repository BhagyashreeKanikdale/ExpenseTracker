import MainLayout from "../layouts/MainLayout";
import ExpenseChart from "../components/ExpenseChart";
import DoughnutChart from "../components/DoughnutChart";
import {
  Download,
  TrendingUp,
  TrendingDown,
  Wallet,
} from "lucide-react";

const Reports = () => {
  return (
    <MainLayout
      title="Reports & Analytics 📊"
      subtitle="Analyze your income, expenses and savings."
    >
      {/* Summary Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

        <div className="rounded-3xl bg-green-500 p-6 text-white shadow-lg">
          <TrendingUp size={40} />

          <h3 className="mt-5 text-lg font-semibold">
            Total Income
          </h3>

          <h1 className="mt-2 text-4xl font-bold">
            ₹75,000
          </h1>

          <p className="mt-3 text-green-100">
            +12% than last month
          </p>
        </div>

        <div className="rounded-3xl bg-red-500 p-6 text-white shadow-lg">
          <TrendingDown size={40} />

          <h3 className="mt-5 text-lg font-semibold">
            Total Expense
          </h3>

          <h1 className="mt-2 text-4xl font-bold">
            ₹25,500
          </h1>

          <p className="mt-3 text-red-100">
            -4% than last month
          </p>
        </div>

        <div className="rounded-3xl bg-blue-600 p-6 text-white shadow-lg">
          <Wallet size={40} />

          <h3 className="mt-5 text-lg font-semibold">
            Total Savings
          </h3>

          <h1 className="mt-2 text-4xl font-bold">
            ₹49,500
          </h1>

          <p className="mt-3 text-blue-100">
            Available Balance
          </p>
        </div>

      </div>

      {/* Charts */}

      <div className="mt-10 grid grid-cols-1 gap-6 xl:grid-cols-3">

        <div className="xl:col-span-2">
          <ExpenseChart />
        </div>

        <DoughnutChart />

      </div>

      {/* Download Section */}

      <div className="mt-10 rounded-3xl bg-white p-8 shadow-lg">

        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

          <div>

            <h2 className="text-2xl font-bold text-slate-800">
              Export Financial Report
            </h2>

            <p className="mt-2 text-gray-500">
              Download your income and expense report as PDF or CSV.
            </p>

          </div>

          <div className="flex gap-4">

            <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 transition">

              <Download size={18} />

              PDF

            </button>

            <button className="flex items-center gap-2 rounded-xl bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700 transition">

              <Download size={18} />

              CSV

            </button>

          </div>

        </div>

      </div>
    </MainLayout>
  );
};

export default Reports;