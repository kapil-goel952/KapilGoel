import React from "react";
import Hero from "../../assets/hero.svg";

const Herosection = () => {
  return (
    <div className="bg-gray-950 border border-gray-800 rounded-xl flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-14 w-full font-sans">

      {/* Left Section */}
      <div className="text-white w-full lg:max-w-2xl">

        {/* Heading */}
        <p className="text-2xl font-black sm:text-3xl lg:text-4xl leading-snug  tracking-wide">
          Projects that
          <br />
          <span className="text-purple-500">reflect ideas,</span>
          <br />
          code & <span className="text-blue-500">creativity</span>
        </p>

        {/* Subtext */}
        <p className="pt-5 text-sm sm:text-base text-gray-400 leading-relaxed tracking-wide">
          A collection of digital experiences, applications and experiments I
          have built with passion and precision.
        </p>

        {/* Button */}
        <button className="mt-5 bg-[#2c3036] border border-purple-500 text-sm text-white px-4 py-2 hover:bg-purple-500 hover:text-black transition-all duration-300 rounded-md">
          View My Work !!
        </button>

        {/* Stats */}
        <div className="flex flex-wrap gap-4 mt-7">

          {/* Card 1 */}
          <div className="border border-gray-700 rounded-lg flex items-center p-3 flex-1 min-w-52 hover:border-purple-500 transition-all duration-300">
            <img
              src="https://img.icons8.com/?size=100&id=tktxu35Z3Qh1&format=png&color=a855f7"
              alt="projects"
              className="h-8 w-8"
            />
            <div className="ml-3">
              <p className="text-lg text-purple-500 font-semibold">15+</p>
              <p className="text-xs text-gray-500">Projects</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="border border-gray-700 rounded-lg flex items-center p-3 flex-1 min-w-52 hover:border-purple-500 transition-all duration-300">
            <img
              src="https://img.icons8.com/?size=100&id=999&format=png&color=a855f7"
              alt="experience"
              className="h-8 w-8"
            />
            <div className="ml-3">
              <p className="text-lg text-purple-500 font-semibold">2+</p>
              <p className="text-xs text-gray-500">Years Learning</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="border border-gray-700 rounded-lg flex items-center p-3 flex-1 min-w-52 hover:border-purple-500 transition-all duration-300">
            <img
              src="https://img.icons8.com/?size=100&id=122581&format=png&color=a855f7"
              alt="code"
              className="h-7 w-7"
            />
            <div className="ml-3">
              <p className="text-lg text-purple-500 font-semibold">10k+</p>
              <p className="text-xs text-gray-500">Lines of Code</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="border border-gray-700 rounded-lg flex items-center p-3 flex-1 min-w-52 hover:border-purple-500 transition-all duration-300">
            <img
              src="https://img.icons8.com/?size=100&id=8RdWP7lJ6Rir&format=png&color=a855f7"
              alt="ideas"
              className="h-8 w-8"
            />
            <div className="ml-3">
              <p className="text-lg text-purple-500 font-semibold">∞</p>
              <p className="text-xs text-gray-500">Ideas Exploring</p>
            </div>
          </div>

        </div>
      </div>

      {/* Right Section */}
      <div className="mt-10 lg:mt-0 flex flex-col items-center shrink-0 w-full lg:w-auto">

        <img
          src={Hero}
          alt="hero image"
          className="w-full max-w-60 sm:max-w-80 lg:max-w-105 h-auto"
        />

        <div className="border border-purple-500 flex items-center mt-4 px-3 py-2 rounded-md">

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

export default Herosection;