import React from "react";

const skills = [
  {
    name: "React",
    image: "/images/react.png",
  },
  {
    name: "React Native",
    image: "/images/react-native.png",
  },
  {
    name: "JavaScript",
    image: "/images/javascript.png",
  },
  {
    name: "TypeScript",
    image: "/images/typescript.png",
  },
  {
    name: "Tailwind CSS",
    image: "/images/tailwind.png",
  },
  {
    name: "Node.js",
    image: "/images/node.png",
  },
  {
    name: "Firebase",
    image: "/images/firebase.png",
  },
  {
    name: "GraphQL",
    image: "/images/graphql.png",
  },
  {
    name: "Unity",
    image: "/images/unity.png",
  },
  {
    name: "C#",
    image: "/images/csharp.png",
  },
  {
    name: "Git",
    image: "/images/git.png",
  },
  {
    name: "MongoDB",
    image: "/images/mongodb.png",
  },
];

const CoreSkills = () => {
  return (
    <div className="bg-[#0b0f1a] border border-purple-900/30 rounded-2xl p-6 h-full">
      <h2 className="text-purple-400 uppercase tracking-widest text-sm mb-8">
        Core Skills
      </h2>

      <div className="grid grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="
              bg-[#111827]
              border
              border-purple-900/20
              rounded-xl
              p-4
              flex
              flex-col
              items-center
              justify-center
              hover:border-purple-500
              hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]
              transition-all
            "
          >
            <img
              src={skill.image}
              alt={skill.name}
              className="w-10 h-10 object-contain mb-3"
            />

            <p className="text-white text-sm">
              {skill.name}
            </p>

            <div className="mt-3 h-0.5 w-full bg-linear-to-r from-purple-500 to-cyan-400 rounded-full" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoreSkills;