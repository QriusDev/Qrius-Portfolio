import React from "react";
import Image from "next/image";

type Project = {
  title: string;
  description: string;
  image: string;
  link: string;
};

const projects: Project[] = [
  {
    title: "Caticoe (WIP)",
    description: "A Progressive \"Space-Linking\" Strategy Game where players advance a graph of linked spaces to achieve the goal of placing some assortment of pieces in a format (aka. 3/4 in-a-row, islands of similar pieces, and 3 dimensional patterns) before the other player to win the game.",
    image: "https://storage.googleapis.com/qrius-portfolio-assets/images/project-covers/caticoe_design_blueprint.jpg",
    link: "https://github.com/QriusDev/Caticoe",
  },

];

export default function GamesPortfolio() {
    return (
        <section className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-4 text-black">Games Portfolio</h1>
            <p className="mb-8 text-lg text-gray-700">
                Explore my games projects! Each section below contains a summary, an image, and a link to view the project in more detail.
            </p>
            <div>
                {projects.map((project, idx) => (
                    <details key={idx} className="mb-4 border rounded-lg p-4 bg-gray-50">
                        <summary className="cursor-pointer text-xl font-semibold text-black">{project.title}</summary>
                        <div className="mt-2 flex flex-col sm:flex-row gap-4">
                            <img
                                src={project.image}
                                alt={project.title}
                                width={160}
                                height={160}
                                className="w-40 h-40 object-cover rounded-md border"
                            />
                            <div className="flex-1">
                                <p className="mb-2 text-gray-700">{project.description}</p>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                                >
                                    View Project
                                </a>
                            </div>
                        </div>
                    </details>
                ))}
            </div>
        </section>
    );
}