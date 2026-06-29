import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  User,
  Mail,
  Phone,
  Lock,
  Eye,
  EyeOff,
  Wallet,
} from "lucide-react";

const Register = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [user, setUser] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (user.password !== user.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    alert("Registration Successful!");

    navigate("/login");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 p-6">

      <div className="w-full max-w-lg rounded-3xl bg-white p-8 shadow-2xl">

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
          Create Account
        </h1>

        <p className="mt-2 text-center text-gray-500">
          Join Expense Tracker today.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-5"
        >

          {/* Full Name */}

          <div>

            <label className="mb-2 block font-medium">
              Full Name
            </label>

            <div className="relative">

              <User
                className="absolute left-4 top-3 text-gray-400"
                size={20}
              />

              <input
                type="text"
                name="fullName"
                value={user.fullName}
                onChange={handleChange}
                placeholder="Enter full name"
                required
                className="w-full rounded-xl border border-gray-300 py-3 pl-12 pr-4 outline-none focus:border-blue-500"
              />

            </div>

          </div>

          {/* Email */}

          <div>

            <label className="mb-2 block font-medium">
              Email
            </label>

            <div className="relative">

              <Mail
                className="absolute left-4 top-3 text-gray-400"
                size={20}
              />

              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                placeholder="Enter email"
                required
                className="w-full rounded-xl border border-gray-300 py-3 pl-12 pr-4 outline-none focus:border-blue-500"
              />

            </div>

          </div>

          {/* Mobile */}

          <div>

            <label className="mb-2 block font-medium">
              Mobile Number
            </label>

            <div className="relative">

              <Phone
                className="absolute left-4 top-3 text-gray-400"
                size={20}
              />

              <input
                type="tel"
                name="phone"
                value={user.phone}
                onChange={handleChange}
                placeholder="Enter mobile number"
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
                className="absolute left-4 top-3 text-gray-400"
                size={20}
              />

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={user.password}
                onChange={handleChange}
                placeholder="Create password"
                required
                className="w-full rounded-xl border border-gray-300 py-3 pl-12 pr-12 outline-none focus:border-blue-500"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-3 text-gray-500"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>

            </div>

          </div>

          {/* Confirm Password */}

          <div>

            <label className="mb-2 block font-medium">
              Confirm Password
            </label>

            <div className="relative">

              <Lock
                className="absolute left-4 top-3 text-gray-400"
                size={20}
              />

              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={user.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm password"
                required
                className="w-full rounded-xl border border-gray-300 py-3 pl-12 pr-12 outline-none focus:border-blue-500"
              />

              <button
                type="button"
                onClick={() =>
                  setShowConfirmPassword(!showConfirmPassword)
                }
                className="absolute right-4 top-3 text-gray-500"
              >
                {showConfirmPassword ? (
                  <EyeOff size={20} />
                ) : (
                  <Eye size={20} />
                )}
              </button>

            </div>

          </div>

          {/* Terms */}

          <div className="flex items-center gap-2">

            <input
              type="checkbox"
              required
            />

            <span className="text-sm text-gray-600">
              I agree to the Terms & Conditions
            </span>

          </div>

          {/* Register */}

          <button
            type="submit"
            className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Create Account
          </button>

        </form>

        <p className="mt-8 text-center text-gray-600">

          Already have an account?

          <Link
            to="/login"
            className="ml-2 font-semibold text-blue-600 hover:underline"
          >
            Login
          </Link>

        </p>

      </div>

    </div>
  );
};

export default Register;