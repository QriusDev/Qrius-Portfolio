import SectionViewWidget from "./widgets/section-view-widget";
import IntroSectionView from "./sections/intro-section-view";
import PortfolioSectionView from "./sections/portfolio-section-view";


export default function Home() {
  return (
    <main className="flex flex-col row-start-2 items-center sm:items-start text-center">
      <SectionViewWidget noTopPadding={true}>
        <IntroSectionView />
      </SectionViewWidget>
      <SectionViewWidget>
        <PortfolioSectionView />
      </SectionViewWidget>
    </main>
  );
}
