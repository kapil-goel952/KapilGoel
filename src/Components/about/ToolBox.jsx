import React from "react";

const Toolbox = () => {
  const tools = [
    { name: "VS Code", img: "/tools/vscode.png" },
    { name: "Figma", img: "/tools/figma.png" },
    { name: "Postman", img: "/tools/postman.png" },
    { name: "GitHub", img: "/tools/github.png" },
    { name: "Docker", img: "/tools/docker.png" },

    { name: "Vercel", img: "/tools/vercel.png" },
    { name: "Netlify", img: "/tools/netlify.png" },
    { name: "Linux", img: "/tools/linux.png" },
    { name: "Notion", img: "/tools/notion.png" },
    { name: "Blender", img: "/tools/blender.png" },
  ];

  return (
    <div className="border border-[#1d2333] rounded-xl p-6 bg-[#070b16]">
      <h2 className="text-purple-500 text-sm tracking-widest mb-6">
        // MY TOOLBOX
      </h2>

      <div className="grid grid-cols-5 gap-4">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="
              border border-[#1d2333]
              rounded-xl
              h-32
              flex
              flex-col
              items-center
              justify-center
              gap-3
              hover:border-purple-500/40
              hover:shadow-[0_0_20px_rgba(168,85,247,0.15)]
              transition-all
            "
          >
            <img
              src={tool.img}
              alt={tool.name}
              className="w-12 h-12 object-contain"
            />

            <p className="text-white text-sm">
              {tool.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Toolbox;