import { useState } from "react";
import Sidebar from "./Sidebar";
import ApplyList from "./ApplyList";
import ContactList from "./ContactList";
import ZohoCampaign from "./ZohoCampaign";

const AdminDashboard = () => {
  const [tab, setTab] = useState("apply");

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar setTab={setTab} />

      <div style={{ flex: 1, padding: "20px" }}>
        {tab === "apply" && <ApplyList />}
        {tab === "contact" && <ContactList />}
        {tab === "zoho" && <ZohoCampaign />}
      </div>
    </div>
  );
};

export default AdminDashboard;
