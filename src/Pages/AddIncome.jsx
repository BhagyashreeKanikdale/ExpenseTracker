import { useState } from "react";
import { Save, IndianRupee } from "lucide-react";
import MainLayout from "../layouts/MainLayout";

const AddIncome = () => {
  const [income, setIncome] = useState({
    source: "",
    amount: "",
    category: "",
    date: "",
    description: "",
  });

  const handleChange = (e) => {
    setIncome({
      ...income,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(income);

    alert("Income Added Successfully!");
  };

  return (
    <MainLayout
      title="Add Income 💰"
      subtitle="Record all your income sources."
    >
      <div className="max-w-4xl rounded-3xl bg-white p-8 shadow-lg">

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          {/* Income Source */}

          <div>

            <label className="mb-2 block font-semibold text-gray-700">
              Income Source
            </label>

            <input
              type="text"
              name="source"
              value={income.source}
              onChange={handleChange}
              placeholder="Salary, Freelance, Business..."
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-green-500"
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
                value={income.amount}
                onChange={handleChange}
                placeholder="0.00"
                className="w-full rounded-xl border border-gray-300 py-3 pl-12 pr-4 outline-none focus:border-green-500"
                required
              />

            </div>

          </div>

          {/* Category */}

          <div>

            <label className="mb-2 block font-semibold text-gray-700">
              Category
            </label>

            <select
              name="category"
              value={income.category}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-green-500"
              required
            >
              <option value="">Select Category</option>
              <option>Salary</option>
              <option>Freelance</option>
              <option>Business</option>
              <option>Investment</option>
              <option>Rental Income</option>
              <option>Bonus</option>
              <option>Other</option>
            </select>

          </div>

          {/* Date */}

          <div>

            <label className="mb-2 block font-semibold text-gray-700">
              Income Date
            </label>

            <input
              type="date"
              name="date"
              value={income.date}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-green-500"
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
              value={income.description}
              onChange={handleChange}
              placeholder="Additional details..."
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-green-500"
            />

          </div>

          {/* Submit */}

          <button
            type="submit"
            className="flex items-center gap-2 rounded-xl bg-green-600 px-8 py-3 font-semibold text-white transition hover:bg-green-700"
          >
            <Save size={20} />
            Save Income
          </button>

        </form>

      </div>
    </MainLayout>
  );
};

export default AddIncome;