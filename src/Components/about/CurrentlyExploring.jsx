
const explorations = [
  {
    number: "01",
    title: "Operating Systems",
    label: "Systems & Linux",
    description:
      "Understanding how operating systems work, exploring Linux, and learning about the components behind a developer-friendly environment.",
  },
  {
    number: "02",
    title: "Interactive Experiences",
    label: "UI & Game Development",
    description:
      "Exploring how interface design, logic, and user feedback come together to create engaging digital experiences.",
  },
  {
    number: "03",
    title: "AI-Powered Tools",
    label: "AI & Productivity",
    description:
      "Experimenting with AI features that can help people organize information, understand concepts, and learn more effectively.",
  },
];

const CurrentlyExploring = () => {
  return (
    <section className="h-full rounded-2xl border border-gray-800 bg-gray-950 p-5 sm:p-6">
      {/* Heading */}
      <p className="text-xs font-medium uppercase tracking-widest text-purple-400">
        Beyond the Code
      </p>

      <h2 className="mt-2 text-xl font-semibold text-white sm:text-2xl">
        What Keeps Me Curious
      </h2>

      <p className="mt-2 text-sm leading-6 text-gray-400">
        Topics I enjoy exploring as I grow as a developer.
      </p>

      {/* Exploration cards */}
      <div className="mt-6 flex flex-col gap-3">
        {explorations.map((item) => (
          <article
            key={item.number}
            className="rounded-xl border border-gray-800 bg-black/30 p-4 transition-colors hover:border-purple-500/50 sm:p-5"
          >
            <div className="flex items-start gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-purple-500/20 bg-purple-500/10 text-xs font-semibold text-purple-300">
                {item.number}
              </span>

              <div className="min-w-0 flex-1">
                <span className="text-xs font-medium text-purple-400">
                  {item.label}
                </span>

                <h3 className="mt-1 text-base font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-400">
                  {item.description}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default CurrentlyExploring;
