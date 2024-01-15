import React from "react";
import { Computer, Microchip, Code } from "../components/Icons";
import Feature from "../components/FeatureItem";

function Features() {
  return (
    <section id="services" className="container mt-24 flex flex-col items-center">
      <h2 className="text-[32px] font-bold text-center sm:text-left">
        What We Specialize In
      </h2>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-12 items-center">

        <Feature
          Icon={Code}
          title="Web & App Development"
          iconBgColor="#02897A"
          description="We create websites and web applications that are accessible via the internet to solve everyday problems facing various industries and personal needs"
        />
        <Feature
          Icon={Computer}
          iconBgColor="#4D8DFF"
          title="Data Analysis & Machine Learning"
          description="We use several iterative phases, including identifying the business question, collecting raw data sets, cleaning the data, analyzing the data, and interpreting the results of the analysis"
        />
        <Feature
          Icon={Microchip}
          iconBgColor="#740A76"
          title="Mechatronics"
          description="we implore  a combination of robotics, computer science, telecommunications, systems, control, and product engineering to help create solutions for our customers"
        />
      </div>
    </section>
  );
}

export default Features;
