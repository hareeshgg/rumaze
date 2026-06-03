"use client";

import { useRef, useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import SplitText from "./SplitText";

const Projects = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const cards = [
    {
      id: 1,
      image: "/projects/img1.jpg",
    },
    {
      id: 2,
      image: "/projects/img2.jpg",
    },
    {
      id: 3,
      image: "/projects/img3.jpg",
    },
    {
      id: 4,
      image: "/projects/img4.jpg",
    },
    {
      id: 5,
      image: "/projects/img5.jpg",
    },
  ];

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 5);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", checkScroll);
      checkScroll();

      const resizeObserver = new ResizeObserver(() => checkScroll());
      resizeObserver.observe(el);

      return () => {
        el.removeEventListener("scroll", checkScroll);
        resizeObserver.disconnect();
      };
    }
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.6;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full mt-24 md:mt-32 lg:mt-48 pb-24 space-y-12 overflow-hidden">
      <div className="max-w-8xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 flex flex-row items-center justify-between">
        <h3 className="flex items-center justify-center gap-4 text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          <SplitText
            text="Our"
            className="text-white"
            delay={50}
            tag="p"
            textAlign="left"
            to={{ opacity: 1, y: 0, delay: 0.5 }}
          />
          <SplitText
            text="works"
            className="text-white italic"
            delay={50}
            tag="span"
            textAlign="left"
            to={{ opacity: 1, y: 0, delay: 0.5 }}
          />
        </h3>

        {/* Carousel Navigation Buttons */}
        <div className="flex flex-row gap-4">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center border border-white/20 rounded-full text-white transition-all hover:bg-white hover:text-black hover:border-white disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
            aria-label="Previous Project"
          >
            <ArrowLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center border border-white/20 rounded-full text-white transition-all hover:bg-white hover:text-black hover:border-white disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
            aria-label="Next Project"
          >
            <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>
      </div>

      {/* Carousel Component */}
      <div
        ref={scrollRef}
        className="w-full flex flex-row gap-8 overflow-x-auto snap-x snap-mandatory scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {/* Left padding spacer */}
        <div className="shrink-0 snap-start w-4 sm:w-8 md:w-12 lg:w-16 xl:w-[calc(5rem+max(0px,(100vw-90rem)/2))]" />

        {cards.map((card) => (
          <div
            key={card.id}
            className="shrink-0 snap-start w-[95vw] sm:w-[60vw] md:w-[50vw] lg:w-[40vw] aspect-square relative group"
          >
            <img
              src={card.image}
              alt={`Project ${card.id}`}
              className="object-cover w-full h-full"
            />
          </div>
        ))}

        {/* Right padding spacer */}
        <div className="shrink-0 snap-start w-4 sm:w-8 md:w-12 lg:w-16 xl:w-[calc(5rem+max(0px,(100vw-90rem)/2))]" />
      </div>
    </div>
  );
};

export default Projects;
