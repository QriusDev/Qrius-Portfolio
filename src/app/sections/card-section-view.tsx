import CardWidget from "app/widgets/card-widget";
import GalleryWidget from "app/widgets/gallery-widget";
import Image from "next/image";

export default function CardSectionView() {
    return (
        <section className="w-full max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Some Thoughts on Cards</h2>
            <GalleryWidget>
                <CardWidget title="Intro Card!" description="Welcome to my website! I hope you enjoy your stay.">
                    <Image
                    src="https://storage.googleapis.com/qrius-portfolio-assets/images/misc/cat-work-icon-text-outline-dropshadow-colored.png"
                    alt="Cat Icon"
                    width={160}
                    height={160}
                    className="inline-block ml-2"
                    />
                </CardWidget>
                <CardWidget
                    title="Forward always!"
                    description="I&apos;m constantly working to improve myself and learn new things, so expect all sorts of projects and project types!"
                />
                <CardWidget
                    title="Why so many cats?"
                    description="Because &quot;Curiosity killed the cat!&quot; It's a warning that too much can be dangerous, but that doesn't mean it's bad to be Qrius!"
                />
                <CardWidget
                    title="Growing"
                    description="My growth is showing and I've never been happier or felt more skilled in my life! The projects that are in the works are exciting and I can't wait for them to be fully realized. "
                />
            </GalleryWidget>
        </section>
    );
}