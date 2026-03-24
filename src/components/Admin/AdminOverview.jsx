import { useEffect, useState } from "react";
import { fetchApplications, fetchContacts, fetchDownloads } from "../services/adminApi";

const StatCard = ({ label, value, helper, tone = "purple" }) => {
  const toneStyles = {
    purple: "bg-purple-50 border-purple-100 text-purple-700",
    blue: "bg-blue-50 border-blue-100 text-blue-700",
    emerald: "bg-emerald-50 border-emerald-100 text-emerald-700",
    fuchsia: "bg-fuchsia-50 border-fuchsia-100 text-fuchsia-700",
  };

  return (
    <div className={`rounded-2xl border p-5 ${toneStyles[tone]}`}>
      <p className="text-sm font-medium">{label}</p>
      <p className="mt-3 text-3xl font-bold text-gray-900">{value}</p>
      <p className="mt-2 text-sm text-gray-500">{helper}</p>
    </div>
  );
};

const AdminOverview = () => {
  const [applications, setApplications] = useState([]);
  const [downloads, setDownloads] = useState([]);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const loadDashboard = async () => {
      try {
        const [applicationsRes, downloadsRes, contactsRes] = await Promise.all([
          fetchApplications(),
          fetchDownloads(),
          fetchContacts(),
        ]);

        setApplications(applicationsRes.data.data || []);
        setDownloads(downloadsRes.data.data || []);
        setContacts(contactsRes.data.data || []);
      } catch (error) {
        console.error("Failed to load dashboard data", error);
      }
    };

    loadDashboard();
  }, []);

  const androidUsers = downloads.filter((item) => item.platform === "Android");
  const iosUsers = downloads.filter((item) => item.platform === "iOS");

  return (
    <div className="space-y-6">
      <section className="rounded-2xl bg-gradient-to-r from-slate-900 via-purple-900 to-fuchsia-700 p-6 text-white shadow-lg">
        <p className="text-sm uppercase tracking-[0.2em] text-purple-200">Dashboard</p>
        <h1 className="mt-2 text-3xl font-bold">All Admin Data Overview</h1>
        <p className="mt-3 max-w-2xl text-sm text-purple-100 sm:text-base">
          Track old signup forms, new Android and iOS download users, and contact form
          submissions from one place.
        </p>
      </section>

      <section className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          label="Signup Forms"
          value={applications.length}
          helper="Old signup form submissions."
          tone="purple"
        />
        <StatCard
          label="Android Users"
          value={androidUsers.length}
          helper="Download form submissions from Android."
          tone="emerald"
        />
        <StatCard
          label="iOS Users"
          value={iosUsers.length}
          helper="Download form submissions from iOS."
          tone="fuchsia"
        />
        <StatCard
          label="Contact Forms"
          value={contacts.length}
          helper="Messages submitted from the contact form."
          tone="blue"
        />
      </section>
    </div>
  );
};

export default AdminOverview;
