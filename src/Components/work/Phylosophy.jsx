
const principles = [
  {
    number: "01",
    title: "Learn by Building",
    description:
      "I learn best by turning concepts into working projects, testing ideas, and solving problems along the way.",
  },
  {
    number: "02",
    title: "Stay Curious",
    description:
      "I enjoy exploring different areas of technology, from AI-powered applications to mobile development and Linux systems.",
  },
  {
    number: "03",
    title: "Improve with Every Project",
    description:
      "Every project is an opportunity to understand something more deeply, write better code, and build more useful software.",
  },
];

const Philosophy = () => {
  return (
    <section className="w-full overflow-hidden rounded-2xl border border-gray-800 bg-gray-950">
      {/* Introduction */}
      <div className="border-b border-gray-800 p-6 sm:p-8 lg:p-10">
        <p className="text-xs font-medium uppercase tracking-widest text-purple-400">
          My Philosophy
        </p>

        <h2 className="mt-4 max-w-3xl text-2xl font-semibold leading-tight text-white sm:text-3xl lg:text-4xl">
          Technology matters most when we use it to{" "}
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            solve meaningful problems.
          </span>
        </h2>

        <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
          I don't want to learn technologies just to collect them. I want to
          understand how they work, experiment with them, and use what I learn
          to build practical things.
        </p>
      </div>

      {/* Principles */}
      <div className="grid grid-cols-1 gap-px bg-gray-800 md:grid-cols-3">
        {principles.map((principle) => (
          <article
            key={principle.number}
            className="bg-gray-950 p-6 transition-colors hover:bg-gray-900/70 sm:p-7"
          >
            <span className="text-sm font-semibold text-purple-400">
              {principle.number}
            </span>

            <h3 className="mt-4 text-lg font-semibold text-white">
              {principle.title}
            </h3>

            <p className="mt-3 text-sm leading-7 text-gray-400">
              {principle.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Philosophy;
