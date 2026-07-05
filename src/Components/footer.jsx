import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/asdf.png'


const Footer = () => {
  return (
    <footer className="bg-gray-950 border border-gray-700 rounded-xl w-full px-5 sm:px-10 lg:px-20 py-10">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

        {/* Brand Section */}
        <div className="lg:col-span-1">

          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="logo"
              className="w-8 h-8 object-contain"
            />

            <h1 className="text-xl sm:text-2xl font-semibold text-white">
              KAPIL
            </h1>
          </div>

          <p className="text-gray-500 text-sm sm:text-base mt-3 leading-relaxed">
            Building futuristic experiences
            <br />
            through code & creativity
          </p>
        </div>

        {/* Navigation */}
        <div className="border-l border-gray-700 pl-4">

          <p className="text-sm sm:text-base text-purple-500 font-semibold">
            NAVIGATION
          </p>

          <div className="flex flex-col gap-2 text-gray-400 text-sm mt-3">
            <Link to="/" className="hover:text-white transition">Home</Link>
            <Link to="/Work" className="hover:text-white transition">Work</Link>
            <Link to="/About" className="hover:text-white transition">About</Link>
            <Link to="/Contact" className="hover:text-white transition">Contact</Link>
          </div>
        </div>

        {/* Contact */}
        <div className="border-l border-gray-700 pl-4">

          <p className="text-sm sm:text-base text-purple-500 font-semibold">
            CONTACT
          </p>

          <div className="flex flex-col gap-2 text-gray-400 text-sm mt-3">
            <a href="#" className="hover:text-white transition">GitHub</a>
            <a href="#" className="hover:text-white transition">Email</a>
            <a href="#" className="hover:text-white transition">LinkedIn</a>
            <a href="#" className="hover:text-white transition">Instagram</a>
          </div>
        </div>

        {/* Status */}
        <div className="border-l border-gray-700 pl-4">

          <p className="text-sm sm:text-base text-purple-500 font-semibold">
            STATUS
          </p>

          <div className="flex items-center mt-3">
            <div className="h-2 w-2 bg-green-400 rounded-full"></div>
            <p className="text-gray-400 text-sm ml-2">
              Available for Work
            </p>
          </div>

          <p className="text-gray-500 text-sm mt-3 leading-relaxed">
            Let's create something extraordinary together
          </p>
        </div>

        {/* Terminal */}
        <div className="border border-gray-700 rounded-xl p-4">

          <div className="space-y-1 text-blue-400 text-sm">
            <p>&gt; stay curious</p>
            <p>&gt; keep building</p>
            <p>&gt; keep learning</p>
            <p>&gt; think creative</p>
          </div>

          <p className="text-gray-500 text-xs mt-4">
            designed with ❤️ using React
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;