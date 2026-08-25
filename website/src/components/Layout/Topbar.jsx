import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "util/cn";

const NAV = [
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#work" },
  { label: "Services", href: "#services" },
];

const TopBarComponent = ({ onEmailClick }) => {
  const [date, setDate] = useState(new Date());
  const [scrolled, setScrolled] = useState(false);

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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 560);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={cn("Topbar", scrolled ? "scroll-bg" : "")}>
      <div className="container">
        <div className="logo-section">
          <Link to="/">
            <div className="logo-div"></div>
            <div className="hidden-preload"></div>
          </Link>
        </div>
        <div className="navlinks">
          {NAV.map((item) => (
            <div className="navlink">
              <a key={item.label} href={item.href}>{item.label}</a>
            </div>
          ))}
        </div>
        <div className="avail">
          <div className="label">
            {isAvailable ? (
              <span className="time online">
                AVAIL <span className="dot animate-pulse-dot-green"></span>{" "}
                <span>{formattedTime}</span>
              </span>
            ) : (
              <span className="time offline">
                UNAVAIL <span className="dot"></span>{" "}
                <span>{formattedTime}</span>
              </span>
            )}
            <span></span>
          </div>
          <div className="email">
            <button
              type="button"
              onClick={onEmailClick}
              className="link-button-light email-link"
              title="Send an email"
            >
              <span className="border-b border-transparent transition group-hover:border-white/50">
                faithux.co@gmail.com
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBarComponent;
