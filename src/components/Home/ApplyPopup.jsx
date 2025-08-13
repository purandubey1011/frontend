import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

const ApplyPopup = ({ onClose }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    followers: "",
    isCreator: "",
  });

  const popupRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      popupRef.current,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.6, ease: "back.out" }
    );
  }, []);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "radio" ? value : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.username}! We received your application.`);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
      <div
        ref={popupRef}
        className="bg-white rounded-lg p-6 max-w-md w-full mx-4 relative shadow-lg"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-xl font-bold"
          aria-label="Close form"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold mb-4 text-purple-600">Apply for Access</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Username */}
          <div>
            <label htmlFor="username" className="block text-gray-700 font-semibold mb-1">
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              value={formData.username}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-1">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-gray-700 font-semibold mb-1">
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>

          {/* Followers */}
          <div>
            <label htmlFor="followers" className="block text-gray-700 font-semibold mb-1">
              Followers Count
            </label>
            <input
              id="followers"
              name="followers"
              type="number"
              min="0"
              value={formData.followers}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>

          {/* Are you a Creator? */}
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
                  required
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
                  required
                />
                No
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-5 rounded-full w-full transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplyPopup;
