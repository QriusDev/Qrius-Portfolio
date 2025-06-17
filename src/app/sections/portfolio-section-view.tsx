//import ArtPortfolio from "app/portfolio-views/art-portfolio";
import GamesPortfolio from "app/portfolio-views/games-portfolio";
import MusicPortfolio from "app/portfolio-views/music-portfolio";
import NoPortfolio from "app/portfolio-views/no-portfolio";
import SoftwarePortfolio from "app/portfolio-views/software-portfolio";
import CategoryWidget from "app/widgets/category-widget";

export default function PortfolioSectionView() {
  return (
    <>
        <h1 id="portfolio" className="col-span-full text-5xl font-bold text-black text-center">Portfolio</h1>
        <p className="col-span-full text-2xl text-black text-center">Here are some of my projects and works across various categories. More coming soon!</p>
        <hr />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-0 mt-12 sm:justify-center justify-items-center">
            <CategoryWidget
            title="Software"
            icon="https://storage.googleapis.com/qrius-portfolio-assets/images/misc/software-icon-outline-dropshadow-colored.png"
            alt="Software Icon"
            color="#D04848">
              <SoftwarePortfolio />
            </CategoryWidget>
            <CategoryWidget
            title="Music"
            alt="Music Icon"
            icon="https://storage.googleapis.com/qrius-portfolio-assets/images/misc/qrius-listening-icon-outline-dropshadow-greyscale.png"
            color="#DCC045">
              <MusicPortfolio />
            </CategoryWidget>
            <CategoryWidget
            title="Games"
            icon="https://storage.googleapis.com/qrius-portfolio-assets/images/misc/joystick-logo-outline-dropshadow-black.png"
            alt="Games Icon"
            color="#685BD1">
              <GamesPortfolio />
            </CategoryWidget>
            <CategoryWidget
            title="Art"
            icon="https://storage.googleapis.com/qrius-portfolio-assets/images/misc/qrius-paint-brush-icon-outline-dropshadow-greyscale.png"
            alt="Art Icon"
            color="#48D09C">
              <NoPortfolio />
            </CategoryWidget>
      </div>
    </>
  );
}