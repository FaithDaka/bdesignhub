import React, { useCallback, useState } from "react";
import PageLayoutComponent from "components/Layout/PageLayout";
import HeroSectionComponent from "components/Homepage/HeroSection";
import AboutSectionComponent from "components/Homepage/AboutSection";
import ServicesComponent from "components/Homepage/Services";
import CompanyTestimonials from "components/Homepage/CompanyTestimonials";
import PageBreakComponent from "components/Homepage/PageBreak";
import PortfolioSectionComponent from "components/Homepage/PortfolioSection";
import PriceModelsComponent from "components/Homepage/PriceModels";
import { useInitScrollTop } from "util/customHooks";
import { EmailDialog } from "components/Layout/EmailDialog";

const HomePage = () => {
  useInitScrollTop();
  const [emailOpen, setEmailOpen] = useState(false);

  const openEmail = useCallback(() => setEmailOpen(true), []);
  const closeEmail = useCallback(() => setEmailOpen(false), []);
  return (
    <>
      <PageLayoutComponent contactBackground={"#F1F1F1"}>
        <div className="Homepage">
          <HeroSectionComponent />
          <AboutSectionComponent openLink={openEmail} />
          <CompanyTestimonials />
          <ServicesComponent onCtaClick={openEmail} />
          <PortfolioSectionComponent onContactClick={openEmail} />
          {/* <PageBreakComponent /> */}
          {/* <PriceModelsComponent /> */}
          <EmailDialog open={emailOpen} onClose={closeEmail} />
        </div>
      </PageLayoutComponent>
    </>
  );
};

export default HomePage;
