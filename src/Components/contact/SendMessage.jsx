
import React from "react";
import { User, Mail, BookOpen, MessageSquare, Lock } from "lucide-react";

const SendMessage = () => {
  return (
    <div className="border border-white/10 rounded-xl bg-black/30 backdrop-blur-sm p-5 md:p-6">

      <p className="text-purple-400 font-mono text-sm mb-6">
        // SEND A MESSAGE
      </p>

      <form className="space-y-4">

        {/* Name + Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <div className="relative">
            <User
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-500"
            />

            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-transparent border border-purple-500/20 rounded-lg py-4 pl-12 pr-4 text-white outline-none focus:border-purple-500 transition"
            />
          </div>

          <div className="relative">
            <Mail
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-transparent border border-purple-500/20 rounded-lg py-4 pl-12 pr-4 text-white outline-none focus:border-purple-500 transition"
            />
          </div>

        </div>

        {/* Subject */}
        <div className="relative">

          <BookOpen
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-500"
          />

          <input
            type="text"
            placeholder="Subject"
            className="w-full bg-transparent border border-purple-500/20 rounded-lg py-4 pl-12 pr-4 text-white outline-none focus:border-purple-500 transition"
          />

        </div>

        {/* Message */}
        <div className="relative">

          <MessageSquare
            size={18}
            className="absolute left-4 top-5 text-purple-500"
          />

          <textarea
            rows={8}
            placeholder="Your Message"
            className="w-full bg-transparent border border-purple-500/20 rounded-lg py-4 pl-12 pr-4 text-white outline-none focus:border-purple-500 resize-none transition"
          />

        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full py-4 rounded-lg bg-linear-to-r from-purple-600 via-purple-500 to-cyan-400 text-white font-medium hover:scale-[1.01] transition"
        >
          Send Message →
        </button>

        {/* Footer */}
        <div className="flex items-center justify-center gap-2 text-xs text-gray-500 pt-2">

          <Lock size={12} />

          <span>
            Your information is safe with me. I'll never share it with anyone.
          </span>

        </div>

      </form>
    </div>
  );
};

export default SendMessage;

