
import { useState } from "react";
import { projects } from "../../data/projects";
import ProjectCard from "../projects/ProjectCard";

const WorkProject = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Automatically build category options from project data.
  const categories = [
    "All",
    ...new Set(projects.map((project) => project.category)),
  ];

  // Search by title, description, category, or technology.
  const filteredProjects = projects.filter((project) => {
    const query = searchQuery.trim().toLowerCase();

    const searchableText = [
      project.title,
      project.description,
      project.category,
      ...(project.technologies ?? []),
    ]
      .join(" ")
      .toLowerCase();

    const matchesSearch = searchableText.includes(query);

    const matchesCategory =
      selectedCategory === "All" ||
      project.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
  };

  return (
    <section className="w-full rounded-2xl border border-gray-800 p-5 sm:p-8">
      {/* Heading */}
      <div>
        <p className="text-xs font-medium uppercase tracking-widest text-purple-400">
          Selected Work
        </p>

        <h1 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
          Projects & Experiments
        </h1>

        <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-400">
          Explore the applications I'm building, the technologies I'm
          experimenting with, and the problems I'm learning to solve.
        </p>
      </div>

      {/* Search and category filter */}
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-[1fr_auto]">
        <div>
          <label
            htmlFor="project-search"
            className="mb-2 block text-sm font-medium text-gray-300"
          >
            Search projects
          </label>

          <input
            id="project-search"
            type="search"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder="Try Python, React, AI, Linux..."
            className="w-full rounded-xl border border-gray-800 bg-black/40 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-gray-600 focus:border-purple-500"
          />
        </div>

        <div>
          <label
            htmlFor="project-category"
            className="mb-2 block text-sm font-medium text-gray-300"
          >
            Category
          </label>

          <select
            id="project-category"
            value={selectedCategory}
            onChange={(event) => setSelectedCategory(event.target.value)}
            className="w-full rounded-xl border border-gray-800 bg-gray-950 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-purple-500 sm:min-w-48"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Results information */}
      <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-b border-gray-800 pb-4">
        <p className="text-sm text-gray-400" aria-live="polite">
          Showing{" "}
          <span className="font-semibold text-white">
            {filteredProjects.length}
          </span>{" "}
          of {projects.length} projects
        </p>

        {(searchQuery || selectedCategory !== "All") && (
          <button
            type="button"
            onClick={clearFilters}
            className="rounded-lg border border-gray-700 px-3 py-2 text-sm text-gray-300 transition-colors hover:border-purple-500 hover:text-white"
          >
            Clear filters
          </button>
        )}
      </div>

      {/* Project cards */}
      {filteredProjects.length > 0 ? (
        <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="mt-6 rounded-xl border border-dashed border-gray-800 px-5 py-12 text-center">
          <h2 className="text-lg font-semibold text-white">
            No matching projects
          </h2>

          <p className="mt-2 text-sm text-gray-400">
            Try another search term or select a different category.
          </p>

          <button
            type="button"
            onClick={clearFilters}
            className="mt-5 rounded-lg bg-purple-600 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-purple-500"
          >
            Show all projects
          </button>
        </div>
      )}
    </section>
  );
};

export default WorkProject;
