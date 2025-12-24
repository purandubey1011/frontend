
 


    import React, { useState, useRef, useLayoutEffect } from "react";
import { toast } from "react-toastify";
import { gsap } from "gsap";

const ContactUsForm = () => {
  const componentRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power2.out", duration: 0.6 },
      });

      tl.from(".contact-title", { y: 20, opacity: 0 })
        .from(".contact-desc", { y: 15, opacity: 0 }, "-=0.3")
        .from(
          ".contact-field",
          {
            y: 20,
            opacity: 0,
            stagger: 0.08,
          },
          "-=0.2"
        )
        .from(".contact-button", { scale: 0.95, opacity: 0 }, "-=0.2");
    }, componentRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  // 🔥 Basic validation
  if (!formData.name || !formData.email || !formData.message) {
    toast.error("Please fill all required fields");
    return;
  }

  setLoading(true);

  try {
    const res = await fetch("https://unyfer-backend.onrender.com/api/v1/form/contact", {
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

    toast.success("Form submitted successfully!");

    setFormData({
      name: "",
      mobile: "",
      email: "",
      subject: "",
      message: "",
    });
  } catch (error) {
    console.error(error);
    toast.error("Server error, please try again later!");
  } finally {
    setLoading(false);
  }
};


  return (
    <section
      ref={componentRef}
      className="bg-[#f5f2f0] py-14 px-4 rounded-none sm:rounded-lg my-0 sm:my-10"
    >
      {/* Heading */}
      <div className="max-w-2xl mx-auto text-center mb-12">
        <h1 className="contact-title text-3xl sm:text-4xl font-bold text-purple-700 mb-4">
          Contact & Support
        </h1>
        <p className="contact-desc text-gray-700 leading-relaxed">
          We’d love to hear from you. Whether you have a question, feedback, or
          a business enquiry — our team is here to help.
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="w-[60vw] mx-auto space-y-6 px-0 sm:px-10"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="contact-field w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />

          <input
            type="tel"
            name="mobile"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
            className="contact-field w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="contact-field w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
        />

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          className="contact-field w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          className="contact-field w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none"
        />

        <div className="text-center pt-4">
          <button
            type="submit"
            disabled={loading}
            className="contact-button px-10 py-3 rounded-full bg-purple-600 text-white font-medium hover:bg-purple-700 disabled:opacity-60"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactUsForm;
