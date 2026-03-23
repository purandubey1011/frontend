import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Calltoaction = () => {
  const sectionRef = useRef(null);
  const textRef = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    const ctx = gsap.context(() => {
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
    <div ref={sectionRef} className="relative w-full px-4 py-12">
      <div
        className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center overflow-hidden rounded-2xl bg-cover bg-center px-6 py-20 text-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,0,0,0.34), rgba(0,0,0,0.34)), url("https://ik.imagekit.io/b9tt0xvd7/unfyer/imgx.jpg")',
        }}
      >
        <div className="relative z-10 text-white">
          <h1
            ref={(el) => (textRef.current[0] = el)}
            className="mb-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl"
          >
            Your audience already follows you.
            <br className="hidden sm:block" />
            Now let them connect with you.
          </h1>
            
          <button
            ref={(el) => (textRef.current[2] = el)}
            onClick={() => {
              navigate("/", { replace: false });
              setTimeout(() => {
                document.getElementById("hero")?.scrollIntoView({
                  behavior: "smooth",
                });
              }, 100);
            }}
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#7e3af2] shadow-md transition duration-300 hover:scale-105 sm:text-base"
          >
            Download Unyfer
          </button>

          <p
            ref={(el) => (textRef.current[3] = el)}
            className="mt-4 text-sm font-medium text-white/90 sm:text-base"
          >
            Available on iOS & Android
          </p>
        </div>
      </div>
    </div>
  );
};

export default Calltoaction;
