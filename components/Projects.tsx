import SplitText from "./SplitText";
import { Skiper17, StickyCard002 } from "./ui/skiper-ui/skiper17";

const Projects = () => {
  return (
    <div className="max-w-8xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 mt-48 space-y-8">
      <div className="flex flex-row items-center justify-between">
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
        <div className="flex flex-row gap-2">
          <button className="bg-white text-black rounded-2xl">-</button>
          <button className="bg-white text-black rounded-2xl">+</button>
        </div>
      </div>
      <Skiper17 />
    </div>
  );
};

export default Projects;
