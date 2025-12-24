import React from "react";
import {
  FiMapPin,
  FiClock,
  FiMail,
  FiPhone,
  FiInstagram,
  FiLinkedin,
} from "react-icons/fi";

const FindUs = () => {
  return (
    <section className="bg-[#1b0f2e] text-white w-full py-8 px-4 sm:px-0 ">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="mb-14 flex flex-col items-center text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Find Us
          </h2>
          <p className="text-gray-300 max-w-xl">
            Reach out to Unyfer for partnerships, support, or general
            enquiries. We’re always happy to connect.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left */}
          <div className="space-y-8">
            {/* Address */}
            <div className="flex gap-4">
              <FiMapPin className="text-purple-400 text-xl mt-1" />
              <div>
                <h4 className="font-semibold mb-1">Address</h4>
                <p className="text-gray-300">
                  12609 Chinguacousy Rd,
                  <br />
                  Caledon, ON L7C 3H2, Canada
                </p>
                <a
                  href="https://www.google.com/maps"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 underline text-sm mt-1 inline-block"
                >
                  Click Map
                </a>
              </div>
            </div>

            <hr className="border-white/20" />

            {/* Email */}
            <div className="flex gap-4">
              <FiMail className="text-purple-400 text-xl mt-1" />
              <div>
                <h4 className="font-semibold mb-1">Email Us</h4>
                <a
                  href="mailto:help@unyfer.com"
                  className="text-gray-300 hover:text-purple-400 transition"
                >
                  help@unyfer.com
                </a>
                <p className="text-xs text-gray-400 mt-1">
                  (click-to-mail)
                </p>
              </div>
            </div>

            <hr className="border-white/20" />

            {/* Social */}
            <div>
              <h4 className="font-semibold mb-3">Follow Us</h4>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/unyferofficial/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-purple-500 transition"
                >
                  <FiInstagram />
                </a>

                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-purple-500 transition"
                >
                  <FiLinkedin />
                </a>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="space-y-8">
            {/* Hours */}
            <div className="flex gap-4">
              <FiClock className="text-purple-400 text-xl mt-1" />
              <div>
                <h4 className="font-semibold mb-1">Operating Hours</h4>
                <p className="text-gray-300">
                  Monday – Friday
                  <br />
                  10:00 AM – 6:00 PM (IST)
                </p>
              </div>
            </div>

            <hr className="border-white/20" />

            {/* Phone */}
            <div className="flex gap-4">
              <FiPhone className="text-purple-400 text-xl mt-1" />
              <div>
                <h4 className="font-semibold mb-1">Contact Details</h4>
                <a
                  href="tel:+919999999999"
                  className="text-gray-300 hover:text-purple-400 transition"
                >
                  +91 99999 99999
                </a>
                <p className="text-xs text-gray-400 mt-1">
                  (click-to-call)
                </p>
              </div>
            </div>

            <hr className="border-white/20" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindUs;
