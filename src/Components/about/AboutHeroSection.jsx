
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
    <section
      className="
        relative overflow-hidden
        rounded-3xl
        border border-white/10
        bg-linear-to-b from-gray-950 to-black
        px-6 py-14
        shadow-[0_0_60px_rgba(168,85,247,0.08)]
        lg:px-20 lg:py-20
      "
    >
      {/* Background Glow */}
      <div
        className="
          absolute left-20 top-20
          h-60 w-60
          rounded-full
          bg-purple-600/10
          blur-[120px]
        "
      />

      <div
        className="
          absolute bottom-10 right-10
          h-60 w-60
          rounded-full
          bg-blue-500/10
          blur-[120px]
        "
      />

      {/* Main Content */}
      <div
        className="
          relative z-10
          flex flex-col items-center
          justify-between gap-16
          lg:flex-row
        "
      >
        {/* Left Content */}
        <div className="w-full text-white lg:max-w-2xl">
          <h1 className="text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
            Who{" "}
            <span className="bg-linear-to-r from-purple-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
              am I?
            </span>
          </h1>

          <p className="mt-4 text-lg leading-relaxed text-gray-300 md:text-xl">
            <span className="bg-linear-to-r from-purple-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
              I build, experiment and explore
            </span>

            <br />

            <span className="bg-linear-to-r from-purple-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
              technologies that inspire.
            </span>
          </p>

          <p className="mt-6 max-w-xl text-sm leading-8 text-gray-400 md:text-base">
            I'm a creative developer who loves turning complex ideas into
            immersive digital experiences. I enjoy working with modern
            technologies, hacking systems, building games, apps and futuristic
            interfaces.
          </p>

          {/* CTA */}
          <Link
            to="/work"
            className="
              mt-8 inline-flex
              items-center justify-center
              rounded-xl
              bg-linear-to-r from-purple-600 to-blue-500
              px-6 py-3
              font-medium text-white
              shadow-lg shadow-purple-500/20
              transition-all duration-300
              hover:scale-105
            "
          >
            View My Work
          </Link>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="
                  flex items-center
                  rounded-xl
                  border border-white/10
                  bg-white/2
                  p-4
                  backdrop-blur-md
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-purple-500/40
                "
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

                  <p className="text-sm text-gray-500">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Content */}
        <div className="flex shrink-0 flex-col items-center">
          <img
            src={Hero}
            alt="hero"
            className="
              h-auto w-full
              max-w-64
              drop-shadow-[0_0_50px_rgba(168,85,247,0.25)]
              sm:max-w-80
              lg:max-w-105
            "
          />

          {/* Current Project */}
          <div
            className="
              mt-5
              flex items-center gap-3
              rounded-full
              border border-white/10
              bg-white/3
              px-4 py-2
              backdrop-blur-md
            "
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />

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