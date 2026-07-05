import React from "react";
import Hero from "../../assets/hero.svg";

const HeroSection = () => {
  return (
    <div className="bg-gray-950 border border-gray-800 rounded-xl flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-14 w-full overflow-hidden">

      {/* Left Section */}
      <div className="text-white max-w-xl">

        <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-snug tracking-wide">
          Kapil a{" "}
          <span className="text-purple-500">Creative Developer</span>{" "}
          focused on building{" "}
          <span className="text-purple-500">Immersive</span>{" "}
          and{" "}
          <span className="text-blue-500">Meaningful Experiences</span>
        </p>

        <p className="mt-5 text-sm sm:text-base text-gray-400 leading-relaxed">
          Transforming ideas into meaningful and interactive experiences through
          clean design and modern development.
        </p>

        <button className="mt-6 bg-[#2c3036] border border-purple-500 text-sm text-white px-4 py-2 hover:bg-purple-500 hover:text-black transition-all duration-300 rounded-md">
          Contact Me
        </button>
      </div>

      {/* Right Section */}
      <div className="mt-12 lg:mt-0 flex flex-col items-center">

        <img
          src={Hero}
          alt="hero image"
          className="w-60 sm:w-80 lg:w-105 h-auto"
        />

        <div className="border border-purple-500 flex items-center mt-4 w-fit px-3 py-2 rounded-md">

          <div className="w-2.5 h-2.5 bg-purple-500 mr-2 rounded-full"></div>

          <p className="text-gray-400 text-xs sm:text-sm">
            currently working on{" "}
            <span className="font-medium text-white">Portfolio</span>
          </p>

        </div>

      </div>
    </div>
  );
};

export default HeroSection;