
import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/asdf.png";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Work", path: "/Work" },
  { name: "About", path: "/About" },
  { name: "Contact", path: "/Contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getLinkClass = ({ isActive }) =>
    `block rounded-lg px-3 py-2 text-sm transition-colors ${
      isActive
        ? "bg-purple-500/10 font-medium text-purple-300"
        : "text-gray-400 hover:bg-white/5 hover:text-white"
    }`;

  return (
    <header className="sticky top-0 z-50 rounded-b-xl border-b border-gray-800 bg-[#16171c]/95 text-white backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 sm:px-8 sm:py-4">
        {/* Brand */}
        <NavLink
          to="/"
          onClick={() => setIsMenuOpen(false)}
          className="flex shrink-0 items-center gap-3"
          aria-label="Kapil Goel - Home"
        >
          <img
            src={logo}
            alt=""
            className="h-9 w-9 object-contain sm:h-10 sm:w-10"
          />

          <span className="text-lg font-semibold tracking-wide sm:text-xl">
            Kapil<span className="text-purple-400">.</span>
          </span>
        </NavLink>

        {/* Desktop navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-2 sm:flex"
        >
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              end={item.path === "/"}
              className={getLinkClass}
            >
              {({ isActive }) => (
                <>
                  <span
                    className={
                      isActive
                        ? "mr-1 text-purple-400"
                        : "mr-1 text-gray-600"
                    }
                  >
                    #
                  </span>
                  {item.name}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-lg border border-gray-700 px-3 py-2 text-sm text-gray-200 transition-colors hover:border-purple-500 hover:bg-white/5 sm:hidden"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
        >
          <span aria-hidden="true" className="text-lg leading-none">
            {isMenuOpen ? "×" : "☰"}
          </span>
          {isMenuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="border-t border-gray-800 px-5 pb-4 pt-3 sm:hidden"
        >
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                end={item.path === "/"}
                className={getLinkClass}
                onClick={() => setIsMenuOpen(false)}
              >
                {({ isActive }) => (
                  <>
                    <span
                      className={
                        isActive
                          ? "mr-2 text-purple-400"
                          : "mr-2 text-gray-600"
                      }
                    >
                      #
                    </span>
                    {item.name}
                  </>
                )}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
