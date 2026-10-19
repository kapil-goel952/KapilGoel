
const tools = [
  {
    mark: "VS",
    name: "Visual Studio Code",
    category: "Editor",
    description: "Writing and debugging code across projects.",
  },
  {
    mark: "GH",
    name: "Git & GitHub",
    category: "Version Control",
    description: "Managing code, commits, branches, and repositories.",
  },
  {
    mark: ">_",
    name: "PowerShell & Shell",
    category: "Terminal",
    description: "Running commands and managing development workflows.",
  },
  {
    mark: "V",
    name: "Vite",
    category: "Frontend",
    description: "Running the development server and building React projects.",
  },
  {
    mark: "ST",
    name: "Streamlit",
    category: "Python Apps",
    description: "Building the interface for Notes Assistant AI.",
  },
  {
    mark: "LX",
    name: "Linux",
    category: "Systems",
    description: "Exploring command-line tools and operating-system concepts.",
  },
];

const Toolbox = () => {
  return (
    <section className="h-full rounded-2xl border border-gray-800 bg-gray-950 p-5 sm:p-6">
      {/* Heading */}
      <p className="text-xs font-medium uppercase tracking-widest text-purple-400">
        My Workflow
      </p>

      <h2 className="mt-2 text-xl font-semibold text-white sm:text-2xl">
        Tools I Work With
      </h2>

      <p className="mt-2 text-sm leading-6 text-gray-400">
        Tools that help me write code, manage projects, and experiment
        with new ideas.
      </p>

      {/* Tools grid */}
      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {tools.map((tool) => (
          <article
            key={tool.name}
            className="rounded-xl border border-gray-800 bg-black/30 p-4 transition-colors hover:border-purple-500/50"
          >
            <div className="flex items-start gap-3">
              <div
                aria-hidden="true"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-purple-500/20 bg-purple-500/10 text-xs font-bold text-purple-300"
              >
                {tool.mark}
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="break-words text-sm font-semibold text-white">
                  {tool.name}
                </h3>

                <span className="mt-1 inline-block text-xs text-purple-400">
                  {tool.category}
                </span>
              </div>
            </div>

            <p className="mt-3 text-sm leading-6 text-gray-400">
              {tool.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Toolbox;
