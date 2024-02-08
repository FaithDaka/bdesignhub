import React from "react";

const HeroSectionComponent = () => {
  return (
    <div className="hero-section">
      <div className="container">
        <div className="intro">
          <div className="intro-title">
            <h1>
              Crafting your <span className="purple-text">Vision</span> into {" "}
              <span className="purple-text">Digital</span> Reality
            </h1>
            <h2>
              At B DesignHub, your imagination is our innovation. <br />
              We get you from ideation to design to launch!
            </h2>
            <div className="cta-button">
              <button>Get Started {"-->"}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionComponent;
