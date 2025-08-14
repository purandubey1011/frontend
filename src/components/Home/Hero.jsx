import React, { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import ApplyPopup from "./ApplyPopup";

const Hero = () => {
  const componentRef = useRef(null);
  const buttonRef = useRef(null);
  const [popupOpen, setPopupOpen] = useState(false);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      tl.from(".hero-logo", { y: -20, opacity: 0, duration: 0.5 })
        .from(".hero-heading-line", { y: 30, opacity: 0, stagger: 0.1, duration: 0.5 }, "-=0.3")
        .from(".hero-subtitle", { y: 15, opacity: 0, duration: 0.4 }, "-=0.38")
        .from(".hero-image", { scale: .9, opacity: 0, duration: 0.8 }, "-=0.4")
        .from(buttonRef.current, { opacity: 0, scale: 1, duration: 0.4 }, "-=0.5");
    }, componentRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={componentRef}
      className="bg-white flex flex-col items-center justify-center px-4 py-0"
    >
      {/* Logo */}
      <div className="w-full max-w-[90vw] text-left">
        <h2 className="hero-logo text-lg sm:text-xl font-bold text-purple-600">
          <img
            className="h-20 sm:h-28"
            src="https://ik.imagekit.io/b9tt0xvd7/unfyer/Untitled%20design%20(20).png?updatedAt=1755160725166"
            alt="Logo"
          />
        </h2>
      </div>

      {/* Heading & Content */}
      <div className="text-center mt-6 sm:mt-8 max-w-[90vw] overflow-hidden">
        <h1 className="text-2xl sm:text-6xl font-bold leading-snug sm:leading-tight">
          <span className="block hero-heading-line">Turn Your Audience Into Income</span>
          <span className="block hero-heading-line">
            Without <span className="text-purple-600">Brand Deals</span>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="hero-subtitle text-gray-600 mt-3 sm:mt-4 text-xs sm:text-lg leading-relaxed sm:leading-3.5">
          Unfyer lets premium creators monetize fan love via secure calls and chats — no{" "}
          <span className="hidden sm:block">
            <br />
          </span>
          brand, no manager, no middleman.
        </p>

        {/* CTA Button */}
        <div className="mt-5 sm:mt-6" ref={buttonRef}>
          <button
            onClick={() => setPopupOpen(true)}
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-5 sm:px-6 rounded-full text-xs sm:text-base transition duration-300"
          >
            Apply for Access
          </button>
          <p className="text-gray-400 text-[10px] sm:text-xs mt-2">
            Only for creators with 5,000+ followers
          </p>
        </div>
      </div>

      {/* Hero Image */}
      <div className="hero-image mt-8 sm:mt-12 w-full max-w-[90vw] h-[40vh] sm:h-[80vh] bg-cover px-2 sm:px-4 overflow-hidden rounded-lg sm:rounded-xl brightness-75">
        <img
          src="https://ik.imagekit.io/b9tt0xvd7/unfyer/herobg.jpg?updatedAt=1754540692859"
          alt="Hero"
          className="w-full h-full object-cover rounded-lg sm:rounded-xl"
        />
      </div>

      {/* Popup Render */}
      {popupOpen && <ApplyPopup onClose={() => setPopupOpen(false)} />}
    </div>
  );
};

export default Hero;
