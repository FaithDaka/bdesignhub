import React from "react";
import LogoIcon from "assets/img/logo.png";
import { Link } from "react-router-dom";

const TopBarComponent = () => {
  return (
    <div className="Topbar">
      <div className="container">
        <Link to="/">
          <div className="logo-div">
            <img
              src={LogoIcon}
              alt="B Design Hub Logo"
              width={100}
            />
            <span className="title">
              <div>DESIGN</div>
              <div>HUB</div>
            </span>
          </div>
        </Link>
        <div className="nav-div">
          <div className="placeholder"></div>
        </div>
        <div className="email-div">
          <a href="mailto:info@bdesignhub.com?subject=INQUIRY">info@bdesignhub.com</a>
        </div>
      </div>
    </div>
  );
};

export default TopBarComponent;
