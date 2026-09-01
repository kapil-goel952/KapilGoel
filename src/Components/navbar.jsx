
import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/asdf.png";

const Navbar = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Work", path: "/Work" },
    { name: "About", path: "/About" },
    { name: "Contact", path: "/Contact" },
  ];

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
            Kapil
          </h1>
        </div>

        {/* Navigation */}
        <nav className="hidden sm:flex items-center gap-6 text-sm text-gray-400">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "text-white font-medium"
                  : "hover:text-white transition"
              }
            >
              <span className="text-purple-500 mr-1">#</span>
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Mobile hint */}
        <div className="sm:hidden text-xs text-gray-400">
          Menu
        </div>

      </div>
    </header>
  );
};

export default Navbar;
