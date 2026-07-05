import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from '../assets/asdf.png'

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-[#282c33]/90 backdrop-blur-md rounded-b-xl text-white border-b border-gray-800">

      <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-20 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="logo"
            className="w-10 h-10 object-contain"
          />

          <h1 className="text-lg sm:text-xl font-semibold tracking-wide">
            Portfolio
          </h1>
        </div>

        {/* Navigation */}
        <nav className="hidden sm:flex items-center gap-6 text-sm text-gray-400">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-white font-medium"
                : "hover:text-white transition"
            }
          >
            <span className="text-purple-500 mr-1">#</span>
            Home
          </NavLink>

          <NavLink
            to="/Work"
            className={({ isActive }) =>
              isActive
                ? "text-white font-medium"
                : "hover:text-white transition"
            }
          >
            <span className="text-purple-500 mr-1">#</span>
            Work
          </NavLink>

          <NavLink
            to="/About"
            className={({ isActive }) =>
              isActive
                ? "text-white font-medium "
                : "hover:text-white transition"
            }
          >
            <span className="text-purple-500 mr-1">#</span>
            About
          </NavLink>

          <NavLink
            to="/Contact"
            className={({ isActive }) =>
              isActive
                ? "text-white font-medium"
                : "hover:text-white transition"
            }
          >
            <span className="text-purple-500 mr-1">#</span>
            Contact
          </NavLink>
        </nav>

        {/* Mobile hint (optional simple fallback) */}
        <div className="sm:hidden text-xs text-gray-400">
          Menu
        </div>

      </div>
    </header>
  );
};

export default Navbar;