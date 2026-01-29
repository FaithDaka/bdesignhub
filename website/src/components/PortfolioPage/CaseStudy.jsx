import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const CaseStudyCard = ({ title, tags, image, link }) => {
  return (
    <div className="case-study-card">
      <div className="image">
        <LazyLoadImage src={image} alt="" effect="blur" />
      </div>
      <div className="tags">
        {tags && tags.map((tag) => <div className="tag">{tag}</div>)}
      </div>
      <div className="title">
        <a
          href={`${link}`}
          rel="noopener noreferrer"
          target="_blank"
        >
          {title}
        </a>
      </div>
    </div>
  );
};

export default CaseStudyCard;
