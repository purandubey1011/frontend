import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const arrowsRef = useRef(null);
  const dotsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline for scroll animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none linear",
        },
      });

      tl.from(headingRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
      })
        .from(cardRef.current, {
          y: 50,
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
        })
        .from(imageRef.current, {
          x: -50,
          opacity: 0,
          duration: 0.6,
          ease: "power3.out",
        }, "-=0.4")
        .from(textRef.current, {
          x: 50,
          opacity: 0,
          duration: 0.6,
          ease: "power3.out",
        }, "-=0.5")
        .from(arrowsRef.current.children, {
          opacity: 0,
          y: 20,
          stagger: 0.2,
          duration: 0.4,
        }, "-=0.4")
        .from(dotsRef.current.children, {
          opacity: 0,
          scale: 0.5,
          stagger: 0.1,
          duration: 0.3,
        }, "-=0.3");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
  ref={sectionRef}
  className="bg-gradient-to-r from-[#A15CFF] to-[#A15CFF]/80 rounded-3xl px-4 md:px-12 py-12 md:py-10 text-white max-w-[90vw] mx-auto relative"
>
  {/* Title */}
  <h2
    ref={headingRef}
    className="text-2xl md:text-4xl font-semibold text-center mb-8 md:mb-12"
  >
    Creator{" "}
    <span className="border-white border-2 px-2 rounded-md font-bold">
      Testimonials
    </span>
  </h2>

  {/* Card */}
  <div
    ref={cardRef}
    className="relative flex flex-col md:flex-row items-center justify-center bg-white rounded-xl overflow-hidden shadow-md max-w-5xl mx-auto"
  >
    {/* Left Side */}
    <div
      ref={imageRef}
      className="relative w-full md:w-1/2 h-[220px] sm:h-[250px] md:h-[350px]"
    >
      <img
        src="https://images.unsplash.com/photo-1716703742154-8a90c9563eed?q=80&w=1170&auto=format&fit=crop"
        alt="Video thumbnail"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[50px] h-[50px] md:w-[70px] md:h-[70px] rounded-full bg-white shadow-lg flex items-center justify-center cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 md:h-6 md:w-6 text-[#A15CFF]"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </div>

    {/* Right Side */}
    <div
      ref={textRef}
      className="w-full md:w-1/2 px-4 sm:px-6 md:px-10 py-6 md:py-8 text-center md:text-left"
    >
      <h4 className="text-[#A15CFF] text-base md:text-lg font-semibold mb-3">
        UNFYER
      </h4>
      <p className="text-gray-700 mb-4 md:mb-6 text-sm leading-relaxed">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt..."
      </p>
      <div className="flex flex-col sm:flex-row md:flex-row items-center sm:items-center gap-3 sm:gap-4">
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="Adam Smith"
          className="w-10 h-10 rounded-full object-cover"
        />
        <div className="text-center sm:text-left">
          <p className="text-[#1A1A1A] font-bold text-sm">Adam Smith</p>
          <p className="text-gray-500 text-sm">Social Media Influencer</p>
        </div>
      </div>
    </div>
  </div>

  {/* Arrows */}
 {/* Arrows + Dots container */}
<div
  ref={arrowsRef}
  className="flex items-center justify-between mt-8 max-w-[200px] mx-auto w-full"
>
  {/* Left Arrow */}
  <button className="w-9 h-9 md:w-10 md:h-10 bg-white rounded-full shadow-md flex items-center justify-center">
    <svg
      className="w-5 h-5 text-[#A15CFF]"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M7.707 3.293a1 1 0 010 1.414L4.414 8H16a1 1 0 110 2H4.414l3.293 3.293a1 1 0 01-1.414 1.414l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  </button>

  {/* Dots */}
  <div
    ref={dotsRef}
    className="flex space-x-2"
  >
    <div className="w-3 h-3 bg-white rounded-full"></div>
    <div className="w-3 h-3 bg-white/50 rounded-full"></div>
    <div className="w-3 h-3 bg-white/50 rounded-full"></div>
  </div>

  {/* Right Arrow */}
  <button className="w-9 h-9 md:w-10 md:h-10 bg-white rounded-full shadow-md flex items-center justify-center">
    <svg
      className="w-5 h-5 text-[#A15CFF]"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M12.293 16.707a1 1 0 010-1.414L15.586 12H4a1 1 0 110-2h11.586l-3.293-3.293a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
        clipRule="evenodd"
      />
    </svg>
  </button>
</div>

</div>

  );
};

export default Testimonials;
