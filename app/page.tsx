import FAQ from "@/components/FAQ";
import Hero from "@/components/hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

const page = () => {
  return (
    <>
      <Hero />
      <Projects />
      <Services />
      <Testimonials />
      <FAQ />
    </>
  );
};

export default page;
