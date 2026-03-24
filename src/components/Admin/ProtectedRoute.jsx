import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { fetchAdminSession } from "../services/adminApi";
import { clearAdminSession, hasActiveAdminSession } from "../services/adminSession";

const ProtectedRoute = ({ children }) => {
  const [status, setStatus] = useState("checking");

  useEffect(() => {
    const verifySession = async () => {
      if (!hasActiveAdminSession()) {
        setStatus("unauthorized");
        return;
      }

      try {
        await fetchAdminSession();
        setStatus("authorized");
      } catch (error) {
        clearAdminSession();
        setStatus("unauthorized");
      }
    };

    verifySession();
  }, []);

  if (status === "checking") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f8fafc]">
        <div className="rounded-2xl border border-purple-100 bg-white px-6 py-5 text-sm font-medium text-gray-600 shadow-sm">
          Verifying admin session...
        </div>
      </div>
    );
  }

  if (status === "unauthorized") {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
