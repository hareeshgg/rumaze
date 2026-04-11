const Hero = () => {
  return (
    <div className="relative h-screen w-full flex items-end justify-start ">
      <h1 className="text-white text-5xl md:text-7xl lg:text-9xl pl-8 md:pl-24 lg:pl-28 pb-12">
        <span className="italic pl-4 md:pl-0"> Elegance</span>
        <br />
        <span className="md:pl-24 lg:pl-48">is not added</span> <br />
        <span className="pl-8 md:pl-8 lg:pl-12">
          but <span className="italic ">designed</span>{" "}
        </span>
      </h1>
      <p className="text-white  pb-12">
        YOU BUILD YOUR DREAM. <br />
        WE DESIGN THE REALITY.
      </p>
    </div>
  );
};

export default Hero;
