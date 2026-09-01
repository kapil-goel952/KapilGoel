```jsx
import React from "react";
import { Link } from "react-router-dom";
import Hero from "../../assets/hero.svg";

const stats = [
  {
    icon: "https://img.icons8.com/?size=100&id=tktxu35Z3Qh1&format=png&color=a855f7",
    alt: "projects",
    value: "15+",
    label: "Projects",
    size: "h-10 w-10",
  },
  {
    icon: "https://img.icons8.com/?size=100&id=999&format=png&color=a855f7",
    alt: "experience",
    value: "2+",
    label: "Years Learning",
    size: "h-10 w-10",
  },
  {
    icon: "https://img.icons8.com/?size=100&id=122581&format=png&color=a855f7",
    alt: "code",
    value: "10k+",
    label: "Lines of Code",
    size: "h-8 w-8",
  },
  {
    icon: "https://img.icons8.com/?size=100&id=8RdWP7lJ6Rir&format=png&color=a855f7",
    alt: "ideas",
    value: "∞",
    label: "Ideas Exploring",
    size: "h-10 w-10",
  },
];

const AboutHeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-gray-950 to-black border border-white/10 rounded-3xl px-6 lg:px-20 py-14 lg:py-20 shadow-[0_0_60px_rgba(168,85,247,0.08)]">
      
      <div className="absolute top-20 left-20 h-60 w-60 rounded-full bg-purple-600/10 blur-[120px]" />
      <div className="absolute bottom-10 right-10 h-60 w-60 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16">

        <div className="w-full lg:max-w-2xl text-white">

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Who{" "}
            <span className="bg-linear-to-r from-purple-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
              am I?
            </span>
          </h1>

          <p className="mt-4 text-lg md:text-xl text-gray-300 leading-relaxed">
            <span className="bg-linear-to-r from-purple-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
              I build, experiment and explore
            </span>
            <br />
            <span className="bg-linear-to-r from-purple-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
              technologies that inspire.
            </span>
          </p>

          <p className="mt-6 text-sm md:text-base text-gray-400 leading-8 max-w-xl">
            I'm a creative developer who loves turning complex ideas into
            immersive digital experiences. I enjoy working with modern
            technologies, hacking systems, building games, apps and futuristic
            interfaces.
          </p>

          <Link
            to="/work"
            className="inline-flex items-center justify-center mt-8 px-6 py-3 rounded-xl bg-linear-to-r from-purple-600 to-blue-500 text-white font-medium shadow-lg shadow-purple-500/20 hover:scale-105 transition-all duration-300"
          >
            View My Work
          </Link>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="border border-white/10 bg-white/2 backdrop-blur-md rounded-xl flex items-center p-4 hover:border-purple-500/40 hover:-translate-y-1 transition-all duration-300"
              >
                <img
                  src={stat.icon}
                  alt={stat.alt}
                  className={stat.size}
                />

                <div className="ml-4">
                  <p className="text-xl font-bold text-purple-500">
                    {stat.value}
                  </p>

                  <p className="text-gray-500 text-sm">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center shrink-0">
          <img
            src={Hero}
            alt="hero"
            className="w-full max-w-64 sm:max-w-80 lg:max-w-105 h-auto drop-shadow-[0_0_50px_rgba(168,85,247,0.25)]"
          />

          <div className="mt-5 flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/3 backdrop-blur-md">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />

            <p className="text-sm text-gray-400">
              currently working on{" "}
              <span className="font-semibold text-white">
                Portfolio
              </span>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutHeroSection;
