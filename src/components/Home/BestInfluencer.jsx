import React, { useEffect, useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BestInfluencer = () => {
  const sectionRef = useRef(null);
  const [openVideo, setOpenVideo] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
        defaults: { ease: "linear" },
      });

      tl.from(".badge", { y: -15, opacity: 0, duration: 0.4 })
        .from(".heading", { y: 20, opacity: 0, duration: 0.5 })
        .from(
          ".left-text > div",
          { x: -30, opacity: 0, duration: 0.45, stagger: 0.15 },
          "-=0.3"
        )
        .from(
          ".center-img",
          { scale: 0.96, opacity: 0, duration: 0.5 },
          "-=0.3"
        )
        .from(
          ".right-text > div",
          { x: 30, opacity: 0, duration: 0.45, stagger: 0.15 },
          "-=0.3"
        )
        .to(".watch-btn", { y: 0, opacity: 1, duration: 0.4 });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* SECTION */}
      <div
        ref={sectionRef}
        className="w-[90vw] max-w-[1280px] mx-auto py-16 relative text-black font-sans"
      >
        {/* Glow Background */}
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-radial from-purple-100/40 to-transparent blur-3xl rounded-full"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="badge mb-4 px-4 py-1 bg-purple-100 text-purple-700 text-xs sm:text-sm rounded-full font-medium">
            ● Why We Are
          </div>

          <h2 className="heading text-2xl sm:text-4xl md:text-[42px] font-bold leading-snug sm:leading-tight mb-8 sm:mb-10">
            We Are the Best <br className="hidden md:block" />
            Influencer
          </h2>

          {/* MAIN PART */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-10">
            {/* LEFT */}
            <div className="left-text flex flex-col gap-6 sm:gap-10 text-left text-sm sm:text-lg">
              <div className="flex items-start gap-3">
                <span className="text-purple-500 text-lg sm:text-xl mt-1">
                  ✴️
                </span>
                <p>
                  The creator struggle{" "}
                  <span className="hidden md:inline">
                    <br />
                  </span>
                  with brand dependence
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-purple-500 text-lg sm:text-xl mt-1">
                  ✴️
                </span>
                <p>How it works</p>
              </div>
            </div>

            {/* CENTER IMAGE */}
            <div className="center-img rounded-lg sm:rounded-[1.5vw] overflow-hidden shadow-lg w-[60vw] sm:w-[24vw] h-[40vh] sm:h-[58vh]">
              <img
                src="https://ik.imagekit.io/b9tt0xvd7/unfyer/bestinfluencer-bg.jpeg"
                alt="Best Influencer"
                className="w-full h-full object-cover"
              />
            </div>

            {/* RIGHT */}
            <div className="right-text flex flex-col gap-6 sm:gap-10 text-left text-sm sm:text-lg">
              <div className="flex items-start gap-3">
                <span className="text-purple-500 text-lg sm:text-xl mt-1">
                  ✴️
                </span>
                <p>
                  Why only premium{" "}
                  <span className="hidden md:inline">
                    <br />
                  </span>
                  creators
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-purple-500 text-lg sm:text-xl mt-1">
                  ✴️
                </span>
                <p>Why Unyfer exists</p>
              </div>
            </div>
          </div>

          {/* WATCH BUTTON */}
          <button
            style={{ opacity: 0 }}
            onClick={() => setOpenVideo(true)}
            className="watch-btn relative z-20 mt-8 sm:mt-12 px-5 sm:px-6 py-2.5 sm:py-3 bg-[#8e69ce] text-white text-sm sm:text-base font-medium rounded-full flex items-center gap-2 sm:gap-3 shadow-md hover:bg-[#a07cf8] transition cursor-pointer"
          >
            <FaPlay className="text-xs sm:text-sm" />
            Watch Intro
          </button>
        </div>
      </div>

      {/* ===========================
          VIDEO POPUP MODAL
      ============================= */}
      {openVideo && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[999]"
          onClick={() => setOpenVideo(false)}
        >
        <div
  onClick={(e) => e.stopPropagation()}
  className="relative w-full h-full flex items-center justify-center p-4 bg-black rounded-xl overflow-hidden shadow-lg"
>
  {/* Close Button */}
  <button
    onClick={() => setOpenVideo(false)}
    className="absolute top-3 right-3 z-50 bg-white text-black p-1 rounded-full shadow"
  >
    <IoClose size={22} />
  </button>

  <video
    controls
    autoPlay
    playsInline
    className="max-w-[100vw] max-h-[100vh] w-auto h-auto object-contain rounded-xl"
    src="https://ik.imagekit.io/b9tt0xvd7/unfyer/unyfer-hero-video.mp4"
    controlsList="nodownload noplaybackrate"
    disablePictureInPicture
  />
</div>

        </div>
      )}
    </>
  );
};

export default BestInfluencer;
