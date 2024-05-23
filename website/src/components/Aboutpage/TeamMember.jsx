import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import LinkedInIcon from "assets/svg/AboutPage/Team/Linkedin.svg";

const TeamMemberCard = ({ image, name, profession, linkedIn }) => {
  return (
    <div className="team-card">
      <div className="image">
        <LazyLoadImage src={image} alt="" effect="blur" />
      </div>
      <div className="desc">
        <div className="details">
          <h5>{name}</h5>
          <h6>{profession}</h6>
        </div>
        <div className="linkedIn">
          <a href={linkedIn} target="_blank" rel="noreferrer noopener">
            <img src={LinkedInIcon} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
