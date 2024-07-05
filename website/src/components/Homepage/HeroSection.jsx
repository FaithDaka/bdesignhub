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
        <div className="illustration">
          <LazyLoadImage src={HeroImage} alt="" effect="blur" />
        </div>
        <div className="intro">
          <div className="intro-title">
            <span className="label">B DESIGN HUB</span>
            <h1>
              Crafting your <span className="purple-text-light">Vision</span>{" "}
              into <span className="purple-text-light">Digital</span> Reality
            </h1>
            <h2 className="description-text">
              With a blend of creativity and technical expertise, I specialize
              in guiding your ideas from conception to launch
            </h2>
          </div>
          <div className="cta-section">
            <div className="icons">
              <a
                href="https://x.com/impixelsandcode"
                target="_blank"
                rel="noreferrer"
              >
                <img src={TwitterIcon} alt="X" />
              </a>
              <a
                href="https://wa.me/256753326280"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src={WhatsappIcon} alt="whatsapp" />
              </a>
              <a href="mailto:faithux.co@gmail.com?subject=INQUIRY FROM WEBSITE">
                <img src={GmailIcon} alt="gmail" />
              </a>
            </div>
            <Link to="/portfolio">
              <button className="primary-button">
                My Portfolio <FaChevronRight />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionComponent;
