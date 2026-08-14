import React from "react";
import { Link } from "react-router-dom";
import HeroImage from "assets/svg/HeroSection/HeroIllustration.svg";
import TwitterIcon from "assets/svg/HeroSection/TwitterIcon-white.svg";
import WhatsappIcon from "assets/svg/ContactDetails/whatsapp-icon.svg";
import GmailIcon from "assets/svg/ContactDetails/gmail_icon.svg";
import { FaChevronRight } from "react-icons/fa6";
import { LazyLoadImage } from "react-lazy-load-image-component";
import PixelGirl, { SpeechBubble } from "./PixelGirl";

const HeroSectionComponent = () => {
  return (
    <div className="hero-section">
      <div className="container">
        <div className="illustration">
          <div className="pixel-girl">
            <SpeechBubble
              text={"Hello There..."}
              className="mb-2 ml-[38%] w-max origin-bottom-left"
            />
            <PixelGirl />
          </div>
          <LazyLoadImage src={HeroImage} alt="" effect="blur" />
        </div>
        <div className="hero-title">
          <span>B DESIGN HUB</span>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionComponent;
