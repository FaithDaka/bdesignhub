import React from "react";
import { FaArrowRight, FaChevronRight, FaCircleChevronRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ServicesComponent = () => {
  return (
    <div className="services-section">
      <div className="container">
        <div className="section-label">/ SECTION</div>
        <div className="description">
          <h1 className="yellow-text heading-text">
            Services to <span className="purple-text">Fuel </span>your{" "}
            <span className="purple-text">Success</span>
          </h1>
          <p className="paragraph-text">
            Discover the full spectrum of services offered by B Design Hub. We
            are passionate about helping our clients achieve their digital
            objectives through bespoke solutions in UX research, frontend
            engineering, and more. Browse our services to find the perfect fit
            for your project.
          </p>
        </div>
        <div className="services">
          <div className="service">
            <div className="card-label">
              <span className="chevrons">
                <FaChevronRight />
                <FaChevronRight />
              </span>
              <span className="card-label-text">Design</span>
            </div>
            <div className="card-details">
              <h4>Product Design</h4>
              <p className="paragraph-text">
                Product design service is all about turning your ideas into
                visually stunning and user-friendly products. Let your product stand out in the market.
              </p>
            </div>
            <div className="link-button cta">
              {" "}
              <span>Details</span> <FaArrowRight />
            </div>
          </div>
          <div className="service">
            <div className="card-label">
              <span className="chevrons">
                <FaChevronRight />
                <FaChevronRight />
              </span>
              <span className="card-label-text">Development</span>
            </div>
            <div className="card-details">
              <h4>Software Development</h4>
              <p className="paragraph-text">
                From initial concept to deployment, we employ the latest
                technologies and best practices to ensure your software is
                reliable and efficient.
              </p>
            </div>
            <div className="link-button cta">
              {" "}
              <span>Details</span> <FaArrowRight />
            </div>
          </div>
          <div className="service">
            <div className="card-label">
              <span className="chevrons">
                <FaChevronRight />
                <FaChevronRight />
              </span>
              <span className="card-label-text">Shipping</span>
            </div>
            <div className="card-details">
              <h4>Copy Writing, maintenance</h4>
              <p className="paragraph-text">
                Great design needs great content, and our copywriting service
                ensures your message is clear, compelling, and on-brand. Amplify the impact of your digital presence.
              </p>
            </div>
            <div className="link-button cta">
              {" "}
              <span>Details</span> <FaArrowRight />
            </div>
          </div>
          <div className="icon-link">
            <Link to="#">
              <FaCircleChevronRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesComponent;
