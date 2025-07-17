import React from 'react'
import { Link } from 'react-router-dom';
import MediaContext from 'assets/svg/AboutSection/media_context.svg'
import { FaChevronRight } from 'react-icons/fa6';

const AboutSectionComponent = () => {
  return (
    <div className="about-section">
      <div className="container">
        <div className="left-side">
          <div className="section-label">/ ABOUT</div>
          <div className="description">
            <h1 className="heading-text black-text font-weight-400">
              The <span className="black-text-light">Background, </span> The{" "}
              Herstory
            </h1>
            <p className="body-text">
              B Design Hub began as a pioneering endeavour dedicated to crafting
              intuitive digital experiences. Starting out my journey as a
              frontend engineer allowed me to fully integrate my technical
              knowledge within UI design. In this creative space, I have refined
              my skill and made it my mission to continuously bridge the gap
              between engineering and design.
            </p>
          </div>
          <div className="cta-link">
            <Link to="/about" className="link-button">
              <span>About the Hub</span>
              <FaChevronRight />
            </Link>
          </div>
        </div>
        <div className="right-side">
          <img src={MediaContext} alt="" />
        </div>
      </div>
    </div>
  );
}

export default AboutSectionComponent