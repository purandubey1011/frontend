import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginAdmin, fetchAdminSession } from "../services/adminApi";
import {
  clearAdminSession,
  hasActiveAdminSession,
  storeAdminSession,
} from "../services/adminSession";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const checkExistingSession = async () => {
      if (!hasActiveAdminSession()) return;

      try {
        await fetchAdminSession();
        navigate("/admin/dashboard", { replace: true });
      } catch (error) {
        clearAdminSession();
      }
    };

    checkExistingSession();
  }, [navigate]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      toast.error("Email and password are required.");
      return;
    }

    setLoading(true);

    try {
      const { data } = await loginAdmin(formData);
      storeAdminSession({
        token: data.token,
        admin: data.admin,
        expiresInHours: data.expiresInHours,
      });

      toast.success(data.message || "Admin login successful.");
      navigate("/admin/dashboard", { replace: true });
    } catch (error) {
      clearAdminSession();
      toast.error(error.response?.data?.message || "Invalid admin credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,#faf5ff_0%,#eef2ff_45%,#ffffff_100%)] px-4 py-10">
      <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-6xl grid-cols-1 overflow-hidden rounded-[32px] border border-purple-100 bg-white shadow-[0_30px_90px_rgba(91,33,182,0.12)] lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative overflow-hidden bg-[#140f24] px-8 py-10 text-white sm:px-12 sm:py-14">
          <div className="absolute -left-10 top-12 h-40 w-40 rounded-full bg-purple-500/25 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-fuchsia-400/15 blur-3xl"></div>

          <div className="relative z-10 flex h-full flex-col justify-between">
            <div>
              <p className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-purple-200">
                Unyfer Admin
              </p>
              <h1 className="mt-6 max-w-md text-4xl font-bold leading-tight sm:text-5xl">
                Secure access for the Unyfer control room.
              </h1>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-white/75 sm:text-base">
                Manage signup forms, Android and iOS downloads, contact requests, and
                campaign operations from one protected admin space.
              </p>
            </div>

            <div className="relative z-10 mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.16em] text-purple-200">
                  Session
                </p>
                <p className="mt-2 text-lg font-semibold">24 Hours</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.16em] text-purple-200">
                  Access
                </p>
                <p className="mt-2 text-lg font-semibold">Token Protected</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.16em] text-purple-200">
                  Logout
                </p>
                <p className="mt-2 text-lg font-semibold">Manual Control</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center px-6 py-10 sm:px-10 sm:py-14">
          <div className="w-full max-w-md">
            <div className="mb-8">
              <img
                className="h-16"
                src="https://ik.imagekit.io/b9tt0xvd7/unfyer/Untitled%20design%20(20).png?updatedAt=1755160725166"
                alt="Unyfer"
              />
              <h2 className="mt-6 text-3xl font-bold text-gray-900">Admin Login</h2>
              <p className="mt-2 text-sm text-gray-500">
                Sign in with your admin credentials to continue.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Admin Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="admin@unyfer.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 outline-none transition focus:border-purple-400 focus:bg-white focus:ring-4 focus:ring-purple-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 outline-none transition focus:border-purple-400 focus:bg-white focus:ring-4 focus:ring-purple-100"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-2xl bg-gradient-to-r from-purple-600 to-fuchsia-600 px-5 py-3 text-base font-semibold text-white shadow-lg shadow-purple-200 transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? "Signing In..." : "Access Admin Dashboard"}
              </button>
            </form>

            <button
              type="button"
              onClick={() => navigate("/", { replace: true })}
              className="mt-5 text-sm font-medium text-purple-700 transition hover:text-purple-900"
            >
              Back to Website
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
