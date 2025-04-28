import CardWidget from "app/widgets/card-widget";
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
                <CardWidget title="Intro Card!" description="Welcome to my website! I hope you enjoy your stay.">
                    <Image
                        src="/cat-work-icon-text-outline-dropshadow-colored.png"
                        alt="Cat Icon"
                        width={160}
                        height={160}
                        className="inline-block ml-2"
                        />
                </CardWidget>
                <CardWidget
                    title="Forward always!"
                    description="I&apos;m constantly working to improve myself and learn new things, so expect all sorts of projects and project types!">
                </CardWidget>
                <CardWidget
                    title="Why cats?"
                    description="Because 'curiosity killed the cat'! But that doesn't mean that it's bad to be Qrius!">
                </CardWidget>
            </GalleryWidget>
        </div>
    </>
  );
}