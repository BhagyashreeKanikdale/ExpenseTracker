import { useState } from "react";
import { Save, IndianRupee } from "lucide-react";
import MainLayout from "../layouts/MainLayout";

const AddExpense = () => {
  const [expense, setExpense] = useState({
    title: "",
    amount: "",
    category: "",
    paymentMethod: "",
    date: "",
    description: "",
  });

  const handleChange = (e) => {
    setExpense({
      ...expense,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(expense);

    alert("Expense Added Successfully!");
  };

  return (
    <MainLayout
      title="Add Expense 💸"
      subtitle="Track every expense and stay in control of your budget."
    >
      <div className="max-w-4xl rounded-3xl bg-white p-8 shadow-lg">

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          {/* Expense Title */}

          <div>

            <label className="mb-2 block font-semibold text-gray-700">
              Expense Title
            </label>

            <input
              type="text"
              name="title"
              value={expense.title}
              onChange={handleChange}
              placeholder="Enter expense title"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500"
              required
            />

          </div>

          {/* Amount */}

          <div>

            <label className="mb-2 block font-semibold text-gray-700">
              Amount
            </label>

            <div className="relative">

              <IndianRupee
                className="absolute left-4 top-3 text-gray-500"
                size={20}
              />

              <input
                type="number"
                name="amount"
                value={expense.amount}
                onChange={handleChange}
                placeholder="0.00"
                className="w-full rounded-xl border border-gray-300 py-3 pl-12 pr-4 outline-none transition focus:border-blue-500"
                required
              />

            </div>

          </div>

          {/* Category & Payment */}

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

            <div>

              <label className="mb-2 block font-semibold text-gray-700">
                Category
              </label>

              <select
                name="category"
                value={expense.category}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                required
              >

                <option value="">Select Category</option>

                <option>Food</option>
                <option>Travel</option>
                <option>Shopping</option>
                <option>Bills</option>
                <option>Health</option>
                <option>Education</option>
                <option>Entertainment</option>

              </select>

            </div>

            <div>

              <label className="mb-2 block font-semibold text-gray-700">
                Payment Method
              </label>

              <select
                name="paymentMethod"
                value={expense.paymentMethod}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                required
              >

                <option value="">Select Method</option>

                <option>Cash</option>
                <option>UPI</option>
                <option>Credit Card</option>
                <option>Debit Card</option>
                <option>Net Banking</option>

              </select>

            </div>

          </div>

          {/* Date */}

          <div>

            <label className="mb-2 block font-semibold text-gray-700">
              Expense Date
            </label>

            <input
              type="date"
              name="date"
              value={expense.date}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
              required
            />

          </div>

          {/* Description */}

          <div>

            <label className="mb-2 block font-semibold text-gray-700">
              Description
            </label>

            <textarea
              rows="4"
              name="description"
              value={expense.description}
              onChange={handleChange}
              placeholder="Write something..."
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
            />

          </div>

          {/* Submit */}

          <button
            type="submit"
            className="flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700"
          >

            <Save size={20} />

            Save Expense

          </button>

        </form>

      </div>
    </MainLayout>
  );
};

export default AddExpense;