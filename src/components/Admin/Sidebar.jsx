const Sidebar = ({ setTab }) => {
  const handleLogout = () => {
    localStorage.removeItem("isAdminLoggedIn");
    window.location.href = "/admin/login";
  };

  return (
    <aside className="w-[240px] min-h-screen bg-[#0f172a] text-white p-6 flex flex-col">
      <div>
        <h2 className="text-xl font-semibold tracking-wide mb-8">Unyfer Admin Panel</h2>

        <nav className="flex flex-col gap-3">
          <button
            onClick={() => setTab("apply")}
            className="w-full text-left px-4 py-3 rounded-lg bg-blue-600/90 hover:bg-blue-600 transition font-medium shadow-sm"
          >
            Applications
          </button>

          <button
            onClick={() => setTab("contact")}
            className="w-full text-left px-4 py-3 rounded-lg bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 hover:text-white transition font-medium"
          >
            Contacts
          </button>

          <button
            onClick={() => setTab("zoho")}
            className="w-full text-left px-4 py-3 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 hover:text-white transition font-medium"
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
