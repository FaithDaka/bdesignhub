import React from "react";
import VisionImage from "assets/svg/AboutPage/VisionImage.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";

const VisionComponent = () => {
  return (
    <div className="company-vision mission-statement">
      <div className="container">
        <div className="banner">
          <h2 className="uppercase">our vision</h2>
        </div>
        <div className="content">
          <div className="image">
            <LazyLoadImage src={VisionImage} alt="vision" effect="blur"/>
          </div>
          <div className="vision">
            <h4>
              To push boundaries, challenge norms, and redefine what's possible
              in the digital realm.
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionComponent;
