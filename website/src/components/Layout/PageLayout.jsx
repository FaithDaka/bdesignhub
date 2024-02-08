import TopBarComponent from "components/Layout/Topbar";
import React from "react";

const PageLayoutComponent = ({ children }) => {
  return (
    <div className="Page">
      <TopBarComponent />
      <div className="page-wrapper">{children}</div>
    </div>
  );
};

export default PageLayoutComponent;
