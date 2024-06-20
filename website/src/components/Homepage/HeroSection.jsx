import React from "react";
import { Link } from "react-router-dom";

const HeroSectionComponent = () => {
  return (
    <div className="hero-section">
      <div className="container">
        <div className="intro">
          <div className="intro-title">
            <h1>
              Crafting your <span className="purple-text-dark">Vision</span>{" "}
              into <span className="purple-text-dark">Digital</span> Reality
            </h1>
            <h2>
              With a blend of creativity and technical expertise, we specialize
              in guiding your ideas from conception to realization. Let us be
              your partner in innovation, from the initial spark of inspiration
              to the polished launch.
            </h2>
            <div className="cta-buttons">
              <Link to='/contact'><button className="primary-button">Get in Touch</button></Link>
              <Link to='/about'><button className="link-button">Learn More</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionComponent;
