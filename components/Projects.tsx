import SplitText from "./SplitText";
import { Skiper17, StickyCard002 } from "./ui/skiper-ui/skiper17";

const Projects = () => {
  return (
    <div className="mt-48 space-y-8">
      <div className="flex flex-row items-center justify-between pl-4 sm:pl-8 md:pl-12 lg:pl-16 xl:pl-20">
        <div className="flex">
          <SplitText
            text="Our"
            className="text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
            delay={50}
            tag="p"
            textAlign="left"
            to={{ opacity: 1, y: 0, delay: 0.5 }}
          />
          <SplitText
            text="&nbsp;works"
            className="italic text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
            delay={50}
            tag="span"
            textAlign="left"
            to={{ opacity: 1, y: 0, delay: 0.5 }}
          />
        </div>
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
