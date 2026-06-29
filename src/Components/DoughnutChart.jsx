import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Doughnut } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

const DoughnutChart = () => {
  const data = {
    labels: [
      "Food",
      "Travel",
      "Shopping",
      "Bills",
      "Entertainment",
    ],

    datasets: [
      {
        data: [12000, 7000, 9000, 5000, 3000],

        backgroundColor: [
          "#3B82F6",
          "#10B981",
          "#F59E0B",
          "#EF4444",
          "#8B5CF6",
        ],

        borderWidth: 0,

        hoverOffset: 12,
      },
    ],
  };

  const options = {
    responsive: true,

    maintainAspectRatio: false,

    cutout: "70%",

    plugins: {
      legend: {
        position: "bottom",

        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          padding: 20,
          font: {
            size: 14,
          },
        },
      },
    },
  };

  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm hover:shadow-lg transition-all duration-300">

      <div className="flex items-center justify-between mb-6">

        <h2 className="text-xl font-bold text-slate-700">

          Expense Categories

        </h2>

        <span className="text-sm text-gray-400">

          This Month

        </span>

      </div>

      <div className="h-[320px]">

        <Doughnut
          data={data}
          options={options}
        />

      </div>

    </div>
  );
};

export default DoughnutChart;