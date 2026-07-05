import React from "react";

const skills = [
  {
    title: "Frontend",
    desc: "Building responsive and interactive web interfaces.",
    percentage: "90%",
  },
  {
    title: "Mobile",
    desc: "Creating cross-platform mobile applications.",
    percentage: "80%",
  },
  {
    title: "Game Development",
    desc: "Building games using Unity & C#.",
    percentage: "75%",
  },
  {
    title: "Backend",
    desc: "Working with APIs and databases.",
    percentage: "65%",
  },
  {
    title: "Tools & Others",
    desc: "Development tools and productivity boosters.",
    percentage: "85%",
  },
];

const SkillsMatrix = () => {
  return (
    <div className="bg-[#0b0f1a] border border-purple-900/30 rounded-2xl p-6 h-full">
      <h2 className="text-purple-400 uppercase tracking-widest text-sm mb-8">
        // Skills Matrix
      </h2>

      <div className="space-y-6">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-2">
              <div>
                <h3 className="text-white text-sm font-medium">
                  {skill.title}
                </h3>

                <p className="text-gray-400 text-xs">
                  {skill.desc}
                </p>
              </div>

              <span className="text-purple-400 text-sm">
                {skill.percentage}
              </span>
            </div>

            <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-linear-to-r from-purple-500 to-fuchsia-400 rounded-full"
                style={{ width: skill.percentage }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsMatrix;