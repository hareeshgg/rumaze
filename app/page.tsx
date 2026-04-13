import FAQ from "@/components/FAQ";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import React from "react";

const page = () => {
  return (
    <>
      <Hero />
      <Projects />
      <Services />
      <FAQ />
    </>
  );
};

export default page;
