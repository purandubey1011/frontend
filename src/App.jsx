import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy.jsx";
import Terms from "./components/Terms/Terms.jsx";
import CSAEPolicy from "./components/CSAEPolicy/CSAEPolicy.jsx";
import DeleteAccount from "./components/DeleteAccount/DeleteAccount.jsx";
import ContactUs from "./components/ContactUs/ContactUs.jsx";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/csae-policy" element={<CSAEPolicy />} />
        <Route path="/delete-account" element={<DeleteAccount />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>

      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
};

export default App;
