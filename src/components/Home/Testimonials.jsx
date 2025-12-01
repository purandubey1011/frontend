import React, { useEffect, useRef, useState } from "react";
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

  // ⭐ Testimonials Data
  const testimonials = [
    {
      video:
        "https://images.unsplash.com/photo-1716703742154-8a90c9563eed?q=80&w=1170&auto=format&fit=crop",
      review:
        "UNYFER completely changed the way I work with brands. Their creator strategies helped me grow my audience and close premium deals.",
      name: "Adam Smith",
      role: "Social Media Influencer",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      video:
        "https://plus.unsplash.com/premium_photo-1706281895733-b685a6435d27?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      review:
        "Being part of UNYFER helped me streamline content planning and understand what brands really look for in a creator.",
      name: "Sophia Williams",
      role: "Fashion Creator",
      avatar: "https://randomuser.me/api/portraits/women/45.jpg",
    },
    {
      video:
        "https://images.unsplash.com/photo-1600074169098-16a54d791d0d?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      review:
        "The best decision ever! Their guidance helped me grow from 10k to 100k followers with real engagement strategies.",
      name: "Michael Lee",
      role: "Tech Content Creator",
      avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    },
  ];

  const [index, setIndex] = useState(0);

  // ⭐ NEXT HANDLER
  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  // ⭐ PREVIOUS HANDLER
  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  // ⭐ Scroll Animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      tl.from(headingRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
      })
        .from(
          cardRef.current,
          {
            y: 50,
            opacity: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.2"
        )
        .from(
          imageRef.current,
          {
            x: -50,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .from(
          textRef.current,
          {
            x: 50,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.5"
        )
        .from(
          arrowsRef.current.children,
          {
            opacity: 0,
            y: 20,
            stagger: 0.2,
            duration: 0.4,
          },
          "-=0.4"
        )
        .from(
          dotsRef.current.children,
          {
            opacity: 0,
            scale: 0.5,
            stagger: 0.1,
            duration: 0.3,
          },
          "-=0.5"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // ⭐ Animate on Next / Prev
  useEffect(() => {
    gsap.fromTo(
      [imageRef.current, textRef.current],
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
      }
    );
  }, [index]);

  const t = testimonials[index];

  // ⭐ Auto Slide (every 3 sec)
useEffect(() => {
  const interval = setInterval(() => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  }, 3000);

  return () => clearInterval(interval);
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
        {/* Left */}
        <div
          ref={imageRef}
          className="relative w-full md:w-1/2 h-[220px] sm:h-[250px] md:h-[350px]"
        >
          <img
            src={t.video}
            alt="Thumbnail"
            className="w-full h-full object-cover transition-all"
          />

          {/* <div className="absolute inset-0 flex items-center justify-center">
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
          </div> */}
        </div>

        {/* Right */}
        <div
          ref={textRef}
          className="w-full md:w-1/2 px-4 sm:px-6 md:px-10 py-6 md:py-8 text-center md:text-left"
        >
          <h4 className="text-[#A15CFF] text-base md:text-lg font-semibold mb-3">
            UNYFER
          </h4>

          <p className="text-gray-700 mb-4 md:mb-6 text-sm leading-relaxed">
            "{t.review}"
          </p>

          <div className="flex flex-col sm:flex-row md:flex-row items-center gap-3 sm:gap-4">
            <img
              src={t.avatar}
              alt={t.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="text-center sm:text-left">
              <p className="text-[#1A1A1A] font-bold text-sm">{t.name}</p>
              <p className="text-gray-500 text-sm">{t.role}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Arrows + Dots */}
      <div
        ref={arrowsRef}
        className="flex items-center justify-between mt-8 max-w-[200px] mx-auto w-full"
      >
        {/* Left */}
        <button
          onClick={prevSlide}
          className="w-9 h-9 md:w-10 md:h-10 bg-white rounded-full shadow-md flex items-center justify-center"
        >
          <svg className="w-5 h-5 text-[#A15CFF]" fill="currentColor">
            <path d="M12 4L4 12l8 8" strokeWidth="2" stroke="currentColor" fill="none" />
          </svg>
        </button>

        {/* Dots */}
        <div ref={dotsRef} className="flex space-x-2">
          {testimonials.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full transition-all ${
                i === index ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>

        {/* Right */}
        <button
          onClick={nextSlide}
          className="w-9 h-9 md:w-10 md:h-10 bg-white rounded-full shadow-md flex items-center justify-center"
        >
          <svg className="w-5 h-5 text-[#A15CFF]" fill="currentColor">
            <path d="M8 4l8 8-8 8" strokeWidth="2" stroke="currentColor" fill="none" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
