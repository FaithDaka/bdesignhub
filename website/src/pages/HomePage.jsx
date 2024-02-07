import React from "react";
import IconLogo from "assets/img/icon-logo.png";

const HomePage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "600px",
        textAlign: "center",
      }}
    >
      <div>
        <div>
          <img src={IconLogo} alt="" />
        </div>
        <div>
          <h1 style={{ color: "#4E1757" }}>
            This site is currently undergoing an overhaul...
          </h1>
        </div>
        <div>
          <h3 style={{ color: "#2d2d2d" }}>Exciting Looks coming up!</h3>
        </div>
        <div>
          <h5>
            For more info, send an email to:{" "}
            <a style={{ fontSize: "16px", color: "#8D0EA2" }}>
              info@bdesignhub.com
            </a>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
