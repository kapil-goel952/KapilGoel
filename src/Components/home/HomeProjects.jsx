
import { Link } from "react-router-dom";
import { projects } from "../../data/projects";
import ProjectCard from "../projects/ProjectCard";

const HomeProjects = () => {
  const featuredProjects = projects.filter(
    (project) => project.featured
  );

  return (
    <section className="w-full rounded-2xl border border-gray-800 p-5 sm:p-6">
      {/* Section heading */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">
            <span className="text-purple-500">#</span>{" "}
            Featured Projects
          </h2>

          <p className="mt-2 text-sm text-gray-400">
            A selection of projects I have been building and exploring.
          </p>
        </div>

        <Link
          to="/Work"
          className="w-fit rounded-lg border border-gray-700 px-4 py-2 text-sm text-white transition-colors hover:border-purple-500 hover:text-purple-400"
        >
          View All Projects →
        </Link>
      </div>

      {/* Project cards */}
      <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {featuredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>

      {/* Empty state */}
      {featuredProjects.length === 0 && (
        <p className="mt-6 text-sm text-gray-400">
          Featured projects will appear here soon.
        </p>
      )}
    </section>
  );
};

export default HomeProjects;
