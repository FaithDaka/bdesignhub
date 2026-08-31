import React from "react";
import HeroImage from "assets/img/HeroSection/hero-img.avif";
import PixelGirl, { SpeechBubble } from "./PixelGirl";

const HeroSectionComponent = () => {
  return (
    <div className="hero-section bg-subtle-grid">
      <div className="container">
        <div className="illustration">
          <div className="pixel-girl">
            <SpeechBubble
              text={"Hello There..."}
              className="mb-2 ml-[38%] w-max origin-bottom-left"
            />
            <PixelGirl />
          </div>
          <img
            src={HeroImage}
            fetchpriority="high"
            alt=""
            width="1520"
            height="900"
            loading="eager"
            decoding="async"
          />
        </div>
        <div className="hero-title">
          <span>B DESIGN HUB</span>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionComponent;
