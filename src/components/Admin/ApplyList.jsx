import { useEffect, useState } from "react";
import { fetchApplications } from "../services/adminApi";
import { exportToExcel } from "../utils/exportToExcel";

const ApplyList = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("");
  const [loading, setLoading] = useState(true);

  // ✅ NEW: toggle test users
  const [showTestUsers, setShowTestUsers] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await fetchApplications();
        setData(res.data.data);
      } catch (err) {
        console.error("Failed to fetch applications", err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  // ✅ filter logic (search + test email removal)
  const filteredData = data
    .filter((item) => {
      // hide test users if toggle OFF
      if (!showTestUsers && item.email.toLowerCase().includes("test")) {
        return false;
      }
      return true;
    })
    .filter(
      (item) =>
        item.username.toLowerCase().includes(filter.toLowerCase()) ||
        item.email.toLowerCase().includes(filter.toLowerCase())
    );

  return (
    <section className="bg-white rounded-xl shadow-sm p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">
            Applications
          </h2>
          <p className="text-sm text-gray-500">
            List of all creator access applications
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
            onClick={() => exportToExcel(filteredData, "ApplyForms")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-medium transition"
          >
            Export Excel
          </button>
        </div>
      </div>

      {/* Search */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by username or email..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-full sm:w-80 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-4 py-3 font-medium">Name</th>
              <th className="px-4 py-3 font-medium">Email</th>
              <th className="px-4 py-3 font-medium">Phone</th>
              <th className="px-4 py-3 font-medium">Followers</th>
              <th className="px-4 py-3 font-medium">Creator</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {loading ? (
              <tr>
                <td colSpan="5" className="text-center py-6 text-gray-500">
                  Loading applications...
                </td>
              </tr>
            ) : filteredData.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center py-6 text-gray-500">
                  No applications found
                </td>
              </tr>
            ) : (
              filteredData.map((item) => (
                <tr
                  key={item._id}
                  className="hover:bg-gray-50 transition"
                >
                  <td className="px-4 py-3 font-medium text-gray-800">
                    {item.username}
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    {item.email}
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    {item.phone}
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    {item.followers}
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium
                        ${
                          item.isCreator === "Yes"
                            ? "bg-green-100 text-green-700"
                            : "bg-gray-100 text-gray-600"
                        }`}
                    >
                      {item.isCreator}
                    </span>
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

export default ApplyList;
