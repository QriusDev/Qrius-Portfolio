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
    image: "https://private-user-images.githubusercontent.com/5358875/446807686-77a7e58d-681c-4cc3-997d-02d433fcd271.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDk1ODc1NzAsIm5iZiI6MTc0OTU4NzI3MCwicGF0aCI6Ii81MzU4ODc1LzQ0NjgwNzY4Ni03N2E3ZTU4ZC02ODFjLTRjYzMtOTk3ZC0wMmQ0MzNmY2QyNzEucG5nP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI1MDYxMCUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNTA2MTBUMjAyNzUwWiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9MzhkNzZjZTFjMGQwNjY5ZDI0YjUzZjg5MGM2ZDk5Yzk1MTQ0MTJkMGE4NzVkN2MyNDFlYWI0MDJmOWRmMTQ2ZSZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QifQ.Fbo4hx0eobRh9dqta8A2meyXVBPI1LT-SU-swkje9t0",
    link: "https://github.com/QriusDev/Caticoe",
  },

];

export default function ArtPortfolio() {
  return (
    <section className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">Art Portfolio</h1>
      <p className="mb-8 text-lg text-gray-700">
        Explore my art projects! Each section below contains a summary, an image, and a link to view the project in more detail.
      </p>
      <div>
        {projects.map((project, idx) => (
          <details key={idx} className="mb-4 border rounded-lg p-4 bg-gray-50">
            <summary className="cursor-pointer text-xl font-semibold">{project.title}</summary>
            <div className="mt-2 flex flex-col sm:flex-row gap-4">
              <Image
                src={project.image}
                alt={project.title}
                className="w-40 h-40 object-cover rounded-md border"
                width={160}
                height={160}
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