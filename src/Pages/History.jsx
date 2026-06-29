import {
  Search,
  Pencil,
  Trash2,
  ArrowUpCircle,
  ArrowDownCircle,
} from "lucide-react";

import MainLayout from "../layouts/MainLayout";

const transactions = [
  {
    id: 1,
    date: "01 Jun 2026",
    category: "Food",
    description: "Pizza Hut",
    amount: "₹450",
    type: "Expense",
  },
  {
    id: 2,
    date: "02 Jun 2026",
    category: "Salary",
    description: "Monthly Salary",
    amount: "₹50,000",
    type: "Income",
  },
  {
    id: 3,
    date: "04 Jun 2026",
    category: "Travel",
    description: "Uber Ride",
    amount: "₹350",
    type: "Expense",
  },
  {
    id: 4,
    date: "05 Jun 2026",
    category: "Shopping",
    description: "Nike Shoes",
    amount: "₹2,500",
    type: "Expense",
  },
  {
    id: 5,
    date: "06 Jun 2026",
    category: "Freelancing",
    description: "Website Project",
    amount: "₹15,000",
    type: "Income",
  },
  {
    id: 6,
    date: "08 Jun 2026",
    category: "Bills",
    description: "Electricity Bill",
    amount: "₹1,800",
    type: "Expense",
  },
];

const History = () => {
  return (
    <MainLayout
      title="Transaction History 📋"
      subtitle="View and manage all your transactions."
    >
      <div className="rounded-3xl bg-white p-6 shadow-lg">

        {/* Filters */}

        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

          <div className="relative w-full md:w-96">

            <Search
              className="absolute left-4 top-3 text-gray-400"
              size={20}
            />

            <input
              type="text"
              placeholder="Search transactions..."
              className="w-full rounded-xl border border-gray-300 py-3 pl-12 pr-4 outline-none focus:border-blue-500"
            />

          </div>

          <div className="flex flex-wrap gap-4">

            <select className="rounded-xl border border-gray-300 px-4 py-3 focus:border-blue-500 outline-none">
              <option>All Types</option>
              <option>Income</option>
              <option>Expense</option>
            </select>

            <input
              type="date"
              className="rounded-xl border border-gray-300 px-4 py-3 focus:border-blue-500 outline-none"
            />

          </div>

        </div>

        {/* Table */}

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>

              <tr className="border-b text-left text-gray-500">

                <th className="pb-4">Date</th>
                <th className="pb-4">Category</th>
                <th className="pb-4">Description</th>
                <th className="pb-4">Amount</th>
                <th className="pb-4">Status</th>
                <th className="pb-4 text-center">Action</th>

              </tr>

            </thead>

            <tbody>

              {transactions.map((item) => (

                <tr
                  key={item.id}
                  className="border-b hover:bg-slate-50 transition"
                >

                  <td className="py-4">{item.date}</td>

                  <td className="py-4 font-medium">
                    {item.category}
                  </td>

                  <td className="py-4 text-gray-500">
                    {item.description}
                  </td>

                  <td
                    className={`py-4 font-bold ${
                      item.type === "Income"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {item.amount}
                  </td>

                  <td className="py-4">

                    <span
                      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium ${
                        item.type === "Income"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {item.type === "Income" ? (
                        <ArrowUpCircle size={16} />
                      ) : (
                        <ArrowDownCircle size={16} />
                      )}

                      {item.type}
                    </span>

                  </td>

                  <td className="py-4">

                    <div className="flex justify-center gap-3">

                      <button className="rounded-lg bg-blue-100 p-2 text-blue-600 hover:bg-blue-200">

                        <Pencil size={18} />

                      </button>

                      <button className="rounded-lg bg-red-100 p-2 text-red-600 hover:bg-red-200">

                        <Trash2 size={18} />

                      </button>

                    </div>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>
    </MainLayout>
  );
};

export default History;