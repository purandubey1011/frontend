import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardRef = useRef(null);
  const textRef = useRef(null);
  const arrowsRef = useRef(null);
  const dotsRef = useRef(null);

  const testimonials = [
    {
      review:
        "UNYFER completely changed the way I work with brands. Their creator strategies helped me grow my audience and close premium deals.",
      name: "Arjun Malhotra",
      role: "Social Media Influencer",
      avatar: "https://thumb.ac-illust.com/11/117f0a7d2b5c41239ad2456baf5c3eac_t.jpeg",
    },
    {
      review:
        "Being part of UNYFER helped me streamline content planning and understand what brands really look for in a creator.",
      name: "Ananya Deshmukh",
      role: "Fashion Creator",
      avatar: "https://thumb.ac-illust.com/11/117f0a7d2b5c41239ad2456baf5c3eac_t.jpeg",
    },
    {
      review:
        "The best decision ever! Their guidance helped me grow from 10k to 100k followers with real engagement strategies.",
      name: "Rohan Khanna",
      role: "Tech Content Creator",
      avatar: "https://thumb.ac-illust.com/11/117f0a7d2b5c41239ad2456baf5c3eac_t.jpeg",
    },
  ];

  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

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
            y: 40,
            opacity: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.3"
        )
        .from(
          arrowsRef.current.children,
          {
            opacity: 0,
            y: 15,
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

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
      }
    );
  }, [index]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const t = testimonials[index];

  return (
    <div
      ref={sectionRef}
      className="bg-gradient-to-r from-[#A15CFF] to-[#A15CFF]/80 rounded-3xl px-6 md:px-12 py-16 text-white max-w-[90vw] mx-auto"
    >
      {/* Heading */}
      <h2
        ref={headingRef}
        className="text-3xl md:text-4xl font-semibold text-center mb-12"
      >
        Creator{" "}
        <span className="border-white border-2 px-2 rounded-md font-bold">
          Testimonials
        </span>
      </h2>

      {/* Center Content Only */}
      <div
        ref={cardRef}
        className="bg-white text-center rounded-xl shadow-md max-w-2xl mx-auto px-8 py-10"
      >
        <div ref={textRef}>
          <h4 className="text-[#A15CFF] text-lg font-semibold mb-4">
            UNYFER
          </h4>

          <p className="text-gray-700 text-base mb-6 leading-relaxed">
            "{t.review}"
          </p>

          <div className="flex flex-col items-center gap-3">
            <img
              src={t.avatar}
              alt={t.name}
              className="w-14 h-14 rounded-full object-cover"
            />
            <div>
              <p className="text-[#1A1A1A] font-bold">{t.name}</p>
              <p className="text-gray-500 text-sm">{t.role}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Arrows + Dots */}
      <div
        ref={arrowsRef}
        className="flex items-center justify-between mt-10 max-w-[200px] mx-auto w-full"
      >
        <button
          onClick={prevSlide}
          className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center"
        >
          <svg className="w-5 h-5 text-[#A15CFF]" fill="currentColor">
            <path
              d="M12 4L4 12l8 8"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
            />
          </svg>
        </button>

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

        <button
          onClick={nextSlide}
          className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center"
        >
          <svg className="w-5 h-5 text-[#A15CFF]" fill="currentColor">
            <path
              d="M8 4l8 8-8 8"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
