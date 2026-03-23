import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  "Download Application",
  "Get verified & onboarded",
  "Start connecting with your audience",
];

const Howitworks = () => {
  const sectionRef = useRef(null);

useEffect(() => {
  const el = sectionRef.current;

  gsap.fromTo(
    el.querySelectorAll(".animate-item"),
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: 0.6, // faster
      stagger: 0.15, // quicker sequence
      ease: "power2.out", // smooth but snappy
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
      <div className="w-[80vw] sm:w-[30vw] h-[50vh] animate-item">
        <img
          src="https://ik.imagekit.io/b9tt0xvd7/Falverra/unyfer/HOWITWORKS_UNYFER_BmFXBWDS8.jpeg"
          alt="How It Works"
          className="rounded-[24px] w-full h-full object-cover object-[center_55%]"
        />
      </div>

      {/* Text & Steps Section */}
      <div className="animate-item">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">How It Works?</h2>
        <p className="text-gray-600 text-base sm:text-lg mb-8">
          Get started in minutes
        </p>

        <div className="relative ml-4 animate-item">
          {/* Vertical line behind dots */}
          <div className="absolute left-[6px] top-0 h-full w-[2px] bg-pink-300/50"></div>

          {steps.map((step, index) => (
            <div
              key={step}
              className={`relative pl-8 animate-item ${
                index !== steps.length - 1 ? "mb-10" : ""
              }`}
            >
              <div
                className={`absolute left-0 top-[6px] h-[14px] w-[14px] rounded-full shadow-md ${
                  index === steps.length - 1 ? "bg-pink-300 shadow-sm" : "bg-pink-400"
                }`}
              ></div>
              <p className="text-gray-800 font-medium">
                {index + 1}. {step}
              </p>
            </div>
          ))}

          <p className="mt-8 ml-8 animate-item text-base sm:text-lg font-semibold text-purple-700">
            That&apos;s it.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Howitworks;
