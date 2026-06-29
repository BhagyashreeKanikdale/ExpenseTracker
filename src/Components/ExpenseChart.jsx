import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

const ExpenseChart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],

    datasets: [
      {
        label: "Expenses",

        data: [15000, 12000, 18000, 14000, 21000, 17000],

        backgroundColor: [
          "#3B82F6",
          "#3B82F6",
          "#3B82F6",
          "#3B82F6",
          "#3B82F6",
          "#3B82F6",
        ],

        borderRadius: 10,
      },
    ],
  };

  const options = {
    responsive: true,

    plugins: {
      legend: {
        display: false,
      },
    },

    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="bg-white rounded-3xl shadow-sm p-6">

      <div className="flex justify-between items-center mb-6">

        <h2 className="text-xl font-bold">

          Monthly Expenses

        </h2>

        <span className="text-gray-500">

          2026

        </span>

      </div>

      <Bar data={data} options={options} />

    </div>
  );
};

export default ExpenseChart;