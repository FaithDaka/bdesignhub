import TopBarComponent from "components/Layout/Topbar";
import React from "react";
import FooterComponent from "./Footer";

const PageLayoutComponent = ({ children }) => {
  return (
    <div className="Page">
      <TopBarComponent />
      {children}
      <FooterComponent />
    </div>
  );
};

export default PageLayoutComponent;
