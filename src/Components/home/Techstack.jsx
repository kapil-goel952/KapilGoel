
const technologyGroups = [
  {
    number: "01",
    title: "Programming",
    description: "Languages for problem-solving and software development.",
    technologies: ["Python", "C", "C++", "JavaScript", "SQL"],
  },
  {
    number: "02",
    title: "Web Development",
    description: "Building responsive websites and reusable interfaces.",
    technologies: ["React", "Vite", "Tailwind CSS", "React Router"],
  },
  {
    number: "03",
    title: "AI Applications",
    description: "Tools used to build my AI-powered learning assistant.",
    technologies: [
      "Streamlit",
      "Google Gemini API",
      "Firebase",
      "Cloud Firestore",
    ],
  },
  {
    number: "04",
    title: "Mobile & Systems",
    description: "Exploring mobile apps, Linux, and system development.",
    technologies: ["React Native", "Expo", "Linux", "Unity"],
  },
];

const TechStack = () => {
  return (
    <section className="w-full pt-5">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {technologyGroups.map((group) => (
          <article
            key={group.number}
            className="rounded-xl border border-gray-800 bg-gray-950 p-5 transition-colors hover:border-purple-500/50"
          >
            <div className="flex items-start gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-purple-500/20 bg-purple-500/10 text-xs font-semibold text-purple-400">
                {group.number}
              </span>

              <div className="min-w-0">
                <h3 className="font-semibold text-white">
                  {group.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-400">
                  {group.description}
                </p>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {group.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-md border border-gray-800 bg-black/30 px-2.5 py-1.5 text-xs text-gray-300"
                >
                  {technology}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
