import React from "react";
import ProjectCard from "./WorkProjectCard";

const WorkProject = () => {
  const projects = [
      {
          id: 1,
          category: "Web App",
          title: "Cyber Dashboard",
          description:
              "A futuristic dashboard for monitoring analytics, security events and system performance.",
          technologies: ["React", "Tailwind", "Chart.js"],
          link: "/"
      },

      {
          id: 2,
          category: "Mobile App",
          title: "Fitness Tracker",
          description:
              "Track workouts, calories and daily activities with a modern mobile experience.",
          technologies: ["React Native", "Firebase", "Expo"],
          link: "/"
      },

      {
          id: 3,
          category: "Game Development",
          title: "Neon Runner",
          description:
              "A cyberpunk endless runner built in Unity featuring obstacles and power-ups.",
          technologies: ["Unity", "C#", "Photoshop"],
          link: "/"
      },

      {
          id: 4,
          category: "Web App",
          title: "Portfolio V2",
          description:
              "Personal portfolio website with smooth animations and futuristic design.",
          technologies: ["React", "Tailwind", "Framer Motion"],
          link: "/"
      },

      {
          id: 5,
          category: "Experiment",
          title: "AI Chat Interface",
          description:
              "A modern chat interface concept focused on usability and clean interactions.",
          technologies: ["React", "OpenAI", "Tailwind"],
          link: "/"
      },

      {
          id: 6,
          category: "Tool",
          title: "Password Generator",
          description:
              "Generate secure passwords with customizable rules and strength indicators.",
          technologies: ["JavaScript", "CSS", "HTML"],
          link: "/"
      }
  ];

  return (
    <section className="w-full py-10 px-4 sm:px-8 lg:px-20 rounded-xl border border-gray-700">

      {/* Heading */}
      <p className="text-white text-2xl sm:text-3xl font-semibold mb-6">
        <span className="text-purple-500">#</span> Projects
      </p>

      {/* Cards */}
      <div className="flex flex-wrap gap-6 pb-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

    </section>
  );
};

export default WorkProject;

    