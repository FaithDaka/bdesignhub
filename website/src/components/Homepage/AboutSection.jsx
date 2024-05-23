import React from 'react'
import { Link } from 'react-router-dom';
import MediaContext from 'assets/svg/AboutSection/media_context.svg'
import { FaArrowRight } from 'react-icons/fa6';

const AboutSectionComponent = () => {
  return (
    <div className="about-section">
      <div className="container">
        <div className="left-side">
          <div className="section-label">/ ABOUT</div>
          <div className="description">
            <h1 className="yellow-text font-weight-400">
              The <span className="purple-text">Background, </span> The{" "}
              <span className="purple-text">Herstory</span>
            </h1>
            <p className="paragraph-text">
              Founded in 2023, B Design Hub is proudly led by a visionary
              frontend engineer who embarked on a mission to seamlessly
              integrate UX research into the realm of product engineering. What
              began as a pioneering endeavour has blossomed into a venture
              dedicated to crafting intuitive digital experiences. We marry
              innovation with empathy, ensuring that every design decision
              resonates with the end user.{" "}
            </p>
          </div>
          <div className="cta-link">
            <Link to="/about" className="link-button">
              Who we are
            </Link>
            <FaArrowRight />
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