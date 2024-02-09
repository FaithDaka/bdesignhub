import React from "react";
import PageLayoutComponent from "components/Layout/PageLayout";
import HeroSectionComponent from "components/Homepage/HeroSection";
import AboutSectionComponent from "components/Homepage/AboutSection";
import ConceptsComponent from "components/Homepage/Concepts";
import SolutionsComponent from "components/Homepage/Solutions";
import ServicesComponent from "components/Homepage/Services";
import FreestyleSectionComponent from "components/Homepage/FreestyleSection";

const HomePage = () => {
  return (
    <>
      <PageLayoutComponent>
        <div className="Homepage">
          <HeroSectionComponent />
          <AboutSectionComponent />
          <ConceptsComponent />
          <SolutionsComponent />
          <ServicesComponent />
          <FreestyleSectionComponent />
        </div>
      </PageLayoutComponent>
    </>
  );
};

export default HomePage;
