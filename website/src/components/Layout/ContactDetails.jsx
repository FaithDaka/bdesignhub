import React from "react";
import TwitterIcon from "assets/svg/ContactDetails/TwitterIcon.svg"
import WhatsappIcon from "assets/svg/ContactDetails/whatsapp-icon.svg";
import GmailIcon from "assets/svg/ContactDetails/gmail_icon.svg";

const ContactDetailsComponent = ({ backgroundColor }) => {
  return (
    <div
      className="contact-details"
      style={{ backgroundColor: backgroundColor }}
    >
      <div className="container">
        <div className="section-label">/ CONTACT</div>
        <div className="details">
          <h4>Kampala</h4>
          <p>11 Ggaba 8864, Kampala</p>
          <p>Bunga.</p>
          <h6>info@bdesignhub.com</h6>
        </div>
        <div className="icons">
          <a
            href="https://x.com/impixelsandcode"
            target="_blank"
            rel="noreferrer"
          >
            <img src={TwitterIcon} alt="X" />
          </a>
          <a href="https://wa.me/256753326280" target="_blank" rel="noreferrer noopener">
            <img src={WhatsappIcon} alt="X" />
          </a>
          <a>
            <img src={GmailIcon} alt="X" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactDetailsComponent;
