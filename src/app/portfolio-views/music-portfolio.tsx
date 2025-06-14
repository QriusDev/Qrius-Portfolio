import Image from "next/image";
import React from "react";

type Project = {
  title: string;
  description: string;
  image: string;
  link: string;
  musicSrc?: string; // Optional music source
  spotifyLink?: string; // Optional Spotify link
};

const projects: Project[] = [
  {
    title: "Power Lions",
    description: "A song I began making for a commission but it went its own direction. Its a groove!",
    image: "https://storage.googleapis.com/qrius-portfolio-assets/images/powerlions_cover.jpg",
    link: "https://drive.google.com/file/d/1vQ6fE6L9B0T9IQosC_UKD5sQjnWBTE2M/view?usp=sharing",
    musicSrc: "https://storage.googleapis.com/qrius-portfolio-assets/music/PowerLions_Master(4).mp3",
    spotifyLink: "https://open.spotify.com/track/2D1omufpsc9zXDj6G1wKRy?si=660b03221f5d406b",
  },
  {
    title: "Lyst",
    description: "The song that started it all! A song for a game that I'm writing. This will be the main theme to the game, and I hope to release it in 2024. This song is a mix of electronic and orchestral music, and I think it turned out really well. Still a work in progress as I add more to the game.",
    image: "https://storage.googleapis.com/qrius-portfolio-assets/images/lyst_cover.jpg",
    link: "https://drive.google.com/file/d/1j5KMXVxdGvU4yEwmDUQDqvmU37HXi1wH/view?usp=sharing",
    musicSrc: "https://storage.googleapis.com/qrius-portfolio-assets/music/Lyst_Cmin_80BPM_Draft.mp3",
  },
  {
    title: "We Started Falling",
    description: "My very first song release that I was extremely proud of in 2020. I made it on stream and it turned out way better than I expected. Its still one of my favorite songs of mine, though I've made much better since then.",
    image: "https://i1.sndcdn.com/artworks-weo3LSKlAU290X4o-seu57Q-t1080x1080.jpg",
    link: "https://drive.google.com/file/d/1uLMwrwFsIVHfOV13VeElX1U99dWQpKQq/view?usp=sharing",
    musicSrc: "https://storage.googleapis.com/qrius-portfolio-assets/music/we_started_falling_postmaster4.wav",
  },
];

export default function MusicPortfolio() {
  return (
    <section className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-4 text-black">Music Portfolio</h1>
      <p className="mb-8 text-lg text-gray-700">
        Explore my music projects! Each section below contains a summary, an image, and a link to view the project in more detail.
      </p>
      <div>
        {projects.map((project, idx) => (
          <details key={idx} className="mb-4 border rounded-lg p-4 bg-gray-50 group">
            <summary className="cursor-pointer text-xl font-semibold items-center text-black gap-4">
              {project.title}
            </summary>
            <div className="mt-2 flex flex-col sm:flex-row gap-4">
              <Image
                src={project.image}
                alt={project.title}
                width={160}
                height={160}
                className="object-cover rounded-md border"
              />
              <div className="flex-1">
                <p className="mb-2 text-gray-700">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 mx-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                >
                  View Project
                </a>
                {project.spotifyLink && (
                  <a
                    href={project.spotifyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 mx-2 px-4 py-2 bg-green-600 text-black rounded hover:bg-green-700 transition"
                  >
                    Listen on Spotify
                  </a>
                )}
                {/* Show music player inside expanded section as well */}
                {project.musicSrc && (
                    <audio controls className="mt-4 rounded-md border group-open:block hidden w-full">
                        <source src={project.musicSrc}/>
                        Your browser does not support the audio element.
                    </audio>
                )}
              </div>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}