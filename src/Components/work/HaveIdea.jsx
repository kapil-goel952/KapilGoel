
import { Link } from "react-router-dom";
import { ArrowUpRight, MessageCircle } from "lucide-react";

const HaveIdea = () => {
  return (
    <section className="w-full overflow-hidden rounded-2xl border border-gray-800 bg-gray-950 p-5 sm:p-8 lg:p-10">
      <div className="relative overflow-hidden rounded-xl border border-purple-500/20 bg-gradient-to-br from-purple-950/40 via-gray-950 to-gray-950 p-6 sm:p-8 lg:p-10">
        {/* Background accent */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-20 h-48 w-48 rounded-full bg-purple-600/15 blur-3xl"
        />

        <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          {/* Introduction */}
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-purple-500/30 bg-purple-500/10 text-purple-300">
              <MessageCircle size={23} aria-hidden="true" />
            </div>

            <div className="max-w-2xl">
              <p className="text-xs font-medium uppercase tracking-widest text-purple-400">
                Let's Connect
              </p>

              <h2 className="mt-2 text-xl font-semibold text-white sm:text-2xl lg:text-3xl">
                Have an idea in mind?
              </h2>

              <p className="mt-3 text-sm leading-7 text-gray-400 sm:text-base">
                I'm interested in exploring ideas, discussing technology,
                and building useful software. Let's start a conversation
                about what you're working on.
              </p>
            </div>
          </div>

          {/* Contact link */}
          <Link
            to="/Contact"
            className="inline-flex w-fit shrink-0 items-center justify-center gap-2 rounded-lg bg-purple-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-purple-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-400"
          >
            Let's Talk
            <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HaveIdea;
