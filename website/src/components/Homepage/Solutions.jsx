import React from 'react';
import ChooseUsImage from "assets/img/choose-us.jpeg"
import { FaRegCircleCheck } from "react-icons/fa6";


const SolutionsComponent = () => {
  return (
    <div className="about-section solutions-section">
      <div className="container">
        <div className="image-div">
          <img
            src={ChooseUsImage}
            alt="Woman designing user interface svg illustration"
            width={600}
          />
        </div>
        <div className="text-div">
          <h2 className="title-lato title-text">
            {" "}
            Why Choose <br />B Design Hub{" "}
          </h2>
          <div className="list">
            <div className="item">
              <FaRegCircleCheck />
              <span>Customer-centric Approach</span>
            </div>
            <div className="item">
              <FaRegCircleCheck />
              <span>All-in-One Services</span>
            </div>
            <div className="item">
              <FaRegCircleCheck />
              <span>Innovation & Empowerment</span>
            </div>
            <div className="item">
              <FaRegCircleCheck />
              <span>Unmatched Industry Expertise</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SolutionsComponent