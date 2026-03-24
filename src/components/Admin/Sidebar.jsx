import { clearAdminSession } from "../services/adminSession";

const Sidebar = ({ setTab, tab }) => {
  const handleLogout = () => {
    clearAdminSession();
    window.location.href = "/admin/login";
  };

  const getButtonClass = (key, activeTone, inactiveTone) =>
    `w-full text-left px-4 py-3 rounded-lg transition font-medium ${
      tab === key ? activeTone : inactiveTone
    }`;

  return (
    <aside className="w-[250px] min-h-screen bg-[#0f172a] text-white p-6 flex flex-col">
      <div>
        <button
          type="button"
          onClick={() => {
            window.location.href = "/";
          }}
          className="mb-4 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-left text-sm font-medium text-slate-200 transition hover:bg-white/10 hover:text-white"
        >
          Back to Website
        </button>

        <button
          type="button"
          onClick={() => setTab("dashboard")}
          className="mb-8 text-left"
        >
          <h2 className="text-xl font-semibold tracking-wide">Unyfer Admin Panel</h2>
          <p className="mt-1 text-xs text-slate-400">
            Click here for dashboard overview
          </p>
        </button>

        <nav className="flex flex-col gap-3">
          <button
            onClick={() => setTab("dashboard")}
            className={getButtonClass(
              "dashboard",
              "bg-violet-600 text-white shadow-sm",
              "bg-violet-500/15 text-violet-200 hover:bg-violet-500/25 hover:text-white"
            )}
          >
            Dashboard
          </button>

          <button
            onClick={() => setTab("signup")}
            className={getButtonClass(
              "signup",
              "bg-blue-600/90 text-white shadow-sm",
              "bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 hover:text-white"
            )}
          >
            Signup Forms
          </button>

          <button
            onClick={() => setTab("android")}
            className={getButtonClass(
              "android",
              "bg-emerald-600 text-white shadow-sm",
              "bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30 hover:text-white"
            )}
          >
            Android Users
          </button>

          <button
            onClick={() => setTab("ios")}
            className={getButtonClass(
              "ios",
              "bg-fuchsia-600 text-white shadow-sm",
              "bg-fuchsia-500/20 text-fuchsia-300 hover:bg-fuchsia-500/30 hover:text-white"
            )}
          >
            iOS Users
          </button>

          <button
            onClick={() => setTab("contact")}
            className={getButtonClass(
              "contact",
              "bg-cyan-600 text-white shadow-sm",
              "bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30 hover:text-white"
            )}
          >
            Contact Forms
          </button>

          <button
            onClick={() => setTab("zoho")}
            className={getButtonClass(
              "zoho",
              "bg-amber-600 text-white shadow-sm",
              "bg-amber-500/20 text-amber-300 hover:bg-amber-500/30 hover:text-white"
            )}
          >
            Zoho Campaigns
          </button>
        </nav>
      </div>

      <div className="mt-auto pt-6 border-t border-white/10">
        <button
          onClick={handleLogout}
          className="text-sm text-red-400 hover:text-red-500 transition"
        >
          Logout
        </button>

        <div className="mt-3 text-xs text-gray-400">(c) {new Date().getFullYear()} Admin</div>
      </div>
    </aside>
  );
};

export default Sidebar;
