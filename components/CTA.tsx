"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const CTA = () => {
  const circleRef = useRef<HTMLDivElement>(null);
  const textPathRef = useRef<SVGTextPathElement>(null);

  useGSAP(
    () => {
      if (circleRef.current) {
        gsap.to(circleRef.current, {
          rotation: 360,
          duration: 12,
          repeat: -1,
          ease: "none",
        });
      }
    },
    { scope: circleRef },
  );

  return (
    <div
      className="fixed bottom-6 right-6 lg:bottom-12 lg:right-12 z-50 group cursor-pointer"
      onClick={() => window.open("https://calendly.com", "_blank")} // Placeholder link
    >
      <div
        ref={circleRef}
        className="relative h-18 w-18 lg:h-24 lg:w-24 xl:h-32 xl:w-32 flex items-center justify-center bg-white rounded-full shadow-2xl transition-transform duration-500 group-hover:scale-110"
      >
        {/* Circular Text */}
        <svg
          viewBox="0 0 100 100"
          className="absolute inset-0 w-full h-full p-2"
        >
          <defs>
            <path
              id="circlePath"
              d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
            />
          </defs>
          <text className="text-[10px] lg:text-[11px] xl:text-[12px] font-bold uppercase tracking-[0.2em] fill-black">
            <textPath href="#circlePath" startOffset="0%">
              Book A Call • Book A Call •
            </textPath>
          </text>
        </svg>

        {/* Center Icon (Custom Asterisk) */}
        <div className="absolute inset-0 flex items-center justify-center p-8 lg:p-10">
          <svg
            viewBox="0 0 24 24"
            className="w-full h-full fill-black transition-transform duration-500 group-hover:rotate-90"
          >
            <path
              d="M12 0L14.5 9H24L16.5 14.5L19 23.5L12 18L5 23.5L7.5 14.5L0 9H9.5L12 0Z"
              className="hidden"
            />{" "}
            {/* Reference star */}
            {/* Creating the thick 6-point asterisk from image */}
            <g transform="translate(12, 12)">
              {[0, 60, 120, 180, 240, 300].map((angle) => (
                <path
                  key={angle}
                  d="M -1.5 0 C -1.5 -10, 1.5 -10, 1.5 0 L 1.5 8 C 1.5 10, -1.5 10, -1.5 8 Z"
                  transform={`rotate(${angle})`}
                />
              ))}
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CTA;
