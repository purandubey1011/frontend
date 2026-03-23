import { useEffect, useState } from "react";
import { fetchContacts } from "../services/adminApi";
import { exportToExcel } from "../utils/exportToExcel";

const ContactList = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("");
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState("");

  // ✅ NEW: toggle test users
  const [showTestUsers, setShowTestUsers] = useState(false);

  useEffect(() => {
    const loadContacts = async () => {
      try {
        const res = await fetchContacts();
        setData(res.data.data);
      } catch (error) {
        console.error("Failed to fetch contacts", error);
      } finally {
        setLoading(false);
      }
    };

    loadContacts();
  }, []);

  // ✅ filter logic (search + test email filter)
 const filteredData = data
  // 🔹 hide test users
  .filter((item) => {
    if (!showTestUsers && item.email?.toLowerCase().includes("test")) {
      return false;
    }
    return true;
  })

  // 🔹 SAFE search filter ✅
  .filter((item) => {
    if (!filter) return true;

    const name = item.name?.toLowerCase() || "";
    const email = item.email?.toLowerCase() || "";

    return (
      name.includes(filter.toLowerCase()) ||
      email.includes(filter.toLowerCase())
    );
  })

  // 🔹 sort
  .sort((a, b) => {
    if (sortOrder === "latest") {
      return new Date(b.createdAt) - new Date(a.createdAt);
    }
    if (sortOrder === "oldest") {
      return new Date(a.createdAt) - new Date(b.createdAt);
    }
    if (sortOrder === "az") {
      return (a.name || "").localeCompare(b.name || "");
    }
    if (sortOrder === "za") {
      return (b.name || "").localeCompare(a.name || "");
    }
    return 0;
  });



  return (
    <section className="bg-white rounded-xl shadow-sm p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">
            Contact Messages
          </h2>
          <p className="text-sm text-gray-500">
            Messages submitted through contact form
          </p>
        </div>

        <div className="flex gap-3">
          {/* ✅ Toggle Test Users */}
          <button
            onClick={() => setShowTestUsers((prev) => !prev)}
            className={`px-4 py-2 rounded-lg font-medium border transition
              ${
                showTestUsers
                  ? "bg-red-100 text-red-700 border-red-300"
                  : "bg-gray-100 text-gray-700 border-gray-300"
              }`}
          >
            {showTestUsers ? "Hide Test Users" : "Show Test Users"}
          </button>

          {/* Export */}
          <button
            onClick={() => exportToExcel(filteredData, "Contacts")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-medium transition"
          >
            Export Excel
          </button>
        </div>
      </div>

      {/* Search */}
      <div className="mb-4 w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
  {/* Search */}
  <input
    type="text"
    placeholder="Search by name or email..."
    value={filter}
    onChange={(e) => setFilter(e.target.value)}
    className="w-full sm:w-80 px-4 py-2 border border-gray-300 rounded-lg 
    focus:outline-none focus:ring-2 focus:ring-blue-500"
  />

  <div className="flex items-center gap-4">
    {/* 🔽 Sort */}
    <select
      value={sortOrder}
      onChange={(e) => setSortOrder(e.target.value)}
      className="px-3 py-2 border border-gray-300 rounded-lg text-sm
      focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <option value="">Sort</option>
      <option value="latest">Latest → Oldest</option>
      <option value="oldest">Oldest → Latest</option>
      <option value="az">Name A → Z</option>
      <option value="za">Name Z → A</option>
    </select>

    <div className="text-sm text-gray-500 whitespace-nowrap">
      Total Records: {filteredData.length}
    </div>
  </div>
</div>


      {/* Table */}
      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-4 py-3 font-medium">Name</th>
              <th className="px-4 py-3 font-medium">Email</th>
              <th className="px-4 py-3 font-medium">Mobile</th>
              <th className="px-4 py-3 font-medium">Subject</th>
              <th className="px-4 py-3 font-medium">Message</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {loading ? (
              <tr>
                <td colSpan="5" className="text-center py-6 text-gray-500">
                  Loading messages...
                </td>
              </tr>
            ) : filteredData.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center py-6 text-gray-500">
                  No messages found
                </td>
              </tr>
            ) : (
              filteredData.map((item) => (
                <tr
                  key={item._id}
                  className="hover:bg-gray-50 transition"
                >
                  <td className="px-4 py-3 font-medium text-gray-800">
                    {item.name}
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    {item.email}
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    {item.mobile || "-"}
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    {item.subject || "-"}
                  </td>
                  <td className="px-4 py-3 text-gray-600 max-w-xs truncate">
                    {item.message}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="mt-4 text-sm text-gray-500">
        Total Records: {filteredData.length}
      </div>
    </section>
  );
};

export default ContactList;
