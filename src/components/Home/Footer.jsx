import React from 'react';
import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 py-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Left: Brand Name */}
        <div className="text-xl font-bold text-[#d946ef] tracking-wide">
          UNFYER
        </div>

        {/* Right: Social + Credits */}
        <div className="flex flex-col md:flex-row items-center gap-4 text-sm">
          {/* Social Icons */}
          <div className="flex space-x-4">
            <a href="#" aria-label="Twitter">
              <FaTwitter className="text-white hover:text-[#d946ef] transition" />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram className="text-white hover:text-[#d946ef] transition" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FaLinkedin className="text-white hover:text-[#d946ef] transition" />
            </a>
          </div>

          {/* Text */}
          <div className="text-center md:text-left">
            Design & Developed By <span className="font-medium">Falverra.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
