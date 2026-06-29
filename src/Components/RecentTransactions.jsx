import {
  ArrowDownCircle,
  ArrowUpCircle,
  Pencil,
  Trash2,
} from "lucide-react";

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
];

const RecentTransactions = () => {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">
            Recent Transactions
          </h2>
          <p className="text-sm text-gray-500">
            Latest income & expense history
          </p>
        </div>

        <button className="rounded-xl bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700">
          View All
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="border-b text-left text-gray-500">
            <tr>
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
                className="border-b transition hover:bg-slate-50"
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
                    <button className="rounded-lg bg-blue-100 p-2 text-blue-600 transition hover:bg-blue-200">
                      <Pencil size={18} />
                    </button>

                    <button className="rounded-lg bg-red-100 p-2 text-red-600 transition hover:bg-red-200">
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
  );
};

export default RecentTransactions;