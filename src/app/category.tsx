'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Category({
  title,
  icon,
  alt,
  color = "#48D09C",
}: {
  title: string;
  icon: string;
  alt: string;
  color: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
    setIsClosing(false);
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
    }, 300); // Match the animation duration
  };

  return (
    <>
      <button
        onClick={handleClick}
        style={{ backgroundColor: color }}
        className="qalex-full-width flex flex-col items-center justify-center p-12 text-white rounded-lg shadow-lg transform transition-transform hover:scale-105"
      >
        <Image src={icon} alt={alt} width={160} height={160} />
        <h3 className="text-2xl font-bold mt-6">{title}</h3>
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div
            className={`bg-white rounded-lg p-8 w-[85%] max-h-[85%] overflow-y-auto transform transition-transform duration-300 ${
              isClosing ? "scale-95 opacity-0" : "scale-100 opacity-100"
            }`}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-3xl font-bold" style={{ color:"black" }}>{title}</h2>
              <button
                onClick={handleClose}
                className="text-gray-500 hover:text-gray-800"
              >
                ✖
              </button>
            </div>
            <p className="text-lg mb-4" style={{ color:"black" }}>
              Woops! I haven't added functionlity for the {title} category yet. Come back later!
            </p>
            <ul className="list-disc pl-5" style={{ color:"black" }}>
              <li>Object 1</li>
              <li>Object 2</li>
              <li>Object 3</li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}