import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const statements = [
  "The internet made creators visible.",
  "Unyfer makes them accessible.",
  "For years, creators built audiences - but real connection was missing.",
  "We built Unyfer to change that.",
];

const closingLines = [
  "Not more content.",
  "Not more noise.",
  "Just real conversations.",
];

const WhyUnyferExists = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".why-unyfer-copy", {
        y: 30,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".why-unyfer-panel", {
        x: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative mx-auto w-[90vw] max-w-[1280px] py-16 sm:py-20"
    >
      <div className="absolute inset-0 -z-10">
        <div className="mx-auto h-full max-w-5xl rounded-[56px] bg-gradient-to-r from-purple-100/60 via-pink-50/50 to-white blur-3xl" />
      </div>

      <div className="overflow-hidden rounded-[32px] border border-purple-100 bg-white shadow-[0_30px_80px_rgba(126,58,242,0.10)]">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="px-6 py-10 sm:px-10 sm:py-14 lg:px-14">
            <p className="why-unyfer-copy mb-4 inline-flex rounded-full bg-purple-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-purple-700 sm:text-sm">
              Why Unyfer Exists
            </p>

            <div className="space-y-4 sm:space-y-5">
              {statements.map((line, index) => (
                <p
                  key={line}
                  className={`why-unyfer-copy text-xl leading-snug sm:text-3xl ${
                    index === 1 ? "font-bold text-purple-600" : "font-medium text-gray-900"
                  }`}
                >
                  {line}
                </p>
              ))}
            </div>
          </div>

          <div className="why-unyfer-panel flex items-center bg-[#fcf8ff] px-6 py-10 sm:px-10 sm:py-14 lg:px-12">
            <div className="w-full rounded-[28px] bg-[#171225] px-6 py-8 text-white shadow-[0_20px_60px_rgba(23,18,37,0.25)] sm:px-8 sm:py-10">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-purple-400"></span>
                <span className="h-3 w-3 rounded-full bg-pink-300"></span>
                <span className="h-3 w-3 rounded-full bg-white/40"></span>
              </div>

              <div className="space-y-4">
                {closingLines.map((line, index) => (
                  <p
                    key={line}
                    className={`why-unyfer-copy text-lg sm:text-2xl ${
                      index === closingLines.length - 1
                        ? "font-bold text-purple-300"
                        : "font-medium text-white"
                    }`}
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUnyferExists;
