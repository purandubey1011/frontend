import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Howitworks = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
  const el = sectionRef.current;

  gsap.fromTo(
    el.querySelectorAll(".animate-item"),
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 1.2, // smooth and slower
      stagger: 0.3,  // more gap between animations
      ease: "power3.out", // softer movement
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    }
  );
}, []);


  return (
    <div
      ref={sectionRef}
      className="w-[90vw] mx-auto py-16 flex flex-col md:flex-row items-center justify-center gap-12"
    >
      {/* Image Section */}
      <div className="w-[60vw] sm:w-[30vw] h-[50vh] animate-item">
        <img
          src="https://ik.imagekit.io/b9tt0xvd7/unfyer/works-img.jpg?updatedAt=1754547117696"
          alt="How It Works"
          className="rounded-[24px] w-full h-full object-cover"
        />
      </div>

      {/* Text & Steps Section */}
      <div className="animate-item">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">How It Works?</h2>

        <div className="relative ml-4 animate-item">
          {/* Vertical line behind dots */}
          <div className="absolute left-[6px] top-0 h-full w-[2px] bg-pink-300/50"></div>

          {/* Step 1 */}
          <div className="relative mb-10 pl-8 animate-item">
            <div className="absolute left-0 top-[6px] w-[14px] h-[14px] rounded-full bg-pink-400 shadow-md"></div>
            <p className="text-gray-800 font-medium">
              Apply with your social links
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative mb-10 pl-8 animate-item">
            <div className="absolute left-0 top-[6px] w-[14px] h-[14px] rounded-full bg-pink-400 shadow-md"></div>
            <p className="text-gray-800 font-medium">
              Get verified and onboarded
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative pl-8 opacity-50 animate-item">
            <div className="absolute left-0 top-[6px] w-[14px] h-[14px] rounded-full bg-pink-300 shadow-sm"></div>
            <p className="text-gray-800 font-medium">
              Start chatting, calling, earning
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Howitworks;
