import React from "react";
import PageLayoutComponent from "components/Layout/PageLayout";
import HeroSectionComponent from "components/Homepage/HeroSection";
import AboutSectionComponent from "components/Homepage/AboutSection";
import ServicesComponent from "components/Homepage/Services";
import CompanyTestimonials from "components/Homepage/CompanyTestimonials";
import PageBreakComponent from "components/Homepage/PageBreak";
import PortfolioSectionComponent from "components/Homepage/PortfolioSection";
import PriceModelsComponent from "components/Homepage/PriceModels";
import { useInitScrollTop } from "util/customHooks";

const HomePage = () => {
  useInitScrollTop();
  return (
    <>
      <PageLayoutComponent contactBackground={"#FEF9F0"}>
        <div className="Homepage">
          <div className="hero-container">
            <HeroSectionComponent />
            <CompanyTestimonials />
          </div>
          <AboutSectionComponent />
          <ServicesComponent />
          <PageBreakComponent />
          <PortfolioSectionComponent />
          <PriceModelsComponent />
        </div>
      </PageLayoutComponent>
    </>
  );
};

export default HomePage;
