import React from "react";
import Hive from "./Hive";

function OurExperts() {
  return (
    <section className="container mt-28 text-center w-full">
      <h2 className="text-[32px] font-bold ">Entrepreneurs of Tomorrow</h2>
      <p className="mt-2 max-w-xl m-auto">
        Here, we spotlight the stories, achievements, and aspirations of these young professionals.
      </p>

      <div className="mx-auto mt-8 max-w-5xl grid md:gap-8 grid-cols-1 md:grid-cols-2">
        <div className="w-full">
          <Hive />
        </div>
        <div className="flex items-center">
          <div className="wrapper rounded-2xl">
            <p className="mb-4 text-[18px] leading-[28px] font-normal italic p-2 ">
              We are not just shaping the world; We are shaping the future. We embrace the spirit of innovation, diversity, and determination
              in creating the world of tomorrow.
            </p>
            <p className="mb-4 text-[18px] leading-[28px] font-normal italic">
              - Technocrats
            </p>
          </div>
        </div>
      </div>

      <button className="primary-button mt-20">Contact our Expert</button>
    </section>
  );
}

export default OurExperts;
