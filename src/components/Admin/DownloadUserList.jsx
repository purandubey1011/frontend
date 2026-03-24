import { useEffect, useMemo, useState } from "react";
import { fetchDownloads } from "../services/adminApi";
import { exportToExcel } from "../utils/exportToExcel";

const DownloadUserList = ({ platform }) => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("");
  const [loading, setLoading] = useState(true);
  const [showTestUsers, setShowTestUsers] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await fetchDownloads();
        setData(res.data.data || []);
      } catch (err) {
        console.error(`Failed to fetch ${platform} users`, err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [platform]);

  const filteredData = useMemo(() => {
    return data
      .filter((item) => item.platform === platform)
      .filter((item) => {
        if (!showTestUsers && item.email?.toLowerCase().includes("test")) {
          return false;
        }
        return true;
      })
      .filter((item) => {
        if (!filter) return true;

        return (
          item.username?.toLowerCase().includes(filter.toLowerCase()) ||
          item.email?.toLowerCase().includes(filter.toLowerCase())
        );
      });
  }, [data, filter, platform, showTestUsers]);

  return (
    <section className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">{platform} Users</h2>
          <p className="text-sm text-gray-500">
            Download form submissions only for {platform} users
          </p>
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => setShowTestUsers((prev) => !prev)}
            className={`px-4 py-2 rounded-lg font-medium border transition ${
              showTestUsers
                ? "bg-red-100 text-red-700 border-red-300"
                : "bg-gray-100 text-gray-700 border-gray-300"
            }`}
          >
            {showTestUsers ? "Hide Test Users" : "Show Test Users"}
          </button>

          <button
            onClick={() => exportToExcel(filteredData, `${platform}Users`)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-medium transition"
          >
            Export Excel
          </button>
        </div>
      </div>

      <div className="mb-4 w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <input
          type="text"
          placeholder="Search by name or email..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-full sm:w-80 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="text-sm text-gray-500 whitespace-nowrap">
          Total Records: {filteredData.length}
        </div>
      </div>

      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-4 py-3 font-medium">Name</th>
              <th className="px-4 py-3 font-medium">Email</th>
              <th className="px-4 py-3 font-medium">Phone</th>
              <th className="px-4 py-3 font-medium">Followers</th>
              <th className="px-4 py-3 font-medium">Creator</th>
              <th className="px-4 py-3 font-medium">Platform</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {loading ? (
              <tr>
                <td colSpan="6" className="text-center py-6 text-gray-500">
                  Loading {platform} users...
                </td>
              </tr>
            ) : filteredData.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center py-6 text-gray-500">
                  No {platform} users found
                </td>
              </tr>
            ) : (
              filteredData.map((item) => (
                <tr key={item._id} className="hover:bg-gray-50 transition">
                  <td className="px-4 py-3 font-medium text-gray-800">{item.username}</td>
                  <td className="px-4 py-3 text-gray-600">{item.email}</td>
                  <td className="px-4 py-3 text-gray-600">{item.phone}</td>
                  <td className="px-4 py-3 text-gray-600">{item.followers}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        item.isCreator === "Yes"
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {item.isCreator}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-gray-600">{item.platform}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default DownloadUserList;
