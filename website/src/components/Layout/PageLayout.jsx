import TopBarComponent from "components/Layout/Topbar";
import React, { useCallback, useState } from "react";
import FooterComponent from "./Footer";
import ContactDetailsComponent from "./ContactDetails";
import { EmailDialog } from "./EmailDialog";

const PageLayoutComponent = ({ children, contactBackground }) => {
  const [emailOpen, setEmailOpen] = useState(false);

  const openEmail = useCallback(() => setEmailOpen(true), []);
  const closeEmail = useCallback(() => setEmailOpen(false), []);
  return (
    <div className="Page">
      <TopBarComponent onEmailClick={openEmail} />
      {children}
      <ContactDetailsComponent backgroundColor={contactBackground} />
      <FooterComponent />
      <EmailDialog open={emailOpen} onClose={closeEmail} />
    </div>
  );
};

export default PageLayoutComponent;
