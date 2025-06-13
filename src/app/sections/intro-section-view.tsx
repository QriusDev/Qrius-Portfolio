'use client'

import React, { useCallback } from "react";

export default function IntroSectionView() {
  const handlePortfolioClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const section = document.getElementById("portfolio");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center px-4 py-8 md:px-12 lg:px-24 box-border">
      <div className="pb-5 hover:scale-105 transition-transform duration-300 w-full max-w-5xl mx-auto">
        <h2 className="text-4xl sm:text-6xl md:text-8xl font-bold py-10 text-center">
          Welcome to my Quest Museum!
        </h2>
        <p className="text-xl sm:text-2xl text-center text-gray-500">
          A little thing I made to show off my projects and skills.
        </p>
      </div>
      <div className="mb-10 w-full max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold py-10 hover:scale-105 transition-transform duration-300 text-center">
          Explore projects by category.
        </h2>
        <div className="flex justify-center">
          <a
            href="#portfolio"
            onClick={handlePortfolioClick}
            className="basis-1/8 items-center justify-center m-5 p-5 outline-1 text-black bg-white transform transition-transform hover:scale-105 hover:bg-black hover:text-white hover:cursor-pointer rounded-lg shadow"
          >
            Portfolio
          </a>
        </div>
      </div>
    </section>
  );
}