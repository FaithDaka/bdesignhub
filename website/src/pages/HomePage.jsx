import React from "react";
import PageLayoutComponent from "components/Layout/PageLayout";
import HeroSectionComponent from "components/Homepage/HeroSection";
import AboutSectionComponent from "components/Homepage/AboutSection";
import ConceptsComponent from "components/Homepage/Concepts";

const HomePage = () => {
  return (
    <>
      <PageLayoutComponent></PageLayoutComponent>
      <div className="Homepage">
        <HeroSectionComponent/>
        <AboutSectionComponent/>
        <ConceptsComponent/>
      </div>
    </>
  );
};

export default HomePage;
