'use client';

import { useState } from 'react';
import Image from 'next/image';
import CategoryViewWidget from './category-view-widget';

export default function CategoryWidget({
  title,
  icon,
  alt,
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
        className="flex flex-col bg-black outline-1 w-full items-center justify-center p-12 text-white hover:cursor-pointer hover:shadow-lg shadow-white transform transition-transform hover:scale-105"
      >
        <Image src={icon} alt={alt} width={160} height={160} />
        <h3 className="text-2xl font-bold mt-6">{title}</h3>
      </button>

      {isOpen && (
        <CategoryViewWidget
          isClosing={isClosing}
          handleClose={handleClose}
          title={title}
        />
      )}
    </>
  );
}