import Image from "next/image";
import Category from "./category";


export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <nav className="row-start-1 w-full flex justify-between items-center px-8 sm:px-20 py-4 bg-[#383846] shadow-md rounded-lg">
        <div className="flex items-center gap-4">
          <Image
            src="/qrius-cat-logo-icon2-outline-dropshadow-colored.png"
            alt="Qrius Cat Logo"
            width={90}
            height={90}
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
        </div>
      </nav>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start text-center">
        <h2 className="text-3xl font-bold qalex-title">
          Welcome to my Quest Museum!
        </h2>
        <Image
          src="/qrius-cat-logo-icon2-outline-dropshadow-colored.png"
          alt="Qrius Cat Logo"
          width={300}
          height={300}
          className="mx-auto"
          priority
          quality={100}
          placeholder="blur"
          blurDataURL="/qrius-cat-logo-icon2-outline-dropshadow-colored.png"
          style={{ maxWidth: "100%", height: "auto" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <p className="text-lg max-w-2xl">
          I’m constantly working to improve myself and learn new things, so
          expect all sorts of projects and project types! I’ve been learning
          new recipes to cook recently, so I was thinking about documenting
          those projects as well. We’ll see. Anyway, I hope you enjoy your time
          here! Bathrooms are in the back... 
          <Image
            src="/cat-work-icon-text-outline-dropshadow-colored.png"
            alt="Cat Icon"
            width={160}
            height={160}
            className="inline-block ml-2"
            />
        </p>
        <div className="qalex-full-width grid grid-cols-1 sm:grid-cols-2 gap-12 mt-12 justify-items-center">
          <Category 
            title="Software"
            icon="/software-icon-outline-dropshadow-colored.png"
            alt="Software Icon"
            color="#D04848"
          />
          <Category
            title="Music"
            alt="Music Icon"
            icon="/qrius-listening-icon-outline-dropshadow-greyscale.png"
            color="#DCC045"
            />
          <Category
            title="Games"
            icon="/joystick-logo-outline-dropshadow-black.png"
            alt="Games Icon"
            color="#685BD1"
          />
          <Category
            title="Art"
            icon="/qrius-paint-brush-icon-outline-dropshadow-greyscale.png"
            alt="Art Icon"
            color="#48D09C"
          />
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <p
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        >
          Created by Daquaris Chadwick
        </p>
      </footer>
    </div>
  );
}
