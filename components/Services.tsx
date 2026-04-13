import SplitText from "./SplitText";

const Services = () => {
  return (
    <div className="mt-24 space-y-8">
      <div className="pl-4 sm:pl-8 md:pl-12 lg:pl-16 xl:pl-20">
        <div>
          <SplitText
            text="SERVICES"
            className="block text-white"
            delay={50}
            tag="h1"
            textAlign="left"
            to={{ opacity: 1, y: 0, delay: 1.5 }}
          />
          <div className="lg:pl-52">
            <SplitText
              text="No compromise "
              className="block text-white text-4xl md:text-7xl lg:text-8xl xl:text-9xl"
              delay={50}
              tag="span"
              textAlign="left"
              to={{ opacity: 1, y: 0, delay: 1.5 }}
            />
            <div className="flex flex-row">
              <SplitText
                text="between"
                className="block text-white text-4xl md:text-7xl lg:text-8xl xl:text-9xl"
                delay={50}
                tag="span"
                textAlign="left"
                to={{ opacity: 1, y: 0, delay: 1.5 }}
              />
              <SplitText
                text="&nbsp;attractive"
                className="italic text-white text-4xl md:text-7xl lg:text-8xl xl:text-9xl"
                delay={50}
                tag="span"
                textAlign="left"
                to={{ opacity: 1, y: 0, delay: 1.5 }}
              />
            </div>
            <div className="flex flex-row">
              <SplitText
                text="and"
                className="block text-white text-4xl md:text-7xl lg:text-8xl xl:text-9xl"
                delay={50}
                tag="span"
                textAlign="left"
                to={{ opacity: 1, y: 0, delay: 1.5 }}
              />
              <SplitText
                text="&nbsp;smart"
                className="italic text-white text-4xl md:text-7xl lg:text-8xl xl:text-9xl"
                delay={50}
                tag="span"
                textAlign="left"
                to={{ opacity: 1, y: 0, delay: 1.5 }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
