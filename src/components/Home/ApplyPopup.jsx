import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ApplyPopup = ({ onClose }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    followers: "",
    isCreator: "",
  });

  const [loading, setLoading] = useState(false);
  const popupRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      popupRef.current,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.6, ease: "back.out" }
    );
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 🔥 VALIDATION FUNCTION
  const validateForm = () => {
    const { username, email, phone, followers, isCreator } = formData;

    // username
    if (!username.trim()) {
      toast.error("Username is required!");
      return false;
    }

    // email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email)) {
      toast.error("Please enter a valid email!");
      return false;
    }

    // phone number → must be exactly 10 digits
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
      toast.error("Phone number must be 10 digits!");
      return false;
    }

    // followers → must be number ≥ 0
    if (!followers || isNaN(followers) || Number(followers) < 0) {
      toast.error("Followers count must be a valid number!");
      return false;
    }

    // creator selection
    if (!isCreator) {
      toast.error("Please select if you are a creator!");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 🔥 Run validation first
    if (!validateForm()) return;

    setLoading(true);

    try {
      const res = await fetch("https://unyfer-backend.onrender.com/api/v1/form/apply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.error || "Something went wrong!");
        setLoading(false);
        return;
      }

      toast.success("Application submitted successfully!");
      setLoading(false);
      onClose();

    } catch (error) {
      console.error(error);
      toast.error("Server error, try again later!");
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
      <div
        ref={popupRef}
        className="bg-white rounded-lg p-6 max-w-md w-full mx-4 relative shadow-lg"
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-xl font-bold"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold mb-4 text-purple-600">Apply for Access</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Username */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Username</label>
            <input
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Email</label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Phone</label>
            <input
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          {/* Followers */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Followers Count</label>
            <input
              name="followers"
              type="number"
              min="0"
              value={formData.followers}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          {/* Creator */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Are you a Creator?
            </label>
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="isCreator"
                  value="Yes"
                  checked={formData.isCreator === "Yes"}
                  onChange={handleChange}
                />
                Yes
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="isCreator"
                  value="No"
                  checked={formData.isCreator === "No"}
                  onChange={handleChange}
                />
                No
              </label>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-5 rounded-full w-full transition"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplyPopup;
