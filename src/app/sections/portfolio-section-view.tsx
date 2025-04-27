import CategoryWidget from "app/widgets/category-widget";

export default function PortfolioSectionView() {
  return (
    <>
        <div id="portfolio" className="qalex-full-width grid grid-cols-1 sm:grid-cols-2 gap-12 mt-12 justify-items-center">
            <CategoryWidget 
            title="Software"
            icon="/software-icon-outline-dropshadow-colored.png"
            alt="Software Icon"
            color="#D04848"
            />
            <CategoryWidget
            title="Music"
            alt="Music Icon"
            icon="/qrius-listening-icon-outline-dropshadow-greyscale.png"
            color="#DCC045"
            />
            <CategoryWidget
            title="Games"
            icon="/joystick-logo-outline-dropshadow-black.png"
            alt="Games Icon"
            color="#685BD1"
            />
            <CategoryWidget
            title="Art"
            icon="/qrius-paint-brush-icon-outline-dropshadow-greyscale.png"
            alt="Art Icon"
            color="#48D09C"
            />
      </div>
    </>
  );
}