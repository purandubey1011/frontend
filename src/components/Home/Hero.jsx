import React, { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import ApplyPopup from "./ApplyPopup";
import HeroVideo from "../utils/Herovideo.jsx";

const IOS_LINK = "https://apps.apple.com/us/app/unyfer/id6755072414";
const ANDROID_LINK = "https://play.google.com/store/apps/details?id=com.unyfers.app";

const Hero = () => {
  const componentRef = useRef(null);
  const buttonRef = useRef(null);
  const [downloadIntent, setDownloadIntent] = useState(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      tl.from(".hero-logo", { y: -20, opacity: 0, duration: 0.5 })
        .from(
          ".hero-heading-line",
          { y: 30, opacity: 0, stagger: 0.1, duration: 0.5 },
          "-=0.3"
        )
        .from(".hero-subtitle", { y: 15, opacity: 0, duration: 0.4 }, "-=0.38")
        .from(".hero-tagline", { y: 15, opacity: 0, duration: 0.4 }, "-=0.32")
        .from(buttonRef.current, { opacity: 0, scale: 1, duration: 0.4 }, "-=0.4");
    }, componentRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={componentRef}
      className="bg-white flex flex-col items-center justify-center px-4 py-0"
      id="hero"
    >
      <div className="w-full max-w-[90vw] text-left">
        <h2 className="hero-logo text-lg sm:text-xl font-bold text-purple-600">
          <img
            className="h-20 sm:h-28"
            src="https://ik.imagekit.io/b9tt0xvd7/unfyer/Untitled%20design%20(20).png?updatedAt=1755160725166"
            alt="Logo"
          />
        </h2>
      </div>

      <div className="relative z-10 mt-6 max-w-[90vw] text-center sm:mt-8">
        <h1 className="text-3xl font-bold leading-snug sm:text-6xl sm:leading-tight">
          <span className="block hero-heading-line">
            The Future of Creator Connection.
          </span>
        </h1>

        <p className="hero-subtitle mx-auto mt-4 max-w-4xl text-sm leading-relaxed text-gray-600 sm:text-lg">
          Unyfer lets creators connect 1:1 through secure calls & chats - where your
          time, attention, and presence hold real value.
        </p>

        <p className="hero-tagline mt-3 text-sm font-medium text-gray-900 sm:text-lg">
          No brands. No middlemen. Just you and your audience.
        </p>

        <div className="relative z-20 mt-6" ref={buttonRef}>
          <p className="mb-4 text-sm font-semibold text-purple-700 sm:text-base">
            Download Now:
          </p>

          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() =>
                setDownloadIntent({
                  platform: "iOS",
                  redirectUrl: IOS_LINK,
                  nonce: Date.now(),
                })
              }
              className="inline-flex min-w-[220px] items-center justify-center gap-3 rounded-full border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm transition hover:border-purple-300 hover:bg-purple-50 sm:text-base"
            >
              <FaApple size={20} />
              <span>Download For IOS</span>
            </button>

            <button
              type="button"
              onClick={() =>
                setDownloadIntent({
                  platform: "Android",
                  redirectUrl: ANDROID_LINK,
                  nonce: Date.now(),
                })
              }
              className="inline-flex min-w-[220px] items-center justify-center gap-3 rounded-full bg-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-purple-700 sm:text-base"
            >
              <FaGooglePlay size={18} />
              <span>Download For Android</span>
            </button>
          </div>

          <p className="mt-3 text-[10px] text-gray-400 sm:text-sm">
            For creators with 5,000+ followers
          </p>
        </div>
      </div>

      <HeroVideo />

      {downloadIntent && (
        <ApplyPopup
          key={downloadIntent.nonce}
          onClose={() => setDownloadIntent(null)}
          platform={downloadIntent.platform}
          redirectUrl={downloadIntent.redirectUrl}
        />
      )}
    </div>
  );
};

export default Hero;
