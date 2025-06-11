//import ArtPortfolio from "app/portfolio-views/art-portfolio";
import GamesPortfolio from "app/portfolio-views/games-portfolio";
import MusicPortfolio from "app/portfolio-views/music-portfolio";
import NoPortfolio from "app/portfolio-views/no-portfolio";
import SoftwarePortfolio from "app/portfolio-views/software-portfolio";
import CategoryWidget from "app/widgets/category-widget";

export default function PortfolioSectionView() {
  return (
    <>
        <h1 className="col-span-full text-3xl font-bold text-black">Portfolio</h1>
        <p className="col-span-full text-2xl text-black">Here are some of my projects and works across various categories. More coming soon!</p>
        <hr />
        <div id="portfolio" className="grid grid-cols-1 sm:grid-cols-2 gap-12 mt-12 justify-items-center">
            <CategoryWidget
            title="Software"
            icon="/software-icon-outline-dropshadow-colored.png"
            alt="Software Icon"
            color="#D04848">
              <SoftwarePortfolio />
            </CategoryWidget>
            <CategoryWidget
            title="Music"
            alt="Music Icon"
            icon="/qrius-listening-icon-outline-dropshadow-greyscale.png"
            color="#DCC045">
              <MusicPortfolio />
            </CategoryWidget>
            <CategoryWidget
            title="Games"
            icon="/joystick-logo-outline-dropshadow-black.png"
            alt="Games Icon"
            color="#685BD1">
              <GamesPortfolio />
            </CategoryWidget>
            <CategoryWidget
            title="Art"
            icon="/qrius-paint-brush-icon-outline-dropshadow-greyscale.png"
            alt="Art Icon"
            color="#48D09C">
              <NoPortfolio />
            </CategoryWidget>
      </div>
    </>
  );
}