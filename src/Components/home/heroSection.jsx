
import { Link } from "react-router-dom";
import Hero from "../../assets/hero.svg";

const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden rounded-2xl border border-gray-800 bg-gray-950 px-5 py-10 sm:px-8 sm:py-14 lg:px-12 lg:py-16">
      {/* Subtle background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-purple-600/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 left-1/4 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl"
      />

      <div className="relative z-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
        {/* Introduction */}
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-2">
            <span
              aria-hidden="true"
              className="h-2 w-2 rounded-full bg-purple-400"
            />

            <span className="text-xs font-medium tracking-wide text-purple-300 sm:text-sm">
              Developer · Student · Builder
            </span>
          </div>

          <h1 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl">
            Hey, I'm Kapil.
            <br />

            <span className="bg-linear-to-r from-purple-400 via-purple-300 to-blue-400 bg-clip-text text-transparent">
              I build things
            </span>

            <br />

            that solve problems.
          </h1>

          <p className="mt-6 max-w-xl text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
            I'm a BCA student and developer who learns by building.
            From AI-powered learning tools to mobile applications and
            Linux experiments, I enjoy turning ideas into working software.
          </p>

          {/* Areas of interest */}
          <div className="mt-6 flex flex-wrap gap-2">
            {["AI Applications", "Web & Mobile", "Linux & Systems"].map(
              (interest) => (
                <span
                  key={interest}
                  className="rounded-lg border border-gray-800 bg-black/30 px-3 py-2 text-xs text-gray-300 sm:text-sm"
                >
                  {interest}
                </span>
              )
            )}
          </div>

          {/* Functional navigation */}
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/Work"
              className="inline-flex items-center gap-2 rounded-lg bg-purple-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-purple-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-400"
            >
              Explore My Work
              <span aria-hidden="true">↗</span>
            </Link>

            <Link
              to="/Contact"
              className="inline-flex items-center gap-2 rounded-lg border border-gray-700 px-5 py-3 text-sm font-medium text-gray-200 transition-colors hover:border-purple-500 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-400"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Existing portfolio illustration */}
        <div className="flex flex-col items-center justify-center">
          <img
            src={Hero}
            alt="Illustration representing software development and creativity"
            className="h-auto w-full max-w-xs object-contain sm:max-w-sm lg:max-w-md"
          />

          <div className="mt-4 w-full max-w-sm rounded-xl border border-gray-800 bg-black/40 p-4">
            <p className="text-xs font-medium uppercase tracking-widest text-gray-500">
              Current focus
            </p>

            <p className="mt-2 text-sm font-semibold text-white sm:text-base">
              Learning by building real projects
            </p>

            <p className="mt-1 text-sm leading-6 text-gray-400">
              Experimenting, solving problems, and improving with every build.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
