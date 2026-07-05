
import React from "react";
import Hero from "../../assets/hero.svg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-gray-950 to-black border border-white/10 rounded-3xl px-6 lg:px-20 py-14 lg:py-20 shadow-[0_0_60px_rgba(168,85,247,0.08)]">

      {/* Background Glow */}
      <div className="absolute top-10 left-10 h-60 w-60 rounded-full bg-purple-600/10 blur-[120px]" />
      <div className="absolute bottom-10 right-10 h-60 w-60 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">

        {/* Left Section */}
        <div className="w-full max-w-2xl text-white">

          <h1 className="text-3xl md:text-4xl lg:text-[3rem] font-bold leading-tight">
            Let's build something{" "}
            <span className="text-purple-500">amazing </span>
            <span className="text-blue-500">together</span>
          </h1>

          <p className="mt-5 text-sm md:text-base text-gray-400 leading-7 max-w-xl">
            i'm always open to discussing new ideas collaborations or
            opportunities to be part of your vision and bring it to life.
          </p>

          {/* Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">

            <div className="border border-white/10 bg-white/2 backdrop-blur-md rounded-xl flex items-center p-4 hover:border-purple-500/40 hover:-translate-y-1 transition-all duration-300">

              <img
                src="https://img.icons8.com/?size=100&id=12623&format=png&color=a855f7"
                alt="mail"
                className="h-10 w-10"
              />
              <div className="ml-4">
                <p className="text-lg font-semibold text-purple-500">
                  Response time
                </p>

                <p className="text-sm text-gray-500">
                  Usually within 24h
                </p>
              </div>

            </div>

            <div className="border border-white/10 bg-white/2 backdrop-blur-md rounded-xl flex items-center p-4 hover:border-purple-500/40 hover:-translate-y-1 transition-all duration-300">

              <img
                src="https://img.icons8.com/?size=100&id=7880&format=png&color=a855f7"
                alt="availability"
                className="h-10 w-10"
              />

              <div className="ml-4">
                <p className="text-lg font-semibold text-purple-500">
                  Available For
                </p>

                <p className="text-sm text-gray-500">
                  Freelancing & Full-time
                </p>
              </div>

            </div>

          </div>
        </div>

        {/* Right Section */}
        <div className="flex justify-center items-center">

          <img
            src={Hero}
            alt="hero image"
            className="w-full max-w-64 sm:max-w-80 lg:max-w-105 h-auto drop-shadow-[0_0_50px_rgba(168,85,247,0.25)]"
          />

        </div>

      </div>
    </section>
  );
};

export default HeroSection;

