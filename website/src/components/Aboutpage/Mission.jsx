import React from 'react';
import MissionImage from "assets/svg/AboutPage/MissionImage.svg"
import { LazyLoadImage } from "react-lazy-load-image-component";

const MissionComponent = () => {
  return (
    <div className="mission-statement">
      <div className="container">
        <div className="banner">
          <h2 className="uppercase">OUR Mission</h2>
        </div>
        <div className="content">
          <div className="mission">
            <h4>
              To blend cutting-edge technology with intuitive design, crafting
              seamless digital experiences that inspire and engage.
            </h4>
          </div>
          <div className="image">
            <LazyLoadImage src={MissionImage} alt="Mission" effect="blur"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MissionComponent