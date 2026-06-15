"use client"

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SplitText from "./SplitText";
import { useState } from "react";
import { div } from "three/src/nodes/math/OperatorNode.js";

const Services = () => {

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const services = [
    {
      id: 1,
      title: "Residential Interior Design",
      items: [
        "Space planning",
        "Design concepts",
        "Material selection",
        "Furniture and décor guidance"
      ]
    },
    {
      id: 2,
      title: "3D Visualization",
      items: [
        "Mood boards",
        "3D renders",
        "Material palettes",
        "Design detailing"
      ]
    },
    {
      id: 3,
      title: "Turnkey Interior Execution",
      items: [
        "Site supervision",
        "Vendor coordination",
        "Quality control",
        "Project handover"
      ]
    }
  ];

  return (
    <div className='max-w-8xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 mt-24 md:mt-32 lg:mt-48 pb-8 md:pb-12 lg:pb-16 xl:pb-20' id="services">
      <div>
        <div>
          <SplitText
            text="SERVICES"
            className="block text-white"
            delay={50}
            tag="h1"
            textAlign="left"
            to={{ opacity: 1, y: 0, delay: 0.5 }}
          />
          <h1 className="lg:pl-52 text-4xl md:text-7xl lg:text-8xl xl:text-9xl">
            <SplitText
              text="No compromise "
              className="block text-white"
              delay={50}
              tag="span"
              textAlign="left"
              to={{ opacity: 1, y: 0, delay: 0.5 }}
            />
            <div className="flex flex-row items-baseline">
              <SplitText
                text="between"
                className="block text-white"
                delay={50}
                tag="span"
                textAlign="left"
                to={{ opacity: 1, y: 0, delay: 0.5 }}
              />
              <SplitText
                text="&nbsp;attractive"
                className="block text-white italic"
                delay={50}
                tag="span"
                textAlign="left"
                to={{ opacity: 1, y: 0, delay: 0.5 }}
              />
            </div>
            <div className="flex flex-row items-center">
              <SplitText
                text="and"
                className="block text-white"
                delay={50}
                tag="span"
                textAlign="left"
                to={{ opacity: 1, y: 0, delay: 0.5 }}
              />
              <SplitText
                text="&nbsp;smart"
                className="block text-white italic"
                delay={50}
                tag="span"
                textAlign="left"
                to={{ opacity: 1, y: 0, delay: 0.5 }}
              />
            </div>
          </h1>
        </div>
      </div>
      <div className="mt-12 md:mt-16 lg:20 xl:24">
        <div className="xl:max-w-5xl mx-auto">
          <div className="flex flex-col items-center xl:items-end justify-center">
            <div className="space-y-4">
              {services.map((service, index) => (
                <div key={service.id} className="overflow-hidden">
                  <button
                    type="button"
                    onClick={() => toggleAccordion(index)}
                    className="flex flex-row items-center justify-between w-full"
                  >
                    <div className="flex flex-row items-center gap-2">
                      <SplitText
                        text={"0" + service.id}
                        className="text-white italic text-sm md:text-lg lg:text-xl xl:text-2xl"
                        delay={50}
                        tag="p"
                        textAlign="left"
                        to={{ opacity: 1, y: 0, delay: 0.5 }}
                      />
                      <SplitText
                        text={service.title}
                        className="block text-white text-xl md:text-3xl lg:text-4xl xl:text-5xl"
                        delay={50}
                        tag="p"
                        textAlign="left"
                        to={{ opacity: 1, y: 0, delay: 0.5 }}
                      />
                    </div>

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
                          <ul className="text-white font-normal text-md md:text-xl space-y-4 leading-relaxed">
                            {service.items.map((item, index) => (
                              <li className="flex flex-row mt-4 gap-2" key={index}>
                                <span className="italic">0{index + 1}.</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;