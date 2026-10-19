
import { ArrowUpRight, CodeXml, Globe, Layers } from "lucide-react";

const links = [
  {
    title: "GitHub Profile",
    description:
      "Explore my repositories, source code, and development experiments.",
    action: "Visit GitHub",
    href: "https://github.com/kapil-goel952",
    icon: CodeXml,
  },
  {
    title: "Notes Assistant AI",
    description:
      "Try my AI-powered learning assistant in the browser.",
    action: "Open Live App",
    href: "https://notes-assistance-ai.streamlit.app/",
    icon: Globe,
  },
  {
    title: "All Repositories",
    description:
      "Discover more of my projects and ongoing work.",
    action: "Explore Projects",
    href: "https://github.com/kapil-goel952?tab=repositories",
    icon: Layers,
  },
];

const ContactInfo = () => {
  return (
    <aside className="flex flex-col gap-5">
      {/* Links */}
      <section className="rounded-2xl border border-gray-800 bg-gray-950 p-5 sm:p-6">
        <p className="mb-2 text-xs font-medium uppercase tracking-widest text-purple-400">
          Connect & Explore
        </p>

        <h2 className="text-xl font-semibold text-white">
          Find me online
        </h2>

        <p className="mt-2 text-sm leading-6 text-gray-400">
          Explore my work, try my projects, and see what I'm building.
        </p>

        <div className="mt-6 flex flex-col gap-3">
          {links.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-xl border border-gray-800 p-4 transition-colors hover:border-purple-500/60 hover:bg-white/[0.02]"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-purple-500/10 text-purple-400">
                    <Icon size={20} aria-hidden="true" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="font-medium text-white">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-gray-400">
                      {item.description}
                    </p>

                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-purple-400 group-hover:text-purple-300">
                      {item.action}
                      <ArrowUpRight size={15} aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </section>

      {/* Current focus */}
      <section className="rounded-2xl border border-gray-800 bg-gray-950 p-5 sm:p-6">
        <p className="text-xs font-medium uppercase tracking-widest text-purple-400">
          Current Focus
        </p>

        <h2 className="mt-3 text-lg font-semibold text-white">
          Learning by building
        </h2>

        <p className="mt-2 text-sm leading-6 text-gray-400">
          Exploring AI applications, web and mobile development,
          and operating-system concepts through practical projects.
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {["AI", "Web & Mobile", "Linux"].map((skill) => (
            <span
              key={skill}
              className="rounded-md border border-gray-800 bg-black/30 px-3 py-1.5 text-xs text-gray-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    </aside>
  );
};

export default ContactInfo;
