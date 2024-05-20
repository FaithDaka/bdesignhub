import React from "react";
import { Link } from "react-router-dom";

const TopBarComponent = () => {
  return (
    <div className="Topbar">
      <div className="container">
        <div className="logo-section">
          <Link to="/">
            <div className="logo-div"></div>
          </Link>
        </div>
        <div className="navlinks">
          <div className="navlink">
            <Link to="#"> About</Link>
          </div>
          <div className="navlink">
            <Link to="#"> Services </Link>
          </div>
          <div className="navlink">
            <Link to="#"> Portfolio</Link>
          </div>
          <div className="navlink">
            <Link to="#"> Consultation</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBarComponent;
