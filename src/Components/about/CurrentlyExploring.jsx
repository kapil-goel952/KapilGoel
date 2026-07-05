import React from "react";

const CurrentlyExploring = () => {
  const exploring = [
    {
      title: "Cybersecurity",
      desc: "Learning about ethical hacking, penetration testing and system security.",
      img: "/icons/cyber.png",
    },
    {
      title: "AI & Machine Learning",
      desc: "Understanding AI models and building intelligent applications.",
      img: "/icons/ai.png",
    },
    {
      title: "Game Systems",
      desc: "Exploring game mechanics, physics and multiplayer systems.",
      img: "/icons/game.png",
    },
    {
      title: "Immersive UI/UX",
      desc: "Creating futuristic and immersive user experiences.",
      img: "/icons/ui.png",
    },
  ];

  return (
    <div className="border border-[#1d2333] rounded-xl p-6 bg-[#070b16]">
      <h2 className="text-purple-500 text-sm tracking-widest mb-6">
        // CURRENTLY EXPLORING
      </h2>

      <div className="flex flex-col gap-3">
        {exploring.map((item, index) => (
          <div
            key={index}
            className="border border-[#1d2333] rounded-lg p-4 flex items-start gap-4 hover:border-purple-500/40 transition-all"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-10 h-10 object-contain"
            />

            <div>
              <h3 className="text-white text-lg font-medium">
                {item.title}
              </h3>

              <p className="text-gray-400 text-sm leading-6">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurrentlyExploring;