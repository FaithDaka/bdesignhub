import HeaderComponent from "components/Aboutpage/HeaderComponent";
import WordFromFounderComponent from "components/Aboutpage/WordFromFounder";
import PageLayoutComponent from "components/Layout/PageLayout";
import React from "react";
import { useInitScrollTop } from "util/customHooks";

const AboutPage = () => {
  useInitScrollTop();
  return (
    <PageLayoutComponent contactBackground={"#F7FAFA"}>
      <div className="Aboutpage">
        <HeaderComponent />
        <WordFromFounderComponent />
      </div>
    </PageLayoutComponent>
  );
};

export default AboutPage;
