import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const MainLayout = ({ children, title, subtitle }) => {
  return (
    <div className="min-h-screen bg-slate-100">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="ml-72 p-8">

        {/* Navbar */}
        <Navbar />

        {/* Page Header */}
        <div className="mt-10 mb-8">

          <h1 className="text-4xl font-bold text-slate-800">
            {title}
          </h1>

          {subtitle && (
            <p className="mt-2 text-gray-500">
              {subtitle}
            </p>
          )}

        </div>

        {/* Page Content */}
        {children}

      </main>

    </div>
  );
};

export default MainLayout;