import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const faqData = [
  {
    question: "What exactly does Unyfer help creators do?",
    answer:
      "Unyfer gives creators direct access to brand opportunities, expert guidance, collaboration requests, and growth insights — all in one place. No waiting, no guesswork, no middlemen. You get clarity on what’s working, what brands want, and how to grow faster.",
  },
  {
    question: "How soon will I start seeing opportunities after signing up?",
    answer:
      "Most creators start receiving relevant brand or expert connections within a few days, depending on their niche and category. Unyfer prioritizes quality over quantity, so every connection you receive is filtered, relevant, and worth your time.",
  },
  {
    question: "Do I have to pay to use Unyfer?",
    answer:
      "No. Signing up is free, and you can explore opportunities at no cost. We only offer optional premium features for creators who want deeper insights, advanced tools, or priority matchmaking — but they are not required to start.",
  },
  {
    question: "Is my data and profile safe on Unyfer?",
    answer:
      "Yes. Your analytics, contact details, and personal information are fully secure. Brands and experts only see what you intentionally share. We do not sell, misuse, or expose creator data — your privacy is our priority.",
  },
  {
    question: "Will Unyfer work for my specific niche?",
    answer:
      "Absolutely. Unyfer is built for creators across all niches — beauty, fashion, fitness, gaming, tech, travel, education, lifestyle, and more. Our system matches you based on your niche, audience type, and content style, ensuring you get relevant opportunities, not random ones.",
  },
];


const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const faqRefs = useRef([]);
  const headingRef = useRef(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    // Heading animation
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
        },
      }
    );

    // FAQ cards animation
    gsap.fromTo(
      faqRefs.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 75%",
        },
      }
    );
  }, []);

  return (
    <div className="bg-[#f8f4ff] py-24 px-6 md:px-20 text-gray-800">
      <h2
        ref={headingRef}
        className="text-3xl md:text-6xl font-medium text-center mb-10 text-black"
      >
        Frequently Asked Questions
      </h2>

      <div className="max-w-2xl mx-auto space-y-6">
        {faqData.map((item, index) => (
          <div
            key={index}
            ref={(el) => (faqRefs.current[index] = el)}
            className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
            >
              <span className="font-medium text-lg">{item.question}</span>
              <svg
                className={`w-5 h-5 transition-transform duration-200 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              className={`transition-all duration-300 ease-in-out ${
                openIndex === index
                  ? "max-h-40 opacity-100"
                  : "max-h-0 opacity-0"
              } overflow-hidden px-6 pb-2 text-gray-600`}
            >
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
