import GalleryWidget from "app/widgets/gallery-widget";
import Image from "next/image";

export default function IntroSectionView() {
  return (
    <>
        <div className="pb-5 hover:scale-105 transition-transform duration-300">
            <h2 className="text-8xl font-bold py-10">
            Welcome to my Quest Museum!
            </h2>
            <p className="text-2xl text-center text-gray-500">
                A little thing I made to show off my projects and skills.
            </p>
        </div>
        <div className="mb-30">
            <h2 className="text-5xl font-bold py-10 hover:scale-105 transition-transform duration-300">
            Explore projects by category.
            </h2>
            <a href="#portfolio" className="basis-1/8 items-center justify-center m-5 p-5 outline-1 text-black bg-white transform transition-transform hover:scale-105 hover:bg-black hover:text-white hover:cursor-pointer">Portfolio</a>
        </div>
        <div>
            <GalleryWidget>
                <div className="outline-1 outline-gray-700 bg-white text-black p-10 mx-8 h-96 w-96">
                    <p className="text-lg font-bold text-left mb-4">
                        Intro Card!
                    </p>
                    <hr/>
                    <br/>
                    <p className="text-md max-w-2xl">
                        Welcome to my website! I hope you enjoy your stay.
                    </p>
                    <br/>
                    <Image
                        src="/cat-work-icon-text-outline-dropshadow-colored.png"
                        alt="Cat Icon"
                        width={160}
                        height={160}
                        className="inline-block ml-2"
                        />
                </div>
                <div className="outline-1 outline-gray-700 bg-white text-black mx-8 p-10 h-96 w-96">
                    <p className="text-lg font-bold text-left mb-4">
                        Forward always!
                    </p>
                    <hr/>
                    <br/>
                    <p className="text-md max-w-2xl">
                        I’m constantly working to improve myself and learn new things, so
                        expect all sorts of projects and project types! 
                    </p>
                </div>
            </GalleryWidget>
        </div>
    </>
  );
}