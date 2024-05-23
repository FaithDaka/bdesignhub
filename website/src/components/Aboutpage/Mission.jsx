import React from 'react';
import MissionImage from "assets/svg/AboutPage/MissionImage.svg"

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
            <img src={MissionImage} alt="Mission" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MissionComponent