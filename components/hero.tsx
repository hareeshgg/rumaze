"use client";
import { useRef } from "react";
import SplitText from "./SplitText";

const Hero = () => {
  const subtitleRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative h-dvh w-full flex flex-col items-start justify-end xl:flex-row xl:items-end xl:justify-start">
      <h1 className="text-white text-5xl md:text-7xl lg:text-8xl xl:text-9xl pl-8 md:pl-24 lg:pl-28 pb-8 lg:pb-12">
        <SplitText
          text="Elegance"
          className="italic pl-4 md:pl-0"
          delay={100}
          tag="span"
          textAlign="left"
          trigger={subtitleRef}
        />
        <br />
        <SplitText
          text="is not added"
          className="md:pl-20 lg:pl-38 xl:pl-48"
          delay={100}
          tag="span"
          textAlign="left"
          to={{ opacity: 1, y: 0, delay: 0.5 }}
          trigger={subtitleRef}
        />
        <br />
        <span className="pl-8 md:pl-8 lg:pl-12">
          <SplitText
            text="but"
            delay={100}
            tag="span"
            textAlign="left"
            to={{ opacity: 1, y: 0, delay: 1.0 }}
            trigger={subtitleRef}
          />{" "}
          <SplitText
            text="designed"
            className="italic text-white"
            delay={100}
            tag="span"
            textAlign="left"
            to={{ opacity: 1, y: 0, delay: 1.2 }}
            trigger={subtitleRef}
          />
        </span>
      </h1>
      <div 
        ref={subtitleRef}
        className="text-sm md:text-base lg:text-lg text-white pl-16 md:pl-24 lg:pl-32 xl:pl-0 pb-4 lg:pb-16 xl:pb-16"
      >
        <SplitText
          text="YOU BUILD YOUR DREAM."
          className="block"
          delay={50}
          tag="p"
          textAlign="left"
          to={{ opacity: 1, y: 0, delay: 1.5 }}
        />
        <SplitText
          text="WE DESIGN THE REALITY."
          className="block"
          delay={50}
          tag="p"
          textAlign="left"
          to={{ opacity: 1, y: 0, delay: 1.8 }}
        />
      </div>
    </div>
  );
};

export default Hero;
