import { Link } from "react-router-dom";
import { Home, AlertTriangle } from "lucide-react";

const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 px-6">
      <div className="w-full max-w-lg rounded-3xl bg-white p-10 text-center shadow-2xl">

        {/* Icon */}
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-red-100">
          <AlertTriangle size={50} className="text-red-500" />
        </div>

        {/* 404 */}
        <h1 className="mt-8 text-7xl font-extrabold text-slate-800">
          404
        </h1>

        <h2 className="mt-3 text-3xl font-bold text-slate-700">
          Page Not Found
        </h2>

        <p className="mt-4 text-gray-500">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>

        {/* Button */}
        <Link
          to="/dashboard"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          <Home size={20} />
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default NotFound;