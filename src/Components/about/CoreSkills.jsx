
const skillGroups = [
  {
    title: "Programming Languages",
    description: "Languages I use while learning and building software.",
    skills: ["Python", "C", "C++", "JavaScript", "SQL"],
  },
  {
    title: "Web Development",
    description: "Technologies used to build this portfolio and web interfaces.",
    skills: ["React", "Vite", "Tailwind CSS", "React Router"],
  },
  {
    title: "AI & Application Development",
    description: "Tools used in my AI-powered learning assistant.",
    skills: ["Streamlit", "Google Gemini API", "Firebase", "Cloud Firestore"],
  },
  {
    title: "Mobile & Systems",
    description: "Areas I work with or continue to explore through projects.",
    skills: ["React Native", "Expo", "Linux", "Unity"],
  },
  {
    title: "Developer Tools",
    description: "Tools used in my development workflow.",
    skills: ["Git", "GitHub", "VS Code"],
  },
];

const CoreSkills = () => {
  return (
    <section className="h-full rounded-2xl border border-gray-800 bg-gray-950 p-5 sm:p-6">
      <div>
        <p className="text-xs font-medium uppercase tracking-widest text-purple-400">
          Technologies
        </p>

        <h2 className="mt-2 text-xl font-semibold text-white sm:text-2xl">
          My Developer Toolbox
        </h2>

        <p className="mt-2 text-sm leading-6 text-gray-400">
          Technologies I have used in projects, practiced, or am currently
          exploring.
        </p>
      </div>

      <div className="mt-6 space-y-5">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="border-t border-gray-800 pt-4 first:border-t-0 first:pt-0"
          >
            <h3 className="font-medium text-white">
              {group.title}
            </h3>

            <p className="mt-1 text-xs leading-5 text-gray-500 sm:text-sm">
              {group.description}
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg border border-gray-800 bg-black/30 px-3 py-2 text-xs text-gray-300 transition-colors hover:border-purple-500/60 hover:text-purple-300 sm:text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreSkills;
