import React from "react";
import Herosection from "../Components/home/heroSection";
import Projects from "../Components/home/HomeProjects";
import LetsBuild from "../Components/home/LetsBuild";
import TechStack from "../Components/home/Techstack";


const Home = () => {
  return (
    <div className="w-full flex flex-col gap-12 px-4 sm:px-6 lg:px-10">

      {/* Hero */}
      <section>
        <Herosection />
      </section>

      {/* Projects */}
      <section>
        <Projects />
      </section>

      {/* Skills Section */}
      <section className="w-full border-2 border-gray-800 rounded-2xl p-5">
        <p className="text-white text-2xl sm:text-3xl font-semibold  mb-6">
          <span className="text-purple-500">#</span> Technologies
        </p>

        <div className="min-h-full">
          <TechStack/>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full">
        <p className="text-white text-2xl sm:text-3xl font-semibold mb-6">
          <span className="text-purple-500">#</span> About Me
        </p>

        <div className="min-h-60">
          {/* About Content */}
        </div>
      </section>

      {/* Contact */}
      <section>
        <LetsBuild />
      </section>

    </div>
  );
};

export default Home;