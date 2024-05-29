import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

const ServiceComponent = ({
  isRowReverse,
  image,
  number,
  heading,
  paragraph,
  showLink,
  linkText,
  link
}) => {
  return (
    <div className="service">
      <div className={`wrapper ${isRowReverse ? "container-reverse" : "container"}`}>
        <div className="image">
          <LazyLoadImage src={image} alt={number} effect="blur"/>
        </div>
        <div className="content">
          <h6 className="number">{number}</h6>
          <h2 className="heading">{heading}</h2>
          <p className="paragraph-text" dangerouslySetInnerHTML={{__html: paragraph}}></p>
          {showLink ? (
            <Link to={`${link}`}>
              <button className="link-button">
                {linkText} <FaArrowRight />
              </button>
            </Link>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceComponent;
