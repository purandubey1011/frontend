import React, { useState } from "react";
import { toast } from "react-toastify";

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill all required fields");
      return;
    }

    try {
      setLoading(true);

    //   const res = await fetch(
    //     "https://api.unyfer.com/contact", // 🔁 replace with real backend URL
    //     {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify(formData),
    //     }
    //   );

    //   if (!res.ok) throw new Error("Failed");

      toast.success("Form submitted successfully");

      setFormData({
        name: "",
        mobile: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[#f5f2f0] py-14 px-4 rounded-none sm:rounded-lg my-0 sm:my-10">

      <div className="max-w-2xl mx-auto text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-purple-700 mb-4">
          Contact & Support
        </h1>
        <p className="text-gray-700 leading-relaxed">
          We’d love to hear from you. Whether you have a question, feedback, or
          a business enquiry — our team is here to help.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-[60vw] mx-auto space-y-6 px-0 sm:px-10"
      >
        {/* Name & Mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />

          <input
            type="tel"
            name="mobile"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
        />

        {/* Subject (Company/Restaurant → Subject) */}
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
        />

        {/* Message (Enquiring for → Message) */}
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none"
        />

        {/* Submit */}
        <div className="text-center pt-4">
          <button
            type="submit"
            disabled={loading}
            className="px-10 py-3 rounded-full bg-purple-600 text-white font-medium hover:bg-purple-700 transition disabled:opacity-60"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactUsForm;
