import React from "react";
import { FaChevronRight, FaCircleChevronRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ProductDesign from "assets/svg/ServicesPage/ProductDesign.svg";
import SoftwareDev from "assets/svg/ServicesPage/Software.svg";
import CopyWriting from "assets/svg/CopyWriting.svg";

const ServicesComponent = () => {
  return (
    <div className="services-section">
      <div className="container">
        <div className="section-label">/ SERVICES FOR YOU</div>
        <div className="description">
          <h1 className="display-text">
            Create <span className="black-text-light">research-driven </span>
            digital products
          </h1>
          <p className="body-text">
            I enjoy working with clients and organisations whose objective is
            deploying accessible digital products using data-driven UX research,
            aesthetic inspirations, frontend engineering, and more. One of my
            services should be a good fit for your next project.
          </p>
          <Link to="/services">
            <button className="link-button">
              All Services <FaChevronRight />
            </button>
          </Link>
        </div>
        <div className="services">
          <div className="service">
            <LazyLoadImage src={ProductDesign} alt="" effect="blur" />
            <div className="card-details">
              <h4 className="heading-text">Product Design</h4>
              <p className="body-text">
                Product design service is all about turning your ideas into
                visually stunning and user-friendly products. Let your product
                stand out in the market.
              </p>
              <a
                href="https://www.behance.net/bfaithdaka"
                rel="noopener noreferrer"
                target="_blank"
              >
                <button className="primary-button">See projects</button>
              </a>
            </div>
          </div>
          <div className="service">
            <LazyLoadImage src={SoftwareDev} alt="" effect="blur" />
            <div className="card-details">
              <h4 className="heading-text">Software Development</h4>
              <p className="body-text">
                From initial concept to deployment, let your project employ the
                latest technologies and best practices to ensure your software
                is reliable and efficient.
              </p>
              <a
                href="https://github.com/FaithDaka"
                rel="noopener noreferrer"
                target="_blank"
              >
                <button className="primary-button">Github profile</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesComponent;
