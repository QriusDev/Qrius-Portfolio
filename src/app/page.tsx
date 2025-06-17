import SectionViewWidget from "./widgets/section-view-widget";
import IntroSectionView from "./sections/intro-section-view";
import PortfolioSectionView from "./sections/portfolio-section-view";
import CardSectionView from "./sections/card-section-view";
import BlogCarousel from "./sections/blog-carousel-section-view";


export default function Home() {
  return (
    <main className="flex flex-col row-start-2">
      <SectionViewWidget>
        <IntroSectionView />
      </SectionViewWidget>
      <SectionViewWidget extraStyle="bg-white">
        <BlogCarousel />
      </SectionViewWidget>
      <SectionViewWidget>
        <CardSectionView />
      </SectionViewWidget>
      <SectionViewWidget extraStyle="bg-white">
        <PortfolioSectionView />
      </SectionViewWidget>
    </main>
  );
}
