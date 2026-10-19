
const focusAreas = [
  {
    number: "01",
    title: "AI-Powered Applications",
    status: "Building",
    description:
      "Developing learning tools and experimenting with AI APIs, Python, Firebase, and cloud-based data.",
    technologies: ["Python", "Streamlit", "Gemini API", "Firebase"],
  },
  {
    number: "02",
    title: "Web & Mobile Development",
    status: "Practicing",
    description:
      "Building responsive interfaces, reusable React components, and exploring cross-platform mobile development.",
    technologies: ["React", "Vite", "Tailwind CSS", "React Native"],
  },
  {
    number: "03",
    title: "Linux & Operating Systems",
    status: "Exploring",
    description:
      "Learning about Linux systems and experimenting with my own operating-system project, KapilOS.",
    technologies: ["Linux", "GRUB", "systemd", "GNOME"],
  },
];

const SkillsMatrix = () => {
  return (
    <section className="h-full rounded-2xl border border-gray-800 bg-gray-950 p-5 sm:p-6">
      {/* Heading */}
      <p className="text-xs font-medium uppercase tracking-widest text-purple-400">
        Development Journey
      </p>

      <h2 className="mt-2 text-xl font-semibold text-white sm:text-2xl">
        What I'm Working On
      </h2>

      <p className="mt-2 text-sm leading-6 text-gray-400">
        Areas I'm developing through hands-on projects, experimentation,
        and continuous learning.
      </p>

      {/* Focus areas */}
      <div className="mt-6 space-y-4">
        {focusAreas.map((area) => (
          <article
            key={area.number}
            className="rounded-xl border border-gray-800 bg-black/30 p-4 transition-colors hover:border-purple-500/50 sm:p-5"
          >
            <div className="flex items-start gap-3">
              <span className="pt-1 text-sm font-semibold text-purple-400">
                {area.number}
              </span>

              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-semibold text-white">
                    {area.title}
                  </h3>

                  <span className="rounded-full border border-gray-700 px-2.5 py-1 text-xs text-gray-400">
                    {area.status}
                  </span>
                </div>

                <p className="mt-2 text-sm leading-6 text-gray-400">
                  {area.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {area.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md border border-gray-800 px-2.5 py-1 text-xs text-gray-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default SkillsMatrix;
