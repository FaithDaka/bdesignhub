import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TopBarComponent = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const UG = "Africa/Nairobi";
  const hour = parseInt(
    date.toLocaleString("en-US", {
      timeZone: UG,
      hour: "numeric",
      hour12: false,
    }),
    10,
  );
  const formattedTime = date.toLocaleTimeString("en-US", {
    timeZone: UG,
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  const AVAILABLE_FROM = 8; // 8 AM
  const AVAILABLE_TO = 17; // UPTO 6PM

  const isAvailable = hour >= AVAILABLE_FROM && hour <= AVAILABLE_TO;

  return (
    <div className="Topbar">
      <div className="container">
        <div className="logo-section">
          <Link to="/">
            <div className="logo-div"></div>
            <div className="hidden-preload"></div>
          </Link>
        </div>
        <div className="navlinks">
          <div className="navlink">
            <Link to="/about"> About</Link>
          </div>
          <div className="navlink">
            <Link to="/portfolio"> Portfolio</Link>
          </div>
          <div className="navlink">
            <Link to="/services"> Services </Link>
          </div>
          {/* <div className="navlink">
            <Link to="/contact"> Consultation</Link>
          </div> */}
        </div>
        <div className="avail">
          <div className="label">
            {isAvailable ? (
              <span className="time online">
                AVAIL <span className="dot"></span> <span>{formattedTime}</span>
              </span>
            ) : (
              <span className="time offline">
                UNAVAIL <span className="dot"></span> <span>{formattedTime}</span>
              </span>
            )}
            <span></span>
          </div>
          <div className="email">faithux.co@gmail.com</div>
        </div>
      </div>
    </div>
  );
};

export default TopBarComponent;
