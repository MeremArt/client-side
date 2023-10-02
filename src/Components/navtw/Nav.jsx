import React, { useState } from "react";
import "./Nav.css"; // Import the CSS file

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="nav-container">
        <div className="nav-flex-container">
          <div className="nav-logo">
            <img src="/images/wiz.png" alt="logo" />
          </div>
          <div className="nav-menu lg-visible">
            <a href="#">Pricing</a>
            <a href="#">About us</a>
            <a href="#">Demo</a>
            <a href="#">How it works</a>
          </div>
          <div className="nav-buttons lg-visible">
            <a href="/signin">Sign in</a>
            <a href="/signup">Sign up Free</a>
          </div>
          <div className="nav-mobile-button">
            <button
              id="menu-btn"
              className={`hamburger lg-hidden ${isOpen ? "open" : ""}`}
              type="button"
              onClick={toggleMenu}
            >
              <div className={`hamburger-top ${isOpen ? "open" : ""}`}></div>
              <div className={`hamburger-middle ${isOpen ? "open" : ""}`}></div>
              <div className={`hamburger-bottom ${isOpen ? "open" : ""}`}></div>
            </button>
          </div>
        </div>
        <div id="menu" className={`nav-mobile-menu ${isOpen ? "open" : ""}`}>
          <a href="#">Pricing</a>
          <a href="#">About us</a>
          <a href="#">Demo</a>
          <a href="/signin">Login</a>
          <a href="/signup">Sign up Free</a>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
