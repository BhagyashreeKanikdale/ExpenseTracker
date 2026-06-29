import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  Wallet,
} from "lucide-react";

const Login = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Temporary Authentication
    localStorage.setItem("isLoggedIn", "true");

    alert("Login Successful!");

    navigate("/dashboard");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 p-6">

      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl">

        {/* Logo */}

        <div className="flex justify-center">

          <div className="rounded-full bg-blue-100 p-4">

            <Wallet
              size={45}
              className="text-blue-600"
            />

          </div>

        </div>

        <h1 className="mt-6 text-center text-3xl font-bold text-slate-800">
          Welcome Back
        </h1>

        <p className="mt-2 text-center text-gray-500">
          Login to manage your expenses.
        </p>

        {/* Form */}

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-5"
        >

          {/* Email */}

          <div>

            <label className="mb-2 block font-medium">
              Email
            </label>

            <div className="relative">

              <Mail
                size={20}
                className="absolute left-4 top-3 text-gray-400"
              />

              <input
                type="email"
                name="email"
                value={loginData.email}
                onChange={handleChange}
                placeholder="Enter email"
                required
                className="w-full rounded-xl border border-gray-300 py-3 pl-12 pr-4 outline-none focus:border-blue-500"
              />

            </div>

          </div>

          {/* Password */}

          <div>

            <label className="mb-2 block font-medium">
              Password
            </label>

            <div className="relative">

              <Lock
                size={20}
                className="absolute left-4 top-3 text-gray-400"
              />

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={loginData.password}
                onChange={handleChange}
                placeholder="Enter password"
                required
                className="w-full rounded-xl border border-gray-300 py-3 pl-12 pr-12 outline-none focus:border-blue-500"
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
                className="absolute right-4 top-3 text-gray-500"
              >
                {showPassword ? (
                  <EyeOff size={20} />
                ) : (
                  <Eye size={20} />
                )}
              </button>

            </div>

          </div>

          {/* Remember Me */}

          <div className="flex items-center justify-between">

            <label className="flex items-center gap-2">

              <input type="checkbox" />

              <span className="text-sm text-gray-600">
                Remember me
              </span>

            </label>

            <button
              type="button"
              className="text-sm font-medium text-blue-600 hover:underline"
            >
              Forgot Password?
            </button>

          </div>

          {/* Login */}

          <button
            type="submit"
            className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Login
          </button>

        </form>

        <p className="mt-8 text-center text-gray-600">

          Don't have an account?

          <Link
            to="/register"
            className="ml-2 font-semibold text-blue-600 hover:underline"
          >
            Register
          </Link>

        </p>

      </div>

    </div>
  );
};

export default Login;