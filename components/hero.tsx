const Hero = () => {
  return (
    <div className="relative h-screen w-full flex flex-col items-start justify-end xl:flex-row xl:items-end xl:justify-start ">
      <h1 className="text-white text-5xl md:text-7xl lg:text-8xl xl:text-9xl pl-8 md:pl-24 lg:pl-28 pb-8 lg:pb-12">
        <span className="italic pl-4 md:pl-0"> Elegance</span>
        <br />
        <span className="md:pl-20 lg:pl-38 xl:pl-48">is not added</span> <br />
        <span className="pl-8 md:pl-8 lg:pl-12">
          but <span className="italic ">designed</span>{" "}
        </span>
      </h1>
      <p className="text-sm md:text-base lg:text-lg text-white pl-16 md:pl-24 lg:pl-32 xl:pl-0 pb-4 lg:pb-16 xl:pb-8">
        YOU BUILD YOUR DREAM. <br />
        WE DESIGN THE REALITY.
      </p>
    </div>
  );
};

export default Hero;
