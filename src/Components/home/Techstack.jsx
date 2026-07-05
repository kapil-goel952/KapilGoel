import React from "react";

const TechStack = () => {
    const techs = [
        {
            name: "Frontend",
            description: "React, Tailwind, JavaScript",
            image: "/images/frontend.png",
        },
        {
            name: "Mobile",
            description: "React Native, Expo",
            image: "/images/mobile.png",
        },
        {
            name: "Game Dev",
            description: "Unity, C#, Game Systems",
            image: "/images/gamedev.png",
        },

        {
            name: "Database",
            description: "MongoDB, SQLite",
            image: "/images/database.png",
        },
        {
            name: "Tools",
            description: "Git, GitHub, VS Code, Figma",
            image: "/images/tools.png",
        },
    ];

    return (
        <div
            style={{
                width: "100%",
                padding: "20px 0",
            }}
        >
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                    gap: "20px",
                }}
            >
                {techs.map((tech, index) => (
                    <div
                        key={index}
                        style={{
                            backgroundColor: "#0f172a",
                            border: "1px solid #312e81",
                            borderRadius: "12px",
                            padding: "20px",
                            display: "flex",
                            alignItems: "center",
                            gap: "15px",
                            cursor: "pointer",
                            transition: "0.3s",
                        }}
                    >
                        <img
                            src={tech.image}
                            alt={tech.name}
                            style={{
                                width: "50px",
                                height: "50px",
                                objectFit: "contain",
                            }}
                        />

                        <div>
                            <h3
                                style={{
                                    color: "white",
                                    margin: 0,
                                    fontSize: "18px",
                                }}
                            >
                                {tech.name}
                            </h3>

                            <p
                                style={{
                                    color: "#94a3b8",
                                    fontSize: "13px",
                                    marginTop: "5px",
                                }}
                            >
                                {tech.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TechStack;