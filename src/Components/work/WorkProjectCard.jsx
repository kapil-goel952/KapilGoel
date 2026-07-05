import React from "react";
import { Link } from "react-router-dom";

const WorkProjectCard = ({ project }) => {
  return (
    <div className="flex flex-col border border-gray-700 rounded-xl justify-end p-4 w-full sm:w-100 lg:w-120 shrink-0 min-h-70">

      {/* Category */}
      <p className="text-xs sm:text-sm text-purple-500 my-2 font-semibold tracking-wide">
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

      {/* Tech stack */}
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
        className="text-sm sm:text-base text-purple-500 font-medium hover:text-white transition-all duration-300"
      >
        View Project →
      </Link>

    </div>
  );
};

export default WorkProjectCard;