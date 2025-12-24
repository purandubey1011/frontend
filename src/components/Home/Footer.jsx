import React from "react";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-black/95 text-white px-6 py-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Brand */}
        <div className="text-xl font-bold text-purple-600 tracking-wide">
          UNYFER
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center md:justify-end items-center gap-4 text-sm">
          {/* Social */}
          <a
            href="https://www.instagram.com/unyferofficial/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram className="text-white hover:text-[#d946ef] transition text-lg" />
          </a>

          {/* Internal Pages */}
          <Link
            to="/privacy-policy"
            className="font-medium hover:text-purple-400 transition"
          >
            Privacy Policy
          </Link>

          <Link
            to="/terms"
            className="font-medium hover:text-purple-400 transition"
          >
            Terms & Conditions
          </Link>

          <Link
            to="/csae-policy"
            className="font-medium hover:text-purple-400 transition"
          >
            CSAE Policy
          </Link>

          <Link
            to="/contact-us"
            className="font-medium hover:text-purple-400 transition"
          >
            Contact Us
          </Link>

          <Link
            to="/delete-account"
            className="font-medium hover:text-purple-400 transition"
          >
            Delete Account
          </Link>

          {/* Credits */}
          <span className="text-xs md:text-sm">
            Design & Developed By{" "}
            <a
              href="https://falverra.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:text-purple-400"
            >
              Falverra.com
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
