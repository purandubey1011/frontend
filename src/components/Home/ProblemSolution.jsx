import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const problemPoints = [
  "Millions watch you, but no one really talks to you",
  "Engagement is high, connection is low",
  "Your time is valuable, but there is no structured access",
];

const solutionPoints = [
  "1:1 video calls & chats",
  "You set your availability",
  "You control how you engage",
];

const ProblemSolution = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".problem-solution-animate", {
        y: 28,
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative mx-auto w-[90vw] max-w-[1280px] py-14 sm:py-18"
    >
      <div className="absolute inset-0 -z-10">
        <div className="mx-auto h-full max-w-5xl rounded-[56px] bg-gradient-to-r from-purple-100/50 via-white to-pink-50/40 blur-3xl" />
      </div>

      <div className="overflow-hidden rounded-[32px] border border-purple-100 bg-white shadow-[0_28px_90px_rgba(126,58,242,0.08)]">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="border-b border-purple-100 px-6 py-10 sm:px-10 sm:py-12 lg:border-b-0 lg:border-r">
            <p className="problem-solution-animate mb-5 inline-flex rounded-full bg-red-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-red-500 sm:text-sm">
              Problem
            </p>

            <h3 className="problem-solution-animate text-2xl font-bold leading-snug text-gray-900 sm:text-4xl">
              Creators today are everywhere...
              <span className="block text-purple-600">but still distant.</span>
            </h3>

            <div className="mt-8 space-y-4">
              {problemPoints.map((point) => (
                <div
                  key={point}
                  className="problem-solution-animate flex items-start gap-3 rounded-2xl border border-gray-100 bg-[#faf7ff] px-4 py-4"
                >
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-purple-500"></span>
                  <p className="text-sm text-gray-700 sm:text-lg">{point}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-purple-700 to-fuchsia-600 px-6 py-10 text-white sm:px-10 sm:py-12">
            <div className="absolute -right-10 top-0 h-40 w-40 rounded-full bg-white/10 blur-2xl"></div>
            <div className="absolute -bottom-12 left-0 h-44 w-44 rounded-full bg-pink-300/20 blur-3xl"></div>

            <p className="problem-solution-animate relative z-10 mb-5 inline-flex rounded-full border border-white/20 bg-white/12 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white sm:text-sm">
              Solution
            </p>

            <h3 className="problem-solution-animate relative z-10 text-2xl font-bold leading-snug sm:text-4xl">
              Unyfer changes that.
            </h3>

            <p className="problem-solution-animate relative z-10 mt-5 max-w-xl text-sm leading-relaxed text-white/90 sm:text-xl">
              Give your audience something they have never had before -
              <span className="font-semibold text-white">
                {" "}your time, your attention, your presence.
              </span>
            </p>

            <div className="relative z-10 mt-8 space-y-4">
              {solutionPoints.map((point) => (
                <div
                  key={point}
                  className="problem-solution-animate flex items-start gap-3 rounded-2xl border border-white/18 bg-white/14 px-4 py-4 backdrop-blur-sm"
                >
                  <span className="mt-[0.45rem] h-2.5 w-2.5 shrink-0 rounded-full bg-pink-200 shadow-[0_0_16px_rgba(255,255,255,0.45)]"></span>
                  <p className="text-sm text-white sm:text-lg">{point}</p>
                </div>
              ))}
            </div>

            <p className="problem-solution-animate relative z-10 mt-8 text-lg font-semibold text-white sm:text-2xl">
              Simple. Personal. Powerful.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
