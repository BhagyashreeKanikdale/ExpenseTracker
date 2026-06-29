import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Receipt,
  Wallet,
  History,
  BarChart3,
  User,
  LogOut,
} from "lucide-react";

const menuItems = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: <LayoutDashboard size={20} />,
  },
  {
    name: "Add Expense",
    path: "/add-expense",
    icon: <Receipt size={20} />,
  },
  {
    name: "Add Income",
    path: "/add-income",
    icon: <Wallet size={20} />,
  },
  {
    name: "History",
    path: "/history",
    icon: <History size={20} />,
  },
  {
    name: "Reports",
    path: "/reports",
    icon: <BarChart3 size={20} />,
  },
  {
    name: "Profile",
    path: "/profile",
    icon: <User size={20} />,
  },
];

const Sidebar = () => {
  return (
    <aside className="fixed left-0 top-0 flex h-screen w-72 flex-col bg-slate-900 text-white shadow-2xl">

      {/* Logo */}

      <div className="border-b border-slate-700 p-8">

        <h1 className="text-3xl font-bold text-blue-400">
          Expense Tracker
        </h1>

        <p className="mt-2 text-sm text-slate-400">
          Manage your finances
        </p>

      </div>

      {/* Menu */}

      <nav className="mt-8 flex-1 px-4">

        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `mb-3 flex items-center gap-4 rounded-xl px-5 py-4 text-lg font-medium transition-all duration-300 ${
                isActive
                  ? "bg-blue-600 text-white shadow-lg"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`
            }
          >
            {item.icon}

            {item.name}
          </NavLink>
        ))}

      </nav>

      {/* Logout */}

      <div className="border-t border-slate-700 p-4">

        <NavLink
          to="/login"
          className="flex items-center gap-4 rounded-xl px-5 py-4 text-lg font-medium text-red-400 transition hover:bg-red-600 hover:text-white"
        >
          <LogOut size={20} />

          Logout
        </NavLink>

      </div>

    </aside>
  );
};

export default Sidebar;