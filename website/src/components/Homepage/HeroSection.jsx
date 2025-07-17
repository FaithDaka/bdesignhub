import React from "react";
import { Link } from "react-router-dom";
import HeroImage from "assets/svg/HeroSection/HeroIllustration.svg";
import TwitterIcon from "assets/svg/HeroSection/TwitterIcon-white.svg";
import WhatsappIcon from "assets/svg/ContactDetails/whatsapp-icon.svg";
import GmailIcon from "assets/svg/ContactDetails/gmail_icon.svg";
import { FaChevronRight } from "react-icons/fa6";
import { LazyLoadImage } from "react-lazy-load-image-component";

const HeroSectionComponent = () => {
  return (
    <div className="hero-section">
      <div className="container">
        <div className="intro">
          <div className="intro-title">
            {/* <span className="label">B DESIGN HUB</span> */}
            <h1 className="display-text">
              I'm a <span className="black-text-light">digital</span> design{" "}
              <br /> engineer
            </h1>
            <p className="description-text">
              I use technical expertise to design accessible interfaces that
              make <span className="black-text font-weight-400">digital products usable for everyone.</span>
            </p>
          </div>
          <div className="cta-section">
            <Link to="/portfolio">
              <button className="outlined-primary-button">
                My Portfolio {" "}<FaChevronRight />
              </button>
            </Link>
          </div>
        </div>
        <div className="illustration">
          <LazyLoadImage src={HeroImage} alt="" effect="blur" />
        </div>
      </div>
    </div>
  );
};

export default HeroSectionComponent;
