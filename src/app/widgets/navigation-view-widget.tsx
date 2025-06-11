import Link from "next/link";

export default function NavigationViewWidget() {
    return (
        <nav className="row-start-1 w-full flex justify-between items-center sm:pt-20 sm:pb-5 sm:pr-20 bg-[#000000] outline-1 z-10">
            <Link href="/" className="ml-10 flex items-center gap-4 hover:scale-105 transform transition-transform">
                <img
                src="https://storage.googleapis.com/qrius-portfolio-assets/images/misc/qrius-alex-profile-pic.jpg"
                alt="Qrius Alex Site Logo"
                width={75}
                height={75}
                />
                <h1 className="text-xl font-bold text-white">Qrius Alex</h1>
            </Link>
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
                <Link href="/blog" className="text-lg text-white hover:underline hover:underline-offset-4" passHref>
                    Blog
                </Link>
            </div>
        </nav>
    );
}