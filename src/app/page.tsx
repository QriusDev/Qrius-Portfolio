"use client";

import SectionViewWidget from "./widgets/section-view-widget";
import IntroSectionView from "./sections/intro-section-view";
import PortfolioSectionView from "./sections/portfolio-section-view";
import CardSectionView from "./sections/card-section-view";
import BlogCarousel from "./sections/blog-carousel-section-view";
import { CookiesProvider } from "react-cookie";
import PetCatWidget from "./widgets/pet-cat-widget";


export default function Home() {
  return (
    <CookiesProvider>
      <main className="flex flex-col row-start-2">
        <SectionViewWidget>
          <IntroSectionView />
        </SectionViewWidget>
        <PetCatWidget></PetCatWidget>
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
    </CookiesProvider>
  );
}
