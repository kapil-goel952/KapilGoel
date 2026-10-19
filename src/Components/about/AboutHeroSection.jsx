
import { Link } from "react-router-dom";
import Hero from "../../assets/hero.svg";

const interests = [
  {
    number: "01",
    title: "AI Applications",
    description:
      "Exploring ways to build useful applications with AI APIs and Python.",
  },
  {
    number: "02",
    title: "Web & Mobile",
    description:
      "Building interfaces and experimenting with React and React Native.",
  },
  {
    number: "03",
    title: "Linux & Systems",
    description:
      "Learning how operating systems work and experimenting with KapilOS.",
  },
];

const AboutHeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden rounded-3xl border border-gray-800 bg-gradient-to-b from-gray-950 to-black px-5 py-10 sm:px-8 sm:py-14 lg:px-12 lg:py-16">
      {/* Background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-10 h-64 w-64 rounded-full bg-purple-600/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 right-0 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl"
      />

      <div className="relative z-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Introduction */}
        <div>
          <p className="text-sm font-medium uppercase tracking-widest text-purple-400">
            About Me
          </p>

          <h1 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Curious about technology.
            <span className="mt-1 block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Driven to build.
            </span>
          </h1>

          <p className="mt-6 text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
            I'm a BCA student and developer who enjoys learning by building
            practical projects. I'm interested in software development,
            AI-powered applications, mobile development, and understanding
            how operating systems work.
          </p>

          <p className="mt-4 text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
            My projects give me a way to experiment with new technologies,
            solve problems, and turn ideas into working software. I'm
            continuing to grow my skills through hands-on development.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/Work"
              className="inline-flex items-center gap-2 rounded-lg bg-purple-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-purple-500"
            >
              Explore My Projects
              <span aria-hidden="true">↗</span>
            </Link>

            <Link
              to="/Contact"
              className="inline-flex items-center rounded-lg border border-gray-700 px-5 py-3 text-sm font-medium text-gray-200 transition-colors hover:border-purple-500 hover:text-white"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Existing illustration */}
        <div className="flex flex-col items-center justify-center">
          <img
            src={Hero}
            alt="Illustration representing software development"
            className="h-auto w-full max-w-xs object-contain sm:max-w-sm lg:max-w-md"
          />

          <div className="mt-4 w-full max-w-sm rounded-xl border border-gray-800 bg-white/[0.03] p-4">
            <p className="text-xs font-medium uppercase tracking-widest text-gray-500">
              My approach
            </p>

            <p className="mt-2 text-lg font-semibold text-white">
              Learn. Build. Improve.
            </p>

            <p className="mt-2 text-sm leading-6 text-gray-400">
              I believe practical projects are one of the best ways to
              understand technology and develop problem-solving skills.
            </p>
          </div>
        </div>
      </div>

      {/* Areas of interest */}
      <div className="relative z-10 mt-12 border-t border-gray-800 pt-8">
        <h2 className="text-xl font-semibold text-white sm:text-2xl">
          What I'm interested in
        </h2>

        <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-3">
          {interests.map((interest) => (
            <article
              key={interest.number}
              className="rounded-xl border border-gray-800 bg-black/30 p-5 transition-colors hover:border-purple-500/50"
            >
              <span className="text-sm font-semibold text-purple-400">
                {interest.number}
              </span>

              <h3 className="mt-3 text-lg font-semibold text-white">
                {interest.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-400">
                {interest.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;
