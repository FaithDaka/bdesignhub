import HeaderComponent from "components/Aboutpage/HeaderComponent";
import React from "react";
import { useInitScrollTop } from "util/customHooks";

const AboutPage = () => {
  useInitScrollTop();
  return (
    <div className="Aboutpage">
      <HeaderComponent />
    </div>
  );
};

export default AboutPage;
