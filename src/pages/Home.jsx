
import { Link } from "react-router-dom";
import Herosection from "../Components/home/heroSection";
import Projects from "../Components/home/HomeProjects";
import LetsBuild from "../Components/home/LetsBuild";
import TechStack from "../Components/home/Techstack";

const Home = () => {
  return (
    <div className="flex w-full flex-col gap-12 px-4 sm:px-6 lg:px-10">
      {/* Hero */}
      <section>
        <Herosection />
      </section>

      {/* Featured Projects */}
      <section>
        <Projects />
      </section>

      {/* Technologies */}
      <section className="w-full rounded-2xl border border-gray-800 p-5 sm:p-6">
        <h2 className="mb-2 text-2xl font-semibold text-white sm:text-3xl">
          <span className="text-purple-500">#</span> Technologies
        </h2>

        <p className="text-sm leading-6 text-gray-400">
          Tools and technologies I use while building projects and learning
          new concepts.
        </p>

        <TechStack />
      </section>

      {/* About Me */}
      <section className="w-full rounded-2xl border border-gray-800 bg-gray-950 p-6 sm:p-8 lg:p-10">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[1.5fr_1fr]">
          {/* Introduction */}
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-purple-400">
              A little about me
            </p>

            <h2 className="text-2xl font-semibold leading-tight text-white sm:text-3xl lg:text-4xl">
              Curious about technology.
              <span className="text-purple-500">
                {" "}Driven to build.
              </span>
            </h2>

            <p className="mt-5 text-sm leading-7 text-gray-400 sm:text-base">
              I'm a BCA student and developer who enjoys learning by building
              practical projects. My interests include AI-powered applications,
              mobile development, software development, and exploring how
              operating systems work.
            </p>

            <p className="mt-4 text-sm leading-7 text-gray-400 sm:text-base">
              From Notes Assistant AI to my ongoing KapilOS experiment, I use
              projects to turn ideas into working software and keep expanding
              my technical skills.
            </p>

            <Link
              to="/About"
              className="mt-6 inline-flex items-center gap-2 rounded-lg border border-purple-500/50 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-purple-500 hover:text-black"
            >
              More About Me <span aria-hidden="true">→</span>
            </Link>
          </div>

          {/* Areas of interest */}
          <div className="flex flex-col gap-3">
            {[
              {
                number: "01",
                title: "AI & Applications",
                description: "Building useful tools that solve real problems.",
              },
              {
                number: "02",
                title: "Mobile & Web",
                description: "Creating responsive interfaces and applications.",
              },
              {
                number: "03",
                title: "Systems & Linux",
                description: "Exploring operating systems and low-level concepts.",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="rounded-xl border border-gray-800 bg-black/40 p-4"
              >
                <div className="flex items-start gap-4">
                  <span className="pt-1 text-sm font-semibold text-purple-400">
                    {item.number}
                  </span>

                  <div>
                    <h3 className="font-medium text-white">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section>
        <LetsBuild />
      </section>
    </div>
  );
};

export default Home;
