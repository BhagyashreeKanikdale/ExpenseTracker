const StatCard = ({
  title,
  value,
  icon,
  color,
  bgColor,
  change,
}) => {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">

      <div className="flex items-center justify-between">

        <div>

          <p className="text-gray-500 text-sm">

            {title}

          </p>

          <h2 className="mt-3 text-3xl font-bold text-gray-800">

            {value}

          </h2>

          <p className="mt-3 text-sm text-green-500 font-semibold">

            {change}

          </p>

        </div>

        <div
          className={`w-16 h-16 rounded-2xl flex items-center justify-center ${bgColor}`}
        >
          <div className={color}>

            {icon}

          </div>
        </div>

      </div>

    </div>
  );
};

export default StatCard;