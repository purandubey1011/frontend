import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Calltoaction = () => {
  const sectionRef = useRef(null);
  const textRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Text stagger animation only
      gsap.fromTo(
        textRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="w-full px-4 py-12 relative">
      <div
        className="w-full max-w-7xl mx-auto rounded-2xl overflow-hidden bg-cover bg-center flex flex-col items-center justify-center text-center px-6 py-20"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url("https://ik.imagekit.io/b9tt0xvd7/unfyer/imgx.jpg")`,
        }}
      >
        <div className="relative z-10 text-white">
          <h1
            ref={(el) => (textRef.current[0] = el)}
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4"
          >
            Unleash Your Creative <br className="hidden sm:block" /> Power on
            Unyfer
          </h1>
          <p
            ref={(el) => (textRef.current[1] = el)}
            className="text-sm sm:text-base max-w-2xl mx-auto mb-6 text-[#f7cfe1] font-medium"
          >
            Whether you're a rising creator or a growing business — Unyfer is
            where meaningful collaborations begin.
          </p>
          <button
            ref={(el) => (textRef.current[2] = el)}
            className="bg-white text-[#7e3af2] px-6 py-3 rounded-full text-sm sm:text-base font-semibold hover:scale-105 transition duration-300 shadow-md"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calltoaction;
