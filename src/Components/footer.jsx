
import { Link } from "react-router-dom";
import logo from "../assets/asdf.png";

const navigationLinks = [
  { label: "Home", to: "/" },
  { label: "Work", to: "/Work" },
  { label: "About", to: "/About" },
  { label: "Contact", to: "/Contact" },
];

const projectLinks = [
  {
    label: "Notes Assistant AI",
    href: "https://notes-assistance-ai.streamlit.app/",
  },
  {
    label: "KapilOS",
    href: "https://github.com/kapil-goel952/KapilOS",
  },
  {
    label: "React Native",
    href: "https://github.com/kapil-goel952/React-Native",
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-6 w-full border-t border-gray-800 bg-gray-950 px-5 py-10 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Main footer */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr]">
          {/* Brand */}
          <div>
            <Link
              to="/"
              aria-label="Kapil Goel home"
              className="inline-flex items-center gap-3"
            >
              <img
                src={logo}
                alt=""
                className="h-10 w-10 object-contain"
              />

              <span className="text-xl font-semibold tracking-wide text-white">
                Kapil<span className="text-purple-400">.</span>
              </span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-7 text-gray-400">
              A developer and BCA student learning through practical
              projects, exploring new technologies, and turning ideas
              into working software.
            </p>

            <a
              href="https://github.com/kapil-goel952"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-purple-400 transition-colors hover:text-purple-300"
            >
              GitHub Profile
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-white">
              Navigation
            </h2>

            <nav aria-label="Footer navigation" className="mt-4">
              <ul className="space-y-3">
                {navigationLinks.map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className="text-sm text-gray-400 transition-colors hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-white">
              My Projects
            </h2>

            <ul className="mt-4 space-y-3">
              {projectLinks.map((project) => (
                <li key={project.label}>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-purple-400"
                  >
                    {project.label}
                    <span aria-hidden="true">↗</span>
                  </a>
                </li>
              ))}

              <li>
                <a
                  href="https://github.com/kapil-goel952?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-purple-400"
                >
                  All repositories
                  <span aria-hidden="true">↗</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col gap-3 border-t border-gray-800 pt-5 text-xs leading-5 text-gray-500 sm:flex-row sm:items-center sm:justify-between sm:text-sm">
          <p>
            © {currentYear} Kapil Goel. All rights reserved.
          </p>

          <p>
            Built with React, Vite, and Tailwind CSS.
          </p>

          <Link
            to="/"
            className="w-fit transition-colors hover:text-purple-400"
          >
            Back to Home ↑
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
