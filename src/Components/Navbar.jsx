import { Link } from "react-router-dom";
import {
  Bell,
  Search,
  Moon,
  User,
  Settings,
} from "lucide-react";

const Navbar = () => {
  return (
    <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

      {/* Search Bar */}

      <div className="relative w-full max-w-lg">

        <Search
          size={20}
          className="absolute left-4 top-3.5 text-gray-400"
        />

        <input
          type="text"
          placeholder="Search expenses, income..."
          className="w-full rounded-2xl border border-gray-300 bg-white py-3 pl-12 pr-4 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        />

      </div>

      {/* Right Section */}

      <div className="flex items-center justify-end gap-4">

        {/* Dark Mode Button */}

        <button className="rounded-xl bg-white p-3 shadow transition hover:bg-slate-100">
          <Moon size={20} />
        </button>

        {/* Notifications */}

        <button className="relative rounded-xl bg-white p-3 shadow transition hover:bg-slate-100">

          <Bell size={20} />

          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500"></span>

        </button>

        {/* Settings */}

        <button className="rounded-xl bg-white p-3 shadow transition hover:bg-slate-100">
          <Settings size={20} />
        </button>

        {/* Profile */}

        <Link
          to="/profile"
          className="flex items-center gap-3 rounded-2xl bg-white px-4 py-2 shadow transition hover:bg-slate-100"
        >

          <img
            src="https://ui-avatars.com/api/?name=Bhagyashree&background=2563eb&color=fff"
            alt="User"
            className="h-10 w-10 rounded-full"
          />

          <div className="hidden md:block">

            <h3 className="text-sm font-semibold text-slate-700">
              Bhagyashree
            </h3>

            <p className="text-xs text-gray-500">
              Software Engineer
            </p>

          </div>

          <User size={18} className="text-gray-500" />

        </Link>

      </div>

    </header>
  );
};

export default Navbar;