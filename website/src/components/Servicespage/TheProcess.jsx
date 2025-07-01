import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ProcessImage from "assets/svg/ServicesPage/CompleteProcess.svg";

const TheProcessServiceComponent = () => {
  return (
    <div className="the-process">
      <div className="container">
        <div className="section-label">/ THE PROCESS</div>
        <div className="content">
          <h2>The Process</h2>
          {/* <p className="paragraph-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum
            nihil repellat reiciendis ratione sint voluptatibus nostrum adipisci
            error sit veniam laudantium sequi necessitatibus quia non
            perferendis dolorem, aut sed dignissimos ea voluptas?
          </p> */}
          <div className="image">
            <LazyLoadImage src={ProcessImage} effect="blur" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheProcessServiceComponent;
