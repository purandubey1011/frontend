import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const leftPoints = [
  "From passive followers to active conversations",
  "From content to real interaction",
];

const rightPoints = [
  "From reach to meaningful access",
  "From dependency to ownership",
];

const BestInfluencer = () => {
  const sectionRef = useRef(null);

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
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="w-[90vw] max-w-[1280px] mx-auto py-16 relative text-black font-sans"
    >
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-radial from-purple-100/40 to-transparent blur-3xl rounded-full"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="badge mb-4 px-4 py-1 bg-purple-100 text-purple-700 text-xs sm:text-sm rounded-full font-medium">
          ● Positioning
        </div>

        <h2 className="heading text-2xl sm:text-4xl md:text-[42px] font-bold leading-snug sm:leading-tight mb-8 sm:mb-10">
          <span className="text-purple-600">This isn&apos;t another creator tool.</span>
          <br className="hidden md:block" />
          <span className="font-medium text-black">This is a new way to connect.</span>
        </h2>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-10">
          <div className="left-text flex flex-col gap-6 sm:gap-10 text-left text-sm sm:text-lg">
            {leftPoints.map((point) => (
              <div key={point} className="flex items-start gap-3">
                <span className="text-purple-500 text-lg sm:text-xl mt-1">✴</span>
                <p>{point}</p>
              </div>
            ))}
          </div>

          <div className="center-img rounded-lg sm:rounded-[1.5vw] overflow-hidden shadow-lg w-[60vw] sm:w-[24vw] h-[40vh] sm:h-[58vh]">
            <img
              src="https://ik.imagekit.io/b9tt0xvd7/unfyer/bestinfluencer-bg.jpeg"
              alt="Creator connection"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="right-text flex flex-col gap-6 sm:gap-10 text-left text-sm sm:text-lg">
            {rightPoints.map((point) => (
              <div key={point} className="flex items-start gap-3">
                <span className="text-purple-500 text-lg sm:text-xl mt-1">✴</span>
                <p>{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestInfluencer;
