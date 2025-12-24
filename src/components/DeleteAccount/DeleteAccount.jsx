import React, { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Footer from "../Home/Footer";
import { toast } from "react-toastify";
import { FiTrash2 } from "react-icons/fi";
import { gsap } from "gsap";

const DeleteAccount = () => {
  const componentRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power2.out", duration: 0.6 },
      });

      tl
        .from(
          ".delete-card",
          { scale: 0.95, opacity: 0 },
          "-=0.1"
        )
        .from(
          ".delete-icon",
          { scale: 0.8, opacity: 0 },
          "-=0.3"
        )
        .from(
          ".delete-text",
          { y: 15, opacity: 0, stagger: 0.12 },
          "-=0.2"
        )
        .from(
          ".delete-buttons button",
          { y: 15, opacity: 0, stagger: 0.15 },
          "-=0.40"
        );
    }, componentRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={componentRef}
      className="bg-white flex flex-col items-center justify-center px-0 py-0"
    >
      {/* Logo */}
      <div className="delete-logo w-full max-w-[90vw] text-left">
        <Link to="/" aria-label="Go to home">
          <img
            className="h-20 sm:h-28"
            src="https://ik.imagekit.io/b9tt0xvd7/unfyer/Untitled%20design%20(20).png?updatedAt=1755160725166"
            alt="Logo"
          />
        </Link>
      </div>

      {/* Card Wrapper */}
      <div className="w-full min-h-[85vh] flex flex-1 items-center justify-center">
        <div className="delete-card w-[320px] sm:w-[360px] border border-black rounded-2xl px-6 py-8 text-center shadow-sm">
          {/* Icon */}
          <div className="delete-icon w-12 h-12 mx-auto mb-4 rounded-full bg-purple-100 flex items-center justify-center">
            <FiTrash2 className="text-purple-600 text-xl" />
          </div>

          {/* Text */}
          <h2 className="delete-text text-lg font-semibold text-gray-900 mb-2">
            Delete Account
          </h2>

          <p className="delete-text text-sm font-medium text-gray-800 mb-2">
            Are you sure you want to delete your account?
          </p>

          <p className="delete-text text-xs text-gray-600 mb-6 leading-relaxed">
            This action is irreversible and will permanently delete your account
            and all your data. On proceeding, you will be logged out and your
            account will be deleted in 7 days.
          </p>

          {/* Buttons */}
          <div className="delete-buttons flex flex-col gap-3">
            <button className="w-full py-2.5 rounded-full border border-purple-500 text-purple-600 font-medium hover:bg-purple-50 ">
              Cancel
            </button>

            <button
              onClick={() => {
                toast.success("Account deleted successfully");
              }}
              className="w-full py-2.5 rounded-full bg-purple-500 text-white font-medium hover:bg-purple-600 "
            >
              Proceed
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DeleteAccount;
