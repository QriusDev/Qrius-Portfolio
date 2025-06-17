'use client'

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function NavigationViewWidget() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="flex flex-col sm:flex-row row-start-1 w-full pt-20 sm:pt-8 sm:pb-2 sm:px-10 sm:justify-between items-center bg-[#000000] outline-1 z-10">
            <Link href="/" className="flex flex-col sm:flex-row sm:row-start-1 col-start-1 justify-center items-center gap-4 hover:scale-105 transform transition-transform">
                <Image
                src="https://storage.googleapis.com/qrius-portfolio-assets/images/misc/qrius-alex-profile-pic.jpg"
                alt="Qrius Alex Site Logo"
                width={75}
                height={75}
                />
                <h1 className="text-xl text-center font-bold text-white">Qrius Alex</h1>
            </Link>
            <div
                className="sm:flex flex-row gap-4 sm:gap-8 items-center">
                <button
                    className="sm:hidden text-white text-2xl px-4 py-2"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    ☰
                </button>
            </div>
            <div
                className={`${
                    menuOpen ? "block" : "hidden md:block"
                } flex flex-col sm:flex-row gap-4 sm:gap-8 absolute sm:static top-16 left-0 w-full sm:w-auto bg-[#000000] sm:bg-transparent p-4 sm:p-0`}
            >
                <Link
                href="/about"
                className="text-2xl font-bold mr-4 text-white hover:underline hover:underline-offset-4"
                onClick={() => setMenuOpen(false)}
                passHref>
                    About
                </Link>
                <Link
                href="/contact"
                className="text-2xl font-bold mr-4 text-white hover:underline hover:underline-offset-4"
                onClick={() => setMenuOpen(false)}
                passHref>
                    Contact
                </Link>
                <Link 
                href="/blog" 
                className="text-2xl font-bold mr-4 text-white hover:underline hover:underline-offset-4" 
                onClick={() => setMenuOpen(false)}
                passHref>
                    Blog
                </Link>
            </div>
        </nav>
    );
}