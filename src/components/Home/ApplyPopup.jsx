import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { submitDownloadForm } from "../services/adminApi";

const ApplyPopup = ({ onClose, platform = "Android", redirectUrl }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    followers: "",
    isCreator: "",
    platform,
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

  useEffect(() => {
    setFormData({
      username: "",
      email: "",
      phone: "",
      followers: "",
      isCreator: "",
      platform,
    });
  }, [platform]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const { username, email, phone, followers, isCreator, platform } = formData;

    if (!username.trim()) {
      toast.error("Username is required!");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email)) {
      toast.error("Please enter a valid email!");
      return false;
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
      toast.error("Phone number must be 10 digits!");
      return false;
    }

    if (!followers || isNaN(followers) || Number(followers) < 0) {
      toast.error("Followers count must be a valid number!");
      return false;
    }

    if (!isCreator) {
      toast.error("Please select if you are a creator!");
      return false;
    }

    if (!platform) {
      toast.error("Platform is required!");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);
    const downloadWindow = redirectUrl ? window.open("", "_blank") : null;

    try {
      const { data } = await submitDownloadForm(formData);

      toast.success(data.message || "Application submitted successfully!");
      onClose();

      if (redirectUrl) {
        if (downloadWindow && !downloadWindow.closed) {
          downloadWindow.location.href = redirectUrl;
        } else {
          window.open(redirectUrl, "_blank");
        }
      }
    } catch (error) {
      if (downloadWindow && !downloadWindow.closed) {
        downloadWindow.close();
      }
      toast.error(
        error.response?.data?.error || "Server error, try again later!"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
      <div
        ref={popupRef}
        className="relative mx-4 w-full max-w-md rounded-lg bg-white p-6 shadow-lg"
      >
        <button
          onClick={onClose}
          className="absolute right-3 top-3 text-xl font-bold text-gray-600 hover:text-gray-900"
        >
          &times;
        </button>

        <h2 className="mb-2 text-2xl font-bold text-purple-600">
          Apply for Access
        </h2>
        <p className="mb-4 text-sm text-gray-500">
          Complete the form to continue to the {platform} app download.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-1 block font-semibold text-gray-700">
              Downloading For
            </label>
            <input
              name="platform"
              value={formData.platform}
              readOnly
              className="w-full rounded border border-purple-200 bg-purple-50 px-3 py-2 font-medium text-purple-700"
            />
          </div>

          <div>
            <label className="mb-1 block font-semibold text-gray-700">
              Instagram Username
            </label>
            <input
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full rounded border border-gray-300 px-3 py-2"
            />
          </div>

          <div>
            <label className="mb-1 block font-semibold text-gray-700">
              Email
            </label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded border border-gray-300 px-3 py-2"
            />
          </div>

          <div>
            <label className="mb-1 block font-semibold text-gray-700">
              Phone
            </label>
            <input
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              className="w-full rounded border border-gray-300 px-3 py-2"
            />
          </div>

          <div>
            <label className="mb-1 block font-semibold text-gray-700">
              Followers Count
            </label>
            <input
              name="followers"
              type="number"
              min="0"
              value={formData.followers}
              onChange={handleChange}
              className="w-full rounded border border-gray-300 px-3 py-2"
            />
          </div>

          <div>
            <label className="mb-1 block font-semibold text-gray-700">
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

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-full bg-purple-600 px-5 py-2 font-semibold text-white transition hover:bg-purple-700"
          >
            {loading ? "Submitting..." : `Submit & Continue to ${platform}`}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplyPopup;
