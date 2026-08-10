
import { Link } from "react-router-dom";
import { Home, ArrowLeft, Sparkles } from "lucide-react";

const NotFound = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#030712] overflow-hidden px-6">

      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-purple-600/20 blur-[120px]" />
        <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(to right, #ffffff 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 text-center max-w-3xl">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/20 bg-white/5 backdrop-blur-sm text-purple-400 text-sm">
          <Sparkles size={14} />
          Lost in Space
        </div>

        {/* 404 */}
        <h1 className="mt-8 text-[110px] md:text-[180px] font-black leading-none bg-linear-to-r from-purple-500 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
          404
        </h1>

        {/* Heading */}
        <h2 className="mt-4 text-4xl md:text-6xl font-bold text-white">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="mt-6 text-gray-400 text-lg leading-relaxed max-w-xl mx-auto">
          Looks like the page you're trying to visit has drifted out of orbit.
          The link may be broken, outdated, or simply doesn't exist anymore.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-10">

          <Link
            to="/"
            className="group flex items-center gap-2 px-7 py-3 rounded-xl bg-linear-to-r from-purple-600 to-blue-500 hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/20"
          >
            <Home size={18} />
            Back Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 px-7 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>

        </div>

      </div>
    </section>
  );
};

export default NotFound;
