import TopBarComponent from "components/Layout/Topbar";
import React from "react";
import FooterComponent from "./Footer";
import ContactDetailsComponent from "./ContactDetails";

const PageLayoutComponent = ({ children, contactBackground }) => {
  return (
    <div className="Page">
      <TopBarComponent />
      {children}
      <ContactDetailsComponent backgroundColor={contactBackground}/>
      <FooterComponent />
    </div>
  );
};

export default PageLayoutComponent;
