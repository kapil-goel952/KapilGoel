
import { Link } from "react-router-dom";
import Hero from "../../assets/hero.svg";
import { projects } from "../../data/projects";

const WorkHerosection = () => {
  const featuredCount = projects.filter(
    (project) => project.featured
  ).length;

  const categoryCount = new Set(
    projects.map((project) => project.category)
  ).size;

  const stats = [
    {
      value: projects.length,
      label: projects.length === 1 ? "Project Listed" : "Projects Listed",
    },
    {
      value: featuredCount,
      label: "Featured Projects",
    },
    {
      value: categoryCount,
      label: "Project Categories",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden rounded-2xl border border-gray-800 bg-gray-950 px-5 py-10 sm:px-8 sm:py-14 lg:px-12 lg:py-16">
      {/* Background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-purple-600/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 left-1/4 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl"
      />

      <div className="relative z-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Introduction */}
        <div>
          <p className="inline-flex rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-2 text-xs font-medium tracking-wide text-purple-300 sm:text-sm">
            Selected Work · Project Archive
          </p>

          <h1 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Ideas into code.
            <br />

            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Learning through building.
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
            Explore my applications, development experiments, and ongoing
            projects. Each one represents something I've built, learned,
            or am continuing to improve.
          </p>

          {/* Functional links */}
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/Contact"
              className="inline-flex items-center gap-2 rounded-lg bg-purple-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-purple-500"
            >
              Discuss a Project
              <span aria-hidden="true">↗</span>
            </Link>

            <a
              href="https://github.com/kapil-goel952?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-gray-700 px-5 py-3 text-sm font-medium text-gray-200 transition-colors hover:border-purple-500 hover:text-white"
            >
              Explore GitHub
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          {/* Dynamic statistics */}
          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-gray-800 bg-black/30 p-4"
              >
                <p className="text-2xl font-bold text-purple-400">
                  {stat.value}
                </p>

                <p className="mt-1 text-xs leading-5 text-gray-400 sm:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Existing illustration */}
        <div className="flex flex-col items-center justify-center">
          <img
            src={Hero}
            alt="Illustration representing software development"
            className="h-auto w-full max-w-xs object-contain sm:max-w-sm lg:max-w-md"
          />

          <div className="mt-4 w-full max-w-sm rounded-xl border border-gray-800 bg-black/40 p-4">
            <p className="text-xs font-medium uppercase tracking-widest text-gray-500">
              Development approach
            </p>

            <p className="mt-2 font-semibold text-white">
              Experiment. Build. Improve.
            </p>

            <p className="mt-1 text-sm leading-6 text-gray-400">
              Practical projects, continuous learning, and exploring
              new ideas through code.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkHerosection;
