'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import CategoryViewWidget from './category-view-widget';
import NoPortfolio from 'app/portfolio-views/no-portfolio';

export default function CategoryWidget({
  children,
  title,
  icon,
  alt
}: {
  children: React.ReactNode;
  title: string;
  icon: string;
  alt: string;
  color: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const elementRef = useRef<HTMLButtonElement>(null);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

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

  useEffect(() => {
    if (elementRef.current) {
      setWidth(elementRef.current.offsetWidth);
      setHeight(elementRef.current.offsetHeight);
    }
  }, []);

  // Calculate the size for a square button based on the current width or height
  const size = Math.max(width, height, 320); // fallback to 320px minimum

  const processedClassName = `flex flex-col bg-black outline-1 items-center justify-center text-white hover:cursor-pointer hover:shadow-lg shadow-white transform transition-transform hover:scale-105`;

  return (
    <>
      <button
        ref={elementRef}
        onClick={handleClick}
        className={processedClassName}
        style={{
          width: size,
          height: size,
          minWidth: 200,
          minHeight: 200,
          aspectRatio: "1 / 1",
          padding: 0,
        }}
      >
        <div className="flex flex-col items-center justify-center w-full h-full p-12">
          <Image src={icon} alt={alt} width={160} height={160} />
          <h3 className="text-2xl font-bold mt-6">{title}</h3>
        </div>
      </button>

      {isOpen && (
        <CategoryViewWidget
          isClosing={isClosing}
          handleClose={handleClose}
          title={title}>
            {children ? (
              children
            ) : (
              <NoPortfolio />
            )}
          </CategoryViewWidget>
      )}
    </>
  );
}