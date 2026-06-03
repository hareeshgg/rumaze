import SplitText from "./SplitText";

const Services = () => {
  const services = [
    { id: 1, title: "Branding" },
    { id: 2, title: "Product Design" },
    { id: 3, title: "MVP Design" },
    { id: 4, title: "Web Design" },
    { id: 5, title: "Webflow Development" },
    { id: 6, title: "Custom Solutions" },
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
              {services.map((service) => (
                <div
                  key={service.id}
                  className="flex flex-row gap-2 items-center"
                >
                  <SplitText
                    text={"0" + service.id}
                    className="text-white italic text-md md:text-lg lg:text-xl xl:text-2xl"
                    delay={50}
                    tag="p"
                    textAlign="left"
                    to={{ opacity: 1, y: 0, delay: 0.5 }}
                  />
                  <SplitText
                    text={service.title}
                    className="block text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
                    delay={50}
                    tag="p"
                    textAlign="left"
                    to={{ opacity: 1, y: 0, delay: 0.5 }}
                  />
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
