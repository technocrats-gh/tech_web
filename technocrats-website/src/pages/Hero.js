import React from "react";
import Robot from '../assets/images/RobortLG.png';
import "../styles/hero.css"

function Hero() {
  return (
    // parent div
    <>
      <div className="hidden md:hidden rectangles lg:flex">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <section id="home" className="container mt-14 md:flex flex-row justify-between items-center w-full">
        <div className="pt-1"></div>
        <div className="md:max-w-[50%] lg:max-w-[62%] mt-14 mr-12 mb-8">
          <img src={Robot} alt="hero" />
        </div>

        {/* text section */}
        <div className="text-center sm:text-left md:max-w-[40%]">
          <h1 className="font-bold text-4xl leading-[60px]">
            Meet the Trailblazers: Young Minds Shaping the Future
          </h1>
          <p className="mt-4 text-[18px] leading-[28px] font-normal italic wrapper p-2 rounded-2xl">
            Welcome to a world where innovation knows no bounds, and the future is forged by the hands of the young and the ambitious.
          </p>
        </div>
      </section>
    </>
  );
}

export default Hero;