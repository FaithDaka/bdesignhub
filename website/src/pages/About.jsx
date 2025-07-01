import HeaderComponent from "components/Aboutpage/HeaderComponent";
import MissionComponent from "components/Aboutpage/Mission";
import TeamMembersComponent from "components/Aboutpage/Team";
import VisionComponent from "components/Aboutpage/Vision";
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
        <MissionComponent />
        <TeamMembersComponent />
        <VisionComponent />
      </div>
    </PageLayoutComponent>
  );
};

export default AboutPage;
