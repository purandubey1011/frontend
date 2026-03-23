import { useEffect, useState } from "react";
import { fetchApplications } from "../services/adminApi";
import { exportToExcel } from "../utils/exportToExcel";

const ApplyList = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("");
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState(""); 
  const [creatorFilter, setCreatorFilter] = useState("");
const [followersRange, setFollowersRange] = useState("");

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

  const filteredData = data
  // 🔹 hide test users
  .filter((item) => {
    if (!showTestUsers && item.email.toLowerCase().includes("test")) {
      return false;
    }
    return true;
  })

  // 🔹 search filter (🔥 MISSING PIECE)
  .filter((item) => {
    if (!filter) return true;

    return (
      item.username.toLowerCase().includes(filter.toLowerCase()) ||
      item.email.toLowerCase().includes(filter.toLowerCase())
    );
  })

  // 🔹 creator filter
  .filter((item) => {
    if (!creatorFilter) return true;
    return item.isCreator === creatorFilter;
  })

  // 🔹 followers range filter
  .filter((item) => {
    const f = item.followers;
    if (!followersRange) return true;

    if (followersRange === "0-1k") return f <= 1000;
    if (followersRange === "1k-10k") return f > 1000 && f <= 10000;
    if (followersRange === "10k-100k") return f > 10000 && f <= 100000;
    if (followersRange === "100k+") return f > 100000;

    return true;
  })

  // 🔹 followers sort
  .sort((a, b) => {
    if (sortOrder === "lowToHigh") return a.followers - b.followers;
    if (sortOrder === "highToLow") return b.followers - a.followers;
    return 0;
  });



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
    <select
  value={creatorFilter}
  onChange={(e) => setCreatorFilter(e.target.value)}
  className="px-3 py-2 border rounded-lg"
>
  <option value="">All Users</option>
  <option value="Yes">Creators Only</option>
  <option value="No">Non-Creators</option>
</select>

<select
  value={followersRange}
  onChange={(e) => setFollowersRange(e.target.value)}
  className="px-3 py-2 border rounded-lg"
>
  <option value="">All Followers</option>
  <option value="0-1k">0 – 1K</option>
  <option value="1k-10k">1K – 10K</option>
  <option value="10k-100k">10K – 100K</option>
  <option value="100k+">100K+</option>
</select>


    {/* Count */}
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
