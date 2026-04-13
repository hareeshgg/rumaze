"use client";

import React, { useState } from "react";
import SplitText from "./SplitText";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    question: "What interior design services do you offer?",
    answer:
      "We provide a comprehensive range of luxury interior design services, including full-scale renovations, architectural space planning, bespoke furniture design, and meticulous curation of artwork and accessories.",
  },
  {
    question: "Do you handle international projects?",
    answer:
      "Yes, we operate globally. From metropolitan penthouses to coastal retreats, our team is equipped to manage logistics and design execution across international borders.",
  },
  {
    question: "What is your design philosophy?",
    answer:
      "Our philosophy revolves around 'intelligent elegance'. We believe that a space should not only be visually stunning but also intuitively functional and deeply reflective of the occupant's soul.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on complexity. A single room may take 4-8 weeks, while full residential renovations typically span 6-12 months from concept to completion.",
  },
  {
    question: "How do you manage project budgets?",
    answer:
      "Transparency is key. We provide detailed cost estimates at every phase and manage the procurement process rigorously to ensure design integrity is maintained within your financial parameters.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="relative z-20 mt-48 mb-48 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <div className="flex flex-row items-baseline mb-4">
            <SplitText
              text="Got"
              className="italic text-white text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-light"
              delay={100}
              tag="span"
              textAlign="left"
              animateOnLoad={true}
            />

            <SplitText
              text="&nbsp;question?"
              className="text-white text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-light tracking-tighter"
              delay={150}
              tag="span"
              textAlign="left"
              animateOnLoad={true}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-1 relative z-30">
          {faqData.map((item, index) => (
            <div key={index} className="overflow-hidden group">
              <button
                type="button"
                onClick={() => toggleAccordion(index)}
                className="w-full py-4 md:py-5 flex items-center justify-between text-left transition-all duration-300 hover:pl-4 cursor-pointer relative z-40"
              >
                <span className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light text-white/90 group-hover:text-white transition-colors duration-300">
                  {item.question}
                </span>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="text-white/40"
                >
                  <ChevronDown size={32} strokeWidth={1} />
                </motion.div>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="pb-4 md:pb-8 pl-0 md:pl-16 max-w-3xl">
                      <p className="text-white/60 text-lg md:text-xl leading-relaxed font-light">
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
