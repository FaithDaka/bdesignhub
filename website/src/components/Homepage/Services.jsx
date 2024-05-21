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
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit at culpa rerum expedita numquam, ipsam quod! Aliquam
            quia beatae nostrum itaque in maiores esse doloribus ut doloremque
            recusandae, consequuntur laboriosam vero numquam. Tempora dolor
            excepturi eos. Quaerat officia ipsam repellendus, error fugit
            aliquam cupiditate, rem mollitia nulla exercitationem voluptates
            minima. Architecto, ex!
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
                delectus ea veritatis neque magnam ab.
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
                delectus ea veritatis neque magnam ab.
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
                delectus ea veritatis neque magnam ab.
              </p>
            </div>
            <div className="link-button cta">
              {" "}
              <span>Details</span> <FaArrowRight />
            </div>
          </div>
          <div className="icon-link">
            <Link to="#">
            <FaCircleChevronRight/>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesComponent;
