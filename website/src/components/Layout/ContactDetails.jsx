import React from "react";
import TwitterIcon from "assets/svg/HeroSection/TwitterIcon-white.svg";
import WhatsappIcon from "assets/svg/ContactDetails/whatsapp-icon.svg";
import GmailIcon from "assets/svg/ContactDetails/gmail_icon.svg";
import { Link } from "react-router-dom";

const ContactDetailsComponent = ({ backgroundColor }) => {
  return (
    <div
      className="contact-details"
      style={{ backgroundColor: backgroundColor }}
    >
      <div className="container">
        <div className="section-label">/ CONTACT</div>
        <div className="details">
          <p className="body-text-italic underline">
            <a
              href="mailto:faithux.co@gmail.com?subject=CONTACT FROM WEBSITE"
              rel="noopener noreferrer"
            >
              faithux.co@gmail.com
            </a>
          </p>
          <p className="body-text-light">11 Ggaba 8864, Bunga</p>
          <p className="body-text-bold">Kampala</p>
        </div>
        <div className="icons">
          {/* <a
            href="https://x.com/impixelsandcode"
            target="_blank"
            rel="noreferrer"
          >
            <img src={TwitterIcon} alt="X" />
          </a> */}
          <a href="mailto:faithux.co@gmail.com?subject=INQUIRY FROM WEBSITE">
            <img src={GmailIcon} alt="gmail" />
          </a>
          <a
            href="https://wa.me/256753326280"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src={WhatsappIcon} alt="whatsapp" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactDetailsComponent;
