import Image from "next/image";

export default function NavigationViewWidget() {
    return (
        <nav className="row-start-1 w-full flex justify-between items-center sm:pt-20 sm:pb-5 sm:pr-20 bg-[#000000] outline-1 z-10">
            <div className="flex items-center gap-4 hover:scale-105 transform transition-transform">
                <Image
                src="/site-logo-dropshadow-white.png"
                alt="Qrius Alex Site Logo"
                width={75}
                height={75}
                />
                <h1 className="text-xl font-bold text-white">Qrius Alex</h1>
            </div>
            <div className="flex gap-8">
                <a
                href="/about"
                className="text-lg text-white hover:underline hover:underline-offset-4"
                >
                    About
                </a>
                <a
                href="/contact"
                className="text-lg text-white hover:underline hover:underline-offset-4"
                >
                    Contact
                </a>
                <a
                href="/blog"
                className="text-lg text-white hover:underline hover:underline-offset-4"
                >
                    Blog
                </a>
            </div>
        </nav>
    );
}