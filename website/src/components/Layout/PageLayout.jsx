import TopBarComponent from "components/Layout/Topbar";
import React from "react";
import FooterComponent from "./Footer";
import ContactDetailsComponent from "./ContactDetails";

const PageLayoutComponent = ({ children }) => {
  return (
    <div className="Page">
      <TopBarComponent />
      {children}
      <ContactDetailsComponent/>
      <FooterComponent />
    </div>
  );
};

export default PageLayoutComponent;
