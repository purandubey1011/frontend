import { useState } from "react";
import Sidebar from "./Sidebar";
import AdminOverview from "./AdminOverview";
import ApplyList from "./ApplyList";
import DownloadUserList from "./DownloadUserList";
import ContactList from "./ContactList";
import ZohoCampaign from "./ZohoCampaign";

const AdminDashboard = () => {
  const [tab, setTab] = useState("dashboard");

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar setTab={setTab} tab={tab} />

      <div style={{ flex: 1, padding: "20px", background: "#f8fafc" }}>
        {tab === "dashboard" && <AdminOverview />}
        {tab === "signup" && <ApplyList />}
        {tab === "android" && <DownloadUserList platform="Android" />}
        {tab === "ios" && <DownloadUserList platform="iOS" />}
        {tab === "contact" && <ContactList />}
        {tab === "zoho" && <ZohoCampaign />}
      </div>
    </div>
  );
};

export default AdminDashboard;
