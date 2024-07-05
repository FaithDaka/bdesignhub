import React from 'react';
import ProjectOne from "assets/svg/Portfolio Section/ProjectOne.svg"
import ProjectTwo from "assets/svg/Portfolio Section/ProjectTwo.svg";
import ProjectThree from "assets/svg/Portfolio Section/ProjectThree.svg";
import ProjectFour from "assets/svg/Portfolio Section/ProjectFour.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";

const PortfolioSectionComponent = () => {
  return (
    <div className="portfolio-section">
      <div className="container">
        <div className="section-heading">
          <h1>
            <span className="light">Design </span>
            <span className="dark">Work</span>
          </h1>
        </div>
        <div className="content">
          <div className="row">
            <div className="project">
              <a>
                <LazyLoadImage src={ProjectOne} alt="" effect="blur" />
              </a>
            </div>
            <div className="project">
              <a>
                <LazyLoadImage src={ProjectTwo} alt="" effect="blur" />
              </a>
            </div>
          </div>
          <div className="row">
            <div className="project">
              <a>
                <LazyLoadImage src={ProjectThree} alt="" effect="blur" />
              </a>
            </div>
            <div className="project">
              <a>
                <LazyLoadImage src={ProjectFour} alt="" effect="blur" />
              </a>
            </div>
          </div>
        </div>
        <div className="behance">
          <h4 className='description-text'>More projects and case studies on my Behance profile</h4>
          <button className="primary-button">Follow on Behance</button>
        </div>
      </div>
    </div>
  );
}

export default PortfolioSectionComponent