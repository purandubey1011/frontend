import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Howwehelp = () => {
  const section1Image = useRef(null);
  const section1Text = useRef(null);
  const section2Image = useRef(null);
  const section2Text = useRef(null);

  useEffect(() => {
    const sections = [
      { image: section1Image.current, text: section1Text.current, fromImgX: -100, fromTextX: 100 },
      { image: section2Image.current, text: section2Text.current, fromImgX: 100, fromTextX: -100 },
    ];

    sections.forEach(({ image, text, fromImgX, fromTextX }) => {
      gsap.fromTo(
        image,
        { opacity: 0, x: fromImgX },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: image,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        text,
        { opacity: 0, x: fromTextX },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: text,
            start: "top 80%",
          },
        }
      );
    });
  }, []);

  return (
    <div className="bg-[#fff6fa] py-16 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">How can we help you?</h2>

      {/* Section 1 */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-24 mb-20 w-[90vw]">
        <img
          ref={section1Image}
          src="https://ik.imagekit.io/b9tt0xvd7/unfyer/bg1.jpg?updatedAt=1754546040046"
          alt="Tired of Begging Brands"
          className="rounded-[1.2vw] w-[90vw] md:w-[26vw] max-w-[360px] h-[60vh]"
        />
        <div ref={section1Text} className="text-center md:text-left max-w-md">
          <h3 className="text-2xl font-semibold mb-4">Tired of Begging Brands?</h3>
          <ul className="text-gray-700 mb-6 space-y-1">
            <li>- Brand deals are unpredictable</li>
            <li>- You don’t own your income</li>
            <li>- Constant rejection & rates negotiation</li>
          </ul>
          <button className="px-6 py-2 rounded-full text-sm font-medium bg-[#f1e2ff] text-[#8e3cf7] border border-[#e0caff]">
            Let’s try With Us
          </button>
        </div>
      </div>

      {/* Section 2 */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-12 md:gap-24 w-[90vw]">
        <div ref={section2Text} className="text-center md:text-left max-w-md">
          <h3 className="text-2xl font-semibold mb-4">
            Talk to your real fans. Earn <br /> on your terms
          </h3>
          <ul className="text-gray-700 mb-6 space-y-1">
            <li>- Set your own rates</li>
            <li>- Talk 1-on-1 with fans securely</li>
            <li>- Private. Premium. Passive.</li>
          </ul>
          <button className="px-6 py-2 rounded-full text-sm font-medium bg-[#f1e2ff] text-[#8e3cf7] border border-[#e0caff]">
            Let’s try With Us
          </button>
        </div>
        <img
          ref={section2Image}
          src="https://ik.imagekit.io/b9tt0xvd7/Falverra/unyfer/UNYFER01_M45Q6xrN5.jpeg"
          alt="Talk to real fans"
          className="rounded-[1.2vw] w-[70vw] md:w-[23vw] h-[60vh] bg-cover"
        />
      </div>
    </div>
  );
};

export default Howwehelp;
