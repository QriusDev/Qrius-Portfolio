import Image from "next/image";
import React from "react";

type Project = {
  title: string;
  description: string;
  image: string;
  link: string;
};

const projects: Project[] = [
  {
    title: "Qrius Player",
    description: "A media player for websites and streaming purposes. Built with HTML5 and JavaScript for easy integration.",
    image: "https://github.com/QriusDev/QriusPlayer/raw/master/examples/example2.png",
    link: "https://github.com/QriusDev/QriusPlayer",
  },
  {
    title: "Simple Breaker",
    description: "A simple breakout game built with HTML5 and JavaScript. This was a project to learn the basics of canvas rendering.",
    image: "https://github.com/QriusDev/SimpleBreaker/raw/master/ex1.png",
    link: "https://github.com/QriusDev/SimpleBreaker"
  }
];

export default function SoftwarePortfolio() {
  return (
    <section className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-4 text-black">Software Portfolio</h1>
      <p className="mb-8 text-lg text-gray-700">
        Explore my software projects! Each section below contains a summary, an image, and a link to view the project in more detail.
      </p>
      <div>
        {projects.map((project, idx) => (
          <details key={idx} className="mb-4 border rounded-lg p-4 bg-gray-50">
            <summary className="cursor-pointer text-xl font-semibold text-black">{project.title}</summary>
            <div className="mt-2 flex flex-col sm:flex-row gap-4">
              <Image
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
                  className="inline-block mt-2 px-4 py-2 bg-blue-600 text-black rounded hover:bg-blue-700 transition"
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