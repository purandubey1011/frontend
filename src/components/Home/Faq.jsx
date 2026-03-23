import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const faqData = [
  {
    question: "What does Unyfer do?",
    answer:
      "Unyfer allows creators to connect 1:1 with their audience through secure calls and chats. It is a direct, personal way to interact beyond content.",
  },
  {
    question: "Do I need brand deals to earn here?",
    answer:
      "No. Unyfer is independent of brands. Your audience connects with you directly with no intermediaries involved.",
  },
  {
    question: "Who can join Unyfer?",
    answer:
      "Creators with an engaged audience (5,000+ followers) who want to build deeper, more meaningful connections.",
  },
  {
    question: "Is this safe and private?",
    answer:
      "Yes. All interactions happen within a secure system designed to protect both creators and users.",
  },
  {
    question: "Why would my audience use this?",
    answer:
      "Because people do not just want to watch anymore. They want to connect, ask, learn, and experience you directly.",
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
    <div className="bg-[#f8f4ff] px-6 py-24 text-gray-800 md:px-20">
      <h2
        ref={headingRef}
        className="mb-10 text-center text-3xl font-medium text-black md:text-6xl"
      >
        Frequently Asked Questions
      </h2>

      <div className="mx-auto max-w-2xl space-y-6">
        {faqData.map((item, index) => (
          <div
            key={item.question}
            ref={(el) => (faqRefs.current[index] = el)}
            className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="flex w-full items-center justify-between px-6 py-4 text-left focus:outline-none"
            >
              <span className="text-lg font-medium">{item.question}</span>
              <svg
                className={`h-5 w-5 transition-transform duration-200 ${
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
              className={`overflow-hidden px-6 pb-2 text-gray-600 transition-all duration-300 ease-in-out ${
                openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}
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
