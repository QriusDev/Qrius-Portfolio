import SectionViewWidget from "./widgets/section-view-widget";
import IntroSectionView from "./sections/intro-section-view";
import PortfolioSectionView from "./sections/portfolio-section-view";
import CardSectionView from "./sections/card-section-view";


export default function Home() {
  return (
    <main className="flex flex-col row-start-2 items-center sm:items-start text-center">
      <SectionViewWidget noTopPadding={true}>
        <IntroSectionView />
      </SectionViewWidget>
      <SectionViewWidget noTopPadding={true}>
        <CardSectionView />
      </SectionViewWidget>
      <SectionViewWidget extraStyle="bg-white">
        <PortfolioSectionView />
      </SectionViewWidget>
    </main>
  );
}
