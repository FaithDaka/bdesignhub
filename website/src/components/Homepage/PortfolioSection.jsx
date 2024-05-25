import React from 'react';
import TopImage from "assets/svg/Portfolio Section/Accessibility.svg"
import LeftImage from "assets/svg/Portfolio Section/Aesthetics.svg";
import RightImage from "assets/svg/Portfolio Section/Responsive.svg";
import ListImage from "assets/svg/Portfolio Section/Rightllustration.svg";
import { Link } from 'react-router-dom';

const PortfolioSectionComponent = () => {
  return (
    <div className="portfolio-section">
      <div className="container">
        <div className="section-label">/ PORTFOLIO</div>
        <div className="content">
          <div className="illustrations">
            <div className='top-image'><img src={TopImage} alt="" /></div>
            <div className='bottom-images'>
              <img src={LeftImage} alt="" />
              <img src={RightImage} alt=""/>
            </div>
          </div>
          <div className='portfolio-list'>
            <Link to="/portfolio">
            <img src={ListImage} alt=''/>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioSectionComponent