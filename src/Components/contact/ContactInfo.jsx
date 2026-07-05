
import React from "react";
import {
  Mail,
  Send,
  
  Globe,
} from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="space-y-5">

      {/* Contact Card */}
      <div className="border border-white/10 rounded-xl bg-black/30 backdrop-blur-sm p-5 md:p-6">

        <p className="text-purple-400 font-mono text-sm mb-5">
          // CONTACT INFO
        </p>

        <div className="space-y-4">

          {/* Email */}
          <div className="flex items-center gap-4 border border-white/5 rounded-lg p-4">

            <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-purple-500/10">
              <Mail className="text-purple-500" size={20} />
            </div>

            <div>
              <p className="text-white font-medium">Email</p>
              <p className="text-cyan-400 text-sm">
                hello@kapil.dev
              </p>
              <p className="text-gray-500 text-xs">
                Send me an email anytime
              </p>
            </div>

          </div>

          {/* Telegram */}
          <div className="flex items-center gap-4 border border-white/5 rounded-lg p-4">

            <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-purple-500/10">
              <Send className="text-purple-500" size={20} />
            </div>

            <div>
              <p className="text-white font-medium">Telegram</p>
              <p className="text-cyan-400 text-sm">
                @kapil_dev
              </p>
              <p className="text-gray-500 text-xs">
                Quick chat on Telegram
              </p>
            </div>

          </div>

          {/* Github */}
          <div className="flex items-center gap-4 border border-white/5 rounded-lg p-4">

            <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-purple-500/10">
              <img src="https://img.icons8.com/?size=100&id=3tC9EQumUAuq&format=png&color=7950F2" className="text-purple-500" size={20} />
            </div>

            <div>
              <p className="text-white font-medium">GitHub</p>
              <p className="text-cyan-400 text-sm">
                github.com/kapil-dev
              </p>
              <p className="text-gray-500 text-xs">
                Check out my code
              </p>
            </div>

          </div>

          {/* Location */}
          <div className="flex items-center gap-4 border border-white/5 rounded-lg p-4">

            <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-purple-500/10">
              <Globe className="text-purple-500" size={20} />
            </div>

            <div>
              <p className="text-white font-medium">
                Location
              </p>

              <p className="text-cyan-400 text-sm">
                Yamuna Nagar, Haryana, India
              </p>

              <p className="text-gray-500 text-xs">
                Building from my setup
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* Status Card */}
      <div className="border border-white/10 rounded-xl bg-black/30 backdrop-blur-sm p-5 md:p-6">

        <p className="text-purple-400 font-mono text-sm mb-5">
          // CURRENT STATUS
        </p>

        <div className="flex items-center gap-3">

          <div className="h-3 w-3 rounded-full bg-green-400 animate-pulse" />

          <div>
            <p className="text-green-400 font-medium">
              Open for opportunities
            </p>

            <p className="text-gray-500 text-sm">
              Freelance projects, collaborations and full-time roles.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default ContactInfo;
