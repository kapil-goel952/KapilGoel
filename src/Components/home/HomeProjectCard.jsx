import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  return (
    <div className="card flex flex-col border-2 rounded-xl justify-end p-5 w-full sm:w-100 lg:w-120 shrink-0 border-gray-600 min-h-70">

      {/* Category */}
      <p className="text-xs sm:text-sm text-purple-500 my-2 font-semibold">
        {project.category}
      </p>

      {/* Title */}
      <p className="text-lg sm:text-xl text-white font-semibold">
        {project.title}
      </p>

      {/* Description */}
      <p className="text-xs sm:text-sm text-gray-500 mt-2 leading-relaxed">
        {project.description}
      </p>

      {/* Technologies */}
      <div className="my-3 flex flex-wrap gap-2">
        {project.technologies.map((tech, index) => (
          <span
            key={index}
            className="text-xs sm:text-sm text-blue-400"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Link */}
      <Link
        to={project.link}
        className="text-purple-500 text-sm sm:text-base font-semibold hover:text-white transition-all duration-300"
      >
        View Project →
      </Link>

    </div>
  );
};

export default ProjectCard;