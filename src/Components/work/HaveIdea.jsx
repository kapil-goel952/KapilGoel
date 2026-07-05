import React from "react";
import { Link } from "react-router-dom";

const LetsBuild = () => {
  return (
    <section className="w-full border border-gray-700 rounded-xl py-10 px-6 sm:px-10 lg:px-20">


      {/* Card */}
      <div className="border border-gray-700 rounded-xl p-5 lg:p-6 bg-[#2c3036]">

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

          {/* Left */}
          <div className="flex items-center gap-4">

            <img
              src="https://img.icons8.com/?size=100&id=10250&format=png&color=9C27B0"
              alt="mail"
              className="h-10 w-10 sm:h-12 sm:w-12"
            />
    <div className="flex flex-col px-5">
      <p className="text-white text-base sm:text-lg lg:text-xl font-medium leading-snug">
              Have a idea in mind?
            </p>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              I'm always open to discussing new ideas, collaborations, creative
              projects, and exciting opportunities.
            </p>
    </div>
            
          </div>

         

          {/* Right Button */}
          <div>
            <Link
              to="/Contact"
              className="inline-block bg-linear-to-r from-purple-500 to-purple-700 px-5 py-2.5 rounded-lg text-sm sm:text-base text-white font-medium hover:scale-105 transition-all duration-300"
            >
              start a roject
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LetsBuild;