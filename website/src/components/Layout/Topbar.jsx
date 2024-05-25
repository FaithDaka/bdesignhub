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
            <Link to="/about"> About</Link>
          </div>
          <div className="navlink">
            <Link to="/services"> Services </Link>
          </div>
          <div className="navlink">
            <Link to="/portfolio"> Portfolio</Link>
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
