import React from "react";
import {
  FaArrowRight,
  FaChevronRight,
  FaCircleChevronRight,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ProductDesign from "assets/svg/ProductDesign.svg"
import SoftwareDev from "assets/svg/SoftwareDev.svg"
import CopyWriting from "assets/svg/CopyWriting.svg"

const ServicesComponent = () => {
  return (
    <div className="services-section">
      <div className="container">
        <div className="section-label-light">/ SERVICES</div>
        <div className="description">
          <h1 className="yellow-text-light heading-text">
            I can <span className="purple-text-light">help </span>you with{" "}
          </h1>
          <p className="paragraph-text description-text">
            Discover the full spectrum of services offered by B Design Hub.
          </p>
        </div>
        <div className="services">
          <div className="service">
            <LazyLoadImage src={ProductDesign} alt="" effect="blur" />
            <div className="card-details">
              <h4>Product Design</h4>
              <p className="paragraph-text">
                Product design service is all about turning your ideas into
                visually stunning and user-friendly products. Let your product
                stand out in the market.
              </p>
            </div>
          </div>
          <div className="service">
            <LazyLoadImage src={SoftwareDev} alt="" effect="blur" />
            <div className="card-details">
              <h4>Software Development</h4>
              <p className="paragraph-text">
                From initial concept to deployment, we employ the latest
                technologies and best practices to ensure your software is
                reliable and efficient.
              </p>
            </div>
          </div>
          <div className="service">
            <LazyLoadImage src={CopyWriting} alt="" effect="blur" />
            <div className="card-details">
              <h4>Copy Writing</h4>
              <p className="paragraph-text">
                Great design needs great content, and our copywriting service
                ensures your message is clear, compelling, and on-brand. Amplify
                the impact of your digital presence.
              </p>
            </div>
          </div>
          <div className="icon-link">
            <Link to="/services">
              <FaCircleChevronRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesComponent;
