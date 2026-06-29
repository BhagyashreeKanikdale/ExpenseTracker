import { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import {
  User,
  Mail,
  Phone,
  Lock,
  Camera,
  Save,
} from "lucide-react";

const Profile = () => {
  const [profile, setProfile] = useState({
    fullName: "Bhagyashree Kanikdale",
    email: "bhagyashree@example.com",
    phone: "9876543210",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Profile Updated Successfully!");
  };

  return (
    <MainLayout
      title="My Profile 👤"
      subtitle="Manage your account information."
    >
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">

        {/* Left Profile Card */}

        <div className="rounded-3xl bg-white p-8 shadow-lg">

          <div className="flex flex-col items-center">

            <div className="relative">

              <img
                src="https://ui-avatars.com/api/?name=Bhagyashree&background=2563eb&color=fff&size=200"
                alt="Profile"
                className="h-36 w-36 rounded-full border-4 border-blue-500 object-cover"
              />

              <button
                className="absolute bottom-2 right-2 rounded-full bg-blue-600 p-3 text-white hover:bg-blue-700"
              >
                <Camera size={18} />
              </button>

            </div>

            <h2 className="mt-6 text-2xl font-bold">
              {profile.fullName}
            </h2>

            <p className="text-gray-500">
              Software Developer
            </p>

            <div className="mt-8 w-full space-y-4">

              <div className="flex items-center gap-3 rounded-xl bg-slate-100 p-4">

                <Mail className="text-blue-600" />

                <span>{profile.email}</span>

              </div>

              <div className="flex items-center gap-3 rounded-xl bg-slate-100 p-4">

                <Phone className="text-green-600" />

                <span>{profile.phone}</span>

              </div>

            </div>

          </div>

        </div>

        {/* Right Form */}

        <div className="lg:col-span-2 rounded-3xl bg-white p-8 shadow-lg">

          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >

            <div>

              <label className="mb-2 block font-semibold">
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
                  value={profile.fullName}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-300 py-3 pl-12 pr-4 outline-none focus:border-blue-500"
                />

              </div>

            </div>

            <div>

              <label className="mb-2 block font-semibold">
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
                  value={profile.email}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-300 py-3 pl-12 pr-4 outline-none focus:border-blue-500"
                />

              </div>

            </div>

            <div>

              <label className="mb-2 block font-semibold">
                Mobile Number
              </label>

              <div className="relative">

                <Phone
                  className="absolute left-4 top-3 text-gray-400"
                  size={20}
                />

                <input
                  type="text"
                  name="phone"
                  value={profile.phone}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-300 py-3 pl-12 pr-4 outline-none focus:border-blue-500"
                />

              </div>

            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

              <div>

                <label className="mb-2 block font-semibold">
                  New Password
                </label>

                <div className="relative">

                  <Lock
                    className="absolute left-4 top-3 text-gray-400"
                    size={20}
                  />

                  <input
                    type="password"
                    name="password"
                    value={profile.password}
                    onChange={handleChange}
                    placeholder="********"
                    className="w-full rounded-xl border border-gray-300 py-3 pl-12 pr-4 outline-none focus:border-blue-500"
                  />

                </div>

              </div>

              <div>

                <label className="mb-2 block font-semibold">
                  Confirm Password
                </label>

                <div className="relative">

                  <Lock
                    className="absolute left-4 top-3 text-gray-400"
                    size={20}
                  />

                  <input
                    type="password"
                    name="confirmPassword"
                    value={profile.confirmPassword}
                    onChange={handleChange}
                    placeholder="********"
                    className="w-full rounded-xl border border-gray-300 py-3 pl-12 pr-4 outline-none focus:border-blue-500"
                  />

                </div>

              </div>

            </div>

            <button
              type="submit"
              className="flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              <Save size={20} />

              Save Changes
            </button>

          </form>

        </div>

      </div>
    </MainLayout>
  );
};

export default Profile;