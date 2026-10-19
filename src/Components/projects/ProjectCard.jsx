
// import { ArrowUpRight, Github } from "lucide-react";
import { ArrowUpRight, CodeXml } from "lucide-react";

const ProjectCard = ({ project }) => {
  const statusStyle =
    project.status === "Live"
      ? "border-green-500/30 text-green-400 bg-green-500/10"
      : "border-gray-700 text-gray-400 bg-gray-800/50";

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-800 bg-gray-950 transition-colors duration-200 hover:border-purple-500/60">
      {/* Project preview */}
      {project.image ? (
        <div className="aspect-video overflow-hidden border-b border-gray-800">
          <img
            src={project.image}
            alt={`${project.title} preview`}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      ) : (
        <div className="flex aspect-video items-center justify-center border-b border-gray-800 bg-gradient-to-br from-gray-900 to-black">
          <span className="text-sm font-medium tracking-wide text-purple-400">
            {project.category}
          </span>
        </div>
      )}

      <div className="flex flex-1 flex-col p-5">
        {/* Category and status */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-purple-400">
            {project.category}
          </p>

          <span
            className={`rounded-full border px-2.5 py-1 text-xs ${statusStyle}`}
          >
            {project.status}
          </span>
        </div>

        {/* Project information */}
        <h3 className="mt-4 text-xl font-semibold text-white">
          {project.title}
        </h3>

        <p className="mt-3 text-sm leading-6 text-gray-400">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mt-4 flex flex-wrap gap-2">
          {(project.technologies ?? []).map((technology) => (
            <span
              key={technology}
              className="rounded-md border border-gray-800 bg-gray-900 px-2.5 py-1 text-xs text-gray-300"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-auto flex flex-wrap gap-3 pt-6">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-gray-700 px-3 py-2 text-sm text-white hover:border-purple-500"
            >
              <CodeXml size={16} />
              Source Code
              <ArrowUpRight size={14} />
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-purple-600 px-3 py-2 text-sm text-white hover:bg-purple-500"
            >
              Live Demo
              <ArrowUpRight size={14} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
